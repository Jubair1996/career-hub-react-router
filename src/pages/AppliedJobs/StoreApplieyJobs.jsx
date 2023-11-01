import { AiOutlineDollar } from "react-icons/ai";
import { BiLocationPlus } from "react-icons/bi";
import { Link } from "react-router-dom";

const StoreApplieyJobs = ({ job }) => {
  const {
    logo,
    job_title,
    salary,
    location,
    company_name,
    remote_or_onsite,
    job_type,
  } = job;
  return (
    <div>
      <div className="card lg:card-side bg-gray-100 mb-4 px-4 py-1 shadow-xl">
        <figure className="bg-gray-300 p-5 rounded">
          <img src={logo} alt="Album" />
        </figure>
        <div className="card-body">
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
          <div className="flex">
            <p className="flex gap-1 items-center">
              {" "}
              <BiLocationPlus></BiLocationPlus> {location}
            </p>
            <p className="flex gap-1 items-center">
              {" "}
              <AiOutlineDollar></AiOutlineDollar> Salary: {salary}
            </p>
          </div>
          <div className="card-actions justify-end items-center">
          <Link to='/'>
          <button className="btn btn-primary">View Details</button>
          </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StoreApplieyJobs;
