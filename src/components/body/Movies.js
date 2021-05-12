import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const Movies = ({ displayItems }) => {

    const moviesData = useSelector(state => state.movies[1]);

    return <div className='movies'>
        {moviesData && moviesData.slice(0, displayItems).map((movie, index) => {

            return <Link key={index} to={`/MoviePage/:id${movie.id}`}>
                    <img 
                        id={movie.name}
                        className='movie-image'
                        src={movie.image !== null ? movie.image.medium
                        : 'https://popcornusa.s3.amazonaws.com/placeholder-movieimage.png'}
                        alt='movie' />
                </Link>
        })}
    </div>
};

export default Movies;