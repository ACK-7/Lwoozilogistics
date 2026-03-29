# Prince Louis Holdings Website - Complete Setup Guide

## 📁 Folder Structure

```
AndrewWeb/
├── src/
│   ├── components/
│   │   ├── Navigation.tsx
│   │   ├── Hero.tsx
│   │   ├── Services.tsx
│   │   ├── ServiceCard.tsx
│   │   ├── Products.tsx
│   │   ├── About.tsx
│   │   ├── Contact.tsx
│   │   └── Footer.tsx
│   ├── hooks/
│   │   └── useScrollAnimation.ts
│   ├── utils/
│   │   └── constants.ts
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css
├── public/
├── index.html
├── package.json
├── vite.config.ts
├── tsconfig.json
├── tsconfig.node.json
├── tailwind.config.ts
├── postcss.config.js
└── .gitignore
```

## 📝 File Contents

### 1. `package.json` ✅ (Already created)

### 2. `vite.config.ts` ✅ (Already created)

### 3. `tsconfig.json` ✅ (Already created)

### 4. `tsconfig.node.json` ✅ (Already created)

### 5. `tailwind.config.ts` ✅ (Already created)

### 6. `postcss.config.js` ✅ (Already created)

### 7. `index.html` ✅ (Already created)

---

## 🔧 Files to Create

### `src/index.css`
```css
@tailwind base;
@tailwind components;
@tailwind utilities;

@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700;800;900&display=swap');

html {
  scroll-behavior: smooth;
}

body {
  @apply antialiased overflow-x-hidden;
}

.nav-link {
  @apply text-white text-sm font-medium transition-colors duration-300 hover:text-orange;
}

.nav-link.active {
  @apply text-orange;
}

.hero-grid {
  background-image: 
    linear-gradient(rgba(255, 255, 255, 0.03) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255, 255, 255, 0.03) 1px, transparent 1px);
  background-size: 50px 50px;
}

.pulse-dot {
  animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes fadeInDown {
  from {
    opacity: 0;
    transform: translateY(-20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.glass {
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(12px);
  border: 1px solid rgba(255, 255, 255, 0.2);
}

::-webkit-scrollbar {
  width: 8px;
}

::-webkit-scrollbar-track {
  background: rgba(26, 46, 90, 0.1);
}

::-webkit-scrollbar-thumb {
  background: #e87722;
  border-radius: 4px;
}

::-webkit-scrollbar-thumb:hover {
  background: #f5a623;
}
```

---

### `src/main.tsx`
```tsx
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
```

---

### `src/App.tsx`
```tsx
import React from 'react'
import Navigation from './components/Navigation'
import Hero from './components/Hero'
import Services from './components/Services'
import Products from './components/Products'
import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'
import './index.css'

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-navy-dark via-navy to-navy-light overflow-x-hidden">
      <Navigation />
      <main>
        <Hero />
        <Services />
        <Products />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
```

---

