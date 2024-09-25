import React, { useState } from 'react';
import {  Routes, Route } from 'react-router-dom';
import './App.css';
import ListMovies from './Components/ListMovies';
import NavMovie from './Components/NavMovies';
import AddMovie from './Components/AddMovie';
import SearchMovie from './Components/SearchMovie';
import Home from './Components/Pages/Home';
import PopularMovies from './Components/Pages/PopularMovies'; 
import NewReleases from './Components/Pages/NewReleases';  
import MovieDetail from './Components/MovieDetail';


function App() {
  const [movies, setMovies] = useState([
    {       
      title: 'Borderlands',
      description: 'Lilith, une chasseuse de primes au passé trouble...',
      posterURL: 'https://fr.web.img4.acsta.net/pictures/24/02/21/09/51/1916092.jpg?width=200',
      rating: 5,
      id: Math.random(),
    },
    {
      title: 'Togo',
      description: 'Cest lhistoire de trois Tunisiens que rien ne les relie...',
      posterURL: 'https://fr.web.img4.acsta.net/pictures/20/03/18/11/52/4165951.jpg?width=200',
      rating: 3,
      id: Math.random(),
    },
    {
      title: 'Us',
      description: 'Hamid est journaliste, la trentaine passée...',
      posterURL: 'https://resize.elle.fr/portrait/var/plain_site/storage/images/loisirs/cinema/news/5-bonnes-raisons/us-le-nouveau-film-de-jordan-peele-va-vous-plonger-dans-l-horreur-3783413/90369318-1-fre-FR/Us-le-nouveau-film-de-Jordan-Peele-va-vous-plonger-dans-l-horreur.jpg?width=200',
      rating: 5,
      id: Math.random(),
    },
    {
      title: 'Furiosa',
      description: 'Tunis, été 2010, quelques mois avant la Révolution...',
      posterURL: 'https://media.senscritique.com/media/000022096716/300/furiosa_une_saga_mad_max.png?width=200',
      rating: 2,
      id: Math.random(),
    },
  ]);

  const [searchT, setSearchT] = useState('');
  const [rateT, setRateT] = useState(0);

  return (

      <div>
        <NavMovie />
        
        <div className='searchAdd'>
          <SearchMovie searchT={searchT} rateT={rateT} setSearchT={setSearchT} setRateT={setRateT} />
          <AddMovie movies={movies} setMovies={setMovies} />
        </div> 

        <ListMovies movies={movies} searchT={searchT} rateT={rateT} />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/popular" element={<PopularMovies searchT={searchT} rateT={rateT} setSearchT={setSearchT} setRateT={setRateT}  movies={movies} setMovies={setMovies}/>} />
          <Route path="/new" element={<NewReleases />} />
          
          <Route path="/" element={<ListMovies movies={movies} />} />
          <Route path="/movies/:id" element={<MovieDetail movies={movies} />} />
          
        </Routes>
          
       
      </div>

  );
}

export default App;
