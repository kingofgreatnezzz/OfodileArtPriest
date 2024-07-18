import React from "react";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import Typewriter from "typewriter-effect";
import { introdata, meta } from "../../content_option";
import Artwork from "../../components/Art/Artwork";
import port from "../../../src/assets/images/Expression.jpg"
import backpic from "../../assets/images/backk.jpg";

const backimg = {
  backgroundImage: `url(${backpic})`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
};

export const Home = () => {
  return (
    <HelmetProvider>
      <section id="home" className="home">
        <Helmet className="">
          <meta charSet="utf-8" />
          <title> {meta.title}</title>
          <meta name="description" content={meta.description} />
        </Helmet>
        <div
          style={backimg}
          className="intro_sec d-block d-lg-flex align-items-center justify-center"
        >
          {/* image side */}
          <div className="h-80 w-80 bg-purple-700 rounded-full m-8 relative">
          <img src={port} alt="portfolio" className="rounded-full" width={500} height={500}/>
          </div>
          {/* text side */}

          <div className="text order-2 order-lg-1 h-100 d-lg-flex justify-content-center md:pt-14">
            <div className="align-self-center ">
              <div className="intro mx-auto  backdrop-blur p-3 rounded-lg ">
                <h2 className="mb-1x text-lg ">{introdata.title}</h2>
                <h1 className="fluidz-48 mb-1x text-yellow-600">
                  <Typewriter
                    options={{
                      strings: [
                        introdata.animated.first,
                        introdata.animated.second,
                        introdata.animated.third,
                        introdata.animated.fourth,
                        introdata.animated.fifth,
                        introdata.animated.sixth,
                      ],
                      autoStart: true,
                      loop: true,
                      deleteSpeed: 10,
                    }}
                  />
                </h1>
                <p className="mb-1x">{introdata.description}</p>
                {/* buttons place */}
              </div>
            </div>
          </div>
        </div>
        <Artwork />
      </section>
    </HelmetProvider>
  );
};
