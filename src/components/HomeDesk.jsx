import React from 'react'
import BottomBar from './BottomBar'

const HomeDesk = () => {
  return (
    <section className='section-container grid grid-cols-12'>
      <article className='col-span-5'></article>
      <article className='col-span-7 flex flex-col items-start'>
        <aside className='h-full w-full grid-border !border-b-0 !border-t-0 !border-r-0 '></aside>
        <BottomBar />
      </article>

    </section>
  )
}

export default HomeDesk