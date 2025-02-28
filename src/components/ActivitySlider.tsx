import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Camera, Star } from 'lucide-react';

const activities = [
  {
    id: 1,
    image: "/images/img3.jpg",
    title: "สัมมนาปี 67",
    description: "ปลูกป่าชายเลน"
  },
  {
    id: 2,
    image: "/images/img2.jpg",
    title: "สัมมนาปี 67",
    description: "งานเลี้ยง ตีมชาวล็อก"
  },
  {
    id: 3,
    image: "/images/img1.jpg",
    title: "ทำบุญปีใหม่ 68",
    description: "นั่งฟังพระสวดมนต์"
  }
];

const ActivitySlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % activities.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + activities.length) % activities.length);
  };

  useEffect(() => {
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center gap-4 mb-12">
          <div className="flex items-center gap-3">
            <div className="relative">
              <Camera className="w-8 h-8 text-blue-600" />
              <Star className="w-4 h-4 text-yellow-400 absolute -right-1 -top-1 animate-pulse" />
            </div>
            <h2 className="text-3xl font-bold">กิจกรรมการฝึกงาน</h2>
          </div>
          <p className="text-gray-600 text-xl">ภาพกิจกรรมระหว่างการฝึกงาน</p>
        </div>
        <div className="relative max-w-4xl mx-auto">
          <div className="overflow-hidden rounded-xl aspect-[16/9] relative shadow-lg">
            {activities.map((activity, index) => (
              <div
                key={activity.id}
                className={`absolute w-full h-full transition-transform duration-500 ease-in-out ${
                  index === currentSlide ? 'translate-x-0' : 'translate-x-full'
                }`}
                style={{ transform: `translateX(${(index - currentSlide) * 100}%)` }}
              >
                <img
                  src={activity.image}
                  alt={activity.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-4">
                  <h3 className="text-lg font-semibold mb-1">{activity.title}</h3>
                  <p className="text-sm">{activity.description}</p>
                </div>
              </div>
            ))}
          </div>
          
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white bg-opacity-50 hover:bg-opacity-75 rounded-full p-1.5 transition-all"
            aria-label="Previous slide"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white bg-opacity-50 hover:bg-opacity-75 rounded-full p-1.5 transition-all"
            aria-label="Next slide"
          >
            <ChevronRight className="w-5 h-5" />
          </button>

          <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 flex space-x-2">
            {activities.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-2 h-2 rounded-full transition-all ${
                  index === currentSlide ? 'bg-blue-600 scale-125' : 'bg-gray-300'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ActivitySlider;