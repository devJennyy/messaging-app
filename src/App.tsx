import { FaAngleDown } from "react-icons/fa";
import "./App.css";
import { BiSolidEditAlt } from "react-icons/bi";

function App() {
  return (
    <>
      {/*Main Container*/}
      <div className="flex flex-row justify-between items-center w-full p-10">
        {/*Message Group*/}
        <div className="flex flex-col justify-start items-start w-[382px] gap-10">
          <div className="flex flex-row justify-start items-center w-full">
            <p className="text-[16px] font-medium pr-4">Recent Messages</p>
            <div className="flex flex-row justify-between items-center w-1/2">
              <FaAngleDown className="" />
              <BiSolidEditAlt className="" />
            </div>
          </div>

          <div className="flex flex-row justify-center items-center bg-[#F5F5F5] w-[330px] h-[42px] rounded-[8px]">
            <p>All Chat</p>
            <p>Groups</p>
          </div>
          
        </div>

        {/*Chat Screen*/}
        <div>
          <p>Jenny Pieloor</p>
        </div>

        {/*Info*/}
        <div>
          <p>Jenny Pieloor</p>
        </div>
      </div>
    </>
  );
}

export default App;
