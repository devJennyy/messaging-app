import { TbPlus } from "react-icons/tb";
import { BsMoonStars } from "react-icons/bs";
import { IoLogoGithub, IoMdRefresh } from "react-icons/io";
import { IoClose, IoSunny } from "react-icons/io5";
import { FaRegStar } from "react-icons/fa";
import { HiOutlineArrowSmLeft, HiOutlineArrowSmRight } from "react-icons/hi";
import { LuSearch } from "react-icons/lu";

interface Props{
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  setDarkmode: any;
  darkmode: boolean;
}

const BrowserMockup = ( {setDarkmode, darkmode} : Props ) => {

  return (
    <div className="flex flex-col border-b">
      <div className="flex flex-row justify-start items-end px-5 w-full h-10 bg-[#DFE1E6] rounded-t-md">
        <div className="flex justify-center items-center bg-white w-16">
          <div className="bg-[#DFE1E6] w-full h-full rounded-br-lg">
            <img src="/images/dot-logo.svg" className="w-10 h-10" />
          </div>
        </div>

        <div className="flex flex-row justify-between items-center bg-white rounded-t-lg w-48 h-8">
          <div className="flex flex-row justify-between items-center bg-white w-full h-full rounded-t-lg px-2">
            <div className="flex flex-row justify-center items-center gap-2">
              <img src="/logo.svg" className="w-3 h-3" />
              <p className="text-[12px]">Messaging App</p>
            </div>

            <IoClose />
          </div>
        </div>

        <div className="flex flex-row justify-between items-center bg-white w-48 h-8">
          <div className="flex flex-row justify-between items-center bg-[#DFE1E6] w-full h-full rounded-bl-lg px-2">
            <div className="flex flex-row justify-center items-center gap-2">
              <IoLogoGithub />
              <p className="text-[12px]">devJennny</p>
            </div>

            <IoClose />
          </div>

          <div className=" flex justify-center items-center h-full bg-[#DFE1E6]">
            <div className="border-r border-[#8B8E92] h-5"></div>
          </div>
        </div>

        <div className="flex justify-center items-center w-10 h-8">
          <TbPlus size={17} />
        </div>
      </div>

      <div className="flex flex-row justify-between items-center w-full h-10 px-4 gap-2">
        <div className="flex flex-1 flex-row justify-between items-center gap-2 mr-2">
          <HiOutlineArrowSmLeft size={20} />
          <HiOutlineArrowSmRight size={20} />
          <IoMdRefresh size={17} />
        </div>

        <div className="flex flex-row justify-between items-center w-full h-7 relative">
          <input
            placeholder="Search or enter web address"
            className="w-full h-full bg-[#F1F3F4] rounded-full pl-9 pr-9 text-[12px] relative outline-none"
          />
          <LuSearch className="absolute ml-3" />
          <FaRegStar size={15} className="absolute right-0 mr-3" />
        </div>

        <div className="flex justify-between items-center w-16 h-7 bg-[#F1F3F4] dark:bg-[#27272A] rounded-full px-1 shadow-sm">
          <button onClick={ () => setDarkmode(!darkmode)} className={`flex justify-between items-center w-6 h-6 rounded-full dark:text-transparent ${!darkmode && `bg-white`}`}>
            <IoSunny className="w-full" />
          </button>
          <button onClick={ () => setDarkmode(!darkmode)} className={`flex justify-between items-center w-6 h-6 rounded-full text-transparent dark:text-black ${darkmode && `bg-white`}`}>
            <BsMoonStars size={14} className="w-full" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default BrowserMockup;
