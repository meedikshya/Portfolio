import React from "react";
import { HiCheckBadge } from "react-icons/hi2";

const SkillsCard = () => {
  return (
    <div className="p-6 md:p-10 bg-[#F3F4F6]">
      <h2 className="text-2xl md:text-3xl font-semibold text-center mb-4">
        Skills
      </h2>

      <div className="flex flex-col lg:flex-row gap-6 md:gap-8 justify-center items-center">
        <div className="bg-gray-50 border border-gray-300 rounded-xl w-full max-w-[22rem] md:max-w-[25rem] p-8 md:p-16 flex flex-col justify-center">
          <h3 className="text-lg text-center mb-6 md:mb-7">Technical Skills</h3>
          <div className="flex flex-wrap gap-6 md:gap-[3rem] justify-center">
            <div className="grid gap-5 md:gap-7">
              <div className="flex gap-2 items-start">
                <HiCheckBadge className="text-black text-lg" />
                <div>
                  <h4 className="text-base font-medium">Programming</h4>
                  <span className="text-sm">
                    JavaScript, Java, Python (Basics)
                  </span>
                </div>
              </div>
              <div className="flex gap-2 items-start">
                <HiCheckBadge className="text-black text-lg" />
                <div>
                  <h4 className="text-base font-medium">
                    Libraries/Frameworks:
                  </h4>
                  <span className="text-sm">
                    React.js, Bootstrap, Tailwind CSS, Node.js (Basics)
                  </span>
                </div>
              </div>
            </div>
            <div className="grid gap-4 md:gap-6">
              <div className="flex gap-2 items-start">
                <HiCheckBadge className="text-black text-lg" />
                <div>
                  <h4 className="text-base font-medium">Tools/Software:</h4>
                  <span className="text-sm">
                    SQL, AWS, Git, GitHub, VS Code, Eclipse IDE
                  </span>
                </div>
              </div>
              <div className="flex gap-2 items-start">
                <HiCheckBadge className="text-black text-lg" />
                <div>
                  <h4 className="text-base font-medium">OS:</h4>
                  <span className="text-sm">Linux, Windows</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gray-50 border border-gray-300 rounded-xl w-full max-w-[22rem] md:max-w-[25rem] h-auto flex flex-col justify-center p-8 md:p-16">
          <h3 className="text-lg text-center mb-6 md:mb-8">Personal Skills</h3>
          <div className="flex flex-wrap justify-center">
            <div className="flex gap-2 items-start">
              <HiCheckBadge className="text-black text-lg" />
              <div>
                <h4 className="text-base font-medium">Soft Skills</h4>
                <span className="text-sm">
                  Teamwork, Communication, Adaptability, Time Management,
                  Interpersonal Skills
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkillsCard;
