import React, { createContext, useContext, useState } from "react";

const DashboardContext = createContext({});

export const useDashBoard = () => useContext(DashboardContext);

export const DashboardContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [isLoading, setIsLoading] = useState(false);

  return (
    <DashboardContext.Provider value={{ isLoading, setIsLoading }}>
      {children}
    </DashboardContext.Provider>
  );
};

export default DashboardContext;
