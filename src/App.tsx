import { FaAngleDown } from "react-icons/fa";
import "./App.css";
import { BiSolidEditAlt } from "react-icons/bi";
import { TbDotsVertical } from "react-icons/tb";
import { BsEmojiWink } from "react-icons/bs";
import { IoIosSend } from "react-icons/io";
import { MdKeyboardVoice } from "react-icons/md";
import { TiAttachment } from "react-icons/ti";

function App() {
  return (
    <>
      {/*Main Container*/}
      <div className="flex flex-1 flex-row justify-between items-center w-full h-full bg-red-500">
        {/*Message Group - Container*/}
        <div className="flex flex-col justify-start items-start w-[500px] gap-10 bg-white">
          <div className="flex flex-row justify-start items-center w-full">
            <p className="text-[16px] font-medium text-[#323232] pr-4">
              Recent Messages
            </p>
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

        {/*Chat Screen - Container*/}
        <div className="flex flex-col justify-center items-center w-[819px] p-5 bg-white">
          <div className="flex flex-row justify-start items-center w-full gap-4  border-b-[1px] border-[#DEDCDC] pb-[15px]">
            <div className="w-[48px] h-[48px]">
              <img
                src="/images/power-1.jpeg"
                className="w-full h-full object-cover rounded-full"
              />
            </div>
            <div className="flex flex-col justify-start items-start">
              <p className="text-[20px] font-medium text-[#323232]">Power</p>
              <p className="text-[14px] font-normal text-[#707070]">
                Chainsawman
              </p>
            </div>
            <div className="flex flex-1 flex-row justify-end items-end text-[24px] text-[#323232]">
              <TbDotsVertical />
            </div>
          </div>

          {/*Chat Screen - Messages*/}
          <div className="w-full pt-5">
            {/*Chat Screen - Messages (Sender)*/}
            <div className="flex flex-col justify-start items-start pt-2 pl-4">
              <div className="pl-2">
                <div className="flex justify-center items-center bg-[#E6E6E6] rounded-[10px] px-2">
                  <p className="text-[#323232] p-4 inline text-left">
                    Hey, there!
                  </p>
                </div>
              </div>
              <div className="bg-[#E7E7E7] w-[14px] h-[15px] rounded-full"></div>
            </div>

            {/*Chat Screen - Messages (Sender)*/}
            <div className="flex flex-col justify-start items-start pt-2 pl-4">
              <div className="pl-2">
                <div className="flex justify-center items-center bg-[#E6E6E6] rounded-[10px] px-2">
                  <p className="text-[#323232] p-4 inline text-left">
                    How are you?
                  </p>
                </div>
              </div>
              <div className=" bg-[#E7E7E7] w-[14px] h-[15px] rounded-full">
                <div>
                  <p className="flex flex-row justify-start items-center w-[200px] text-[13px] font-light text-[#707070] pl-6 pt-[3px]">
                    Today, 8:30 PM
                  </p>
                </div>
              </div>
            </div>

            {/*Chat Screen - Messages (Receiver)*/}
            <div className="flex flex-col justify-end items-end pt-2 pr-4">
              <div className="pr-2">
                <div className="flex justify-center items-center bg-[#A64039] rounded-[10px] px-2">
                  <p className="text-white p-4 inline text-left">Hello!</p>
                </div>
              </div>
              <div className=" bg-[#A64039] w-[14px] h-[15px] rounded-full"></div>
            </div>

            {/*Chat Screen - Messages (Receiver)*/}
            <div className="flex flex-col justify-end items-end pt-2 pr-4">
              <div className="pr-2">
                <div className="flex justify-center items-center bg-[#A64039] rounded-[10px] px-2">
                  <p className="text-white p-4 inline text-left">
                    I am fine and how are you?
                  </p>
                </div>
              </div>
              <div className="flex flex-row">
                <p className="flex flex-1 flex-row justify-end items-center w-[200px] text-[13px] font-light text-[#707070] pr-3 pt-[3px]">
                  Today, 8:30 PM
                </p>
                <div className=" bg-[#A64039] w-[14px] h-[15px] rounded-full"></div>
              </div>
            </div>

            {/*Chat Screen - Messages (Sender)*/}
            <div className="flex flex-col justify-start items-start pt-2 pl-4">
              <div className="pl-2">
                <div className="flex justify-center items-center bg-[#E6E6E6] rounded-[10px] px-2">
                  <p className="text-[#323232] p-4 inline text-left">
                    I am doing well. Can we meet tomorrow?
                  </p>
                </div>
              </div>
              <div className=" bg-[#E7E7E7] w-[14px] h-[15px] rounded-full">
                <div>
                  <p className="flex flex-row justify-start items-center w-[200px] text-[13px] font-light text-[#707070] pl-6 pt-[3px]">
                    Today, 8:30 PM
                  </p>
                </div>
              </div>
            </div>

            {/*Chat Screen - Messages (Receiver)*/}
            <div className="flex flex-col justify-end items-end pt-2 pr-4">
              <div className="pr-2">
                <div className="flex justify-center items-center bg-[#A64039] rounded-[10px] px-2">
                  <p className="text-white p-4 inline text-left">Yes, sure!</p>
                </div>
              </div>
              <div className="flex flex-row">
                <p className="flex flex-1 flex-row justify-end items-center w-[200px] text-[13px] font-light text-[#707070] pr-3 pt-[3px]">
                  Today, 8:30 PM
                </p>
                <div className=" bg-[#A64039] w-[14px] h-[15px] rounded-full"></div>
              </div>
            </div>

            {/*Chat Screen - Messages - Voice Recording (Sender)*/}
            <div className="flex flex-col justify-start items-start pt2 pl-4">
              <div className="pl-2">
                <div className="flex justify-center items-center px-2">
                  <img src="/images/voice-recording.png" />
                </div>
              </div>
              <div className="bg-[#E7E7E7] w-[14px] h-[15px] rounded-full"></div>
            </div>

            <div className="flex flex-col justify-start items-start pt-2 pl-4">
              <div className="pl-2">
                <div className="flex justify-center items-center px-2">
                  <img src="/images/voice-recording.png" />
                </div>
              </div>
              <div className="bg-[#E7E7E7] w-[14px] h-[15px] rounded-full">
                <div>
                  <p className="flex flex-row justify-start items-center w-[200px] text-[13px] font-light text-[#707070] pl-6 pt-[3px]">
                    Today, 8:30 PM
                  </p>
                </div>
              </div>
            </div>

            {/*Chat Screen - Messages (Receiver)*/}
            <div className="flex flex-col justify-end items-end pt-2 pr-4">
              <div className="pr-2">
                <div className="flex justify-center items-center bg-[#A64039] rounded-[10px] px-2">
                  <p className="text-white p-4 inline text-left">Ok, got it!</p>
                </div>
              </div>
              <div className="flex flex-row">
                <p className="flex flex-1 flex-row justify-end items-center w-[200px] text-[13px] font-light text-[#707070] pr-3 pt-[3px]">
                  Today, 8:30 PM
                </p>
                <div className=" bg-[#A64039] w-[14px] h-[15px] rounded-full"></div>
              </div>
            </div>
          </div>

          {/*Chat Screen - Input Field*/}
          <div className="flex items-center relative w-[750px] pt-10 pb-3">
            <div className="flex justify-center items-center gap-2 absolute right-0 text-[20px] mr-4">
              <button className="text-[17px]">
                <BsEmojiWink />
              </button>
              <button>
                <MdKeyboardVoice />
              </button>
              <button>
                <TiAttachment />
              </button>
              <div className="flex justify-center items-center border-l-2 pl-2">
                <button>
                  <IoIosSend />
                </button>
              </div>
            </div>
            <input
              className="bg-[#F5F5F5] text-[14px] font-normal text-[#A0A0A0] pl-4 rounded-[8px] py-[15px] pr-[150px] w-full"
              placeholder="Type something ..."
            />
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
