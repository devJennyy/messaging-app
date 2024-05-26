interface Props {
  image: string;
  name: string;
  message: string;
  time: string;
  unreadCount: number;
}

const MessageBox = ({ image, name, message, time, unreadCount }: Props) => {
  return (
    <div className="flex items-center w-full h-16 hover:bg-[#E7E7E7]/30 rounded-md px-2 ">
      <div className="flex flex-row justify-between w-full">
        <div className="flex flex-row gap-3">
          <img src={image} className="object-cover w-10 h-10 rounded-full" />

          <div className="flex flex-col justify-between text-left tracking-wide">
            <p className="text-[14px]">{name}</p>
            <p className="small-text dark:text-white/90">{message}</p>
          </div>
        </div>

        <div className="flex flex-col justify-between items-end">
          <p className="small-text dark:text-white/50 tracking-wide">{time}</p>
          {unreadCount > 0 && 
            <div className="flex justify-center items-center w-[17px] h-[17px] rounded-full bg-black dark:bg-[#202020]">
              <p className="text-[10px] text-white">{unreadCount}</p>
            </div>
          }
        </div>
      </div>
    </div>
  );
};

export default MessageBox;
