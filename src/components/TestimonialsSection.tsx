import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Priya Sharma",
    role: "Software Engineer, Google",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&q=80",
    content:
      "Klinkara has been my home for the past year. The amenities are top-notch, the staff is incredibly helpful, and the community is amazing. Couldn't ask for a better PG!",
    rating: 5,
  },
  {
    name: "Rahul Verma",
    role: "MBA Student, IIM",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&q=80",
    content:
      "The study-friendly environment and high-speed internet made my exam preparations so much easier. The food quality is excellent too. Highly recommended!",
    rating: 5,
  },
  {
    name: "Aisha Khan",
    role: "Product Designer, Microsoft",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&q=80",
    content:
      "Living at Klinkara feels like staying at a premium hotel. The attention to detail, cleanliness, and security are unmatched. Worth every penny!",
    rating: 5,
  },
  {
    name: "Vikram Singh",
    role: "Startup Founder",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&q=80",
    content:
      "As an entrepreneur, I needed a space that inspires productivity. Klinkara provides exactly that with its modern interiors and peaceful environment.",
    rating: 5,
  },
];

const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const nextTestimonial = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="section-padding bg-primary relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-gold/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gold/5 rounded-full blur-3xl" />

      <div className="container-luxury relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block text-gold font-semibold text-sm tracking-widest uppercase mb-4">
            What Our Residents Say
          </span>
          <h2 className="heading-luxury text-white text-3xl md:text-5xl mb-4">
            Testimonials
          </h2>
          <div className="gold-divider" />
        </motion.div>

        {/* Testimonial Slider */}
        <div className="max-w-4xl mx-auto">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            {/* Quote Icon */}
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gold/20 mb-8">
              <Quote className="w-8 h-8 text-gold" />
            </div>

            {/* Content */}
            <p className="text-xl md:text-2xl text-white/90 leading-relaxed mb-8 font-light">
              "{testimonials[currentIndex].content}"
            </p>

            {/* Author */}
            <div className="flex flex-col items-center">
              <img
                src={testimonials[currentIndex].image}
                alt={testimonials[currentIndex].name}
                className="w-16 h-16 rounded-full object-cover border-2 border-gold mb-4"
              />
              <h4 className="font-display text-lg font-semibold text-white">
                {testimonials[currentIndex].name}
              </h4>
              <p className="text-gold/80 text-sm">{testimonials[currentIndex].role}</p>
              
              {/* Stars */}
              <div className="flex gap-1 mt-3">
                {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                  <span key={i} className="text-gold">★</span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-4 mt-12">
            <button
              onClick={prevTestimonial}
              className="p-3 rounded-full border border-white/20 text-white hover:bg-white/10 transition-colors"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            {/* Dots */}
            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setIsAutoPlaying(false);
                    setCurrentIndex(index);
                  }}
                  className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                    index === currentIndex ? "bg-gold w-8" : "bg-white/30"
                  }`}
                />
              ))}
            </div>

            <button
              onClick={nextTestimonial}
              className="p-3 rounded-full border border-white/20 text-white hover:bg-white/10 transition-colors"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
