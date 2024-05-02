import { useLocation, useParams, Outlet, NavLink } from "react-router-dom"
import { useEffect, useState, useRef, Suspense } from "react";
import Loader from "../../components/Loader/Loader";
import { getMoviesById } from '../../movies-api'
import ErrorPage from '../../components/ErrorPage/ErrorPage'
import style from "../MovieDetailsPage/MovieDetailsPage.module.css"

export default function MovieDetailsPage() {
    const [loading, setLoading] = useState(false);
    const [movies, setMovies] = useState(null)
    const [error, setError] = useState(false)
    const { movieId } = useParams()
    const location = useLocation();
    const backLinkHrefRef = useRef(location.state ?? "/movies");

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

    const defaultImg = 'https://dl-media.viber.com/10/share/2/long/vibes/icon/image/0x0/95e0/5688fdffb84ff8bed4240bcf3ec5ac81ce591d9fa9558a3a968c630eaba195e0.jpg'
    const imageBaseURL = "https://image.tmdb.org/t/p/w500";

    return (
        <div>
            <div>
                <NavLink to={backLinkHrefRef.current}>Go back</NavLink>
            </div>

            {loading && <Loader />}
            {error && <ErrorPage />}
            {movies && (

                <ul className={style.listHeader}>
                    <p>{movies.title}</p>

                    <img src={movies.poster_path ? `${imageBaseURL}${movies.poster_path}` : defaultImg}
                         alt="poster"
                    />
                    
                    <p>GENRES</p>
                    {movies.genres.map((movie) => (
                        <li key={movie.id}>
                            <p>{movie.name}</p>
                            
                        </li>
                    ))}
                    <p>OVERVIEW</p>
                    <li>
                        <p>{movies.overview}</p>
                    </li>
                    <p>Release date </p>
                    <li>
                        <p> {movies.release_date}</p>
                    </li>
                </ul>
            )}
            <p>ADDITION INFORMATION</p>
            <ul className={style.castRewivew}>
                <li>
                    <NavLink to="cast">Cast</NavLink>
                </li>
                <li>
                    <NavLink to="reviews">Review</NavLink>
                </li> 
            </ul>
            <Suspense fallback={<p>wait loading...</p>}>
            <Outlet />
            </Suspense>
        </div>
    )
}