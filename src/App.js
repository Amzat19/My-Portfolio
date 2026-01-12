import { useEffect, useState } from "react";
import AboutMe from "./components/AboutMe";
import Experience from "./components/Experience";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Projects from "./Projects";

const App = () => {
  const [theme, setTheme] = useState(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  }, []);

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  const handleSwitchTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };
  return (
    <div className="dark:bg-slate-900 bg-[#F2F2F2]">
      <Header handleSwitchTheme={handleSwitchTheme} />
      <AboutMe theme={theme} />
      <Experience />
      <Projects />
      <Footer />
    </div>
  );
};

export default App;
