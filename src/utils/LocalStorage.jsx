const admin = [
  {
    id: 1,
    username: "admin",
    password: "admin123",
    name: "Muhammad Ali",
    email: "admin@company.com",
    // role: "admin",
  },
];
const employees = [
  {
    id: 101,
    username: "ahmed",
    password: "ahmed123",
    name: "Ahmed Khan",

    taskCounts: {
      active: 0,
      new: 1,
      completed: 1,
      failed: 0,
    },

    tasks: [
      {
        title: "Build Login Page",
        description: "Create a responsive login page with glassmorphism UI.",
        date: "2026-07-25",
        category: "Frontend",
        newTask: true,
        activeTask: false,
        completedTask: false,
        failedTask: false,
      },
      {
        title: "Fix Navbar",
        description: "Resolve responsive navbar issues.",
        date: "2026-07-22",
        category: "Frontend",
        newTask: false,
        activeTask: false,
        completedTask: true,
        failedTask: false,
      },
    ],
  },

  {
    id: 102,
    username: "fatima",
    password: "fatima123",
    name: "Fatima Noor",

    taskCounts: {
      active: 1,
      new: 0,
      completed: 1,
      failed: 0,
    },

    tasks: [
      {
        title: "Design Dashboard",
        description: "Create dashboard UI using Tailwind CSS.",
        date: "2026-07-26",
        category: "UI/UX",
        newTask: false,
        activeTask: true,
        completedTask: false,
        failedTask: false,
      },
      {
        title: "Profile Page",
        description: "Complete employee profile screen.",
        date: "2026-07-20",
        category: "Frontend",
        newTask: false,
        activeTask: false,
        completedTask: true,
        failedTask: false,
      },
    ],
  },

  {
    id: 103,
    username: "hassan",
    password: "hassan123",
    name: "Hassan Raza",

    taskCounts: {
      active: 1,
      new: 0,
      completed: 0,
      failed: 1,
    },

    tasks: [
      {
        title: "Connect API",
        description: "Integrate employee API with frontend.",
        date: "2026-07-24",
        category: "Backend",
        newTask: false,
        activeTask: true,
        completedTask: false,
        failedTask: false,
      },
      {
        title: "Authentication",
        description: "Implement login authentication.",
        date: "2026-07-18",
        category: "Backend",
        newTask: false,
        activeTask: false,
        completedTask: false,
        failedTask: true,
      },
    ],
  },

  {
    id: 104,
    username: "zain",
    password: "zain123",
    name: "Zain Ahmed",

    taskCounts: {
      active: 0,
      new: 1,
      completed: 1,
      failed: 0,
    },

    tasks: [
      {
        title: "Database Setup",
        description: "Create employee database schema.",
        date: "2026-07-27",
        category: "Database",
        newTask: true,
        activeTask: false,
        completedTask: false,
        failedTask: false,
      },
      {
        title: "Attendance Module",
        description: "Develop attendance functionality.",
        date: "2026-07-21",
        category: "Backend",
        newTask: false,
        activeTask: false,
        completedTask: true,
        failedTask: false,
      },
    ],
  },

  {
    id: 105,
    username: "ayesha",
    password: "ayesha123",
    name: "Ayesha Malik",

    taskCounts: {
      active: 1,
      new: 0,
      completed: 0,
      failed: 1,
    },

    tasks: [
      {
        title: "Testing",
        description: "Perform testing on employee dashboard.",
        date: "2026-07-23",
        category: "QA",
        newTask: false,
        activeTask: true,
        completedTask: false,
        failedTask: false,
      },
      {
        title: "Bug Report",
        description: "Document and report UI bugs.",
        date: "2026-07-19",
        category: "QA",
        newTask: false,
        activeTask: false,
        completedTask: false,
        failedTask: true,
      },
    ],
  },
];

export const setLocalStorage=()=>{
  if (!localStorage.getItem('employees')) {
    localStorage.setItem('employees',JSON.stringify(employees));
  }
  if (!localStorage.getItem('admin')) {
    localStorage.setItem('admin',JSON.stringify(admin));
  }
};
export const getLocalStorage=()=>{
  const employees=JSON.parse(localStorage.getItem('employees'));
  const admin=JSON.parse(localStorage.getItem('admin')) ;
  return {employees,admin};
};