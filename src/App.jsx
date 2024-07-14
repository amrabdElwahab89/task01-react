import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import Cover from "./components/cover/Cover";
import AboutUs from "./components/aboutUs/AboutUs";
import Services from "./components/servic/Services";
import Testymonial from "./components/testymonial/Testymonial";
import ContactUs from "./components/contactUs/ContactUs";
import BottomBar from "./components/bottomBar/BottomBar";

function App() {
  return (
    <>
      <div
        style={{ background: "#f5f5f5" }}
        className="  d-flex flex-column  container-fluid "
      >
        <Cover />
        <AboutUs />
        <Services />
        <Testymonial />
        <ContactUs />
        <BottomBar />
      </div>
    </>
  );
}

export default App;
