import React, { useState } from 'react';
import { TARIFF_PLANS } from '../data/courseData';
import { Check, X, Sparkles, ShieldCheck, ArrowRight, Clock, HelpCircle } from 'lucide-react';

interface PricingSectionProps {
  onOpenApplyModal: (tariffId?: string) => void;
}

export const PricingSection: React.FC<PricingSectionProps> = ({ onOpenApplyModal }) => {
  const [paymentMode, setPaymentMode] = useState<'full' | 'split'>('full');

  return (
    <section id="pricing" className="py-14 sm:py-24 bg-[#F4EFE6] border-t border-[#E5DEC F]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-[#A04F3F] bg-[#E8DDD0] px-3.5 py-1 rounded-full mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>ТАРИФЫ И УСЛОВИЯ УЧАСТИЯ</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-[#24211E] font-serif-heading tracking-tight">
            Выберите удобный формат обучения
          </h2>
          <p className="mt-3 text-base text-[#615A4F] leading-relaxed">
            Ранняя регистрация даёт скидку до 25% и бронь места в мини-группе.
            Доступна беспроцентная рассрочка от банка без первого взноса.
          </p>
        </div>

        {/* Payment Mode Switcher */}
        <div className="flex justify-center mb-12">
          <div className="bg-[#E5DDD0] p-1 rounded-xl inline-flex items-center gap-1 border border-[#D8CEBF]">
            <button
              onClick={() => setPaymentMode('full')}
              className={`px-4 sm:px-6 py-2 rounded-lg text-sm sm:text-base font-medium transition-all cursor-pointer ${
                paymentMode === 'full'
                  ? 'bg-white text-[#24211E] shadow-xs'
                  : 'text-[#635B4E] hover:text-[#24211E]'
              }`}
            >
              Оплата сразу со скидкой
            </button>
            <button
              onClick={() => setPaymentMode('split')}
              className={`px-4 sm:px-6 py-2 rounded-lg text-sm sm:text-base font-medium transition-all cursor-pointer flex items-center gap-1.5 ${
                paymentMode === 'split'
                  ? 'bg-white text-[#24211E] shadow-xs'
                  : 'text-[#635B4E] hover:text-[#24211E]'
              }`}
            >
              <span>Беспроцентная рассрочка 0%</span>
              <span className="bg-[#A04F3F] text-white text-sm px-1.5 py-0.2 rounded font-bold">
                от 2 490 ₽/мес
              </span>
            </button>
          </div>
        </div>

        {/* 3 Pricing Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 items-stretch">
          {TARIFF_PLANS.map((plan) => {
            const isPopular = plan.isPopular;
            return (
              <div
                key={plan.id}
                className={`rounded-3xl p-6 sm:p-8 flex flex-col justify-between transition-all relative ${
                  isPopular
                    ? 'bg-white border-2 border-[#A04F3F] shadow-xl ring-4 ring-[#A04F3F]/10 z-10 lg:-translate-y-2'
                    : 'bg-[#FAF8F4] border border-[#E3D8C8] shadow-sm hover:border-[#D5C7B4]'
                }`}
              >
                {/* Popular Badge */}
                {plan.badge && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-[#A04F3F] text-white text-sm font-bold uppercase tracking-wider px-3.5 py-1 rounded-full shadow-xs">
                    {plan.badge}
                  </div>
                )}

                <div>
                  {/* Plan Name & Description */}
                  <div className="mb-4">
                    <h3 className="text-xl sm:text-2xl font-bold text-[#2A241E] font-serif-heading">
                      {plan.name}
                    </h3>
                    <p className="text-sm text-[#6E6557] mt-1 leading-relaxed min-h-[36px]">
                      {plan.description}
                    </p>
                  </div>

                  {/* Price Block */}
                  <div className="bg-[#F4EDE2] p-4 rounded-2xl mb-6 border border-[#E8DFC F]">
                    {paymentMode === 'full' ? (
                      <div>
                        <div className="flex items-baseline gap-2">
                          <span className="text-2xl sm:text-3xl font-bold text-[#2A241E] font-serif-heading">
                            {plan.currentPrice.toLocaleString('ru-RU')} ₽
                          </span>
                          <span className="text-sm sm:text-base text-[#8C8375] line-through">
                            {plan.originalPrice.toLocaleString('ru-RU')} ₽
                          </span>
                        </div>
                        <span className="text-sm text-[#527056] font-semibold mt-0.5 block">
                          Экономия {(plan.originalPrice - plan.currentPrice).toLocaleString('ru-RU')} ₽ при ранней оплате
                        </span>
                      </div>
                    ) : (
                      <div>
                        <div className="flex items-baseline gap-1.5">
                          <span className="text-2xl sm:text-3xl font-bold text-[#2A241E] font-serif-heading">
                            {plan.installmentPrice.toLocaleString('ru-RU')} ₽
                          </span>
                          <span className="text-sm text-[#736A5D]">/ месяц</span>
                        </div>
                        <span className="text-sm text-[#736A5D] mt-0.5 block">
                          Рассрочка 0% на {plan.installmentMonths} месяцев без первого взноса
                        </span>
                      </div>
                    )}
                  </div>

                  {/* Places counter */}
                  <div className="flex items-center gap-1.5 text-sm text-[#8E4A3B] font-medium mb-5">
                    <Clock className="w-3.5 h-3.5" />
                    <span>Осталось мест по спеццене: {plan.placesLeft}</span>
                  </div>

                  {/* Features List */}
                  <div className="space-y-3 mb-8">
                    <span className="text-sm font-bold text-[#7A7163] uppercase tracking-wider block">
                      Что входит в тариф:
                    </span>
                    <ul className="space-y-2.5">
                      {plan.features.map((feat, fIdx) => (
                        <li
                          key={fIdx}
                          className={`flex items-start gap-2.5 text-sm sm:text-base ${
                            feat.included
                              ? feat.highlight
                                ? 'text-[#24211E] font-semibold'
                                : 'text-[#4E473D]'
                              : 'text-[#A8A092] line-through opacity-70'
                          }`}
                        >
                          {feat.included ? (
                            <Check className="w-4 h-4 text-[#8E4A3B] shrink-0 mt-0.5" />
                          ) : (
                            <X className="w-4 h-4 text-[#BDB5A8] shrink-0 mt-0.5" />
                          )}
                          <span>{feat.text}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Card CTA Button */}
                <div>
                  <button
                    id={`pricing-plan-btn-${plan.id}`}
                    onClick={() => onOpenApplyModal(plan.id)}
                    className={`w-full py-3.5 rounded-xl font-medium text-sm transition-all flex items-center justify-center gap-2 cursor-pointer ${
                      isPopular
                        ? 'bg-[#A04F3F] hover:bg-[#8B3F31] text-white shadow-md hover:shadow-lg'
                        : 'bg-[#2D2A26] hover:bg-[#1C1A18] text-white'
                    }`}
                  >
                    <span>{plan.ctaText}</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>

                  <p className="text-sm text-center text-[#7F7668] mt-2.5">
                    100% гарантия возврата 14 дней
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Guarantee Bottom Bar */}
        <div className="mt-12 bg-white rounded-2xl p-6 sm:p-8 border border-[#E0D6C5] flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xs">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-2xl bg-[#E8EFE6] text-[#476C4B] flex items-center justify-center shrink-0">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-lg sm:text-xl font-bold text-[#24211E] font-serif-heading">
                100% гарантия спокойствия на 14 дней
              </h4>
              <p className="text-sm sm:text-base text-[#615A4F] mt-1 leading-relaxed max-w-2xl">
                Если в течение первых 14 дней курса вы почувствуете, что формат или методика вам не подходят,
                мы вернем вам деньги в полном объёме по первому запросу без лишних вопросов.
              </p>
            </div>
          </div>

          <div className="text-sm text-[#7A7163] text-center sm:text-right shrink-0">
            Безопасная оплата • СБП, Карты РФ и Зарубежные, Долями
          </div>
        </div>
      </div>
    </section>
  );
};
