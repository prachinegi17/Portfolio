import home from "../../assets/home-main.svg";

const MainHome = () => {
  return (
    <section className="min-h-screen flex items-center justify-between px-10 lg:px-24">
      {/* Left Content */}
      <div className="max-w-xl animate-fade-up">
        <h1 className="text-xl lg:text-5xl font-bold text-white leading-tight">
          Hi!<br/>I'm <span className="text-[#bc7bf9] ">Prachi Negi</span> 
        </h1>
        <p className="text-xl lg:text-5xl font-bold text-white leading-tight pt-4"> A Frontend Developer.</p>

        <p className="mt-6 text-lg text-gray-300">
          Frontend Developer passionate about building beautiful and responsive
          web applications with React, JavaScript, and Tailwind CSS.
        </p>

        {/* <button className="mt-8 rounded-lg bg-violet-600 px-6 py-3 font-semibold text-white transition hover:bg-violet-700">
          View Projects
        </button> */}
      </div>

      {/* Right Image */}
      <div className="hidden md:flex items-center justify-center">
        <img
          src={home}
          alt="Home"
          className="h-[450px] w-[450px] object-contain"
        />
      </div>
    </section>
  );
};

export default MainHome;