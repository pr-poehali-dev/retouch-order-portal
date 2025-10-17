import { useState } from 'react';
import { useToast } from '@/hooks/use-toast';
import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import ServicesSection from '@/components/ServicesSection';
import PortfolioSection from '@/components/PortfolioSection';
import PricingSection from '@/components/PricingSection';
import CalculatorSection from '@/components/CalculatorSection';
import OrderSection from '@/components/OrderSection';
import FAQSection from '@/components/FAQSection';
import Footer from '@/components/Footer';

const Index = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const { toast } = useToast();

  const [photoCount, setPhotoCount] = useState(1);
  const [photoQuality, setPhotoQuality] = useState('medium');
  const [restoration, setRestoration] = useState(false);
  const [urgentDelivery, setUrgentDelivery] = useState(false);
  const [aiEnhancement, setAiEnhancement] = useState(true);
  const [variants, setVariants] = useState(1);

  const calculatePrice = () => {
    let basePrice = 0;
    
    switch(photoQuality) {
      case 'low':
        basePrice = 1500;
        break;
      case 'medium':
        basePrice = 2500;
        break;
      case 'high':
        basePrice = 4000;
        break;
    }

    let totalPrice = basePrice * photoCount;

    if (restoration) totalPrice += 800 * photoCount;
    if (urgentDelivery) totalPrice += 1000;
    if (aiEnhancement && photoQuality === 'low') totalPrice += 500 * photoCount;
    if (variants > 1) totalPrice += (variants - 1) * 500 * photoCount;

    return totalPrice;
  };

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleOrderSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Заказ отправлен!",
      description: "Мы свяжемся с вами в ближайшее время.",
    });
  };

  const handleLogin = () => {
    toast({ title: "Вы вошли в систему" });
  };

  const handleCalculate = () => {
    toast({
      title: "Переход к оформлению",
      description: `Стоимость: ${calculatePrice().toLocaleString('ru-RU')}₽`,
    });
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation 
        isLoggedIn={isLoggedIn}
        setIsLoggedIn={setIsLoggedIn}
        scrollToSection={scrollToSection}
        onLogin={handleLogin}
      />

      <HeroSection scrollToSection={scrollToSection} />

      <ServicesSection />

      <PortfolioSection />

      <PricingSection scrollToSection={scrollToSection} />

      <CalculatorSection 
        photoCount={photoCount}
        setPhotoCount={setPhotoCount}
        photoQuality={photoQuality}
        setPhotoQuality={setPhotoQuality}
        restoration={restoration}
        setRestoration={setRestoration}
        urgentDelivery={urgentDelivery}
        setUrgentDelivery={setUrgentDelivery}
        aiEnhancement={aiEnhancement}
        setAiEnhancement={setAiEnhancement}
        variants={variants}
        setVariants={setVariants}
        calculatePrice={calculatePrice}
        scrollToSection={scrollToSection}
        onCalculate={handleCalculate}
      />

      <OrderSection handleOrderSubmit={handleOrderSubmit} />

      <FAQSection />

      <Footer scrollToSection={scrollToSection} />
    </div>
  );
};

export default Index;
