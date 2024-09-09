import { useState } from 'react';
import './App.css';
import ListMovies from './Components/ListMovies';
import NavMovie from './Components/NavMovies';
import AddMovie from './Components/AddMovie';
import SearchMovie from './Components/SearchMovie';

function App() {
  const [movies,setMovies] = useState([

    {title : 'Borderlands', description :'Lilith, une chasseuse de primes au passé trouble, revient à contrecœur sur sa planète natale, Pandore, la planète la plus chaotique de la galaxie… Sa mission est de retrouver la fille disparue une des franchises de jeux vidéo les plus vendues de tous les temps, bienvenue à BORDERLANDS ?',posterURL:'https://fr.web.img4.acsta.net/pictures/24/02/21/09/51/1916092.jpg?width=200',rating : 5, id : Math.random()},
    {title : 'Togo', description :'Cest lhistoire de trois tunisiens que rien ne les relie dans la vie quotidienne à part le fait qu’ils sont accros à la drague via Facebook. Un jour ils tombent dans le piège d’une femme qui leur donne rendez-vous dans un endroit retiré et les braque avec l’aide d’un gang. Et c’est là qu’un phénomène surnaturel se produit et nos trois personnages se retrouvent sans le savoir projetés dans le passé…',posterURL:'https://fr.web.img4.acsta.net/pictures/20/03/18/11/52/4165951.jpg?width=200',rating : 3, id : Math.random()},
    {title : 'Us', description :'Hamid est journaliste, la trentaine passée et il vit son célibat avec sa famille petite bourgeoise comme un échappatoire pour ne pas ressembler aux siens. Sa famille veut le marier à tout prix avec sa voisine Rym (30 ans) pour mettre fin à ses hésitations, et aux mauvaises langues qui n’épargnent pas les célibataires endurcis. N’osant s’opposer à la décision de mariage de sa famille, Hamid préfère fuir l’atmosphère des préparatifs…',posterURL:'https://resize.elle.fr/portrait/var/plain_site/storage/images/loisirs/cinema/news/5-bonnes-raisons/us-le-nouveau-film-de-jordan-peele-va-vous-plonger-dans-l-horreur-3783413/90369318-1-fre-FR/Us-le-nouveau-film-de-Jordan-Peele-va-vous-plonger-dans-l-horreur.jpg?width=200',rating : 5, id : Math.random()},
    {title : 'FIRIOSA', description :'Tunis, été 2010, quelques mois avant la Révolution, Farah 18 ans passe son bac et sa famille l’imagine déjà médecin… mais elle ne voit pas les choses de la même manière. Elle chante au sein d¹un groupe de rock engagé. Elle vibre, s’enivre, découvre l’amour et sa ville de nuit contre la volonté d’Hayet, sa mère, qui connaît la Tunisie et ses interdits.',posterURL:'https://media.senscritique.com/media/000022096716/300/furiosa_une_saga_mad_max.png?width=200',rating : 2, id : Math.random()},

  ])

  const [searchT,setSearchT] = useState('')
  const [rateT,setRateT] = useState(0)
  return (
    <div>
      <NavMovie/>

      <div className='searchAdd'>
        <SearchMovie searchT={searchT} rateT={rateT} setSearchT={setSearchT} setRateT={setRateT}/>
        <AddMovie movies={movies} setMovies={setMovies}/>
      </div>

      <ListMovies movies={movies} searchT={searchT} rateT={rateT}/>
    </div>
  );
}

export default App;