import "./styles/index.scss";
import { Routes, Route, Link } from "react-router-dom";
import { MainPageLazy } from "./pages/MainPage/MainPageLazy";
import { AboutPageLazy } from "./pages/AboutPage/AboutPageLazy";
import { Suspense} from "react";
import { useTheme } from "./theme/useTheme";
import { classNames } from "./helpers/classNames/classNames";

const App = () => {
  const {theme, toggleTheme} = useTheme();

  return (
    <div className={classNames('app', {}, [theme])}>
      <button onClick = {toggleTheme}>Toggle theme</button>
      <Link to={"/"}>Главная</Link>
      <Link to={"/about"}>О сайте</Link>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path={"/"} element={<MainPageLazy />} />
          <Route path={"/about"} element={<AboutPageLazy />} />
        </Routes>
      </Suspense>
    </div>
  );
};

export default App;
