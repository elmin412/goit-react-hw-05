import { Link, useLocation } from "react-router-dom";

export default function MovieList({ movies }) {
    const location = useLocation()
    return (
        <ul>
            {movies.map((movie) => {
                return (
                    <li key={movie.id}>
                        <Link to={`/movies/${movie.id}`}>
                            {movie.title}
                        </Link>
                    </li>
                );
            })}
        </ul>
    );
}