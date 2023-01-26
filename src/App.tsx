import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./styles/main.scss";
import Footer from "./components/Footer";
import Header from "./components/Header";
import router from "./router";
import { Fragment, useState, useEffect } from "react";
import HomePage from "./pages/Home";
import Contact from "./pages/Contact";
import Blogs from "./pages/Blogs";
import ErrorPage from "./pages/ErrorPage";
import { ThemeContext } from "./ThemeContext";

function App() {
  const [theme, setTheme] = useState("light");

  const [toggle, setToggle] = useState(false);

  useEffect(() => {
    if (toggle) setTheme("dark");
    else setTheme("light");
  }, [toggle]);

  const changeTheme = () => {
    setToggle((toggle) => !toggle);
  };

  return (
    <ThemeContext.Provider value={theme}>
      <Router>
        <Fragment>
          <div className={`the-root ${theme}-background `}>
            <Header callBack={changeTheme} />
            <main className={`main-block main-${theme}`}>
              <Routes>
                <Route path="/" element={<HomePage />}></Route>
                <Route path="/contact" element={<Contact />}></Route>
                <Route path="/blogs" element={<Blogs />}></Route>
                <Route path="/404-not-found" element={<ErrorPage />}></Route>
                <Route path="*" element={<ErrorPage />}></Route>
              </Routes>
            </main>
            <Footer />
          </div>
        </Fragment>
      </Router>
    </ThemeContext.Provider>
  );
}

export default App;
