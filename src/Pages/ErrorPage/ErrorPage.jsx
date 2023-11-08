import { Link } from 'react-router-dom';

const ErrorPage = () => {
    return (
        <div className="border h-[70vh]  ">
        <div className="h-full flex flex-col justify-center items-center">
        
        {/* <h3 className="text-3xl">No Path Available !!!</h3>  */}
        <img src="https://i.ibb.co/XV3Bd95/404.gif" alt="" />
        <Link to="/"><button  className=" text-2xl ml-4 border-2 bg-red-300 p-2 rounded-xl" >Back Home</button></Link>
        
        </div>
    </div>
    );
};

export default ErrorPage;