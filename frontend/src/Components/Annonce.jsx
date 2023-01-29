
import React,{useState,useEffect} from "react";
import { useParams } from "react-router-dom";
import Slider from "./CarouselSlider";
function Annonce(props){
    const path="./AnnoceDetails/"+props.Annonceid
    const [images,setImages]=useState([])
    useEffect(()=>{
        getImage()
  },[])
    let getImage= async()=>{
        let response=await fetch(`http://127.0.0.1:8000/api/photo/${props.Annonceid}/`)
        var data = await response.json()
        setImages(data)
    }
    const pathimage=images[0] && images[0].image

    return(   
        <div className="relative inline-block duration-300 ease-in-out transition-transform transform hover:-translate-y-2 w-full p-1">
            <div className="shadow-2xl rounded-2xl bg-white">
                    <img className="object-contain h-full max-h-60 rounded-t-2xl" src={'http://127.0.0.1:8000' + pathimage} alt="teste" />
                    <div className="p-2">
                        <h4 className=" text font-bold pt-2" >{props.Titre}</h4>
                        <p className="max-10 pt-1.5">Date de Publication : {props.DatePublication}</p>
                        <p className="pt-1.5">Tarif: {props.Tarif}DA/heure</p>
                        <p className="pt-1.5">Localisation: {props.localisation}</p>
                        <div className="flex flex-row mt-2 gap-2 pt-1.5">
                            <a href="/"><img src="https://picsum.photos/seed/1/40/40" className="rounded-full max-h-10 max-w-10" alt="ProfilePicture" /></a>
                            <a className="text-gray-400 text-xs mt-2 hover:text-gray-700" href="/"> Houssem </a>
                        </div>
                        <div className="flex flex-col justify-center items-center pt-1.5">
                            <a href={path} className="text-[#178C8C] border border-[#178C8C] hover:bg-[#175D8A] hover:text-white active:bg-[#175D8A] font-bold  px-8 py-3 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150">Plus d'information </a>
                        </div>
                        
                    </div>
                </div>
             </div>   
)}

export default Annonce;
