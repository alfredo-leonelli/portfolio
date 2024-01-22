import Footer from "./components/footer";
import NavBar from "./components/navbar";
import AboutMe from "./components/aboutMe";
import WorkExperience from "./components/workExperience";
import Divider from "./components/divider";

export default function Home() {
  return (
    <div>
      <link rel="icon" href="/alfredo.png" />
      <NavBar></NavBar>
      <Divider text="Sobre mi"></Divider>
      <AboutMe></AboutMe>
      <Divider text="Experiencia laboral"></Divider>
      <WorkExperience></WorkExperience>
      <Footer></Footer>
    </div>
  );
}
