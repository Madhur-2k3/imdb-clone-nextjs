import React, { Suspense } from 'react'
import NavbarItem from './NavbarItem'

export default function Navbar() {
  return (
    <Suspense fallback={<>Loading...</>}>
        <div className='flex dark:bg-amber-600 bg-amber-400 p-4 lg:text-xl justify-center gap-6  '>
            <NavbarItem title='Trending' param='fetchTrending'/>
            <NavbarItem title='Top Rated' param='fetchTopRated'/>
        </div>
    </Suspense>
  )
}
