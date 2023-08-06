import React, { useEffect, useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { ArrowRightCircle } from 'react-bootstrap-icons'
import headerImg from "../assets/img/header-img.svg"
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export default function Banner() {
    const toRotate = [ "Software Engineer", "Web Designer", "Web Developer" ];
    const [isDeleting, setIsDeleting] = useState(false);
    const [loopNum, setLoopNum] = useState(0);
    const [text, setText] = useState('');
    const [delta, setDelta] = useState(300 - Math.random() * 100);
    const period = 2000;

    useEffect(() => {
        let ticker = setInterval(() => {
          tick();
        }, delta);
    
        return () => { clearInterval(ticker) };
      }, [text])

      const tick = ()=>{
        let i=loopNum% toRotate.length;
        let fullText= toRotate[i];
        let updatedText = isDeleting ? fullText.substring(0, text.length -1) : fullText.substring(0, text.length +1)
        setText(updatedText);
        if(isDeleting){
            setDelta(prevDelta => prevDelta/2)
        }
        if(!isDeleting && updatedText === fullText){
            setIsDeleting(true);
            setDelta(period);
        }else if(isDeleting && updatedText === ''){
            setIsDeleting(false);
            setLoopNum(loopNum+1);
            setDelta(500);
        }
    }
    

  
  return (
    <section className='banner' id='home'>
        <Container>
        <Row className='align-items-center'>
            <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
            <span className="tagline">Welcome to my Portfolio</span>
            <h1>{`Hi! I'm Prachi,`} <span className="wrap" >{text}</span> </h1>
            <p className='bold_it'>Hi there, I'm Prachi, currently in my final year of Civil Engineering at NIT Kurukshetra,</p>
            <p>Step into my digital realm! I'm an avid coder and web enthusiast, poised to embark on a journey fueled by creativity and innovation. With a solid foundation in C and C++,  I've accomplished solving more than 600 questions across GeeksForGeeks, InterviewBit, and CodeStudio. This rewarding journey has enabled me to truly excel in Data Structures and Algorithms, showcasing my strong problem-solving abilities and a deep-rooted coding enthusiasm. My skill set extends into the dynamic realm of web development, where I specialize in HTML, CSS, and JavaScript. These tools allow me to sculpt content and craft interfaces that seamlessly marry aesthetics with functionality. I'm also adept at leveraging the capabilities of ReactJS and Bootstrap, empowering me to construct captivating, contemporary web experiences. Let's journey together as we unravel the boundless potential of code and design, translating visions into reality,pixel by pixel. </p>
            
            <button onClick={() => console.log('connect')}>Let’s Connect <ArrowRightCircle size={25} /></button>
            </div>}
            </TrackVisibility>
            </Col>
            <Col xs={12} md={6} xl={5}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__zoomIn" : ""}>
            <img src={headerImg} alt='Header Img' />
            </div>}
            </TrackVisibility>
            </Col>
        </Row>
        </Container>
    </section>
    )
}
