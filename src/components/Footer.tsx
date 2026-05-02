import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-zinc-800 bg-background py-12">
      <div className="container mx-auto max-w-5xl px-4 sm:px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 2L2 12L12 22L22 12L12 2Z" fill="currentColor" className="text-zinc-400" />
              <path d="M12 2L2 12H12V2Z" fill="var(--color-rift)" />
            </svg>
            <span className="text-xl font-bold tracking-tight text-zinc-400">rift</span>
          </div>
          
          <div className="flex items-center gap-6 text-sm text-zinc-500">
            <Link href="https://app.riftprotocol.ai/r/WiJcDb" target="_blank" className="hover:text-rift-light transition-colors">
              Bảng Demo
            </Link>
            <Link href="https://zalo.me/0935635788" target="_blank" className="hover:text-rift-light transition-colors">
              Hỗ trợ Zalo
            </Link>
          </div>
        </div>
        <div className="mt-8 text-center text-sm text-zinc-600">
          © {new Date().getFullYear()} RIFT Protocol. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
