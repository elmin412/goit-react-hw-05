import { useEffect, useState } from "react";
import { getMoviesCast } from "../../movies-api";
import { useParams } from "react-router-dom";
import Loader from "../Loader/Loader";
import ErrorPage from "../ErrorPage/ErrorPage"
import style from "../MovieCast/MovieCast.module.css"

export default function MovieCast() {

    const [loading, setLoading] = useState(false);
    const [cast, setCast] = useState(null)
    const [error, setError] = useState(false)
    const { movieId } = useParams()

    useEffect(() => {
        async function fetchMoviesCast() {
            try {
                setLoading(true);
                const data = await getMoviesCast(movieId);
                setCast(data);
            }
            catch (error) {setError(true)}
            finally {setLoading(false)}
        }
        fetchMoviesCast()
    }, [movieId]);

    const imageBaseURL = "https://image.tmdb.org/t/p/w500";
    
    return (
        <div>
            {loading && <Loader />}
            {error && <ErrorPage />}
            {cast && (
                <ul>
                    {cast.cast.map((item) => {
                        
                        return (
                            
                            <li key={item.id} className={style.optionCast}>
                                 <img src={`${imageBaseURL}${item.profile_path}`} alt="" />
                                <p>{item.name}</p>
                                <p>{item.character}</p>
                            </li>
                        )
                    })}
                </ul>
            )} 
        </div>
    )
    
} 