import { GrUserManager } from 'react-icons/gr';
import { TbListCheck } from 'react-icons/tb';
import { FaAward, FaMoneyBillAlt } from 'react-icons/fa';


const OurSuccess = () => {
    return (
        <div className='flex'>
            <div className='flex items-center'>
                <div className='text-3xl '><GrUserManager></GrUserManager></div>
                <div>
                    <h2>800,000</h2>
                    <h2>Employers Worldwide</h2>
                </div>
            </div>
            <div>
                <div><TbListCheck></TbListCheck></div>
                <div>
                    <h1>1 Million</h1>
                    <h4>Paid Invoices</h4>
                </div>
            </div>
            <div>
                <div><FaMoneyBillAlt></FaMoneyBillAlt></div>
                <div>
                    <h3>$250 Million</h3>
                    <h5>Paid to Freelancers</h5>
                </div>
            </div>
            <div>
                <div><FaAward></FaAward></div>
                <div>
                    <h2>99%</h2>
                    <h3>Customer Satisfaction Rate</h3>
                </div>
            </div>
        </div>
    );
};

export default OurSuccess;