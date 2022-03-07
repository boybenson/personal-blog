import React from "react";
import { Footer } from "./components/footer/index";
import { Header } from "./components/header/index";

const App: React.FC = (): JSX.Element => {
  return (
    <React.Fragment>
      <Header />
      <Footer />
    </React.Fragment>
  );
};

export default App;
