import React, { createContext, useState, useContext } from "react";

const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [data, setData] = useState({});

  const setValues = (values) => {
    console.log("ADDING DATA");
    setData((prevData) => ({
      ...prevData,
      ...values,
    }));
  };

  const clearValues = () => {
    console.log("CLEARING DATA");
    setData(() => ({}));
  };

  return (
    <DataContext.Provider value={{ data, setValues, clearValues }}>
      {children}
    </DataContext.Provider>
  );
};

export const useData = () => useContext(DataContext);
