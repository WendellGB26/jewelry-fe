import React,{ useState, useEffect} from 'react';
import { Parallax } from "react-parallax";
import ReactPlayer from "react-player";
import { Carousel } from 'react-bootstrap';


import hero from "../../assets/videos/Hero.mp4"
import cadenaHombre from '../../assets/videos/Cadenas_Hombre.mp4'
import relojHombre from '../../assets/videos/Reloj_Hombre.mp4'
import anillosHombre from '../../assets/videos/Anillos_Hombre.mp4'

import relojMujer from '../../assets/videos/Reloj_Mujer.mp4'
import cadenajMujer from '../../assets/videos/Cadenas_Mujer.mp4'
import aretesMujer from '../../assets/videos/Aretes_Mujer.mp4'
import anillossMujer from '../../assets/videos/Anillos_Mujer.mp4'

import './home.css';

function Home() {
  const videosHombre = [cadenaHombre, relojHombre, anillosHombre]; // Array con los URLs de los videos
  const videosMujer = [aretesMujer, cadenajMujer, relojMujer, anillossMujer];
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear"
  };
  
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const onLoadedData = () => {
    setIsVideoLoaded(true);
  };
  return (
    <div>
      <Parallax strength={300}>
        <div className="content h-screen relative">
          <div className='video-container' style={{ opacity: isVideoLoaded ? 1 : 0 }}>
            <ReactPlayer
              url={hero}
              playing={true}
              controls={false}
              loop={true}
              muted={true}
              playsinline={true}
              onReady={onLoadedData}
              className="react-player scale-125 w-full min-h-fit"
              width="100%"
              height="fit-content"
            />
            <div className="text-overlay w-full">
              <a className="text-title font-sans font-extrabold">
                JEWELRY RAW STORE
              </a>
            </div>
          </div>

        </div>
      </Parallax>

      <Parallax strength={300}>
        <div className="content h-screen relative">
          <Carousel indicators={false} controls={false} interval={2000} pause={false}>
            {(isMobile ? videosMujer.slice(0, 1) : videosMujer).map((video, index) => {
              return (
                <Carousel.Item key={index} style={{ opacity: isVideoLoaded ? 1 : 0 }}>
                  <ReactPlayer
                    url={video}
                    playing={true}
                    controls={false}
                    loop={true}
                    muted={true}
                    playsinline={true}
                    onReady={onLoadedData}
                    className="react-player w-full min-h-fit"
                    width="100%"
                    height="fit-content"
                  />
                  <Carousel.Caption className="caption">
                    <a href="/products/caballero" className='text-subtitle text-white font-bold'>Dama</a>
                  </Carousel.Caption>
                </Carousel.Item>
              )
            })}
          </Carousel>
        </div>
      </Parallax>

      <Parallax strength={300}>
        <div className="content h-screen relative">
          <Carousel indicators={false} controls={false} interval={2000} pause={false}>
            {(isMobile ? videosHombre.slice(0, 1) : videosHombre).map((video, index) => {
              return (
                <Carousel.Item key={index} style={{ opacity: isVideoLoaded ? 1 : 0 }}>
                  <ReactPlayer
                    url={video}
                    playing={true}
                    controls={false}
                    loop={true}
                    muted={true}
                    playsinline={true}
                    onReady={onLoadedData}
                    className="react-player w-full min-h-fit"
                    width="100%"
                    height="fit-content"
                  />
                  <Carousel.Caption className="caption">
                    <a href="/products/caballero" className='text-subtitle text-white font-bold'>Caballero</a>
                  </Carousel.Caption>
                </Carousel.Item>
              )
            })}
          </Carousel>
        </div>
      </Parallax>
    </div>
  );
}

export default Home;
