import { MessageCircle } from "lucide-react";
import { site, waLink } from "@/lib/data";

export default function WhatsAppFab() {
  return (
    <a
      href={waLink()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Chat with ${site.name} on WhatsApp`}
      className="fixed bottom-5 right-5 z-50 flex items-center justify-center w-14 h-14 rounded-full bg-[#25D366] text-white shadow-lg shadow-black/25 hover:scale-105 transition-transform"
    >
      <MessageCircle size={26} fill="currentColor" strokeWidth={0} />
    </a>
  );
}
