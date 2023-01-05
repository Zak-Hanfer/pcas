
import React from "react";
function Annonce(props){
    return(   
            <div className="relative inline-block duration-300 ease-in-out transition-transform transform hover:-translate-y-2 w-full p-2.5">
                <div className="shadow-2xl rounded-2xl bg-white">
                    <img className="w-full rounded-t-2xl" src="https://bobbyhadz.com/images/blog/react-prevent-multiple-button-clicks/thumbnail.webp" alt="teste"/>
                    <div className="p-2">
                        <h4 className=" text font-bold pt-2" >{props.Titre}</h4>
                        <p className="max-10 pt-1.5">Date de Publication : {props.DatePublication}</p>
                        <p className="pt-1.5">Tarif: {props.Tarif}/heure</p>
                        <div className="flex flex-row mt-2 gap-2 pt-1.5">
                            <a href="/"><img src="https://picsum.photos/seed/1/40/40" className="rounded-full max-h-10 max-w-10" alt="ProfilePicture" /></a>
                            <a className="text-gray-400 text-xs mt-2 hover:text-gray-700" href="/"> Houssem </a>
                        </div>
                        <div className="flex flex-col justify-center items-center pt-1.5">
                            <button className="text-[#178C8C] border border-[#178C8C] hover:bg-[#175D8A] hover:text-white active:bg-[#175D8A] font-bold  px-8 py-3 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150">Plus d'information</button>
                        </div>
                        
                    </div>
                </div>
             </div>   
)}

export default Annonce;

// eslint-disable-next-line no-lone-blocks
{/* <div class="mx-auto container ">
            <div class="mx-auto containergrid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                <div class="rounded">
                    <div v-for="(card, idx) in cards"  class=" h-64 flex flex-col justify-between bg-white dark:bg-gray-800 dark:border-gray-700 rounded-lg border border-gray-400 mb-6 py-5 px-4">
                        <div>
                            <h4 className="text-gray-800 dark:text-gray-100 font-bold mb-3">{props.Titre}</h4>
                            <p className="text-gray-800 dark:text-gray-100 font-bold mb-3">Date de Publication : {props.DatePublication}</p>
                            <p className="text-gray-800 dark:text-gray-100 font-bold mb-3">Tarif: {props.Tarif}</p>
                            <button type="button" className="">Plus d'information</button>
                        </div> 
                    </div>
                </div>
            </div>
        </div>  */}