import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Icon from '@/components/ui/icon';

const PortfolioSection = () => {
  return (
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
  );
};

export default PortfolioSection;
