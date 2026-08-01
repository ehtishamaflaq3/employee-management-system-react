import React, { useContext } from "react";
import { Authcontext } from "../../context/Authprovider";
import { useState,useEffect } from "react";

const AdminDashboard = ({ setUser }) => {
  const { userData, setuserData } = useContext(Authcontext);
  // function for handling form
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [assignto, setAssignto] = useState("");
  const [category, setCategory] = useState("");
  const [desc, setDesc] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    const newTask = {
      title,
      date,
      assignto,
      category,
      desc,
      activeTask: false,
      newTask: true,
      completedTask: false,
      failedTask: false,
    };
    const updatedEmployee= userData.employees.map((emp)=>{
      if (emp.name=== assignto) {
        //  console.log("Before:", JSON.stringify(emp.taskCounts));
        const updatedEmp = {
      ...emp,
      taskCounts: {
        ...emp.taskCounts,
        new: emp.taskCounts.new + 1,
      },
      tasks: [...emp.tasks, newTask],
    };
      console.log("After:", JSON.stringify(updatedEmp.taskCounts));
    return updatedEmp;
      }
      return emp;
    });
    setuserData({
      ...userData,
      employees:updatedEmployee,
    });
    setTitle("");
    setDate("");
    setAssignto("");
    setCategory("");
    setDesc("");
  };
  return (
    <div className="bg-[#333] h-full w-full">
      {/* header section */}
      <div className="h-35 flex justify-between p-10 items-center w-full ">
        <h1 className="text-white text-4xl font-mono">
          Hello <span className="text-6xl">Ehtisham</span>
        </h1>
        <button
          className="bg-red-500 h-15 rounded-3xl w-40 text-2xl text-white cursor-pointer active:bg-amber-300 "
          onClick={() => {
            localStorage.removeItem("loggedinUser");
            setUser(null);
          }}
        >
          Logout
        </button>
      </div>
      {/* asigning task section */}
      <div className="border-2 bg-gray-700 h-80 w-full">
        <form
          onSubmit={(e) => {
            handleSubmit(e);
          }}
          className="flex gap-5 items-center justify-between m-3"
        >
          {/* left */}
          <div className="flex flex-col justify-between h-73 p-1 w-[60%]">
            <label className="text-2xl text-white" htmlFor="">
              Task Title
            </label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="border-2 text-2xl border-black text-violet-500 w-120"
              placeholder="Enter Title"
              name="tasktitle"
            />
            <label className="text-2xl text-white" htmlFor="">
              Date
            </label>
            <input
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              className="border-2 text-2xl border-black text-violet-500 w-120"
              name="date"
            />
            <label className="text-2xl text-white" htmlFor="">
              Assign to
            </label>
            <input
              type="text"
              value={assignto}
              onChange={(e) => setAssignto(e.target.value)}
              name="assign to"
              className="border-2 border-black text-violet-500 w-120 text-2xl"
              placeholder="Assigned to."
            />
            <label className="text-2xl text-white" htmlFor="">
              Category
            </label>
            <input
              type="text"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              name="category"
              className="border-2 text-2xl border-black text-violet-500 w-120"
              placeholder="Enter Category.."
            />
          </div>
          {/* right */}
          <div className="p-4 w-[40%] h-73">
            <div className="overflow-hidden">
              <label className="text-amber-50 text-xl" htmlFor="desc">
                Description
              </label>
              <textarea
                className="text-2xl text-violet-600 border-amber-50 w-full pl-2 border-2"
                name="decs"
                value={desc}
                onChange={(e) => setDesc(e.target.value)}
                id="desc"
                placeholder="Instructions about task..."
                cols="55"
                rows="5"
              ></textarea>
              <button className="bg-amber-200 text-3xl h-15  w-full rounded-2xl text-violet-600 cursor-pointer active:bg-green-600">
                Create Task
              </button>
            </div>
          </div>
        </form>
      </div>
      {/* all users display */}
      <div
        id="tasksdisplay"
        className="flex flex-col items-center justify-start gap-4 mt-4 h-60 w-full p-3"
      >
        <div className="bg-fuchsia-400 sticky top-0 flex items-center justify-between h-30 rounded-2xl w-full p-4">
          <h1 className="text-2xl font-bold text-amber-50 bg-black p-2">
            Employee Name
          </h1>
          <h2 className="text-2xl text-blue-300 bg-blue-600 p-2 font-bold">
            NewTasks
          </h2>
          <h2 className="text-2xl text-amber-200 bg-amber-700 p-2 font-bold">
            ActiveTasks
          </h2>
          <h2 className="text-2xl text-green-200 bg-emerald-400 p-2 font-bold">
            CompletedTasks
          </h2>
          <h2 className="text-2xl p-2 bg-red-600 text-red-200 font-bold">
            FailedTasks
          </h2>
        </div>
        {userData.employees.map(function (e) {
          return (
            <div className="border-2 border-emerald-400 flex items-center justify-between h-30 rounded-2xl w-full p-4">
              <h1 className="text-2xl text-white">{e.name}</h1>
              <h2 className="text-2xl text-blue-300 ">{e.taskCounts.new}</h2>
              <h2 className="text-2xl text-amber-200">{e.taskCounts.active}</h2>
              <h2 className="text-2xl text-green-200 ">
                {e.taskCounts.completed}
              </h2>
              <h2 className="text-2xl text-red-200 ">{e.taskCounts.failed}</h2>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AdminDashboard;
