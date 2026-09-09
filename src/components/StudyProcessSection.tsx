import React from 'react';
import { PlayCircle, BookOpen, Users, Headphones, Award, Sparkles, Check } from 'lucide-react';

export const StudyProcessSection: React.FC = () => {
  const steps = [
    {
      icon: PlayCircle,
      stepNum: '01',
      title: 'Короткие видеоуроки (15–20 минут)',
      desc: 'Никакой лишней «воды». Каждый урок дает одну конкретную когнитивную технику и порцию живого языка. Можно смотреть в любое удобное время с телефона или компьютера.',
    },
    {
      icon: BookOpen,
      stepNum: '02',
      title: 'Интерактивная рабочая тетрадь',
      desc: 'Красиво оформленный PDF-блокнот с упражнениями на смысловые ассоциации, трекером интервальных повторений и шпаргалками речевых мостов.',
    },
    {
      icon: Headphones,
      stepNum: '03',
      title: 'Аудио-тренажеры в Telegram',
      desc: 'Удобные голосовые карточки для тренировки слухового восприятия во время прогулки, приготовления ужина или в дороге без экрана.',
    },
    {
      icon: Users,
      stepNum: '04',
      title: 'Бережные Zoom-встречи в мини-группах',
      desc: 'Разговорная практика в теплой компании единомышленников 45+ под руководством деликатного куратора. Снимаем страх говорить в безопасной атмосфере.',
    },
    {
      icon: Award,
      stepNum: '05',
      title: 'Личный куратор и обратная связь',
      desc: 'Подробный разбор ваших домашних заданий, ответы на любые вопросы и бережная мотивация на каждом шаге 12-недельного пути.',
    },
  ];

  return (
    <section id="process" className="py-14 sm:py-20 bg-[#F9F7F2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-[#A04F3F] bg-[#EFE7DA] px-3.5 py-1 rounded-full mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>КАК ПРОХОДИТ ОБУЧЕНИЕ</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-[#24211E] font-serif-heading tracking-tight">
            Обучение, которое идеально вписывается <br className="hidden sm:inline" />
            в жизнь взрослого человека
          </h2>
          <p className="mt-3 text-base text-[#615A4F] leading-relaxed">
            Вам не придется перекраивать привычный график или часами сидеть над учебниками.
            Все элементы курса созданы с заботой о вашем времени и силах.
          </p>
        </div>

        {/* 5 Process Cards Grid */}
        <div className="flex flex-wrap justify-center gap-6">
          {steps.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="w-full md:w-[calc(50%-0.75rem)] lg:w-[calc(33.333%-1rem)] bg-white rounded-2xl p-5 sm:p-6 border border-[#E6DDCE] shadow-xs flex flex-col justify-between hover:border-[#A04F3F]/40 transition-all"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 rounded-xl bg-[#F4EDE2] text-[#8E4A3B] flex items-center justify-center">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="font-mono text-sm font-bold text-[#A59C8F]">
                      {item.stepNum}
                    </span>
                  </div>

                  <h3 className="text-lg sm:text-xl font-bold text-[#2A241E] font-serif-heading leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-sm sm:text-base text-[#665E51] mt-2 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Support Highlights Row */}
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-4 bg-[#EDE5D6] p-6 rounded-2xl border border-[#DDD3C2]">
          <div className="flex items-center gap-3">
            <div className="w-7 h-7 rounded-full bg-[#527056] text-white flex items-center justify-center shrink-0">
              <Check className="w-4 h-4" />
            </div>
            <span className="text-sm sm:text-base font-medium text-[#383127]">
              Доступ с любых устройств: компьютер, планшет, телефон
            </span>
          </div>

          <div className="flex items-center gap-3">
            <div className="w-7 h-7 rounded-full bg-[#527056] text-white flex items-center justify-center shrink-0">
              <Check className="w-4 h-4" />
            </div>
            <span className="text-sm sm:text-base font-medium text-[#383127]">
              Записи всех встреч навсегда сохраняются в кабинете
            </span>
          </div>

          <div className="flex items-center gap-3">
            <div className="w-7 h-7 rounded-full bg-[#527056] text-white flex items-center justify-center shrink-0">
              <Check className="w-4 h-4" />
            </div>
            <span className="text-sm sm:text-base font-medium text-[#383127]">
              Служба заботы на связи 7 дней в неделю
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
