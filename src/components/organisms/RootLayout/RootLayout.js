// src/components/organisms/RootLayout/RootLayout.js
import React from "react";
import Footer from "../Footer/Footer";
import { Outlet } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import classes from "./RootLayout.module.css";
import { NavBar } from "../NavBar/NavBar";

const queryClient = new QueryClient();

const RootLayout = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <div className={classes.rootLayout}>
        <NavBar />
        <main className={classes.mainContent}>
          <Outlet />
        </main>
        <Footer />
      </div>
    </QueryClientProvider>
  );
};

export default RootLayout;
