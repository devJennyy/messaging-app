import "./App.css";
import ChatScreen from "./components/chatscreen/ChatScreen";
import DirectMessages from "./components/direct-messages/DirectMessages";
import Background from "./components/layout/Background";
import BrowserMockup from "./components/layout/BrowserMockup";
import Media from "./components/media/Media";

function App() {
  return (
    <>
      <div className="flex justify-center items-center min-w-[1240px] h-full">
        <Background />

        <div className="flex flex-col w-[1240px] h-[700px] border border-[#BABCBE] bg-white text-[#272727] absolute rounded-md">
          <BrowserMockup />

          <div className="flex flex-1 flex-row justify-between px-4">
            <DirectMessages />
            <ChatScreen />
            <Media />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
