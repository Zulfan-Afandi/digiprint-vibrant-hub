import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';

const testimonials = [
  {
    name: 'Budi Santoso',
    role: 'Pengusaha',
    content: 'Pelayanan sangat cepat dan hasil cetakan berkualitas tinggi. Sudah langganan 3 tahun dan tidak pernah kecewa!',
    rating: 5,
    initials: 'BS',
  },
  {
    name: 'Siti Nurhaliza',
    role: 'Event Organizer',
    content: 'Digiprint selalu jadi andalan untuk cetak banner dan spanduk event. Hasil memuaskan dengan harga terjangkau.',
    rating: 5,
    initials: 'SN',
  },
  {
    name: 'Ahmad Fauzi',
    role: 'Mahasiswa',
    content: 'Tempat print favorit untuk tugas kuliah. Harga murah tapi kualitas tetap terjaga. Recommended!',
    rating: 5,
    initials: 'AF',
  },
  {
    name: 'Diana Putri',
    role: 'Wedding Planner',
    content: 'Undangan pernikahan yang dicetak disini selalu dapat pujian dari klien. Desain dan kualitas top!',
    rating: 5,
    initials: 'DP',
  },
];

const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const handlePrevious = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const handleNext = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  return (
    <section className="py-20 bg-gradient-primary relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        {[...Array(10)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          >
            <Quote className="h-20 w-20 text-primary-foreground" />
          </motion.div>
        ))}
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-primary-foreground">
            Testimoni Pelanggan
          </h2>
          <p className="text-primary-foreground/90 text-lg max-w-2xl mx-auto">
            Kepuasan pelanggan adalah prioritas utama kami
          </p>
        </motion.div>

        {/* Testimonials Carousel */}
        <div className="max-w-4xl mx-auto relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
              onMouseEnter={() => setIsAutoPlaying(false)}
              onMouseLeave={() => setIsAutoPlaying(true)}
            >
              <Card className="p-8 md:p-12 bg-background/95 backdrop-blur-sm shadow-2xl">
                <div className="flex flex-col items-center text-center">
                  {/* Avatar */}
                  <Avatar className="h-20 w-20 mb-4 border-4 border-accent">
                    <AvatarFallback className="bg-accent text-accent-foreground text-xl font-bold">
                      {testimonials[currentIndex].initials}
                    </AvatarFallback>
                  </Avatar>

                  {/* Rating */}
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: i * 0.1 }}
                      >
                        <Star className="h-5 w-5 fill-accent text-accent" />
                      </motion.div>
                    ))}
                  </div>

                  {/* Content */}
                  <Quote className="h-8 w-8 text-primary/20 mb-4" />
                  <p className="text-lg md:text-xl mb-6 text-foreground/90 italic">
                    "{testimonials[currentIndex].content}"
                  </p>

                  {/* Author */}
                  <div>
                    <h4 className="font-bold text-lg">
                      {testimonials[currentIndex].name}
                    </h4>
                    <p className="text-muted-foreground">
                      {testimonials[currentIndex].role}
                    </p>
                  </div>
                </div>
              </Card>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Buttons */}
          <button
            onClick={handlePrevious}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12 md:-translate-x-16 p-2 rounded-full bg-background/80 backdrop-blur-sm shadow-lg hover:bg-background transition-all hover:scale-110"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>
          <button
            onClick={handleNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-12 md:translate-x-16 p-2 rounded-full bg-background/80 backdrop-blur-sm shadow-lg hover:bg-background transition-all hover:scale-110"
            aria-label="Next testimonial"
          >
            <ChevronRight className="h-6 w-6" />
          </button>
        </div>

        {/* Dots Indicator */}
        <div className="flex justify-center gap-2 mt-8">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setIsAutoPlaying(false);
                setCurrentIndex(index);
              }}
              className={`h-2 rounded-full transition-all duration-base ${
                index === currentIndex
                  ? 'w-8 bg-accent'
                  : 'w-2 bg-primary-foreground/30 hover:bg-primary-foreground/50'
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;