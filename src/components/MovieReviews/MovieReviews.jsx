import { useEffect, useState } from "react";
import { getMoviesReviews } from "../../movies-api";
import { useParams } from "react-router-dom";
import Loader from "../Loader/Loader";
import ErrorPage from "../ErrorPage/ErrorPage"


export default function MovieReview() {
    const [loading, setLoading] = useState(false);
    const [reviews, setReviews] = useState(null)
    const [error, setError] = useState(false)
    const { movieId } = useParams()

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
            {reviews && (
                <ul>
                    {reviews.results.map((item) => {
                        return (
                            <li key={item.id}>
                                <p>{item.author}</p>
                                <p>{item.content}</p>
                            </li>
                        )
                    })}
                </ul>
            )}
        </div>
    )
}