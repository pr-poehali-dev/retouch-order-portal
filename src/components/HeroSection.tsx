import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

interface HeroSectionProps {
  scrollToSection: (sectionId: string) => void;
}

const HeroSection = ({ scrollToSection }: HeroSectionProps) => {
  return (
    <section id="home" className="py-20 md:py-32 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 animate-fade-in">
            <Badge className="inline-block">Профессиональная ретушь</Badge>
            <h1 className="text-4xl md:text-6xl font-heading font-bold leading-tight">
              Ретушь фотографий для гравировки
            </h1>
            <p className="text-lg text-muted-foreground">
              Превращаем ваши фотографии в идеальные изображения для гравировки на памятниках. 
              Современные технологии и мастерство художников для безупречного результата.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" onClick={() => scrollToSection('order')}>
                <Icon name="ShoppingCart" size={20} className="mr-2" />
                Заказать ретушь
              </Button>
              <Button size="lg" variant="outline" onClick={() => scrollToSection('portfolio')}>
                <Icon name="Eye" size={20} className="mr-2" />
                Примеры работ
              </Button>
            </div>
          </div>
          <div className="relative animate-scale-in">
            <img 
              src="https://cdn.poehali.dev/projects/df612b82-25ac-493e-9997-a9a644d2e97d/files/d57c2ee4-992d-4f2d-bb76-b78f8f2ce928.jpg" 
              alt="Пример ретуши" 
              className="rounded-lg shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
