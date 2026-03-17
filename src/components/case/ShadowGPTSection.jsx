import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Shield,
  Lock,
  Eye,
  AlertTriangle,
  CheckCircle,
  XCircle,
  Send,
  Cpu,
  ChevronDown,
  ChevronUp,
  ExternalLink,
  Zap,
  Database,
  Globe,
  Building2,
  Code2,
  Banknote,
} from 'lucide-react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';

const SCREENSHOTS_COUNT = 3; // adjust when you add more images

const keyFeatures = [
  { icon: Lock, text: 'Перехват запросов на уровне браузера', color: 'text-red-400' },
  { icon: Cpu, text: 'Гибридная проверка: Regex + локальный AI', color: 'text-orange-400' },
  { icon: Database, text: 'Полностью локальная обработка данных', color: 'text-yellow-400' },
  { icon: Shield, text: 'Ноль передачи данных во внешние сервисы', color: 'text-red-500' },
];

const flowSteps = [
  { icon: Globe, label: 'Пользователь вводит запрос', desc: 'в ChatGPT, Claude и др.', color: 'text-gray-400' },
  { icon: Eye, label: 'ShadowGPT перехватывает', desc: 'на уровне браузера', color: 'text-orange-400' },
  { icon: Cpu, label: 'Локальный анализ', desc: 'Regex + встроенная AI-модель', color: 'text-yellow-400' },
  { icon: CheckCircle, label: '✅ Разрешает', desc: 'или', color: 'text-green-400' },
  { icon: XCircle, label: '🚫 Блокирует', desc: 'или', color: 'text-red-400' },
  { icon: Send, label: '📩 На согласование', desc: 'администратору', color: 'text-blue-400' },
];

const targets = [
  { icon: Building2, label: 'Компании с чувствительными данными' },
  { icon: Code2, label: 'Разработка (утечки кода и ключей)' },
  { icon: Banknote, label: 'Финансы, юриспруденция, SaaS' },
  { icon: Globe, label: 'Любой бизнес, внедряющий AI' },
];

const benefits = [
  'Исключает утечки через ChatGPT и другие LLM',
  'Соответствует требованиям GDPR и compliance',
  'Позволяет использовать AI без запретов и рисков',
  'Полный контроль над тем, что сотрудники отправляют в модели',
];

const threats = [
  'Клиентские данные',
  'Внутренние документы',
  'Исходный код',
  'API-ключи',
];

