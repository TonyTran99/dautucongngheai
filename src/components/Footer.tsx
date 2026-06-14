import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-zinc-800 bg-background py-12">
      <div className="container mx-auto max-w-5xl px-4 sm:px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <img src="/logo.png" alt="RIFT Logo" className="h-8 w-auto invert mix-blend-screen opacity-70" />
          </div>
          
          <div className="flex items-center gap-6 text-sm text-zinc-500">
            <Link href="https://app.riftprotocol.ai/r/riftvn" target="_blank" rel="noopener noreferrer" className="hover:text-rift-light transition-colors">
              Bảng Demo
            </Link>
            <Link href="https://zalo.me/0935635788" target="_blank" rel="noopener noreferrer" className="hover:text-rift-light transition-colors">
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
