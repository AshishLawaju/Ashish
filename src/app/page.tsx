import React from 'react'
import WorkTogether from './components/worktogether/WorkTogether'
import Footer from './components/footer/Footer'

const Home = () => {
  return (
    <main className='bg-main-white dark:bg-main-black'>Home
      <div className='font-Archivo'>
        Home
      </div>
      <div className='font h-[100vh]'>
        Home
      </div>
      <WorkTogether/>
      <Footer/>
    </main>
  )
}

export default Home