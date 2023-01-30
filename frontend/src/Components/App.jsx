import React from "react";
import AnnonceList from './AnnonceList';
import Footer from './Footer';
import Heada from "./Header";
import FiDiv from "./Fdiv";
import DetailsAnnonce from "./AnnoceDetails";
import { BrowserRouter  ,Route,Routes,useParams } from "react-router-dom";
import Slider from "./CarouselSlider";
import AnnonceForm from "./AnnonceForm";
// import Filters from "./FilterCom";

function App(){
    return(
        <Routes>
            <Route path="/" element={<><FiDiv/><AnnonceList/><Footer/></>}/>
            <Route path="AnnoceDetails/:id" element={<DetailsAnnonce/>}/>
            <Route path="/Slider" element={<Slider/>}/>
            <Route path="/Poster" element={<AnnonceForm/>}/>

        </Routes>

            /* <div>
                <FiDiv/>
                <AnnonceList/>
                <Footer/>
            </div> */
        
        
    );
}
export default App;