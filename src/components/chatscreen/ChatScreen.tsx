import { BsEmojiSmile } from "react-icons/bs";
import { FaCamera, FaHeart } from "react-icons/fa";
import { FiPlus } from "react-icons/fi";
import { IoMdPhotos } from "react-icons/io";
import { TbDotsVertical } from "react-icons/tb";
import { TiMicrophone } from "react-icons/ti";
import MessageText from "./MessageText";
import { IChatMessage } from "../../interface/IChatMessage";

const ChatScreen = () => {
  const chatMessages: IChatMessage[] = [
    {
      message: "Hey there!",
      user: "receiver",
      hasAvatar: false,
    },
    {
      message: "How are you?",
      user: "receiver",
      hasAvatar: true,
    },
    {
      message: "Hello!",
      user: "sender",
      hasAvatar: false,
    },
    {
      message: "Im fine, how about you?",
      user: "sender",
      hasAvatar: true,
    },
    {
      message: "Good! Can we meet tomorrow?",
      user: "receiver",
      hasAvatar: true,
    },
    {
      message: "Yes Sure!",
      user: "sender",
      hasAvatar: true,
    },
  ];
  return (
    <div className="flex flex-1 flex-col w-full h-full border-x border-[#E6E6E6]/66 dark:border-[#202020] dark:text-white">
      <div className="flex flex-col justify-between h-full">
        <div className="flex flex-row justify-between items-center w-full h-16 gap-4 border-b border-[#E6E6E6]/66 dark:border-[#202020] px-4">
          <div className="flex flex-row gap-4">
            <img
              src="/images/power.jpg"
              className="w-10 h-10 object-cover rounded-full"
            />
            <div className="flex flex-col justify-start items-start">
              <p className="font-medium">Power</p>
              <p className="small-text dark:text-white/90">Last seen 8 minutes ago</p>
            </div>
          </div>
          <button>
            <TbDotsVertical size={18} />
          </button>
        </div>

        {/* Chat Field */}
        <div className="flex flex-1 flex-col justify-end py-4 gap-2">
          {chatMessages?.map((message) => {
            return (
              <MessageText
                message={message.message}
                user={message.user}
                hasAvatar={message.hasAvatar}
              />
            );
          })}
        </div>

        <div className="flex flex-row justify-between items-center w-full h-16 gap-4 border-t border-[#E6E6E6]/66 dark:border-[#202020] px-4">
          <div className="flex flex-row gap-3">
            <button>
              <FiPlus size={18}/>
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
              className="w-full outline-none border small-text py-2 rounded-md pl-3 pr-9 dark:bg-[#2B2B2B] dark:border-none dark:text-white"
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
  );
};

export default ChatScreen;
