const Shimmer = () => {
  return (
    <div className="flex contain flex-wrap justify-around gap-8 mt-24 px-11">
      {Array(15)
        .fill("")
        .map((_, index) => (
          <div
            key={index}
            className="w-[250px] card h-[290px] bg-gray-300 flex  justify-start flex-col rounded-xl cursor-pointer mb-8 p-2 pb-20 mx-[-8px] shadow-lg hover:scale-95 ease-in-out duration-100"
          >
            <div className="w-[230px] h-[180px] bg-gray-400 rounded-xl mt-[2px] mx-[2px] animate-pulse"></div>
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
    <div className="flex flex-col justify-center items-center px-6 md:gap-5 md:mt-7 md:px-56">
      {Array(9)
        .fill("")
        .map((_, index) => (
          <div
            key={index}
            className="flex bg-gray-300 w-full mt-4 md:mt-6 px-4  md:mb-6 md:w-[830px] animate-pulse items-center justify-between h-[150px] rounded-lg md:px-8"
          >
            <div className="flex flex-col gap-1">
              <div className="w-[140px] h-4 md:w-80 md:h-6 mb-4 rounded-lg  animate-pulse bg-gray-400"></div>
              <div className="w-[100px] h-4 md:w-40 md:h-6 animate-pulse mb-4 rounded-lg bg-gray-400"></div>
              <div className="w-[140px] h-4 md:w-80 md:h-6 animate-pulse bg-gray-400 rounded-lg"></div>
            </div>
            <div className="w-[100px] h-[100px] md:w-[160px] animate-pulse rounded-lg md:h-[110px] bg-gray-400"></div>
          </div>
        ))}
    </div>
  );
};

export default Shimmer;
