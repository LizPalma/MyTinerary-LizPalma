import React from 'react'
import { Outlet } from 'react-router-dom'

export default function CallActionLayouts() {
  return (
    <>
    <div className='flex flex-col justify-center h-screen p-5'>
    <Outlet></Outlet>
    </div>
    <footer className="flex w-full h-20 items-center justify-center bg-blue-500 text-white">Traveling happily with your trusted agency ✈</footer>
    </>
  )
}