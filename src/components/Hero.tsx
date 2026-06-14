import Link from "next/link";
import { ArrowRight, MessageCircle } from "lucide-react";

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-24 pb-16 md:pt-32 md:pb-24">
      {/* Background glowing effect */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-rift/20 blur-[120px] rounded-full pointer-events-none" />
      
      <div className="container relative mx-auto max-w-4xl px-4 sm:px-6 text-center">
        <div className="inline-flex items-center gap-2 rounded-full border border-rift/30 bg-rift/10 px-4 py-1.5 mb-8">
          <span className="flex h-2 w-2 rounded-full bg-rift animate-pulse" />
          <span className="text-sm font-medium text-rift-light">Kỷ nguyên mới của giao dịch phái sinh</span>
        </div>
        
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-white mb-6 leading-tight">
          Giao dịch thông minh hơn với <br className="hidden md:block" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-rift-light to-emerald-300">
            Trí Tuệ Thực Thi
          </span>
        </h1>
        
        <p className="text-lg md:text-xl text-zinc-400 mb-10 max-w-2xl mx-auto leading-relaxed">
          Nén trí tuệ thị trường, thực thi tự động và quản trị rủi ro cấu trúc vào một trải nghiệm duy nhất. Giải phóng bạn khỏi giao diện bóng bẩy để tập trung vào lợi nhuận.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link 
            href="https://app.riftprotocol.ai/r/riftvn"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto flex h-14 items-center justify-center gap-2 rounded-xl bg-rift px-8 text-base font-bold text-white transition-all hover:bg-rift-light hover:scale-105 hover:shadow-[0_0_30px_rgba(0,168,89,0.5)]"
          >
            Dùng bảng Demo Miễn Phí
            <ArrowRight className="h-5 w-5" />
          </Link>
          
          <Link 
            href="https://zalo.me/0935635788"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto flex h-14 items-center justify-center gap-2 rounded-xl border border-zinc-700 bg-zinc-900/50 backdrop-blur-sm px-8 text-base font-bold text-white transition-all hover:bg-zinc-800 hover:border-zinc-600"
          >
            <MessageCircle className="h-5 w-5 text-blue-400" />
            Mua Giấy Phép AI (Từ 100$)
          </Link>
        </div>
        
        <div className="mt-12 flex items-center justify-center gap-8 text-sm font-medium text-zinc-500">
          <div className="flex items-center gap-2">
            <svg className="w-5 h-5 text-rift" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
            Non-custodial
          </div>
          <div className="flex items-center gap-2">
            <svg className="w-5 h-5 text-rift" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
            Hyperliquid L1
          </div>
          <div className="flex items-center gap-2">
            <svg className="w-5 h-5 text-rift" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
            0% Độ trễ sinh học
          </div>
        </div>
      </div>
    </section>
  );
}
