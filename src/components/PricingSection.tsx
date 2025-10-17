import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

interface PricingSectionProps {
  scrollToSection: (sectionId: string) => void;
}

const PricingSection = ({ scrollToSection }: PricingSectionProps) => {
  return (
    <section id="prices" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">Цены на услуги</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Прозрачное ценообразование без скрытых платежей
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          <Card className="border-2">
            <CardHeader>
              <CardTitle className="text-2xl">Базовая</CardTitle>
              <CardDescription>Для простых фотографий</CardDescription>
              <div className="mt-4">
                <span className="text-4xl font-bold">1500₽</span>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <div className="flex items-start gap-2">
                  <Icon name="Check" size={20} className="text-primary mt-0.5" />
                  <span className="text-sm">Базовая цветокоррекция</span>
                </div>
                <div className="flex items-start gap-2">
                  <Icon name="Check" size={20} className="text-primary mt-0.5" />
                  <span className="text-sm">Удаление мелких дефектов</span>
                </div>
                <div className="flex items-start gap-2">
                  <Icon name="Check" size={20} className="text-primary mt-0.5" />
                  <span className="text-sm">Повышение резкости</span>
                </div>
                <div className="flex items-start gap-2">
                  <Icon name="Check" size={20} className="text-primary mt-0.5" />
                  <span className="text-sm">Срок: 1-2 дня</span>
                </div>
              </div>
              <Button className="w-full" variant="outline" onClick={() => scrollToSection('order')}>
                Выбрать
              </Button>
            </CardContent>
          </Card>

          <Card className="border-2 border-primary shadow-lg scale-105">
            <CardHeader>
              <Badge className="w-fit mb-2">Популярный</Badge>
              <CardTitle className="text-2xl">Стандартная</CardTitle>
              <CardDescription>Оптимальный выбор</CardDescription>
              <div className="mt-4">
                <span className="text-4xl font-bold">2500₽</span>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <div className="flex items-start gap-2">
                  <Icon name="Check" size={20} className="text-primary mt-0.5" />
                  <span className="text-sm">Все из базовой</span>
                </div>
                <div className="flex items-start gap-2">
                  <Icon name="Check" size={20} className="text-primary mt-0.5" />
                  <span className="text-sm">Детальная ретушь лица</span>
                </div>
                <div className="flex items-start gap-2">
                  <Icon name="Check" size={20} className="text-primary mt-0.5" />
                  <span className="text-sm">Регулировка глубины</span>
                </div>
                <div className="flex items-start gap-2">
                  <Icon name="Check" size={20} className="text-primary mt-0.5" />
                  <span className="text-sm">AI-улучшение качества</span>
                </div>
                <div className="flex items-start gap-2">
                  <Icon name="Check" size={20} className="text-primary mt-0.5" />
                  <span className="text-sm">Срок: 2-3 дня</span>
                </div>
              </div>
              <Button className="w-full" onClick={() => scrollToSection('order')}>
                Выбрать
              </Button>
            </CardContent>
          </Card>

          <Card className="border-2">
            <CardHeader>
              <CardTitle className="text-2xl">Премиум</CardTitle>
              <CardDescription>Максимальное качество</CardDescription>
              <div className="mt-4">
                <span className="text-4xl font-bold">4000₽</span>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <div className="flex items-start gap-2">
                  <Icon name="Check" size={20} className="text-primary mt-0.5" />
                  <span className="text-sm">Все из стандартной</span>
                </div>
                <div className="flex items-start gap-2">
                  <Icon name="Check" size={20} className="text-primary mt-0.5" />
                  <span className="text-sm">Реставрация старых фото</span>
                </div>
                <div className="flex items-start gap-2">
                  <Icon name="Check" size={20} className="text-primary mt-0.5" />
                  <span className="text-sm">Ручная доработка мастером</span>
                </div>
                <div className="flex items-start gap-2">
                  <Icon name="Check" size={20} className="text-primary mt-0.5" />
                  <span className="text-sm">3 варианта на выбор</span>
                </div>
                <div className="flex items-start gap-2">
                  <Icon name="Check" size={20} className="text-primary mt-0.5" />
                  <span className="text-sm">Срок: 3-5 дней</span>
                </div>
              </div>
              <Button className="w-full" variant="outline" onClick={() => scrollToSection('order')}>
                Выбрать
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
