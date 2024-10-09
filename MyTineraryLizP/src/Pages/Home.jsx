import React from "react";
import { useNavigate } from "react-router-dom";
import Carrousel from "../Components/CarrouselSlider";
import Header from "../Components/Header";



export default function Home() {
    return (
        <>
        <Header ></Header>
        <div className="">

            <div className="flex justify-center">
                
                <img class="animate-zoom absolute w-full h-full object-cover object-center brightness-[.65] shadow-lg false z-[-1] opacity-60" alt={"baner de fondo "} src={'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80'} ></img>

            </div>
            <div className="flex flex-col justify-center p-5">
                
                <p className="text-center font-bold text-white text-3xl py-15">My terinary</p>

                <h3 className="text-center font-base text-white text-2xl">Find your perfect trip, designed by insiders who know and love their cities!</h3>
            </div>

            <ButtonNavigate ruta={"/callaction"} title={"Explorer now"}></ButtonNavigate>
            
           <Carrousel></Carrousel>

           
        </div>
            

        </>
    );
}
function ButtonNavigate({ ruta, title }) {
    const navigate = useNavigate();



    function handleClickDetails(rut) {
        navigate(rut);
    }

    return (
        <>
            <div className="flex justify-center p-5">

                <button
                    onClick={() => handleClickDetails(ruta)}
                    className=" bg-blue-200 hover:bg-blue-500 text-blue-800  hover:text-white font-bold py-2 px-4 rounded w-30 opacity-60"
                >
                    {title}
                </button>
            </div>
        </>
    );
}

