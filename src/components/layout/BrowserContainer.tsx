import { TbDotsVertical, TbPlus } from "react-icons/tb";
import { BsEmojiSmile, BsMoonStars } from "react-icons/bs";
import {
  IoLogoGithub,
  IoMdPhotos,
  IoMdRefresh,
} from "react-icons/io";
import {
  MdKeyboardArrowDown,
} from "react-icons/md";
import { TiMicrophone } from "react-icons/ti";
import { FiPlus } from "react-icons/fi";
import { IoClose, IoSunny } from "react-icons/io5";
import { FaCamera, FaHeart, FaRegStar } from "react-icons/fa";
import { HiOutlineArrowSmLeft, HiOutlineArrowSmRight } from "react-icons/hi";
import { LuSearch } from "react-icons/lu";
import Files from "../media/Files";
import Media from "../media/Media";
import MessagePerson from "../direct-messages/MessagePerson";
import MessageText from "../chatscreen/MessageText";

const BrowserContainer = () => {
  return (
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
            <div className="flex justify-between items-center w-6 h-6 rounded-full bg-white">
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

          {/* Message Person */}
          <div className="flex flex-col p-4 gap-1">
            <MessagePerson
              image="/images/power.jpg"
              name="Power"
              message="Sent you a voice message"
              time="9:30 PM"
              unreadCount={0}
            />

            <MessagePerson
              image="/images/denji.jpg"
              name="Denji"
              message="Nice. See you soon!"
              time="1:30 PM"
              unreadCount={2}
            />

            <MessagePerson
              image="/images/makima.jpg"
              name="Makima"
              message="I'm coming over."
              time="12:00 PM"
              unreadCount={0}
            />

            <MessagePerson
              image="/images/aki.jpg"
              name="Aki"
              message="Okay."
              time="6:00 AM"
              unreadCount={1}
            />

            <MessagePerson
              image="/images/himeno.jpg"
              name="Himeno"
              message="Let's get drunk!"
              time="10:30 PM"
              unreadCount={3}
            />

            <MessagePerson
              image="/images/pochi.jpg"
              name="Pochi"
              message="Grrrr"
              time="6:00 PM"
              unreadCount={0}
            />
            <MessagePerson
              image="/images/angel-devil.jpg"
              name="Angel Devil"
              message="Dont touch me."
              time="1:30 AM"
              unreadCount={0}
            />
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
              <MessageText
                message="Hey there!"
                user="receiver"
                hasAvatar={false}
              />
              <MessageText
                message="How are you?"
                user="receiver"
                hasAvatar={true}
              />
              <MessageText message="Hello!" user="sender" hasAvatar={false} />
              <MessageText
                message="I am fine and how are you?"
                user="sender"
                hasAvatar={true}
              />
              <MessageText
                message="I am doing well, Can we meet tomorrow?"
                user="receiver"
                hasAvatar={true}
              />
              <MessageText message="Yes Sure!" user="sender" hasAvatar={true} />
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
            <div className="flex justify-center items-center w-28 h-28 bg-[#030812] rounded-full ">
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

              <div className="flex flex-col gap-1">
                <Files
                  fileTitle="The Chainsaw Man"
                  fileSize="313 KB"
                  dateReceive="22 Dec, 2022"
                />
                <Files
                  fileTitle="The Chainsaw Man"
                  fileSize="313 KB"
                  dateReceive="22 Dec, 2022"
                />
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <div className="flex flex-row justify-between">
                <p className="text-[12px] medium-text">Media</p>
                <MdKeyboardArrowDown className="text-[#545454]" />
              </div>

              <div className="flex flex-col gap-1">
                <div className="flex flex-row gap-1">
                  <Media mediaImage="images/power-1.gif" />
                  <Media mediaImage="images/power-2.gif" />
                  <Media mediaImage="images/power-3.gif" />
                  <Media mediaImage="images/power-4.gif" />
                </div>

                <div className="flex flex-row gap-1">
                  <Media mediaImage="images/power-5.gif" />
                  <Media mediaImage="images/power-6.gif" />
                  <Media mediaImage="images/power-7.gif" />
                  <Media mediaImage="images/power-8.gif" />
                </div>

                <Media mediaImage="images/chainsawman.jpeg" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BrowserContainer;
