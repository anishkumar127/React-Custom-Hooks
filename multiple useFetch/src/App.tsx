import { useFetch } from "./hooks/useFetch"
import { BASE_URL, TODOS_BASE_URL } from "./constants/apiEndpoints";
function App() {
  const { data: users, loading: usersLoading, error: userError } = useFetch(BASE_URL);
  const { data: todos, loading: todosLoading, error: todosError } = useFetch(TODOS_BASE_URL);
  return (
    <>

      {usersLoading && <h1>loading.....</h1>}
      {userError && <h2>Error: something went wrong!.</h2>}
      {users.length}
      {

        users.map((item) => {
          console.log(item);
          return (
            <div key={item.id}>
              <li>{item.name}</li>
            </div>
          )
        })
      }

      <hr />
      {
        todos.map((item) => {
          console.log(item);
          return (
            <div key={item.id}>
              <li>{item.title}</li>
            </div>
          )
        })
      }
    </>
  )

}

export default App
