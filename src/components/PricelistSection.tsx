import { useState } from 'react';
import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { Check, Star } from 'lucide-react';

const pricelist = {
  fotokopi: [
    { name: 'Fotokopi A4 Hitam Putih', price: 'Rp 500', unit: '/lembar', popular: false, status: 'available' },
    { name: 'Fotokopi A4 Warna', price: 'Rp 2.000', unit: '/lembar', popular: true, status: 'available' },
    { name: 'Fotokopi A3 Hitam Putih', price: 'Rp 1.000', unit: '/lembar', popular: false, status: 'unavailable' },
    { name: 'Fotokopi A3 Warna', price: 'Rp 4.000', unit: '/lembar', popular: false, status: 'unavailable' },
  ],
  print: [
    { name: 'Print A4 Hitam Putih', price: 'Rp 1.000', unit: '/lembar', popular: false, status: 'available' },
    { name: 'Print A4 Warna', price: 'Rp 3.000', unit: '/lembar', popular: true, status: 'available' },
    { name: 'Print A3 Hitam Putih', price: 'Rp 2.000', unit: '/lembar', popular: false, status: 'unavailable' },
    { name: 'Print A3 Warna', price: 'Rp 6.000', unit: '/lembar', popular: false, status: 'unavailable' },
  ],
  undangan: [
    { name: 'Undangan Pernikahan Standard', price: 'Rp 5.000', unit: '/pcs', popular: false, status: 'available' },
    { name: 'Undangan Pernikahan Premium', price: 'Rp 10.000', unit: '/pcs', popular: true, status: 'unavailable' },
    { name: 'Undangan Khitanan/Aqiqah', price: 'Rp 3.000', unit: '/pcs', popular: false, status: 'available' },
    { name: 'Undangan Custom Design', price: 'Rp 15.000', unit: '/pcs', popular: false, status: 'available' },
  ],
  banner: [
    { name: 'Banner Indoor', price: 'Rp 25.000', unit: '/m²', popular: false, status: 'available' },
    { name: 'Banner Outdoor', price: 'Rp 35.000', unit: '/m²', popular: true, status: 'available' },
    { name: 'X-Banner 60x160', price: 'Rp 75.000', unit: '/unit', popular: false, status: 'available' },
    { name: 'Roll Banner 80x200', price: 'Rp 100.000', unit: '/unit', popular: false, status: 'available' },
  ],
};

const PricelistSection = () => {
  const [activeCategory, setActiveCategory] = useState('fotokopi');

  return (
    <section id="pricelist" className="py-20 bg-background-secondary">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Smart Pricelist
            </span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Harga transparan dan kompetitif untuk semua layanan kami
          </p>
        </motion.div>

        {/* Category Tabs */}
        <Tabs defaultValue="fotokopi" className="w-full max-w-4xl mx-auto">
          <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 mb-8 bg-secondary/10">
            <TabsTrigger
              value="fotokopi"
              onClick={() => setActiveCategory('fotokopi')}
              className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
            >
              Fotokopi
            </TabsTrigger>
            <TabsTrigger
              value="print"
              onClick={() => setActiveCategory('print')}
              className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
            >
              Print Warna
            </TabsTrigger>
            <TabsTrigger
              value="undangan"
              onClick={() => setActiveCategory('undangan')}
              className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
            >
              Undangan
            </TabsTrigger>
            <TabsTrigger
              value="banner"
              onClick={() => setActiveCategory('banner')}
              className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
            >
              Banner
            </TabsTrigger>
          </TabsList>

          {/* Price Cards */}
          {Object.entries(pricelist).map(([category, items]) => (
            <TabsContent key={category} value={category} className="space-y-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className="grid gap-4"
              >
                {items.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                  >
                    <Card className={`p-6 hover:shadow-lg transition-all duration-base ${
                      item.popular ? 'border-accent shadow-glow relative overflow-hidden' : ''
                    } ${
                      item.status === 'unavailable' ? 'opacity-60' : ''
                    }`}>
                      {item.popular && (
                        <div className="absolute top-0 right-0 bg-accent text-accent-foreground px-3 py-1 rounded-bl-lg text-xs font-semibold flex items-center gap-1">
                          <Star className="h-3 w-3" />
                          Populer
                        </div>
                      )}
                      
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4">
                          <motion.div
                            whileHover={{ scale: 1.2 }}
                            className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center"
                          >
                            <Check className="h-5 w-5 text-primary" />
                          </motion.div>
                          <div>
                            <h4 className={`font-semibold text-lg ${
                              item.status === 'unavailable' ? 'line-through text-muted-foreground' : ''
                            }`}>
                              {item.name}
                            </h4>
                            {item.status === 'unavailable' && (
                              <Badge variant="destructive" className="mt-1 text-xs">
                                Belum Tersedia
                              </Badge>
                            )}
                            <p className="text-sm text-muted-foreground">
                              Kualitas terjamin, hasil memuaskan
                            </p>
                          </div>
                        </div>
                        
                        <div className="text-right">
                          <div className={`text-2xl font-bold ${
                            item.status === 'unavailable' 
                              ? 'text-muted-foreground line-through' 
                              : 'text-primary'
                          }`}>
                            {item.price}
                          </div>
                          <div className={`text-sm text-muted-foreground ${
                            item.status === 'unavailable' ? 'line-through' : ''
                          }`}>
                            {item.unit}
                          </div>
                        </div>
                      </div>
                    </Card>
                  </motion.div>
                ))}
              </motion.div>
            </TabsContent>
          ))}
        </Tabs>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-12 text-center"
        >
          <Card className="max-w-2xl mx-auto p-6 bg-gradient-card">
            <h3 className="text-xl font-bold mb-2">Diskon Khusus!</h3>
            <p className="text-muted-foreground">
              Dapatkan diskon hingga 20% untuk pemesanan dalam jumlah banyak.
              Hubungi kami untuk penawaran spesial!
            </p>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};

export default PricelistSection;