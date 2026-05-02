"use client";

import { useState } from "react";
import { Accordion } from "./Accordion";
import { qnaList } from "@/data/qna";

export function QnASection() {
  const [openId, setOpenId] = useState<number | null>(1); // Mặc định mở câu đầu tiên

  const handleToggle = (id: number) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section className="py-20 bg-zinc-950">
      <div className="container mx-auto max-w-4xl px-4 sm:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
            Khám phá sức mạnh của <span className="text-rift-light">RIFT</span>
          </h2>
          <p className="text-zinc-400 text-lg">
            Mọi thắc mắc của bạn về nền tảng giao dịch thế hệ mới được giải đáp chi tiết.
          </p>
        </div>

        <div className="rounded-2xl border border-zinc-800 bg-zinc-900/30 p-4 sm:p-8 backdrop-blur-xl">
          {qnaList.map((item) => (
            <Accordion
              key={item.id}
              question={`${item.id}. ${item.question}`}
              answer={item.answer}
              isOpen={openId === item.id}
              onClick={() => handleToggle(item.id)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
