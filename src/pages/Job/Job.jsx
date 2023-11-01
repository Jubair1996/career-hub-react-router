import { BiLocationPlus } from "react-icons/bi";
import { AiOutlineDollar } from "react-icons/ai";
import PropTypes from 'prop-types';
const Job = ({job}) => {
    const {logo,job_title,company_name,remote_or_onsite,job_type,location,salary} = job;
    return (
        <div className="border p-4 rounded space-y-3">
            <img src={logo} alt="" />
            <h1 className="text-2xl font-bold">{job_title}</h1>
            <p className="text-xl font-medium">{company_name}</p>
            <div className="flex gap-4">
           <div className="border border-[#7E90FE] px-3 py-1 rounded">
           <button className="text-[#7E90FE]">{remote_or_onsite}</button>
           </div>
            <div className="border px-3 py-1 border-[#7E90FE] rounded">
            <button className="text-[#7E90FE]">{job_type}</button>
            </div>
            </div>
            <div className="flex gap-5">
                <p className="flex gap-1 items-center"> <BiLocationPlus></BiLocationPlus> {location}</p>
                <p className="flex gap-1 items-center"> <AiOutlineDollar></AiOutlineDollar> Salary: {salary}</p>
            </div>
            <button className="px-4 py-2 rounded text-xl text-white font-medium bg-[#7E90FE]">Vews Details</button>
        </div>
    );
};
Job.propTypes = {
    job: PropTypes.object
  };
export default Job;