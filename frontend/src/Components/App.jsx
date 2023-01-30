import React from "react";
import AnnonceList from './AnnonceList';
import Footer from './Footer';
import Heada from "./Header";
import FiDiv from "./Fdiv";
import DetailsAnnonce from "./AnnoceDetails";
import { BrowserRouter  ,Route,Routes,useParams } from "react-router-dom";
import Slider from "./CarouselSlider";
import NavbarFilter from "./FilterCom";
import FirstPageWAth from "../Pages/FirstPageWAth";
import AnnonceForm from "./AnnonceForm";
import Scraper from "./Scrapper";
// import Filters from "./FilterCom";

function App(){
    return(
        <Routes>
            <Route path="/" element={<FirstPageWAth/>}/>
            <Route path="AnnoceDetails/:id" element={<DetailsAnnonce/>}/>
            <Route path="/Slider" element={<Slider/>}/>
            <Route path="/Filter" element={<NavbarFilter/>}/>
            <Route path="/Poster" element={<AnnonceForm/>}/>
            <Route path="/ss" element={<Scraper/>}/>
            
        </Routes>

            /* <div>
                <FiDiv/>
                <AnnonceList/>
                <Footer/>
            </div> */
        
        
    );
}
export default App;