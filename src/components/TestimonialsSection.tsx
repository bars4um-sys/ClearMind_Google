import React, { useState } from 'react';
import { TESTIMONIALS } from '../data/courseData';
import { Star, Quote, Volume2, Play, CheckCircle2, Sparkles } from 'lucide-react';

export const TestimonialsSection: React.FC = () => {
  // АУДИО-ОТЗЫВЫ: временно скрыты (реальных аудиозаписей пока нет).
  // Код оставлен на будущее — чтобы вернуть, раскомментируйте блок ниже.
  // const [playingAudioId, setPlayingAudioId] = useState<string | null>(null);
  //
  // const toggleAudio = (id: string) => {
  //   if (playingAudioId === id) {
  //     setPlayingAudioId(null);
  //   } else {
  //     setPlayingAudioId(id);
  //   }
  // };

  return (
    <section id="reviews" className="py-14 sm:py-20 bg-[#F9F7F2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-[#A04F3F] bg-[#EFE7DA] px-3.5 py-1 rounded-full mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>ИСТОРИИ ВЫПУСКНИКОВ 45+</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-[#24211E] font-serif-heading tracking-tight">
            Результаты тех, кто уже открыл для себя <br className="hidden sm:inline" />
            бережное изучение языка
          </h2>
          <p className="mt-3 text-base text-[#615A4F] leading-relaxed">
            Реальные истории наших учеников: как изменились их память, уверенность в себе и качество жизни.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {TESTIMONIALS.map((item, index) => (
            <div
              key={item.id}
              className={`bg-white rounded-3xl p-6 sm:p-8 border border-[#E5DEC F] shadow-xs flex flex-col justify-between hover:border-[#D5C7B3] transition-all card-hover-shadow ${index === TESTIMONIALS.length - 1 ? 'md:col-span-2' : ''}`}
            >
              <div>
                {/* Author Info & Rating */}
                <div className="flex items-center justify-between gap-4 mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full bg-[#F4EDE2] text-[#8E4A3B] flex items-center justify-center shrink-0">
                      <Quote className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-base font-bold text-[#2A241E] font-serif-heading">
                        Участница курса
                      </h4>
                      <p className="text-sm text-[#736B5E]">
                        Отзыв по итогам курса
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-0.5 text-[#D97736]">
                    {[...Array(item.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                </div>

                {/* Quote Highlight */}
                <p className="text-base font-semibold font-serif italic text-[#383128] leading-relaxed mb-3">
                  {item.quote}
                </p>

                {/* Full story */}
                <p className="text-sm sm:text-base text-[#5C5447] leading-relaxed mb-4">
                  {item.story}
                </p>
              </div>

              <div className="space-y-3 pt-3 border-t border-[#EDE5D8]">
                {/* Key Result Badge */}
                <div className="bg-[#FAF7F2] p-3 rounded-xl border border-[#E8DFC F] flex items-start gap-2 text-sm text-[#3E382E]">
                  <CheckCircle2 className="w-4 h-4 text-[#527056] shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-[#24211E]">Итог курса: </span>
                    <span>{item.keyResult}</span>
                  </div>
                </div>

                {/* Simulated Audio Testimonial Bar — ВРЕМЕННО СКРЫТО (аудиозаписей пока нет).
                {item.audioDuration && (
                  <button
                    onClick={() => toggleAudio(item.id)}
                    className={`w-full flex items-center justify-between p-2.5 rounded-xl text-sm transition-colors cursor-pointer ${
                      playingAudioId === item.id
                        ? 'bg-[#A04F3F] text-white'
                        : 'bg-[#F2ECE1] text-[#4A4338] hover:bg-[#EBE2D4]'
                    }`}
                  >
                    <div className="flex items-center gap-2">
                      <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center">
                        <Play className="w-3 h-3 fill-current ml-0.5" />
                      </div>
                      <span>
                        {playingAudioId === item.id ? 'Воспроизведение отзыва...' : 'Слушать аудио-отзыв'}
                      </span>
                    </div>
                    <span className="font-mono text-sm opacity-80">{item.audioDuration}</span>
                  </button>
                )} */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
