import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-zinc-800 bg-background/80 backdrop-blur-md">
      <div className="container mx-auto flex h-16 max-w-5xl items-center justify-between px-4 sm:px-6">
        <div className="flex items-center gap-2">
          <img src="/logo.png" alt="RIFT Logo" className="h-8 w-auto invert mix-blend-screen" />
        </div>
        <div className="flex items-center gap-4">
          <Link 
            href="https://app.riftprotocol.ai/r/WiJcDb"
            target="_blank"
            rel="noopener noreferrer"
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
