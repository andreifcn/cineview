import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const Movies = ({ displayItems }) => {

    const moviesData = useSelector(state => state.movies[1]);

    return <div className='movie-list'>
        {moviesData && moviesData.slice(0, displayItems).map(movie => {
        
            return <Link to={`/MoviePage/:id${movie.id}`}>
                    <img 
                    id={movie.name}
                    src={movie.image.medium}
                    alt='movie' />
                </Link>
        })}
    </div>
};

export default Movies;