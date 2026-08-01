import React, { useContext, useEffect, useState } from "react";
import Login from "./components/Auth/Login";
import EmployeeDashboard from "./components/Dashboard/EmployeeDashboard";
import AdminDashboard from "./components/Dashboard/AdminDashboard";
import { getLocalStorage, setLocalStorage } from "./utils/LocalStorage";
import { Authcontext } from "./context/Authprovider";
const App = () => {
  // states
  const [user, setUser] = useState(null);
  const [loggedinUserdata, setloggedinUserdata] = useState(null);
  // logged in user logic
  const {userData,setuserData} = useContext(Authcontext);
  useEffect(() => {
    if (!userData) return;
    const loggedinUser = JSON.parse(localStorage.getItem("loggedinUser"));
    if (!loggedinUser) return;
    setUser(loggedinUser.role);
    if (loggedinUser.role === "employee") {
      const employee = userData.employees.find((e) => e.id === loggedinUser.id);
      setloggedinUserdata(employee);
    }
  }, [userData]);
  // functions
  // login all logic
  const handlelogin = (username, password) => {
    if (username == "admin" && password == "123") {
      setUser("admin");
      localStorage.setItem("loggedinUser", JSON.stringify({ role: "admin" }));
      return;
    }
    const employee = userData?.employees?.find(
      (e) => username == e.username && password == e.password,
    );
    if (employee) {
      setUser("employee");
      localStorage.setItem(
        "loggedinUser",
        JSON.stringify({ role: "employee", id: employee.id }),
      );
      setloggedinUserdata(employee);
    } else {
      alert("invalid credentials");
    }
  };
  // this rerender on page reload
  // useEffect(() => {
  //   setLocalStorage();
  // }, []);
  return (
    <div className="bg-gray-800 h-265 w-full">
      {!user ? <Login handlelogin={handlelogin} /> : ""}
      {user === "admin" && <AdminDashboard userData={userData} setuserData={setuserData} setUser={setUser} />}
      {user === "employee" && (
        <EmployeeDashboard
        userData={userData}
        loggedinUserdata={loggedinUserdata}
          setUser={setUser}
        />
      )}
    </div>
  );
};
export default App;