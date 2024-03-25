import { FaAngleDown } from "react-icons/fa";
import "./App.css";
import { BiSolidEditAlt } from "react-icons/bi";
import { TbDotsVertical } from "react-icons/tb";

function App() {
  return (
    <>
      {/*Main Container*/}
      <div className="flex flex-1 flex-row justify-between items-center w-full p-10 bg-red-500">
        {/*Message Group*/}
        <div className="flex flex-col justify-start items-start w-[500px] gap-10 bg-white">
          <div className="flex flex-row justify-start items-center w-full">
            <p className="text-[16px] font-medium pr-4">Recent Messages</p>
            <div className="flex flex-row justify-between items-center w-1/2">
              <button className="hover:scale-95 transition-all">
                <FaAngleDown />
              </button>
              <button className="hover:scale-95 transition-all">
                <BiSolidEditAlt />
              </button>
            </div>
          </div>

          <div className="flex flex-row justify-between items-center px-2 bg-[#F5F5F5] w-[345px] h-[42px] rounded-[8px]">
            <button className="flex flex-center justify-center items-center bg-[#F5F5F5] w-[163px] h-[30px] rounded-[6px] font-medium text-[12px] hover:text-white hover:bg-[#A53F38] hover:w-[163px] hover:h-[30px] hover:rounded-[6px] hover:scale-95 transition-all">
              <p>All Chat</p>
            </button>
            <button className="flex flex-center justify-center items-center bg-[#F5F5F5] w-[163px] h-[30px] rounded-[6px] font-medium text-[12px] hover:text-white hover:bg-[#A53F38] hover:w-[163px] hover:h-[30px] hover:rounded-[6px] hover:scale-95 transition-all">
              <p>Groups</p>
            </button>
          </div>

          {/*Message Group - Chats*/}
          <button className="flex flex-col w-full h-full hover:scale-95 transition-all">
            <div className="flex flex-row justify-start items-start gap-4 w-[382px] h-[90px]">
              <div className="w-[49px] h-[49px]">
                <img
                  src="/images/power-1.jpeg"
                  className="w-full h-full object-center object-cover rounded-[16px]"
                />
              </div>

              <div className="flex flex-1 flex-col justify-start items-start text-[#262626] h-[90px] text-left gap-2">
                <div className="flex flex-row justify-start items-center gap-4">
                  <p className="text-[14px] font-semi-bold">Power</p>
                  <p className="text-[12px] font-extralight">9:30pm</p>
                </div>
                <p className="flex flex-1 text-[12px] w-[280px] font-light truncate">
                  Sent you a voice message.
                </p>
              </div>
            </div>
          </button>
        </div>

        {/*Chat Screen*/}
        <div className="flex flex-col justify-start items-start w-[819px] p-5 bg-white">
          <div className="flex flex-row justify-start items-center w-full gap-4  border-b-[1px] border-[#DEDCDC] pb-[15px]">
            <div className="w-[48px] h-[48px]">
              <img
                src="/images/power-1.jpeg"
                className="w-full h-full object-cover rounded-full"
              />
            </div>
            <div className="flex flex-col justify-start items-start">
              <p className="text-[20px] font-medium text-[#1E1E1E]">Power</p>
              <p className="text-[14px] font-normal text-[#707070]">
                Chainsawman
              </p>
            </div>
            <div className="flex flex-1 flex-row justify-end items-end">
              <TbDotsVertical />
            </div>
          </div>

          <div className="flex flex-col justify-start items-start pt-[15px] pl-4">
            <div className="pl-2">
              <div className="flex justify-center items-center bg-[#E6E6E6] w-[170px] h-[50px] rounded-[10px]">
                <p className="text-[#303030]">Hey there!</p>
              </div>
            </div>
            <div className="bg-[#E7E7E7] w-[14px] h-[15px] rounded-full"></div>
          </div>

          <div className="flex flex-col justify-start items-start pt-[15px] pl-4">
            <div className="pl-2">
              <div className="flex justify-center items-center bg-[#E6E6E6] w-[170px] h-[50px] rounded-[10px]">
                <p className="text-[#303030]">How are you?</p>
              </div>
            </div>
            <div className="bg-[#E7E7E7] w-[14px] h-[15px] rounded-full"></div>
          </div>

          <div className="flex flex-col justify-start items-start pt-[15px] pl-4">
            <div className="pl-2">
              <div className="flex justify-center items-center bg-[#E6E6E6] w-[170px] h-[50px] rounded-[10px]">
                <p className="text-[#303030]">Hey there!</p>
              </div>
            </div>
            <div className="bg-[#E7E7E7] w-[14px] h-[15px] rounded-full"></div>
          </div>


        </div>

        {/*Info*/}
        <div className="w-[500px] bg-white">
          <p>Jenny Pieloor</p>
          <p>Jenny Pieloor</p>
          <p>Jenny Pieloor</p>
        </div>
      </div>
    </>
  );
}

export default App;
