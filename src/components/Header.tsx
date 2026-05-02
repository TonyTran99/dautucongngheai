import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-zinc-800 bg-background/80 backdrop-blur-md">
      <div className="container mx-auto flex h-16 max-w-5xl items-center justify-between px-4 sm:px-6">
        <div className="flex items-center gap-2">
          {/* Logo SVG simulating the attached image */}
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 2L2 12L12 22L22 12L12 2Z" fill="currentColor" className="text-zinc-100" />
            <path d="M12 2L2 12H12V2Z" fill="var(--color-rift)" />
          </svg>
          <span className="text-xl font-bold tracking-tight text-white">rift</span>
        </div>
        <div className="flex items-center gap-4">
          <Link 
            href="https://app.riftprotocol.ai/r/WiJcDb"
            target="_blank"
            rel="noreferrer"
            className="group flex h-9 items-center justify-center gap-2 rounded-full bg-rift px-4 text-sm font-medium text-white transition-all hover:bg-rift-light hover:shadow-[0_0_20px_rgba(0,168,89,0.4)]"
          >
            Dùng Demo Miễn Phí
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </Link>
        </div>
      </div>
    </header>
  );
}
