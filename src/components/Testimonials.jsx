import { content } from "../Content";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import { Pagination } from "swiper";
import { useState } from "react";
const buttonStyle = {};

const Resume = () => {
  const { Resume } = content;
  const PDF_FILE_URL =
    "https://github.com/Shalinda99/MyResume/blob/main/Amal_Shalinda_CV.pdf";
  const handleDownloadCV = () => {
    window.open(PDF_FILE_URL, "_blank");
  };
  // const downloadFileAtURL =(url) =>{
  //   const filename = url.split('/').pop()
  //   const aTag = document.createElement('a')
  //   aTag.href=url
  //   aTag.setAttribute('download',filename)
  //   document.body.appendChild(aTag)
  //   aTag.click()
  //   aTag.remove()
  // }
  return (
    <section>
      <div className="md:container px-5 pt-14">
        <h2 className="title" data-aos="fade-down">
          {Resume.title}
        </h2>
        <h4 className="subtitle" data-aos="fade-down">
          {Resume.subtitle}
        </h4>
        <br />
        <div className="flex justify-center">
          <button className="btn" onClick={handleDownloadCV}>
            View My CV
          </button>
        </div>
      </div>
    </section>
  );
};

export default Resume;
