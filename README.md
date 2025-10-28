# GENKOU STUDIO - Next.js Landing Page

Современный лендинг на Next.js 16 с TypeScript, TailwindCSS и Framer Motion.

## 🚀 Быстрый старт

### Установка зависимостей

```bash
npm install
```

### Локальный запуск

```bash
npm run dev
```

Откройте [http://localhost:3000](http://localhost:3000) в браузере.

### Сборка для продакшена

```bash
npm run build
npm start
```

## 📋 Структура проекта

```
genkou-studio-next/
├── app/                    # Next.js App Router
│   ├── layout.tsx         # Главный layout
│   ├── page.tsx           # Главная страница
│   └── globals.css        # Глобальные стили
├── components/            # React компоненты
│   ├── Header.tsx         # Шапка сайта с меню
│   ├── Hero.tsx           # Hero-секция с видео
│   ├── Cases.tsx          # Секция кейсов
│   ├── Estimate.tsx       # Условия работы
│   ├── ContactForm.tsx    # Форма обратной связи
│   └── Footer.tsx         # Футер
├── public/                # Статические файлы
│   └── images/           # Изображения
└── vercel.json           # Конфигурация Vercel
```

## 🔧 Настройка

### Formspree (для формы обратной связи)

1. Создайте аккаунт на [Formspree](https://formspree.io)
2. Создайте новую форму и скопируйте Form ID
3. Создайте файл `.env.local`:

```env
NEXT_PUBLIC_FORMSPREE_ID=your-formspree-form-id
```

### Альтернатива: EmailJS

Если хотите использовать EmailJS вместо Formspree, обновите `components/ContactForm.tsx`:

```typescript
const response = await emailjs.send(
  'YOUR_SERVICE_ID',
  'YOUR_TEMPLATE_ID',
  formData,
  'YOUR_PUBLIC_KEY'
);
```

## 🎨 Цветовая схема

- Фон: `#07131C` (темно-синий)
- Акцент: `#D7FB72` (желто-зеленый)
- SVG иконки: `#C62828` (красный)
- Вторичный фон: `#0F1A26`

## 📦 Технологии

- **Next.js 16** - React фреймворк
- **TypeScript** - типизация
- **TailwindCSS 4** - стилизация
- **Framer Motion** - анимации
- **Next/Image** - оптимизация изображений

## 🚢 Деплой на Vercel

### Автоматический деплой через GitHub

1. Создайте репозиторий на GitHub
2. Подключите проект к Vercel:
   ```bash
   # Установите Vercel CLI
   npm i -g vercel
   
   # Войдите в аккаунт
   vercel login
   
   # Задеплойте проект
   vercel
   ```

3. Или подключите GitHub репозиторий через [Vercel Dashboard](https://vercel.com)

### Настройки деплоя

- **Framework Preset**: Next.js
- **Build Command**: `npm run build`
- **Output Directory**: `.next`
- **Node Version**: 20.x
- **Install Command**: `npm install`

### Переменные окружения

В настройках проекта на Vercel добавьте:

```
NEXT_PUBLIC_FORMSPREE_ID=your-formspree-form-id
```

## 📝 Особенности

- ✅ SSR/SSG оптимизация
- ✅ Адаптивный дизайн (mobile-first)
- ✅ Плавные анимации с Framer Motion
- ✅ Оптимизация изображений через next/image
- ✅ SEO оптимизация
- ✅ Форма обратной связи
- ✅ Модальные окна для кейсов
- ✅ Плавная прокрутка
- ✅ Темная тема

## 📞 Контакты

- Телефон: +7 910 432 00 87
- Email: hello@genkoustudio.ru
- Сайт: https://genkoustudio.ru

## 📄 Лицензия

© 2024 GENKOU STUDIO. Все права защищены.
