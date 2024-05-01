import { Link } from "react-router-dom"
export default function ErrorPage() {
    return (
        <div>
            <p>💁‍♂️Oooops! Error...</p>
            <p>Please visit out <Link to="/">Home Page</Link></p>

        </div>
        
    )
}