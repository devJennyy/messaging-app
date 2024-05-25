const Background = () => {
  return (
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
  );
};

export default Background;
