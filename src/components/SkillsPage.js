import { useEffect, useMemo, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim"; 
import NavBar from './NavBar';
import './SkillsPage.css'
import CyberSecImage from '../assets/cyber-security.jpg'
import CompNetImage from '../assets/computer-networking.jpg'
import DatabasesImage from '../assets/databases.jpg'
import WebDevImage from '../assets/web-development.jpg'
import SwDevImage from '../assets/software-development.jpg'

const SkillsPage = () => {
  const [init, setInit] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showContent, setShowContent] = useState(false);
  const [hideContent, setHideContent] = useState(false);

  const items = [
    {
      image: CyberSecImage,
      author: 'since 2016',
      title: 'Cyber Security',
      description: 'I made Cyber Security my primary field learning from platforms like THM, hackerone, INE, Udemy and more. Always trying to extend my knowledge to overcome more CTFs and Bug Bounties with the goal of getting a serious job in this field.',
    },
    {
      image: CompNetImage,
      author: 'since 2012',
      title: 'Network Technology',
      description: 'Network technology is an area that has occupied me for a long time. Every day I deal with topics in the areas of virtualization, routing, network protocols and services. I also use this knowledge to provide entire test networks for my activities in the field of cyber security.',
    },
    {
        image: WebDevImage,
        author: 'since 2008',
        title: 'Web Development',
        description: 'I started building up knowledge in this area a long time ago, primarily to create websites that offer me functionality and automation for my tasks and goals. I work with technologies and languages such as HTML, CSS, Javascript, PHP and various frameworks such as Node.js, React and much more. Also APIs are a very important part of this process.',
    },
    {
        image: SwDevImage,
        author: 'since 2008',
        title: 'Software Development',
        description: 'I developed a passion for programming languages and software functionality a long time ago. Since then, I have gained experience with programming languages such as Java, C, C++, C#, Python, but also with topics such as CI/CD pipelines (e.g. GIT) or scripting languages like Powershell or Bash. I now primarily use this experience to build tools that make my work a lot easier.',
    },
    {
        image: DatabasesImage,
        author: 'since 2008',
        title: 'Databases',
        description: 'In order to implement more complex projects, it was essential for me to acquire knowledge in the area of databases. I mainly work with databases such as MySQL and MongoDB.',
    },
    // Add more items here...
  ];

  const showSlider = (type) => {
    setHideContent(true);
    setTimeout(() => {
      let newIndex = currentIndex;
      if (type === 'next') {
        newIndex = (currentIndex + 1) % items.length;
      } else if (type === 'prev') {
        newIndex = (currentIndex - 1 + items.length) % items.length;
      }
      setCurrentIndex(newIndex);
    }, 500); // Change the item after the blur out animation finishes
  };

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  useEffect(() => {
    setHideContent(false);
    const timeoutId = setTimeout(() => {
      setShowContent(true);
    }, 500); // Start showing the content 500ms after the item changes
    return () => clearTimeout(timeoutId); // Clear the timeout if the item changes before the timeout finishes
  }, [currentIndex]);

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
    const currentItem = items[currentIndex];
    const nextIndex = (currentIndex + 1) % items.length;
    const thumbnailOrder = [...items.slice(nextIndex), ...items.slice(0, nextIndex)];

    return (
      <>
        <Particles
          id="tsparticles"
          particlesLoaded={particlesLoaded}
          options={options}
        />
        <NavBar />
        <div className="sp-content">
          <div className="carousel">
            <div className="list">
              <div className="item">
                <img src={currentItem.image}/>
                <div className={`content ${showContent ? 'show' : ''} ${hideContent ? 'hide' : ''}`}>
                  <div className="author">{currentItem.author}</div>
                  <div className="title">{currentItem.title}</div>
                  {/* <div className="topic">{currentItem.topic}</div> */}
                  <div className="description">{currentItem.description}</div>
                  <div className="buttons">
                    <button onClick={()=> window.open('https://github.com/BYT3ESASA0174T', '_blank')}>SEE MORE</button>
                    <button onClick={()=> window.location.href='mailto:example@example.com'}>CONTACT ME</button>
                  </div>
                </div>
              </div>
            </div>
            <div className="thumbnail">
              {thumbnailOrder.map((item, index) => (
                <div className="item" key={index}>
                  <img src={item.image} />
                  <div className="content">
                    <div className="title">{item.title}</div>
                    <div className="description">{item.description}</div>
                  </div>
                </div>
              ))}
            </div>
            <div className="arrows">
              <button onClick={() => showSlider('prev')}>{'<'}</button>
              <button onClick={() => showSlider('next')}>{'>'}</button>
            </div>
            <div className="time"></div>
          </div>
        </div>
      </>
    );
  }
}

export default SkillsPage;
