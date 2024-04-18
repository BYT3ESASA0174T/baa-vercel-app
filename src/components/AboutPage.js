import { useEffect, useMemo, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim"; 
import NavBar from './NavBar';
import Footer from './Footer';
import './AboutPage.css'
import AboutPic from '../assets/about-pic.jpg'

const AboutPage = () => {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const particlesLoaded = (container) => {
    // console.log(container);
  };

  const options = useMemo(
    () => ({
      background: {
        color: {
          value: "#000000",
        },
      },
      fpsLimit: 120,
      interactivity: {
        events: {
          onClick: {
            enable: true,
            mode: "push",
          },
          onHover: {
            enable: true,
            mode: "repulse",
          },
        },
        modes: {
          push: {
            quantity: 4,
          },
          repulse: {
            distance: 200,
            duration: 0.4,
          },
        },
      },
      particles: {
        color: {
          value: "#ffffff",
        },
        links: {
          color: "#ffffff",
          distance: 150,
          enable: true,
          opacity: 0.5,
          width: 1,
        },
        move: {
          direction: "none",
          enable: true,
          outModes: {
            default: "bounce",
          },
          random: false,
          speed: 6,
          straight: false,
        },
        number: {
          density: {
            enable: true,
          },
          value: 80,
        },
        opacity: {
          value: 0.5,
        },
        shape: {
          type: "circle",
        },
        size: {
          value: { min: 1, max: 5 },
        },
      },
      detectRetina: true,
    }),
    [],
  );

  if (init) {

    return (
      <>
        <Particles
          id="tsparticles"
          particlesLoaded={particlesLoaded}
          options={options}
        />
        <NavBar />
        <div className="ap-content">
          <div className="aboutme">
            <h1>ABOUT ME</h1>
            <img className="about-pic" src={AboutPic} alt="author-picture"/>
            <h2>Matthias Wimmer</h2>
            <p>
                I am 28 years old and have been interested in information technology since a very early age. My interest turned into a passion and since then I have been dealing with topics such as cyber security, network technology, web and software development and databases almost every day. Thanks to my apprenticeship as an IT technician which I completed in the year of 2016 and the various companies I worked for afterwards I was able to consolidate and expand my knowledge.
            </p>
            <p>
            My main focus now is on offensive cyber security and I am trying to expand my knowledge in a targeted manner so that I can take up a serious job in this field. You can find more information about me and my projects in the following links:
            </p>
            <div className="social-links">
                <a href="https://github.com/BYT3ESASA0174T" target="_blank" rel="noopener noreferrer">
                    <img src="https://github.com/favicon.ico" alt="GitHub" />
                </a>
                <a href="https://linkedin.com/in/matthias-wimmer-795200186" target="_blank" rel="noopener noreferrer">
                    <img src="https://linkedin.com/favicon.ico" alt="LinkedIn" />
                </a>
            </div>
          </div>
          <div className="contributions">
            <h4>Contributions:</h4>
            <p>
                Website-Main-Background: particles.js from <a href="https://vincentgarreau.com/particles.js/" target="_blank">Link</a>; Skills-Page-Cyber-Security-Picture: Image by <a href="https://pixabay.com/users/geralt-9301/?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=5199236">Gerd Altmann</a> from <a href="https://pixabay.com//?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=5199236">Pixabay</a>; Skills-Page-Network-Technology-Picture: <a href="https://www.freepik.com/free-ai-image/computer-lab-equipment-futuristic-tech-industry-generated-by-ai_41595854.htm#fromView=search&page=1&position=2&uuid=919def05-d45d-4fde-8882-aaa674537e92">Image by vecstock on Freepik</a>; Skills-Page-Web-Development-Picture: Image by <a href="https://pixabay.com/users/boskampi-3788146/?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=1873854">Boskampi</a> from <a href="https://pixabay.com//?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=1873854">Pixabay</a>; Skills-Page-Software-Development-Picture: Image by <a href="https://pixabay.com/users/aaronjolson-4628445/?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=5091352">Aaron Olson</a> from <a href="https://pixabay.com//?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=5091352">Pixabay</a>; Skills-Page-Databases-Picture: Image by <a href="https://pixabay.com/users/cookieone-14478386/?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=8097838">Panumas Nikhomkhai</a> from <a href="https://pixabay.com//?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=8097838">Pixabay</a>;
            </p>
          </div>
          <Footer />
        </div>
        
      </>
       
    );
  }
}

export default AboutPage;