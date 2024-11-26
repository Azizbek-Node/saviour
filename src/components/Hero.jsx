import React from "react";
import doctor from "../assets/image 4.png";
import search from "../assets/search doctor.png";
import online from "../assets/online pharmacy.png";
import consultation from "../assets/consultation.png";
import details from "../assets/detail info.png";
import emergency from "../assets/emergency care.png";
import tracking from "../assets/tracking.png";
import vector from "../assets/Vector.png";
import palette from "../assets/Palette.png";

const Hero = () => {
  return (
    <div>
      <div className="mt-40 ml-40 font-mulish text-blue-800">
        <h1 className="text-5xl font-bold">Virtual healthcare Saviour</h1>
        <h1 className="text-5xl font-bold">for you</h1>
        <p className="text-blue-500 mt-4">
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
        </p>
        <p className="text-blue-500 font-thin">
          Aenean commodo ligula eget dolor. Aenean massa.
        </p>
        <button className="bg-blue-500 text-white px-6 py-3 rounded-xl mt-8 hover:bg-blue-800 transition-all duration-200">
          Consult today
        </button>
      </div>

      <img
        src={doctor}
        alt="doctor"
        className="sm:mt-[-200px] mt-[-100px] mr-40 float-right w-[500px]"
      />

      <section className="h-screen">
        <h1 className="text-4xl font-semibold text-center mt-[400px] text-violet-700">
          Services we Offer
        </h1>
        <p className="text-center text-blue-500 mt-5">
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
          commodo ligula eget dolor. Aenean massa.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 justify-center items-center mt-16 px-8">
          <div className="flex flex-col items-center">
            <img
              src={search}
              alt="search"
              className="w-230 h-230 hover:scale-110 transition-all duration-300"
            />
            <p className="mt-4 text-center text-blue-800"></p>
          </div>
          <div className="flex flex-col items-center">
            <img
              src={online}
              alt="online"
              className="w-230 h-230 hover:scale-110 transition-all duration-300"
            />
            <p className="mt-4 text-center text-blue-800"></p>
          </div>
          <div className="flex flex-col items-center">
            <img
              src={consultation}
              alt="consultation"
              className="w-230 h-230 hover:scale-110 transition-all duration-300"
            />
          </div>
          <div className="flex flex-col items-center">
            <img
              src={details}
              alt="details"
              className="w-230 h-230 hover:scale-110 transition-all duration-300"
            />
            <p className="mt-4 text-center text-blue-800"></p>
          </div>
          <div className="flex flex-col items-center">
            <img
              src={emergency}
              alt="emergency"
              className="w-230 h-230 hover:scale-110 transition-all duration-300"
            />
            <p className="mt-4 text-center text-blue-800"></p>
          </div>
          <div className="flex flex-col items-center">
            <img
              src={tracking}
              alt="tracking"
              className="w-230 h-230 hover:scale-110 transition-all duration-300"
            />
            <p className="mt-4 text-center text-blue-800"></p>
          </div>
        </div>

        <div className="text-center mt-12">
          <button className="bg-blue-500 text-white px-6 py-3 rounded-xl mt-8 hover:bg-blue-800 transition-all duration-200">
            Learn more
          </button>
        </div>
      </section>

      <footer className="mt-[300px] ml-[150px] flex items-center space-x-10 flex-wrap">
        <img src={palette} alt="palette" className="w-[665px] h-[491px]" />

        <div>
          <h1 className="text-3xl font-semibold text-violet-700">
            Leading healthcare
          </h1>
          <h1 className="text-3xl font-semibold text-violet-700">providers</h1>
          <p className="text-blue-500 mt-4">
            Trafalgar provides progressive, and affordable healthcare,
          </p>
          <p className="text-blue-500">
            accessible on mobile and online for everyone. To us, it’s not
          </p>
          <p className="text-blue-500">
            just work. We take pride in the solutions we deliver.
          </p>
          <button className="bg-blue-500 text-white px-6 py-3 rounded-xl mt-8 hover:bg-blue-800 transition-all duration-200">
            Learn more
          </button>
        </div>
      </footer>
    </div>
  );
};

export default Hero;
