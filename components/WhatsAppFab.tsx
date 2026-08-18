import { Phone } from "lucide-react";
import { site, waLink } from "@/lib/data";

function WhatsAppIcon({ size = 26 }: { size?: number }) {
  return (
    <svg
      viewBox="0 0 32 32"
      width={size}
      height={size}
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M16.004 3C9.376 3 4 8.373 4 15c0 2.386.699 4.607 1.902 6.475L4 29l7.72-1.86A11.93 11.93 0 0 0 16.004 27C22.63 27 28 21.627 28 15S22.63 3 16.004 3Zm0 21.75a9.7 9.7 0 0 1-4.94-1.353l-.355-.21-4.583 1.104 1.127-4.462-.232-.366A9.69 9.69 0 0 1 5.25 15c0-5.93 4.823-10.75 10.754-10.75S26.75 9.07 26.75 15 21.935 24.75 16.004 24.75Zm5.596-7.302c-.306-.153-1.81-.893-2.09-.996-.28-.102-.484-.153-.688.154-.204.306-.79.995-.968 1.2-.178.204-.357.23-.663.077-.306-.154-1.292-.476-2.462-1.518-.91-.812-1.524-1.815-1.703-2.12-.178-.306-.019-.472.134-.624.138-.137.306-.357.459-.536.153-.179.204-.306.306-.51.102-.204.051-.383-.026-.536-.077-.153-.688-1.658-.943-2.27-.248-.596-.5-.515-.688-.524l-.586-.01a1.125 1.125 0 0 0-.816.383c-.28.306-1.07 1.046-1.07 2.552 0 1.505 1.096 2.96 1.249 3.164.153.204 2.157 3.294 5.225 4.62.73.315 1.298.503 1.742.644.732.233 1.398.2 1.925.121.587-.088 1.81-.74 2.066-1.454.255-.715.255-1.327.178-1.455-.076-.128-.28-.204-.586-.357Z" />
    </svg>
  );
}

export default function WhatsAppFab() {
  return (
    <div className="fixed bottom-5 right-5 z-50 flex flex-col items-center gap-3">
      <a
        href={site.phoneHref}
        aria-label={`Call ${site.name}`}
        className="flex items-center justify-center w-14 h-14 rounded-full bg-[var(--color-amber)] text-white shadow-lg shadow-black/25 hover:bg-[var(--color-amber-light)] hover:scale-105 transition-all"
      >
        <Phone size={24} fill="currentColor" strokeWidth={0} />
      </a>
      <a
        href={waLink()}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`Chat with ${site.name} on WhatsApp`}
        className="flex items-center justify-center w-14 h-14 rounded-full bg-[#25D366] text-white shadow-lg shadow-black/25 hover:scale-105 transition-transform"
      >
        <WhatsAppIcon size={28} />
      </a>
    </div>
  );
}
