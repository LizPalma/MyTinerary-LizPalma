import React from 'react'
import { useNavigate, useLocation,useParams } from 'react-router-dom'
import Header from '../Components/Header';

export default function CallAction() {
  const navigate = useNavigate()
  const location = useLocation();
  const objeto = location.state
  console.log(objeto);
  const {id,name} = useParams()
  console.log(id,name);

  function navigateBack(){
    navigate(-1)
  }

  return (
    <>
    <Header></Header>
    <div className="flex flex-col justify-center h-screen ">

    <div className='flex justify-center '>
    <p className='text-center font-bold text-blue-800 text-4xl'>Coming soon...</p>
    </div>
    <button
      onClick={()=> navigateBack()} 
      className='p-2 hover:bg-blue-500 text-blue-800 hover:text-white  font-bold py-2 px-4 rounded w-20'>Back</button>
    </div>
    </>
    
  )
}