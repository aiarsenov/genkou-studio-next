# Инструкция по деплою

## 🚀 Деплой на Vercel

### Вариант 1: Автоматический деплой через GitHub

1. **Создайте репозиторий на GitHub:**
   ```bash
   # Если у вас еще нет репозитория на GitHub
   gh repo create genkou-studio-next --public
   ```

2. **Запушьте код:**
   ```bash
   git remote add origin https://github.com/YOUR_USERNAME/genkou-studio-next.git
   git branch -M main
   git push -u origin main
   ```

3. **Подключите к Vercel:**
   - Перейдите на https://vercel.com
   - Войдите в аккаунт (или создайте)
   - Нажмите "Add New Project"
   - Импортируйте репозиторий `genkou-studio-next`
   - Настройки:
     - Framework Preset: Next.js
     - Build Command: `npm run build`
     - Output Directory: `.next`
     - Node Version: 20.x
   - Добавьте переменную окружения:
     ```
     NEXT_PUBLIC_FORMSPREE_ID=your-formspree-form-id
     ```
   - Нажмите "Deploy"

### Вариант 2: Деплой через Vercel CLI

```bash
# Установите Vercel CLI (если еще не установлен)
npm i -g vercel

# Войдите в аккаунт
vercel login

# Задеплойте проект
vercel

# Для продакшена
vercel --prod
```

## 📝 Настройка Formspree

1. Перейдите на https://formspree.io
2. Создайте аккаунт (бесплатный план позволяет 50 отправок/месяц)
3. Создайте новую форму
4. Скопируйте Form ID
5. Добавьте в переменные окружения Vercel:
   ```
   NEXT_PUBLIC_FORMSPREE_ID=your-form-id-here
   ```

## ✅ Что дальше?

После деплоя:
- Сайт будет доступен по адресу: `https://genkou-studio-next.vercel.app`
- При каждом пуше в `main` ветку будет автоматический деплой
- Настройте кастомный домен в настройках проекта Vercel

## 🎨 Дополнительные настройки

- **Фавикон:** Замените `app/favicon.ico` на свой
- **Мета-теги:** Обновите `app/layout.tsx` если нужно
- **Цвета:** Настройте в `app/globals.css`

