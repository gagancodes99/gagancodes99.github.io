import React, { useEffect, useState } from 'react'
import BottomBar from '../components/BottomBar'
import { CodeBlock } from '../components/ui/code-block'
import { blogs } from '../blogs'
import { useLocation } from 'react-router-dom'
const Blog = () => {
  const {pathname} = useLocation()
  const [currBlog, setBlog] = useState({})
  const [,blogPre, blogId] = pathname.split('/')
  useEffect(()=>{
    const blog = blogs.find(blog => blog.id === blogId)
    setBlog(blog)
  },[pathname])
  const handleCopyUrl = () => {
  const currentUrl = window.location.href;
  navigator.clipboard.writeText(currentUrl)
    .then(() => {
      alert("Page URL copied to clipboard!");
    })
    .catch((err) => {
      console.error("Failed to copy URL: ", err);
    });
};

  return (
    <>
      <section className="w-full h-auto max-w-[640px] mx-auto flex flex-col px-6 sm:px-0 py-8 mt-4">
        <figure className='w-full h-40 overflow-hidden'>
          <img src={currBlog?.image} alt={currBlog?.title} className='block h-full w-full object-cover '/>
        </figure>
        <header className='text-[44px] leading-[44px] ff-aalto text-primary tracking-wide mt-8'>
          {currBlog?.title}
        </header>

        <article className='blog-content'>
          {currBlog?.content?.map((cont, idx)=>(
            <aside key={idx}>
              <h3 className='text-lg sm:text-xl font-semibold mt-6'>{cont?.header}</h3>
              {cont.type == 'text' ? 
              <p className='mt-3 text-base sm:text-lg font-light text-white/80'>
                {cont?.data}
              </p>
               : 
               <div className='mt-6'>
                 <CodeBlock
                   language="jsx"
                   // filename="Debouncing.jsx"
                   highlightLines={[2]}
                   code={cont?.data}
                 />
               </div>
              }
            </aside>
          ))}
        </article>

        <footer>
          <h3 className='text-lg sm:text-xl font-semibold mt-6'>Call to Action</h3>
          <p className='mt-3 text-base sm:text-lg font-light text-white/80'>
            If you found this tutorial helpful, please share it with your fellow developers.
          </p>
          <h3 className='text-lg sm:text-xl font-semibold mt-6'>Source Code: <span className='text-primary cursor-pointer'  onClick={handleCopyUrl}>
            LINK</span></h3>

        </footer>
      </section>
      <BottomBar />
    </>
  )
}

export default Blog