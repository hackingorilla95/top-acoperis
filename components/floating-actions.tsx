/* eslint-disable @next/next/no-img-element */
"use client";
import { Button } from "@/components/ui/button";
import { MessageCircle, Phone } from "lucide-react";
import Link from "next/link";

// FloatingActions renders persistent WhatsApp + Call buttons on bottom-right
export function FloatingActions() {
  const phoneDisplay = "0729 373 800";
  const phoneRaw = "+40729373800";

  const trackContactClick = (channel: "whatsapp" | "call") => {
    // Push to dataLayer for GTM / gtag if available
    if (typeof window !== "undefined") {
      window.dataLayer = window.dataLayer || [];
      window.dataLayer.push({
        event: "contact_click",
        channel,
        phone: phoneRaw,
      });
      if (typeof window.gtag === "function") {
        window.gtag("event", "contact_click", {
          event_category: "engagement",
          event_label: channel,
          value: 1,
        });
      }
    }
  };

  return (
    <div className="fixed bottom-4 right-4 z-50 flex flex-col gap-2">
      <Button
        asChild
        size="icon"
        className="h-12 w-12 rounded-full shadow-3d hover:shadow-3d-hover bg-[#25D366] hover:bg-[#1ea955] text-white"
        aria-label="Deschide WhatsApp"
      >
        <Link
          href={`https://wa.me/${phoneRaw.replace("+", "")}`}
          target="_blank"
          onClick={() => trackContactClick("whatsapp")}
        >
          <MessageCircle className="h-5 w-5" />
          <span className="sr-only">WhatsApp {phoneDisplay}</span>
        </Link>
      </Button>

      <Button
        asChild
        size="icon"
        variant="secondary"
        className="h-12 w-12 rounded-full shadow-3d hover:shadow-3d-hover"
        aria-label="Sună acum"
      >
        <a href={`tel:${phoneRaw}`} onClick={() => trackContactClick("call")}>
          <Phone className="h-5 w-5" />
          <span className="sr-only">Sună {phoneDisplay}</span>
        </a>
      </Button>
    </div>
  );
}

