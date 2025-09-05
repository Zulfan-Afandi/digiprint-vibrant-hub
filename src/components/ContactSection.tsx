import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Phone, Mail, MapPin, Clock, MessageCircle, Send } from 'lucide-react';

const contactInfo = [
  {
    icon: Phone,
    title: 'Telepon',
    content: '0823-3234-6543',
    action: 'tel:082332346543',
  },
  {
    icon: MessageCircle,
    title: 'WhatsApp',
    content: '0823-3234-6543',
    action: 'https://wa.me/6282332346543',
  },
  {
    icon: Mail,
    title: 'Email',
    content: 'info@digiprint.id',
    action: 'mailto:info@digiprint.id',
  },
  {
    icon: MapPin,
    title: 'Lokasi',
    content: 'Jl. Babatan, Kel. Arjowinangun, Kec. Kedungkandang, Malang',
    action: 'https://maps.app.goo.gl/DpVAMKiToDj5TU2P6',
  },
];

const ContactSection = () => {
  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-primary to-primary-glow relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute inset-0 opacity-20"
          animate={{
            backgroundPosition: ['0% 0%', '100% 100%'],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            repeatType: 'reverse',
          }}
          style={{
            backgroundImage: 'url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.1"%3E%3Cpath d="M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")',
            backgroundSize: '60px 60px',
          }}
        />
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
            Hubungi Kami
          </h2>
          <p className="text-primary-foreground/90 text-lg max-w-2xl mx-auto">
            Siap melayani kebutuhan printing Anda dengan cepat dan profesional
          </p>
        </motion.div>

        {/* Contact Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {contactInfo.map((info, index) => (
            <motion.a
              key={index}
              href={info.action}
              target={info.title === 'Lokasi' ? '_blank' : undefined}
              rel={info.title === 'Lokasi' ? 'noopener noreferrer' : undefined}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="block"
            >
              <Card className="p-6 h-full bg-background/95 backdrop-blur-sm hover:shadow-xl transition-all duration-base group cursor-pointer">
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.5 }}
                  className="inline-flex p-3 rounded-lg bg-primary/10 text-primary mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-colors"
                >
                  <info.icon className="h-6 w-6" />
                </motion.div>
                <h3 className="font-semibold text-lg mb-1">{info.title}</h3>
                <p className="text-muted-foreground group-hover:text-foreground transition-colors">
                  {info.content}
                </p>
              </Card>
            </motion.a>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center"
        >
          <Card className="max-w-2xl mx-auto p-8 bg-background/95 backdrop-blur-sm">
            <h3 className="text-2xl font-bold mb-4">
              Butuh Cetak Cepat? Hubungi Kami Sekarang!
            </h3>
            <p className="text-muted-foreground mb-6">
              Tim kami siap membantu Anda 24/7. Dapatkan konsultasi gratis untuk kebutuhan printing Anda.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                variant="accent"
                size="lg"
                className="group"
                onClick={() => window.open('https://wa.me/6282332346543', '_blank')}
              >
                <MessageCircle className="mr-2 h-5 w-5 group-hover:animate-bounce" />
                Chat WhatsApp
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="group"
                onClick={() => window.location.href = 'mailto:info@digiprint.id'}
              >
                <Send className="mr-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                Kirim Email
              </Button>
            </div>

            {/* Business Hours */}
            <div className="mt-8 p-4 bg-primary/5 rounded-lg">
              <div className="flex items-center justify-center gap-2 text-primary">
                <Clock className="h-5 w-5" />
                <span className="font-semibold">Jam Operasional</span>
              </div>
              <p className="text-muted-foreground mt-2">
                Senin - Sabtu: 08:00 - 21:00 WIB<br />
                Minggu: 10:00 - 18:00 WIB
              </p>
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;