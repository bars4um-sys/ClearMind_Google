import React from 'react';
import { AlertCircle, CheckCircle2, Sparkles, Brain, XCircle } from 'lucide-react';

interface AudiencePainSectionProps {
  onOpenApplyModal: () => void;
}

export const AudiencePainSection: React.FC<AudiencePainSectionProps> = ({ onOpenApplyModal }) => {
  const painPoints = [
    {
      problem: '«Слова вылетают из головы через пару часов»',
      problemDesc: 'Кажется, что память подводит: учишь список из 20 слов, а на следующий день в голове пустота.',
      solution: 'Нейрофизиологическое смысловое кодирование',
      solutionDesc: 'Взрослый мозг не сохраняет сухие списки. Мы связываем новые слова с вашим жизненным опытом, эмоциями и готовыми фразами-паттернами.',
    },
    {
      problem: '«Быстро устаю, внимание рассеивается через 15 минут»',
      problemDesc: 'После работы или домашних дел трудно заставить себя сесть за учебники. Накапливается чувство вины.',
      solution: 'Микро-практика без выгорания (20 минут в день)',
      solutionDesc: 'Короткие, сфокусированные сессии в естественных паузах дня. Без силы воли, как часть приятного утреннего ритуала с кофе.',
    },
    {
      problem: '«Всё понимаю при чтении, но сказать вслух — ступор»',
      problemDesc: 'В голове бесконечный перевод каждого слова с русского, страх ошибиться и показаться неловким.',
      solution: 'Блочное мышление и снятие языкового барьера',
      solutionDesc: 'Учимся говорить готовыми речевыми блоками (chunks), минуя стадию внутреннего перевода. Отключаем внутреннего критика.',
    },
    {
      problem: '«Боюсь, что в 45–60+ лет учить язык уже поздно»',
      problemDesc: 'Стереотип, что иностранные языки легко даются только детям, а зрелый мозг уже «закостенел».',
      solution: 'Научный факт: мозг 45+ учится глубже и системнее',
      solutionDesc: 'У взрослых развито ассоциативное и контекстное мышление. Курс активирует нейропластичность и омолаживает когнитивные функции.',
    },
  ];

  return (
    <section id="for-whom" className="py-14 sm:py-20 bg-[#F2EDE2] border-y border-[#E2DACB]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-[#A04F3F] bg-[#E8DDD0] px-3.5 py-1 rounded-full mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>ДЛЯ ВЗРОСЛЫХ УЧАЩИХСЯ 45+</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-[#24211E] font-serif-heading tracking-tight">
            Знакомы ли вам эти ощущения <br className="hidden sm:inline" />
            при изучении языка?
          </h2>
          <p className="mt-3 text-base text-[#615A4F] leading-relaxed">
            Если вы думали, что дело в «плохой памяти» или «отсутствии способностей» — это не так.
            Просто стандартные школьные методы противоестественны для взрослого мозга.
          </p>
        </div>

        {/* 4 Contrast Comparison Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {painPoints.map((item, index) => (
            <div
              key={index}
              className="bg-[#FAF7F2] rounded-2xl p-6 sm:p-7 border border-[#E3D9CA] shadow-sm flex flex-col justify-between hover:border-[#D5C7B3] transition-all"
            >
              {/* Pain item */}
              <div className="space-y-4">
                <div className="flex items-start gap-3.5">
                  <div className="w-8 h-8 rounded-full bg-[#F5E6E4] text-[#A04F3F] flex items-center justify-center shrink-0 mt-0.5">
                    <XCircle className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-lg sm:text-xl font-bold text-[#2C2722] font-serif-heading">
                      {item.problem}
                    </h4>
                    <p className="text-sm sm:text-base text-[#736A5E] mt-1 leading-relaxed">
                      {item.problemDesc}
                    </p>
                  </div>
                </div>

                {/* Divider arrow */}
                <div className="flex items-center gap-2 py-1 pl-11">
                  <div className="h-[1px] bg-[#E0D5C4] flex-grow" />
                  <span className="text-sm font-medium text-[#7D7364] uppercase tracking-wider">
                    В курсе «Ясный ум»:
                  </span>
                  <div className="h-[1px] bg-[#E0D5C4] flex-grow" />
                </div>

                {/* Solution item */}
                <div className="flex items-start gap-3.5 bg-[#F0EAE0] p-4 rounded-xl border border-[#E2D5C3]">
                  <div className="w-7 h-7 rounded-full bg-[#527056] text-white flex items-center justify-center shrink-0 mt-0.5">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                  <div>
                    <h5 className="text-base font-bold text-[#223324] font-serif-heading">
                      {item.solution}
                    </h5>
                    <p className="text-sm text-[#526354] mt-0.5 leading-relaxed">
                      {item.solutionDesc}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Scientific Evidence Banner */}
        <div className="mt-10 bg-white/90 rounded-2xl p-6 sm:p-8 border border-[#E0D6C5] flex flex-col md:flex-row items-center justify-between gap-6 shadow-xs">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-2xl bg-[#F4EDE2] text-[#8E4A3B] flex items-center justify-center shrink-0">
              <Brain className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-lg sm:text-xl font-bold text-[#24211E] font-serif-heading">
                Нейропластичность взрослого мозга доказана научно
              </h4>
              <p className="text-sm sm:text-base text-[#635C51] mt-1 leading-relaxed max-w-2xl">
                Изучение языка в возрасте 45–70 лет создает мощный когнитивный резерв, снижает риск возрастной деменции на 4,5 года и повышает общую скорость мышления в повседневной жизни.
              </p>
            </div>
          </div>

          <button
            id="pain-section-cta-btn"
            onClick={onOpenApplyModal}
            className="w-full md:w-auto bg-[#A04F3F] hover:bg-[#8B3F31] text-white px-6 py-3 rounded-xl text-sm font-medium shrink-0 transition-colors cursor-pointer"
          >
            Начать бережное обучение
          </button>
        </div>
      </div>
    </section>
  );
};
