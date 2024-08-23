import React from "react";
import { faShield, faA, faMobileAlt } from "@fortawesome/free-solid-svg-icons";
import Card from "../Card/index";

function TestingServices() {
  const listItems = [
    "Ample testing expertise, knowledge of industry/domain specifics, well-established processes and in-house center of excellence.",
    "Quick ramp-up for projects of any size. We have testing resources already and ready to work for your projects.",
    "Reduced costs and time needed for hiring specialists.",
    "A bias-free perspective helping detect more bugs.",
    "Work at GMT+007, it means if your work is done during the day time, we will test it at night time and results will be available the next day.",
  ];

  return (
    <div className="pl-4 ">
      {/* Title Section */}
      <div className="mx-auto w-fit ">
        <h2 className="text-4xl pt-6 font-bold mb-6 md:text-4xl lg:px-24  lg:text-5xl ">
          Testing Services
        </h2>

        {/* Description Section */}
        <p className="text-xl font-normal text-gray-600 dark:text-gray-400 lg:px-44  ml-8 py-4  ">
          Why You Need Us As Independent Testing Agent?
        </p>

        {/* List Section */}
        <ol className="text-base font-normal text-gray-700 dark:text-gray-400 list-decimal list-inside ml-12  lg:px-52">
          {listItems.map((item, index) => (
            <li key={index} className="mb-2">
              {item}
            </li>
          ))}
        </ol>

        {/* Benefits Section */}
        <h2 className=" font-bold mb-6  text-xl lg:px-52  ">
          All these benefits help to reduce time-to-market and deliver a better
          quality product within time and budget.
        </h2>
        <p className="text-xl font-normal text-gray-700 dark:text-gray-400  mb-6  lg:px-40  max-md:ml-12  md:ml-16">
        We do:
      </p>
      </div>
      {/* Cards Section */}
    

      <div className="grid grid-cols-1  gap-6 max-w-screen-4xl md:ml-10 ">
        <div className="flex justify-center items-center ">
          <Card
            title="Functional and non-functional testing"
            description="We do Functional testing to ensure that your product works according to your business logic and specific requirements. We also perform Performance testing like stress, load to ensure stable operation of your product. Compatibility testing is conducted to ensure your product works in various environments."
            icon={faShield}
          />
        </div>
        <div className="flex justify-center items-center">
          <Card
            title="Manual testing and automated testing"
            description="We started manual testing 12 years ago, applying broad expertise and domain knowledge (ERP, CRM, Retail, Manufacturing, Social Network, and more). Our manual testing teams perform comprehensive functional and usability testing. With over 8 years of automation testing expertise, we offer various types of automation tests to increase productivity, including keyword-driven and data-driven approaches for web, mobile, and API testing. We provide automation scripting with Java/Python Selenium, RobotFramework, JMeter, and more, including deployment services with Jenkins on local/cloud platforms."
            icon={faA}
          />
        </div>
        <div className="flex justify-center items-center">
          <Card
            title="Application nature"
            description="We offer testing tailored specifically to the peculiarities of the technology used in a product, such as Web Application, Mobile Application, Desktop Application. Testing is conducted on various environments including Windows, macOS, iOS, Android, and Linux, using real devices."
            icon={faMobileAlt}
          />
        </div>
      </div>
    </div>
  );
}

export default TestingServices;
