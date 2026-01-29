import { siteContent } from "@/content/siteContent";

export default function MobileCtas() {
  return (
    <div className="block md:hidden fixed bottom-0 left-0 right-0 z-50 border-t border-slate-200 bg-white shadow-[0_-4px_20px_rgba(15,23,42,0.08)]">
      <div className="grid grid-cols-2">
        <a
          href={`tel:${siteContent.phoneRaw}`}
          className="flex min-h-[64px] items-center justify-center bg-slate-900 text-sm font-semibold text-white"
        >
          Anrufen
        </a>
        <a
          href={`mailto:${siteContent.email}`}
          className="flex min-h-[64px] items-center justify-center bg-amber-400 text-sm font-semibold text-slate-900"
        >
          E-Mail
        </a>
      </div>
    </div>
  );
}
