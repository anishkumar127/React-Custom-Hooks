import { BASE_URL } from './constants/apiEndpoints'
import { useFetch } from './hooks/useFetchWithoutToken'
const User = () => {
    const { state: { data, loading, error }, refetch } = useFetch(BASE_URL)
    return (
        <div>Hello Users
            {
                data.map((item) => {
                    return (
                        <div key={item.id}>
                            <li>{item.name}</li>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default User