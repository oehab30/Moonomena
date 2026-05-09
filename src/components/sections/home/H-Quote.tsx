"use client";

const Quote = () => {
  return (
<section className="bg-black text-white py-30 px-6">
      <div className="max-w-3xl mx-auto text-center">
        <h1 className="text-xl font-bold mb-6">
          Marketing Agency
        </h1>

        <p className="text-lg leading-relaxed text-gray-300">
          Whether it’s building a brand or tackling a specific project, Bliss supports companies, groups, and institutions with an approach rooted in practical experience. We develop strategies that place people at the heart of the system, not on the sidelines of the process.
        </p>
      </div>

      
<div className="w-1/2 mx-auto border-b border-gray-700 py-6 mt-50">
   <h1 className=" text-center text-lg font-bold mb-10">
          Our framework
        </h1>
  <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
    
    <div className="group transition duration-300">
      <p className="text-sm uppercase tracking-[3px] text-gray-500 mb-2">
        01
      </p>
      <h3 className="text-xl md:text-2xl font-semibold text-white group-hover:text-gray-300 transition">
        Problem
      </h3>
    </div>

    <div className="group  transition duration-300">
      <p className="text-sm uppercase tracking-[3px] text-gray-500 mb-2">
        02
      </p>
      <h3 className="text-xl md:text-2xl font-semibold text-white group-hover:text-gray-300 transition">
        Solution
      </h3>
    </div>

    <div className="group  transition duration-300">
      <p className="text-sm uppercase tracking-[3px] text-gray-500 mb-2">
        03
      </p>
      <h3 className="text-xl md:text-2xl font-semibold text-white group-hover:text-gray-300 transition">
        Value
      </h3>
    </div>

    <div className="group  transition duration-300">
      <p className="text-sm uppercase tracking-[3px] text-gray-500 mb-2">
        04
      </p>
      <h3 className="text-xl md:text-2xl font-semibold text-white group-hover:text-gray-300 transition">
        Action
      </h3>
    </div>

  </div>
</div>
    </section>

  );
};

export default Quote;

