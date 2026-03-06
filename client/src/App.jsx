import { Outlet } from "react-router-dom"
import { useEffect } from "react";
import ScrollToTop from './components/ScrollToTop';
// // import PageTitle from "./components/page-title/PageTitle";
import AOS from "aos";

const App = () => {

  // AOS Init
  useEffect(() => {
    AOS.init({
      duration: 1000,
      offset: 100,
      // once: true,
    });
  }, []);

  // Refresh AOS on scroll
  useEffect(() => {
    const handleScroll = () => {
      AOS.refresh();
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      {/* <PageTitle/> */}
      <Outlet />
      <ScrollToTop />
    </>
  )
}

export default App