### `src/components/Navigation.tsx`
```tsx
import React, { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'

const Navigation: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeLink, setActiveLink] = useState('home')

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'services', 'cars', 'about', 'contact']
      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveLink(section)
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-[5%]" style={{ height: '70px', background: 'rgba(26, 46, 90, 0.97)', backdropFilter: 'blur(10px)' }}>
      <a href="#home" className="flex items-center gap-2.5 no-underline">
        <div style={{ width: '42px', height: '42px' }} className="flex items-center justify-center bg-orange rounded-full text-white font-bold text-lg">
          PL
        </div>
        <div className="flex flex-col leading-none">
          <span className="font-bold text-white tracking-wide" style={{ fontFamily: "'Playfair Display', serif", fontSize: '1rem' }}>PRINCE LOUIS</span>
          <span className="font-medium tracking-widest uppercase text-orange" style={{ fontSize: '0.6rem' }}>HOLDINGS</span>
        </div>
      </a>

      <ul className="hidden md:flex items-center gap-10 list-none">
        {['home', 'services', 'cars', 'about'].map((link) => (
          <li key={link}>
            <a href={`#${link}`} className={`nav-link ${activeLink === link ? 'active' : ''}`}>
              {link.charAt(0).toUpperCase() + link.slice(1)}
            </a>
          </li>
        ))}
        <li>
          <a href="#contact" className="text-white font-semibold text-sm px-6 py-2 rounded-full transition-all duration-300 hover:-translate-y-1" style={{ background: 'linear-gradient(135deg, #e87722, #f5a623)', boxShadow: '0 4px 15px rgba(232, 119, 34, 0.35)' }}>
            Contact Us
          </a>
        </li>
      </ul>

      <button className="md:hidden flex flex-col gap-1.5 p-1.5 bg-transparent border-0" onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Toggle menu">
        {isMenuOpen ? <X className="text-white" size={24} /> : <Menu className="text-white" size={24} />}
      </button>

      {isMenuOpen && (
        <div className="fixed left-0 right-0 z-40 flex flex-col md:hidden overflow-hidden" style={{ top: '70px', background: 'rgba(13, 27, 56, 0.98)', backdropFilter: 'blur(20px)', maxHeight: 'calc(100vh - 70px)', borderTop: '1px solid rgba(255, 255, 255, 0.08)' }}>
          {['home', 'services', 'cars', 'about', 'contact'].map((link) => (
            <a 
              key={link} 
              href={`#${link}`} 
              className="px-[5%] py-4 text-base font-medium transition-colors duration-300 hover:text-orange" 
              style={{ color: 'rgba(255, 255, 255, 0.85)', borderBottom: '1px solid rgba(255, 255, 255, 0.06)' }} 
              onClick={() => setIsMenuOpen(false)}
            >
              {link.charAt(0).toUpperCase() + link.slice(1)}
            </a>
          ))}
        </div>
      )}
    </nav>
  )
}

export default Navigation
```

---

### `src/components/Hero.tsx`
```tsx
import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, Phone } from 'lucide-react'

const Hero: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  }

  return (
    <section id="home" className="relative flex items-center min-h-screen overflow-hidden" style={{ background: 'linear-gradient(135deg, #0d1b38 0%, #1a2e5a 50%, #1e3a7a 100%)' }}>
      <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle at 20% 50%, rgba(232, 119, 34, 0.08) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(139, 26, 58, 0.10) 0%, transparent 40%)' }}></div>
      <div className="absolute inset-0 hero-grid"></div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-[5%] grid grid-cols-1 lg:grid-cols-2 gap-16 items-center" style={{ paddingTop: '70px', minHeight: '100vh' }}>
        <motion.div initial="hidden" animate={isVisible ? "visible" : "hidden"} variants={containerVariants}>
          <motion.div variants={itemVariants} className="inline-flex items-center gap-2 text-xs font-bold tracking-wider uppercase mb-6 rounded-full glass px-3.5 py-2">
            <span className="pulse-dot w-1.5 h-1.5 rounded-full bg-orange inline-block"></span>
            <span style={{ color: '#e87722' }}>Uganda's Premier Auto Importer</span>
          </motion.div>

          <motion.h1 variants={itemVariants} className="font-black leading-tight mb-6 text-white" style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(2.4rem, 4.5vw, 3.8rem)' }}>
            We Can Meet Your Needs{' '}
            <span style={{ color: '#e87722' }}>With Ease</span>
          </motion.h1>

          <motion.p variants={itemVariants} className="text-base leading-relaxed mb-10 max-w-lg" style={{ color: 'rgba(255, 255, 255, 0.7)' }}>
            Prince Louis Holdings connects Uganda to the world's finest vehicles, machinery and all other products at factory prices from Japan to China, India to Europe. Full Mombasa port clearance, URA tax consultation, spare parts & money transfer — all under one roof.
          </motion.p>

          <motion.div variants={itemVariants} className="flex flex-wrap gap-4 mb-12">
            <button className="flex items-center gap-2 font-bold text-base px-8 py-3.5 rounded-full text-white transition-all duration-300 hover:-translate-y-1" style={{ background: 'linear-gradient(135deg, #e87722, #f5a623)', boxShadow: '0 4px 20px rgba(232, 119, 34, 0.4)' }}>
              Get Started <ArrowRight size={18} />
            </button>
            <button className="flex items-center gap-2 font-bold text-base px-8 py-3.5 rounded-full text-white transition-all duration-300 hover:scale-105 border" style={{ borderColor: 'rgba(255, 255, 255, 0.2)', color: 'rgba(255, 255, 255, 0.9)' }}>
              <Phone size={18} /> Call Us
            </button>
          </motion.div>
        </motion.div>

        <motion.div initial={{ opacity: 0, x: 50 }} animate={isVisible ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.8, delay: 0.6 }} className="relative hidden lg:block">
          <div className="relative w-full aspect-square rounded-2xl overflow-hidden" style={{ background: 'linear-gradient(135deg, rgba(232, 119, 34, 0.2), rgba(139, 26, 58, 0.2))', backdropFilter: 'blur(10px)' }}>
            <img src="https://i.ibb.co/bgPPxHyx/landcruiser-2023.jpg" alt="Vehicle" className="w-full h-full object-cover" />
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero
```

---

### `src/components/Services.tsx`
```tsx
import React from 'react'
import { motion } from 'framer-motion'
import { Truck, Ship, Package, DollarSign, Wrench, FileText, MapPin } from 'lucide-react'
import ServiceCard from './ServiceCard'

