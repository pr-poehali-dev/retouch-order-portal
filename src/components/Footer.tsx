import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

interface FooterProps {
  scrollToSection: (sectionId: string) => void;
}

const Footer = ({ scrollToSection }: FooterProps) => {
  return (
    <footer className="bg-muted/20 py-12 border-t">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Icon name="Image" size={24} className="text-primary" />
              <span className="font-heading font-bold">Ретушь для гравировки</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Профессиональная ретушь фотографий для памятников
            </p>
          </div>

          <div>
            <h4 className="font-heading font-semibold mb-4">Разделы</h4>
            <div className="space-y-2 text-sm">
              <button onClick={() => scrollToSection('services')} className="block hover:text-primary transition-colors">Услуги</button>
              <button onClick={() => scrollToSection('portfolio')} className="block hover:text-primary transition-colors">Портфолио</button>
              <button onClick={() => scrollToSection('prices')} className="block hover:text-primary transition-colors">Цены</button>
              <button onClick={() => scrollToSection('faq')} className="block hover:text-primary transition-colors">FAQ</button>
            </div>
          </div>

          <div>
            <h4 className="font-heading font-semibold mb-4">Контакты</h4>
            <div className="space-y-2 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Icon name="Phone" size={16} />
                <span>+7 (999) 123-45-67</span>
              </div>
              <div className="flex items-center gap-2">
                <Icon name="Mail" size={16} />
                <span>info@retouch.ru</span>
              </div>
              <div className="flex items-center gap-2">
                <Icon name="Clock" size={16} />
                <span>Пн-Вс: 9:00 - 21:00</span>
              </div>
            </div>
          </div>

          <div>
            <h4 className="font-heading font-semibold mb-4">Соцсети</h4>
            <div className="flex gap-4">
              <Button variant="outline" size="icon">
                <Icon name="MessageCircle" size={20} />
              </Button>
              <Button variant="outline" size="icon">
                <Icon name="Instagram" size={20} />
              </Button>
              <Button variant="outline" size="icon">
                <Icon name="Send" size={20} />
              </Button>
            </div>
          </div>
        </div>

        <div className="border-t mt-8 pt-8 text-center text-sm text-muted-foreground">
          <p>© 2024 Ретушь для гравировки. Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
