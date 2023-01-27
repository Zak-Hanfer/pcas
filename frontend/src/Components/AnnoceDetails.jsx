import React from "react";
import Heada from "./Header";

 export default function DetailsAnnonce(){
    return(<><Heada />
    <div className="lg:mx-40 my-10 border-solid shadow-2xl  rounded-2xl">
        <h1 className="p-5 text-2xl font-bold">Titre1</h1>
        <div className="relative aspect-video mx-10 ">
            <img className="w-full h-full rounded-2xl " src="https://bobbyhadz.com/images/blog/react-prevent-multiple-button-clicks/thumbnail.webp" alt="testeImages" />

        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 ml-10 py-5 pt-5 gap-2">
            <div className="border-2 border-PrincCol shadow-2xl col-span-1 rounded-2xl">
                <p className="pl-3 p-1">Annonceur:</p>
                <p className="pl-3 p-1">Chargé le:</p>
                <p className="pl-3 p-1">Durée:</p>
                <p className="pl-3 p-1">Language:</p>
            </div>
            <div className="flex flex-col justify-center items-center col-span-2">
                <button className=" px-5 m-2 py-4 text-center text-white bg-PrincipalCol rounded-md shadow hover:bg-gray-100">Participer</button>
            </div>
        </div>
        <div className="ml-10 py-5">
            <h1 className="text-2xl font-bold text-PrincipalCol">Détails</h1>
            <div className="pl-4">
                <h1 className="text-2xl font-bold">Description</h1>
                <p className="pl-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis porro incidunt eveniet sunt at veritatis quibusdam assumenda possimus maiores velit nobis consequuntur, hic animi non libero alias delectus sed maxime.</p>
            </div>
            <div className="pl-4">
                <h1 className="text-2xl font-bold">Information</h1>
                <p className="pl-4">Adresse : </p>
                <p className="pl-4">Nombre de place : </p>
                <p className="pl-4">Prix : </p>
                <p className="pl-4">Localisation :</p>
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