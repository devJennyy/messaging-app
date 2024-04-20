import "./App.css";
import { TbDotsVertical, TbPlus } from "react-icons/tb";
import { BsEmojiSmile, BsEmojiWink, BsMoonStars } from "react-icons/bs";
import { IoIosSend, IoLogoGithub, IoMdPhotos, IoMdRefresh } from "react-icons/io";
import {
  MdArrowForwardIos,
  MdDelete,
  MdKeyboardArrowDown,
  MdKeyboardVoice,
} from "react-icons/md";
import { TiAttachment, TiMicrophone } from "react-icons/ti";
import { FiDownload, FiPlus } from "react-icons/fi";
import { IoClose, IoSunny } from "react-icons/io5";
import { FaCamera, FaHeart, FaRegStar } from "react-icons/fa";
import { HiOutlineArrowSmLeft, HiOutlineArrowSmRight } from "react-icons/hi";
import { LuSearch } from "react-icons/lu";
import MessageText from "./components/MessageText";

function App() {
  return (
    <>
      {/*Background */}
      <div className="flex justify-center items-center min-w-[1240px] h-full bg-[#FAF7F2]">
        {/* Background */}
        <div className="flex flex-col w-full h-full overflow-hidden relative">
          <div className="flex flex-row justify-between gap-10 ml-10 absolute">
            <img
              src="/images/vector-one.svg"
              className="bg-cover overflow-hidden"
            />
            <img
              src="/images/vector-four.svg"
              className="bg-cover overflow-hidden"
            />
            <img
              src="/images/vector-five.svg"
              className="bg-cover overflow-hidden"
            />
          </div>

          <div className="flex flex-row mt-96 absolute">
            <img
              src="/images/vector-two.svg"
              className="bg-cover overflow-hidden"
            />
            <img
              src="/images/vector-three.svg"
              className="bg-cover overflow-hidden"
            />
          </div>
        </div>

        {/* Main Container */}
        <div className="flex flex-col w-[1240px] h-[700px] border border-[#BABCBE] bg-white text-[#272727] absolute rounded-md">
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

              <div className="flex justify-between items-center w-16 h-7 bg-[#F1F3F4] rounded-full px-1 shadow-sm">
                <div className="flex justify-between items-center w-6 h-6 rounded-full bg-white">
                  <IoSunny className="w-full" />
                </div>
                <div className="flex justify-between items-center w-6 h-6 rounded-full bg-white hidden">
                  <BsMoonStars size={14} className="w-full" />
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-1 flex-row justify-between px-4">
            {/*Message Group - Container*/}
            <div className="flex flex-1 flex-col max-w-[340px] h-full gap-2">
              <div className="flex flex-row justify-between items-center w-full h-16 gap-4 px-4">
                <p className="font-medium">Messages</p>
              </div>

              <div className="flex flex-row items-center w-full px-4">
                <input
                  placeholder="Search or start a new chat"
                  className="w-full outline-none border small-text py-2 rounded-md pl-9"
                />

                <button className="absolute text-left ml-3">
                  <LuSearch />
                </button>
              </div>

              {/* People */}
              <div className="flex flex-row p-4">

                
              </div>
            </div>

            {/*Chat Screen - Container*/}
            <div className="flex flex-1 flex-col w-full h-full border-x border-[#E6E6E6]/66">
              <div className="flex flex-col justify-between h-full">
                <div className="flex flex-row justify-between items-center w-full h-16 gap-4 border-b border-[#E6E6E6]/66 px-4">
                  <div className="flex flex-row gap-4">
                    <img
                      src="/images/power.jpg"
                      className="w-10 h-10 object-cover rounded-full"
                    />
                    <div className="flex flex-col justify-start items-start">
                      <p className="font-medium">Power</p>
                      <p className="small-text">Last seen 8 minutes ago</p>
                    </div>
                  </div>
                  <button>
                    <TbDotsVertical size={18} />
                  </button>
                </div>

                {/* Chat Field */}
                <div className="flex flex-1 flex-col justify-end py-4 gap-2">
                    <MessageText message="Hey there!" user="receiver" hasAvatar={false}/>
                    <MessageText message="How are you?" user="receiver" hasAvatar={true}/>
                    <MessageText message="Hello!" user="sender" hasAvatar={false}/>
                    <MessageText message="I am fine and how are you?" user="sender" hasAvatar={true}/>
                    <MessageText message="I am doing well, Can we meet tomorrow?" user="receiver" hasAvatar={true}/>
                    <MessageText message="Yes Sure!" user="sender" hasAvatar={true}/>
                    
                </div>

                <div className="flex flex-row justify-between items-center w-full h-16 gap-4 border-t border-[#E6E6E6]/66 px-4">
                  <div className="flex flex-row gap-3">
                    <button>
                      <FiPlus />
                    </button>
                    <button>
                      <IoMdPhotos />
                    </button>
                    <button>
                      <FaCamera />
                    </button>
                    <button>
                      <TiMicrophone size={18} />
                    </button>
                  </div>

                  <div className="flex flex-row justify-center items-center w-full relative">
                    <input
                      placeholder="Type a message..."
                      className="w-full outline-none border small-text py-2 rounded-md pl-3 pr-9"
                    />

                    <button className="absolute right-0 mr-3">
                      <BsEmojiSmile />
                    </button>
                  </div>

                  <div className="flex justify-center">
                    <button>
                      <FaHeart />
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Media Container */}
            <div className="flex flex-1 flex-col max-w-[340px] h-full gap-4 pl-4">
              <div className="flex flex-col justify-center items-center gap-3 pt-4">
                <div className="flex justify-center items-center w-28 h-28 bg-black rounded-full ">
                  <img
                    src="/images/power.jpg"
                    className="object-cover w-24 h-24 rounded-full outline outline-[4px] outline-white"
                  />
                </div>
                <div className="flex flex-col">
                  <p className="font-medium">Power</p>
                  <p className="small-text">Last seen 8 minutes ago</p>
                </div>
              </div>

              <div className="flex flex-col gap-5">
                <div className="flex flex-col gap-2">
                  <div className="flex flex-row justify-between">
                    <p className="medium-text">Attachments</p>
                    <MdKeyboardArrowDown className="text-[#545454]" />
                  </div>

                  <div className="flex flex-col gap-2">
                    <div className="w-full h-12 bg-[#F8F7F7]"></div>
                    <div className="w-full h-12 bg-[#F8F7F7]"></div>
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <div className="flex flex-row justify-between">
                    <p className="text-[12px] medium-text">Media</p>
                    <MdKeyboardArrowDown className="text-[#545454]" />
                  </div>

                  <div className="flex flex-col gap-1">
                    <div className="flex flex-row gap-1">
                      <div className="w-full h-[75px] bg-[#F8F7F7] rounded-md"></div>
                      <div className="w-full h-[75px] bg-[#F8F7F7] rounded-md"></div>
                      <div className="w-full h-[75px] bg-[#F8F7F7] rounded-md"></div>
                      <div className="w-full h-[75px] bg-[#F8F7F7] rounded-md"></div>
                    </div>

                    <div className="flex flex-row gap-1">
                      <div className="w-full h-[75px] bg-[#F8F7F7] rounded-md"></div>
                      <div className="w-full h-[75px] bg-[#F8F7F7] rounded-md"></div>
                      <div className="w-full h-[75px] bg-[#F8F7F7] rounded-md"></div>
                      <div className="w-full h-[75px] bg-[#F8F7F7] rounded-md"></div>
                    </div>

                    <div className="w-full h-[75px] bg-[#F8F7F7] rounded-md"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex-1 flex-row justify-between items-center w-full h-full hidden">
        {/*Message Group - Container*/}
        <div className="flex flex-col items-center w-[500px] h-full bg-white pt-8">
          <div className="flex flex-col w-full px-10">
            <div className="flex flex-row justify-between items-center pb-10">
              <p className="font-medium text-[20px] text-[#323232]">
                Recent Messages
              </p>
              <button className="text-[20px] text-[#323232] hover:scale-[.9] transition-all">
                <img src="/images/edit.svg" />
              </button>
            </div>

            <div className="flex justify-between items-center px-3 bg-[#F5F5F5] w-[420px] h-[52px] rounded-[8px]">
              <button className="flex flex-row justify-center items-center bg-[#9C2B23] w-[193px] h-[33px] text-white text-[14px] rounded-[6px] hover:scale-95 transition-all">
                <p>All Chats</p>
              </button>
              <button className="flex flex-row justify-center items-center hover:bg-[#9C2B23] w-[193px] h-[33px] hover:text-white text-[14px] rounded-[6px] hover:scale-95 transition-all">
                <p>Groups</p>
              </button>
            </div>
          </div>

          {/*Personal Message - Container*/}
          <div className="flex justify-center items-center flex-col h-[780px] overflow-y-hidden pt-16">
            {/*Personal Message 1*/}
            <div className="hover:bg-[#F2F2F7] w-full px-10">
              <button className="flex flex-row justify-center items-center w-[420px] h-[88px] active:scale-[.920] transition-all">
                <div className="w-[52px]">
                  <img
                    src="/images/power.jpg"
                    className="w-full h-[53px] rounded-[10px] object-cover"
                  />
                </div>

                <div className="flex flex-1 flex-col justify-start w-full pl-4">
                  <div className="flex flex-row justify-between items-center">
                    <p className="text-[16px] font-semibold text-[#323232]">
                      Power
                    </p>
                    <p className="text-[13px] font-extralight text-[#323232] ">
                      9:30 PM
                    </p>
                  </div>

                  <div className="flex flex-1 justify-between items-center">
                    <div className="flex flex-1 justify-between items-center">
                      <p className="text-left text-[12px] pt-1 text-[#323232] w-[290px] h-[35px] line-clamp-2">
                        Sent you a voice message.
                      </p>
                    </div>
                  </div>
                </div>
              </button>
            </div>

            {/*Personal Message 2*/}
            <div className="hover:bg-[#F2F2F7] w-full px-10">
              <div className="flex flex-row justify-center items-center w-[420px] h-[88px] active:scale-[.920] transition-all">
                <div className="w-[52px]">
                  <img
                    src="/images/denji.jpg"
                    className="w-full h-[53px] rounded-[10px] object-cover"
                  />
                </div>

                <div className="flex flex-1 flex-col justify-start w-full pl-4">
                  <div className="flex flex-row justify-between items-center">
                    <p className="text-[16px] font-semibold text-[#323232]">
                      Denji
                    </p>
                    <p className="text-[13px] font-extralight text-[#323232] ">
                      9:30 PM
                    </p>
                  </div>

                  <div className="flex flex-1 justify-between items-center">
                    <div className="flex flex-1 justify-between items-center">
                      <p className="text-left text-[12px] pt-1 text-[#323232] w-[290px] h-[35px] line-clamp-2">
                        Nice. See you soon!
                      </p>

                      <div className="flex justify-end items-end">
                        <div className="flex justify-center items-center bg-[#9C2B23] text-white text-[12px] w-5 rounded-full aspect-square">
                          <p>2</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/*Personal Message 3*/}
            <div className="hover:bg-[#F2F2F7] w-full px-10">
              <div className="flex flex-row justify-center items-center w-[420px] h-[88px] active:scale-[.920] transition-all">
                <div className="w-[52px]">
                  <img
                    src="/images/yoru.jpg"
                    className="w-full h-[53px] rounded-[10px] object-cover"
                  />
                </div>

                <div className="flex flex-1 flex-col justify-start w-full pl-4">
                  <div className="flex flex-row justify-between items-center">
                    <p className="text-[16px] font-semibold text-[#323232]">
                      Yoru
                    </p>
                    <p className="text-[13px] font-extralight text-[#323232] ">
                      9:30 PM
                    </p>
                  </div>

                  <div className="flex flex-1 justify-between items-center">
                    <div className="flex flex-1 justify-between items-center">
                      <p className="text-left text-[12px] pt-1 text-[#323232] w-[290px] h-[35px] line-clamp-2">
                        Let's go tomorrow!
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/*Personal Message 4*/}
            <div className="hover:bg-[#F2F2F7] w-full px-10">
              <div className="flex flex-row justify-center items-center w-[420px] h-[88px] active:scale-[.920] transition-all">
                <div className="w-[52px]">
                  <img
                    src="/images/makima.jpg"
                    className="w-full h-[53px] rounded-[10px] object-cover"
                  />
                </div>

                <div className="flex flex-1 flex-col justify-start w-full pl-4">
                  <div className="flex flex-row justify-between items-center">
                    <p className="text-[16px] font-semibold text-[#323232]">
                      Makima
                    </p>
                    <p className="text-[13px] font-extralight text-[#323232] ">
                      9:30 PM
                    </p>
                  </div>

                  <div className="flex flex-1 justify-between items-center">
                    <div className="flex flex-1 justify-between items-center">
                      <p className="text-left text-[12px] pt-1 text-[#323232] w-[290px] h-[35px] line-clamp-2">
                        I'm coming over.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/*Personal Message 5*/}
            <div className="hover:bg-[#F2F2F7] w-full px-10">
              <div className="flex flex-row justify-center items-center w-[420px] h-[88px] active:scale-[.920] transition-all">
                <div className="w-[52px]">
                  <img
                    src="/images/aki.jpg"
                    className="w-full h-[53px] rounded-[10px] object-cover"
                  />
                </div>

                <div className="flex flex-1 flex-col justify-start w-full pl-4">
                  <div className="flex flex-row justify-between items-center">
                    <p className="text-[16px] font-semibold text-[#323232]">
                      Aki
                    </p>
                    <p className="text-[13px] font-extralight text-[#323232] ">
                      9:30 PM
                    </p>
                  </div>

                  <div className="flex flex-1 justify-between items-center">
                    <div className="flex flex-1 justify-between items-center">
                      <p className="text-left text-[12px] pt-1 text-[#323232] w-[290px] h-[35px] line-clamp-2">
                        Okay.
                      </p>

                      <div className="flex justify-end items-end">
                        <div className="flex justify-center items-center bg-[#9C2B23] text-white text-[12px] w-5 rounded-full aspect-square">
                          <p>2</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/*Personal Message 6*/}
            <div className="hover:bg-[#F2F2F7] w-full px-10">
              <div className="flex flex-row justify-center items-center w-[420px] h-[88px] active:scale-[.920] transition-all">
                <div className="w-[52px]">
                  <img
                    src="/images/himeno.jpg"
                    className="w-full h-[53px] rounded-[10px] object-cover"
                  />
                </div>

                <div className="flex flex-1 flex-col justify-start w-full pl-4">
                  <div className="flex flex-row justify-between items-center">
                    <p className="text-[16px] font-semibold text-[#323232]">
                      Himeno
                    </p>
                    <p className="text-[13px] font-extralight text-[#323232] ">
                      9:30 PM
                    </p>
                  </div>

                  <div className="flex flex-1 justify-between items-center">
                    <div className="flex flex-1 justify-between items-center">
                      <p className="text-left text-[12px] pt-1 text-[#323232] w-[290px] h-[35px] line-clamp-2">
                        Let's get drunk and have fun. But don't tell makima or
                        she will k*ll us both!
                      </p>

                      <div className="flex justify-end items-end">
                        <div className="flex justify-center items-center bg-[#9C2B23] text-white text-[12px] w-5 rounded-full aspect-square">
                          <p>2</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/*Personal Message 7*/}
            <div className="hover:bg-[#F2F2F7] w-full px-10">
              <div className="flex flex-row justify-center items-center w-[420px] h-[88px] active:scale-[.920] transition-all">
                <div className="w-[52px]">
                  <img
                    src="/images/pochi.jpg"
                    className="w-full h-[53px] rounded-[10px] object-cover"
                  />
                </div>

                <div className="flex flex-1 flex-col justify-start w-full pl-4">
                  <div className="flex flex-row justify-between items-center">
                    <p className="text-[16px] font-semibold text-[#323232]">
                      Pochi
                    </p>
                    <p className="text-[13px] font-extralight text-[#323232] ">
                      9:30 PM
                    </p>
                  </div>

                  <div className="flex flex-1 justify-between items-center">
                    <div className="flex flex-1 justify-between items-center">
                      <p className="text-left text-[12px] pt-1 text-[#323232] w-[290px] h-[35px] line-clamp-2">
                        Grrrrr . . .
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/*Personal Message 8*/}
            <div className="hover:bg-[#F2F2F7] w-full px-10">
              <div className="flex flex-row justify-center items-center w-[420px] h-[88px] active:scale-[.920] transition-all">
                <div className="w-[52px]">
                  <img
                    src="/images/angel-devil.jpg"
                    className="w-full h-[53px] rounded-[10px] object-cover"
                  />
                </div>

                <div className="flex flex-1 flex-col justify-start w-full pl-4">
                  <div className="flex flex-row justify-between items-center">
                    <p className="text-[16px] font-semibold text-[#323232]">
                      Angel Devil
                    </p>
                    <p className="text-[13px] font-extralight text-[#323232] ">
                      9:30 PM
                    </p>
                  </div>

                  <div className="flex flex-1 justify-between items-center">
                    <div className="flex flex-1 justify-between items-center">
                      <p className="text-left text-[12px] pt-1 text-[#323232] w-[290px] h-[35px] line-clamp-2">
                        Don't touch me.
                      </p>

                      <div className="flex justify-end items-end">
                        <div className="flex justify-center items-center bg-[#9C2B23] text-white text-[12px] w-5 rounded-full aspect-square">
                          <p>2</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/*Personal Message 9*/}
            <div className="hover:bg-[#F2F2F7] w-full px-10">
              <div className="flex flex-row justify-center items-center w-[420px] h-[88px] hover:bg-[#F2F2F7]">
                <div className="w-[52px]">
                  <img
                    src="/images/kobeni.jpg"
                    className="w-full h-[53px] rounded-[10px] object-cover"
                  />
                </div>

                <div className="flex flex-1 flex-col justify-start w-full pl-4">
                  <div className="flex flex-row justify-between items-center">
                    <p className="text-[16px] font-semibold text-[#323232]">
                      Kobeni
                    </p>
                    <p className="text-[13px] font-extralight text-[#323232] ">
                      9:30 PM
                    </p>
                  </div>

                  <div className="flex flex-1 justify-between items-center">
                    <div className="flex flex-1 justify-between items-center">
                      <p className="text-left text-[12px] pt-1 text-[#323232] w-[290px] h-[35px] line-clamp-2">
                        She's so scaryyyyyyyyyy!
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/*Chat Screen - Container*/}
        <div className="flex flex-col justify-center items-center w-full h-full px-5 bg-white border-x-[1px] border-[#DEDCDC]">
          <div className="flex flex-row justify-start items-center w-full gap-4 border-b-[1px] border-[#DEDCDC] pb-[15px]">
            <div className="w-[48px] h-[48px]">
              <img
                src="/images/power.jpg"
                className="w-full h-full object-cover rounded-full"
              />
            </div>
            <div className="flex flex-col justify-start items-start">
              <p className="text-[20px] font-medium text-[#323232]">Power</p>
              <p className="text-[14px] font-normal text-[#707070]">
                Chainsaw Man
              </p>
            </div>
            <div className="flex flex-1 flex-row justify-end items-end">
              <button className="text-[24px] text-[#323232] hover:scale-95 transition-all">
                <TbDotsVertical />
              </button>
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
            <div className="flex flex-col justify-start items-start pt-2 pl-4">
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
              <button className="text-[17px] hover:scale-95 transition-all">
                <BsEmojiWink />
              </button>
              <button className="hover:scale-95 transition-all">
                <MdKeyboardVoice />
              </button>
              <button className="hover:scale-95 transition-all">
                <TiAttachment />
              </button>
              <div className="flex justify-center items-center border-l-2 pl-2">
                <button className="hover:scale-95 transition-all">
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

        {/*Chat Info - Container*/}
        <div className="flex flex-col items-center w-[500px] h-full bg-white pt-10 px-10">
          <div className="w-full">
            <div className="flex flex-col justify-center items-center">
              <div className="w-[134px] h-[134px] border-[6px] border-[#9C2B23] rounded-full">
                <img
                  src="/images/power.jpg"
                  className="w-full h-full object-cover rounded-full border-[5px] border-white"
                />
                <div className="text-[#535353] pt-5">
                  <p className="text-[20px] font-medium">Power</p>
                  <p className="text-[14px] font-normal">Chainsaw Man</p>
                </div>
              </div>
            </div>

            {/*Chat Info - Attachments*/}
            <div className="flex flex-col justify-center">
              <div className="flex flex-row justify-between items-center pt-28 text-[#323232]">
                <p className="text-[14px] font-normal">Attachments</p>
                <button className="text-[11px] font-normal underline active:scale-[.900] transition-all">
                  See all
                </button>
              </div>

              <div className="flex flex-col gap-2 mt-3">
                <div className="flex flex-row justify-between items-center bg-[#F8F7F7] w-[420px] h-[70px] px-5">
                  <div className="flex flex-row justify-center items-center gap-5">
                    <img src="/images/pdf-file-icon.png" />
                    <div className="flex flex-col justify-start items-start gap-2">
                      <p className="text-[12px] font-medium text-[#324054]">
                        File Title.pdf
                      </p>
                      <p className="text-[10px] font-regular text-[#71839B]">
                        313 KB . 22 Dec, 2022
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-row justify-end items-end gap-3">
                    <button className="active:scale-[.900] transition-all">
                      <FiDownload className="text-[#71839B] text-[15px]" />
                    </button>
                    <button className="active:scale-[.900] transition-all">
                      <MdDelete className="text-[#A64039] text-[15px]" />
                    </button>
                  </div>
                </div>

                <div className="flex flex-row justify-between items-center bg-[#F8F7F7] w-[420px] h-[70px] px-5">
                  <div className="flex flex-row justify-center items-center gap-5">
                    <img src="/images/pdf-file-icon.png" />
                    <div className="flex flex-col justify-start items-start gap-2">
                      <p className="text-[12px] font-medium text-[#324054]">
                        File Title.pdf
                      </p>
                      <p className="text-[10px] font-regular text-[#71839B]">
                        313 KB . 22 Dec, 2022
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-row justify-end items-end gap-3">
                    <button className="active:scale-[.900] transition-all">
                      <FiDownload className="text-[#71839B] text-[15px]" />
                    </button>
                    <button className="active:scale-[.900] transition-all">
                      <MdDelete className="text-[#A64039] text-[15px]" />
                    </button>
                  </div>
                </div>

                <div className="flex flex-row justify-between items-center bg-[#F8F7F7] w-[420px] h-[70px] px-5">
                  <div className="flex flex-row justify-center items-center gap-5">
                    <img src="/images/pdf-file-icon.png" />
                    <div className="flex flex-col justify-start items-start gap-2">
                      <p className="text-[12px] font-medium text-[#324054]">
                        File Title.pdf
                      </p>
                      <p className="text-[10px] font-regular text-[#71839B]">
                        313 KB . 22 Dec, 2022
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-row justify-end items-end gap-3">
                    <button className="active:scale-[.900] transition-all">
                      <FiDownload className="text-[#71839B] text-[15px]" />
                    </button>
                    <button className="active:scale-[.900] transition-all">
                      <MdDelete className="text-[#A64039] text-[15px]" />
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/*Chat Info - Media*/}
            <div className="w-full">
              <div className="flex flex-row justify-between items-center pt-7">
                <p className="text-[14px] text-[#323232]">Media</p>
                <button className="active:scale-[.920] transition-all">
                  <MdArrowForwardIos className="text-[12px] text-[#323232]" />
                </button>
              </div>

              <div className="flex flex-col justify-center items-center">
                <div className="flex flex-row justify-center items-center gap-1">
                  <button className="w-[101px] pt-2 active:scale-95 transition-all">
                    <img
                      src="/images/power-1.gif"
                      className="w-full h-[90px] object-cover rounded-[7px]"
                    />
                  </button>
                  <button className="w-[101px] pt-2 active:scale-95 transition-all">
                    <img
                      src="/images/power-2.gif"
                      className="w-full h-[90px] object-cover rounded-[7px]"
                    />
                  </button>
                  <button className="w-[101px] pt-2 active:scale-95 transition-all">
                    <img
                      src="/images/power-3.gif"
                      className="w-full h-[90px] object-cover rounded-[7px]"
                    />
                  </button>
                  <button className="w-[101px] pt-2 active:scale-95 transition-all">
                    <img
                      src="/images/power-4.gif"
                      className="w-full h-[90px] object-cover rounded-[7px]"
                    />
                  </button>
                </div>

                <div className="flex flex-row justify-center items-center gap-1 mt-[-4px]">
                  <button className="w-[101px] pt-2 active:scale-95 transition-all">
                    <img
                      src="/images/power-5.gif"
                      className="w-full h-[90px] object-cover rounded-[7px]"
                    />
                  </button>
                  <button className="w-[101px] pt-2 active:scale-95 transition-all">
                    <img
                      src="/images/power-6.gif"
                      className="w-full h-[90px] object-cover rounded-[7px]"
                    />
                  </button>
                  <button className="w-[101px] pt-2 active:scale-95 transition-all">
                    <img
                      src="/images/power-7.gif"
                      className="w-full h-[90px] object-cover rounded-[7px]"
                    />
                  </button>
                  <div className="w-[101px] pt-2 active:scale-95 transition-all">
                    <img
                      src="/images/power-8.gif"
                      className="w-full h-[90px] object-cover rounded-[7px]"
                    />
                  </div>
                </div>

                <div className="flex flex-row justify-center items-center gap-1 mt-[-4px]">
                  <button className="w-[418px] pt-2 active:scale-95 transition-all">
                    <img
                      src="/images/power.gif"
                      className="w-full h-[120px] object-cover rounded-[7px]"
                    />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
