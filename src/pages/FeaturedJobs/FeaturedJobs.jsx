import { useEffect, useState } from "react";
import Job from "../Job/Job";

const FeaturedJobs = () => {
 const [jobs, setJobs] = useState([]);

 useEffect(()=>{
    fetch('../jobs.json')
    .then(res=>res.json())
    .then(data => setJobs(data))

 },[])
 console.log(jobs)



  return (
    <div>
      <h1 className="text-center font-bold text-4xl">Job Category List</h1>
      <p className="text-center font-medium text-xl mt-2">
        Explore thousands of job opportunities with all the information you
        need. Its your future
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-6 p-6">
        {
            jobs.map(job => <Job key={job.id} job={job}></Job> )
        }
      </div>
    </div>
  );
};

export default FeaturedJobs;
