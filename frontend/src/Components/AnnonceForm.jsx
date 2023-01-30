import React, { useState } from 'react';
import { Form, FormGroup, Label, Input, Button } from 'reactstrap';
import { useDropzone } from 'react-dropzone';

const AnnonceForm = () => {
  const [title, setTitle] = useState('');
  const [Lieu, setLieu] = useState('');
  const [selectedCategorie, setSelectedCategorie] = useState('');
  const [selectedTheme, setSelectedTheme] = useState('');
  const [selectedModalit, setSelectedModalit] = useState('');
  const [selectedWilaya, setSelectedWilaya] = useState('');
  const [selectedCommune, setSelectedCommune] = useState('');
  const [Tarif, setTarif] = useState('');
  const [description, setDescription] = useState('');
  const [images, setImages] = useState([]);
  const communes = {
    Alger: [
      'Alger Centre',
      'Bab El Oued',
      'Belouizdad',
      'Bologhine',
      'Dar El Beida'
    ],
    Oran: [
      'Arzew',
      'Es Senia',
      'Mers El Kebir',
      'Oran Centre',
      'Oued Tlélat'
    ],
    Constantine: [
      'Ain El Bey',
      'Didouche Mourad',
      'El Khroub',
      'Mohammedia',
      'Zighoud Youcef'
    ],
  };
  const handleCategorieChange = (event) => {
    setSelectedCategorie(event.target.value);
  }; 
  const handleThemeChange = (event) => {
    setSelectedTheme(event.target.value);
  };  
  const handleModalitChange = (event) => {
    setSelectedModalit(event.target.value);
  };  
    const handleWilayaChange = (event) => {
      setSelectedWilaya(event.target.value);
    };
    const handleCommuneChange = (event) => {
    setSelectedCommune(event.target.value);
    };
  const onDrop = acceptedImages => {
    setImages(acceptedImages);
  };
  const { getRootProps, getInputProps } = useDropzone({ onDrop });

  const handleSubmit = e => {
    e.preventDefault();
    // Code pour soumettre le formulaire ici
  };

  return (
    <div className="bg-PrincipalCol ml-56 px-5 rounded-lg my-20 mx-20 w-2/3 rounded-xl">
        <Form onSubmit={handleSubmit}>
        <div className=" ml-24">
            <FormGroup className='py-4 grid grid-cols-3 justify-center items-center'>
                    {/* <Label for="title">Titre</Label> */}
                    <Input
                        className="bg-white col-span-2 rounded-lg border border-gray-300 py-2 px-4 block w-full leading-5 text-gray-700 focus:outline-none focus:border-blue-500"
                        type="text"
                        name="title"
                        id="title"
                        value={title}
                        onChange={e => setTitle(e.target.value)}
                        placeholder="Entrer un titre"
                    />
            </FormGroup>
          
            <div className='grid-cols-3'>
                <FormGroup>
                        {/* <Label for="Catégorie">Catégorie</Label> */}
                        <select value={selectedCategorie} onChange={handleCategorieChange} className="text-black m-10 px-4 py-2  rounded-md shadow hover:bg-gray-100">
                            <option className='text-black ' value="" >Catégorie</option>
                            <option value="Alger" className='text-black'>Primaire</option>
                            <option value="Oran" className='text-black'>Collège</option>
                            <option value="Constantine" className='text-black'>Lycée</option>
                            
                        </select>
                        {/* <Label for="Theme">Thème</Label> */}
                        <select value={selectedTheme} onChange={handleThemeChange} className="text-black m-10 px-4 py-2 rounded-md shadow hover:bg-gray-100">
                            <option className='text-black ' value="" >Thème</option>
                            <option value="Alger" className='text-black'>Science</option>
                            <option value="Oran" className='text-black'>Physique</option>
                            <option value="Constantine" className='text-black'>Mathématique</option>
                            <option value="Alger" className='text-black'>Arabic</option>
                            <option value="Oran" className='text-black'>Français</option>
                            <option value="Constantine" className='text-black'>Anglais</option>
                        </select>
                        {/* <Label for="Theme">Modalité</Label> */}
                        <select value={selectedModalit} onChange={handleModalitChange} className="text-black m-10 px-4 py-2  rounded-md shadow hover:bg-gray-100">
                            <option className='text-black ' value="" >Modalité</option>
                            <option value="Alger" className='text-black'>Offline</option>
                            <option value="Oran" className='text-black'>Online</option>
                        </select>
                        
                </FormGroup>
            </div>
            <FormGroup className='py-4 grid grid-cols-3 justify-center items-center'>
                    <Label for="Tarif" className='bg-white rounded-lg border border-gray-300 py-2 px-4 block text-black focus:border-blue-500 w-32'>Tarif horaire</Label>
                    <Input
                        className="bg-white rounded-lg border border-gray-300 py-2 px-4 block  leading-5 text-gray-700 focus:outline-none focus:border-blue-500 w-56"
                        type="number"
                        name="Tarif"
                        id="Tarif"
                        value={Tarif}
                        onChange={e => setTarif(e.target.value)}
                        placeholder="Tarif/H"
                    />
            </FormGroup>
            <div>
              <FormGroup>
                  {/* <Label className='flex'>Wilaya:</Label> */}
                            <select value={selectedWilaya} onChange={handleWilayaChange} className="text-black m-10 px-4 py-2   justify-center items-center rounded-md shadow hover:bg-gray-100">
                                <option className='text-black ' value="" >Wilaya</option>
                                <option value="Alger" className='text-black'>Alger</option>
                                <option value="Oran" className='text-black'>Oran</option>
                                <option value="Constantine" className='text-black'>Constantine</option>
                            </select>
                            {/* <label className='m-1'>Commune:</label> */}
                            <select value={selectedCommune} onChange={handleCommuneChange} className="text-black m-10 px-4 py-2   justify-center items-center rounded-md shadow hover:bg-gray-100">
                            <option value="">Commune</option>
                            {selectedWilaya && communes[selectedWilaya].map((commune) => (
                                <option key={commune} value={commune} className='text-black'>{commune}</option>
                            ))}
                            </select>
              </FormGroup>
            </div>
            <FormGroup className='py-4 grid grid-cols-3 justify-center items-center'>
                    {/* <Label for="title" className="block text-gray-700 font-medium mb-2">Lieu de la formation</Label> */}
                    <Input
                        className="bg-white col-span-2 rounded-lg border border-gray-300 py-2 px-4 block w-full leading-5 text-gray-700 focus:outline-none focus:border-blue-500"
                        type="text"
                        name="lieu"
                        id="lieu"
                        value={Lieu}
                        onChange={e => setLieu(e.target.value)}
                        placeholder="Entres le lieu de la formation"
                    />
            </FormGroup>
            <FormGroup>
                {/* <Label for="description" className="block text-gray-700 font-medium mb-2">Description</Label> */}
                <textarea
                className="bg-white rounded-lg border border-gray-300 py-2 px-4 block w-4/6 leading-5 text-gray-700 focus:outline-none focus:border-blue-500 mt-5"
                name="description"
                id="description"
                value={description}
                onChange={e => setDescription(e.target.value)}
                placeholder="Entrer une description"
              />
            </FormGroup>
            <FormGroup>
                <Label for="images" className="block text-gray-700 font-medium mb-2 mt-5">Images</Label>
                <div {...getRootProps()}>
                <input {...getInputProps()} />
                <Button
                  className="bg-white rounded-lg border border-gray-300 py-2 px-4 block w-40 leading-5 text-gray-700 focus:outline-none focus:border-blue-500"
                >
                    Charger images
                </Button>
                </div>
                <div className="mt-4">
                {images.map(image => (
                    <img key={image.path} src={image.path} alt={image.path} />
                ))}
                </div>
            </FormGroup>
            <div className='flex justify-center items-center '>
                <Button type="submit" className="bg-white hover:bg-blue-700 text-black font-bold py-2 px-4 rounded-full my-5 ">
                    Poster
                </Button>
            </div>
            </div>
        </Form>
        
        </div>
);
};
    

export default AnnonceForm;
