const Form = () => {
  return (
    <div>
      <div
        className="hero min-h-screen"
        style={{
          backgroundImage:
            "url(https://daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.jpg)",
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className=" text-center text-neutral-content  border w-2/5 lg:w-2/6">

         <button className="w-full">Continue With facebook</button> 
         <button className="w-full">Continue With facebook</button> 

        <input type="text" placeholder="Type here" className="input input-bordered  w-full " />
        <input type="text" placeholder="Type here" className="input input-bordered  w-full " />
        </div>
      </div>
    </div>
    // <div className="relative grid h-[40rem] w-full max-w-[100rem] flex-col items-end justify-center overflow-hidden rounded-xl  bg-clip-border">
    //     <div  className="absolute inset-0 m-0 h-full w-full overflow-hidden rounded-none bg-transparent
    //    bg-[url('https://i.ibb.co/Yyp1BvH/use-form.jpg')] bg-cover bg-clip-border bg-center text-white-900 shadow-none">

    //     <input type="text" placeholder="Type here" className="input input-bordered input-primary w-full max-w-xs" />
    //     <input type="text" placeholder="Type here" className="input input-bordered input-primary w-full max-w-xs" />
    // </div>
    // </div>
  );
};

export default Form;
