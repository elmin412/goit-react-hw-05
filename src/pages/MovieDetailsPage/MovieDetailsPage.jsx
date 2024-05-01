import { Link, useLocation, useParams, Outlet } from "react-router-dom"
import { useEffect, useState, useRef } from "react";
import Loader from "../../components/Loader/Loader";
import { getMoviesById } from '../../movies-api'
import ErrorPage from '../../components/ErrorPage/ErrorPage'

export default function MovieDetailsPage() {
    const [loading, setLoading] = useState(false);
    const [movies, setMovies] = useState(null)
    const [error, setError] = useState(false)
    const { movieId } = useParams()
    const location = useLocation();
    const backLinkHrefRef = useRef(location.state) ?? "/movies";

    console.log(movieId)

    useEffect(() => {
        async function fetchMovies() {
            try {
                setLoading(true);
                const data = await getMoviesById(movieId);
                setMovies(data);
            }
            catch (error) {setError(true)}
            finally {setLoading(false)}
        }
        fetchMovies()
    }, [movieId]);
    return (
        <div>
            <div>
                <Link to={backLinkHrefRef.current}>Go back</Link>
            </div>

            {loading && <Loader />}
            {error && <ErrorPage />}
            {movies && (
                <ul>
                    <p>{movies.title}</p>
                    <img src="https://via.placeholder.com/480x360" alt="" />
                    {movies.genres.map((itemGenres) => (
                        <li key={itemGenres.id}>
                            <p>{itemGenres.name}</p>
                        </li>
                    ))}
                    <li>
                        <p>{movies.overview}</p>
                    </li>
                    <li>
                        <p> Release date - {movies.release_date}</p>
                    </li>
                </ul>
            )}
            <p>Addition information</p>
            <ul>
                <li>
                    <Link to="cast">Cast</Link>
                </li>
                <li>
                    <Link to="reviews">Review</Link>
                </li> 
            </ul>
            <Outlet />
        </div>
    )
}