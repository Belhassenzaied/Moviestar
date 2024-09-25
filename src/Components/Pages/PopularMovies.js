import React from 'react';
import SearchMovie from '../SearchMovie';
import AddMovie from '../AddMovie';
import ListMovies from '../ListMovies';
const PopularMovies =({searchT,rateT,setSearchT,setRateT,setMovies,movies})=>{
    return(
        <div>
             <h1>Popular Movies</h1>
               <div className='searchAdd'>
                <SearchMovie searchT={searchT} rateT={rateT} setSearchT={setSearchT} setRateT={setRateT} />
                <AddMovie movies={movies} setMovies={setMovies} />
        </div> 

        <ListMovies movies={movies} searchT={searchT} rateT={rateT} />
        </div>
    )
    
} 
export default PopularMovies