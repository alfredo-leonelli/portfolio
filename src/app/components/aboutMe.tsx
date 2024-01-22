import Image from "next/image";
import "../styles/aboutMe.css";

export default function AboutMe() {
  return (
    <div className="about-me-container">
      <div className="about-me-image-container">
        <Image
          src="/images/alfredoAboutMe.png"
          alt="About me IMG"
          width={3300}
          height={2550}
        ></Image>
        <h3 className="about-me-credits">
          Créditos a{" "}
          <a href="https://www.instagram.com/uviboo/" target="_blank">
            <strong>UviBoo</strong>
          </a>
        </h3>
      </div>
      <div className="text-container">
        <div className="introduction-container">
          <h1 className="about-me-title">
            <strong>¡Hola, mundo!</strong>
          </h1>
          <p className="mr-5">
            Soy Alfredo Leonelli, analista programador titulado en 2023
            apasionado por la tecnología. Mi enfoque se centra en el backend,
            donde resuelvo problemas de manera eficaz y creativa gracias a mis
            sólidos conocimientos técnicos sin dejar de lado mis habilidades
            blandas como el trabajo en equipo y liderazgo, esto gracias a mi
            experiencia con metodologías ágiles. En mis tiempos libres disfruto
            explorar mis hobbies como los videojuegos y la música, siendo esta
            última fundamental en mi vida. Estoy emocionado por formar parte del
            futuro de la programación trabajando en un equipo íntegro e
            innovador.
          </p>
        </div>
        <div className="knowledge-container">
          <h2 className="about-me-title">
            <strong>Conocimientos técnicos</strong>
          </h2>
          <ul>
            <li>
              <p>
                <strong>Lenguajes:</strong> JavaScript, TypeScript, C#, C++,
                Java, SQL.
              </p>
            </li>
            <li>
              <p>
                <strong>Herramientas:</strong> Trello, Azure DevOps, SCRUM.
              </p>
            </li>
            <li>
              <p>
                <strong>Tecnologías, frameworks:</strong> NodeJS, ExpressJS,
                React, MongoDB, Mongoose, Spring Boot, Power Platform, Git.
              </p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
