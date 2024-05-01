export default function SearchMovies({onSubmit}) {

    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        if (form.elements.query.value === "") {
            return alert("pleas, enter text to search")
        }
        onSubmit(form.elements.query.value)
        form.reset();
    }
    
    return (
        <div> 
            <form onSubmit={handleSubmit}> 
                <input type="text"
                placeholder="Search images and photos"
                autoComplete="off"
                autoFocus
                name="query" 
                />
                <button type="submit"> Search </button>
            </form>
        </div>
    )
}