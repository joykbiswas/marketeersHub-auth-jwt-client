const Choose = () => {
  return (
    <div className="mb-32  relative grid h-[35rem] w-full max-w-[100rem] flex-col items-end justify-center overflow-hidden rounded-xl  bg-clip-border">
       
        <div className="absolute inset-0 m-0 h-full w-full overflow-hidden rounded-none bg-transparent 
           bg-[url('https://i.ibb.co/c6rpnhY/choose.jpg')] bg-cover   bg-clip-border bg-center text-white-900 shadow-none ">

       {/* <div className=""></div> */}
      <div className="absolute h-full hero-overlay bg-opacity-60">
        <div className="text-center py-2 lg:pb-8">
            <p className="text-4xl font-semibold text-white">Why Over  Million People Choose Us</p>
        </div>

      <div className=" md:flex  mx-auto ">  
           
           <div className=" md:w-1/2 md:mr-20">
   
           <div className=" lg:text-left px-5 lg:px-2  text-white">
                 <div className="mt-3 lg:flex md:justify-start">
                   <img
                     className="m-auto pr-2 bg-slate-300 rounded-full p-2 w-16"
                     src="https://i.ibb.co/jwmT7J0/img-1.png"
                     alt=""
                   />
                   <div>
                     <h3 className="text-2xl">Credibility</h3>
                     <hr className="mx-10 mb-2" />
                     <p>
                       We verify Freelancers, publish their feedback scores and
                       All-Time Transaction Data to help you identify time-tested
                       professionals across the globe.
                     </p>
                   </div>
                 </div>
   
                 <div className="mt-3 lg:flex lg:justify-start">
                   <img
                     className="m-auto pr-2 bg-slate-300 rounded-full p-2 w-16"
                     src="https://i.ibb.co/vBjpwcB/img-2.png"
                     alt=""
                   />
                   <div>
                     <h3 className="text-2xl">Security</h3>
                     <hr className="mx-10 mb-2" />
                     <p>
                       We offer SafePay payment protection and your choice of
                       preferred payment method for financial peace of mind.
                     </p>
                   </div>
                 </div>
   
                 <div className="mt-3 lg:flex lg:justify-start">
                   <img
                     className="m-auto pr-2 bg-slate-300 rounded-full p-2 w-16"
                     src="https://i.ibb.co/c31kM8S/img-3.png"
                     alt=""
                   />
                   <div>
                     <h3 className="text-2xl">Support</h3>
                     <hr className="mx-10 mb-2" />
   
                     <p>
                       Our dedicated support team works 24/7 to resolve all of your
                       queries over the phone or email, no matter where you are
                       located.
                     </p>
                   </div>
                 </div>
               </div>
           </div>
   
   
           <div className="md:w-1/2 md:ml-20 ">
           <div className="text-center  px-14  lg:px-2 lg:text-right text-white">
               <div className="mt-3 lg:flex lg:flex-row-reverse ">
                 <img
                   className=" m-auto lg:ml-2 bg-slate-300 rounded-full p-2 w-16"
                   src="https://i.ibb.co/QmzLXp0/im-4.jpg"
                   alt=""
                 />
                 <div className="">
                   <h3 className="text-2xl">Flexibility</h3>
                   <hr className="mx-10 mb-2 lg:ml-10" />
   
                   <p>
                     We provide multiple Payment terms and flexible Agreements to
                     enable you to work the way you want.
                   </p>
                 </div>
               </div>
   
               <div className="mt-3 justify-center lg:flex lg:flex-row-reverse  ">
                 <img
                   className="m-auto lg:ml-2 bg-slate-300 rounded-full p-2 w-16"
                   src="https://i.ibb.co/J2yC6fP/img-5.png"
                   alt=""
                 />
                 <div>
                   <h3 className="text-2xl">Value</h3>
                   <hr className="mx-10 mb-2" />
   
                   <p>
                     We have the lowest fees in the industry, providing you with
                     maximum value at minimum cost.
                   </p>
                 </div>
               </div>
   
               <div className="mt-3 lg:flex lg:flex-row-reverse ">
                 <button></button>
               </div>
             </div>
           </div>
         </div>
      </div>

    
    </div>
    </div>
  );
};

export default Choose;
