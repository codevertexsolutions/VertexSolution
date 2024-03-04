import React from "react";
import { SectionTitle } from "../../../components";

import { OUR_TEAM } from "@/utils/siteData";

const Team = () => {
  return (
    <section className="my-1 md:my-3 relative">
      <div className="absolute w-full h-full -top-[250px] -right-[850px] -z-10">
        <div className="relative w-full h-full">
          <img
            src="/images/Ellipse1.svg"
            alt="Ellipse Image"
            className="w-full h-full"
          />
        </div>
      </div>
      <div className="absolute w-full h-full -bottom-[250px] -left-[950px] -z-10">
        <div className="relative w-full h-full">
          <img
            src="/images/Ellipse1.svg"
            alt="Ellipse Image"
            className="w-full h-full"
          />
        </div>
      </div>
      <div className="container mx-auto px-6">
        <div className="flex justify-center">
          <SectionTitle title={OUR_TEAM.title} isCentered={true} />
        </div>
        <div className="container mx-auto px-6 flex justify-center ml-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-12 mt-12">
            {OUR_TEAM.members.map((member) => (
              <a
                key={member.name}
                href={member.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="team-member grad_card group cursor-pointer py-8 px-6 sm:p-10 md:p-12 rounded-3xl shadow-lg hover:shadow-xl hover:-translate-y-1 duration-300 ease-in-out flex flex-col items-center bg-[#f6f6f6]"
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 rounded-full mb-4"
                />
                <h3 className="text-dark-color text-2xl font-medium group-hover:text-white">
                  {member.name}
                </h3>
                <p className="text-light-color text-lg group-hover:text-white font-bold flex items-center">
                  <span className="text-primaryColor mr-1">
                    {member.positionIcon}
                  </span>
                  {member.position}
                </p>
                <p className="text-light-color text-lg group-hover:text-white font-bold text-center mt-4">
                  {member.bio}
                </p>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
