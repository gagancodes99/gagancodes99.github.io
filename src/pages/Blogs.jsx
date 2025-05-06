import React from "react";
import { blogs } from "../blogs";
import BottomBar from "../components/BottomBar";
const Blogs = () => {
  return(
    <>
      <section className="w-full h-auto max-w-[640px] mx-auto flex flex-col gap-8 py-8">
        {blogs.map((blog)=>(
          <article key={blog?.id} className="w-full h-80 bg-white/50">
            
          </article>
        ))}
      </section>
      <BottomBar />
    </>
  );
};

export default Blogs;

