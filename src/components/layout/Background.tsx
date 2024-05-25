const Background = () => {
  return (
    <div className="flex flex-col w-full h-full overflow-hidden relative">
      <div className="flex flex-row justify-between gap-20 absolute">
        <img
          src="/images/vector-one.svg"
          className="bg-cover overflow-hidden dark:opacity-10"
        />
        <img
          src="/images/vector-four.svg"
          className="bg-cover overflow-hidden dark:opacity-10"
        />
        <img
          src="/images/vector-five.svg"
          className="bg-cover overflow-hidden dark:opacity-10"
        />
      </div>

      <div className="flex flex-row mt-96 gap-10 absolute">
        <img
          src="/images/vector-two.svg"
          className="bg-cover overflow-hidden dark:opacity-10"
        />
        <img
          src="/images/vector-three.svg"
          className="bg-cover overflow-hidden dark:opacity-10"
        />
      </div>
    </div>
  );
};

export default Background;
