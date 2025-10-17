import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { Slider } from '@/components/ui/slider';
import { Switch } from '@/components/ui/switch';

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

  return (
    <div className="min-h-screen bg-background">
      <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b">
        <div className="container mx-auto px-4">
          <div className="flex h-16 items-center justify-between">
            <div className="flex items-center gap-2">
              <Icon name="Image" size={28} className="text-primary" />
              <span className="text-xl font-heading font-bold">Ретушь для гравировки</span>
            </div>
            
            <div className="hidden md:flex items-center gap-6">
              <button onClick={() => scrollToSection('home')} className="text-sm font-medium hover:text-primary transition-colors">Главная</button>
              <button onClick={() => scrollToSection('services')} className="text-sm font-medium hover:text-primary transition-colors">Услуги</button>
              <button onClick={() => scrollToSection('portfolio')} className="text-sm font-medium hover:text-primary transition-colors">Портфолио</button>
              <button onClick={() => scrollToSection('prices')} className="text-sm font-medium hover:text-primary transition-colors">Цены</button>
              <button onClick={() => scrollToSection('calculator')} className="text-sm font-medium hover:text-primary transition-colors">Калькулятор</button>
              <button onClick={() => scrollToSection('faq')} className="text-sm font-medium hover:text-primary transition-colors">FAQ</button>
              <Dialog>
                <DialogTrigger asChild>
                  <Button variant={isLoggedIn ? "outline" : "default"}>
                    <Icon name={isLoggedIn ? "User" : "LogIn"} size={16} className="mr-2" />
                    {isLoggedIn ? "Профиль" : "Войти"}
                  </Button>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>Вход в личный кабинет</DialogTitle>
                    <DialogDescription>Введите ваши данные для доступа к заказам</DialogDescription>
                  </DialogHeader>
                  <div className="space-y-4">
                    <div>
                      <Label htmlFor="email">Email</Label>
                      <Input id="email" type="email" placeholder="mail@example.com" />
                    </div>
                    <div>
                      <Label htmlFor="password">Пароль</Label>
                      <Input id="password" type="password" />
                    </div>
                    <Button className="w-full" onClick={() => {
                      setIsLoggedIn(true);
                      toast({ title: "Вы вошли в систему" });
                    }}>Войти</Button>
                  </div>
                </DialogContent>
              </Dialog>
            </div>
          </div>
        </div>
      </nav>

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

      <section id="services" className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">Наши услуги</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Комплексная обработка фотографий с учетом всех особенностей гравировки
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Icon name="Sparkles" size={24} className="text-primary" />
                </div>
                <CardTitle>Улучшение деталей</CardTitle>
                <CardDescription>
                  Повышение четкости, детализации и контраста для идеального результата гравировки
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Icon name="Eraser" size={24} className="text-primary" />
                </div>
                <CardTitle>Исправление дефектов</CardTitle>
                <CardDescription>
                  Удаление царапин, пятен, шумов и других недостатков с сохранением естественности
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Icon name="Layers" size={24} className="text-primary" />
                </div>
                <CardTitle>Регулировка глубины</CardTitle>
                <CardDescription>
                  Настройка объема и текстуры для создания реалистичного эффекта на граните
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Icon name="Palette" size={24} className="text-primary" />
                </div>
                <CardTitle>Цветокоррекция</CardTitle>
                <CardDescription>
                  Преобразование в оптимальную черно-белую гамму для лазерной гравировки
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Icon name="Users" size={24} className="text-primary" />
                </div>
                <CardTitle>Работа с портретами</CardTitle>
                <CardDescription>
                  Специализированная обработка лиц с сохранением узнаваемости и достоинства
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Icon name="Cpu" size={24} className="text-primary" />
                </div>
                <CardTitle>AI-технологии</CardTitle>
                <CardDescription>
                  Использование нейросетей последнего поколения для максимального качества
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      <section id="portfolio" className="py-20 bg-muted/20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">Портфолио работ</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Примеры наших работ: до и после ретуши
            </p>
          </div>

          <Tabs defaultValue="portraits" className="w-full">
            <TabsList className="grid w-full max-w-md mx-auto grid-cols-3 mb-8">
              <TabsTrigger value="portraits">Портреты</TabsTrigger>
              <TabsTrigger value="restoration">Реставрация</TabsTrigger>
              <TabsTrigger value="engraving">Гравировка</TabsTrigger>
            </TabsList>
            
            <TabsContent value="portraits" className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-sm text-muted-foreground">До обработки</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <img 
                      src="https://cdn.poehali.dev/projects/df612b82-25ac-493e-9997-a9a644d2e97d/files/645158b7-81da-4503-b098-c47ac8e539f4.jpg" 
                      alt="До" 
                      className="rounded-lg w-full"
                    />
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle className="text-sm text-muted-foreground">После обработки</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <img 
                      src="https://cdn.poehali.dev/projects/df612b82-25ac-493e-9997-a9a644d2e97d/files/365cd381-67e5-4705-a30a-3917fe3151ed.jpg" 
                      alt="После" 
                      className="rounded-lg w-full"
                    />
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
            
            <TabsContent value="restoration" className="space-y-6">
              <div className="text-center py-12 text-muted-foreground">
                <Icon name="Image" size={48} className="mx-auto mb-4 opacity-50" />
                <p>Примеры реставрации старых фотографий</p>
              </div>
            </TabsContent>
            
            <TabsContent value="engraving" className="space-y-6">
              <div className="text-center py-12 text-muted-foreground">
                <Icon name="Hammer" size={48} className="mx-auto mb-4 opacity-50" />
                <p>Примеры готовых гравировок</p>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

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
                    toast({
                      title: "Переход к оформлению",
                      description: `Стоимость: ${calculatePrice().toLocaleString('ru-RU')}₽`,
                    });
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

      <section id="faq" className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">Вопросы и ответы</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Ответы на частые вопросы о ретуши для гравировки
            </p>
          </div>

          <Accordion type="single" collapsible className="max-w-3xl mx-auto">
            <AccordionItem value="item-1">
              <AccordionTrigger>Что такое ретушь для гравировки?</AccordionTrigger>
              <AccordionContent>
                Ретушь для гравировки — это специализированная обработка фотографий для подготовки их к лазерной гравировке на памятниках. 
                Процесс включает улучшение деталей, коррекцию дефектов, настройку контраста и глубины изображения для идеального результата на граните или мраморе.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2">
              <AccordionTrigger>Какие фотографии можно улучшить?</AccordionTrigger>
              <AccordionContent>
                Мы работаем с любыми фотографиями: старыми, выцветшими, с царапинами или низкого качества. 
                Используя современные AI-технологии и ручную доработку мастерами, мы можем восстановить даже сильно поврежденные изображения.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3">
              <AccordionTrigger>Сколько времени занимает ретушь?</AccordionTrigger>
              <AccordionContent>
                Сроки зависят от выбранного пакета: базовая ретушь — 1-2 дня, стандартная — 2-3 дня, премиум — 3-5 дней. 
                Если вам нужна срочная обработка, мы можем предложить ускоренный вариант за дополнительную плату.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4">
              <AccordionTrigger>В каком формате вы вернете готовое изображение?</AccordionTrigger>
              <AccordionContent>
                Мы предоставляем готовое изображение в высоком разрешении в форматах TIFF и JPG, оптимизированных для лазерной гравировки. 
                Все файлы отправляются на ваш email, также они будут доступны в личном кабинете.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-5">
              <AccordionTrigger>Можно ли внести правки после получения результата?</AccordionTrigger>
              <AccordionContent>
                Да, мы предлагаем одну бесплатную корректировку для всех пакетов. Если вам нужны дополнительные правки, 
                мы обсудим их стоимость индивидуально. Для премиум-пакета мы изначально предоставляем 3 варианта на выбор.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-6">
              <AccordionTrigger>Какие технологии вы используете?</AccordionTrigger>
              <AccordionContent>
                Мы используем комбинацию профессиональных графических программ (Photoshop, SAI) и нейросетей последнего поколения 
                для AI-улучшения качества. Каждая работа проходит финальную проверку опытным мастером для гарантии результата.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

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
    </div>
  );
};

export default Index;