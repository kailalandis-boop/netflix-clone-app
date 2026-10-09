"use client";

import { AuthProvider } from "./hooks/useAuth";
import * as Jotai from "jotai";

export default function Providers({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Jotai.Provider>
      <AuthProvider>{children}</AuthProvider>
    </Jotai.Provider>
  );
}