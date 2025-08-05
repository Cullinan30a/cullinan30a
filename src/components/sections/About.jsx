import { Card, CardContent } from '../ui/card';
import { Award, Star, TrendingUp } from 'lucide-react';

export function About() {
  const achievements = [
    {
      icon: Award,
      title: '專業資格',
      description: '持有CFP®認證專業財務策劃師及註冊財務策劃師等多項專業資格'
    },
    {
      icon: Star,
      title: '服務年資',
      description: '擁有超過20年的保險及理財策劃經驗'
    },
    {
      icon: TrendingUp,
      title: '優秀表現',
      description: '多次獲得業界嘉許及獎項肯定'
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Profile Image */}
          <div className="relative">
            <img
              src="/src/assets/vernon-business.jpg"
              alt="Vernon Cheuk"
              className="rounded-lg shadow-xl"
            />
            <div className="absolute -bottom-6 -right-6 bg-primary text-white p-4 rounded-lg shadow-lg">
              <p className="font-bold">20+ 年</p>
              <p className="text-sm">專業經驗</p>
            </div>
          </div>

          {/* Content */}
          <div>
            <h2 className="text-3xl font-bold mb-6">關於我</h2>
            <p className="text-gray-600 mb-8">
              我是張展威（Vernon Cheuk），擁有超過20年的保險及理財策劃經驗。作為一名專業的理財策劃師，
              我致力於為客戶提供最適合的財務方案，協助他們實現人生目標。
            </p>

            <div className="grid gap-6">
              {achievements.map((item, index) => (
                <Card key={index}>
                  <CardContent className="flex items-start p-6">
                    <item.icon className="w-12 h-12 text-primary mr-4" />
                    <div>
                      <h3 className="font-bold mb-2">{item.title}</h3>
                      <p className="text-gray-600">{item.description}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
