import React, { useState } from 'react';
import { Form, FormGroup, Label, Input, Button } from 'reactstrap';
import { useDropzone } from 'react-dropzone';

const AnnonceForm = () => {
  const [title, setTitle] = useState('');
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
    <div className="bg-gray-200 py-10 px-5 rounded-lg">
        <Form onSubmit={handleSubmit}>
        <FormGroup>
                <Label for="title">Titre</Label>
                <Input
                    className="bg-white rounded-lg border border-gray-300 py-2 px-4 block w-full leading-5 text-gray-700 focus:outline-none focus:border-blue-500"
                    type="text"
                    name="title"
                    id="title"
                    value={title}
                    onChange={e => setTitle(e.target.value)}
                    placeholder="Entrer un titre"
                />
        </FormGroup>
        <FormGroup>
                <Label for="Tarif">Tarif</Label>
                <Input
                    className="bg-white rounded-lg border border-gray-300 py-2 px-4 block w-full leading-5 text-gray-700 focus:outline-none focus:border-blue-500"
                    type="number"
                    name="Tarif"
                    id="Tarif"
                    value={Tarif}
                    onChange={e => setTarif(e.target.value)}
                    placeholder="Entrer un Tarif"
                />
        </FormGroup>
        <div className='grid-cols-3'>
            <FormGroup>
                    <Label for="Catégorie">Catégorie</Label>
                    <select  className="text-black m-2">
                        <option className='text-black ' value="" >Catégorie</option>
                        <option value="Alger" className='text-black'>Science</option>
                        <option value="Oran" className='text-black'>Physique</option>
                        <option value="Constantine" className='text-black'>Mathématique</option>
                        <option value="Alger" className='text-black'>Arabic</option>
                        <option value="Oran" className='text-black'>Français</option>
                        <option value="Constantine" className='text-black'>Anglais</option>
                    </select>
                    <label>Wilaya:</label>
                    <select value={selectedWilaya} onChange={handleWilayaChange} className="text-black m-2">
                        <option className='text-black ' value="" >Tous les wilayas</option>
                        <option value="Alger" className='text-black'>Alger</option>
                        <option value="Oran" className='text-black'>Oran</option>
                        <option value="Constantine" className='text-black'>Constantine</option>
                    </select>
                    <label className='m-1'>Commune:</label>
                    <select value={selectedCommune} onChange={handleCommuneChange} className="text-black m-2">
                    <option value="">Toutes les communes</option>
                    {selectedWilaya && communes[selectedWilaya].map((commune) => (
                        <option key={commune} value={commune} className='text-black'>{commune}</option>
                    ))}
                    </select>
            </FormGroup>
        </div>
        

        <FormGroup>
            <Label for="description" className="block text-gray-700 font-medium mb-2">Description</Label>
            <textarea
            className="bg-white rounded-lg border border-gray-300 py-2 px-4 block w-full leading-5 text-gray-700 focus:outline-none focus:border-blue-500"
            name="description"
            id="description"
            value={description}
            onChange={e => setDescription(e.target.value)}
            placeholder="Entrer une description"
          />
        </FormGroup>
        <FormGroup>
            <Label for="images" className="block text-gray-700 font-medium mb-2">Images</Label>
            <div {...getRootProps()}>
            <input {...getInputProps()} />
            <Button
              className="bg-white rounded-lg border border-gray-300 py-2 px-4 block w-full leading-5 text-gray-700 focus:outline-none focus:border-blue-500"
            >
                Télécharger des images
            </Button>
            </div>
            <div className="mt-4">
            {images.map(image => (
                <img key={image.path} src={image.path} alt={image.path} />
            ))}
            </div>
        </FormGroup>
        <Button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
            Soumettre
        </Button>
        </Form>
        </div>
);
};
    

export default AnnonceForm;