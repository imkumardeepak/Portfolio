import React from "react";
import { TimeLine, TimeLineItem } from "../utils/ExpTimeLine";

const Experience = () => {
  return (
    <TimeLine>
      <TimeLineItem active>
        <TimeLineItem.Title>
          <span className="font-medium transition-all hover:text-white hover:underline hover:underline-offset-2">
            Software Engineer at Aarkay Techno Consultants Pvt Ltd
          </span>{" "}
          • <span className="text-neutral-200">July 2022 - Present</span>
        </TimeLineItem.Title>
        <TimeLineItem.Description>
          As a Software Engineer at Aarkay Techno Consultants Pvt Ltd, I have
          been deeply involved in the development and maintenance of both web
          and Windows applications. My work primarily revolves around:
          <ul className="list-disc ml-5 mt-2">
            <li>
              Developed and integrated features for tracking asset status and
              condition with real-time updates.
            </li>
            <li>
              Implemented RFID tagging and offline verification functionality,
              enhancing asset management efficiency.
            </li>
            <li>
              Collaborated with the team to ensure seamless integration and
              synchronization between local and main databases.
            </li>
            <li>
              <strong>Weighbridge Management Application:</strong> Designed and
              implemented a solution for vehicle weighing with real-time image
              capture and database integration.
            </li>
            <li>
              <strong>Integration with Direct Apply Printer:</strong> Led the
              integration of LINX Inkjet and Videojet printers, allowing for
              direct message creation and communication using HEXA text.
            </li>
          </ul>
          Throughout these projects, I focused on delivering robust solutions
          by:
          <ul className="list-disc ml-5 mt-2">
            <li>
              Integrating hardware devices like IPC cameras for enhanced
              functionality.
            </li>
            <li>
              Ensuring seamless communication with SAP for accurate and
              efficient data processing.
            </li>
            <li>
              Implementing features to improve system performance and user
              experience.
            </li>
          </ul>
          These efforts have significantly contributed to the operational
          efficiency and accuracy of our solutions.
        </TimeLineItem.Description>
      </TimeLineItem>

      <TimeLineItem>
        <TimeLineItem.Title>
          <span className="font-medium transition-all hover:text-white hover:underline hover:underline-offset-2">
            Intern at Aarkay Techno Consultants Pvt Ltd
          </span>{" "}
          • <span className="text-neutral-200">January 2022 - June 2022</span>
        </TimeLineItem.Title>
        <TimeLineItem.Description>
          Contributed to the development of the Truck Management and Indenting
          System using ASP.NET Core MVC. Key achievements include:
          <ul className="list-disc ml-5 mt-2">
            <li>
              <strong>Truck Management Project:</strong> Developed a
              comprehensive system for managing truck operations, including
              status tracking and request handling.
            </li>
            <li>
              Designed and implemented features for tracking truck status and
              managing requests efficiently.
            </li>
            <li>
              Enhanced system integration and usability through collaborative
              development and testing.
            </li>
            <li>
              Played a key role in ensuring seamless data flow and system
              functionality.
            </li>
          </ul>
          Gained hands-on experience in .NET Core MVC development and
          collaborated closely with senior developers to deliver impactful
          solutions.
        </TimeLineItem.Description>
      </TimeLineItem>
    </TimeLine>
  );
};

export default Experience;
