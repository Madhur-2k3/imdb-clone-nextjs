'use client';
// import React, { Children } from 'react'
import { ThemeProvider } from 'next-themes';

const Providers = ({Children}) => {
  return (
    <ThemeProvider defaultTheme='system' attribute='class'>
        <div className="">
            {Children}
        </div>
    </ThemeProvider>
  )
}

export default Providers