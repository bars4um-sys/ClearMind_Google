import React from 'react';
import { Brain, Target, MessageSquare, Check, Sparkles, Zap, Shield, HeartHandshake } from 'lucide-react';

export const MethodologySection: React.FC = () => {
  const pillars = [
    {
      icon: Brain,
      title: '1. Память: семантическое кодирование',
      tagline: 'Работаем с тем, как мозг запоминает естественно',
      bgColor: 'bg-[#F4EDE2]',
      iconColor: 'bg-[#A04F3F] text-white',
      borderColor: 'border-[#E5DEC F]',
      points: [
        'Отказ от механического заучивания списков слов',
        'Техника образных и смысловых якорей (Mnemonic Hooks)',
        'Интервальные повторения по оптимизированной кривой Эббингауза',
        'Перевод пассивного словарного запаса в активную долговременную память',
      ],
      result: 'Слова не исчезают через неделю, а прочно встраиваются в память.',
    },
    {
      icon: Target,
      title: '2. Внимание: микро-фокус без перегрузки',
      tagline: 'Тренируем устойчивость и уменьшаем отвлекаемость',
      bgColor: 'bg-[#E5ECEE]',
      iconColor: 'bg-[#4A676E] text-white',
      borderColor: 'border-[#D0DDE0]',
      points: [
        'Микро-сессии по 20 минут вместо изнурительных 2-часовых уроков',
        'Снятие информационного шума и синдрома вечерней усталости',
        'Легкое встраивание языка в повседневные приятные ритуалы',
        'Упражнения на синхронизацию полушарий и когнитивную ясность',
      ],
      result: 'Учеба приносит удовольствие и энергию, а не чувство истощения.',
    },
    {
      icon: MessageSquare,
      title: '3. Язык: вывод в спонтанную речь',
      tagline: 'Говорим связными блоками без внутреннего критика',
      bgColor: 'bg-[#E7EFE6]',
      iconColor: 'bg-[#4B6B4E] text-white',
      borderColor: 'border-[#D5E2D4]',
      points: [
        'Мышление готовыми разговорными конструкциями (Chunks of Language)',
        'Преодоление страха ошибки и ступора перед иностранцами',
        'Разговорные «мосты» для плавности диалога в любых ситуациях',
        'Бережная разговорная практика в поддерживающей мини-группе',
      ],
      result: 'Свободное общение в путешествиях и жизни без шпаргалок.',
    },
  ];

  return (
    <section id="methodology" className="py-14 sm:py-20 bg-[#F9F7F2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#A04F3F] bg-[#EFE7DA] px-3.5 py-1 rounded-full mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>НАУЧНО ОБОСНОВАННАЯ СИСТЕМА</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-[#24211E] font-serif-heading tracking-tight">
            Три кита методики «Ясный ум»
          </h2>
          <p className="mt-3 text-base text-[#615A4F] leading-relaxed">
            Авторская система Милы Хабировой объединяет классическую когнитивную психологию,
            нейролингвистику и 18 лет практического опыта преподавания взрослым.
          </p>
        </div>

        {/* 3 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
          {pillars.map((pillar, index) => {
            const Icon = pillar.icon;
            return (
              <div
                key={index}
                className={`${pillar.bgColor} rounded-3xl p-6 sm:p-8 border ${pillar.borderColor} flex flex-col justify-between shadow-xs card-hover-shadow`}
              >
                <div>
                  <div className="flex items-center gap-3 mb-5">
                    <div className={`w-12 h-12 rounded-2xl ${pillar.iconColor} flex items-center justify-center shrink-0 shadow-sm`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-xs font-mono font-bold text-[#736B5E] tracking-wider uppercase">
                      Ступень 0{index + 1}
                    </span>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-bold text-[#27221C] font-serif-heading">
                    {pillar.title}
                  </h3>
                  <p className="text-xs text-[#6E6557] font-medium mt-1 mb-6">
                    {pillar.tagline}
                  </p>

                  <ul className="space-y-3 mb-6">
                    {pillar.points.map((point, pIdx) => (
                      <li key={pIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#4E473D]">
                        <Check className="w-4 h-4 text-[#8E4A3B] shrink-0 mt-0.5" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-4 border-t border-black/10">
                  <span className="text-[11px] font-bold text-[#706657] uppercase tracking-wider block">
                    Результат ступени:
                  </span>
                  <p className="text-xs sm:text-sm font-semibold text-[#2C2721] mt-0.5">
                    {pillar.result}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Atmosphere Banner: Gentle Learning */}
        <div className="mt-12 bg-white rounded-2xl p-6 sm:p-8 border border-[#E4DBCB] flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xs">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-2xl bg-[#F0EAE0] text-[#8E4A3B] flex items-center justify-center shrink-0">
              <HeartHandshake className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-base sm:text-lg font-bold text-[#24211E] font-serif-heading">
                Бережная атмосфера и уважение к вашему темпу
              </h4>
              <p className="text-xs sm:text-sm text-[#635C51] mt-1 leading-relaxed">
                На курсе нет школьного давления, строгих дедлайнов или стыда за ошибки.
                Каждый куратор обучен деликатной поддержке взрослых учеников.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2 text-xs font-semibold text-[#527056] bg-[#E9EFE8] px-4 py-2 rounded-xl shrink-0">
            <Shield className="w-4 h-4" />
            <span>100% безопасная среда</span>
          </div>
        </div>
      </div>
    </section>
  );
};
