import React from 'react';
import { Heart, ShieldCheck, Mail, Phone, MessageSquare } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#24211E] text-[#D8D1C3] pt-14 pb-40 sm:pb-32 border-t border-[#38332E]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-10 pb-10 border-b border-[#3D3731]">
          {/* Col 1: Brand */}
          <div className="space-y-3">
            <span className="text-xl font-bold tracking-widest text-[#FAF6ED] font-serif-heading block">
              ЯСНЫЙ УМ
            </span>
            <p className="text-sm text-[#A8A092] leading-relaxed">
              12-недельный онлайн-курс изучения языков и поддержания ясности мышления для взрослых 45+.
              Автор методики — Мила Хабирова.
            </p>
            <div className="pt-1">
              <span className="text-sm text-[#8C8375] block">
                © {new Date().getFullYear()} Все права защищены.
              </span>
            </div>
          </div>

          {/* Col 2: Navigation */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-[#FAF6ED] mb-3">
              Разделы лендинга
            </h4>
            <ul className="space-y-2 text-sm text-[#B8B0A2]">
              <li><a href="#hero-section" className="hover:text-white transition-colors">Главная</a></li>
              <li><a href="#for-whom" className="hover:text-white transition-colors">Для кого курс</a></li>
              <li><a href="#methodology" className="hover:text-white transition-colors">Методика 3 ступеней</a></li>
              <li><a href="#program" className="hover:text-white transition-colors">Программа 12 недель</a></li>
              <li><a href="#pricing" className="hover:text-white transition-colors">Тарифы и стоимость</a></li>
              <li><a href="#reviews" className="hover:text-white transition-colors">Отзывы учеников</a></li>
            </ul>
          </div>

          {/* Col 3: Legal info */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-[#FAF6ED] mb-3">
              Юридическая информация
            </h4>
            <ul className="space-y-2 text-sm text-[#A8A092]">
              <li>ИП Хабирова Л. М.</li>
              <li>ОГРНИП: 318774600123456</li>
              <li>ИНН: 772345678901</li>
              <li><a href="#" className="hover:text-white underline underline-offset-2">Публичная оферта</a></li>
              <li><a href="#" className="hover:text-white underline underline-offset-2">Политика конфиденциальности</a></li>
              <li><a href="#" className="hover:text-white underline underline-offset-2">Согласие на обработку данных</a></li>
            </ul>
          </div>

          {/* Col 4: Contacts & Support */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-[#FAF6ED] mb-3">
              Служба заботы
            </h4>
            <div className="space-y-2.5 text-sm text-[#B8B0A2]">
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-[#E5A882]" />
                <a href="mailto:support@yasnyum.ru" className="hover:text-white">
                  support@yasnyum.ru
                </a>
              </div>
              <div className="flex items-center gap-2">
                <MessageSquare className="w-3.5 h-3.5 text-[#E5A882]" />
                <a href="https://t.me/" target="_blank" rel="noopener noreferrer" className="hover:text-white">
                  Telegram: @yasnyum_support
                </a>
              </div>
              <p className="text-sm text-[#8C8375] pt-1 leading-relaxed">
                Режим работы поддержки: Пн-Вс с 09:00 до 20:00 (МСК)
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between text-sm text-[#8C8375] gap-3">
          <p>
            Образовательные материалы носят развивающий и общеобразовательный характер.
          </p>
          <div className="flex items-center gap-1 font-handwriting text-sm text-[#E0D5C1]">
            <span>Создано с заботой о ясности вашего ума</span>
            <Heart className="w-3 h-3 text-[#A04F3F] fill-[#A04F3F]" />
          </div>
        </div>
      </div>
    </footer>
  );
};
