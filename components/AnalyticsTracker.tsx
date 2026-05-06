"use client";

import { useEffect } from "react";
import { usePathname, useSearchParams } from "next/navigation";

declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
  }
}

export default function AnalyticsTracker() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    if (typeof window === "undefined" || !window.gtag) return;

    const url =
      pathname + (searchParams.toString() ? `?${searchParams}` : "");

    window.gtag("config", "G-WHHCGHDLEK", {
      page_path: url,
    });
  }, [pathname, searchParams]);

  return null;
}