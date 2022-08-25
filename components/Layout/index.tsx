import React from "react";
import Header from "./Header";

const Layout = ({ children }:any) => {
  return (
    <div className="min-h-screen relative flex flex-col">
      <Header />
      <div className="bodyclass bg-green-400">
      {children}
      </div>
      
    </div>
  );
};

export default Layout;