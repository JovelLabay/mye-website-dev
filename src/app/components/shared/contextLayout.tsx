"use client";

import React from "react";
import { GlobalContext } from "@/lib/contexts/context";

function ContextLayout({ children }: { children: React.ReactNode }) {
  const [state, setState] = React.useState({
    activeTab: "",
  });
  return (
    <GlobalContext.Provider
      value={{
        productsServicesPage: {
          activeTab: state.activeTab,
          setActiveTab: (activeTab: string) => {
            setState({ ...state, activeTab });
          },
        },
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
}

export default ContextLayout;
