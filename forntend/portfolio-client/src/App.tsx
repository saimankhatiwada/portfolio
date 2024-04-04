import { Route, Routes } from "react-router-dom";
import { HomePage } from "./pages/home-page";
import { ContactPage } from "./pages/contact-page";
import { MainHeader } from "./components/main-header";
import { ProjectPage } from "./pages/project-page";
import { BlogPage } from "./pages/blog-page";

export const App = () => {
  return (
    <>
      <MainHeader />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/projects" element={<ProjectPage />} />
        <Route path="/blogs" element={<BlogPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </>
  );
}