const Services: React.FC = () => {
  const services = [
    {
      icon: Truck,
      title: 'Car Importation',
      description: 'Source and import vehicles from Japan, China, India & Europe',
    },
    {
      icon: Ship,
      title: 'Mombasa Clearance',
      description: 'Complete port clearance services at Mombasa',
    },
    {
      icon: Package,
      title: 'Goods Sourcing',
      description: 'Source any products from China, India & Japan',
    },
    {
      icon: DollarSign,
      title: 'Money Transfer',
      description: 'Fast and secure money transfer to India',
    },
    {
      icon: Wrench,
      title: 'Spare Parts',
      description: 'High-quality spare parts delivery',
    },
    {
      icon: FileText,
      title: 'URA Consultation',
      description: 'Expert URA tax consultation services',
    },
  ]

  return (
    <section id="services" className="relative py-20 px-[5%]">
      <div className="max-w-7xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
          <h2 className="font-black text-white mb-4" style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(2rem, 3vw, 3rem)' }}>
            Our Services
          </h2>
          <p className="text-base max-w-2xl mx-auto" style={{ color: 'rgba(255, 255, 255, 0.7)' }}>
            Complete solutions for vehicle importation, logistics, and goods sourcing
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div key={index} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.1 }}>
              <ServiceCard {...service} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services
```

---

### `src/components/ServiceCard.tsx`
```tsx
import React from 'react'
import { LucideIcon } from 'lucide-react'

interface ServiceCardProps {
  icon: LucideIcon
  title: string
  description: string
}

const ServiceCard: React.FC<ServiceCardProps> = ({ icon: Icon, title, description }) => {
  return (
    <div className="glass rounded-2xl p-8 hover:scale-105 transition-transform duration-300 cursor-pointer group">
      <div className="mb-4">
        <Icon className="w-10 h-10 text-orange group-hover:text-orange-light transition-colors" />
      </div>
      <h3 className="text-xl font-bold text-white mb-3">{title}</h3>
      <p style={{ color: 'rgba(255, 255, 255, 0.7)' }}>{description}</p>
    </div>
  )
}

export default ServiceCard
```

---

### `src/components/Products.tsx`
```tsx
import React from 'react'
import { motion } from 'framer-motion'

