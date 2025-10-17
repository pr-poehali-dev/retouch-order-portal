import { Card, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const ServicesSection = () => {
  return (
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
  );
};

export default ServicesSection;
