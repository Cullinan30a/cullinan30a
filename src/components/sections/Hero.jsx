import { Button } from '../ui/button';
import { ChevronRight } from 'lucide-react';

export function Hero({ onContactClick }) {
  return (
    <section className="relative h-screen flex items-center">
      {/* Background with overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url(/src/assets/hk_skyline.jpg)',
        }}
      >
        <div className="absolute inset-0 bg-black/50" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            專業理財策劃，為您打造完美未來
          </h1>
          <p className="text-xl text-white/90 mb-8">
            二十多年保險及理財策劃經驗，讓我們一起規劃您的財務未來
          </p>
          <div className="flex flex-wrap gap-4">
            <Button
              size="lg"
              onClick={onContactClick}
              className="bg-primary hover:bg-primary/90"
            >
              立即諮詢 <ChevronRight className="ml-2" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-white border-white hover:bg-white/10"
            >
              了解更多
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
