import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { FileText, Image, Mail, Package, Palette, Printer } from 'lucide-react';

const products = [
  {
    icon: FileText,
    title: 'Fotokopi',
    description: 'Layanan fotokopi cepat dengan hasil jernih',
    price: 'Mulai Rp 500/lembar',
    color: 'primary',
    status: 'available',
  },
  {
    icon: Mail,
    title: 'Undangan',
    description: 'Cetak undangan pernikahan & acara spesial',
    price: 'Mulai Rp 5.000/pcs',
    color: 'accent',
    status: 'available',
  },
  {
    icon: Image,
    title: 'Banner & Spanduk',
    description: 'Banner outdoor/indoor berkualitas tinggi',
    price: 'Mulai Rp 25.000/m²',
    color: 'secondary',
    status: 'unavailable',
  },
  {
    icon: Package,
    title: 'Brosur',
    description: 'Brosur promosi dengan desain menarik',
    price: 'Mulai Rp 1.000/lembar',
    color: 'primary',
    status: 'available',
  },
  {
    icon: Palette,
    title: 'Sticker',
    description: 'Sticker custom berbagai ukuran',
    price: 'Mulai Rp 10.000/sheet',
    color: 'accent',
    status: 'available',
  },
  {
    icon: Printer,
    title: 'Print Dokumen',
    description: 'Print dokumen hitam putih & warna',
    price: 'Mulai Rp 1.000/lembar',
    color: 'secondary',
    status: 'available',
  },
];

const ProductsSection = () => {
  return (
    <section id="products" className="py-20 bg-background">
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
              Produk & Layanan
            </span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Berbagai solusi printing untuk kebutuhan personal dan bisnis Anda
          </p>
        </motion.div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="group relative overflow-hidden h-full hover:shadow-card transition-all duration-slow cursor-pointer">
                {/* Bottom Overlay Gradient on Hover */}
                {product.status === 'available' && (
                  <div className="absolute bottom-0 left-0 right-0 h-2/5 bg-gradient-to-t from-primary/20 via-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 ease-out" />
                )}
                
                <div className={`relative p-6 space-y-4 ${
                  product.status === 'unavailable' ? 'opacity-60' : ''
                }`}>
                  {/* Icon */}
                  <motion.div
                    whileHover={product.status === 'available' ? { scale: 1.2, rotate: 360 } : {}}
                    transition={{ duration: 0.5 }}
                    className={`inline-flex p-3 rounded-lg ${
                      product.color === 'primary'
                        ? 'bg-primary/10 text-primary'
                        : product.color === 'accent'
                        ? 'bg-accent/10 text-accent'
                        : 'bg-secondary/10 text-secondary'
                    }`}
                  >
                    <product.icon className="h-6 w-6" />
                  </motion.div>

                  {/* Content */}
                  <div>
                    <h3 className={`text-xl font-bold mb-2 transition-colors ${
                      product.status === 'unavailable' 
                        ? 'line-through text-muted-foreground' 
                        : 'group-hover:text-primary'
                    }`}>
                      {product.title}
                    </h3>
                    <p className="text-muted-foreground mb-3">
                      {product.description}
                    </p>
                    
                    {/* Unavailable Badge */}
                    {product.status === 'unavailable' && (
                      <Badge variant="destructive" className="mb-3 text-xs">
                        Belum Tersedia
                      </Badge>
                    )}
                    
                    <div className="flex items-center justify-between">
                      <span className={`text-sm font-semibold ${
                        product.status === 'unavailable' ? 'text-muted-foreground line-through' : 'text-primary'
                      }`}>
                        {product.price}
                      </span>
                      {product.status === 'available' && (
                        <motion.span
                          initial={{ opacity: 0, x: -10 }}
                          whileHover={{ opacity: 1, x: 0 }}
                          className="text-primary text-sm font-medium"
                        >
                          Pesan →
                        </motion.span>
                      )}
                    </div>
                  </div>

                  {/* Hover Effect Overlay */}
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="text-center mt-12"
        >
          <button className="inline-flex items-center gap-2 text-primary font-semibold hover:text-primary-glow transition-colors group">
            Lihat Semua Produk
            <motion.span
              animate={{ x: [0, 5, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              →
            </motion.span>
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default ProductsSection;