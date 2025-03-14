import Link from "next/link";

const members = [
  {
    name: "Jatin Kaushik",
    socialLink: "https://www.linkedin.com/in/jatinkaushik-jk",
  },
  {
    name: "Jatin Kaushik",
    socialLink: "https://www.linkedin.com/in/jatinkaushik-jk",
  },
  {
    name: "Jatin Kaushik",
    socialLink: "https://www.linkedin.com/in/jatinkaushik-jk",
  },
  {
    name: "Jatin Kaushik",
    socialLink: "https://www.linkedin.com/in/jatinkaushik-jk",
  },
];

// need tooltip for members name and Link for redirecting on click to social link

const TeamSection = () => {
  return (
    <div id="team" className="mt-36 md:mt-52 mb-36">
      <h3 className="text-4xl font-bold text-center my-10 mb-16">Our Team</h3>
      <div className="flex flex-row justify-evenly items-center px-0 max-w-[1024px] mx-auto gap-y-4 flex-wrap">
        {members.map((member, index) => {
          return (
            <div
              key={index}
              className="flex justify-center items-center aspect-square rounded-full w-1/2 sm:w-1/3 md:w-1/4 p-3 sm:p-4"
            >
              <div className="w-full h-full bg-red-500 rounded-full"></div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TeamSection;
