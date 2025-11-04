"use client";

import { Toaster } from "react-hot-toast";

function ToasterProvider() {
  return (
    <Toaster
      position="top-center"
      toastOptions={{
        style: {
          background: "#ececf1",
          color: "#1b1f3b",
        },
      }}
    />
  );
}

export default ToasterProvider;
