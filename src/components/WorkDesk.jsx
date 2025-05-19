import React from 'react'
import BottomBar from './BottomBar'
import ChevronIcon from './svgs/ChevronIcon'
import GridDistortion from './ui/GridDistortion'
import ArrowIcon from './svgs/ArrowIcon'
import { FloatingCard } from './FloatingCard'
import { Link } from 'react-router-dom'
const WorkDesk = ({projects, handleCurrProject, currProject}) => {
  return (
    <section className='h-full grid grid-cols-12'>
    <article className='col-span-5 relative h-full'>
      <aside className='p-6'>
        <a 
          href={projects[currProject]?.url} target='_blank'
          className='group ff-aalto text-white/90 text-4xl xl:text-5xl 2xl:text-6xl tracking-[1px] flex flex-row items-center gap-2 uppercase hover:text-primary duration-150 transition-all'
        >
          <span className='group-hover:text-primary duration-150 transition-all'>
            {projects[currProject]?.title}
          </span>
          <ArrowIcon className='h-5 fill-white/90 group-hover:fill-primary duration-150 transition-all -rotate-45 group-hover:rotate-[-50deg]' />
        </a>

        <p className='text-white/90 text-base xl:text-lg 2xl:text-2xl font-light mt-4'>
          {projects[currProject]?.smallDescription}
        </p>

      </aside>
      <article className='pb-0'>
        <h1 className='text-4xl xl:text-5xl 2xl:text-6xl tacking-[1px] ff-aalto relative pl-6 tracking-wide'> TOOLS USED</h1>
        <ul className='list-outside pt-2 font-light text-white/90 text-base xl:text-xl'>
           {/* <FloatingCard  projects={projects[currProject]?.tags}/> */}
           {projects[currProject]?.tags.map((tag, idx)=>(
              <li key={idx} className='py-2 2xl:py-3 w-full bg-black hover:bg-primary text-primary hover:text-white/90 duration-150 transition-all ff-aalto text-4xl 2xl:text-6xl flex items-center px-8 tracking-wide'>
                {tag}
              </li>
           ))}
        </ul>
      </article>

      <article className='absolute w-full h-16 grid grid-cols-12 grid-border !border-x-0 !border-b-0 bottom-0 bg-black'>
          <button onClick={()=>handleCurrProject(currProject-1)} className='col-span-4 grid place-content-center grid-border !border-y-0 !border-l-0'>
            <ArrowIcon className=' w-6 fill-white/90 rotate-180 ' />
          </button>

          <button onClick={()=>handleCurrProject(currProject+1)} className='col-span-4 grid place-content-center grid-border !border-y-0 text-4xl ff-aalto tracking-wide text-white/90'>
            Know More
          </button>
          <button onClick={()=>handleCurrProject(currProject+1)} className='col-span-4 grid place-content-center grid-border !border-y-0 !border-r-0'>
          <ArrowIcon className='w-6 fill-white/90' />
        </button>
      </article>
    </article>


    <article className='col-span-7 flex flex-col items-start'>
      <aside className='h-full w-full grid-border !border-b-0 !border-t-0 !border-r-0 flex items-center justify-center relative'>
        <GridDistortion
          imageSrc={projects[currProject]?.imageUrl}
          grid={10}
          mouse={0.25}
          strength={0.15}
          relaxation={0.9}
          className="custom-class z-0"
        />
      </aside>
    </article>
    <BottomBar />  

  </section>
  )
}

export default WorkDesk