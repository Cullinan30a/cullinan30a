import { useState } from 'react';
import { Card, CardContent } from '../ui/card';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Textarea } from '../ui/textarea';
import { Phone, Mail, MapPin } from 'lucide-react';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: ''
  });

  const contactInfo = [
    {
      icon: Phone,
      title: '電話',
      value: '+852 XXXX XXXX'
    },
    {
      icon: Mail,
      title: '電郵',
      value: 'vernon.cheuk@example.com'
    },
    {
      icon: MapPin,
      title: '地址',
      value: '香港中環金融街XXX號XXX大廈XX樓'
    }
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">聯絡我們</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            如果您有任何查詢，歡迎隨時與我們聯絡
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card>
            <CardContent className="p-6">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium mb-2">姓名</label>
                  <Input
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="請輸入您的姓名"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">電話</label>
                  <Input
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="請輸入您的聯絡電話"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">電郵</label>
                  <Input
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="請輸入您的電郵地址"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">留言</label>
                  <Textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="請輸入您的查詢內容"
                    rows={4}
                    required
                  />
                </div>
                <Button type="submit" className="w-full">
                  提交
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-6">
            {contactInfo.map((info, index) => (
              <Card key={index}>
                <CardContent className="p-6 flex items-start">
                  <info.icon className="w-6 h-6 text-primary mr-4" />
                  <div>
                    <h3 className="font-medium mb-1">{info.title}</h3>
                    <p className="text-gray-600">{info.value}</p>
                  </div>
                </CardContent>
              </Card>
            ))}

            {/* Map or Additional Information */}
            <Card>
              <CardContent className="p-6">
                <div className="aspect-video rounded-lg bg-gray-100">
                  {/* Add map or additional content here */}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
