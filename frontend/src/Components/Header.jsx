import React from "react";
import Searchbar from "./Searchbar"
function Heada(){
    return(
        <><nav className="bg-white border-gray-200 px-4 lg:px-6 py-2.5">
            <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
                <a href="/" className="flex items-center">
                    <img src="" className="mr-3 h-6 sm:h-9" alt="InsightCours Logo" />
                    <span className="self-center text-xl font-semibold whitespace-nowrap text-black">InsightCours</span>
                </a>
                <div className="flex items-center lg:order-2">
                    <a href="/" className="text-white bg-PrincipalCol focus:ring-4  font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2">Se connecter</a>
                    <a href="/" className="text-white bg-PrincipalCol hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:bg-primary-600 dark:hover:bg-primary-700 focus:outline-none dark:focus:ring-primary-800">S'inscrire</a>
                </div>
                <div className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1">
                    <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
                        <li>
                            <a href="/" className="block py-2 pr-4 pl-3 text-black border-b  hover:text-gray-500 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0" aria-current="page">Accueil</a>
                        </li>
                        <li>
                            <a href="/" className="block py-2 pr-4 pl-3 text-black border-b  hover:text-gray-500 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0">Catégories</a>
                        </li>
                        <li>
                            <a href="/" className="block py-2 pr-4 pl-3 text-black border-b  hover:text-gray-500 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0">Contactez-nous</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav><Searchbar /></>
    );
}
export default Heada;
 