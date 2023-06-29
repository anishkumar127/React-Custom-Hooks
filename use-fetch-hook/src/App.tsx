// // import { useFetch } from "./hooks/useFetch"
// import { useFetch } from "./useFetchWithoutToken";
// import { BASE_URL, TODOS_BASE_URL } from "./constants/apiEndpoints";
// import User from "./User";
// import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
// function App() {
//   const { state: { data: users, loading: usersLoading, error: userError }, refetch: refetchUser } = useFetch(BASE_URL);
//   const { state: { data: todos, loading: todosLoading, error: todosError }, refetch: refetchTodos } = useFetch(TODOS_BASE_URL);

//   return (
//     <BrowserRouter>
//       <>
//         <Routes>
//           <Route path="/users" element={<User />} />
//         </Routes>

//         <hr />

//         <Link to="/users">Users Page</Link>

//         <hr />
//         <hr />
//         <hr />

//         {usersLoading && <h1>loading.....</h1>}
//         {userError && <h2>Error: something went wrong!.</h2>}
//         {users.length}
//         {

//           users.map((item) => {
//             console.log("users", item);
//             return (
//               <div key={item.id}>
//                 <li>{item.name}</li>
//               </div>
//             )
//           })
//         }

//         <hr />
//         {
//           todos.map((item) => {
//             console.log("todos", item);
//             return (
//               <div key={item.id}>
//                 <li>{item.title}</li>
//               </div>
//             )
//           })
//         }

//         <hr />

//         <button onClick={refetchUser}>Refetch Users</button>
//         <button onClick={refetchTodos}>Refetch Todos</button>
//       </>
//     </BrowserRouter >

//   )

// }

// export default App


// import { useFetch } from "./useFetch";
import { useFetch } from "./hooks/useFetchWithoutToken";
import { BASE_URL, TODOS_BASE_URL } from "./constants/apiEndpoints";
import User from "./User";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

function App() {
  const { state: { data: users, loading: usersLoading, error: userError }, refetch: refetchUser } = useFetch(BASE_URL);
  const { state: { data: todos, loading: todosLoading, error: todosError }, refetch: refetchTodos } = useFetch(TODOS_BASE_URL);

  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route path="/users" element={<User />} />
        </Routes>

        <hr />

        <Link to="/users">Users Page</Link>

        <hr />
        <hr />
        <hr />

        {usersLoading && <h1>loading.....</h1>}
        {userError && <h2>Error: something went wrong!.</h2>}
        {users.length}
        {
          users.map((item) => {
            console.log("users", item);
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
            console.log("todos", item);
            return (
              <div key={item.id}>
                <li>{item.title}</li>
              </div>
            )
          })
        }

        <hr />

        <button onClick={refetchUser}>Refetch Users</button>
        <button onClick={refetchTodos}>Refetch Todos</button>
      </div>
    </BrowserRouter>
  );
}

export default App;
