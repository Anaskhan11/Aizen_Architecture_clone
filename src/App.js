import Layout from "./Layout";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./Component/AboutUs/Main";
import MainGallery from "./Component/GallerySection/MainGallery";
import MainProjects from "./Component/Projects/MainProjects";
import MainSingleProjects from "./Component/Projects/MainSingleProjects";
import MainContactPage from "./Component/ContactUs/MainContactPage";
import ServiceMainPage from "./Component/Services/ServiceMainPage";
function App() {
  return (
    <>
      <div>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout />} />
            <Route path="/aboutus" element={<Main />} />
            <Route path="/gallery" element={<MainGallery />} />
            <Route path="/projects" element={<MainProjects />} />
            <Route path="/project-single" element={<MainSingleProjects />} />
            <Route path="/contactus" element={<MainContactPage />} />
            <Route path="/services" element={<ServiceMainPage />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
