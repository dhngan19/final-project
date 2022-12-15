import React from "react";
import { Stack } from "@mui/material";

export function AuthLayout({ children }: LayoutProps) {
  return (
    <>
      <Stack minHeight="100vh">{children}</Stack>
    </>
  );
}
