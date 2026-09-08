import React, { useState, useEffect } from 'react';
import { ArrowRight, Clock, ShieldCheck, Sparkles } from 'lucide-react';

interface StickyBottomBarProps {
  onOpenApplyModal: () => void;
}

export const StickyBottomBar: React.FC<StickyBottomBarProps> = ({ onOpenApplyModal }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show sticky bar only after scrolling past 500px
      setIsVisible(window.scrollY > 500);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 bg-[#2D2A26]/95 backdrop-blur-md text-white border-t border-[#453F39] py-3 px-4 shadow-2xl transition-transform duration-300">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3">
        <div className="flex items-center gap-3 text-center sm:text-left">
          <div className="w-9 h-9 rounded-full bg-[#A04F3F] text-white flex items-center justify-center shrink-0 hidden sm:flex">
            <Sparkles className="w-4 h-4" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="text-sm font-bold text-[#FAF6ED] font-serif-heading">
                Курс «Ясный ум» с Милой Хабировой
              </span>
              <span className="bg-[#A04F3F] text-white text-sm font-bold px-1.5 py-0.5 rounded-full hidden md:inline">
                -25%
              </span>
            </div>
            <p className="text-sm text-[#C9BFAD] hidden sm:block">
              Старт 15 сентября • Рассрочка 0% от 2 490 ₽/мес • Осталось 7 мест
            </p>
          </div>
        </div>

        <div className="flex items-center gap-3 w-full sm:w-auto">
          <button
            id="sticky-bar-apply-btn"
            onClick={onOpenApplyModal}
            className="w-full sm:w-auto bg-[#A04F3F] hover:bg-[#8B3F31] active:scale-[0.98] text-white px-6 py-2.5 rounded-xl text-sm sm:text-base font-medium shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer"
          >
            <span>Занять место на курсе</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
