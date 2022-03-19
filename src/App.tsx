import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Footer } from "./components/footer/index";
import { Header } from "./components/header/index";
import Home from "./pages/Home/home-container";
import SpecificPostContainer from "./pages/specific-post/specific-post-container";

const App: React.FC = (): JSX.Element => {
  return (
    <React.Fragment>
      <Header />
      <BrowserRouter>
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/post/:postId" element={<SpecificPostContainer />} />
          </Routes>
        </main>
      </BrowserRouter>
      <Footer />
    </React.Fragment>
  );
};

export default App;
