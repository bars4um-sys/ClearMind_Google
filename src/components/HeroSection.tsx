import React from 'react';
import { Calendar, Clock, Sparkles, ArrowRight, Brain, Target, MessageSquare, Heart, CheckCircle2, Shield } from 'lucide-react';
import heroPhoto from '../assets/hero.webp';

interface HeroSectionProps {
  onOpenApplyModal: () => void;
  onOpenGuideModal: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenApplyModal, onOpenGuideModal }) => {
  return (
    <section id="hero-section" className="pt-2 pb-12 sm:pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Main Top Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
        {/* Left Column: Atmospheric Author Visual Card */}
        <div className="lg:col-span-5 relative rounded-2xl sm:rounded-3xl overflow-hidden bg-[#38312B] text-white min-h-[460px] sm:min-h-[540px] lg:min-h-[580px] flex flex-col justify-between p-6 sm:p-8 shadow-xl">
          {/* Background image & gradient overlay */}
          <div className="absolute inset-0 z-0">
            <img
              src={heroPhoto}
              alt="Мила Хабирова — автор курса «Ясный ум»"
              className="w-full h-full object-cover object-center scale-105 filter brightness-[0.92] contrast-[1.02]"
              loading="eager"
            />
            {/* Subtle photographic vignette & warm tint */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#201C18]/90 via-[#201C18]/30 to-[#201C18]/60 mix-blend-multiply" />
          </div>

          {/* Top Left Text Tagline */}
          <div className="relative z-10 space-y-1">
            <p className="text-sm font-semibold tracking-[0.2em] text-[#E8DCC8] uppercase font-sans">
              БОЛЬШЕ ЧЕМ ЯЗЫК.
            </p>
            <p className="text-sm font-semibold tracking-[0.2em] text-[#E8DCC8] uppercase font-sans">
              ШИРЕ, ЧЕМ ПАМЯТЬ.
            </p>
            <div className="w-8 h-[1px] bg-[#E8DCC8]/60 mt-2" />
          </div>

          {/* Top Right Floating Sticky Note */}
          <div className="absolute z-10 right-6 sm:right-8 top-[55%] max-w-[170px] sm:max-w-[190px] bg-[#F9F5EC]/95 text-[#2D2A26] p-3 rounded-lg shadow-md rotate-2 border border-[#E6DEC8]/80 text-sm hidden sm:block">
            <div className="font-handwriting text-sm leading-tight text-[#473F35]">
              Новые слова.<br />
              Новые горизонты.<br />
              <span className="font-semibold text-[#8B3F31]">Тот же вы —</span><br />
              только более собранный.
            </div>
          </div>

          {/* Floating Language Tags on the Left */}
          <div className="relative z-10 space-y-1 my-auto self-start hidden md:block">
            {['English', 'Deutsch', 'Español', 'Français'].map((lang, idx) => (
              <div
                key={lang}
                className="bg-[#1F1C19]/70 backdrop-blur-sm text-[#E7DFD1] text-sm font-mono px-2.5 py-1 rounded border-l-2 border-[#A04F3F]"
                style={{ opacity: 1 - idx * 0.15 }}
              >
                {lang}
              </div>
            ))}
          </div>

          {/* Bottom Card Content: Author Info & Coffee Mug Note */}
          <div className="relative z-10 flex items-end justify-between pt-6 mt-auto">
            <div>
              <h3 className="text-lg sm:text-xl font-bold tracking-wide text-[#FAF6ED] font-serif-heading">
                Мила Хабирова
              </h3>
              <p className="text-sm font-medium tracking-widest text-[#E0D5C1] uppercase mt-0.5">
                АВТОР КУРСА
              </p>
            </div>

            {/* Coffee mug sticker note */}
            <div className="bg-[#FAF7F0] text-[#332E27] px-3.5 py-2 rounded-xl shadow-lg border border-[#E4DC C8] text-right">
              <div className="font-handwriting text-sm sm:text-base text-[#4A4237] leading-tight flex items-center gap-1">
                <span>Спокойные люди учат дальше</span>
                <Heart className="w-3 h-3 text-[#A04F3F] fill-[#A04F3F] inline" />
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Main Hero Content & Benefits */}
        <div className="lg:col-span-7 flex flex-col justify-between space-y-6">
          <div className="bg-white/70 backdrop-blur-sm rounded-2xl sm:rounded-3xl p-6 sm:p-8 sm:py-9 border border-[#E8E2D5] shadow-sm flex flex-col justify-between flex-grow">
            <div>
              {/* Eyebrow badge */}
              <div className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-[#A04F3F] mb-3">
                <span className="w-2 h-2 rounded-full bg-[#A04F3F]" />
                <span>ОНЛАЙН-КУРС • 12 НЕДЕЛЬ • 45+</span>
              </div>

              {/* Main Headline */}
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-[#24211E] leading-[1.12] tracking-tight font-serif-heading mb-4">
                Учите язык <br className="hidden sm:inline" />
                и поддерживайте <br className="hidden sm:inline" />
                <span className="text-[#A04F3F] italic font-serif">ясность ума</span>
              </h1>

              {/* Lead paragraph */}
              <p className="text-lg sm:text-xl text-[#554F45] leading-relaxed max-w-2xl mb-8">
                Курс о том, как запоминать надёжнее, дольше сохранять внимание и постепенно выводить
                иностранный язык в активную речь — <span className="text-[#24211E] font-medium">без зубрёжки и перегрузки.</span>
              </p>

              {/* CTA Action Buttons */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-1">
                <button
                  id="hero-primary-cta-btn"
                  onClick={onOpenApplyModal}
                  className="bg-[#A04F3F] hover:bg-[#8B3F31] active:scale-[0.98] text-white px-7 py-3.5 rounded-xl font-medium text-lg sm:text-xl shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-3 cursor-pointer group"
                >
                  <span>Присоединиться к курсу</span>
                  <ArrowRight className="w-5 h-5 transition-transform duration-200 group-hover:translate-x-1" />
                </button>

                <a
                  href="#program"
                  id="hero-secondary-syllabus-link"
                  className="text-center sm:text-left text-sm sm:text-base font-medium text-[#4D473F] hover:text-[#A04F3F] underline underline-offset-4 py-2 px-2 transition-colors"
                >
                  Посмотреть программу
                </a>
              </div>
            </div>

            {/* 3 Key Side Highlight Cards (12 недель, 20-30 минут, Без зубрежки) */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 pt-8 mt-6 border-t border-[#EBE5DA]">
              {/* Card 1 */}
              <div className="bg-[#F4EFE6] rounded-xl p-3.5 sm:p-4 border border-[#E5DEC F] flex items-start sm:flex-col sm:items-start gap-3">
                <div className="w-10 h-10 rounded-full bg-[#E8DDD0] text-[#8B4738] flex items-center justify-center shrink-0">
                  <Calendar className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-lg sm:text-xl font-bold text-[#2A2621] font-serif-heading">
                    12 недель
                  </h4>
                  <p className="text-sm text-[#6B6356] leading-snug mt-0.5">
                    Устойчивый прогресс в удобном темпе
                  </p>
                </div>
              </div>

              {/* Card 2 */}
              <div className="bg-[#E4ECEE] rounded-xl p-3.5 sm:p-4 border border-[#D0DDE0] flex items-start sm:flex-col sm:items-start gap-3">
                <div className="w-10 h-10 rounded-full bg-[#D1E0E3] text-[#4A676E] flex items-center justify-center shrink-0">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-lg sm:text-xl font-bold text-[#202E32] font-serif-heading">
                    20–30 минут
                  </h4>
                  <p className="text-sm text-[#52666B] leading-snug mt-0.5">
                    Короткие, продуманные занятия
                  </p>
                </div>
              </div>

              {/* Card 3 */}
              <div className="bg-[#E7EFE6] rounded-xl p-3.5 sm:p-4 border border-[#D5E2D4] flex items-start sm:flex-col sm:items-start gap-3">
                <div className="w-10 h-10 rounded-full bg-[#D4E3D2] text-[#4B6B4E] flex items-center justify-center shrink-0">
                  <Sparkles className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-lg sm:text-xl font-bold text-[#233324] font-serif-heading">
                    Без зубрёжки
                  </h4>
                  <p className="text-sm text-[#506853] leading-snug mt-0.5">
                    Естественные методы, которые работают
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Middle Row: Quote Card & Aesthetic Note Card */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-5 mt-6">
        {/* Quote Block (Cool Slate) */}
        <div className="md:col-span-7 bg-[#E3EBEB] rounded-2xl p-6 sm:p-7 border border-[#D0DDDD] flex flex-col justify-between">
          <div className="flex gap-3">
            <span className="text-4xl text-[#78969C] font-serif leading-none select-none">“</span>
            <p className="text-lg sm:text-xl text-[#324548] font-serif italic leading-relaxed pt-1">
              Спокойный, бережный подход для взрослых, которые хотят учиться без перегрузки.
            </p>
          </div>
          <div className="text-right mt-3">
            <span className="font-handwriting text-lg sm:text-xl text-[#4A676D]">
              — Мила Хабирова
            </span>
          </div>
        </div>

        {/* Paper Note Card */}
        <div className="md:col-span-5 bg-[#F2ECE1] rounded-2xl p-6 sm:p-7 border border-[#E3D8C8] flex flex-col justify-between relative overflow-hidden">
          <div className="relative z-10">
            <p className="text-sm font-semibold tracking-widest uppercase text-[#736858] mb-1">
              ЯЗЫК РАСШИРЯЕТ МИР.
            </p>
            <p className="text-sm font-semibold tracking-widest uppercase text-[#736858]">
              А ЯСНЫЙ УМ ПОМОГАЕТ В НЁМ ЖИТЬ.
            </p>
            <div className="w-8 h-[1px] bg-[#A04F3F]/40 my-2.5" />
          </div>
          <div className="relative z-10 text-right">
            <span className="font-handwriting text-lg sm:text-xl text-[#884638]">
              В любом возрасте есть новые горизонты ♡
            </span>
          </div>
          {/* Subtle leaf watermark */}
          <div className="absolute right-0 bottom-0 translate-x-3 translate-y-3 opacity-10 pointer-events-none">
            <Sparkles className="w-28 h-28 text-[#5E5445]" />
          </div>
        </div>
      </div>

      {/* Bottom Row: What changes in 12 weeks & How the course works */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mt-6">
        {/* Block 1: Что изменится через 12 недель */}
        <div className="lg:col-span-6 bg-white/80 backdrop-blur-sm rounded-2xl p-6 sm:p-7 border border-[#E8E2D5] shadow-sm">
          <h4 className="text-sm font-bold uppercase tracking-wider text-[#7A7265] mb-5">
            ЧТО ИЗМЕНИТСЯ ЧЕРЕЗ 12 НЕДЕЛЬ
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {/* 01 */}
            <div className="flex sm:flex-col gap-3">
              <span className="w-8 h-8 rounded-full bg-[#F4EDE2] text-[#8E4A3B] font-mono text-sm font-bold flex items-center justify-center shrink-0">
                01
              </span>
              <div>
                <h5 className="text-sm sm:text-base font-bold text-[#2A2621] font-serif-heading">
                  Запоминать через смысл
                </h5>
                <p className="text-sm text-[#736C60] mt-0.5">
                  а не механически заучивать списки
                </p>
              </div>
            </div>

            {/* 02 */}
            <div className="flex sm:flex-col gap-3">
              <span className="w-8 h-8 rounded-full bg-[#F4EDE2] text-[#8E4A3B] font-mono text-sm font-bold flex items-center justify-center shrink-0">
                02
              </span>
              <div>
                <h5 className="text-sm sm:text-base font-bold text-[#2A2621] font-serif-heading">
                  Удерживать фокус дольше
                </h5>
                <p className="text-sm text-[#736C60] mt-0.5">
                  и легче возвращаться к учёбе
                </p>
              </div>
            </div>

            {/* 03 */}
            <div className="flex sm:flex-col gap-3">
              <span className="w-8 h-8 rounded-full bg-[#F4EDE2] text-[#8E4A3B] font-mono text-sm font-bold flex items-center justify-center shrink-0">
                03
              </span>
              <div>
                <h5 className="text-sm sm:text-base font-bold text-[#2A2621] font-serif-heading">
                  Вспоминать слова в речи
                </h5>
                <p className="text-sm text-[#736C60] mt-0.5">
                  и использовать их в реальных ситуациях
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Block 2: Как устроен курс */}
        <div className="lg:col-span-6 bg-white/80 backdrop-blur-sm rounded-2xl p-6 sm:p-7 border border-[#E8E2D5] shadow-sm flex flex-col justify-between">
          <div className="flex items-center justify-between mb-4">
            <h4 className="text-sm font-bold uppercase tracking-wider text-[#7A7265]">
              КАК УСТРОЕН КУРС
            </h4>
            <span className="text-sm font-medium text-[#A04F3F] bg-[#F7ECE9] px-2 py-0.5 rounded-full">
              3 ступени трансформации
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 items-center">
            {/* Step 1: Память */}
            <div className="flex items-start gap-3 bg-[#FAF7F2] p-3 rounded-xl border border-[#ECE4D8]">
              <div className="w-9 h-9 rounded-full bg-[#A04F3F] text-white flex items-center justify-center shrink-0 shadow-xs">
                <Brain className="w-4 h-4" />
              </div>
              <div>
                <h5 className="text-base font-bold text-[#2A2621] font-serif-heading">Память</h5>
                <p className="text-sm text-[#736C60] leading-tight mt-0.5">
                  Работаем с тем, как мозг запоминает
                </p>
              </div>
            </div>

            {/* Step 2: Внимание */}
            <div className="flex items-start gap-3 bg-[#FAF7F2] p-3 rounded-xl border border-[#ECE4D8]">
              <div className="w-9 h-9 rounded-full bg-[#56767E] text-white flex items-center justify-center shrink-0 shadow-xs">
                <Target className="w-4 h-4" />
              </div>
              <div>
                <h5 className="text-base font-bold text-[#202E32] font-serif-heading">Внимание</h5>
                <p className="text-sm text-[#5A6D72] leading-tight mt-0.5">
                  Тренируем устойчивость и фокус
                </p>
              </div>
            </div>

            {/* Step 3: Язык */}
            <div className="flex items-start gap-3 bg-[#FAF7F2] p-3 rounded-xl border border-[#ECE4D8]">
              <div className="w-9 h-9 rounded-full bg-[#527056] text-white flex items-center justify-center shrink-0 shadow-xs">
                <MessageSquare className="w-4 h-4" />
              </div>
              <div>
                <h5 className="text-base font-bold text-[#233324] font-serif-heading">Язык</h5>
                <p className="text-sm text-[#556957] leading-tight mt-0.5">
                  Выводим знания в активную речь
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
