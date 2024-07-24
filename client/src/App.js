import Layout from "./components/Layout";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Education from "./pages/Education";
import Projects from "./pages/Projects";
import Techstack from "./pages/Techstack";
import WorkExp from "./pages/WorkExp";
import "./App.css";
import { useTheme } from "./context/ThemeContext";
import MobileNav from "./components/MobileNav";
import { Toaster } from "react-hot-toast";

function App() {
  const [theme] = useTheme();
  return (
    <>
      <div><Toaster/></div>
      
      <div id={theme}>
        <MobileNav />
        <Layout />
        <div className="container">
          <About />
          <Education />
          <Techstack />
          <Projects />
          <WorkExp />
          <Contact />
        </div>
        <div className="footer pb-3 ms-3">
          <h4 className="text-center">Made By Balvant &copy; 2023</h4>
        </div>
      </div>
    </>
  );
}

export default App;
