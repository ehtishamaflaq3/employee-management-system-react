import React, { createContext, useEffect } from 'react'
import { useState } from 'react';
import { getLocalStorage } from '../utils/LocalStorage';

export const Authcontext=createContext();
export const Authprovider = ({children}) => {
    const [userData,setuserData]=useState({
      employees:[],
      admin:[]
    });
    // first time data lena
    useEffect(()=>{
        const {employees,admin}=getLocalStorage()
        setuserData({employees:employees || [],admin:admin || []})
    },[]);
    // jb bhi data change ho localstorage update ho
    useEffect(() => {
    if (userData.employees.length > 0) {
      localStorage.setItem(
        "employees",
        JSON.stringify(userData.employees)
      );
      localStorage.setItem(
        "admin",
        JSON.stringify(userData.admin)
      );
    }
  }, [userData]);
  return (
    <div>
        <Authcontext.Provider value={{userData,setuserData}}>
        {children}
        </Authcontext.Provider>
        </div>
  )
}