import { Card, CardContent } from '../ui/card';
import { Newspaper, Trophy, ExternalLink } from 'lucide-react';
import { Button } from '../ui/button';

export function Achievements() {
  const mediaFeatures = [
    {
      type: 'magazine',
      title: 'iMoney 專訪',
      date: '2021年2月6日',
      description: '風雲人物專訪：分享保險及理財策劃心得',
      image: '/src/assets/money_finance_magazine.png',
      link: '/src/assets/iMoney風雲人物專訪6Feb2021.pdf'
    }
  ];

  const achievements = [
    {
      year: '2020-2021',
      title: 'MDRT 會員',
      description: '連續兩年獲得百萬圓桌會議資格'
    },
    {
      year: '2019',
      title: '傑出表現獎',
      description: '年度最佳業績表現獎項'
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">成就與媒體報導</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            多年來的專業表現獲得業界認可及媒體關注
          </p>
        </div>

        {/* Media Features */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {mediaFeatures.map((feature, index) => (
            <Card key={index} className="overflow-hidden">
              <div className="flex flex-col md:flex-row">
                <div className="md:w-1/2">
                  <img
                    src={feature.image}
                    alt={feature.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardContent className="md:w-1/2 p-6">
                  <div className="flex items-center mb-4">
                    <Newspaper className="w-5 h-5 text-primary mr-2" />
                    <span className="text-sm text-gray-500">{feature.date}</span>
                  </div>
                  <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                  <p className="text-gray-600 mb-4">{feature.description}</p>
                  <Button
                    variant="outline"
                    className="inline-flex items-center"
                    onClick={() => window.open(feature.link, '_blank')}
                  >
                    閱讀更多 <ExternalLink className="w-4 h-4 ml-2" />
                  </Button>
                </CardContent>
              </div>
            </Card>
          ))}
        </div>

        {/* Professional Achievements */}
        <div className="grid md:grid-cols-3 gap-8">
          {achievements.map((achievement, index) => (
            <Card key={index}>
              <CardContent className="p-6">
                <Trophy className="w-8 h-8 text-primary mb-4" />
                <div className="text-sm text-gray-500 mb-2">{achievement.year}</div>
                <h3 className="text-lg font-bold mb-2">{achievement.title}</h3>
                <p className="text-gray-600">{achievement.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
