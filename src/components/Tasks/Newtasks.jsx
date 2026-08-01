import React from "react";

const Newtasks = ({ data ,updateTaskNew}) => {
  // functions
  const updateAccepted=()=>{
    updateTaskNew(data.title,'accepted');
  };
  const updateRejected=()=>{
    updateTaskNew(data.title,'failed');
  };
  return (
    <div>
      <div className="m-3 h-70 flex-nowrap shrink-0 rounded-2xl overflow-hidden bg-orange-300 w-80">
        {/* tasks details card*/}
        {/* top section */}
        <div className="flex items-center justify-between p-5 h-15">
          <h1 className="bg-red-700 rounded-xl h-10 text-amber-200 text-2xl pl-2 pr-2">
            {data.category}
          </h1>
          <h3 className="text-2xl text-amber-100 underline">{data.date}</h3>
        </div>
        {/* task heading and description */}
        <div className="h-55 flex justify-between flex-col w-full p-3">
          <h1 className="text-white text-2xl font-bold">{data.title}</h1>
          <p className="mt-4 text-amber-100 font-bold ">{data.description}</p>
          <div className="flex items-center justify-between pl-1 pr-1 gap-5">
            <button
              className="bg-green-400 w-full rounded-2xl p-1 font-bold cursor-pointer active:bg-green-700"
              onClick={updateAccepted}
            >
              Accept It {" "}
            </button>
            <button
              onClick={updateRejected}
              className="bg-red-400 rounded-2xl p-1 cursor-pointer font-bold w-full active:bg-red-600"
            >
              Reject It
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Newtasks;
