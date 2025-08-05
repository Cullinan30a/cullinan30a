import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Shield, Heart, PiggyBank, GraduationCap, Scale, Building2 } from 'lucide-react';

export function Services() {
  const services = [
    {
      icon: Shield,
      title: '人壽保險策劃',
      description: '為您及家人提供全面的保障方案',
      image: '/src/assets/life_insurance_planning.jpg'
    },
    {
      icon: Heart,
      title: '醫療保險諮詢',
      description: '規劃完善的醫療保障計劃',
      image: '/src/assets/medical_insurance_consultation.jpg'
    },
    {
      icon: PiggyBank,
      title: '退休策劃',
      description: '為您的理想退休生活做好準備',
      image: '/src/assets/retirement_planning.jpg'
    },
    {
      icon: GraduationCap,
      title: '教育基金',
      description: '為子女的未來教育投資',
      image: '/src/assets/education_fund.jpg'
    },
    {
      icon: Scale,
      title: '財富傳承',
      description: '妥善規劃財富傳承方案',
      image: '/src/assets/wealth_inheritance.jpg'
    },
    {
      icon: Building2,
      title: '家族辦公室服務',
      description: '為高淨值客戶提供專業的財富管理服務',
      image: '/src/assets/family_office.png'
    }
  ];

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">服務項目</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            我們提供全面的財務規劃服務，助您實現人生各個階段的目標
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="group hover:shadow-lg transition-shadow duration-300">
              <div className="relative h-48 overflow-hidden rounded-t-lg">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors duration-300" />
                <service.icon className="absolute top-4 right-4 w-8 h-8 text-white" />
              </div>
              <CardHeader>
                <CardTitle>{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
