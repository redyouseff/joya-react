import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function Projects() {
  useEffect(() => {
    AOS.init({
      duration: 1200,
      easing: "ease-in-out",
      once: false,
      mirror: true,
    });
  }, []);

  const offPlanCards = [
    {
      title: "Bugatti Residences",
      date: "October 1, 2023",
      imgSrc: "/features/WhatsApp Image 2024-11-04 at 21.54.12_4a2182ac.jpg",
    },
    {
      title: "The Acres Estates",
      date: "November 15, 2023",
      imgSrc: "/features/project2/WhatsApp Image 2024-11-04 at 23.44.28_17385a5b.jpg",
    },
    {
      title: " GREENRIDGE",
      date: "December 30, 2023",
      imgSrc: "/features/project3/WhatsApp Image 2024-11-04 at 23.51.53_aa60586b.jpg",
    },
  ];

  const featuresCards = [
    {
      title: " District One VillaDistrict One Villa",
      date: "October 15, 2023",
      imgSrc: "/off plane/1/WhatsApp Image 2024-11-05 at 02.53.59_940121d8.jpg",
    },
    {
      title: "Villa Allegra",
      date: "November 30, 2023",
      imgSrc: "/off plane/2/WhatsApp Image 2024-11-05 at 02.56.29_36f40446.jpg",
    },
  ];

  return (
    <div className="bg-[#111612] min-h-screen flex flex-col items-center pt-48 pb-12">
      {/* Off Plan Section */}
      <h2 className="text-5xl font-semibold text-white mb-14 mt-20" data-aos="fade-down">
        Off Plan
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 w-full max-w-6xl px-4 mb-32">
        {offPlanCards.map((card, index) => (
          <a
            href="/Projects/Off-Plan"
            key={index}
            className="bg-[#1c1e1b] rounded-lg shadow-lg p-6 text-center transform transition duration-300 hover:scale-105"
            data-aos="fade-up"
            data-aos-delay={`${index * 200}`}
          >
            <div className="overflow-hidden rounded-lg mb-6">
              <img
                src={card.imgSrc}
                alt={card.title}
                className="w-full h-64 object-cover rounded-lg transform transition-transform duration-500 hover:scale-110"
              />
            </div>
            <h3 className="text-3xl font-semibold text-white">{card.title}</h3>
            <p className="text-[#a0b3b1] mt-3">{card.date}</p>
          </a>
        ))}
      </div>

      {/* Features Section */}
      <h2 className="text-5xl font-semibold text-white mb-14" data-aos="fade-down">
        Features
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 w-full max-w-4xl px-4 mb-20">
        {featuresCards.map((card, index) => (
          <a
            href="/Projects/Features"
            key={index}
            className="bg-[#1c1e1b] rounded-lg shadow-lg p-6 text-center transform transition duration-300 hover:scale-105"
            data-aos="fade-up"
            data-aos-delay={`${index * 200}`}
          >
            <div className="overflow-hidden rounded-lg mb-6">
              <img
                src={card.imgSrc}
                alt={card.title}
                className="w-full h-64 object-cover rounded-lg transform transition-transform duration-500 hover:scale-110"
              />
            </div>
            <h3 className="text-3xl font-semibold text-white">{card.title}</h3>
            <p className="text-[#a0b3b1] mt-3">{card.date}</p>
          </a>
        ))}
      </div>
    </div>
  );
}

export default Projects;
