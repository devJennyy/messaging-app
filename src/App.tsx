import { FaAngleDown, FaRegEdit } from "react-icons/fa";
import "./App.css";
import { TbDotsVertical } from "react-icons/tb";
import { BsEmojiWink } from "react-icons/bs";
import { IoIosSend } from "react-icons/io";
import { MdArrowForwardIos, MdDelete, MdKeyboardVoice } from "react-icons/md";
import { TiAttachment } from "react-icons/ti";
import { FiDownload } from "react-icons/fi";

function App() {
  return (
    <>
      {/*Main Container*/}
      <div className="flex flex-1 flex-row justify-between items-center w-full h-full bg-red-500">

        {/*Message Group - Container*/}
        <div className="flex flex-col items-center w-[500px] h-full bg-white pt-10 px-10">
          <div className="flex flex-col w-full">
            <div className="flex flex-row justify-between items-center pb-10">
              <p className="font-medium text-[16px] text-[#323232]">
                Recent Messages
              </p>
              <FaRegEdit />
            </div>

            <div className="flex justify-between items-center px-3 bg-[#F5F5F5] w-[420px] h-[52px] rounded-[8px]">
              <button className="flex flex-row justify-center items-center bg-[#9C2B23] w-[193px] h-[33px] text-white text-[14px] rounded-[6px] hover:scale-95 transition-all">
                <p>All Chats</p>
              </button>
              <button className="flex flex-row justify-center items-center hover:bg-[#9C2B23] w-[193px] h-[33px] hover:text-white text-[14px] rounded-[6px] hover:scale-95 transition-all">
                <p>Groups</p>
              </button>
            </div>

            {/*Personal Message - Container*/}
            <div className="flex flex-col h-[780px] overflow-y-auto">

              {/*Personal Message 1*/}
              <div className="flex flex-row justify-center items-center w-[420px] h-[88px] mt-5">
                <div className="w-[52px]">
                  <img
                    src="/images/power-1.jpeg"
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

                      <div className="flex justify-end items-end">
                        <div className="flex justify-center items-center bg-[#9C2B23] text-white text-[12px] w-5 rounded-full aspect-square">
                          <p>2</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/*Personal Message 2*/}
              <div className="flex flex-row justify-center items-center w-[420px] h-[88px]">
                <div className="w-[52px]">
                  <img
                    src="/images/power-1.jpeg"
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

                      <div className="flex justify-end items-end">
                        <div className="flex justify-center items-center bg-[#9C2B23] text-white text-[12px] w-5 rounded-full aspect-square">
                          <p>2</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/*Personal Message 3*/}
              <div className="flex flex-row justify-center items-center w-[420px] h-[88px]">
                <div className="w-[52px]">
                  <img
                    src="/images/power-1.jpeg"
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

                      <div className="flex justify-end items-end">
                        <div className="flex justify-center items-center bg-[#9C2B23] text-white text-[12px] w-5 rounded-full aspect-square">
                          <p>2</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/*Personal Message 4*/}
              <div className="flex flex-row justify-center items-center w-[420px] h-[88px]">
                <div className="w-[52px]">
                  <img
                    src="/images/power-1.jpeg"
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

                      <div className="flex justify-end items-end">
                        <div className="flex justify-center items-center bg-[#9C2B23] text-white text-[12px] w-5 rounded-full aspect-square">
                          <p>2</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/*Personal Message 5*/}
              <div className="flex flex-row justify-center items-center w-[420px] h-[88px]">
                <div className="w-[52px]">
                  <img
                    src="/images/power-1.jpeg"
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

                      <div className="flex justify-end items-end">
                        <div className="flex justify-center items-center bg-[#9C2B23] text-white text-[12px] w-5 rounded-full aspect-square">
                          <p>2</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/*Personal Message 6*/}
              <div className="flex flex-row justify-center items-center w-[420px] h-[88px]">
                <div className="w-[52px]">
                  <img
                    src="/images/power-1.jpeg"
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

                      <div className="flex justify-end items-end">
                        <div className="flex justify-center items-center bg-[#9C2B23] text-white text-[12px] w-5 rounded-full aspect-square">
                          <p>2</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/*Personal Message 7*/}
              <div className="flex flex-row justify-center items-center w-[420px] h-[88px]">
                <div className="w-[52px]">
                  <img
                    src="/images/power-1.jpeg"
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

                      <div className="flex justify-end items-end">
                        <div className="flex justify-center items-center bg-[#9C2B23] text-white text-[12px] w-5 rounded-full aspect-square">
                          <p>2</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/*Personal Message 8*/}
              <div className="flex flex-row justify-center items-center w-[420px] h-[88px]">
                <div className="w-[52px]">
                  <img
                    src="/images/power-1.jpeg"
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

                      <div className="flex justify-end items-end">
                        <div className="flex justify-center items-center bg-[#9C2B23] text-white text-[12px] w-5 rounded-full aspect-square">
                          <p>2</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/*Personal Message 9*/}
              <div className="flex flex-row justify-center items-center w-[420px] h-[88px]">
                <div className="w-[52px]">
                  <img
                    src="/images/power-1.jpeg"
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
          </div>
        </div>

        {/*Chat Screen - Container*/}
        <div className="flex flex-col justify-center items-center w-[820px] p-5 bg-white">
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
        <div className="flex flex-col items-center w-[450px] h-full bg-white pt-10 px-10">
          <div className="w-full">
            <div className="flex flex-col justify-center items-center">
              <div className="w-[134px] h-[134px] border-[6px] border-[#9C2B23] rounded-full">
                <img
                  src="/images/power-1.jpeg"
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
                <p className="text-[11px] font-normal underline">See all</p>
              </div>

              <div className="flex flex-row justify-start items-center pt-2">
                <div className="flex flex-row justify-start items-center bg-[#F8F7F7] w-[430px] h-[70px] gap-4 pl-5">
                  <img src="/images/pdf-file-icon.png" />
                  <div className="flex flex-col justify-start items-start gap-2">
                    <p className="text-[12px] font-medium text-[#324054]">
                      File Title.pdf
                    </p>
                    <p className="text-[10px] font-regular text-[#71839B]">
                      313 KB . 22 Dec, 2022
                    </p>
                  </div>
                  <div className="flex flex-row justify-end absolute right-0 mr-16 items-end gap-3">
                    <FiDownload className="text-[#71839B] text-[15px]" />
                    <MdDelete className="text-[#A64039] text-[15px]" />
                  </div>
                </div>
              </div>

              <div className="flex flex-row justify-start items-center pt-2">
                <div className="flex flex-row justify-start items-center bg-[#F8F7F7] w-[430px] h-[70px] gap-4 pl-5">
                  <img src="/images/pdf-file-icon.png" />
                  <div className="flex flex-col justify-start items-start gap-2">
                    <p className="text-[12px] font-medium text-[#324054]">
                      File Title.pdf
                    </p>
                    <p className="text-[10px] font-regular text-[#71839B]">
                      313 KB . 22 Dec, 2022
                    </p>
                  </div>
                  <div className="flex flex-row justify-end absolute right-0 mr-16 items-end gap-3">
                    <FiDownload className="text-[#71839B] text-[15px]" />
                    <MdDelete className="text-[#A64039] text-[15px]" />
                  </div>
                </div>
              </div>

              <div className="flex flex-row justify-start items-center pt-2">
                <div className="flex flex-row justify-start items-center bg-[#F8F7F7] w-[430px] h-[70px] gap-4 pl-5">
                  <img src="/images/pdf-file-icon.png" />
                  <div className="flex flex-col justify-start items-start gap-2">
                    <p className="text-[12px] font-medium text-[#324054]">
                      File Title.pdf
                    </p>
                    <p className="text-[10px] font-regular text-[#71839B]">
                      313 KB . 22 Dec, 2022
                    </p>
                  </div>
                  <div className="flex flex-row justify-end absolute right-0 mr-16 items-end gap-3">
                    <FiDownload className="text-[#71839B] text-[15px]" />
                    <MdDelete className="text-[#A64039] text-[15px]" />
                  </div>
                </div>
              </div>
            </div>

            {/*Chat Info - Media*/}
            <div>
              <div className="flex flex-row justify-between items-center pt-7">
                <p className="text-[14px] text-[#323232]">Media</p>
                <MdArrowForwardIos className="text-[12px] text-[#323232]" />
              </div>

              <div className="flex flex-col justify-center items-center">
                <div className="flex flex-row justify-center items-center gap-1">
                  <div className="w-[90px] pt-2">
                    <img
                      src="/images/power-1.jpeg"
                      className="w-full h-[90px] object-cover rounded-[7px]"
                    />
                  </div>
                  <div className="w-[90px] pt-2">
                    <img
                      src="/images/power-2.jpeg"
                      className="w-full h-[90px] object-cover rounded-[7px]"
                    />
                  </div>
                  <div className="w-[90px] pt-2">
                    <img
                      src="/images/power-3.jpeg"
                      className="w-full h-[90px] object-cover rounded-[7px]"
                    />
                  </div>
                  <div className="w-[90px] pt-2">
                    <img
                      src="/images/power-4.jpeg"
                      className="w-full h-[90px] object-cover rounded-[7px]"
                    />
                  </div>
                </div>

                <div className="flex flex-row justify-center items-center gap-1 mt-[-4px]">
                  <div className="w-[90px] pt-2">
                    <img
                      src="/images/power-1.jpeg"
                      className="w-full h-[90px] object-cover rounded-[7px]"
                    />
                  </div>
                  <div className="w-[90px] pt-2">
                    <img
                      src="/images/power-2.jpeg"
                      className="w-full h-[90px] object-cover rounded-[7px]"
                    />
                  </div>
                  <div className="w-[90px] pt-2">
                    <img
                      src="/images/power-3.jpeg"
                      className="w-full h-[90px] object-cover rounded-[7px]"
                    />
                  </div>
                  <div className="w-[90px] pt-2">
                    <img
                      src="/images/power-4.jpeg"
                      className="w-full h-[90px] object-cover rounded-[7px]"
                    />
                  </div>
                </div>

                <div className="flex flex-row justify-center items-center gap-1 mt-[-4px]">
                  <div className="w-[374px] pt-2">
                    <img
                      src="/images/power-1.jpeg"
                      className="w-full h-[120px] object-cover rounded-[7px]"
                    />
                  </div>
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
