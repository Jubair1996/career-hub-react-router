import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredJobApplication } from "../../utilities/localstorage";
import StoreApplieyJobs from "./StoreApplieyJobs";

const AppliedJobs = () => {
    const jobs = useLoaderData()
    const [appliedJobs, setAppliedJobs] = useState([]);
    useEffect(() =>{
        const storedJobIds = getStoredJobApplication();
        if(jobs.length > 0){
            // const jobsApplied = jobs.filter(job => storedJobIds.includes(job.id))


            const jobsApplied =[];
            for(const id of storedJobIds){
                const job = jobs.find(job => job.id=== id)
                if(job){
                    jobsApplied.push(job)
                }
            }
            // console.log(jobs,storedJobIds,jobsApplied)
            setAppliedJobs(jobsApplied)
        }
    },[jobs])
    return (
        <div className="mt-10">
            {
                appliedJobs.map(job => <StoreApplieyJobs key={job.id} job={job}></StoreApplieyJobs> )
            }
        </div>
    );
};

export default AppliedJobs;