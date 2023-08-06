import meter1 from "../assets/img/meter1.svg";
import meter3 from "../assets/img/meter3.svg";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import colorSharp from "../assets/img/color-sharp.png"

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className="skill" id="skills">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="skill-bx wow zoomIn">
                        <h2>Skills</h2>
                        <p>Greetings! I am an enthusiastic coder and web developer. My expertise lies in creating captivating digital experiences that seamlessly blend aesthetics and functionality.
                        With the power of HTML, CSS, and JavaScript, I bring designs to life, infusing interactivity and life into user interfaces. My expertise extends to modern tools like ReactJS and Bootstrap, which I leverage to build powerful and visually appealing web applications.
                        With a strong foundation in C and C++, I add an extra layer of depth and innovation to my coding skills.
                        </p>
                        <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                            <div className="item">
                                <img src={meter1} alt="Image" />
                                <h5>C /C++</h5>
                            </div>
                            <div className="item">
                                <img src={meter3} alt="Image" />
                                <h5>HTML, CSS</h5>
                            </div>
                            <div className="item">
                                <img src={meter3} alt="Image" />
                                <h5>JavaScript</h5>
                            </div>
                            <div className="item">
                                <img src={meter1} alt="Image" />
                                <h5>REACTJS</h5>
                            </div>
                            
                        </Carousel>
                    </div>
                </div>
            </div>
        </div>

       {/* Cards Section */}
       <div className="playlist-card">
      <div className="container">
        <div className="row">
          {/* Card 1 */}
          <div className="col-12 col-md-4">
          <div className="card-card">
              <div className="card-body">
                <h3>"Algorithmic Thinker"</h3>
                <p>"A Skilled DSA (Data Structures and Algorithms) Solver adept at untangling complex problems and creating efficient solutions."</p>
                <h4> PLATFORM:- </h4>
                <h5> VsCode, GFG, Interviewbit, CodeStudio
                </h5>      
            </div>
          </div>
          </div>

          {/* Card 2 */}
          <div className="col-12 col-md-4">
            <div className="card-card">
              <div className="card-body">
                <h3>Front-end Web Developer</h3>
                <p>"Code to Reality: Weaving, Innovating, and Infusing Life into Web Ideas."</p>
                <h4>Dev Tools </h4>
                <h5> VsCode, GitHub </h5>
              </div>
          </div>
          </div>

          {/* Card 3 */}
          <div className="col-12 col-md-4">
          <div className="card-card">
            <div className="card-body">
                <h3 >"My Proficient Subjects"</h3>
                <p >"Strong grasp of computer-related subjects, empowering me to excel in intricate technical domains."</p>
                <h4 >"Domain of Proficiency"</h4>
                <h5 > Operating Systems, DBMS, Oops </h5>
            </div>
          </div>
        </div>
      </div>
      </div>
      </div>
      <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  )
}