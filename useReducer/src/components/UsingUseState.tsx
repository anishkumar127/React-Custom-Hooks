import { useState } from 'react'
function UsingUseState() {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    const [post, setPost] = useState({})
    const handleFetch = async () => {

        try {
            setLoading(true);
            setError(false);
            const response = await fetch("https://jsonplaceholder.typicode.com/users")
            const data = await response.json();
            console.log(data);
            setPost(data);
            setLoading(false);
        } catch (error) {
            setLoading(false);
            setError(true);
        }

    }
    return (
        <>
            <button onClick={handleFetch}>
                {loading ? "wait..." : "Fetch the post"}
            </button>

            <p>{post[0]?.name}</p>
            <span>{error && "something went wrong!"}</span>
        </>
    )
}

export default UsingUseState
