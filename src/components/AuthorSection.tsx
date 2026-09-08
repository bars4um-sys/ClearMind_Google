import React from 'react';
import { Award, BookOpen, Users, CheckCircle2, Quote, Sparkles, Heart } from 'lucide-react';
import authorPhoto from '../assets/author-photo.webp';

export const AuthorSection: React.FC = () => {
  const stats = [
    { value: '18+', label: 'лет преподавания взрослым' },
    { value: '12 000+', label: 'выпускников курсов' },
    { value: '45–72', label: 'средний возраст учеников' },
    { value: '98%', label: 'доходят до финала программы' },
  ];

  const credentials = [
    'Профессиональный преподаватель и переводчик-синхронист высшей категории',
    'Основатель образовательных проектов «English is my cup of tea» и «Английский по фильмам»',
    'Автор методики когнитивного языкового погружения для людей зрелого возраста',
    'Спикер всероссийских и международных лингвистических конференций',
    'Эксперт по нейропластичности и психологической адаптации взрослых учащихся',
  ];

  return (
    <section id="author" className="py-14 sm:py-20 bg-[#F4EFE6] border-y border-[#E5DEC F]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column: Author Portrait & Manifesto Card */}
          <div className="lg:col-span-5 space-y-6">
            <div className="relative rounded-3xl overflow-hidden bg-[#2D2A26] border border-[#DDD4C4] shadow-lg">
              <img
                src={authorPhoto}
                alt="Мила Хабирова — автор методики «Ясный ум»"
                className="w-full h-[420px] object-cover object-center filter brightness-95"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1F1C19]/90 via-transparent to-transparent" />
              
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <span className="text-[11px] font-bold uppercase tracking-widest text-[#E5A882]">
                  АВТОР И ВЕДУЩАЯ КУРСА
                </span>
                <h3 className="text-2xl font-bold font-serif-heading text-[#FAF6ED]">
                  Мила Хабирова
                </h3>
                <p className="text-xs text-[#E0D5C1] mt-0.5">
                  «Я верю, что изучение языка — лучший способ сохранить острый ум и радость жизни в любом возрасте.»
                </p>
              </div>
            </div>

            {/* Author Handwritten Card */}
            <div className="bg-[#FAF7F0] rounded-2xl p-6 border border-[#E2D6C5] shadow-xs">
              <div className="flex items-start gap-3">
                <Quote className="w-6 h-6 text-[#A04F3F] shrink-0" />
                <div>
                  <p className="text-sm font-serif italic text-[#443D34] leading-relaxed">
                    «Моя цель — не заставить вас вызубрить 1000 слов, а научить ваш мозг радоваться каждому новому открытию. Спокойные люди учат язык глубже и говорят свободнее.»
                  </p>
                  <div className="mt-2 text-right">
                    <span className="font-handwriting text-lg text-[#884638]">
                      — С заботой, Мила Хабирова ♡
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Bio & Regalia */}
          <div className="lg:col-span-7 space-y-6">
            <div>
              <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#A04F3F] bg-[#E8DDD0] px-3.5 py-1 rounded-full mb-3">
                <Sparkles className="w-3.5 h-3.5" />
                <span>ОБ АВТОРЕ МЕТОДИКИ</span>
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-[#24211E] font-serif-heading tracking-tight">
                Здравствуйте! Я — Мила Хабирова
              </h2>
              <p className="mt-3 text-base text-[#595246] leading-relaxed">
                Уже более 18 лет я помогаю взрослым людям заговорить на иностранном языке без страха,
                комплексов и бессмысленной зубрежки. Моя методика родилась из понимания того,
                как устроен мозг взрослого человека и почему стандартные школьные схемы вызывают отторжение.
              </p>
            </div>

            {/* Numbers Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {stats.map((stat, idx) => (
                <div key={idx} className="bg-white rounded-2xl p-4 border border-[#E4DCCF] text-center shadow-xs">
                  <div className="text-2xl sm:text-3xl font-bold text-[#A04F3F] font-serif-heading">
                    {stat.value}
                  </div>
                  <div className="text-xs text-[#70685B] mt-1 leading-snug">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>

            {/* Credentials List */}
            <div className="space-y-3 pt-2">
              <h4 className="text-xs font-bold uppercase tracking-wider text-[#736B5E]">
                Квалификация и профессиональный опыт:
              </h4>
              <ul className="space-y-2.5">
                {credentials.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-[#4E473D]">
                    <CheckCircle2 className="w-4 h-4 text-[#8E4A3B] shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
