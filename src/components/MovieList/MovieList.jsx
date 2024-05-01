import { Link, useLocation } from "react-router-dom";
import style from "../MovieList/MovieList.module.css"

export default function MovieList({ movies }) {
    const location = useLocation()
    return (
        <ul>
            {movies.map((movie) => {
                return (
                    <li key={movie.id} className={style.list}>
                        <Link to={`/movies/${movie.id}`} state={location}>
                            {movie.title} 
                        </Link>
                    </li>
                );
            })}
        </ul>
    );
}
