import { Link } from 'react-router-dom';

const AllMovies = ({ moviesData }) => {

    return moviesData.map(movie => {
        
        return <Link to={`/MoviePage/:id${movie.id}`}>
                <img 
                id={movie.name}
                src={movie.image.medium}
                alt='movie' />
            </Link>
    });
}

export default AllMovies;