"use client";

import { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import Script from "next/script";

const VercelAnalytics = dynamic(
  () => import("@vercel/analytics/next").then((mod) => mod.Analytics),
  { ssr: false }
);

declare global {
  interface Window {
    dataLayer: Array<Record<string, unknown>>;
    gtag?: (...args: unknown[]) => void;
    gtag_report_conversion?: (url?: string) => boolean | void;
  }
}

type ConsentState = "unknown" | "accepted" | "declined";
const STORAGE_KEY = "cookie-consent";
const CONVERSION_CONFIG = {
  sendTo: "AW-17616427813/IJlTCLLn1M4bEKW2ldBB",
  value: 25.0,
  currency: "RON",
};

const fireCallConversion = (url?: string) => {
  if (typeof window === "undefined") return false;
  const callback = () => {
    if (typeof url !== "undefined") {
      window.location.href = url;
    }
  };
  if (typeof window.gtag === "function") {
    window.gtag("event", "conversion", {
      send_to: CONVERSION_CONFIG.sendTo,
      value: CONVERSION_CONFIG.value,
      currency: CONVERSION_CONFIG.currency,
      event_callback: callback,
    });
  } else {
    callback();
  }
  return false;
};

export function ConsentManager() {
  const [consent, setConsent] = useState<ConsentState>("unknown");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const stored = typeof window !== "undefined" ? localStorage.getItem(STORAGE_KEY) : null;
    if (stored === "accepted" || stored === "declined") {
      setConsent(stored);
    }
    setMounted(true);
  }, []);

  const applyConsent = (value: ConsentState) => {
    setConsent(value);
    if (typeof window !== "undefined") {
      localStorage.setItem(STORAGE_KEY, value);
      window.dataLayer = window.dataLayer || [];
      window.dataLayer.push({
        event: "consent_update",
        consent: value,
      });
      if (value === "accepted") {
        window.gtag_report_conversion = fireCallConversion;
      }
    }
  };

  const resetConsent = () => {
    if (typeof window !== "undefined") {
      localStorage.removeItem(STORAGE_KEY);
    }
    setConsent("unknown");
  };

  // Avoid flicker on first render (hydration)
  if (!mounted) return null;

  return (
    <>
      {/* Load tracking only after consent is accepted */}
      {consent === "accepted" && (
        <>
          <Script
            src="https://www.googletagmanager.com/gtag/js?id=AW-17616427813"
            strategy="afterInteractive"
          />
          <Script id="google-ads" strategy="afterInteractive">
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'AW-17616427813');
            `}
          </Script>
          <VercelAnalytics />
        </>
      )}

      {consent === "unknown" && (
        <div className="fixed inset-x-0 bottom-0 z-50 px-4 pb-4">
          <div className="mx-auto max-w-3xl rounded-2xl border border-border bg-white shadow-3d p-4 md:p-5">
            <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
              <div className="space-y-1">
                <p className="text-sm font-semibold text-gray-900">Folosim cookie-uri</p>
                <p className="text-sm text-gray-600">
                  Colectăm date pentru analiză și îmbunătățirea experienței. Acceptă sau refuză
                  colectarea datelor. Poți schimba oricând decizia.
                </p>
              </div>
              <div className="flex gap-2">
                <button
                  type="button"
                  className="rounded-full border border-gray-300 px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
                  onClick={() => applyConsent("declined")}
                >
                  Refuz
                </button>
                <button
                  type="button"
                  className="rounded-full bg-primary px-4 py-2 text-sm font-semibold text-white hover:bg-primary/90 shadow-3d"
                  onClick={() => applyConsent("accepted")}
                >
                  Accept
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {consent !== "unknown" && (
        <button
          type="button"
          onClick={resetConsent}
          className="fixed bottom-4 left-4 z-40 rounded-full border border-gray-300 bg-white px-3 py-2 text-xs font-medium text-gray-700 shadow-3d hover:bg-gray-50"
        >
          Gestionează cookie-uri
        </button>
      )}
    </>
  );
}

