import React from "react";
import "./Testimonial.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { Pagination } from "swiper";
import "swiper/css/pagination";


const Testimonial = () => {
  const clients = [
    {

      review:
        "The developer has built a functional website that meets our expectations. While the process was mostly smooth, there were moments where communication and timelines could have been handled more effectively. We appreciate their effort to incorporate our ideas and look forward to continuous improvements in future projects",
    },
    {

      review:
        "The React application meets the basic requirements and presents an adequate design. Although the overall functionality is good, we've noticed some performance issues under certain conditions that we hope will be addressed in future updates. We value the work done and believe there is room for further optimization",
    },
    {

      review:
        "The React Native cards project was completed with satisfactory results. The design aligns with our vision, though the interactivity and user experience could be more intuitive. We acknowledge the effort put into development and suggest a more extensive testing phase in future iterations to refine these aspects.",
    },
    {

      review:
        "The mobile application developed stands out for its simplicity and pleasant aesthetics. However, we've found that simplicity sometimes comes at the expense of functionality, with essential features not as accessible as we would like. We appreciate the minimalist approach and suggest a more refined balance between design and functionality for future developments",
    },
  ];

  return (
    <div className="t-wrapper" id="testimonial">
      <div className="t-heading">
        <span>Clients always get </span>
        <span>Exceptional Work </span>
        <span>from me...</span>
      <div className="blur t-blur1" style={{ background: "var(--purple)" }}></div>
      <div className="blur t-blur2" style={{ background: "skyblue" }}></div>

      </div>
      <Swiper
        // install Swiper modules
        modules={[Pagination]}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {clients.map((client, index) => {
          return (
            <SwiperSlide key={index}>
              <div className="testimonial">
                <img src={client.img} alt="" />
                <span>{client.review}</span>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default Testimonial;
