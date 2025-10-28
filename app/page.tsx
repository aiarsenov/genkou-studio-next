import Hero from '@/components/Hero';
import Cases from '@/components/Cases';
import Estimate from '@/components/Estimate';
import ContactForm from '@/components/ContactForm';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <Cases />
      <Estimate />
      <ContactForm />
      <Footer />
    </main>
  );
}
