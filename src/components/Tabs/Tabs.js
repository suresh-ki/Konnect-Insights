"use client";
import React, { useState } from "react";

const Tabs = () => {
  const [Tab, setTab] = useState(1);

  const data = [
    {
      id: 1,
      name: "Social Listening",
      content: [
        {
          title: "Listen to online web, Social Media and a lot more",
          parah:
            "Do not miss out on any conversation anywhere on the web. Listen to your customer's voice, engage with them and make them happier",
        },
        {
          title: "Get Market Intelligence",
          parah:
            "Analyze customer data from anywhere on the web and social media. Get real-time market intelligence. Fine-tune your strategies and make valuable business decisions",
        },
        {
          title: "Creative Asset Library",
          parah:
            "Pre-save all your content, including text and media, in the creative asset library. Easily pick them up for publishing and scheduling, giving your design and content teams the flexibility to plan and execute your campaigns and festivals",
        },
        {
          title: "Competitor's/Industry benchmarking",
          parah:
            "See how you are faring against your competition. Understand what is working for them and what is working against them. Understand global trends with support for over 190 languages",
        },
      ],
    },
    {
      id: 2,
      name: "Online Reputation",
      content: [
        {
          title: "Conversations as Tickets",
          parah:
            "View all conversations related to your brand in the form of support tickets, which give you a detailed overview of the customers and their queries in terms of history, analytics, followers, and influence. Based on this, you can define priorities for response management",
        },
        {
          title: "Escalations & auto assignment",
          parah:
            "You have the flexibility to check with external teams who are not a part of the tool regarding responses through email escalations by adding the conversation details. You can also auto-assign queries to appropriate users/groups based on the rules you define, thus reducing time",
        },
        {
          title: "Impact measurement",
          parah:
            "Get a complete view of all the tickets that are at various stages of resolution, check TAT scores, and identify areas that need more action. Measure the impact by analyzing the difference in sentiment based on your efforts",
        },
      ],
    },
    {
      id: 3,
      name: "Social CRM",
      content: [
        {
          title: "Automation and workflows",
          parah:
            "Workflows and automation such as queuing, ticket history, auto-assignment and classification, draft templates, and many more to ensure your agents are empowered to respond to and resolve queries in a timely manner",
        },
        {
          title: "Agent performance",
          parah:
            "Track and measure How are your agents performing with various TAT reports and SLAs to be able to identify the hits and misses and ensure the right actions are taken in terms of agent productivity?",
        },
        {
          title: "One view of the customer",
          parah:
            "Have all your customer query data points, including web and social, in one place to be able to have a holistic view of the customer, including the query history, details, etc, and use this information for better CXM",
        },
      ],
    },

    {
      id: 4,
      name: "Social Analytics",
      content: [
        {
          title: "Analytics and Benchmarking",
          parah:
            "With over 700 charts covering various aspects of listening, social media analytics, competitor analytics, and agent performance reports, you get a comprehensive and holistic view of your brand's perception and performance in terms of customer experience management and marketing",
        },
        {
          title: "KISS - Konnect Insights Smart Suggestions",
          parah:
            "In simple plain English, understand complex metrics that are easy to remember. Insights are presented in a way humans speak and with the right pictures. Understand what has worked for you and get suggestions on what will work for you with AI-powered smart suggestions",
        },
        {
          title: "Content Strategy",
          parah:
            "With all your insights in one platform, identify trends, pain points, hits and misses, moments when your audience is active, and much more to quickly shape align messaging into consumer-relevant and engagement-driven",
        },
      ],
    },
    {
      id: 5,
      name: "Social Publishing",
      content: [
        {
          title: "Social Media Management",
          parah:
            "Easily and effectively publish or schedule posts on social media across multiple channels and multiple accounts, simultaneously, preview them on different devices, and check them out on a content calendar for a 360-degree view of all your posts",
        },
        {
          title: "Approval process",
          parah:
            "Ensure the right and correct content goes live on social media channels using the approval-rejection feature, facilitating easy collaboration between brands, agencies, and teams for the right representation of the brand",
        },
        {
          title: "Creative Asset Library",
          parah:
            "Pre-save all your content, including text and media, in the creative asset library. Easily pick them up for publishing and scheduling, giving your design and content teams the flexibility to plan and execute your campaigns and festivals",
        },
      ],
    },
    {
      id: 6,
      name: "Surveys & Feedback",
      content: [
        {
          title: "Customer Satisfaction Surveys",
          parah:
            "If your customers are really satisfied, Send Csat-Customer Satisfaction Surveys that are linked to your customer care module and learn from your customers about the agent's performance",
        },
        {
          title: "Link to Social Listening",
          parah:
            "Get the best ideas from those who matter the most—your customers. Analyze all insights in unified dashboards with classifications created for social listening",
        },
        {
          title: "Market Research",
          parah:
            "Expand your market research capabilities to keep track of your brand, test your ideas, or get a gut check with your target audience. Share learning across your organization",
        },
      ],
    },
    {
      id: 7,
      name: "BI Tools & Dashboards",
      content: [
        {
          title: "Customised Dashboards",
          parah:
            "Create dashboards for various stakeholders by simply dragging and dropping charts from the chart library or charts created from BI tools. Bring in your external data sources too to create dashboards",
        },
        {
          title: "Create your own charts",
          parah:
            "Create any type of chart using advanced features such as pivoting, defining your own filters, columns, dimensions, and measures, which are completely tailored to your needs while going granular, equipping you with intelligent insights for better business decisions",
        },
        {
          title: "Flexible reporting",
          parah:
            "Shareable and collaborative dashboards and charts with the ability to add your own notes or inferences. You won't find the need to download data in excel spreadsheets or make ppts. Save time and share live dashboards",
        },
        {
          title: "Themes and Brand colors",
          parah:
            "Create your own themes to match your brand colors. Or define chart colors to match the brand and competition. Use various color palettes to make visually stunning dashboards",
        },
      ],
    },

    {
      id: 8,
      name: "Crisis Management",
      content: [
        {
          title: "Identify crisis",
          parah:
            "Ensure you are aware of any impending crisis that could affect your brand and be ready for it. Use keywords, hashtags and other parameters such as follower count, to monitor situations that can lead to crisis",
        },
        {
          title: "Get notified real time",
          parah:
            "Once you have defined the parameters to identify crises, you will get real time alerts based on them. You can ensure that you don't miss out on these notifications by choosing to be alerted on mobile apps and/or email",
        },
        {
          title: "Take Action",
          parah:
            "Prepare a crisis management and mitigation plan by looking at analytics and data. Respond to queries in real time and use workflows to enhance their productivity and TATs and identify and mobilise influencers to counter crises",
        },
      ],
    },
  ];

  return (
    <div className="flex items-center justify-center">
      <div className="container max-w-[1200px] pt-20">
        <h2 className="font-bold text-3xl text-center">
          <span className="blue-gradient">Unify</span> your{" "}
          <span className="blue-gradient">Customer Care</span> and{" "}
          <span className="blue-gradient">Marketing Insights</span>
        </h2>
        <p className="opacity-75 text-lg mt-7 text-center leading-normal">
          Stop spending on 10+ tools and save up to 91% of your SaaS spend.
        </p>
        <div className="flex overflow-x-auto pb-5 lg:pb-0 justify-between gap-5 lg:gap-3 mt-10 lg:mt-14">
          {data.map((item) => (
            <button
              key={item.id}
              className={`border whitespace-nowrap  text-xs p-[14px] rounded text-[#101010] ${
                Tab == item.id
                  ? "bg-[#FFB8B8]  border-[#F17B7B]"
                  : "bg-[#F0F0F0] border-[#DADADA] "
              }`}
              onClick={() => setTab(item.id)}
            >
              {item.name}
            </button>
          ))}
        </div>
        <div className="flex flex-col lg:flex-row items-center my-10 gap-x-14 min-h-[500px]">
          <div className="flex-1">
            {data[Tab - 1].content.map((item, index) => (
              <div className="mb-5" key={index}>
                <h3 className="font-semibold text-lg leading-normal">
                  {item.title}
                </h3>
                <p className="opacity-75 text-sm mt-3 leading-normal">
                  {item.parah}
                </p>
              </div>
            ))}
          </div>
          <div className="flex-1">
            <img src={`/${Tab}.png`}></img>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tabs;
