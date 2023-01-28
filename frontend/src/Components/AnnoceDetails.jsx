import React, { useEffect,useState } from "react";
import Heada from "./Header";
import { Params,useParams } from "react-router-dom";

 const DetailsAnnonce=()=>{
    const  AnnonceId  = useParams();
    const [annonce ,setAnnonce]=useState("")
    useEffect(()=>{
          getAnnonce()
    },[])
    let getAnnonce= async()=>{
        let response=await fetch(`http://127.0.0.1:8000/api/annonces/${AnnonceId.id}/`)
        let data = await response.json()
        setAnnonce(data)
    }
    const Nomwilaya=annonce && annonce.Localisation && annonce.Localisation.nomWilaya && annonce.Localisation.nomWilaya.nomWilaya
    const NomCommune=annonce && annonce.Localisation && annonce.Localisation.NomCommune && annonce.Localisation.NomCommune.NomCommune
    const NomImmobNumRue=annonce && annonce.Localisation && annonce.Localisation.Immobilier && annonce.Localisation.Immobilier.NumRue
    const NomImmobNomRue=annonce && annonce.Localisation && annonce.Localisation.Immobilier && annonce.Localisation.Immobilier.NomRue
    const NomImmobNumLog=annonce &&annonce.Localisation && annonce.Localisation.Immobilier && annonce.Localisation.Immobilier.NumLogement
    return(<><Heada />
    <div className="lg:mx-40 my-10 border-solid shadow-2xl  rounded-2xl">
        <h1 className="p-5 text-2xl font-bold">{annonce.Titre}</h1>
        <div className="relative aspect-video mx-10 ">
            <img className="w-full h-full rounded-2xl " src="https://bobbyhadz.com/images/blog/react-prevent-multiple-button-clicks/thumbnail.webp" alt="testeImages" />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 ml-10 py-5 pt-5 gap-2">
            <div className="border-2 border-PrincCol shadow-2xl col-span-1 rounded-2xl">
                <p className="pl-3 p-1">Annonceur:</p>
                <p className="pl-3 p-1">Chargé le:{annonce.DatePublication}</p>
                <p className="pl-3 p-1">Catégorie:{annonce.Categorie}</p>
                <p className="pl-3 p-1">Module:{annonce.ThemeAnn}</p>
            </div>
            <div className="flex flex-col justify-center items-center col-span-2">
                <button className=" px-5 m-2 py-4 text-center text-white bg-PrincipalCol rounded-md shadow hover:bg-gray-100">Participer</button>
            </div>
        </div>
        <div className="ml-10 py-5">
            <h1 className="text-2xl font-bold text-PrincipalCol">Détails</h1>
            <div className="pl-4">
                <h1 className="text-2xl font-bold">Description</h1>
                <p className="pl-4">{annonce.Description}</p>
            </div>
            <div className="pl-4">
                <h1 className="text-2xl font-bold">Information</h1>
                <p className="pl-4">Adresse : {Nomwilaya +" "+ NomCommune+ " "+ NomImmobNumRue+" "+NomImmobNomRue+" "+NomImmobNumRue+" "+NomImmobNumLog} </p>
                <p className="pl-4">Prix : {annonce.Tarif}</p>
                <p className="pl-4">Modalité : {annonce.Modalite}</p>
                <a href="/" className="pl-4 flex items-center hover:text-cyan-600 " >Click ici  
                    <img  className="scale-50" src={require('../images/GPSiimg.png')} alt="" />
                </a>
            </div>
            <div>
                <h1 className="text-2xl font-bold text-PrincipalCol" >Contacter l'annonceur</h1>
                <div className="grid grid-cols-3 grid-flow-col-dense gap-0">
                    <input type="text" placeholder="tapez quelque chose..." className="p-2 col-span-2  rounded-md border-2  border-black "></input>
                    <button className="px-5 m-2 py-4 w-40 text-center  bg-PrincipalCol rounded-md shadow text-white hover:bg-gray-100">Envoyer</button>
                </div>
            </div>
        </div>

    </div></>
    );
}
export default DetailsAnnonce;