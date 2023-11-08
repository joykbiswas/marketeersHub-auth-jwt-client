
const Banner = () => {
    return (
        <div className=' mt-9 relative bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90%'>
            <div className="flex  md:h-[70vh] lg:h-[80vh]">
            <div className="w-3/5 ml-4 lg:ml-6 h-full pt-2 space-y-3 md:pt-3 md:space-y-5 lg:pt-5 lg:space-y-9">
                <h5 className="text-red-400">Well come MarketeersHub</h5>
                <h2 className="text-3xl md:text-4xl lg:text-5xl text-white">RE-DEFINING PERFORMANCE MARKETING</h2>
                <h3 className="text-xl md:text-3xl font-semibold text-white">Digital Growth</h3>

                <div className="flex items-center ">
                <button className="rounded-full bg-slate-300 text-blue-700 border  p-4 hover:text-green-600 hover:bg-white">Get Started </button>
                
                </div>
            </div>

            <div className="w-2/5  object-cover  "
           data-aos="fade-left"
           data-aos-anchor="#example-anchor"
           data-aos-offset="500"
           data-aos-duration="500"
            >
                <img className="  h-full" src="https://i.ibb.co/3pV9DFC/intro.png" alt="" />
            </div>
            </div>
        </div>
    );
};

export default Banner;