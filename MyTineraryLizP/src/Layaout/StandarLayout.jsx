import React from "react";
import { Outlet } from "react-router-dom";


export default function StandarLayout() {
  return (
    <>
    
      <main className="flex flex-col h-screen">
        <Outlet></Outlet>
      </main>
      <footer className="flex flex-colw-full h-20 items-center justify-center bg-blue-500 text-white">
        <h2 >Traveling happily with your trusted agency ✈ </h2>
        
      </footer>
    </>
  );
}