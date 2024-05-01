import { useState, useEffect } from "react"
import { getMovies } from "../../movies-api"
import Loader from "../../components/Loader/Loader";
import MovieList from "../../components/MovieList/MovieList";
import ErrorPage from '../../components/ErrorPage/ErrorPage'


export default function MoviesPage() {
    const [loading, setLoading] = useState(false);
    const [movies, setMovies] = useState([])
    const [error, setError] = useState(false)


    useEffect(() => {
        async function fetchMovies() {
            try {
                setLoading(true)
                const data = await getMovies();
                setMovies(data)   
            }
            catch (error) {setError(true)}
            finally {setLoading(false)}
        }
        fetchMovies()
    }, []);

    

    return (
        <div>
            <h1>Movies</h1>
            {loading && <Loader />}
            {error && <ErrorPage />}
            {movies.length > 0 && <MovieList movies={movies} />}
            
        </div>
        
    )
}