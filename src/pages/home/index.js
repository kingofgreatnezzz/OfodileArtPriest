import React from "react";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import Typewriter from "typewriter-effect";
import {
  FaPinterest,
  FaInstagram,
  FaWhatsapp,
  FaFacebook,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { introdata, meta, socialprofils } from "../../content_option";
import Artwork from "../../components/Art/Artwork";
import port from "../../../src/assets/images/ofodile.jpeg";
import backpic from "../../assets/images/backk.jpg";
import { Link } from "react-router-dom";

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
          <div className="flex flex-col justify-center items-center pt-5">
            <div className="h-80 w-80 bg-purple-700 rounded-full relative ">
              <img
                src={port}
                alt="portfolio"
                className="rounded-full overflow-hidden object-cover h-80 w-96 "
                width={500}
                height={400}
              />
            </div>

            <div className="flex gap-2 text-white hover:text-gray-600 pt-3">
              <Link to={socialprofils.instagram}>
                <FaXTwitter className="h-6 w-6 hover:text-gray-600 " />
              </Link>
              <Link to={socialprofils.instagram}>
                <FaInstagram className="h-6 w-6  hover:text-gray-300 " />
              </Link>
              <Link to={socialprofils.whatsapp}>
                <FaWhatsapp className="h-6 w-6  hover:text-gray-300 " />
              </Link>

              <Link to={socialprofils.facebook}>
                <FaFacebook className="h-6 w-6 hover:text-gray-300 " />
              </Link>

              <Link to={socialprofils.pintrest}>
                <FaPinterest className="h-6 w-6 hover:text-gray-300" />
              </Link>
            </div>
          </div>
          {/* text side */}

          <div className="text order-2 order-lg-1 h-100 d-lg-flex justify-content-center md:pt-14 mt-3">
            <div className="align-self-center pb-3">
              <div className="intro mx-auto  backdrop-blur p-2 rounded-lg ">
                <h2 className="mb-1x text-lg">{introdata.title}</h2>
                <h1 className="fluidz-48 text-yellow-600">
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
                <p className="">{introdata.description}</p>
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
