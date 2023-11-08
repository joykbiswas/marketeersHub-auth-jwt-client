import { BsArrowRight } from "react-icons/bs";

const FindTalent = () => {
  return (
    <div className="px-4 lg:pl-0 py-7">
      <div className="relative grid h-[40rem] w-full max-w-[100rem] flex-col items-end justify-center overflow-hidden rounded-xl  bg-clip-border">
        <div
          className="absolute inset-0 m-0 h-full w-full overflow-hidden rounded-none bg-transparent 
           bg-[url('https://i.ibb.co/y03vWbz/user.jpg')] bg-cover   bg-clip-border bg-center text-white-900 shadow-none"
        >
          <div className="absolute rounded-xl flex items-center h-full left-0 top-0 right-0 bg-gradient-to-t from-[#151515] to-[rgba(21, 21, 21, 0)]">
            <div className="pl-3 md:pl-8 lg:pl-12  w-full ">
              <div className="text-white space-y-7 sm:w-10/12 md:w-1/2 lg:w-2/5 lg:mb-24">
                <h2 className="text-base md:text-xl font-bold">For client</h2>
                <h2 className="text-3xl md:text-4xl lg:text-6xl font-bold">
                  Find talent your way
                </h2>
                <p className="text-xl font-semibold">
                  Work with the largest network of independent professionals and
                  get things done—from quick turnarounds to big transformations.
                </p>
              </div>

              {/* card section */}
              <div className=" flex-row md:flex space-y-3 md:gap-4 lg:gap-5 pr-12">
                {/* 1st card */}
                <div className="w-full card  bg-base-100 text-black shadow-xl ">
                  <div className="card-body bg-green-600 rounded-xl text-white hover:bg-white hover:text-green-500 space-y-3">
                    <h2 className="card-title md:text-3xl lg:text-4xl font-bold">
                      Post a Job <br /> and hire a pro
                    </h2>
                    <div className="flex flex-row  items-center">
                      <p className="text-xl font-semibold">
                        Talent MarketPlace
                      </p>
                      <span className="md:text-2xl lg:text-3xl">
                        <BsArrowRight></BsArrowRight>
                      </span>
                    </div>
                  </div>
                </div>
                {/* 2nd card */}
                <div className="w-full card  bg-base-100 text-black shadow-xl ">
                  <div className="card-body bg-green-600 rounded-xl text-white hover:bg-white hover:text-green-500 space-y-3">
                    <h2 className="card-title md:text-3xl lg:text-4xl font-bold">
                      {" "}
                      Get Browse and <br /> buy project
                    </h2>
                    <div className="flex flex-row  items-center">
                      <p className="text-xl font-semibold">project Catalog</p>
                      <span className="text-3xl">
                        <BsArrowRight></BsArrowRight>
                      </span>
                    </div>
                  </div>
                </div>
                {/* 3rd card */}
                <div className="w-full card  bg-base-100 text-black shadow-xl ">
                  <div className="card-body bg-green-600 rounded-xl text-white hover:bg-white hover:text-green-500 space-y-3">
                    <h2 className="card-title md:text-3xl lg:text-4xl font-bold">
                      Get advice from
                      <br /> industry export
                    </h2>
                    <div className="flex flex-row  items-center">
                      <p className="text-xl font-semibold">Consultations</p>
                      <span className="text-3xl">
                        <BsArrowRight></BsArrowRight>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FindTalent;
