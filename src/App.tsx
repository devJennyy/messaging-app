import "./App.css";
import Background from "./components/layout/Background";
import BrowserContainer from "./components/layout/BrowserContainer";

function App() {
  return (
    <>
      <div className="flex justify-center items-center min-w-[1240px] h-full">
        <Background />
        <BrowserContainer />
      </div>
    </>
  );
}

export default App;
