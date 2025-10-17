import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Slider } from '@/components/ui/slider';
import { Switch } from '@/components/ui/switch';
import Icon from '@/components/ui/icon';

interface CalculatorSectionProps {
  photoCount: number;
  setPhotoCount: (value: number) => void;
  photoQuality: string;
  setPhotoQuality: (value: string) => void;
  restoration: boolean;
  setRestoration: (value: boolean) => void;
  urgentDelivery: boolean;
  setUrgentDelivery: (value: boolean) => void;
  aiEnhancement: boolean;
  setAiEnhancement: (value: boolean) => void;
  variants: number;
  setVariants: (value: number) => void;
  calculatePrice: () => number;
  scrollToSection: (sectionId: string) => void;
  onCalculate: () => void;
}

const CalculatorSection = ({
  photoCount,
  setPhotoCount,
  photoQuality,
  setPhotoQuality,
  restoration,
  setRestoration,
  urgentDelivery,
  setUrgentDelivery,
  aiEnhancement,
  setAiEnhancement,
  variants,
  setVariants,
  calculatePrice,
  scrollToSection,
  onCalculate
}: CalculatorSectionProps) => {
  return (
    <section id="calculator" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">Калькулятор стоимости</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Рассчитайте стоимость ретуши с учетом всех параметров
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <Card>
            <CardHeader>
              <CardTitle>Параметры заказа</CardTitle>
              <CardDescription>Настройте параметры для расчета стоимости</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label>Количество фотографий: {photoCount}</Label>
                  <Slider 
                    value={[photoCount]} 
                    onValueChange={(value) => setPhotoCount(value[0])}
                    min={1}
                    max={10}
                    step={1}
                    className="w-full"
                  />
                </div>

                <div className="space-y-2">
                  <Label>Качество обработки</Label>
                  <select 
                    value={photoQuality}
                    onChange={(e) => setPhotoQuality(e.target.value)}
                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                  >
                    <option value="low">Базовая обработка</option>
                    <option value="medium">Стандартная обработка</option>
                    <option value="high">Премиум обработка</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <Label>Количество вариантов: {variants}</Label>
                  <Slider 
                    value={[variants]} 
                    onValueChange={(value) => setVariants(value[0])}
                    min={1}
                    max={5}
                    step={1}
                    className="w-full"
                  />
                  <p className="text-xs text-muted-foreground">Получите несколько вариантов ретуши на выбор</p>
                </div>

                <div className="flex items-center justify-between p-4 border rounded-lg">
                  <div className="space-y-1">
                    <Label htmlFor="restoration">Реставрация старого фото</Label>
                    <p className="text-xs text-muted-foreground">+800₽ за фото</p>
                  </div>
                  <Switch 
                    id="restoration"
                    checked={restoration}
                    onCheckedChange={setRestoration}
                  />
                </div>

                <div className="flex items-center justify-between p-4 border rounded-lg">
                  <div className="space-y-1">
                    <Label htmlFor="urgent">Срочная обработка (1 день)</Label>
                    <p className="text-xs text-muted-foreground">+1000₽ к заказу</p>
                  </div>
                  <Switch 
                    id="urgent"
                    checked={urgentDelivery}
                    onCheckedChange={setUrgentDelivery}
                  />
                </div>

                {photoQuality === 'low' && (
                  <div className="flex items-center justify-between p-4 border rounded-lg">
                    <div className="space-y-1">
                      <Label htmlFor="ai">AI-улучшение</Label>
                      <p className="text-xs text-muted-foreground">+500₽ за фото</p>
                    </div>
                    <Switch 
                      id="ai"
                      checked={aiEnhancement}
                      onCheckedChange={setAiEnhancement}
                    />
                  </div>
                )}
              </div>
            </CardContent>
          </Card>

          <Card className="border-2 border-primary">
            <CardHeader>
              <CardTitle>Итоговая стоимость</CardTitle>
              <CardDescription>Расчет стоимости вашего заказа</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Базовая обработка</span>
                  <span className="font-medium">
                    {photoQuality === 'low' ? 1500 : photoQuality === 'medium' ? 2500 : 4000}₽ × {photoCount}
                  </span>
                </div>

                {restoration && (
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Реставрация</span>
                    <span className="font-medium">800₽ × {photoCount}</span>
                  </div>
                )}

                {urgentDelivery && (
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Срочная обработка</span>
                    <span className="font-medium">1000₽</span>
                  </div>
                )}

                {aiEnhancement && photoQuality === 'low' && (
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">AI-улучшение</span>
                    <span className="font-medium">500₽ × {photoCount}</span>
                  </div>
                )}

                {variants > 1 && (
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Дополнительные варианты</span>
                    <span className="font-medium">500₽ × {variants - 1} × {photoCount}</span>
                  </div>
                )}

                <div className="border-t pt-4">
                  <div className="flex justify-between items-center">
                    <span className="text-lg font-heading font-semibold">Итого:</span>
                    <span className="text-4xl font-heading font-bold text-primary">
                      {calculatePrice().toLocaleString('ru-RU')}₽
                    </span>
                  </div>
                </div>

                <div className="bg-muted/50 p-4 rounded-lg space-y-2">
                  <div className="flex items-start gap-2">
                    <Icon name="Clock" size={16} className="text-primary mt-0.5" />
                    <div className="text-sm">
                      <span className="font-medium">Срок выполнения: </span>
                      <span className="text-muted-foreground">
                        {urgentDelivery ? '1 день' : photoQuality === 'low' ? '1-2 дня' : photoQuality === 'medium' ? '2-3 дня' : '3-5 дней'}
                      </span>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <Icon name="CheckCircle" size={16} className="text-primary mt-0.5" />
                    <div className="text-sm">
                      <span className="font-medium">В стоимость входит: </span>
                      <span className="text-muted-foreground">
                        {variants} {variants === 1 ? 'вариант' : variants < 5 ? 'варианта' : 'вариантов'}, 1 бесплатная правка
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <Button 
                className="w-full" 
                size="lg"
                onClick={() => {
                  scrollToSection('order');
                  onCalculate();
                }}
              >
                <Icon name="ShoppingCart" size={20} className="mr-2" />
                Оформить заказ за {calculatePrice().toLocaleString('ru-RU')}₽
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default CalculatorSection;
