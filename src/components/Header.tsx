import React, { useState, useEffect } from 'react';
import { Menu, X, Sparkles, Clock, ArrowRight, ShieldCheck } from 'lucide-react';

interface HeaderProps {
  onOpenApplyModal: (tariffId?: string) => void;
  onOpenGuideModal: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenApplyModal, onOpenGuideModal }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [timeLeft, setTimeLeft] = useState({ hours: 14, minutes: 38, seconds: 45 });

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: 59, seconds: 59 };
        } else if (prev.hours > 0) {
          return { hours: prev.hours - 1, minutes: 59, seconds: 59 };
        }
        return { hours: 23, minutes: 59, seconds: 59 };
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const navLinks = [
    { label: 'Программа', href: '#program' },
    { label: 'Как проходит курс', href: '#process' },
    { label: 'Методика', href: '#methodology' },
    { label: 'Тарифы', href: '#pricing' },
    { label: 'Об авторе', href: '#author' },
    { label: 'Отзывы', href: '#reviews' },
    { label: 'FAQ', href: '#faq' },
  ];

  return (
    <>
      {/* Top Notification / Urgency Bar */}
      <div id="top-announcement-bar" className="bg-[#2D2A26] text-[#F3EFE6] text-sm sm:text-base py-2 px-4 transition-all">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center px-2 py-0.5 rounded-full text-sm font-semibold bg-[#A04F3F] text-white">
              Старт 15 сентября
            </span>
            <span className="hidden sm:inline text-[#D5CEBF]">
              Раннее бронирование: скидка 25% на все тарифы
            </span>
            <span className="sm:hidden text-sm text-[#D5CEBF]">Скидка 25% на все тарифы</span>
          </div>

          <div className="flex items-center gap-3 ml-auto text-sm">
            <div className="flex items-center gap-1 text-[#E0D7C6]">
              <Clock className="w-3.5 h-3.5 text-[#E5A882]" />
              <span className="font-mono font-medium">
                {String(timeLeft.hours).padStart(2, '0')}:{String(timeLeft.minutes).padStart(2, '0')}:
                {String(timeLeft.seconds).padStart(2, '0')}
              </span>
            </div>
            <span className="hidden md:inline-block text-[#B8AFA0]">|</span>
            <span className="text-[#E5A882] font-medium hidden md:inline">Осталось 7 мест</span>
            <button
              id="top-bar-guide-btn"
              onClick={onOpenGuideModal}
              className="text-sm text-[#F3EFE6] underline underline-offset-2 hover:text-[#E5A882] transition-colors cursor-pointer"
            >
              Бесплатный гайд памяти
            </button>
          </div>
        </div>
      </div>

      {/* Main Sticky Header */}
      <header
        id="main-navigation-header"
        className={`sticky top-0 z-40 w-full transition-all duration-300 ${
          isScrolled
            ? 'bg-[#F8F6F0]/95 backdrop-blur-md shadow-sm border-b border-[#E8E2D5] py-3'
            : 'bg-[#F8F6F0] py-4 sm:py-5 border-b border-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo matching the original image */}
          <a href="#" className="flex flex-col group cursor-pointer" id="header-logo-link">
            <span className="text-xl sm:text-2xl font-bold tracking-widest text-[#24211E] font-serif-heading transition-colors group-hover:text-[#A04F3F]">
              ЯСНЫЙ УМ
            </span>
            <span className="text-sm text-[#7A7265] tracking-wide -mt-0.5">
              с Милой Хабировой
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-6 xl:space-x-8 text-sm font-medium text-[#4D473F]">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="hover:text-[#A04F3F] transition-colors py-1 relative group"
              >
                {link.label}
                <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-[#A04F3F] transition-all duration-200 group-hover:w-full" />
              </a>
            ))}
          </nav>

          {/* Header Action CTA */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              id="header-cta-btn"
              onClick={() => onOpenApplyModal()}
              className="bg-[#A04F3F] hover:bg-[#8B3F31] active:scale-[0.98] text-white px-5 py-2.5 rounded-lg text-sm font-medium shadow-sm transition-all duration-200 flex items-center gap-2 cursor-pointer"
            >
              <span>Присоединиться</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* Mobile hamburger menu toggle */}
          <div className="flex sm:hidden items-center gap-2">
            <button
              id="mobile-join-btn-top"
              onClick={() => onOpenApplyModal()}
              className="bg-[#A04F3F] text-white px-3 py-1.5 rounded-md text-sm font-medium"
            >
              Записаться
            </button>
            <button
              id="mobile-menu-toggle-btn"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-[#4D473F] hover:text-[#24211E] focus:outline-none"
              aria-label="Открыть меню"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div
            id="mobile-navigation-dropdown"
            className="lg:hidden bg-[#F8F6F0] border-b border-[#E2DC CE] px-4 pt-3 pb-6 space-y-3 shadow-lg"
          >
            <div className="flex flex-col space-y-2">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-3 py-2 text-base font-medium text-[#4D473F] hover:text-[#A04F3F] hover:bg-[#EFE9DC] rounded-lg transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>

            <div className="pt-3 border-t border-[#E8E2D5] flex flex-col gap-2.5">
              <button
                id="mobile-drawer-apply-btn"
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenApplyModal();
                }}
                className="w-full bg-[#A04F3F] hover:bg-[#8B3F31] text-white py-3 rounded-lg text-sm font-medium text-center flex items-center justify-center gap-2"
              >
                <span>Присоединиться к курсу</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <button
                id="mobile-drawer-guide-btn"
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenGuideModal();
                }}
                className="w-full bg-[#ECE5D8] text-[#4A4338] py-2.5 rounded-lg text-sm font-medium text-center"
              >
                Получить бесплатный тест и гайд
              </button>
            </div>
          </div>
        )}
      </header>
    </>
  );
};
