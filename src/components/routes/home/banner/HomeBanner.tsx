import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Carousel } from "react-bootstrap";
import { homeBannerArray } from "./HomeBannerData";
import { camelToDash } from "@/utils/functions/camelToDash";

const HomeBanner = () => {
  return (
    <section className="HomeBanner_Main">
      <Carousel className="carousel">
        {homeBannerArray.map((state, index) => {
          return (
            <Carousel.Item
              key={index}
              interval={6000}
              className="carousel-item"
            >
              <Link href={camelToDash(state.heading)}>
                <Image
                  src={state.bannerImage}
                  alt="banner-slider"
                  className="w-100"
                  priority={true}
                  placeholder="blur"
                />
                <div className="overlay"></div>

                <article>
                  <h1 className="text-center">{state.heading}</h1>
                  <div>
                    <p>{state.description}</p>

                    <span></span>
                    <ul>
                      {state.list.map((state, idx) => (
                        <li key={idx}>{state}</li>
                      ))}
                    </ul>
                  </div>
                </article>
              </Link>
            </Carousel.Item>
          );
        })}
      </Carousel>
    </section>
  );
};

export default HomeBanner;