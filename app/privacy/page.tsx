import Link from 'next/link';
import Footer from '@/components/Footer';
import NavBar from '@/components/NavBar';

export default function PrivacyPage() {
  return (
    <>
      <NavBar />
      <main className="pt-20 min-h-screen bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <h1 className="font-heading font-bold text-4xl mb-8 text-[#0C0C0C]">Политика конфиденциальности</h1>
          <div className="prose max-w-none text-gray-700 space-y-6">
            <p>
              Настоящая Политика конфиденциальности персональных данных (далее — Политика) действует
              в отношении всей информации, которую Оператор может получить о посетителях веб-сайта{' '}
              <Link href="https://genkoustudio.ru" className="text-[#C62828] hover:underline">
                https://genkoustudio.ru
              </Link>
              .
            </p>
            <h2 className="font-heading font-bold text-2xl text-[#0C0C0C] mt-8 mb-4">1. Общие положения</h2>
            <p>
              Использование сайта означает безоговорочное согласие пользователя с настоящей
              Политикой и указанными в ней условиями обработки его персональной информации; в случае
              несогласия с этими условиями пользователь должен воздержаться от использования данного
              ресурса.
            </p>
            <p>
              Настоящая Политика конфиденциальности применяется только к сайту{' '}
              <Link href="https://genkoustudio.ru" className="text-[#C62828] hover:underline">
                https://genkoustudio.ru
              </Link>
              . Сайт не контролирует и не несет ответственности за сайты третьих лиц, на которые
              Пользователь может перейти по ссылкам, доступным на данном сайте.
            </p>
            <h2 className="font-heading font-bold text-2xl text-[#0C0C0C] mt-8 mb-4">2. Обработка персональных данных</h2>
            <p>
              Оператор обрабатывает персональные данные Пользователей в целях предоставления услуг,
              а также в целях улучшения работы сайта и качества обслуживания Пользователей.
            </p>
            <h2 className="font-heading font-bold text-2xl text-[#0C0C0C] mt-8 mb-4">3. Согласие на обработку</h2>
            <p>
              Отправляя форму обратной связи, Пользователь дает согласие на обработку своих
              персональных данных в соответствии с настоящей Политикой конфиденциальности.
            </p>
            <h2 className="font-heading font-bold text-2xl text-[#0C0C0C] mt-8 mb-4">4. Контакты</h2>
            <p>
              По вопросам, связанным с обработкой персональных данных, вы можете связаться с нами:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Email: hello@genkoustudio.ru</li>
              <li>Телефон: +7 910 432 00 87</li>
            </ul>
          </div>
          <div className="mt-12">
            <Link
              href="/"
              className="text-[#C62828] hover:underline inline-flex items-center gap-2 font-medium"
            >
              ← Вернуться на главную
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
