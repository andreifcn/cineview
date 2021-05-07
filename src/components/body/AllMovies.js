import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const AllMovies = () => {

    const moviesData = useSelector(state => state.movies);

    return <div>{moviesData[1] && moviesData[1].map(movie => {
        
        return <Link to={`/MoviePage/:id${movie.id}`}>
                <img 
                id={movie.name}
                src={movie.image.medium}
                alt='movie' />
            </Link>
    })}
    </div>
};

export default AllMovies;