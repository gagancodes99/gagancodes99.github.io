import React, { useState, useEffect, useRef } from "react";
import { Gravity, MatterBody } from "../components/ui/gravity";
import LinearBack from "./svgs/LinearBack";

export function FloatingCard({ projects }) {
  const floatVal = [
    { x: "30%", y: "10%" },
    { x: "20%", y: "30%" },
    { x: "40%", y: "20%" },
    { x: "75%", y: "10%" },
    { x: "80%", y: "20%" },
    { x: "50%", y: "10%" },
  ];
  const getRandomValueSet = () => {
    const randomIndex = Math.floor(Math.random() * floatVal.length);
    return randomIndex;
  };

  const containerRef = useRef(null);
  const [containerHeight, setContainerHeight] = useState(0);

  const updateHeight = () => {
    if (containerRef.current) {
      setContainerHeight(containerRef.current.clientHeight);
    }
  };

  useEffect(() => {
    updateHeight();
    window.addEventListener("resize", updateHeight);
    return () => {
      window.removeEventListener("resize", updateHeight);
    };
  }, [projects]);

  return (
    <div
      ref={containerRef}
      style={{ height: containerHeight ? `${containerHeight}px` : "auto" }}
      className="w-full min-h-[220px] h-full flex flex-col relative ff-aalto tracking-wider overflow-hidden"
    >
      <Gravity gravity={{ x: 0, y: 1 }} className="w-full h-full">
        {projects?.map((pro, idx) => {
          const randomIndex = getRandomValueSet();
          return (
            <MatterBody
              key={idx}
              matterBodyOptions={{ friction: 0.5, restitution: 0.2 }}
              x={floatVal[randomIndex]?.x}
              y={floatVal[randomIndex]?.y}
            >
              <div className="text-2xl sm:text-3xl bg-dark text-primary hover:cursor-pointer px-8 py-4 relative h-10  w-max grid place-content-center">
                <LinearBack className="absolute h-11 w-full inset-0 z-0" />
                <p className="relative z-[1]">{pro}</p>
              </div>
            </MatterBody>
          );
        })}
      </Gravity>
    </div>
  );
}
