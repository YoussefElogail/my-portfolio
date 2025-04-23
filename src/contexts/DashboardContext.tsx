import React, { createContext, useContext, useState } from "react";
type DashboardContextType = {
  isLoading: boolean;
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
};

const DashboardContext = createContext<DashboardContextType | undefined>(
  undefined
);
export const useDashBoard = () => {
  const context = useContext(DashboardContext);
  if (!context) {
    throw new Error(
      "useDashBoard must be used within a DashboardContextProvider"
    );
  }
  return context;
};

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
