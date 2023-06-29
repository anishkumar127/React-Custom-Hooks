import { useAppDispatch, useAppSelector } from "./store/hooks";
import { setThemesMode } from "./store/slices/themes/themesSlice";

function App() {
  const mode = useAppSelector((state) => state.lightDarkMode.mode);
  const dispatch = useAppDispatch();

  // const handleOnClickThemesMode = (selectedMode: string) => {
  //   dispatch(setThemesMode(selectedMode));
  // }

  const handleOnClickThemesMode = (mode: string) => () => {
    dispatch(setThemesMode(mode));
  };

  return (
    <>
      <span>Theme mode is: {mode}</span>

      {/* <div>
        <label>
          <input type="checkbox" checked={mode === "light"} onChange={() => handleOnClickThemesMode("light")} />
          Light Mode
        </label>
      </div>

      <div>
        <label>
          <input type="checkbox" checked={mode === "dark"} onChange={() => handleOnClickThemesMode("dark")} />
          Dark Mode
        </label>
      </div>

      <div>
        <label>
          <input type="checkbox" checked={mode === "site"} onChange={() => handleOnClickThemesMode("site")} />
          Site Mode
        </label>
      </div>
       */}

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
