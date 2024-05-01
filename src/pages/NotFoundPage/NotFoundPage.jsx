import { Link } from "react-router-dom"
export default function NotFoundPage() {
    return (
        <div>
            <p>"💁‍♂️Oops! We can't find the page you're looking for"</p>
            <p>Please visit out <Link to="/">Home Page</Link></p>

        </div>
        
    )
}