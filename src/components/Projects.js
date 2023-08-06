import React from "react";
import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import projImg4 from "../assets/img/project-img4.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {
  const projects = [
    {
      title: "Beats (A musical Web Application)",
      description: " I have developed a Spotify clone using React.js, JavaScript, HTML, and CSS as a part of my portfolio. The application replicates the user interface of Spotify, featuring sections such as Home, Browse, Search, and Your Library. Users can explore curated playlists, albums, and new releases, along with interactive playback controls and a responsive design optimized for various devices. The app utilizes the Spotify API to fetch real music data, enabling users to search for tracks, artists, and albums in real-time. This project demonstrates my skills in UI/UX design, API integration, responsive layouts, and modular coding using React components. The clone is deployed on Netlify for seamless access and showcasing my capabilities as a frontend developer.",
      link:"",
      imgUrl: projImg4,
      
     },
    {
      title: "2048 (A fun Puzzle game)",
      description: "I have created my creation of a 2048 puzzle game application, meticulously crafted using React.js, JavaScript, HTML, and CSS, as a notable addition to my portfolio. This engaging game offers players an intellectually stimulating experience where strategic moves merge numbered tiles with the ultimate goal of achieving the elusive 2048 tile. Through this project, I not only demonstrate my adeptness in frontend development and responsive design but also showcase my keen attention to user experience and interactive interface design. By employing React components, I have seamlessly incorporated intricate game mechanics, captivating animations, and an adaptive layout, ensuring an enjoyable gameplay journey across various devices.",
      link: "https://64c7eebf476f552c0bc14bac--spectacular-sprinkles-8f6f06.netlify.app/",
      imgUrl: projImg1,
     
    },
    {
      title: "Made with love(A recipee web application)",
      description: "I am delighted to introduce my latest creation, a dynamic recipe app developed using the power of React.js, JavaScript, HTML, and CSS, designed to elevate my portfolio. This culinary platform provides users with an immersive culinary experience, offering a vast collection of delectable recipes that cater to diverse tastes and preferences. Through seamless navigation and an intuitive user interface, visitors can explore a rich assortment of recipes, each accompanied by detailed ingredient lists, step-by-step instructions, and mouthwatering images. By incorporating responsive design principles, I've ensured that users can access this culinary treasure trove from various devices, enhancing their cooking journey. This project showcases my proficiency in frontend development, UI/UX design, and API integration, underscoring my ability to create engaging and functional web applications that delight users and elevate their digital experience.",
      link: "https://thriving-melba-2b1aac.netlify.app/",
      imgUrl: projImg2,
     
    },
    {
        title: "Personal Portfolio",
        description: " My static portfolio stands as a testament to my expertise in HTML, CSS, JavaScript and reactJS. It's structured into key sections: 'About Me' offers insights into my journey, while 'Projects' vividly displays my work with comprehensive descriptions and visuals. The 'Skills' segment showcases my competencies, and a user-friendly 'Contact' segment ensures effortless communication. Boasting a responsive design, my portfolio guarantees accessibility on various devices, underscoring my commitment to impactful web solutions. Embark on a journey through my skills, experiences, and genuine enthusiasm for front-end development in this captivating display.",
        link: "",
        imgUrl: projImg3,
       
      },
  ];

  return (
    <section className="project" id="project">
    <Container>
      <Row>
        <Col xs={12}>
          <TrackVisibility>
            {({ isVisible }) => (
              <div className={`animate__animated ${isVisible ? "animate__fadeIn" : ""}`}>
                <h2>Projects</h2>
                <p>
                  {/* Your project introduction text */}
                </p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Link eventKey="first">Let's explore</Nav.Link>
                  </Nav>
                  <Tab.Pane eventKey="first">
                    <div className="project-list">
                      {projects.map((project, index) => (
                        <ProjectCard key={index} {...project} />
                      ))}
                    </div>
                  </Tab.Pane>
                </Tab.Container>
              </div>
            )}
          </TrackVisibility>
        </Col>
      </Row>
    </Container>
    <img className="background-image-right" src={colorSharp2} alt="Background" />
  </section>
  );
};
