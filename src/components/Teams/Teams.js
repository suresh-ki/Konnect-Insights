import React from "react";
import Button from "../UI/Button";
import Image from "next/image";

const Card = (props) => {
  return (
    <div className="flex items-center justify-center flex-col md:w-1/3 lg:w-1/5 px-4">
      <div className="w-[160px] h-[200px]">
        <Image
          src={props.src}
          width={props.width}
          height={props.height}
          alt={props.alt}
        />
      </div>
      <h3 className="mt-4 font-semibold text-lg text-center text-white">
        {props.title}
      </h3>
      <p className="mt-4 text-xs text-center text-[#A6B6C4]">{props.parah}</p>
    </div>
  );
};

const Teams = () => {
  return (
    <div className="flex items-center justify-center">
      <div className="container max-w-[1310px] flex items-center justify-center py-16 flex-col">
        <h2 className="font-bold text-3xl text-center">
          <span className="blue-gradient">
            Why Teams Prefer Konnect Insights?
          </span>
        </h2>
        <div className="flex justify-center lg:justify-between w-full mt-14 mb-10 items-start flex-wrap gap-y-10">
          <Card
            src="/CustomerService.png"
            width={217}
            height={206}
            alt=""
            title="Customer Service"
            parah="Enhance customer satisfaction with our unified platform, empowering customer care agents, supervisors, and stakeholders to engage, provide tailored solutions, and create happier customers.
"
          />
          <Card
            src="/Marketing.png"
            width={217}
            height={206}
            alt=""
            title="Marketing"
            parah="Gain brand clarity with our unified tool. Unlock valuable intelligence on customers, competitors, and your target segment. Meaningfully engage with your customers for enhanced satisfaction."
          />
          <Card
            src="/Agencies.png"
            width={217}
            height={206}
            alt=""
            title="Agencies"
            parah="Save time and effort on Social Listening, ORM, and Turnaround Time reports with Konnect Insights dashboard templates. Easily customize them to match your brand's themes and colors, earning even more brand love."
          />
          <Card
            src="/Analyst.png"
            width={217}
            height={206}
            alt=""
            title="Analysts"
            parah="Unlock valuable insights from the social media goldmine! Discover what users are saying about your brand, competition, and segment. Make sense of the noise with intuitive dashboards."
          />
          <Card
            src="/PR.png"
            width={217}
            height={206}
            alt=""
            title="The PR Team"
            parah="Stay ahead of crises with real-time alerts. Our mobile app and email notifications ensure you're promptly informed of potential issues before they escalate. Our system monitors social media and the entire web, providing you with immediate signals.
            "
          />
        </div>
        <div className="flex flex-col items-center">
          <Button />
          <p className="mt-2 text-sm text-white">No CC Required</p>
        </div>
      </div>
    </div>
  );
};

export default Teams;
