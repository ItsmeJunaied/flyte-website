/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
  }
}

import { useEffect } from "react";
import { usePathname, useSearchParams } from "next/navigation";

const PageTracker = () => {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    const url = pathname + (searchParams.toString() ? `?${searchParams}` : "");
    window.gtag?.("config", "G-KZXPXP1F7J", {
      page_path: url,
    });
  }, [pathname, searchParams]);

  return null;
};

export default PageTracker;
