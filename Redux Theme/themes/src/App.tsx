import { useAppDispatch, useAppSelector } from "./store/hooks"
import { toggleLightDarkMode } from "./store/slices/themes/themesSlice";

function App() {
  const themesMode = useAppSelector(state => state.lightDarkMode.mode);
  const dispatch = useAppDispatch();

  const handleOnClick = (e) => {
    const value = e.target.value;
    dispatch(toggleLightDarkMode(value));
  }
  return (
    <>

      <span> themes is : <strong>{themesMode} </strong></span>

      <hr />
      <input
        type="checkbox"
        value="light"
        checked={themesMode === "light"}
        onChange={handleOnClick}
      />
      <label htmlFor="light">Light</label>

      <input
        type="checkbox"
        value="dark"
        checked={themesMode === "dark"}
        onChange={handleOnClick}
      />
      <label htmlFor="dark">Dark</label>

      <input
        type="checkbox"
        value="site"
        checked={themesMode === "site"}
        onChange={handleOnClick}
      />
      <label htmlFor="site">Site</label>

    </>
  )
}

export default App
