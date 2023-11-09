const Testimonal = () => {
  return (
    <div className="px-4 lg:px-0">
      <div className="carousel w-full shadow-2xl h-[500px] ">
        <div id="slide1" className="carousel-item relative w-full">
          <div className="absolute rounded-xl flex items-center h-full ">
            <div className=" space-y-7 px-2 md:px-6 w-5/6 mx-auto">
              <p className="text-lg">
                Scopic Software has been on Marketeers Hub since its founding in
                2006. We are now over 200 employees and Marketeers Hub is still
                our primary source of new clients. It is definitely the best service
                marketplace out there if you are looking to grow a company,
                either as a buyer or provider.
                <br></br> <br></br>
                Marketeers Hub is not only a marketplace but a place to do
                business. We meet new clients and more often than not establish
                long-term business relationships, all through Marketeers Hub.
                 We have been with Marketeers Hub
                for over 10 years and hope to be here much longer.
              </p>
              <div className="flex items-center gap-7 justify-center ">
                <div>
                  <img
                    className="w-24 rounded-full"
                    src="https://i.ibb.co/hD0Mcgp/author6.jpg"
                    alt=""
                  />
                </div>
                <div>
                  <h3 className="text-2xl font-semibold">Scopic Software</h3>
                  <h2 className="text-xl">Custom IT Solutions Firm</h2>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide4" className="btn btn-circle mr-5">
              ❮
            </a>
            <a href="#slide2" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>

        <div id="slide2" className="carousel-item relative w-full">
          <div className="absolute rounded-xl flex items-center h-full ">
            <div className=" space-y-7 pl-12 w-5/6 mx-auto">
              <p className="text-lg">
                Marketeers Hub s services have allowed me to find more
                freelancing work as a writer than any other website. It is easy
                to communicate with clients through their message system and
                their SafePay feature ensures that all funds are secured prior
                to any work being done. I would recommend Marketeers Hub to any
                freelancer who is looking to find new clients online.
              </p>
              <div className="flex items-center gap-7 justify-center ">
                <div>
                  <img
                    className="w-24 rounded-full"
                    src="https://i.ibb.co/4JYdKmf/author3.jpg"
                    alt=""
                  />
                </div>
                <div>
                  <h3 className="text-2xl font-semibold">Russell Lee</h3>
                  <h2 className="text-xl">Writer</h2>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide1" className="btn btn-circle mr-5">
              ❮
            </a>
            <a href="#slide3" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>

        <div id="slide3" className="carousel-item relative w-full">
          <div className="absolute rounded-xl flex items-center h-full ">
            <div className=" space-y-7 pl-12 w-5/6 mx-auto">
              <p className="text-lg">
                At SOLACE Engineers, we provide engineering solutions and other
                services on various freelancing platforms. Among them all,
                Marketeers Hub is the best and our first choice to invite
                clients outside of freelancing platforms. Great customer
                support, low fee, easy to understand interface and solid payment
                protection with the SafePay system make working a delight on
                Marketeers Hub! Marketeers Hub really helped our business
                flourish…
              </p>
              <div className="flex items-center gap-7 justify-center ">
                <div>
                  <img
                    className="w-24 rounded-full"
                    src="https://i.ibb.co/Fm5pLJN/Untitled-6.jpg"
                    alt=""
                  />
                </div>
                <div>
                  <h3 className="text-2xl font-semibold">
                    Solace Engineers Inc.
                  </h3>
                  <h2 className="text-xl">Engineering Firm</h2>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide2" className="btn btn-circle mr-5">
              ❮
            </a>
            <a href="#slide4" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>

        <div id="slide4" className="carousel-item relative w-full">
          <div className="absolute rounded-xl flex items-center h-full ">
            <div className=" space-y-7 pl-12 w-5/6 mx-auto">
              <p className="text-lg">
                Marketeers Hub.com is my favorite freelance platform. I love the
                functionality, the support and the strong workflow element,
                particularly the SafePay feature which makes the transfer of
                funds so easy. I love the integration with PayPal and the
                ability to amend agreements, with all steps communicated to and
                actioned by both sides. Of all the freelance platforms I have
                used, Marketeers Hub is by far my favorite.
              </p>
              <div className="flex items-center gap-7 justify-center ">
                <div>
                  <img
                    className="w-24 rounded-full"
                    src="https://i.ibb.co/1TswrNh/author7.jpg"
                    alt=""
                  />
                </div>
                <div>
                  <h3 className="text-2xl font-semibold">Isabel Austin</h3>
                  <h2 className="text-xl">Writer, Editor, Proofreader</h2>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide3" className="btn btn-circle mr-5">
              ❮
            </a>
            <a href="#slide1" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonal;
