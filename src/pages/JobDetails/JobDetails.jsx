import { AiOutlineDollar, AiOutlineMail, AiOutlinePhone } from "react-icons/ai";
import { BiLocationPlus } from "react-icons/bi";
import { useLoaderData, useParams } from "react-router-dom";
const JobDetails = () => {
  const jobs = useLoaderData();
  const { id } = useParams();
  const idInt = parseInt(id);
  const job = jobs.find((job) => job.id === idInt);
  // console.log(job)

  //   const {
  //     job_description,
  //     job_responsibility,
  //     educational_requirements,
  //     experiences,
  //     salary,
  //     job_title,contact_information
  //   } = job;
  return (
    <div>
      <div className="grid grid-cols-2 lg:grid-cols-5 gap-4 p-4 my-8">
        <div className="grid col-span-3 space-y-3">
          <p>
            <span className="text-xl font-semibold">Job Description:</span>{" "}
            {job.job_description}
          </p>
          <p>
            <span className="text-xl font-semibold">Job Responsibility</span>:{" "}
            {job.job_responsibility}
          </p>
          <h3 className="text-xl font-semibold">Educational Requirements:</h3>
          <p>{job.educational_requirements}</p>
          <h3 className="text-xl font-semibold">Experiences:</h3>
          <p>{job.experiences}</p>
        </div>
        <div className="grid col-span-2">
          <div className="bg-gray-100 mb-3 p-3 rounded">
            <h1 className="text-xl font-semibold">Job Details</h1>
            <hr className="border my-2 " />
            <p className="flex gap-1 items-center mt-6">
              {" "}
              <AiOutlineDollar></AiOutlineDollar>{" "}
              <span className="font-semibold">Salary</span>: {job.salary}
            </p>
            <p className="flex gap-1 items-center mt-6">
              {" "}
              <AiOutlineDollar></AiOutlineDollar>{" "}
              <span className=" font-semibold">Job Title</span>: {job.job_title}
            </p>
            <h1 className="text-xl font-semibold mt-6">Contact Information</h1>
            <hr className="border my-2" />
            
            <p className="flex gap-1 items-center mt-4"><AiOutlinePhone></AiOutlinePhone>
              <span className="font-semibold"> Phone:</span>{" "}
              {job.contact_information.phone}
            </p>

            <p className="flex gap-1 items-center my-3"><AiOutlineMail></AiOutlineMail>
              <span className="font-semibold"> Email:</span>{" "}
              {job.contact_information.email}
            </p>
            <p className="flex gap-1 flex-grow items-center">
              {" "}
              <BiLocationPlus></BiLocationPlus>{" "}
              <span className=" font-semibold">Address:</span> {job.contact_information.address}
            </p>
          </div>
          <button className="px-4 py-2 w-full rounded text-xl text-white font-medium bg-[#7E90FE]">
            Apply Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default JobDetails;
