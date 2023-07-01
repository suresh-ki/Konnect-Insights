"use client";
import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const Card = (props) => {
  return (
    <div className="border-2 border-[#E9E9E9] rounded-[10px] h-[400px] sm:h-[415px] flex flex-col justify-between">
      <div className="p-10">
        <p className="text-[#404040] text-sm md:text-base leading-4 md:leading-4">
          {props.text}
        </p>
      </div>
      <div className="border-t-2 py-7 px-10 h-[130px] flex gap-2.5">
        <img src={props.img} className="w-16 h-16 object-cover" />
        <div>
          <h3 className="text-[#070707] font-semibold lg:text-lg">
            {props.name}
          </h3>
          <p className="text-[#070707] text-sm leading-4 max-w-[180px]">
            {props.position}
          </p>
        </div>
      </div>
    </div>
  );
};

const Testimonials = () => {
  const swiperRef = useRef();

  const data = [
    {
      text: "We have a seamless integration between Konnect Insights and Freshdesk. This gives us the ability to provide excellent coverage to our clients when it comes to social data. The queries coming on social media and web can be easily pushed into Freshdesk thus giving us a single view of the customer across the systems",
      name: "Eric Bohren's",
      position:
        "Freshworks - Sr Director, Global Technology Partners and Marketplace",
      img: "/Eric.png",
    },
    {
      text: "“Konnect Insights is proving to be essential to my job - right from getting exhaustive coverage for my clients to being able to manage their reputation by responding to customer queries. Most importantly I find it to be intuitive, so if there is anything that I haven't been shown I can generally figure it out for myself. It is the best software of its kind that I have ever used.”",
      name: "Keith",
      position: "Tangram Consulting- Marketing & Social Media Manager",
      img: "/Keith.png",
    },
    {
      text: "“Konnect Insights is primarily a professional social listening and monitoring tool; but, like a Swiss army knife, it actually includes a few other full-fledged services as well:Social CRM tool: workflow and response management features; Analytics: brand, competition, and industry analysis; Social scheduling: easily schedule messages for your social profiles.”",
      name: "Lilach Bullock",
      position: "Lilach Bullock Ltd- Founder",
      img: "/Lilach.png",
    },
    {
      text: "“Konnect Insights is incredibly powerful! I have been actively using the platform for some time now and what has impressed me the most is the in-depth reporting from social listening across channels. You can really dig in and gain actionable insights to deepen connection with your followers. The publishing tools are excellent, too.”",
      name: "Todd Nilson",
      position: "Clocktower Advisors- President",
      img: "/Todd.png",
    },
  ];

  return (
    <div className="flex items-center justify-center">
      <div className="container max-w-[1200px]">
        <h2 className="text-[#062A49] font-bold mb-7 text-xl md:text-2xl lg:text-3xl text-center">
          <span className="blue-gradient">
            Helping Brands Succeed - Globally!
          </span>
        </h2>
        <Swiper
          spaceBetween={20}
          slidesPerView={1}
          pagination={{ clickable: true }}
          onSwiper={(swiper) => {
            console.log(swiper);
            swiperRef.current = swiper;
          }}
          breakpoints={{
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
        >
          {data.map((item, index) => (
            <SwiperSlide key={index}>
              <Card
                text={item.text}
                name={item.name}
                position={item.position}
                img={item.img}
              />
            </SwiperSlide>
          ))}
        </Swiper>
        <div>
          <button onClick={() => swiperRef.current.slidePrev()}>l </button>
          <button onClick={() => swiperRef.current.slideNext()}>R </button>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;

// import Card from "../Card/Card";

// import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/css/navigation";
// import "swiper/css/pagination";
// import "swiper/css";
// import LeftArrow from "./LeftArrow";
// import RightArrow from "./RightArrow";
// import Card2 from "../Card/Card2";

// const Carousel = (props) => {
//   const swiperRef = useRef();

//   return (
//     <div className={`${props.className} w-full flex gap-x-10 justify-stretch`}>
//       <button onClick={() => swiperRef.current.slidePrev()}>
//         <LeftArrow />
//       </button>
//       <Swiper
//         spaceBetween={20}
//         slidesPerView={1}
//         onSwiper={(swiper) => {
//           swiperRef.current = swiper;
//         }}
//         breakpoints={{
//           768: {
//             slidesPerView: 2,
//           },
//           1024: {
//             slidesPerView: 3,
//           },
//         }}
//       >
//         {props.data.map((item) => (
//           <SwiperSlide>
//             {props.smallCard ? (
//               <Card2
//                 title={item.title}
//                 time={item.time}
//                 date={item.date}
//                 name={item.name}
//               />
//             ) : (
//               <Card
//                 title={item.title}
//                 des={item.des}
//                 date={item.date}
//                 hasButton={props.hasButton}
//               />
//             )}
//           </SwiperSlide>
//         ))}
//       </Swiper>
//       <button onClick={() => swiperRef.current.slideNext()}>
//         <RightArrow />
//       </button>
//     </div>
//   );
// };

// export default Carousel;
