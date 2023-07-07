"use client";
import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Image from "next/image";
import { Autoplay } from "swiper";

const Card = (props) => {
  return (
    <div className="border-2 border-[#E9E9E9] rounded-[10px] h-[480px] sm:h-[500px] md:h-[520px] lg:h-[514px] flex flex-col justify-between">
      <div className="p-10">
        {props.index == 0 && (
          <p className="text-[#404040] text-sm md:text-base leading-tight md:leading-tight">
            <span className="text-xl md:text-2xl">“</span>
            <span className="font-semibold">Konnect Insights</span> is
            incredibly <span className="font-semibold">powerfull!</span> I have
            been actively using the platform for some time now and what has
            impressed me{" "}
            <span className="font-semibold">
              the most is the in-depth reporting from social listening
            </span>{" "}
            across channels. You can really dig in and gain actionable insights
            to deepen connection with your followers.{" "}
            <span className="font-semibold">
              The publishing tools are excellent,
            </span>{" "}
            too.
          </p>
        )}
        {props.index == 1 && (
          <p className="text-[#404040] text-sm md:text-base leading-tight md:leading-tight">
            <span className="text-xl md:text-2xl">“</span>Konnect Insights'{" "}
            <span className="font-semibold">
              main USP is that it has an amalgamation of multiple modules.
            </span>{" "}
            It was a blessing in disguise to have accidentally stepped on its
            website. The <span className="font-semibold">smooth UX/UI</span>{" "}
            encourages any onlooker to stay put with the tools.{" "}
            <span className="font-semibold">
              Gaining Insights and generating reports has become effortless,
            </span>{" "}
            we are happy to have chosen Konnect Insights as our Social Listening
            Partner.
          </p>
        )}
        {props.index == 2 && (
          <p className="text-[#404040] text-sm md:text-base leading-tight md:leading-tight">
            <span className="text-xl md:text-2xl">“</span>The biggest advantage
            we see with using Konnect Insights is the hands-on approach of the
            team. They have{" "}
            <span className="font-semibold">
              taken into account our requirements and included the same in their
              product development roadmap.
            </span>{" "}
            The platform is{" "}
            <span className="font-semibold">
              easy to use and has added to our overall social intelligence,
            </span>{" "}
            and we aim to use the data{" "}
            <span className="font-semibold">
              we have to provide impactful insights
            </span>{" "}
            to our clients.
          </p>
        )}
        {props.index == 3 && (
          <p className="text-[#404040] text-sm md:text-base leading-tight md:leading-tight">
            <span className="text-xl md:text-2xl">“</span>Konnect Insights has
            been a very helpful{" "}
            <span className="font-semibold">
              360-degree tool for our marketing and customer support teams.
            </span>{" "}
            It helped us{" "}
            <span className="font-semibold">
              understand the current market sentiments
            </span>{" "}
            towards our brand and to create effective strategies around it.{" "}
            <span className="font-semibold">
              The best feature of this tool would be their Reports Dashboard
            </span>{" "}
            that has a vast variety of data charts that can be used to create
            reports and presentations whenever needed.
          </p>
        )}
        {props.index == 4 && (
          <p className="text-[#404040] text-sm md:text-base leading-tight md:leading-tight">
            <span className="text-xl md:text-2xl">“</span>Konnect Insights is
            primarily a{" "}
            <span className="font-semibold">
              professional social listening and monitoring tool
            </span>
            ; but, like a Swiss army knife, it actually includes a few other
            full-fledged services as well: Social CRM tools: workflow and
            response management features; Analytics: brand, competition, and
            industry analysis; Social scheduling: easily schedule messages for
            your social profiles.
          </p>
        )}
        {props.index == 5 && (
          <p className="text-[#404040] text-sm md:text-base leading-tight md:leading-tight">
            <span className="text-xl md:text-2xl">“</span>Konnect Insights is
            proving to be essential to my job - right from getting{" "}
            <span className="font-semibold">exhaustive coverage</span> for my
            clients to being able to{" "}
            <span className="font-semibold">
              manage their reputation by responding to customer queries.
            </span>{" "}
            Most importantly I find it to be intuitive, so if there is anything
            that I haven't been shown I can generally figure it out for myself.
            It is{" "}
            <span className="font-semibold">
              the best software of its kind that I have ever used.
            </span>
          </p>
        )}
      </div>
      <div className="border-t-2 py-7 px-10 h-[130px] flex gap-2.5">
        <img src={props.img} className="w-16 h-16 object-cover rounded-full" />
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
      name: "Todd Nilson",
      position: "Clocktower Advisors- President",
      img: "/Todd.png",
    },
    {
      name: "Jithin",
      position: "Decathlon- Country Feedback Leader",
      img: "/Jithin.png",
    },
    {
      name: "GD Prasad",
      position: "Dentsu Webchutney- Senior Account Director",
      img: "/GD-Prasad.png",
    },
    {
      name: "Maria Carvalho",
      position: "Cuemath- Associate Manager Marketing",
      img: "/Maria.jpeg",
    },
    {
      name: "Lilach Bullock",
      position: "Lilach Bullock Ltd- Founder",
      img: "/Lilach.png",
    },
    {
      name: "Keith",
      position: "Tangram Consulting- Marketing & Social Media Manager",
      img: "/Keith.png",
    },
  ];

  return (
    <div className="flex items-center justify-center">
      <div className="container max-w-[1200px] mt-10">
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
            swiperRef.current = swiper;
          }}
          autoplay={{
            delay: 8000,
            disableOnInteraction: false,
          }}
          modules={[Autoplay]}
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
                index={index}
              />
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="flex justify-center">
          <button onClick={() => swiperRef.current.slidePrev()}>
            <Image
              src="/leftButton.svg"
              width={24}
              height={24}
              alt=""
              className="w-16 h-16 md:w-24 md:h-24 object-cover"
            />
          </button>
          <button onClick={() => swiperRef.current.slideNext()}>
            <Image
              src="/rightButton.svg"
              width={24}
              height={24}
              alt=""
              className="w-16 h-16 md:w-24 md:h-24 object-cover"
            />
          </button>
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
