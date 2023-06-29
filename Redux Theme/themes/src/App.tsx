import { useAppDispatch, useAppSelector } from "./store/hooks";
import { setLightMode, setDarkMode, setSiteMode } from "./store/slices/themes/themesSlice";

function App() {
  const mode = useAppSelector((state) => state.lightDarkMode.mode);
  const dispatch = useAppDispatch();

  const handleOnClickLight = () => {
    dispatch(setLightMode());
  };

  const handleOnClickDark = () => {
    dispatch(setDarkMode());
  };

  const handleOnClickSite = () => {
    dispatch(setSiteMode());
  };

  return (
    <>
      <span>Theme mode is: {mode}</span>

      <div>
        <label>
          {/* <input type="checkbox" checked={mode === "light"} onChange={handleOnClickLight} /> */}
          <input type="checkbox" checked={mode === "light"} onChange={handleOnClickLight} />
          Light Mode
        </label>
      </div>

      <div>
        <label>
          {/* <input type="checkbox" checked={mode === "dark"} onChange={handleOnClickDark} /> */}
          <input type="checkbox" checked={mode === "dark"} onChange={handleOnClickDark} />
          Dark Mode
        </label>
      </div>

      <div>
        <label>
          {/* <input type="checkbox" checked={mode === "site"} onChange={handleOnClickSite} /> */}
          <input type="checkbox" checked={mode === "site"} onChange={handleOnClickSite} />
          Site Mode
        </label>
      </div>
    </>
  );
}

export default App;
