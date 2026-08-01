import React from "react";
import { Authcontext } from "../../context/Authprovider";
import Accepttasks from "../Tasks/Accepttasks";
import Completetasks from "../Tasks/Completetasks";
import Failedtasks from "../Tasks/Failedtasks";
import Newtasks from "../Tasks/Newtasks";
import { useContext } from "react";
const EmployeeDashboard = ({ setUser, loggedinUserdata }) => {
  const { userData, setuserData } = useContext(Authcontext);
  // function for updating New Tasks with functionality of accepting or rejecting task
  const updateTaskNew = (taskTitle, status) => {
    const updatedEmployees = userData.employees.map((emp) => {
      if (emp.id == loggedinUserdata.id) {
        const updatedTasks = emp.tasks.map((task) => {
          if (task.title === taskTitle) {
            return {
              ...task,
              newTask: false,
              completedTask: false,
              failedTask: status === "failed",
              activeTask: status === "accepted",
            };
          }
          return task;
        });
        return {
          ...emp,
          taskCounts: {
            ...emp.taskCounts,
            new: Math.max(0, emp.taskCounts.new - 1),
            failed:
              status === "failed"
                ? emp.taskCounts.failed + 1
                : emp.taskCounts.failed,
            active:
              status === "accepted"
                ? emp.taskCounts.active + 1
                : emp.taskCounts.active,
          },
          tasks: updatedTasks,
        };
      }
      return emp;
    });
    setuserData({
      ...userData,
      employees: updatedEmployees,
    });
  };
  // function for accepting task with functionality of completed or failed
  const updateTaskAccepting = (taskTitle, status) => {
    const updatedEmployeesAccepting = userData.employees.map((emp) => {
      if (emp.id === loggedinUserdata.id) {
        const updatedTaskss = emp.tasks.map((task) => {
          if (task.title === taskTitle) {
            return {
              ...task,
              newTask: false,
              completedTask: status == "completed",
              failedTask: status === "failed",
              activeTask: false,
            };
          }
          return task;
        });
        return {
          ...emp,
        taskCounts: {
          ...emp.taskCounts,
          active: Math.max(0, emp.taskCounts.active - 1),
          completed:
          status === "completed"
          ? emp.taskCounts.completed + 1
          : emp.taskCounts.completed,
          failed:
          status === "failed"
          ? emp.taskCounts.failed + 1
          : emp.taskCounts.failed,
        },
        tasks: updatedTaskss,
      };
    }
    return emp;
    });
    setuserData({
      ...userData,
      employees: updatedEmployeesAccepting,
    });
  };
  const loggedinUser = JSON.parse(localStorage.getItem("loggedinUser"));
  loggedinUserdata = userData?.employees?.find(
    (e) => e.id === loggedinUser?.id,
  );
  if (!loggedinUserdata) {
    return (
      <div className="bg-[#333] min-h-screen flex items-center justify-center text-white text-3xl">
        Loading...
      </div>
    );
  }
  return (
    <div className="bg-[#333] h-full w-full">
      {/* header section */}
      <div className="h-35 flex justify-between p-10 items-center w-full ">
        <h1 className="text-white text-4xl font-mono">
          Hello <span className="text-6xl">{loggedinUserdata.name}</span>
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
      {/* tasks section */}
      <div className="mt-2 flex p-5 items-center justify-between w-full h-60">
        <div className="border-2 bg-orange-300 h-35 w-75 flex p-5 justify-center flex-col rounded-2xl">
          <h1 className="text-4xl font-bold">
            {loggedinUserdata.taskCounts.new}
          </h1>
          <h2 className="text-2xl font-bold">NewTask</h2>
        </div>
        <div className="border-2 bg-red-400 h-35 w-75 flex p-5 justify-center flex-col rounded-2xl">
          <h1 className="text-4xl font-bold">
            {loggedinUserdata.taskCounts.active}
          </h1>
          <h2 className="text-2xl font-bold">AcepptedTask</h2>
        </div>
        <div className="border-2 bg-blue-500 h-35 w-75 flex p-5 justify-center flex-col rounded-2xl">
          <h1 className="text-4xl font-bold">
            {loggedinUserdata.taskCounts.completed}
          </h1>
          <h2 className="text-2xl font-bold">CompletedTask</h2>
        </div>
        <div className="border-2 bg-violet-600 h-35 w-75 flex p-5 justify-center flex-col rounded-2xl">
          <h1 className="text-4xl font-bold">
            {loggedinUserdata.taskCounts.failed}
          </h1>
          <h2 className="text-2xl font-bold">FailedTask</h2>
        </div>
      </div>
      {/* taskslist */}
      <div
        id="taskslist"
        className="mt-5 h-80 w-full flex items-center overflow-auto justify-start flex-nowrap shrink-0 "
      >
        {loggedinUserdata.tasks.map((e, idx) => {
          if (e.activeTask) {
            return (
              <Accepttasks
                updateTaskAccepting={updateTaskAccepting}
                data={e}
                key={idx}
              />
            );
          }
          if (e.newTask) {
            return (
              <Newtasks
                data={e}
                employee={loggedinUserdata}
                updateTaskNew={updateTaskNew}
                key={idx}
              />
            );
          }
          if (e.completedTask) {
            return <Completetasks loggedinUserdata={loggedinUserdata} data={e} key={idx} />;
          }
          if (e.failedTask) {
            return <Failedtasks loggedinUserdata={loggedinUserdata} data={e} key={idx} />;
          }
        })}
      </div>
    </div>
  );
};
export default EmployeeDashboard;
