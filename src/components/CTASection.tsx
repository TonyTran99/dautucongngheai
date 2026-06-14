import Link from "next/link";
import { ArrowRight, MessageCircle } from "lucide-react";

export function CTASection() {
  return (
    <section className="relative overflow-hidden py-24 bg-rift/5 border-t border-rift/10">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-rift/10 via-background to-background pointer-events-none" />
      
      <div className="container relative mx-auto max-w-4xl px-4 sm:px-6 text-center">
        <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-6">
          Sẵn sàng để bước vào kỷ nguyên giao dịch mới?
        </h2>
        <p className="text-xl text-zinc-400 mb-10 max-w-2xl mx-auto">
          Ngừng &quot;chiến đấu&quot; với thị trường. Trao quyền thực thi cho RIFT và để trí tuệ nhân tạo tối ưu hóa lợi nhuận của bạn.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
          <Link 
            href="https://app.riftprotocol.ai/r/riftvn"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto flex h-16 items-center justify-center gap-2 rounded-xl bg-rift px-10 text-lg font-bold text-white transition-all hover:bg-rift-light hover:scale-105 hover:shadow-[0_0_30px_rgba(0,168,89,0.5)]"
          >
            Dùng bảng Demo Miễn Phí
            <ArrowRight className="h-6 w-6" />
          </Link>
          
          <Link 
            href="https://zalo.me/0935635788"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto flex h-16 items-center justify-center gap-3 rounded-xl border border-zinc-700 bg-zinc-900 px-10 text-lg font-bold text-white transition-all hover:bg-zinc-800 hover:border-zinc-500"
          >
            <MessageCircle className="h-6 w-6 text-blue-400" />
            <div className="flex flex-col items-start leading-tight">
              <span>Mua Giấy Phép AI</span>
              <span className="text-xs text-zinc-400 font-normal">Từ 100$ - Hỗ trợ qua Zalo</span>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}
