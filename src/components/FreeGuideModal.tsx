import React, { useState } from 'react';
import { X, Check, BookOpen, Download, ArrowRight, ShieldCheck, Mail, Phone, User, Sparkles } from 'lucide-react';

interface FreeGuideModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const FreeGuideModal: React.FC<FreeGuideModalProps> = ({ isOpen, onClose }) => {
  const [name, setName] = useState('');
  const [contact, setContact] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 600);
  };

  const handleResetAndClose = () => {
    setIsSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/60 backdrop-blur-xs overflow-y-auto">
      <div className="relative w-full max-w-md bg-white rounded-3xl p-6 sm:p-8 shadow-2xl border border-[#E4DBCB] my-8">
        {/* Close Button */}
        <button
          onClick={handleResetAndClose}
          className="absolute top-5 right-5 w-8 h-8 rounded-full bg-[#FAF7F2] text-[#6E6457] hover:bg-[#F2ECE1] flex items-center justify-center transition-colors cursor-pointer"
          aria-label="Закрыть"
        >
          <X className="w-4 h-4" />
        </button>

        {!isSubmitted ? (
          <div>
            <div className="text-center mb-6">
              <div className="w-12 h-12 rounded-2xl bg-[#F4EDE2] text-[#8E4A3B] flex items-center justify-center mx-auto mb-3">
                <BookOpen className="w-6 h-6" />
              </div>
              <span className="text-sm font-bold uppercase tracking-wider text-[#A04F3F] bg-[#F7EBE8] px-3 py-0.5 rounded-full">
                БЕСПЛАТНЫЙ ПОДАРОК
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-[#24211E] font-serif-heading mt-2">
                Гайд «10 способов запоминать слова в 3 раза быстрее»
              </h3>
              <p className="text-sm text-[#6E6558] mt-1.5 leading-relaxed">
                + Полная программа 12 недель курса и чек-лист когнитивной утренней разминки от Милы Хабировой.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-3.5">
              <div>
                <label className="text-sm font-medium text-[#4D473D] block mb-1">
                  Ваше имя:
                </label>
                <div className="relative">
                  <User className="w-4 h-4 text-[#A1988A] absolute left-3 top-1/2 -translate-y-1/2" />
                  <input
                    type="text"
                    required
                    placeholder="Например, Ирина"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full pl-9 pr-3 py-2.5 rounded-xl border border-[#E0D5C3] text-sm focus:outline-none focus:border-[#A04F3F] bg-[#FAF8F4]"
                  />
                </div>
              </div>

              <div>
                <label className="text-sm font-medium text-[#4D473D] block mb-1">
                  Email или Telegram (куда прислать PDF):
                </label>
                <div className="relative">
                  <Mail className="w-4 h-4 text-[#A1988A] absolute left-3 top-1/2 -translate-y-1/2" />
                  <input
                    type="text"
                    required
                    placeholder="irina@mail.ru или @username"
                    value={contact}
                    onChange={(e) => setContact(e.target.value)}
                    className="w-full pl-9 pr-3 py-2.5 rounded-xl border border-[#E0D5C3] text-sm focus:outline-none focus:border-[#A04F3F] bg-[#FAF8F4]"
                  />
                </div>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-[#A04F3F] hover:bg-[#8B3F31] text-white py-3.5 rounded-xl font-medium text-sm shadow-sm transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  {isSubmitting ? (
                    <span>Отправка материалов...</span>
                  ) : (
                    <>
                      <Download className="w-4 h-4" />
                      <span>Получить гайд и программу бесплатно</span>
                    </>
                  )}
                </button>
              </div>

              <div className="text-sm text-center text-[#7F7668]">
                Без спама. Только полезные материалы по методике.
              </div>
            </form>
          </div>
        ) : (
          <div className="text-center py-6 space-y-4">
            <div className="w-14 h-14 rounded-full bg-[#E5EFE4] text-[#476C4B] flex items-center justify-center mx-auto">
              <Check className="w-7 h-7" />
            </div>
            <h3 className="text-2xl font-bold text-[#24211E] font-serif-heading">
              Материалы уже летят к вам!
            </h3>
            <p className="text-sm sm:text-base text-[#5E5649] leading-relaxed">
              Мы отправили гайд по запоминанию и PDF-программу курса на указанный контакт{' '}
              <span className="font-semibold text-[#24211E]">{contact}</span>.
            </p>
            <button
              onClick={handleResetAndClose}
              className="bg-[#2D2A26] hover:bg-[#1A1816] text-white px-6 py-2.5 rounded-xl text-sm font-medium cursor-pointer"
            >
              Отлично, спасибо
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
