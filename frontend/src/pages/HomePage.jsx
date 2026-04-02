import React from 'react'
import { useThemeStore } from '../store/useThemeStore';

const HomePage = () => {
  const { theme, setTheme } = useThemeStore();
  
  return (
    <div className='text-white text-4xl'>
      HomePage
    </div>
  )
}

export default HomePage
