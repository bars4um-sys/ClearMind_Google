import React, { useState } from 'react';
import { TARIFF_PLANS } from '../data/courseData';
import { X, Check, ShieldCheck, ArrowRight, Sparkles, CreditCard, Clock, Phone, Mail, User } from 'lucide-react';

interface ApplicationModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialTariffId?: string;
}

export const ApplicationModal: React.FC<ApplicationModalProps> = ({
  isOpen,
  onClose,
  initialTariffId = 'tariff-mentor',
}) => {
  const [selectedTariffId, setSelectedTariffId] = useState<string>(initialTariffId);
  const [paymentType, setPaymentType] = useState<'full' | 'split'>('full');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  if (!isOpen) return null;

  const selectedPlan = TARIFF_PLANS.find((p) => p.id === selectedTariffId) || TARIFF_PLANS[1];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 700);
  };

  const handleResetAndClose = () => {
    setIsSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/60 backdrop-blur-xs overflow-y-auto">
      <div className="relative w-full max-w-lg bg-white rounded-3xl p-6 sm:p-8 shadow-2xl border border-[#E4DBCB] my-8">
        {/* Close Button */}
        <button
          onClick={handleResetAndClose}
          className="absolute top-5 right-5 w-8 h-8 rounded-full bg-[#FAF7F2] text-[#6E6457] hover:bg-[#F2ECE1] flex items-center justify-center transition-colors cursor-pointer"
          aria-label="Закрыть"
        >
          <X className="w-4 h-4" />
        </button>

        {!isSubmitted ? (
          <div>
            <div className="mb-6">
              <span className="text-xs font-bold uppercase tracking-wider text-[#A04F3F] bg-[#F7EBE8] px-3 py-1 rounded-full">
                БРОНИРОВАНИЕ МЕСТА СО СКИДКОЙ 25%
              </span>
              <h3 className="text-2xl font-bold text-[#24211E] font-serif-heading mt-2">
                Запись на курс «Ясный ум»
              </h3>
              <p className="text-xs text-[#6E6558] mt-1">
                Старт потока — 15 сентября. Фиксация специальной цены и бонусов.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Tariff Picker */}
              <div>
                <label className="text-xs font-bold uppercase tracking-wider text-[#665E51] block mb-2">
                  Выберите тариф:
                </label>
                <div className="grid grid-cols-3 gap-2">
                  {TARIFF_PLANS.map((plan) => (
                    <button
                      key={plan.id}
                      type="button"
                      onClick={() => setSelectedTariffId(plan.id)}
                      className={`p-2.5 rounded-xl text-left border transition-all cursor-pointer ${
                        selectedTariffId === plan.id
                          ? 'bg-[#F4EDE2] border-[#A04F3F] text-[#24211E] ring-1 ring-[#A04F3F]'
                          : 'bg-[#FAF8F4] border-[#E6DDCE] text-[#696154] hover:bg-[#F2ECE1]'
                      }`}
                    >
                      <span className="text-[11px] font-bold block truncate">{plan.name}</span>
                      <span className="text-xs font-semibold text-[#8E4A3B]">
                        {paymentType === 'full'
                          ? `${plan.currentPrice.toLocaleString('ru-RU')} ₽`
                          : `${plan.installmentPrice} ₽/мес`}
                      </span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Payment Type Switch */}
              <div className="flex bg-[#F2ECE1] p-1 rounded-xl border border-[#E0D5C3]">
                <button
                  type="button"
                  onClick={() => setPaymentType('full')}
                  className={`flex-1 py-1.5 rounded-lg text-xs font-medium transition-all cursor-pointer ${
                    paymentType === 'full' ? 'bg-white text-[#24211E] shadow-xs' : 'text-[#696154]'
                  }`}
                >
                  Оплата целиком со скидкой
                </button>
                <button
                  type="button"
                  onClick={() => setPaymentType('split')}
                  className={`flex-1 py-1.5 rounded-lg text-xs font-medium transition-all cursor-pointer ${
                    paymentType === 'split' ? 'bg-white text-[#24211E] shadow-xs' : 'text-[#696154]'
                  }`}
                >
                  Рассрочка 0% (без переплат)
                </button>
              </div>

              {/* Contact Inputs */}
              <div className="space-y-3 pt-1">
                <div>
                  <label className="text-xs font-medium text-[#4D473D] block mb-1">
                    Ваше имя:
                  </label>
                  <div className="relative">
                    <User className="w-4 h-4 text-[#A1988A] absolute left-3 top-1/2 -translate-y-1/2" />
                    <input
                      type="text"
                      required
                      placeholder="Например, Елена Васильева"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full pl-9 pr-3 py-2.5 rounded-xl border border-[#E0D5C3] text-sm focus:outline-none focus:border-[#A04F3F] focus:ring-1 focus:ring-[#A04F3F] bg-[#FAF8F4]"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-xs font-medium text-[#4D473D] block mb-1">
                    Номер телефона (для Telegram / WhatsApp):
                  </label>
                  <div className="relative">
                    <Phone className="w-4 h-4 text-[#A1988A] absolute left-3 top-1/2 -translate-y-1/2" />
                    <input
                      type="tel"
                      required
                      placeholder="+7 (999) 000-00-00"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full pl-9 pr-3 py-2.5 rounded-xl border border-[#E0D5C3] text-sm focus:outline-none focus:border-[#A04F3F] focus:ring-1 focus:ring-[#A04F3F] bg-[#FAF8F4]"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-xs font-medium text-[#4D473D] block mb-1">
                    Электронная почта (для доступа к платформе):
                  </label>
                  <div className="relative">
                    <Mail className="w-4 h-4 text-[#A1988A] absolute left-3 top-1/2 -translate-y-1/2" />
                    <input
                      type="email"
                      required
                      placeholder="elena@mail.ru"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full pl-9 pr-3 py-2.5 rounded-xl border border-[#E0D5C3] text-sm focus:outline-none focus:border-[#A04F3F] focus:ring-1 focus:ring-[#A04F3F] bg-[#FAF8F4]"
                    />
                  </div>
                </div>
              </div>

              {/* Submit CTA */}
              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-[#A04F3F] hover:bg-[#8B3F31] disabled:opacity-50 text-white py-3.5 rounded-xl font-medium text-sm shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  {isSubmitting ? (
                    <span>Оформление брони...</span>
                  ) : (
                    <>
                      <span>
                        Забронировать место за{' '}
                        {paymentType === 'full'
                          ? `${selectedPlan.currentPrice.toLocaleString('ru-RU')} ₽`
                          : `${selectedPlan.installmentPrice} ₽/мес`}
                      </span>
                      <ArrowRight className="w-4 h-4" />
                    </>
                  )}
                </button>
              </div>

              {/* Guarantees */}
              <div className="flex items-center justify-center gap-2 text-[11px] text-[#7A7163] pt-1">
                <ShieldCheck className="w-4 h-4 text-[#527056]" />
                <span>100% гарантия возврата 14 дней • Безопасные платежи</span>
              </div>
            </form>
          </div>
        ) : (
          /* Submission Success State */
          <div className="text-center py-6 space-y-4">
            <div className="w-14 h-14 rounded-full bg-[#E5EFE4] text-[#476C4B] flex items-center justify-center mx-auto">
              <Check className="w-7 h-7" />
            </div>
            <h3 className="text-2xl font-bold text-[#24211E] font-serif-heading">
              Место успешно забронировано!
            </h3>
            <p className="text-xs sm:text-sm text-[#5E5649] leading-relaxed">
              Спасибо, <span className="font-semibold text-[#24211E]">{name || 'дорогой участник'}</span>!
              Мы отправили на ваш email <span className="font-semibold">{email || 'почту'}</span> подтверждение бронирования и инструкцию по входу в личный кабинет.
            </p>
            <div className="bg-[#FAF7F2] p-4 rounded-2xl border border-[#E6DDCE] text-xs text-[#635B4E]">
              В течение 15 минут куратор заботы свяжется с вами в Telegram/WhatsApp для уточнения деталей.
            </div>
            <button
              onClick={handleResetAndClose}
              className="bg-[#2D2A26] hover:bg-[#1A1816] text-white px-6 py-2.5 rounded-xl text-xs font-medium cursor-pointer"
            >
              Вернуться к лендингу
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
