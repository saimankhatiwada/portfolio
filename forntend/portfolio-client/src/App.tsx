import { Route, Routes } from "react-router-dom";
import { HomePage } from "./pages/home-page";
import { ContactPage } from "./pages/contact-page";
import { MainHeader } from "./components/main-header";
import { Footer } from "./components/footer";

export const App = () => {
  return (
    <>
      <MainHeader />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
      <Footer />
    </>
  );
}

