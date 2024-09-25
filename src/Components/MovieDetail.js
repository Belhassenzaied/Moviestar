import React from 'react';
import { useParams } from 'react-router-dom';

const MovieDetail = ({ movies }) => {
    const { id } = useParams();
    const movie = movies.find((movie) => movie.id === parseFloat(id));

    if (!movie) {
        return <h2>Movie not found</h2>;
    }

    return (
        <div>
            <h2>{movie.title}</h2>
            <img src={movie.posterURL} alt={movie.title} style={{ width: '300px', height: 'auto' }} />
            <p>{movie.description}</p>
            <p>Rating: {movie.rating}</p>
        </div>
    );
}

export default MovieDetail;
