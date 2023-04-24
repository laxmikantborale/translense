import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

import { RiDoubleQuotesL } from 'react-icons/ri';

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay"
import "../Styles/members.css";

// import required modules
import { Pagination, Autoplay } from "swiper";


const Members = () => {

    const members = [
        {
            feedback: "Human degradation of nature is the greatest challenge of the twenty-first century, yet it barely registers as a political issue. Environment solutions often create jobs & economic opportunities.",
            image: "https://upload.wikimedia.org/wikipedia/en/9/9f/John_Wick_Keanu.jpeg",
            name: "John Wick",
            type: "Investor"
        },
        {
            feedback: "Human degradation of nature is the greatest challenge of the twenty-first century, yet it barely registers as a political issue. Environment solutions often create jobs & economic opportunities.",
            image: "https://upload.wikimedia.org/wikipedia/en/9/9f/John_Wick_Keanu.jpeg",
            name: "John Wick",
            type: "Investor"
        },
        {
            feedback: "Human degradation of nature is the greatest challenge of the twenty-first century, yet it barely registers as a political issue. Environment solutions often create jobs & economic opportunities.",
            image: "https://upload.wikimedia.org/wikipedia/en/9/9f/John_Wick_Keanu.jpeg",
            name: "John Wick",
            type: "Investor"
        },
        {
            feedback: "Human degradation of nature is the greatest challenge of the twenty-first century, yet it barely registers as a political issue. Environment solutions often create jobs & economic opportunities.",
            image: "https://upload.wikimedia.org/wikipedia/en/9/9f/John_Wick_Keanu.jpeg",
            name: "John Wick",
            type: "Investor"
        },
        {
            feedback: "Human degradation of nature is the greatest challenge of the twenty-first century, yet it barely registers as a political issue. Environment solutions often create jobs & economic opportunities.",
            image: "https://upload.wikimedia.org/wikipedia/en/9/9f/John_Wick_Keanu.jpeg",
            name: "John Wick",
            type: "Investor"
        },
        {
            feedback: "Human degradation of nature is the greatest challenge of the twenty-first century, yet it barely registers as a political issue. Environment solutions often create jobs & economic opportunities.",
            image: "https://upload.wikimedia.org/wikipedia/en/9/9f/John_Wick_Keanu.jpeg",
            name: "John Wick",
            type: "Investor"
        },
        {
            feedback: "Human degradation of nature is the greatest challenge of the twenty-first century, yet it barely registers as a political issue. Environment solutions often create jobs & economic opportunities.",
            image: "https://upload.wikimedia.org/wikipedia/en/9/9f/John_Wick_Keanu.jpeg",
            name: "John Wick",
            type: "Investor"
        },
        {
            feedback: "Human degradation of nature is the greatest challenge of the twenty-first century, yet it barely registers as a political issue. Environment solutions often create jobs & economic opportunities.",
            image: "https://upload.wikimedia.org/wikipedia/en/9/9f/John_Wick_Keanu.jpeg",
            name: "John Wick",
            type: "Investor"
        },
        {
            feedback: "Human degradation of nature is the greatest challenge of the twenty-first century, yet it barely registers as a political issue. Environment solutions often create jobs & economic opportunities.",
            image: "https://upload.wikimedia.org/wikipedia/en/9/9f/John_Wick_Keanu.jpeg",
            name: "John Wick",
            type: "Investor"
        },
    ]


    return (
        <div className="members">
            <Swiper
                slidesPerView={3}
                spaceBetween={0}
                autoplay={true}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination, Autoplay]}
                className="mySwiper"
            >

                {
                    members.map((item, i) => {
                        return <SwiperSlide key={i}>
                            <div className="card">
                                <div className="quote">
                                    <RiDoubleQuotesL size={50} color="lightGray" />
                                </div>
                                <p>{item.feedback}</p>
                                <div className="mem-detail">
                                    <div className="mem-image"><img src={item.image} alt="" /></div>
                                    <div className="mem-name">
                                        <h4>{item.name}</h4>
                                        <p>{item.type}</p>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    })
                }

            </Swiper>
        </div>
    )
}

export default Members