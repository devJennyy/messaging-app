import { LuSearch } from "react-icons/lu";
import MessagePerson from "./MessagePerson";

const DirectMessages = () => {
  return (
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
  );
};

export default DirectMessages;
