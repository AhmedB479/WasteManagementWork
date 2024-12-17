import React, { createContext, useState, useContext } from "react";

const ComplaintContext = createContext();

export const ComplaintProvider = ({ children }) => {
  const [complaints, setComplaints] = useState([]);

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

  return (
    <ComplaintContext.Provider value={{ complaints, addComplaint }}>
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
