const Shimmer = () => {
  return (
    <div className="flex contain flex-wrap justify-around gap-3 mt-7 px-32">
      {Array(8)
        .fill("")
        .map((_, index) => (
          <div
            key={index}
            className="w-[200px] card h-[270px] bg-gray-300 flex justify-start flex-col rounded-xl cursor-pointer p-2 pb-20 mx-[-8px] shadow-lg hover:scale-95 ease-in-out duration-100"
          >
            <div className="w-[180px] h-[132px] bg-gray-400 rounded-xl mt-[2px] mx-[2px] animate-pulse"></div>
            <div className="flex flex-col mx-1 py-2 gap-1 rounded-md pt-4 mt-3 justify-start animate-pulse items-start bg-gray-400"></div>
            <div className="flex flex-col mr-20 ml-1 py-1 gap-1 rounded-md pt-4 mt-3 justify-start animate-pulse items-start bg-gray-400"></div>
            <div className="flex flex-col mx-1 py-2 gap-1 rounded-md pt-4 mt-3 mb-[-50px] justify-start items-start animate-pulse bg-gray-400"></div>
          </div>
        ))}
    </div>
  );
};

export const ShimmerMenu = () => {
  return (
    <div className="flex flex-col justify-center items-center gap-5 mt-7 px-56">
      {Array(3)
        .fill("")
        .map((_, index) => (
          <div
            key={index}
            className="flex bg-gray-300 mt-6 mb-6 w-[830px] animate-pulse items-center justify-between h-[150px] rounded-lg px-8"
          >
            <div className="flex flex-col gap-1">
              <div className="w-80 h-6 mb-4 rounded-lg  animate-pulse bg-gray-400"></div>
              <div className="w-40 h-6 animate-pulse mb-4 rounded-lg bg-gray-400"></div>
              <div className="w-80 h-6 animate-pulse bg-gray-400 rounded-lg"></div>
            </div>
            <div className="w-[160px] animate-pulse rounded-lg h-[110px] bg-gray-400"></div>
          </div>
        ))}
    </div>
  );
};

export default Shimmer;
