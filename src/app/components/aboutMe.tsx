import "../styles/aboutMe.css";

export default function AboutMe() {
  return (
    <div className="about-me-container">
      <div className="about-me-image-container">
        <img src="alfredo.png" alt="About me" />
      </div>
      <div className="text-container">
        <div className="introduction-container">
          <h1>Hola!</h1>
          <p className="mr-5">
            Soy Alfredo Leonelli, un analista programador titulado en 2023,
            apasionado por la tecnología. Mi enfoque se centra en el backend,
            donde resuelvo problemas de manera eficaz y creativa gracias a mis
            sólidos conocimientos técnicos sin dejar de lado mis habilidades
            blandas como el trabajo en equipo y liderazgo, esto gracias a mi
            experiencia con metodologías ágiles Scrum. En mis tiempos libres
            disfruto explorar mis hobbies como los videojuegos y la música,
            siendo esta última fundamental en mi vida. Estoy emocionado por
            formar parte del futuro de la programación trabajando en un equipo
            íntegro e innovador.
          </p>
        </div>
        <div className="knowledge-container">
          <h2>Conocimientos</h2>
          <ul>
            <li>
              <p>Lenguajes</p>
            </li>
            <li>
              <p>Herramientas</p>
            </li>
            <li>
              <p>Tecnologías</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
