import React, { useState } from 'react';
import { FAQ_ITEMS } from '../data/courseData';
import { ChevronDown, ChevronUp, HelpCircle, Sparkles, MessageCircle } from 'lucide-react';

interface FAQSectionProps {
  onOpenApplyModal: () => void;
}

export const FAQSection: React.FC<FAQSectionProps> = ({ onOpenApplyModal }) => {
  const [openId, setOpenId] = useState<string>('faq-1');
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const filteredItems = activeCategory === 'all'
    ? FAQ_ITEMS
    : FAQ_ITEMS.filter((item) => item.category === activeCategory);

  return (
    <section id="faq" className="py-14 sm:py-20 bg-[#F4EFE6] border-t border-[#E5DEC F]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#A04F3F] bg-[#E8DDD0] px-3.5 py-1 rounded-full mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>ОТВЕТЫ НА ВОПРОСЫ</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-[#24211E] font-serif-heading tracking-tight">
            Часто задаваемые вопросы
          </h2>
          <p className="mt-2 text-xs sm:text-sm text-[#665E51]">
            Всё, что важно знать перед стартом 12-недельной программы «Ясный ум».
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-8">
          {[
            { id: 'all', label: 'Все вопросы' },
            { id: 'about', label: 'О методике и возрасте' },
            { id: 'process', label: 'Формат и время' },
            { id: 'payment', label: 'Рассрочка и оплата' },
            { id: 'results', label: 'Результаты и гарантии' },
          ].map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-3.5 py-1.5 rounded-full text-xs font-medium transition-all cursor-pointer ${
                activeCategory === cat.id
                  ? 'bg-[#2D2A26] text-white'
                  : 'bg-[#E7DFC F] text-[#5C5346] hover:bg-[#DDD3C2]'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-3">
          {filteredItems.map((item) => {
            const isOpen = openId === item.id;
            return (
              <div
                key={item.id}
                className={`rounded-2xl border transition-all overflow-hidden ${
                  isOpen
                    ? 'bg-white border-[#A04F3F]/40 shadow-xs'
                    : 'bg-white/80 border-[#E4DBCB] hover:border-[#D0C4B1]'
                }`}
              >
                <button
                  onClick={() => setOpenId(isOpen ? '' : item.id)}
                  className="w-full text-left p-5 flex items-center justify-between gap-4 cursor-pointer"
                >
                  <span className="text-sm sm:text-base font-bold text-[#2A241E] font-serif-heading">
                    {item.question}
                  </span>
                  <div className="w-7 h-7 rounded-full bg-[#FAF7F2] text-[#6E6457] flex items-center justify-center shrink-0">
                    {isOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-[#5C5447] leading-relaxed border-t border-[#F0EAE0]">
                    {item.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Still Have Questions Box */}
        <div className="mt-10 bg-[#E8E0D2] rounded-2xl p-6 border border-[#DACFBD] text-center flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-left">
            <h4 className="text-sm sm:text-base font-bold text-[#2A241E] font-serif-heading">
              Остались сомнения или индивидуальный вопрос?
            </h4>
            <p className="text-xs text-[#6B6152] mt-0.5">
              Напишите нам в Telegram — наш методист подробно ответит и поможет определиться.
            </p>
          </div>

          <a
            href="https://t.me/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#2D2A26] hover:bg-[#1A1816] text-[#F3EFE6] px-5 py-2.5 rounded-xl text-xs font-medium flex items-center gap-2 shrink-0 transition-colors"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Задать вопрос в Telegram</span>
          </a>
        </div>
      </div>
    </section>
  );
};
