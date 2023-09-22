import { Navbar } from "./components/Navbar/Navbar";
import { Container } from "./components/layout/Container";
import { Certifications } from "./components/section/Certifications";
import { Footer } from "./components/section/Footer";
import { Projects } from "./components/section/Projects";
import { Technologies } from "./components/section/Technologies";
import { Welcome } from "./components/section/Welcome";

export const App = () => {
  return (
    <>
      <Navbar />
      <Container>
        <Welcome />
        <Technologies />
        <Projects />
        <Certifications />
      </Container>
      <Footer />
    </>
  );
};
