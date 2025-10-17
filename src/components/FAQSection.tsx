import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

const FAQSection = () => {
  return (
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
  );
};

export default FAQSection;
