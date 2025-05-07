import React from "react";
import { blogs } from "../blogs";
import BottomBar from "../components/BottomBar";
import ArrowIcon from "../components/svgs/ArrowIcon";
import { Link } from "react-router-dom";
const Blogs = () => {
  return(
    <>
      <section className="w-full h-auto max-w-[640px] mx-auto flex flex-col gap-8 px-6 sm:px-0 py-8">
        {blogs.map((blog)=>(
          <Link to={`/blog/${blog?.id}`} key={blog?.id} className="w-full max-h-80 h-max bg-white/10 grid-border">
            <img src={blog?.image} alt={blog?.title} className="w-full h-[130px] object-cover object-center inline-block"/>
            <aside className="px-3 md:px-5 pt-5 pb-6">
              <p className="text-base sm:text-lg font-light">
                {blog?.description}
              </p>

              <div className="flex items-center justify-between w-full mt-4">
                <div className="flex gap-2 items-center">
                  <span class="relative flex size-2">
                    <span class="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary/90 opacity-75"></span>
                    <span class="relative inline-flex size-2 rounded-full bg-primary"></span>
                  </span>
                  <p className="text-xs">{blog?.duration}m read</p>
                </div>

                <ArrowIcon className="h-4 w-auto fill-primary" />
              </div>
            </aside>
          </Link>
        ))}
      </section>
      <BottomBar />
    </>
  );
};

export default Blogs;

