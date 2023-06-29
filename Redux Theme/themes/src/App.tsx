import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from "./store/hooks";
import { setThemesMode } from "./store/slices/themes/themesSlice";

function App() {
  const mode = useAppSelector((state) => state.lightDarkMode.mode);
  const dispatch = useAppDispatch();

  const handleOnClickThemesMode = (mode: string) => () => {
    dispatch(setThemesMode(mode));
  };

  useEffect(() => {
    if (mode === "light") {
      document.body.style.backgroundColor = "#f3f2f1";
    } else if (mode === "dark") {
      document.body.style.backgroundColor = "#212121";
    } else {
      document.body.style.backgroundColor = "white";
    }
  }, [mode]);

  return (
    <>
      <span>Theme mode is: {mode}</span>
      <div>
        <label>
          <input
            type="checkbox"
            checked={mode === "light"}
            onChange={handleOnClickThemesMode("light")}
          />
          Light Mode
        </label>
      </div>

      <div>
        <label>
          <input
            type="checkbox"
            checked={mode === "dark"}
            onChange={handleOnClickThemesMode("dark")}
          />
          Dark Mode
        </label>
      </div>

      <div>
        <label>
          <input
            type="checkbox"
            checked={mode === "site"}
            onChange={handleOnClickThemesMode("site")}
          />
          Site Mode
        </label>
      </div>
    </>
  );
}

export default App;
