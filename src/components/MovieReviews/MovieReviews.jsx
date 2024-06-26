import { useEffect, useState } from "react";
import { getMoviesReviews } from "../../movies-api";
import { useParams } from "react-router-dom";
import Loader from "../Loader/Loader";
import ErrorPage from "../ErrorPage/ErrorPage"
import style from "../MovieReviews/MovieReview.module.css"


export default function MovieReview() {
    const [loading, setLoading] = useState(false);
    const [reviews, setReviews] = useState(null);
    const [error, setError] = useState(false);
    const { movieId } = useParams();

    useEffect(() => {
        async function fetchMoviesReviews() {
            try {
                setLoading(true);
                const data = await getMoviesReviews(movieId);
                setReviews(data);
            }
            catch (error) {setError(true)}
            finally {setLoading(false)}
        }
        fetchMoviesReviews()
    }, [movieId]);

    return (
        <div>
            {loading && <Loader />}
            {error && <ErrorPage />}
            {reviews && reviews.results && reviews.results.length > 0 ? (
            <ul>
                {reviews.results.map((item) => (
                    <li key={item.id} className={style.optionReview}>
                        <p>{item.author}</p>
                        <p>{item.content}</p>
                    </li>
                ))}
            </ul>
            ) : ("We don't have any reviews for this movie")}
        </div>
    )
}