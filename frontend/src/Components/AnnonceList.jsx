import React from "react";
import { useState,useEffect} from "react";
import Annonce from './Annonce.jsx'
let AnnonceList=()=>{
    const [annonces ,setAnnonces]=useState([])
    useEffect(()=>{
        GetAnnonces()
    },[]);

    let GetAnnonces = async() => {
        const response = await fetch("http://127.0.0.1:8000/api/annonces/")
        const data =await response.json()
        setAnnonces(data)
    }
    return (
            <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-4 xl:grid-cols-4 gap-5">
                {annonces.map((annonce,id)=>(
                    <Annonce key={id} Titre={annonce.Titre}  DatePublication={annonce.DatePublication} Tarif={annonce.Tarif}/>
                ))}
            </div>
    )

}
export default AnnonceList;
