
import React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useCallback, useState } from "react";

const bannerImages = [
  "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=1600&h=500&q=80",
  "https://images.unsplash.com/photo-1496307653780-42ee777d4833?auto=format&fit=crop&w=1600&h=500&q=80",
  "https://images.unsplash.com/photo-1431576901776-e539bd916ba2?auto=format&fit=crop&w=1600&h=500&q=80",
];

const Banner = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % bannerImages.length);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + bannerImages.length) % bannerImages.length);
  }, []);

  return (
    <div className="relative h-[400px] w-full overflow-hidden rounded-lg">
      {bannerImages.map((image, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-transform duration-500 ease-in-out ${
            index === currentSlide ? "translate-x-0" : "translate-x-full"
          }`}
          style={{ transform: `translateX(${(index - currentSlide) * 100}%)` }}
        >
          <img
            src={image}
            alt={`Banner ${index + 1}`}
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40">
            <div className="flex h-full items-center justify-center text-center text-white">
              <div>
                <h2 className="mb-4 text-4xl font-bold">دائرة الأراضي والأملاك</h2>
                <p className="text-xl">نحو مستقبل عقاري مستدام</p>
              </div>
            </div>
          </div>
        </div>
      ))}
      <button
        onClick={prevSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full bg-white/80 p-2 backdrop-blur-sm transition-all hover:bg-white"
      >
        <ChevronRight className="h-6 w-6 text-dubai-dark" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full bg-white/80 p-2 backdrop-blur-sm transition-all hover:bg-white"
      >
        <ChevronLeft className="h-6 w-6 text-dubai-dark" />
      </button>
      <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-2">
        {bannerImages.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`h-2 w-2 rounded-full transition-all ${
              index === currentSlide ? "w-4 bg-white" : "bg-white/50"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default Banner;
