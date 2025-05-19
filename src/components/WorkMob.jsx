import React from 'react'
import BottomBar from './BottomBar'
import ArrowIcon from './svgs/ArrowIcon'
import LinearBack from './svgs/LinearBack'
const WorkMob = ({projects}) => {
  return (
    <section className="home-mob-container">
        <div className=' max-w-md mx-auto flex flex-col items-center justify-center gap-8 pt-8 pb-8'>

            {projects?.map((pro, idx)=>{
                return(
                    <div key={idx}>
                        <aside className='px-6 pb-0 pt-4 flex flex-col items-center justify-center gap-5' key={idx}>
                            <div className='w-full aspect-square max-w-80 rounded mx-auto overflow-hidden'>
                                <img src={pro?.imageUrl} alt={pro?.title} className='h-full w-full object-cover '/>
                            </div>
                            <header className='ff-aalto text-primary text-4xl xs:text-[44px] leading-[44px] tracking-[1px] flex flex-row flex-wrap items-start uppercase'>
                            <a href={pro?.url} target='_blank'>{pro?.title}</a>
                            </header>
                            <p className='text-white/90 text-sm xs:text-base font-light text-left'>
                            {pro?.smallDescription}
                            </p>

                            <ul className='w-full flex flex-row flex-wrap items-start justify-between gap-4'>
                                {pro?.tags.map((tag, idx)=>(
                                    <li key={idx} className='w-2/5 tracking-wider bg-black h-10 text-primary duration-150 transition-all ff-aalto  text-2xl relative grid place-content-center'>
                                        <LinearBack className="absolute h-11 w-full inset-0 z-0" />
                                        <span className='relative z-[1]'>{tag}</span>
                                    </li>
                                ))}
                            </ul>
                        </aside>
                        <div className={`h-[0.25px] w-[90%] mx-auto bg-white/20 mt-10 ${idx===projects.length-1 ?'hidden':''}`}></div>
                    </div>
                )
            })}
        </div>

    <BottomBar />
  </section>
  )
}

export default WorkMob