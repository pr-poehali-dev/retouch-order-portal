import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';

interface OrderSectionProps {
  handleOrderSubmit: (e: React.FormEvent) => void;
}

const OrderSection = ({ handleOrderSubmit }: OrderSectionProps) => {
  return (
    <section id="order" className="py-20 bg-muted/20">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">Оформить заказ</h2>
            <p className="text-muted-foreground">
              Заполните форму, и мы свяжемся с вами в ближайшее время
            </p>
          </div>

          <Card>
            <CardContent className="pt-6">
              <form onSubmit={handleOrderSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Имя *</Label>
                    <Input id="name" placeholder="Ваше имя" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Телефон *</Label>
                    <Input id="phone" type="tel" placeholder="+7 (___) ___-__-__" required />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email-order">Email *</Label>
                  <Input id="email-order" type="email" placeholder="mail@example.com" required />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="package">Пакет услуг *</Label>
                  <select 
                    id="package" 
                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                    required
                  >
                    <option value="">Выберите пакет</option>
                    <option value="basic">Базовая - 1500₽</option>
                    <option value="standard">Стандартная - 2500₽</option>
                    <option value="premium">Премиум - 4000₽</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="photo">Загрузить фотографию *</Label>
                  <Input id="photo" type="file" accept="image/*" required />
                  <p className="text-xs text-muted-foreground">Поддерживаемые форматы: JPG, PNG, TIFF (макс. 10 МБ)</p>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="comments">Комментарии к заказу</Label>
                  <Textarea 
                    id="comments" 
                    placeholder="Укажите особые пожелания или детали..." 
                    rows={4}
                  />
                </div>

                <Button type="submit" className="w-full" size="lg">
                  <Icon name="Send" size={20} className="mr-2" />
                  Отправить заказ
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default OrderSection;