const Products: React.FC = () => {
  return (
    <section id="cars" className="relative py-20 px-[5%]">
      <div className="max-w-7xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
          <h2 className="font-black text-white mb-4" style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(2rem, 3vw, 3rem)' }}>
            Featured Products
          </h2>
          <p className="text-base max-w-2xl mx-auto" style={{ color: 'rgba(255, 255, 255, 0.7)' }}>
            Handpicked vehicles and products available for import
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[1, 2, 3].map((item) => (
            <motion.div key={item} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="glass rounded-2xl overflow-hidden hover:scale-105 transition-transform duration-300">
              <div className="aspect-video bg-gradient-to-br from-orange to-orange-light flex items-center justify-center">
                <span className="text-white font-bold text-lg">Product {item}</span>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2">Vehicle or Product</h3>
                <p style={{ color: 'rgba(255, 255, 255, 0.7)' }} className="mb-4">Quality product description</p>
                <button className="text-orange font-semibold hover:text-orange-light transition-colors">Learn More →</button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Products
```

---

### `src/components/About.tsx`
```tsx
import React from 'react'
import { motion } from 'framer-motion'

const About: React.FC = () => {
  return (
    <section id="about" className="relative py-20 px-[5%]">
      <div className="max-w-7xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center">
          <h2 className="font-black text-white mb-4" style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(2rem, 3vw, 3rem)' }}>
            About Prince Louis Holdings
          </h2>
          <p className="text-base max-w-2xl mx-auto" style={{ color: 'rgba(255, 255, 255, 0.7)' }} className="mb-8">
            Uganda's leading vehicle and goods importation company, established to connect the nation to quality products at factory prices.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mt-12">
            {[
              { number: '500+', label: 'Happy Clients' },
              { number: '4+', label: 'Years Experience' },
              { number: '1000+', label: 'Vehicles Imported' },
              { number: '24/7', label: 'Customer Support' },
            ].map((stat, index) => (
              <motion.div key={index} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: index * 0.1 }} className="glass rounded-2xl p-8">
                <div className="text-4xl font-bold text-orange mb-2">{stat.number}</div>
                <div className="text-white">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default About
```

---

### `src/components/Contact.tsx`
```tsx
import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Phone, Mail, MapPin } from 'lucide-react'

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    alert('Thank you for your message! We will get back to you soon.')
    setFormData({ name: '', email: '', message: '' })
  }

  return (
    <section id="contact" className="relative py-20 px-[5%]">
      <div className="max-w-7xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
          <h2 className="font-black text-white mb-4" style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(2rem, 3vw, 3rem)' }}>
            Get In Touch
          </h2>
          <p className="text-base max-w-2xl mx-auto" style={{ color: 'rgba(255, 255, 255, 0.7)' }}>
            Contact us for any inquiries about our services
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.form onSubmit={handleSubmit} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="space-y-6">
            <input type="text" name="name" placeholder="Your Name" value={formData.name} onChange={handleChange} className="w-full px-6 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:border-orange transition-colors" required />
            <input type="email" name="email" placeholder="Your Email" value={formData.email} onChange={handleChange} className="w-full px-6 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:border-orange transition-colors" required />
            <textarea name="message" placeholder="Your Message" rows={5} value={formData.message} onChange={handleChange} className="w-full px-6 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:border-orange transition-colors" required></textarea>
            <button type="submit" className="w-full px-8 py-3 rounded-lg text-white font-bold transition-all duration-300" style={{ background: 'linear-gradient(135deg, #e87722, #f5a623)' }}>
              Send Message
            </button>
          </motion.form>

          <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="space-y-8">
            <div className="glass rounded-2xl p-8 flex items-start gap-4">
              <Phone className="w-6 h-6 text-orange flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-lg font-bold text-white mb-2">Phone</h3>
                <p style={{ color: 'rgba(255, 255, 255, 0.7)' }}>+256 781 382 904</p>
              </div>
            </div>
            <div className="glass rounded-2xl p-8 flex items-start gap-4">
              <Mail className="w-6 h-6 text-orange flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-lg font-bold text-white mb-2">Email</h3>
                <p style={{ color: 'rgba(255, 255, 255, 0.7)' }}>princelouisholdings@gmail.com</p>
              </div>
            </div>
            <div className="glass rounded-2xl p-8 flex items-start gap-4">
              <MapPin className="w-6 h-6 text-orange flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-lg font-bold text-white mb-2">Address</h3>
                <p style={{ color: 'rgba(255, 255, 255, 0.7)' }}>Mukwano Courts, Buganda Road, L3 Suite 301-302E, Kampala, Uganda</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Contact
```

---

### `src/components/Footer.tsx`
```tsx
import React from 'react'
import { Facebook, Instagram, Twitter, Linkedin } from 'lucide-react'

const Footer: React.FC = () => {
  return (
    <footer className="border-t" style={{ borderColor: 'rgba(255, 255, 255, 0.1)', background: 'rgba(13, 27, 56, 0.5)' }}>
      <div className="max-w-7xl mx-auto px-[5%] py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-white font-bold mb-4">About</h3>
            <ul className="space-y-2">
              <li><a href="#" style={{ color: 'rgba(255, 255, 255, 0.7)' }} className="hover:text-orange transition-colors">About Us</a></li>
              <li><a href="#" style={{ color: 'rgba(255, 255, 255, 0.7)' }} className="hover:text-orange transition-colors">Careers</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-white font-bold mb-4">Services</h3>
            <ul className="space-y-2">
              <li><a href="#" style={{ color: 'rgba(255, 255, 255, 0.7)' }} className="hover:text-orange transition-colors">Car Import</a></li>
              <li><a href="#" style={{ color: 'rgba(255, 255, 255, 0.7)' }} className="hover:text-orange transition-colors">Mombasa Clearance</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-white font-bold mb-4">Legal</h3>
            <ul className="space-y-2">
              <li><a href="#" style={{ color: 'rgba(255, 255, 255, 0.7)' }} className="hover:text-orange transition-colors">Privacy Policy</a></li>
              <li><a href="#" style={{ color: 'rgba(255, 255, 255, 0.7)' }} className="hover:text-orange transition-colors">Terms & Conditions</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-white font-bold mb-4">Follow Us</h3>
            <div className="flex gap-4">
              <a href="#" className="text-orange hover:text-orange-light transition-colors"><Facebook size={20} /></a>
              <a href="#" className="text-orange hover:text-orange-light transition-colors"><Instagram size={20} /></a>
              <a href="#" className="text-orange hover:text-orange-light transition-colors"><Twitter size={20} /></a>
              <a href="#" className="text-orange hover:text-orange-light transition-colors"><Linkedin size={20} /></a>
            </div>
          </div>
        </div>

        <div className="border-t" style={{ borderColor: 'rgba(255, 255, 255, 0.1)' }}>
          <div className="pt-8 text-center" style={{ color: 'rgba(255, 255, 255, 0.5)' }}>
            <p>&copy; 2024 Prince Louis Holdings. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
```

---

### `src/hooks/useScrollAnimation.ts`
```ts
import { useEffect, useRef } from 'react'

export const useScrollAnimation = (callback: () => void, threshold = 0.1) => {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          callback()
        }
      },
      { threshold }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current)
      }
    }
  }, [callback, threshold])

  return ref
}
```

---

### `src/utils/constants.ts`
```ts
export const COLORS = {
  navy: '#1a2e5a',
  'navy-dark': '#0d1b38',
  'navy-light': '#1e3a7a',
  orange: '#e87722',
  'orange-light': '#f5a623',
}

export const CONTACT_INFO = {
  phone: '+256 781 382 904',
  email: 'princelouisholdings@gmail.com',
  address: 'Mukwano Courts, Buganda Road, L3 Suite 301-302E, Kampala, Uganda',
}
```

---

## 🚀 Setup Instructions

1. **Create the folder structure** as shown above
2. **Create each file** with the contents provided
3. **Run npm install** in the AndrewWeb directory:
   ```bash
   cd C:\Users\CRISEN\Desktop\AndrewWeb
   npm install
   ```

4. **Start the dev server:**
   ```bash
   npm run dev
   ```

5. **Open your browser** to the URL shown (usually `http://localhost:5173`)

---

## ✅ Checklist

- [ ] Create `src/` directory
- [ ] Create `src/components/` directory
- [ ] Create `src/hooks/` directory
- [ ] Create `src/utils/` directory
- [ ] Create `src/index.css`
- [ ] Create `src/main.tsx`
- [ ] Create `src/App.tsx`
- [ ] Create all component files
- [ ] Create `src/hooks/useScrollAnimation.ts`
- [ ] Create `src/utils/constants.ts`
- [ ] Run `npm install`
- [ ] Run `npm run dev`

---

## 📚 File Organization Complete!

Once you've set this up, you'll have a fully functional React + TypeScript + Tailwind CSS website with animations and all features ready to customize!
