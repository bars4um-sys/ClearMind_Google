import React, { useState } from 'react';
import { SYLLABUS_MODULES } from '../data/courseData';
import { Brain, Target, MessageSquare, ChevronDown, ChevronUp, Download, CheckCircle2, Clock, Sparkles } from 'lucide-react';

interface ProgramSyllabusProps {
  onOpenApplyModal: () => void;
  onOpenGuideModal: () => void;
}

export const ProgramSyllabus: React.FC<ProgramSyllabusProps> = ({ onOpenApplyModal, onOpenGuideModal }) => {
  const [activeModuleId, setActiveModuleId] = useState<string>('module-1');
  const [expandedWeek, setExpandedWeek] = useState<number>(1);

  const activeModule = SYLLABUS_MODULES.find((m) => m.id === activeModuleId) || SYLLABUS_MODULES[0];

  const getModuleIcon = (iconName: string) => {
    switch (iconName) {
      case 'Brain':
        return <Brain className="w-5 h-5" />;
      case 'Target':
        return <Target className="w-5 h-5" />;
      case 'MessageSquare':
        return <MessageSquare className="w-5 h-5" />;
      default:
        return <Sparkles className="w-5 h-5" />;
    }
  };

  return (
    <section id="program" className="py-14 sm:py-20 bg-[#F4EFE6] border-t border-[#E5DEC F]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-[#A04F3F] bg-[#E8DDD0] px-3.5 py-1 rounded-full mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>12 НЕДЕЛЬ • 3 СТУПЕНИ • 48 ПРАКТИЧЕСКИХ МИКРО-УРОКОВ</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-[#24211E] font-serif-heading tracking-tight">
            Программа курса по неделям и модулям
          </h2>
          <p className="mt-3 text-base text-[#615A4F] leading-relaxed">
            Пошаговый план, где каждая неделя даёт измеримый практический навык в языке
            и заметный прирост ясности и скорости мышления.
          </p>
        </div>

        {/* Module Tabs Selector */}
        <div className="flex flex-col sm:flex-row items-stretch justify-center gap-3 mb-8">
          {SYLLABUS_MODULES.map((module) => {
            const isActive = module.id === activeModuleId;
            return (
              <button
                key={module.id}
                onClick={() => {
                  setActiveModuleId(module.id);
                  setExpandedWeek(module.weeks[0].weekNumber);
                }}
                className={`flex items-center gap-3.5 px-5 py-4 rounded-2xl text-left transition-all cursor-pointer border ${
                  isActive
                    ? 'bg-white border-[#A04F3F] text-[#24211E] shadow-sm ring-2 ring-[#A04F3F]/20'
                    : 'bg-[#ECE5D8] border-[#DEC FC0] text-[#635B4E] hover:bg-[#FAF7F2]'
                }`}
              >
                <div
                  className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 ${
                    isActive ? 'bg-[#A04F3F] text-white' : 'bg-[#DDD4C4] text-[#6E6557]'
                  }`}
                >
                  {getModuleIcon(module.iconName)}
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-bold uppercase tracking-wider text-[#A04F3F]">
                      Модуль {module.moduleNumber}
                    </span>
                    <span className="text-sm text-[#7A7164]">({module.weeksSpan})</span>
                  </div>
                  <h4 className="text-sm font-bold text-[#2A241E] font-serif-heading leading-snug mt-0.5">
                    {module.title}
                  </h4>
                </div>
              </button>
            );
          })}
        </div>

        {/* Active Module Overview Card */}
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#E2D8C8] shadow-sm mb-8">
          <div className="max-w-3xl">
            <span className="text-sm font-bold text-[#A04F3F] uppercase tracking-wider">
              Фокус модуля {activeModule.moduleNumber}: {activeModule.weeksSpan}
            </span>
            <h3 className="text-xl sm:text-2xl font-bold text-[#24211E] font-serif-heading mt-1">
              {activeModule.tagline}
            </h3>
            <p className="text-sm text-[#5E5649] mt-2 leading-relaxed">
              {activeModule.summary}
            </p>
          </div>

          {/* Weeks Accordions */}
          <div className="mt-8 space-y-4">
            {activeModule.weeks.map((week) => {
              const isExpanded = expandedWeek === week.weekNumber;
              return (
                <div
                  key={week.weekNumber}
                  className={`rounded-2xl border transition-all overflow-hidden ${
                    isExpanded
                      ? 'bg-[#FAF8F3] border-[#A04F3F]/40 shadow-xs'
                      : 'bg-white border-[#E6DDCE] hover:border-[#D8CDBC]'
                  }`}
                >
                  {/* Week Header */}
                  <button
                    onClick={() => setExpandedWeek(isExpanded ? 0 : week.weekNumber)}
                    className="w-full text-left p-4 sm:p-5 flex items-center justify-between gap-4 cursor-pointer"
                  >
                    <div className="flex items-start sm:items-center gap-3.5">
                      <span className="w-8 h-8 rounded-xl bg-[#F0E6D8] text-[#8E4A3B] font-mono text-sm font-bold flex items-center justify-center shrink-0">
                        {week.weekNumber < 10 ? `0${week.weekNumber}` : week.weekNumber}
                      </span>
                      <div>
                        <div className="flex flex-wrap items-center gap-2">
                          <span className="text-sm font-semibold text-[#8E4A3B]">Неделя {week.weekNumber}</span>
                          <span className="text-sm text-[#7A7163] hidden sm:inline">•</span>
                          <span className="text-sm text-[#6B6355]">{week.subtitle}</span>
                        </div>
                        <h4 className="text-lg sm:text-xl font-bold text-[#2A241E] font-serif-heading mt-0.5">
                          {week.title}
                        </h4>
                      </div>
                    </div>

                    <div className="w-8 h-8 rounded-full bg-[#F4EFE6] text-[#6B6254] flex items-center justify-center shrink-0">
                      {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                    </div>
                  </button>

                  {/* Week Expanded Content */}
                  {isExpanded && (
                    <div className="px-4 sm:px-6 pb-6 pt-2 border-t border-[#EBE3D6] space-y-4">
                      {/* Dual Outcome badges */}
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-2">
                        <div className="bg-white p-3.5 rounded-xl border border-[#E8DFC F]">
                          <span className="text-sm font-bold text-[#8E4A3B] uppercase tracking-wider block">
                            Когнитивный фокус:
                          </span>
                          <p className="text-sm sm:text-base text-[#4E473D] mt-0.5 font-medium">
                            {week.cognitiveFocus}
                          </p>
                        </div>

                        <div className="bg-white p-3.5 rounded-xl border border-[#E8DFC F]">
                          <span className="text-sm font-bold text-[#527056] uppercase tracking-wider block">
                            Языковой результат недели:
                          </span>
                          <p className="text-sm sm:text-base text-[#4E473D] mt-0.5 font-medium">
                            {week.languageOutcome}
                          </p>
                        </div>
                      </div>

                      {/* Topics List */}
                      <div>
                        <h5 className="text-sm font-bold text-[#736B5E] uppercase tracking-wider mb-2">
                          Темы практических уроков недели:
                        </h5>
                        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                          {week.topics.map((topic, tIdx) => (
                            <li key={tIdx} className="flex items-start gap-2 text-sm sm:text-base text-[#544D42]">
                              <CheckCircle2 className="w-4 h-4 text-[#8E4A3B] shrink-0 mt-0.5" />
                              <span>{topic}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Practical Homework */}
                      <div className="bg-[#F2ECE1] p-3 rounded-xl border border-[#E0D5C3] text-sm text-[#5C5346] flex items-center gap-2">
                        <span className="font-semibold text-[#3D372F]">Практическое задание:</span>
                        <span>{week.homework}</span>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Bottom Syllabus CTA */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 bg-[#EBE4D6] rounded-2xl p-6 border border-[#DDD3C2]">
          <div className="flex items-center gap-3 text-center sm:text-left">
            <Download className="w-6 h-6 text-[#A04F3F] shrink-0 hidden sm:block" />
            <div>
              <h4 className="text-base font-bold text-[#2A241E] font-serif-heading">
                Хотите изучить полную 24-страничную программу со всеми уроками?
              </h4>
              <p className="text-sm text-[#6B6254] mt-0.5">
                Скачайте подробный PDF-буклет с примерами когнитивных упражнений и расписанием.
              </p>
            </div>
          </div>

          <button
            onClick={onOpenGuideModal}
            className="bg-[#2D2A26] hover:bg-[#1A1816] text-[#F3EFE6] px-5 py-2.5 rounded-xl text-sm sm:text-base font-medium shrink-0 transition-colors flex items-center gap-2 cursor-pointer"
          >
            <Download className="w-4 h-4" />
            <span>Скачать программу (PDF)</span>
          </button>
        </div>
      </div>
    </section>
  );
};
