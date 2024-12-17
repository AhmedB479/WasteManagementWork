import React, { createContext, useState, useContext } from "react";

const ComplaintContext = createContext();

export const ComplaintProvider = ({ children }) => {
  const [complaints, setComplaints] = useState([
    {
      id: "1",
      customer: "John Doe",
      nature: "Missed pickup",
      status: "Unaddressed",
      priority: "Normal",
      date: "2023-06-01",
    },
    {
      id: "2",
      customer: "Jane Smith",
      nature: "Rude staff",
      status: "Ongoing",
      priority: "High",
      date: "2023-05-30",
    },
    {
      id: "3",
      customer: "Bob Johnson",
      nature: "Billing issue",
      status: "Complete",
      priority: "Low",
      date: "2023-05-28",
    },
  ]);

  const addComplaint = (newComplaint) => {
    setComplaints((prevComplaints) => [
      {
        id: (prevComplaints.length + 1).toString(),
        ...newComplaint,
        status: "Unaddressed",
        priority: "Normal",
        date: new Date().toISOString().split("T")[0],
      },
      ...prevComplaints,
    ]);
  };

  const updateComplaint = (id, updates) => {
    setComplaints((prevComplaints) =>
      prevComplaints.map((complaint) =>
        complaint.id === id ? { ...complaint, ...updates } : complaint
      )
    );
  };

  return (
    <ComplaintContext.Provider
      value={{ complaints, addComplaint, updateComplaint }}
    >
      {children}
    </ComplaintContext.Provider>
  );
};

export const useComplaints = () => {
  const context = useContext(ComplaintContext);
  if (context === undefined) {
    throw new Error("useComplaints must be used within a ComplaintProvider");
  }
  return context;
};
