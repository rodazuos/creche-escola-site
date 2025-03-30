"use client";

import { useMediaQuery } from "react-responsive";

const responsiveBreakpoint = process.env.NEXT_PUBLIC_RESPONSIVEBREAKPOINT;

export const useDevice = () => {
  const isMobile = useMediaQuery({
    query: `(max-width: ${responsiveBreakpoint}px)`,
  });
  const isDesktop = useMediaQuery({
    query: `(min-width: ${responsiveBreakpoint}px)`,
  });

  return { isMobile, isDesktop };
};
