import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const AllUpcomingEpisodes = () => {

    const moviesData = useSelector(state => state.movies);

    return moviesData[0].map(episode => {

        return <Link to={`/MoviePage/:id${episode.show.id}`}>
            <img 
                className='movie-image'
                src={episode.show.image !== null ?
                episode.show.image.medium
                : 'https://popcornusa.s3.amazonaws.com/placeholder-movieimage.png'}
                alt='movie' />
            </Link>
    });
};

export default AllUpcomingEpisodes;