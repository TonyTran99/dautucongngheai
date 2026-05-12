"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Play, ShieldCheck, Zap, BarChart3, Clock, Wallet, CheckCircle2, XCircle, ArrowRight } from 'lucide-react';

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const stagger = {
  visible: { transition: { staggerChildren: 0.1 } }
};

export default function Home() {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  const faqs = [
    {
      question: "RIFT là gì và nền tảng này giải quyết bài toán gì cho người dùng?",
      answer: "RIFT ra đời như một siêu ứng dụng kết nối thẳng bạn với mọi thị trường tài chính lớn. Hệ thống này nén ba yếu tố quan trọng nhất là trí tuệ thị trường để nhận diện cơ hội, khả năng thực thi tự động và lồng quản trị rủi ro vào một màn hình duy nhất. Với RIFT, máy móc sẽ tính toán sẵn các điểm ra vào tối ưu, bạn chỉ cần vuốt màn hình để hệ thống tự động xử lý phần còn lại."
    },
    {
      question: "Tôi có thể rút tiền gốc và lãi bất cứ lúc nào không?",
      answer: "Hoàn toàn có thể. RIFT giao dịch không lưu ký, nghĩa là tiền luôn nằm trong Ví Web3 cá nhân của bạn. RIFT tuyệt đối không có quyền đụng chạm hay giữ nguồn vốn này. Bạn có thể dừng giấy phép để rút vốn gốc và lãi bất cứ lúc nào, tiền sẽ được hoàn về tài khoản trong vòng tối đa 24h."
    },
    {
      question: "Hệ thống RIFT có những gói giấy phép đầu tư nào?",
      answer: "RIFT cung cấp ba loại giấy phép: Micro Follow (100 USD, lợi nhuận kỳ vọng 0.3-0.5%/ngày), Smart Follow (500 USD, lợi nhuận kỳ vọng 0.5-0.7%/ngày), và Alpha Follow (1000 USD, lợi nhuận kỳ vọng 0.7-0.9%/ngày). Lợi nhuận sẽ được trả về tài khoản đều đặn theo chu kỳ 24h mỗi ngày."
    },
    {
      question: "Làm sao tôi biết nền tảng minh bạch và không thao túng dòng tiền?",
      answer: "Sự minh bạch của RIFT được mã hóa rõ ràng trên dữ liệu chuỗi khối (Blockchain Hyperliquid). Mọi giao dịch mua bán, sửa đổi lệnh hay nguồn gốc dòng tiền đều được ghi lại vĩnh viễn trên mạng lưới để bất kỳ ai cũng có thể tra cứu. Bạn hoàn toàn có thể tự mình kiểm chứng dòng chảy thanh khoản thực tế."
    },
    {
      question: "Hệ thống quản trị rủi ro bảo vệ tôi khỏi những cú sập như thế nào?",
      answer: "Trước khi bất kỳ lệnh nào được đẩy đi, nó đã bị khóa chặt vào một cơ chế quản trị rủi ro. Các thông số dừng lỗ và kiểm soát khối lượng được ghi nhận cứng. Dù thị trường có sập mạnh đến đâu, máy móc vô cảm sẽ tự động cắt lệnh chính xác tại điểm an toàn đã tính toán, đảm bảo tiền của bạn không bao giờ bốc hơi hoàn toàn."
    }
  ];

  return (
    <div className="min-h-screen bg-[#050505] text-white font-sans selection:bg-cyan-500/30">
      {/* HEADER */}
      <header className="fixed top-0 w-full z-50 bg-[#050505]/80 backdrop-blur-md border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-cyan-500 to-blue-600 flex items-center justify-center p-1">
               <img src="/images/Logo-rift1.jpeg" alt="RIFT Logo" className="w-full h-full rounded-full object-cover" />
            </div>
            <span className="text-xl font-bold tracking-wider">RIFT <span className="text-cyan-400">AI</span></span>
          </div>
          <a href="https://app.riftprotocol.ai/r/riftvn" target="_blank" rel="noreferrer" className="hidden md:flex items-center gap-2 px-6 py-2.5 rounded-full bg-white/10 hover:bg-white/20 transition-all font-medium text-sm">
            Tải Tài Khoản Demo
          </a>
        </div>
      </header>

      {/* HERO SECTION */}
      <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-cyan-900/20 via-[#050505] to-[#050505]"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.div initial="hidden" animate="visible" variants={fadeIn} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 font-medium text-sm mb-8">
            <Zap size={16} /> Thế hệ Giao dịch Tần suất cao mới
          </motion.div>
          
          <motion.h1 initial="hidden" animate="visible" variants={fadeIn} className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight mb-8 leading-tight">
            GIA TĂNG TÀI SẢN <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600">HOÀN TOÀN TỰ ĐỘNG</span>
          </motion.h1>
          
          <motion.p initial="hidden" animate="visible" variants={fadeIn} className="mt-6 text-lg md:text-xl text-gray-400 max-w-3xl mx-auto mb-10 leading-relaxed">
            Đừng biến mình thành "nô lệ" của những biểu đồ tài chính. Hãy để siêu máy tính làm việc 24/7 thay bạn. Bạn chỉ việc cấp vốn, kiểm soát dòng tiền và tận hưởng sức mạnh của Lãi Kép.
          </motion.p>
          
          <motion.div initial="hidden" animate="visible" variants={fadeIn} className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="https://app.riftprotocol.ai/r/riftvn" target="_blank" rel="noreferrer" className="w-full sm:w-auto px-8 py-4 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold text-lg hover:shadow-[0_0_30px_rgba(6,182,212,0.4)] transition-all flex items-center justify-center gap-2">
              Tải Demo & Xem Cách Vận Hành <ArrowRight size={20} />
            </a>
          </motion.div>

          <motion.div initial="hidden" animate="visible" variants={fadeIn} className="mt-16 md:mt-24 relative max-w-4xl mx-auto rounded-2xl overflow-hidden shadow-2xl border border-white/10 aspect-video bg-black/50 backdrop-blur-sm">
            <iframe 
              className="w-full h-full"
              src="https://www.youtube.com/embed/BgTJ4FPkYLY?autoplay=0&controls=1&rel=0" 
              title="RIFT LÀ GÌ" 
              frameBorder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
              allowFullScreen>
            </iframe>
          </motion.div>
        </div>
      </section>

      {/* STATUS QUO */}
      <section className="py-20 md:py-32 bg-[#0A0A0A] border-y border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
              <motion.h2 variants={fadeIn} className="text-3xl md:text-4xl font-bold mb-6">
                Khi Tiền Đang Dần <span className="text-red-500">Mất Giá Trị</span>
              </motion.h2>
              <motion.p variants={fadeIn} className="text-gray-400 text-lg mb-6 leading-relaxed">
                Bạn đã làm việc chăm chỉ nhiều năm. Bạn có một sự nghiệp vững chắc và một khoản tiền tiết kiệm. Nhưng mỗi ngày trôi qua, bạn chợt nhận ra: <strong>Tiền để im trong ngân hàng đang bị lạm phát bào mòn.</strong>
              </motion.p>
              <motion.div variants={fadeIn} className="space-y-4">
                <div className="flex gap-4 items-start">
                  <div className="mt-1 text-red-500"><XCircle size={24} /></div>
                  <p className="text-gray-300">Bạn <strong>quá bận rộn</strong> với công việc chuyên môn, lấy đâu ra thời gian dán mắt vào màn hình canh giá?</p>
                </div>
                <div className="flex gap-4 items-start">
                  <div className="mt-1 text-red-500"><XCircle size={24} /></div>
                  <p className="text-gray-300">Thị trường tài chính giống như một ma trận. Những thuật ngữ khô khan, biểu đồ chằng chịt khiến bạn choáng ngợp.</p>
                </div>
                <div className="flex gap-4 items-start">
                  <div className="mt-1 text-red-500"><XCircle size={24} /></div>
                  <p className="text-gray-300">Bạn <strong>không muốn đánh cược</strong> số tiền mồ hôi nước mắt của mình vào một trò chơi mà bạn chưa nắm rõ luật.</p>
                </div>
              </motion.div>
              <motion.div variants={fadeIn} className="mt-8 p-6 rounded-xl bg-white/5 border border-white/10 border-l-4 border-l-red-500">
                <p className="italic text-gray-200">"Không đầu tư thì tiền mất giá, mà tự đầu tư thì nguy cơ mất trắng vì thiếu kinh nghiệm."</p>
              </motion.div>
            </motion.div>
            
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn} className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-red-500/20 to-orange-500/20 blur-3xl rounded-full"></div>
              <div className="relative aspect-[9/16] md:aspect-video rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
                 <iframe 
                    className="w-full h-full"
                    src="https://www.youtube.com/embed/Yi7ZR1Q-dLg?autoplay=0&controls=1&rel=0" 
                    title="Vì sao trader thua lỗ" 
                    frameBorder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                    allowFullScreen>
                  </iframe>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* THE GUIDE / SOLUTION */}
      <section className="py-20 md:py-32 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Sự Thật Về Trò Chơi Tài Chính</h2>
            <p className="text-xl text-gray-400">Thị trường không được thiết kế để những cá nhân nhỏ lẻ chiến thắng. Bạn đang đối đầu với "cá mập" sử dụng siêu máy tính. Giải pháp là sử dụng đúng công cụ mà họ đang dùng.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn} className="bg-white/5 border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-colors">
              <div className="w-14 h-14 rounded-full bg-cyan-500/20 flex items-center justify-center text-cyan-400 mb-6">
                <ShieldCheck size={32} />
              </div>
              <h3 className="text-xl font-bold mb-4">Không Cảm Xúc</h3>
              <p className="text-gray-400">AI của RIFT không biết sợ hãi hay tham lam. Nó chỉ thực thi lệnh dựa trên xác suất tối ưu nhất, loại bỏ hoàn toàn "yếu điểm sinh học" của con người.</p>
            </motion.div>
            
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn} className="bg-white/5 border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-colors relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 blur-2xl rounded-full"></div>
              <div className="w-14 h-14 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-400 mb-6 relative z-10">
                <Zap size={32} />
              </div>
              <h3 className="text-xl font-bold mb-4 relative z-10">Tốc Độ Ánh Sáng</h3>
              <p className="text-gray-400 relative z-10">Quét hàng triệu dữ liệu để tìm ra điểm vào lệnh hoàn hảo mà con người không thể nhìn thấy. Vào/ra lệnh trong phần nghìn giây.</p>
            </motion.div>

            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn} className="bg-white/5 border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-colors">
              <div className="w-14 h-14 rounded-full bg-purple-500/20 flex items-center justify-center text-purple-400 mb-6">
                <Clock size={32} />
              </div>
              <h3 className="text-xl font-bold mb-4">Hoạt Động 24/7</h3>
              <p className="text-gray-400">Thị trường không ngủ. Khi bạn đang ngủ, đi du lịch hay họp hành, RIFT vẫn âm thầm cày cuốc ngày đêm để mang về lợi nhuận.</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* SOCIAL PROOF */}
      <section className="py-20 bg-[#0A0A0A]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Con Số Không Biết Nói Dối</h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">Hàng ngàn người đã đi trước và chứng minh hiệu quả. Họ không phải là chuyên gia, họ chỉ đơn giản là đã giao việc khó nhất cho AI.</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
            <img src="/images/Loi-nhuan-rift1.jpg" alt="Lợi nhuận RIFT" className="rounded-lg w-full h-auto object-cover aspect-[3/4] border border-white/10 opacity-80 hover:opacity-100 transition-opacity" />
            <img src="/images/Loi-nhuan-rift2.jpg" alt="Lợi nhuận RIFT" className="rounded-lg w-full h-auto object-cover aspect-[3/4] border border-white/10 opacity-80 hover:opacity-100 transition-opacity" />
            <img src="/images/Loi-nhuan-rift4.jpg" alt="Lợi nhuận RIFT" className="rounded-lg w-full h-auto object-cover aspect-[3/4] border border-white/10 opacity-80 hover:opacity-100 transition-opacity" />
            <img src="/images/Loi-nhuan-rift7.jpg" alt="Lợi nhuận RIFT" className="rounded-lg w-full h-auto object-cover aspect-[3/4] border border-white/10 opacity-80 hover:opacity-100 transition-opacity" />
          </div>

          <div className="text-center mb-10">
            <h3 className="text-2xl font-bold mb-4">Phản Hồi Từ Cộng Đồng</h3>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            <img src="/images/khach-hang-chia-se-thu-nhap-rift.png" alt="Feedback" className="rounded-xl w-full h-auto object-cover border border-white/10" />
            <img src="/images/khach-hang-chia-se-thu-nhap-rift3.png" alt="Feedback" className="rounded-xl w-full h-auto object-cover border border-white/10" />
            <img src="/images/khach-hang-chia-se-thu-nhap-rift4.png" alt="Feedback" className="rounded-xl w-full h-auto object-cover border border-white/10" />
          </div>
        </div>
      </section>

      {/* RISK REVERSAL */}
      <section className="py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn} className="order-2 md:order-1 relative">
              <div className="grid grid-cols-2 gap-4 relative z-10">
                <img src="/images/giao-dich-onchain.jpg" alt="Onchain" className="rounded-2xl border border-white/10 shadow-lg" />
                <img src="/images/rut-tien.jpg" alt="Rút tiền" className="rounded-2xl border border-white/10 shadow-lg translate-y-8" />
              </div>
              <div className="absolute inset-0 bg-cyan-500/20 blur-3xl -z-10 rounded-full"></div>
            </motion.div>
            
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="order-1 md:order-2">
              <motion.h2 variants={fadeIn} className="text-3xl md:text-4xl font-bold mb-6">
                Sự Minh Bạch Bảo Vệ Bạn <span className="text-cyan-400">Như Thế Nào?</span>
              </motion.h2>
              <motion.p variants={fadeIn} className="text-gray-400 text-lg mb-8">
                Nghe có vẻ quá hoàn hảo? Có rủi ro nào ở đây không? "Nhỡ nạp tiền vào rồi sàn sập thì sao?" Chúng tôi hiểu sự e ngại của bạn. Và đây là cách RIFT bảo vệ bạn: <strong>TIỀN CỦA BẠN LÀ DO BẠN GIỮ.</strong>
              </motion.p>
              
              <motion.ul variants={fadeIn} className="space-y-6 mb-8">
                <li className="flex gap-4">
                  <div className="mt-1 text-cyan-400"><Wallet size={24} /></div>
                  <div>
                    <h4 className="text-white font-bold text-lg">Kiểm soát duy nhất</h4>
                    <p className="text-gray-400">Vốn của bạn được lưu trữ trên Ví Web3 cá nhân. RIFT chỉ được cấp quyền giao dịch, KHÔNG CÓ QUYỀN RÚT TIỀN của bạn.</p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <div className="mt-1 text-cyan-400"><Zap size={24} /></div>
                  <div>
                    <h4 className="text-white font-bold text-lg">Rút vốn 24/7</h4>
                    <p className="text-gray-400">Không giam vốn. Cần tiền gấp? Bấm ngừng lệnh và toàn bộ gốc lẫn lãi sẽ về ví bạn trong 24 giờ.</p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <div className="mt-1 text-cyan-400"><BarChart3 size={24} /></div>
                  <div>
                    <h4 className="text-white font-bold text-lg">Minh bạch On-chain</h4>
                    <p className="text-gray-400">Mọi hoạt động của RIFT đều được ghi nhận công khai trên nền tảng Blockchain. Không có góc khuất.</p>
                  </div>
                </li>
              </motion.ul>

              <motion.a variants={fadeIn} href="https://www.youtube.com/playlist?list=PLBkXqcyBeXu8gTGAvgpbIJxN7l4JiJfcx" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-cyan-400 font-medium hover:text-cyan-300 transition-colors">
                <Play size={20} /> Xem Series CEO RIFT đào tạo về công nghệ lõi
              </motion.a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* PRICING / PLANS */}
      <section className="py-20 bg-[#0A0A0A] border-y border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Lộ Trình Tăng Trưởng Lãi Kép</h2>
            <p className="text-xl text-gray-400">Dòng tiền của bạn được chia làm 2 phần: Mua bản quyền AI và Vốn lưu động. Dưới đây là các phương án thiết kế để Lãi Kép bùng nổ tốt nhất.</p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              { amount: "2300", link: "https://dautu2300.vercel.app/" },
              { amount: "3000", link: "https://dautu3000.vercel.app/", popular: true },
              { amount: "5000", link: "https://dautu5000.vercel.app/" },
              { amount: "10000", link: "https://dautu10000.vercel.app/" },
            ].map((plan, idx) => (
              <a href={plan.link} target="_blank" rel="noreferrer" key={idx} className={`block p-8 rounded-2xl border ${plan.popular ? 'border-cyan-500 bg-cyan-500/5 relative' : 'border-white/10 bg-white/5'} hover:bg-white/10 transition-all text-center group`}>
                {plan.popular && <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-cyan-500 text-black text-xs font-bold px-3 py-1 rounded-full">PHỔ BIẾN NHẤT</div>}
                <div className="text-gray-400 text-sm font-medium mb-2 uppercase tracking-wider">Phương án vốn</div>
                <div className="text-4xl font-extrabold text-white mb-6">${plan.amount}</div>
                <div className="flex items-center justify-center text-cyan-400 font-medium group-hover:text-cyan-300 transition-colors">
                  Xem lộ trình chi tiết <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* FILTER - WHO IS NOT FOR */}
      <section className="py-20 md:py-32 relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-3xl font-bold mb-10">RIFT AI DÀNH CHO AI?</h2>
          
          <div className="grid md:grid-cols-2 gap-8 text-left">
            <div className="p-8 rounded-2xl bg-red-500/5 border border-red-500/20">
              <h3 className="text-xl font-bold text-red-400 mb-4 flex items-center gap-2"><XCircle /> Tuyệt đối KHÔNG nên tham gia nếu:</h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex gap-2 items-start"><span className="text-red-500 mt-1">-</span> Mang tư duy cờ bạc, muốn X2, X3 tài khoản sau 1 đêm.</li>
                <li className="flex gap-2 items-start"><span className="text-red-500 mt-1">-</span> Có ý định vay mượn nóng, cầm cố tài sản để đầu tư.</li>
                <li className="flex gap-2 items-start"><span className="text-red-500 mt-1">-</span> Không có sự kiên nhẫn để Lãi Kép phát huy tác dụng dài hạn.</li>
              </ul>
            </div>
            
            <div className="p-8 rounded-2xl bg-cyan-500/5 border border-cyan-500/20">
              <h3 className="text-xl font-bold text-cyan-400 mb-4 flex items-center gap-2"><CheckCircle2 /> Chào mừng bạn đến với RIFT nếu:</h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex gap-2 items-start"><span className="text-cyan-500 mt-1">-</span> Bạn là người thực tế, tìm kiếm lợi nhuận bền vững.</li>
                <li className="flex gap-2 items-start"><span className="text-cyan-500 mt-1">-</span> Bạn trân trọng dòng vốn và muốn được bảo vệ bằng công nghệ.</li>
                <li className="flex gap-2 items-start"><span className="text-cyan-500 mt-1">-</span> Bạn bận rộn và cần một hệ thống quản lý vốn thụ động tự động hóa 100%.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-[#0A0A0A] border-t border-white/5">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-10 text-center">Câu Hỏi Thường Gặp</h2>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="border border-white/10 rounded-xl overflow-hidden bg-white/5">
                <button 
                  onClick={() => toggleFaq(index)}
                  className="w-full text-left px-6 py-4 font-medium flex justify-between items-center hover:bg-white/5 transition-colors"
                >
                  {faq.question}
                  <ChevronDown className={`transform transition-transform ${activeFaq === index ? 'rotate-180' : ''}`} />
                </button>
                <AnimatePresence>
                  {activeFaq === index && (
                    <motion.div 
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="px-6 py-4 text-gray-400 bg-black/20 text-sm leading-relaxed"
                    >
                      {faq.answer}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA / FOOTER */}
      <section className="py-24 relative">
        <div className="absolute inset-0 bg-gradient-to-t from-cyan-900/20 to-transparent"></div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Sẵn Sàng Để Tiền Làm Việc Cho Bạn?</h2>
          <p className="text-xl text-gray-400 mb-10">Mọi quyết định lớn đều bắt đầu từ một thao tác nhỏ. Đừng để lạm phát tiếp tục ăn mòn tài sản của bạn.</p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <a href="https://zalo.me/0935635788" target="_blank" rel="noreferrer" className="w-full sm:w-auto px-8 py-4 rounded-full bg-blue-600 text-white font-bold text-lg hover:bg-blue-500 transition-colors shadow-lg">
              Tư Vấn Zalo: 0935.635.788
            </a>
            <a href="https://www.facebook.com/tonytranaitrading" target="_blank" rel="noreferrer" className="w-full sm:w-auto px-8 py-4 rounded-full bg-white/10 text-white font-bold text-lg hover:bg-white/20 transition-colors border border-white/20">
              Nhắn Tin Fanpage
            </a>
          </div>

          <p className="text-xs text-gray-600 max-w-2xl mx-auto">
            Khuyến cáo: Mọi giao dịch tài chính đều tiềm ẩn rủi ro. Các số liệu lợi nhuận minh họa được dựa trên hiệu suất quá khứ của nền tảng và không mang tính chất cam kết lợi nhuận trong tương lai. Bạn vui lòng tự tìm hiểu và chịu trách nhiệm với quyết định đầu tư của mình.
          </p>
        </div>
      </section>

      {/* FLOATING ZALO BUTTON */}
      <a 
        href="https://zalo.me/0935635788" 
        target="_blank" 
        rel="noreferrer" 
        className="fixed bottom-6 right-6 z-50 flex items-center gap-2 px-4 py-3 md:px-6 md:py-3 rounded-full bg-blue-600 text-white font-bold shadow-[0_4px_20px_rgba(37,99,235,0.5)] hover:scale-105 transition-transform"
      >
        <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center text-blue-600 font-black text-xl">Z</div>
        <span className="hidden sm:block">Nhắn Zalo Ngay</span>
      </a>
    </div>
  );
}
