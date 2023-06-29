import { useFetch } from "./hooks/useFetch"
import { BASE_URL } from "./constants/apiEndpoints";
function App() {
  const { data, loading, error } = useFetch(BASE_URL);
  return (
    <>

      {loading && <h1>loading.....</h1>}
      {error && <h2>Error: something went wrong!.</h2>}
      {data.length}
      {
        data.map((item) => {
          // console.log(item);
          return (
            <div key={item.id}>
              <li>{item.name}</li>
            </div>
          )
        })
      }
    </>
  )

}

export default App
