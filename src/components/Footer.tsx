import { motion } from 'framer-motion';
import { Printer, Facebook, Instagram, Twitter, Youtube, Heart } from 'lucide-react';

const Footer = () => {
  const socialLinks = [
    { icon: Facebook, href: 'https://facebook.com', label: 'Facebook' },
    { icon: Instagram, href: 'https://instagram.com', label: 'Instagram' },
    { icon: Twitter, href: 'https://twitter.com', label: 'Twitter' },
    { icon: Youtube, href: 'https://youtube.com', label: 'YouTube' },
  ];

  const footerLinks = {
    'Layanan': [
      { label: 'Fotokopi', href: '#products' },
      { label: 'Print Warna', href: '#products' },
      { label: 'Undangan', href: '#products' },
      { label: 'Banner & Spanduk', href: '#products' },
    ],
    'Informasi': [
      { label: 'Tentang Kami', href: '#' },
      { label: 'Cara Pemesanan', href: '#' },
      { label: 'Syarat & Ketentuan', href: '#' },
      { label: 'Kebijakan Privasi', href: '#' },
    ],
    'Bantuan': [
      { label: 'FAQ', href: '#' },
      { label: 'Kontak', href: '#contact' },
      { label: 'Lokasi', href: '#' },
      { label: 'Karir', href: '#' },
    ],
  };

  return (
    <footer className="bg-secondary text-secondary-foreground relative overflow-hidden">
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-secondary to-secondary-glow opacity-50" />
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Main Footer Content */}
        <div className="py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="flex items-center gap-2 mb-4"
            >
              <div className="bg-accent p-2 rounded-lg">
                <Printer className="h-8 w-8 text-accent-foreground" />
              </div>
              <span className="text-3xl font-bold">Digiprint</span>
            </motion.div>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-secondary-foreground/80 mb-6"
            >
              Solusi printing terpercaya untuk segala kebutuhan cetak Anda. 
              Kualitas terbaik, harga bersahabat, pelayanan memuaskan.
            </motion.p>
            
            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex gap-4"
            >
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.2, rotate: 360 }}
                  whileTap={{ scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  className="p-2 rounded-full bg-secondary-foreground/10 hover:bg-accent hover:text-accent-foreground transition-colors"
                  aria-label={social.label}
                >
                  <social.icon className="h-5 w-5" />
                </motion.a>
              ))}
            </motion.div>
          </div>

          {/* Footer Links */}
          {Object.entries(footerLinks).map(([category, links], categoryIndex) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 * (categoryIndex + 3) }}
            >
              <h3 className="font-semibold text-lg mb-4">{category}</h3>
              <ul className="space-y-2">
                {links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a
                      href={link.href}
                      className="text-secondary-foreground/70 hover:text-accent transition-colors duration-base block py-1"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="border-t border-secondary-foreground/10 py-6"
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-secondary-foreground/70 text-center md:text-left">
              © 2024 Digiprint. All rights reserved.
            </p>
            <div className="flex items-center gap-1 text-sm text-secondary-foreground/70">
              Made with
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 1, repeat: Infinity }}
              >
                <Heart className="h-4 w-4 fill-accent text-accent" />
              </motion.div>
              in Indonesia
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;