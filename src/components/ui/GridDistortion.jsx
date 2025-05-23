import { useRef, useEffect } from 'react';
import * as THREE from 'three';
import { throttle } from 'lodash';

const vertexShader = `
uniform float time;
varying vec2 vUv;
varying vec3 vPosition;

void main() {
  vUv = uv;
  vPosition = position;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}`;

const fragmentShader = `
uniform sampler2D uDataTexture;
uniform sampler2D uTexture;
uniform vec2 resolution;
varying vec2 vUv;

void main() {
  vec2 uv = vUv;
  vec4 offset = texture2D(uDataTexture, vUv);
  gl_FragColor = texture2D(uTexture, uv - 0.02 * offset.rg);
}`;

const GridDistortion = ({
  grid = 15,
  mouse = 0.1,
  strength = 0.15,
  relaxation = 0.9,
  imageSrc,
  className = '',
}) => {
  const containerRef = useRef(null);
  const imageAspectRef = useRef(1);
  const cameraRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const container = containerRef.current;
    container.innerHTML = ''; // Clear container

    const scene = new THREE.Scene();
    const renderer = new THREE.WebGLRenderer({ alpha: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));
    container.appendChild(renderer.domElement);

    const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, -1000, 1000);
    camera.position.z = 2;
    cameraRef.current = camera;

    const uniforms = {
      time: { value: 0 },
      resolution: { value: new THREE.Vector2() },
      uTexture: { value: null },
      uDataTexture: { value: null },
    };

    const textureLoader = new THREE.TextureLoader();
    textureLoader.load(
      imageSrc,
      (texture) => {
        texture.minFilter = THREE.LinearFilter;
        texture.generateMipmaps = false;
        imageAspectRef.current = texture.image.width / texture.image.height;
        uniforms.uTexture.value = texture;
        handleResize();
      },
      undefined,
      (error) => {
        console.error('Failed to load texture:', error);
      }
    );

    const size = Math.min(Math.max(1, Math.floor(grid)), 64); // Cap grid size
    const data = new Float32Array(4 * size * size).fill(0);
    const dataTexture = new THREE.DataTexture(
      data,
      size,
      size,
      THREE.RGBAFormat,
      THREE.FloatType
    );
    dataTexture.needsUpdate = true;
    uniforms.uDataTexture.value = dataTexture;

    const material = new THREE.ShaderMaterial({
      side: THREE.DoubleSide,
      uniforms,
      vertexShader,
      fragmentShader,
    });
    const geometry = new THREE.PlaneGeometry(1, 1, size - 1, size - 1);
    const plane = new THREE.Mesh(geometry, material);
    scene.add(plane);

    const handleResize = () => {
      const width = container.offsetWidth;
      const height = container.offsetHeight;
      if (width === 0 || height === 0) return; // Skip if container is hidden
      const containerAspect = width / height;
      const imageAspect = imageAspectRef.current;

      renderer.setSize(width, height);

      const scale = Math.max(containerAspect / imageAspect, 1);
      plane.scale.set(imageAspect * scale, scale, 1);

      const frustumHeight = 1;
      const frustumWidth = frustumHeight * containerAspect;
      camera.left = -frustumWidth / 2;
      camera.right = frustumWidth / 2;
      camera.top = frustumHeight / 2;
      camera.bottom = -frustumHeight / 2;
      camera.updateProjectionMatrix();

      uniforms.resolution.value.set(width, height);
    };

    const mouseState = { x: 0, y: 0, prevX: 0, prevY: 0, vX: 0, vY: 0 };
    const handleMouseMove = throttle((e) => {
      const rect = container.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width;
      const y = 1 - (e.clientY - rect.top) / rect.height;
      mouseState.vX = x - mouseState.prevX;
      mouseState.vY = y - mouseState.prevY;
      Object.assign(mouseState, { x, y, prevX: x, prevY: y });
    }, 16);

    const handleMouseLeave = () => {
      data.fill(0);
      dataTexture.needsUpdate = true;
      Object.assign(mouseState, { x: 0, y: 0, prevX: 0, prevY: 0, vX: 0, vY: 0 });
    };

    container.addEventListener('mousemove', handleMouseMove);
    container.addEventListener('mouseleave', handleMouseLeave);
    window.addEventListener('resize', handleResize);
    handleResize();

    let isAnimating = true;
    const animate = () => {
      if (!isAnimating) return;
      requestAnimationFrame(animate);
      uniforms.time.value += 0.05;

      const data = dataTexture.image.data;
      for (let i = 0; i < size * size; i++) {
        data[i * 4] *= relaxation;
        data[i * 4 + 1] *= relaxation;
      }

      const gridMouseX = size * mouseState.x;
      const gridMouseY = size * mouseState.y;
      const maxDist = size * mouse;

      for (let i = 0; i < size; i++) {
        for (let j = 0; j < size; j++) {
          const distance = Math.pow(gridMouseX - i, 2) + Math.pow(gridMouseY - j, 2);
          if (distance < maxDist * maxDist) {
            const index = 4 * (i + size * j);
            const power = Math.min(maxDist / Math.sqrt(distance), 10);
            data[index] += strength * 100 * mouseState.vX * power;
            data[index + 1] -= strength * 100 * mouseState.vY * power;
          }
        }
      }

      dataTexture.needsUpdate = true;
      renderer.render(scene, camera);
    };

    const handleMouseEnter = () => {
      if (!isAnimating) {
        isAnimating = true;
        animate();
      }
    };

    renderer.domElement.addEventListener('webglcontextlost', (event) => {
      event.preventDefault();
      console.warn('WebGL context lost');
      isAnimating = false;
    });
    renderer.domElement.addEventListener('webglcontextrestored', () => {
      console.log('WebGL context restored');
      dataTexture.needsUpdate = true;
      if (uniforms.uTexture.value) uniforms.uTexture.value.needsUpdate = true;
      isAnimating = true;
      animate();
    });

    container.addEventListener('mouseenter', handleMouseEnter);
    animate();

    return () => {
      container.removeEventListener('mousemove', handleMouseMove);
      container.removeEventListener('mouseleave', handleMouseLeave);
      container.removeEventListener('mouseenter', handleMouseEnter);
      window.removeEventListener('resize', handleResize);
      scene.remove(plane);
      renderer.dispose();
      renderer.forceContextLoss();
      geometry.dispose();
      material.dispose();
      dataTexture.dispose();
      if (uniforms.uTexture.value) uniforms.uTexture.value.dispose();
      container.innerHTML = '';
    };
  }, [grid, mouse, strength, relaxation, imageSrc]);

  return (
    <div
      ref={containerRef}
      className={`w-full h-full overflow-hidden ${className}`}
      aria-label="Interactive image distortion effect"
    />
  );
};

export default GridDistortion;