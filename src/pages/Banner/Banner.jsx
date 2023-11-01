import user from '../../assets/images/user.png' 
const Banner = () => {
    return (
        <div className="flex flex-col md:flex-row justify-between items-center p-4">
            <div className="space-y-3 mr-12">
                <h1 className='font-bold text-6xl '>One Step <br /> Closer To Your <br /><span className="text-[#7E90FE]"> Dream Job</span></h1>
                <p className='text-xl font-semibold'>Explore thousands of job opportunities with all <br /> the information you need. Its your future. Come find it. Manage all <br /> your job application from start to finish.</p>
                <button className="px-4 py-2 rounded text-xl text-white font-medium bg-[#7E90FE]">Get Started</button>
            </div>
            <div>
                <img className='w-[75%] my-10' src={user} alt="" />
            </div>
        </div>
    );
};

export default Banner;