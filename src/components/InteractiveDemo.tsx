import React, { useState } from 'react';
import { Sparkles, Check, ArrowRight, RotateCcw, Award, Lightbulb, Volume2 } from 'lucide-react';

export const InteractiveDemo: React.FC = () => {
  const [step, setStep] = useState<'intro' | 'learning' | 'testing' | 'success'>('intro');
  const [activeWordIndex, setActiveWordIndex] = useState(0);
  const [quizAnswers, setQuizAnswers] = useState<{ [key: number]: string }>({});
  const [feedback, setFeedback] = useState<string | null>(null);

  const demoWords = [
    {
      word: 'Serendipity',
      transcription: '[ˌserənˈdɪpɪti]',
      translation: 'Счастливая случайность / приятная неожиданность',
      badMethod: 'Зубрить 20 раз подряд: се-рен-ди-пи-ти...',
      anchorImage: '☕ Представьте: вы искали потерянную визитку, а нашли в старой книге забытую купюру на кофе с десертом.',
      meaningHook: '«Сирена подарила пирог» — неожиданный приятный подарок судьбы.',
      sentence: 'Meeting you was pure serendipity. (Наша встреча была чистой счастливой случайностью).',
    },
    {
      word: 'Lucid',
      transcription: '[ˈluːsɪd]',
      translation: 'Ясный, четкий, прозрачный (об уме или мысли)',
      badMethod: 'Повторять список: люсид - ясный, люсид - ясный...',
      anchorImage: '☀️ Луч утреннего солнца («люстра света») пробивается сквозь туман, и всё в голове становится кристально ясным.',
      meaningHook: 'Корень «Luc-» означает свет (Люция, иллюминация). Lucid mind = светлый, ясный ум.',
      sentence: 'She gave a clear and lucid explanation. (Она дала ясное и понятное объяснение).',
    },
    {
      word: 'Resilience',
      transcription: '[rɪˈzɪliəns]',
      translation: 'Жизнестойкость, способность восстанавливать силы',
      badMethod: 'Механически выписывать в тетрадь 10 строчек...',
      anchorImage: '🌿 Молодой бамбук сгибается под сильным ветром, но не ломается, а распрямляется с новой силой.',
      meaningHook: 'Резина (пружинит и возвращает форму) + сила = внутренняя упругость и стойкость.',
      sentence: 'Mental resilience keeps our mind sharp. (Ментальная жизнестойкость сохраняет ум острым).',
    },
  ];

  const handleSelectAnswer = (wordIndex: number, selectedMeaning: string) => {
    setQuizAnswers((prev) => ({ ...prev, [wordIndex]: selectedMeaning }));
  };

  const handleFinishQuiz = () => {
    const isAllCorrect =
      quizAnswers[0] === 'Счастливая случайность' &&
      quizAnswers[1] === 'Ясный, четкий (ум)' &&
      quizAnswers[2] === 'Жизнестойкость, восстановление сил';

    if (isAllCorrect) {
      setFeedback(null);
      setStep('success');
    } else {
      setFeedback('Почти получилось! Проверьте варианты еще раз или вспомните образы-якоря.');
    }
  };

  const handleReset = () => {
    setStep('intro');
    setActiveWordIndex(0);
    setQuizAnswers({});
    setFeedback(null);
  };

  return (
    <section id="demo-practice" className="py-14 sm:py-20 bg-[#F8F6F0]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Card Container */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 border border-[#E4DBCB] shadow-md relative overflow-hidden">
          {/* Decorative Tag */}
          <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
            <div className="inline-flex items-center gap-2 bg-[#F4EDE2] text-[#8E4A3B] px-3.5 py-1 rounded-full text-sm font-semibold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5" />
              <span>ИНТЕРАКТИВНЫЙ ТЕСТ МЕТОДИКИ ЗА 90 СЕКУНД</span>
            </div>
            <span className="text-sm text-[#7A7163]">Без оценок • Только для вашего удовольствия</span>
          </div>

          {/* Step 1: Intro */}
          {step === 'intro' && (
            <div className="space-y-6">
              <h3 className="text-2xl sm:text-3xl font-semibold text-[#24211E] font-serif-heading">
                Почувствуйте разницу: как мозг запоминает через смысл, а не зубрежку
              </h3>
              <p className="text-base text-[#595246] leading-relaxed max-w-3xl">
                Сейчас вы запомните 3 красивых и непростых английских слова с помощью техники
                «Смыслового якоря» Милы Хабировой. Через 60 секунд вы легко вспомните их значение без шпаргалок.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
                <div className="bg-[#FAF7F2] p-4 rounded-xl border border-[#ECE4D6]">
                  <span className="text-sm font-bold text-[#8E4A3B]">Шаг 1</span>
                  <p className="text-sm font-medium text-[#2C2721] mt-1">
                    Связываем слово с ярким живым образом
                  </p>
                </div>
                <div className="bg-[#FAF7F2] p-4 rounded-xl border border-[#ECE4D6]">
                  <span className="text-sm font-bold text-[#4A676E]">Шаг 2</span>
                  <p className="text-sm font-medium text-[#2C2721] mt-1">
                    Подключаем смысловой контекст
                  </p>
                </div>
                <div className="bg-[#FAF7F2] p-4 rounded-xl border border-[#ECE4D6]">
                  <span className="text-sm font-bold text-[#4B6B4E]">Шаг 3</span>
                  <p className="text-sm font-medium text-[#2C2721] mt-1">
                    Мгновенно проверяем долговременный след
                  </p>
                </div>
              </div>

              <div className="pt-4">
                <button
                  id="start-demo-btn"
                  onClick={() => setStep('learning')}
                  className="bg-[#A04F3F] hover:bg-[#8B3F31] text-white px-8 py-3.5 rounded-xl font-medium text-base shadow-sm transition-all flex items-center gap-2 cursor-pointer"
                >
                  <span>Попробовать практику (1,5 мин)</span>
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          )}

          {/* Step 2: Learning the 3 words */}
          {step === 'learning' && (
            <div className="space-y-6">
              <div className="flex items-center justify-between border-b border-[#ECE4D8] pb-4">
                <div className="flex items-center gap-2">
                  <span className="text-sm font-bold text-[#8E4A3B] uppercase tracking-wider">
                    Слово {activeWordIndex + 1} из {demoWords.length}
                  </span>
                </div>
                <div className="flex gap-1.5">
                  {demoWords.map((_, idx) => (
                    <div
                      key={idx}
                      className={`h-2 rounded-full transition-all ${
                        idx === activeWordIndex
                          ? 'w-8 bg-[#A04F3F]'
                          : idx < activeWordIndex
                          ? 'w-3 bg-[#527056]'
                          : 'w-3 bg-[#E5DEC F]'
                      }`}
                    />
                  ))}
                </div>
              </div>

              {/* Word Display Card */}
              <div className="bg-[#FAF7F2] rounded-2xl p-6 sm:p-8 border border-[#E6DDCE]">
                <div className="flex flex-wrap items-baseline justify-between gap-2 mb-2">
                  <h4 className="text-3xl sm:text-4xl font-bold text-[#2A241E] font-serif-heading">
                    {demoWords[activeWordIndex].word}
                  </h4>
                  <span className="font-mono text-sm text-[#7D7364]">
                    {demoWords[activeWordIndex].transcription}
                  </span>
                </div>

                <div className="text-lg font-medium text-[#8E4A3B] mb-5">
                  = {demoWords[activeWordIndex].translation}
                </div>

                {/* Contrast Box */}
                <div className="space-y-3.5 text-sm">
                  <div className="bg-white/80 p-3.5 rounded-xl border border-[#E9E0D2] flex items-start gap-3">
                    <Lightbulb className="w-5 h-5 text-[#E5A882] shrink-0 mt-0.5" />
                    <div>
                      <span className="font-semibold text-[#3D372F]">Образ-якорь:</span>
                      <p className="text-[#595145] mt-0.5">{demoWords[activeWordIndex].anchorImage}</p>
                    </div>
                  </div>

                  <div className="bg-[#F2ECE1] p-3.5 rounded-xl border border-[#E0D5C3]">
                    <span className="font-semibold text-[#3D372F]">Смысловая зацепка:</span>
                    <p className="text-[#595145] mt-0.5">{demoWords[activeWordIndex].meaningHook}</p>
                  </div>

                  <div className="text-sm text-[#736B5E] italic pt-1">
                    Пример: {demoWords[activeWordIndex].sentence}
                  </div>
                </div>
              </div>

              {/* Navigation between words */}
              <div className="flex items-center justify-between pt-2">
                <button
                  disabled={activeWordIndex === 0}
                  onClick={() => setActiveWordIndex((prev) => prev - 1)}
                  className="text-sm text-[#736B5E] hover:text-[#2A241E] disabled:opacity-30 disabled:pointer-events-none px-3 py-2 cursor-pointer"
                >
                  ← Предыдущее слово
                </button>

                {activeWordIndex < demoWords.length - 1 ? (
                  <button
                    onClick={() => setActiveWordIndex((prev) => prev + 1)}
                    className="bg-[#A04F3F] hover:bg-[#8B3F31] text-white px-6 py-2.5 rounded-xl text-sm font-medium flex items-center gap-2 cursor-pointer"
                  >
                    <span>Следующее слово</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                ) : (
                  <button
                    onClick={() => setStep('testing')}
                    className="bg-[#527056] hover:bg-[#435C46] text-white px-6 py-2.5 rounded-xl text-sm font-medium flex items-center gap-2 cursor-pointer"
                  >
                    <span>Проверить память прямо сейчас</span>
                    <Check className="w-4 h-4" />
                  </button>
                )}
              </div>
            </div>
          )}

          {/* Step 3: Self-Testing */}
          {step === 'testing' && (
            <div className="space-y-6">
              <div>
                <h4 className="text-xl sm:text-2xl font-bold text-[#24211E] font-serif-heading">
                  Проверка: выберите правильное значение для каждого слова
                </h4>
                <p className="text-sm sm:text-base text-[#635C51] mt-1">
                  Вспомните созданный образ-якорь. Заметьте, как быстро мозг выдает нужную ассоциацию!
                </p>
              </div>

              <div className="space-y-5">
                {/* Question 1 */}
                <div className="bg-[#FAF7F2] p-4 sm:p-5 rounded-2xl border border-[#E6DDCE]">
                  <span className="text-lg font-bold font-serif-heading text-[#2C2721]">
                    1. Что означает слово <span className="text-[#8E4A3B]">Serendipity</span>?
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 mt-3">
                    {[
                      'Счастливая случайность',
                      'Тяжелое испытание',
                      'Музыкальный инструмент',
                    ].map((opt) => (
                      <button
                        key={opt}
                        onClick={() => handleSelectAnswer(0, opt)}
                        className={`text-left px-3.5 py-2.5 rounded-xl text-sm sm:text-base transition-all cursor-pointer ${
                          quizAnswers[0] === opt
                            ? 'bg-[#A04F3F] text-white font-medium shadow-xs'
                            : 'bg-white border border-[#E0D5C3] text-[#423C33] hover:bg-[#F2ECE1]'
                        }`}
                      >
                        {opt}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Question 2 */}
                <div className="bg-[#FAF7F2] p-4 sm:p-5 rounded-2xl border border-[#E6DDCE]">
                  <span className="text-lg font-bold font-serif-heading text-[#2C2721]">
                    2. Что означает слово <span className="text-[#8E4A3B]">Lucid</span>?
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 mt-3">
                    {[
                      'Грустный, печальный',
                      'Ясный, четкий (ум)',
                      'Быстрый, торопливый',
                    ].map((opt) => (
                      <button
                        key={opt}
                        onClick={() => handleSelectAnswer(1, opt)}
                        className={`text-left px-3.5 py-2.5 rounded-xl text-sm sm:text-base transition-all cursor-pointer ${
                          quizAnswers[1] === opt
                            ? 'bg-[#A04F3F] text-white font-medium shadow-xs'
                            : 'bg-white border border-[#E0D5C3] text-[#423C33] hover:bg-[#F2ECE1]'
                        }`}
                      >
                        {opt}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Question 3 */}
                <div className="bg-[#FAF7F2] p-4 sm:p-5 rounded-2xl border border-[#E6DDCE]">
                  <span className="text-lg font-bold font-serif-heading text-[#2C2721]">
                    3. Что означает слово <span className="text-[#8E4A3B]">Resilience</span>?
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 mt-3">
                    {[
                      'Жизнестойкость, восстановление сил',
                      'Опоздание на самолет',
                      'Тихий вечерний шепот',
                    ].map((opt) => (
                      <button
                        key={opt}
                        onClick={() => handleSelectAnswer(2, opt)}
                        className={`text-left px-3.5 py-2.5 rounded-xl text-sm sm:text-base transition-all cursor-pointer ${
                          quizAnswers[2] === opt
                            ? 'bg-[#A04F3F] text-white font-medium shadow-xs'
                            : 'bg-white border border-[#E0D5C3] text-[#423C33] hover:bg-[#F2ECE1]'
                        }`}
                      >
                        {opt}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {feedback && (
                <div className="p-3 bg-[#FBEAE8] text-[#8E3F33] rounded-xl text-sm font-medium">
                  {feedback}
                </div>
              )}

              <div className="flex items-center justify-between pt-2">
                <button
                  onClick={handleReset}
                  className="text-sm text-[#736B5E] hover:text-[#2A241E] flex items-center gap-1 cursor-pointer"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  <span>Пройти заново</span>
                </button>

                <button
                  onClick={handleFinishQuiz}
                  disabled={!quizAnswers[0] || !quizAnswers[1] || !quizAnswers[2]}
                  className="bg-[#A04F3F] hover:bg-[#8B3F31] disabled:opacity-40 disabled:pointer-events-none text-white px-7 py-3 rounded-xl text-sm font-medium shadow-sm transition-all cursor-pointer"
                >
                  Проверить результат
                </button>
              </div>
            </div>
          )}

          {/* Step 4: Success & Key Takeaway */}
          {step === 'success' && (
            <div className="space-y-6 text-center py-4">
              <div className="w-16 h-16 rounded-full bg-[#E5EFE4] text-[#476C4B] flex items-center justify-center mx-auto shadow-sm">
                <Award className="w-8 h-8" />
              </div>

              <div className="max-w-xl mx-auto">
                <h4 className="text-2xl sm:text-3xl font-bold text-[#24211E] font-serif-heading">
                  100% точность! Вы запомнили 3 сложных слова без единого заучивания!
                </h4>
                <p className="text-sm sm:text-base text-[#595246] mt-3 leading-relaxed">
                  Именно так работает когнитивный подход: вместо изнурительной зубрёжки мы создаём
                  в мозге прочные смысловые дорожки. На курсе «Ясный ум» вы освоите эту систему
                  для 600+ устойчивых разговорных выражений и связок.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
                <a
                  href="#pricing"
                  className="bg-[#A04F3F] hover:bg-[#8B3F31] text-white px-7 py-3.5 rounded-xl font-medium text-sm shadow-md transition-all flex items-center gap-2"
                >
                  <span>Освоить всю методику на курсе</span>
                  <ArrowRight className="w-4 h-4" />
                </a>

                <button
                  onClick={handleReset}
                  className="text-sm text-[#736B5E] hover:text-[#2A241E] underline underline-offset-4 cursor-pointer"
                >
                  Попробовать еще раз
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
