import { GrUserManager } from "react-icons/gr";
import { TbListCheck } from "react-icons/tb";
import { FaAward, FaMoneyBillAlt } from "react-icons/fa";

const OurSuccess = () => {
  return (
    <div className=" bg-slate-50 mb-8">
      <div className="ml-6 lg:ml-0 lg:justify-center grid  grid-cols-2 lg:grid-cols-4">
        <div className="flex items-center">
          <div className="text-3xl ">
            <GrUserManager></GrUserManager>
          </div>
          <div className="pl-2">
            <h2 className="text-xl">800,000</h2>
            <h2 className="text-lg">Employers Worldwide</h2>
          </div>
        </div>
        <div className="flex items-center">
          <div className="text-3xl ">
            <TbListCheck></TbListCheck>
          </div>
          <div className="pl-2">
            <h1 className="text-xl">1 Million</h1>
            <h4 className="text-lg">Paid Invoices</h4>
          </div>
        </div>
        <div className="flex items-center">
          <div className="text-3xl ">
            <FaMoneyBillAlt></FaMoneyBillAlt>
          </div>
          <div className="pl-2">
            <h3 className="text-xl">$250 Million</h3>
            <h5 className="text-lg">Paid to Freelancers</h5>
          </div>
        </div>
        <div className="flex items-center">
          <div className="text-3xl ">
            <FaAward></FaAward>
          </div>
          <div className="pl-2">
            <h2 className="text-xl">99%</h2>
            <h3 className="text-lg">Customer Satisfaction Rate</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurSuccess;
