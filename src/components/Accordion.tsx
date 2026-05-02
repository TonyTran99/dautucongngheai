"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

interface AccordionProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onClick: () => void;
}

export function Accordion({ question, answer, isOpen, onClick }: AccordionProps) {
  return (
    <div className="border-b border-zinc-800 last:border-0">
      <button
        onClick={onClick}
        className="flex w-full items-center justify-between py-5 text-left transition-colors hover:text-[#00A859] focus:outline-none"
      >
        <span className="text-lg font-medium text-zinc-100">{question}</span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.2, ease: "easeInOut" }}
          className="ml-4 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-zinc-900/50 text-zinc-400"
        >
          <ChevronDown className="h-5 w-5" />
        </motion.div>
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div 
              className="pb-5 pr-12 text-zinc-400 leading-relaxed space-y-3"
              dangerouslySetInnerHTML={{ 
                __html: answer.replace(/\n/g, "<br />").replace(/\*\*(.*?)\*\*/g, "<strong className='text-zinc-200'>$1</strong>") 
              }}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
