import React from 'react';
import { motion } from 'framer-motion';
import { MessageSquare, Image, Video, CreditCard, Shield, Layers, Workflow } from 'lucide-react';

const features = [
  { icon: MessageSquare, text: 'Генерация текста', color: 'text-cyan-500' },
  { icon: Image, text: 'Генерация изображений', color: 'text-blue-500' },
  { icon: Video, text: 'Генерация видео', color: 'text-purple-500' },
  { icon: CreditCard, text: 'Интегрированные платежи', color: 'text-green-500' },
  { icon: Shield, text: 'Безопасность и роли', color: 'text-orange-500' },
  { icon: Workflow, text: 'Асинхронная обработка', color: 'text-pink-500' },
];

export default function RunaAISection() {
  return (
    <section className="relative py-32 px-4 bg-gradient-to-b from-[#0a0a0a] via-[#0a0a1a] to-[#0a0a0a]">
      <div className="max-w-6xl mx-auto">
        {/* Telegram-inspired geometric shapes */}
        <div className="absolute top-20 left-10 w-32 h-32 border-4 border-cyan-500/20 rotate-45" />
        <div className="absolute bottom-20 right-10 w-40 h-40 border-4 border-blue-500/20 rotate-12 rounded-full" />

        <div className="relative z-10">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-12"
            >
            <div className="flex items-center gap-4 mb-4">
              <MessageSquare className="w-6 h-6 text-cyan-500" />
              <span className="text-cyan-500 font-mono text-sm tracking-wider">PORTFOLIO_04</span>
            </div>
            <h2 className="text-4xl lg:text-6xl font-bold mb-3">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500">
                RUNA AI
              </span>
            </h2>
            <p className="text-xl text-gray-400 font-mono">Генерация контента</p>
            <div className="mt-6 inline-block">
              <div className="bg-gradient-to-r from-cyan-600 to-blue-600 text-white px-6 py-3 rounded-full text-sm font-semibold flex items-center gap-2">
                <MessageSquare className="w-4 h-4" />
                Telegram Mini App
              </div>
            </div>
          </motion.div>

          {/* Description */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-12 max-w-4xl mx-auto"
          >
            <div className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border-2 border-cyan-500/30 rounded-xl p-6">
              <p className="text-gray-300 leading-relaxed mb-4">
                Telegram-бот с веб-интерфейсом (MiniApp) для генерации AI-контента: текста, изображений и видео. 
                Пользователи взаимодействуют через бота или веб-приложение, выбирают модели, отправляют промпты и получают результаты. 
                Система маршрутизирует запросы к внешним провайдерам (OpenAI, Anthropic, Google, Replicate, Midjourney и др.), учитывает лимиты и стоимость.
              </p>
              <div className="space-y-2 text-sm text-gray-400">
                <p><span className="text-cyan-500 font-semibold">Бот (Telegram):</span> На aiogram v3, обрабатывает команды, FSM на Redis, throttling (2 rps), идемпотентность. Поддерживает потоковые ответы, вложения до 20 МБ.</p>
                <p><span className="text-cyan-500 font-semibold">API (Backend):</span> FastAPI для CRUD операций, маршрутизации запросов к провайдерам, S3 presign для загрузки файлов. Валидирует WebApp initData для авторизации.</p>
                <p><span className="text-cyan-500 font-semibold">MiniApp (Frontend):</span> Next.js 15 для управления настройками, просмотра диалогов и генерации контента.</p>
                <p><span className="text-cyan-500 font-semibold">База данных:</span> Tortoise ORM с PostgreSQL (prod) или SQLite (dev). Миграции через Aerich.</p>
                <p><span className="text-cyan-500 font-semibold">Очереди:</span> RabbitMQ (aio-pika) для асинхронных задач, таких как cleanup storage (удаление старых файлов S3).</p>
                <p><span className="text-cyan-500 font-semibold">Хранилище:</span> S3 (MinIO для dev) для вложений, с ретенцией 30 дней (видео — 7 дней). Presign URLs для загрузки/скачивания.</p>
              </div>
            </div>
          </motion.div>

          {/* Features grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-12">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: index * 0.08, ease: "easeOut" }}
                className="group relative"
              >
                {/* Card with gradient border effect */}
                <div className="relative bg-[#1a1a1a] border-2 border-cyan-500/20 rounded-xl p-6 hover:border-cyan-500/50 transition-all duration-300">
                  {/* Icon with glow */}
                  <div className="mb-4">
                    <div className={`w-14 h-14 rounded-xl bg-gradient-to-br from-cyan-500/20 to-blue-500/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                      <feature.icon className={`w-7 h-7 ${feature.color}`} />
                    </div>
                  </div>

                  {/* Text */}
                  <p className="text-gray-300 font-medium">{feature.text}</p>

                  {/* Animated corner */}
                  <motion.div
                    className="absolute top-2 right-2 w-8 h-8 border-t-2 border-r-2 border-cyan-500/30"
                    animate={{
                      scale: [1, 1.1, 1],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      delay: index * 0.2,
                    }}
                  />
                </div>

                {/* Hover glow */}
                <div className="absolute -inset-1 bg-gradient-to-r from-cyan-600/0 via-cyan-600/20 to-blue-600/0 rounded-xl opacity-0 group-hover:opacity-100 blur-lg transition-opacity duration-500 -z-10" />
              </motion.div>
            ))}
          </div>

          {/* Bottom highlight */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="relative"
          >
            <div className="bg-gradient-to-r from-cyan-600/20 via-blue-600/20 to-purple-600/20 border-2 border-cyan-500/30 rounded-xl p-8">
              <div className="flex items-start gap-4">
                <Layers className="w-8 h-8 text-cyan-500 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-bold text-white mb-3">
                    Архитектура корпоративного уровня
                  </h3>
                  <p className="text-gray-300 leading-relaxed mb-4">
                    Реализованы платежи, безопасность, роли доступа. 
                    Очередь задач и асинхронная обработка через брокер сообщений.
                  </p>
                  <div className="inline-flex items-center gap-2 bg-cyan-500/10 border border-cyan-500/30 rounded-full px-4 py-2">
                    <div className="w-2 h-2 bg-cyan-500 rounded-full animate-pulse" />
                    <span className="text-cyan-500 text-sm font-mono">
                      Готово к коммерческому использованию
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Decorative elements */}
            <div className="absolute -top-3 -left-3 w-20 h-20 border-t-4 border-l-4 border-cyan-500/30" />
            <div className="absolute -bottom-3 -right-3 w-20 h-20 border-b-4 border-r-4 border-blue-500/30" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}