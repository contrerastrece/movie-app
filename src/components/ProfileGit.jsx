
import {VscGithub} from 'react-icons/vsc'
const ProfileGit = () => {
  return (
    <div className=" w-10/12 m-auto flex flex-col items-center relative  mt-24">
      <div className=" w-20 absolute top-[-2.5rem]">
        <img
          loading="lazy"
          src="https://avatars.githubusercontent.com/u/29743309?s=400&u=74e90298d99f14c1b275a4706012575a16af591f&v=4"
          className="w-20 rounded-full"
        />
      </div>
      <div className="bg-secondary self-stretch flex w-full grow flex-col pl-4 pr-5 pt-12 pb-4 rounded-xl">
        <div className="text-gray  ">
        Discover my world of projects and code on GitHub. 😊🚀
        </div>
        <button className="bg-primary40 text-primary rounded-xl p-2 mt-5 flex gap-2 justify-center items-center">
          <VscGithub className='text-primary'/>
          See more ...
        </button>
      </div>
    </div>
  );
};

export default ProfileGit;
