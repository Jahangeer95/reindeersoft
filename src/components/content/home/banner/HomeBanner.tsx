import React from "react";
import { homeBannerArray } from "./HomeBannerData";
import { Carousel } from "react-bootstrap";
import Link from "next/link";
import Image from "next/image";

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
              <Link
                href={`${state.heading.toLowerCase().split(" ").join("-")}`}
              >
                <Image
                  src={state.bannerImage}
                  alt="banner-slider"
                  className="w-100"
                  priority={true}
                  placeholder="blur"
                />
                <div className="overlay"></div>
                <div>
                  <aside>
                    <h1 className="text-center mb-4">{state.heading}</h1>
                    <span>
                      {state.paragraph.map((value, index) => (
                        <p key={index}>{value}</p>
                      ))}
                    </span>
                  </aside>
                </div>
              </Link>
            </Carousel.Item>
          );
        })}
      </Carousel>
    </section>
  );
};

export default HomeBanner;
