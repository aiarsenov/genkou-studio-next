import Hero from '@/components/Hero';
import Approach from '@/components/Approach';
import Portfolio from '@/components/Portfolio';
import ContactForm from '@/components/ContactForm';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Hero />
      <Approach />
      <Portfolio />
      <ContactForm />
      <Footer />
    </main>
  );
}
