import { Benefits } from "./components/Benefits";
import { About } from "./components/About";
import { Header } from "./components/Header";
import { Home } from "./components/Home";
import { Reservation } from "./components/Reservation";
import { SlideShow } from "./components/SlideShow";
import { SpecialServices } from "./components/SpecialServices";
import { GlobalStyle } from "./styles/global";

export function App() {

  return (
    <>
      <Header />
      <Home />
      <section>
        <SpecialServices />
        <About />
        <Reservation />
      </section>
      <SlideShow/>
      <Benefits/>
      <GlobalStyle />
    </>
  );
}

