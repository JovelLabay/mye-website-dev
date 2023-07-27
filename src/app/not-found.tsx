import React from "react";

// META DATA
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "MYE Cloud | Not Found",
  description: "MYE Cloud is a cloud built by Filipinos, for Filipinos.",
};

function NotFound() {
  return (
    <div className="h-screen flex justify-center items-center">
      <h1>Not Found</h1>
    </div>
  );
}

export default NotFound;
