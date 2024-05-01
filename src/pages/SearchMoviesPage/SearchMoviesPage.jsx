import { useState, useEffect } from "react"
import { useSearchParams } from "react-router-dom"
import { getMoviesSearch } from "../../movies-api"
import Loader from "../../components/Loader/Loader";
import MovieList from "../../components/MovieList/MovieList";
import ErrorPage from '../../components/ErrorPage/ErrorPage'
import SearchMovies from "../../components/SearchMovie/SearchMovies";


export default function SearchMoviesPage() {
    const [loading, setLoading] = useState([false]);
    const [movies, setMovies] = useState([])
    const [error, setError] = useState(false)

    const [searchParams, setSearchParams] = useSearchParams();
    const query = searchParams.get("query") ?? "";

    const changeSearch = (newSearch) => {
        setSearchParams({ query: newSearch });
    }

    useEffect(() => {
        if (query === "") {
            return; 
        }
        async function fetchMovies() {
            try {
                const data = await getMoviesSearch(query);
                setLoading(true)
                setMovies(data)   
                console.log(data)
            }
            catch (error) {setError(true)}
            finally {setLoading(false)}
        }
        fetchMovies();
        
    }, [query]);

    

    return (
        <div>
            <h1>Search</h1>
            <SearchMovies value={query} onSubmit={changeSearch} />
            {loading && <Loader />}
            {error && <ErrorPage />}
            {movies.length > 0 && <MovieList movies={movies} />}
           
        </div>
        
    )
}