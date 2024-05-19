"use client";
import { BikeProvider } from "@/contexts/bikeContext";
import * as React from "react";

interface ContextProviderProps {
  children: React.ReactNode;
}

export default function ContextProvider({ children }: ContextProviderProps) {
  return <BikeProvider>{children}</BikeProvider>;
}
