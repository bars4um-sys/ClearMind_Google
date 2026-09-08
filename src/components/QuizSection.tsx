import React, { useState } from 'react';
import { QUIZ_QUESTIONS } from '../data/courseData';
import { Sparkles, ArrowRight, CheckCircle2, RotateCcw, Gift, BookOpen } from 'lucide-react';

interface QuizSectionProps {
  onOpenApplyModal: () => void;
  onOpenGuideModal: () => void;
}

export const QuizSection: React.FC<QuizSectionProps> = ({ onOpenApplyModal, onOpenGuideModal }) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(0);
  const [selectedAnswers, setSelectedAnswers] = useState<{ [key: number]: number }>({});
  const [isCompleted, setIsCompleted] = useState<boolean>(false);

  const currentQuestion = QUIZ_QUESTIONS[currentQuestionIndex];

  const handleSelectOption = (optionIndex: number) => {
    const updated = { ...selectedAnswers, [currentQuestion.id]: optionIndex };
    setSelectedAnswers(updated);

    if (currentQuestionIndex < QUIZ_QUESTIONS.length - 1) {
      setCurrentQuestionIndex((prev) => prev + 1);
    } else {
      setIsCompleted(true);
    }
  };

  const handleReset = () => {
    setCurrentQuestionIndex(0);
    setSelectedAnswers({});
    setIsCompleted(false);
  };

  return (
    <section id="memory-quiz" className="py-14 sm:py-20 bg-[#F9F7F2]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl p-6 sm:p-10 border border-[#E3D9C9] shadow-md relative overflow-hidden">
          {/* Header */}
          <div className="text-center max-w-2xl mx-auto mb-8">
            <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#A04F3F] bg-[#F4EDE2] px-3.5 py-1 rounded-full mb-3">
              <Sparkles className="w-3.5 h-3.5" />
              <span>КОГНИТИВНЫЙ ОНЛАЙН-ТЕСТ</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-semibold text-[#24211E] font-serif-heading tracking-tight">
              Определите ваш ведущий тип памяти <br className="hidden sm:inline" />
              и идеальный темп обучения
            </h2>
            <p className="mt-2 text-xs sm:text-sm text-[#6B6356]">
              Ответьте на 4 простых вопроса за 1 минуту и получите персональные рекомендации
              + бесплатный PDF-гайд по когнитивным техникам.
            </p>
          </div>

          {!isCompleted ? (
            <div className="space-y-6">
              {/* Progress bar */}
              <div className="flex items-center justify-between text-xs text-[#7A7163] font-medium border-b border-[#EDE5D8] pb-3">
                <span>
                  Вопрос {currentQuestionIndex + 1} из {QUIZ_QUESTIONS.length}
                </span>
                <span>
                  Готово {Math.round(((currentQuestionIndex + 1) / QUIZ_QUESTIONS.length) * 100)}%
                </span>
              </div>

              {/* Question Text */}
              <div>
                <h3 className="text-lg sm:text-xl font-bold text-[#2A241E] font-serif-heading">
                  {currentQuestion.question}
                </h3>
                {currentQuestion.subtitle && (
                  <p className="text-xs text-[#786F62] mt-1">{currentQuestion.subtitle}</p>
                )}
              </div>

              {/* Options Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                {currentQuestion.options.map((option, idx) => (
                  <button
                    key={idx}
                    onClick={() => handleSelectOption(idx)}
                    className="text-left p-4 rounded-2xl bg-[#FAF7F2] border border-[#E6DDCE] hover:border-[#A04F3F] hover:bg-[#F5EFE6] transition-all cursor-pointer group"
                  >
                    <div className="flex items-start gap-3">
                      <span className="w-6 h-6 rounded-full bg-[#EDE4D6] text-[#736A5E] group-hover:bg-[#A04F3F] group-hover:text-white text-xs font-bold flex items-center justify-center shrink-0 transition-colors">
                        {String.fromCharCode(65 + idx)}
                      </span>
                      <div>
                        <div className="text-xs sm:text-sm font-semibold text-[#2A241E] group-hover:text-[#8E4A3B]">
                          {option.text}
                        </div>
                        <div className="text-[11px] text-[#7A7163] mt-0.5">
                          {option.description}
                        </div>
                      </div>
                    </div>
                  </button>
                ))}
              </div>

              {/* Navigation */}
              {currentQuestionIndex > 0 && (
                <div className="pt-2 text-left">
                  <button
                    onClick={() => setCurrentQuestionIndex((prev) => prev - 1)}
                    className="text-xs text-[#7A7163] hover:text-[#2A241E] cursor-pointer"
                  >
                    ← Вернуться к предыдущему вопросу
                  </button>
                </div>
              )}
            </div>
          ) : (
            /* Quiz Result & Recommendation */
            <div className="space-y-6 text-center py-2">
              <div className="w-14 h-14 rounded-full bg-[#E5EFE4] text-[#476C4B] flex items-center justify-center mx-auto">
                <Gift className="w-7 h-7" />
              </div>

              <div className="max-w-xl mx-auto">
                <span className="text-xs font-bold uppercase tracking-wider text-[#527056]">
                  ВАШ РЕЗУЛЬТАТ: АССОЦИАТИВНО-СМЫСЛОВОЙ ПРОФИЛЬ
                </span>
                <h3 className="text-2xl sm:text-3xl font-bold text-[#24211E] font-serif-heading mt-1">
                  Методика «Ясный ум» подходит вам на 100%
                </h3>
                <p className="text-xs sm:text-sm text-[#5C5549] mt-3 leading-relaxed">
                  Ваш мозг быстрее всего фиксирует информацию через эмоциональные и смысловые связки.
                  Вам категорически противопоказаны школьная зубрежка и грамматические таблицы.
                  20-минутные микро-сессии позволят вам комфортно выйти на беглую разговорную речь.
                </p>
              </div>

              <div className="bg-[#FAF7F2] p-4 sm:p-5 rounded-2xl border border-[#E6DDCE] max-w-lg mx-auto text-left flex items-start gap-3.5">
                <BookOpen className="w-6 h-6 text-[#A04F3F] shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-bold text-[#2A241E]">
                    Подарок: Гайд «10 способов запоминать слова в 3 раза быстрее»
                  </h4>
                  <p className="text-xs text-[#6E6659] mt-0.5">
                    Мы подготовили для вас практический конспект с упражнениями для утренней когнитивной разминки.
                  </p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
                <button
                  onClick={onOpenGuideModal}
                  className="w-full sm:w-auto bg-[#A04F3F] hover:bg-[#8B3F31] text-white px-7 py-3 rounded-xl text-sm font-medium shadow-sm transition-all cursor-pointer flex items-center justify-center gap-2"
                >
                  <Gift className="w-4 h-4" />
                  <span>Получить гайд и записаться</span>
                </button>

                <button
                  onClick={handleReset}
                  className="text-xs text-[#7A7163] hover:text-[#2A241E] flex items-center gap-1 cursor-pointer py-2"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  <span>Пройти заново</span>
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
