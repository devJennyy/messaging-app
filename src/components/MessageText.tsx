interface Props {
  message: string;
  user: "receiver" | "sender";
  hasAvatar: boolean;
}

const MessageText = ({ message, user, hasAvatar }: Props) => {
  return (
    <div className={`flex flex-col px-4 w-full ${user == "receiver" ? "items-start" : "items-end"}`}>
      <div
        className={`flex justify-center items-center ${
          user == "receiver" ? "bg-[#E7E7E7]/60 ml-2" : "bg-black mr-2"
        } w-fit h-10 px-5 rounded-lg`}
      >
        <p
          className={`${
            user == "receiver" ? "sender-message" : "receiver-message"
          }`}
        >
          {message}
        </p>
      </div>
      {hasAvatar && (
        <div
          className={`w-3 h-3 rounded-full ${
            user == "receiver" ? "bg-[#E7E7E7]/60" : "bg-black"
          }`}
        ></div>
      )}
    </div>
  );
};

export default MessageText;