export default function ShadowGPTSection() {
  const [screenshotsOpen, setScreenshotsOpen] = useState(false);

  const screenshots = Array.from(
    { length: SCREENSHOTS_COUNT },
    (_, i) => `/images/shadow-gpt/${i + 1}.jpg`,
  );

  return (
    <section className="relative py-32 px-4">
      {/* Background glows */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-red-900/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-orange-900/10 rounded-full blur-3xl pointer-events-none" />
      {/* Scanline effect */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(255,255,255,0.5) 2px, rgba(255,255,255,0.5) 4px)',
        }}
      />

      <div className="max-w-6xl mx-auto relative z-10">

        {/* ── Header ── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <div className="flex items-center gap-4 mb-4">
            <Shield className="w-6 h-6 text-red-500" />
            <span className="text-red-500 font-mono text-sm tracking-wider">CASE_07</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-orange-500 to-yellow-500">
              🔐 ShadowGPT
            </span>
          </h2>
          <p className="text-xl text-gray-400 font-mono mb-2">firewall для AI-запросов сотрудников</p>
          <p className="text-gray-400 text-lg max-w-3xl leading-relaxed">
            Браузерное расширение, которое перехватывает и анализирует запросы сотрудников
            к LLM (ChatGPT, Claude и др.) и предотвращает утечку чувствительных данных
            в реальном времени — под полным контролем компании.
          </p>

          {/* Live badge + Link */}
          <div className="flex flex-wrap items-center gap-4 mt-6">
            <div className="flex items-center gap-2 bg-red-500/10 border border-red-500/30 rounded-full px-4 py-2">
              <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse" />
              <span className="text-red-400 text-sm font-mono">Активная защита</span>
            </div>
            <a
              href="https://console.shadowgpt.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-gradient-to-r from-red-600 to-orange-600 hover:from-red-500 hover:to-orange-500 text-white px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 shadow-lg shadow-red-900/40 hover:shadow-red-700/50 hover:scale-105"
            >
              <ExternalLink className="w-4 h-4" />
              Открыть консоль
            </a>
          </div>
        </motion.div>

        {/* ── Threat banner ── */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-8 bg-gradient-to-r from-red-950/60 to-orange-950/40 border-2 border-red-500/30 rounded-xl p-6"
        >
          <div className="flex items-start gap-4">
            <AlertTriangle className="w-6 h-6 text-red-500 flex-shrink-0 mt-0.5" />
            <div>
              <h3 className="text-red-400 font-bold mb-2 text-lg">⚠️ Проблема: Shadow AI</h3>
              <p className="text-gray-400 mb-3">
                Сотрудники уже используют AI — и отправляют туда:
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                {threats.map((t, i) => (
                  <div key={i} className="bg-red-500/10 border border-red-500/20 rounded-lg px-3 py-2 text-center">
                    <span className="text-red-300 text-sm font-medium">{t}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* ── Key features ── */}
        <div className="grid sm:grid-cols-2 gap-4 mb-8">
          {keyFeatures.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="bg-[#0f0f0f] border-2 border-red-500/15 rounded-xl p-5 hover:border-red-500/40 transition-all duration-300 group"
            >
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-red-500/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className={`w-5 h-5 ${feature.color}`} />
                </div>
                <span className="text-gray-300">{feature.text}</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* ── How it works flow ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-8"
        >
          <h3 className="text-xl font-bold text-white mb-5 flex items-center gap-2">
            <div className="w-1 h-6 bg-gradient-to-b from-red-500 to-orange-500" />
            ⚙️ Как это работает
          </h3>
          <div className="grid sm:grid-cols-3 lg:grid-cols-6 gap-3">
            {flowSteps.map((step, index) => (
              <div key={index} className="flex flex-col items-center text-center">
                <div className="w-10 h-10 rounded-full bg-[#0f0f0f] border-2 border-red-500/30 flex items-center justify-center mb-2">
                  <step.icon className={`w-4 h-4 ${step.color}`} />
                </div>
                <p className={`text-xs font-semibold ${step.color} mb-0.5`}>{step.label}</p>
                <p className="text-gray-500 text-xs">{step.desc}</p>
                {index < flowSteps.length - 1 && (
                  <div className="hidden lg:block absolute" />
                )}
              </div>
            ))}
          </div>
        </motion.div>

        {/* ── Two-column: Benefits + Targets ── */}
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          {/* Benefits */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-[#0f0f0f] border-2 border-red-500/20 rounded-xl p-6"
          >
            <h3 className="text-white font-bold mb-4 flex items-center gap-2">
              <Shield className="w-5 h-5 text-red-500" />
              🛡️ Что это даёт бизнесу
            </h3>
            <ul className="space-y-3">
              {benefits.map((b, i) => (
                <li key={i} className="flex items-start gap-3 text-gray-300 text-sm">
                  <CheckCircle className="w-4 h-4 text-green-500 shrink-0 mt-0.5" />
                  {b}
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Targets */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="bg-[#0f0f0f] border-2 border-orange-500/20 rounded-xl p-6"
          >
            <h3 className="text-white font-bold mb-4 flex items-center gap-2">
              <Zap className="w-5 h-5 text-orange-500" />
              🎯 Для кого
            </h3>
            <div className="space-y-3">
              {targets.map((t, i) => (
                <div key={i} className="flex items-center gap-3 bg-orange-500/5 border border-orange-500/15 rounded-lg px-4 py-2.5">
                  <t.icon className="w-4 h-4 text-orange-400 shrink-0" />
                  <span className="text-gray-300 text-sm">{t.label}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* ── Pitch card ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mb-8 relative border-l-4 border-red-500 bg-gradient-to-r from-red-500/10 to-transparent p-6 rounded-r-xl"
        >
          <p className="text-gray-300 leading-relaxed text-lg">
            <span className="text-red-400 font-bold">ShadowGPT</span> — это локальный AI-файрвол для prompt'ов.{' '}
            Он проверяет каждый запрос с помощью{' '}
            <span className="text-orange-400 font-semibold">regex</span> и{' '}
            <span className="text-orange-400 font-semibold">встроенной модели</span>{' '}
            прямо в браузере — без передачи данных наружу.
          </p>
        </motion.div>

        {/* ── Screenshots accordion ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="bg-[#0f0f0f] border-2 border-red-500/25 rounded-xl overflow-hidden">
            <button
              onClick={() => setScreenshotsOpen((v) => !v)}
              className="w-full p-6 flex items-center justify-between text-left group hover:bg-red-500/5 transition-colors duration-300"
            >
              <div className="flex items-center gap-3">
                <Eye className="w-6 h-6 text-red-500" />
                <span className="text-xl font-bold text-white">Скриншоты интерфейса</span>
                <span className="text-gray-500 text-sm font-mono">(нажмите, чтобы раскрыть)</span>
              </div>
              <div className="text-red-500">
                {screenshotsOpen ? <ChevronUp className="w-6 h-6" /> : <ChevronDown className="w-6 h-6" />}
              </div>
            </button>

            <AnimatePresence>
              {screenshotsOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.35 }}
                  className="border-t-2 border-red-500/25 overflow-hidden"
                >
                  <div className="p-6">
                    <Carousel className="w-full">
                      <CarouselContent>
                        {screenshots.map((src, index) => (
                          <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                            <div className="p-1">
                              <div className="relative overflow-hidden rounded-lg border border-red-500/20 bg-[#0a0a0a] aspect-video">
                                <img
                                  src={src}
                                  alt={`ShadowGPT screenshot ${index + 1}`}
                                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                                  onError={(e) => {
                                    e.target.style.display = 'none';
                                    e.target.parentElement.classList.add('flex', 'items-center', 'justify-center');
                                    e.target.parentElement.innerHTML = `<span class="text-gray-600 text-sm font-mono">screenshot ${index + 1}</span>`;
                                  }}
                                />
                              </div>
                            </div>
                          </CarouselItem>
                        ))}
                      </CarouselContent>
                      <div className="flex justify-center gap-4 mt-4">
                        <CarouselPrevious className="static translate-y-0 bg-black/50 border-red-500/50 text-white hover:bg-red-500/30" />
                        <CarouselNext className="static translate-y-0 bg-black/50 border-red-500/50 text-white hover:bg-red-500/30" />
                      </div>
                    </Carousel>

                    {/* CTA inside accordion */}
                    <div className="mt-6 flex justify-center">
                      <a
                        href="https://shadowgpt.app/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 bg-gradient-to-r from-red-600 to-orange-600 hover:from-red-500 hover:to-orange-500 text-white px-6 py-3 rounded-full text-sm font-semibold transition-all duration-300 shadow-lg shadow-red-900/40 hover:scale-105"
                      >
                        <ExternalLink className="w-4 h-4" />
                        console.shadowgpt.app
                      </a>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
