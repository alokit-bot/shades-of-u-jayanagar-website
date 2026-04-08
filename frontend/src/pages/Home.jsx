import React, { useState, useEffect } from 'react';
import { Phone, MapPin, Clock, Star, Scissors, Sparkles, Heart, Award, ChevronDown } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import { salonData } from '../data/mock';

const Home = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      setActiveSection(sectionId);
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md' : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-2">
              <Scissors className="w-8 h-8 text-[#61525a]" />
              <div>
                <h1 className="text-2xl font-bold text-[#1e1919]">{salonData.business.name}</h1>
                <p className="text-sm text-[#736c64]">{salonData.business.tagline}</p>
              </div>
            </div>
            
            <nav className="hidden md:flex space-x-8">
              {['home', 'about', 'services', 'gallery', 'testimonials', 'contact'].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`text-sm font-medium capitalize transition-colors duration-200 ${
                    activeSection === section ? 'text-[#61525a]' : 'text-[#736c64] hover:text-[#61525a]'
                  }`}
                >
                  {section}
                </button>
              ))}
            </nav>

            <a href={`tel:${salonData.business.phone}`}>
              <Button className="bg-[#61525a] hover:bg-[#4a3f45] text-white transition-all duration-300 hidden sm:flex">
                <Phone className="w-4 h-4 mr-2" />
                Book Now
              </Button>
            </a>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-[#f7f5f2] to-white pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
          <div className="inline-flex items-center space-x-2 bg-white px-4 py-2 rounded-full shadow-sm mb-6 animate-fade-in">
            <Star className="w-5 h-5 text-yellow-500 fill-yellow-500" />
            <span className="text-lg font-bold text-[#1e1919]">{salonData.business.rating}</span>
            <span className="text-[#736c64]">•</span>
            <span className="text-sm text-[#736c64]">{salonData.business.reviewCount}+ Reviews</span>
          </div>
          
          <h2 className="text-5xl md:text-7xl font-bold text-[#1e1919] mb-6 leading-tight">
            Transform Your Look,
            <br />
            <span className="text-[#61525a]">Elevate Your Style</span>
          </h2>
          
          <p className="text-xl text-[#736c64] mb-10 max-w-2xl mx-auto">
            Experience premium beauty and grooming services at Jayanagar's most trusted unisex salon.
            Professional care, exceptional results.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a href={`tel:${salonData.business.phone}`}>
              <Button size="lg" className="bg-[#61525a] hover:bg-[#4a3f45] text-white px-8 py-6 text-lg transition-all duration-300 hover:scale-105 shadow-lg">
                <Phone className="w-5 h-5 mr-2" />
                Call {salonData.business.phoneDisplay}
              </Button>
            </a>
            <Button 
              size="lg" 
              variant="outline" 
              onClick={() => scrollToSection('services')}
              className="border-[#61525a] text-[#61525a] hover:bg-[#61525a] hover:text-white px-8 py-6 text-lg transition-all duration-300 hover:scale-105"
            >
              View Services
            </Button>
          </div>

          <button 
            onClick={() => scrollToSection('about')}
            className="mt-16 animate-bounce"
          >
            <ChevronDown className="w-8 h-8 text-[#61525a]" />
          </button>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[#1e1919] mb-4">About Shades of U</h2>
            <div className="w-24 h-1 bg-[#61525a] mx-auto"></div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-lg text-[#1e1919] mb-6 leading-relaxed">
                {salonData.about.story}
              </p>
              <p className="text-lg text-[#736c64] mb-8 leading-relaxed">
                {salonData.about.mission}
              </p>
              
              <div className="grid grid-cols-2 gap-4">
                {salonData.about.values.map((value, index) => (
                  <div key={index} className="flex items-start space-x-2">
                    <Sparkles className="w-5 h-5 text-[#61525a] mt-1 flex-shrink-0" />
                    <span className="text-[#1e1919]">{value}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <Card className="bg-gradient-to-br from-[#61525a] to-[#4a3f45] text-white p-6 text-center transition-transform duration-300 hover:scale-105">
                <Award className="w-12 h-12 mx-auto mb-3" />
                <p className="text-3xl font-bold mb-1">{salonData.business.rating}</p>
                <p className="text-sm opacity-90">Star Rating</p>
              </Card>
              <Card className="bg-gradient-to-br from-[#f7f5f2] to-white p-6 text-center border-2 border-[#61525a] transition-transform duration-300 hover:scale-105">
                <Heart className="w-12 h-12 mx-auto mb-3 text-[#61525a]" />
                <p className="text-3xl font-bold text-[#1e1919] mb-1">{salonData.business.reviewCount}+</p>
                <p className="text-sm text-[#736c64]">Happy Clients</p>
              </Card>
              <Card className="bg-gradient-to-br from-[#f7f5f2] to-white p-6 text-center border-2 border-[#61525a] transition-transform duration-300 hover:scale-105">
                <Scissors className="w-12 h-12 mx-auto mb-3 text-[#61525a]" />
                <p className="text-3xl font-bold text-[#1e1919] mb-1">25+</p>
                <p className="text-sm text-[#736c64]">Services</p>
              </Card>
              <Card className="bg-gradient-to-br from-[#61525a] to-[#4a3f45] text-white p-6 text-center transition-transform duration-300 hover:scale-105">
                <Sparkles className="w-12 h-12 mx-auto mb-3" />
                <p className="text-3xl font-bold mb-1">5+</p>
                <p className="text-sm opacity-90">Years Experience</p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-[#f7f5f2]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[#1e1919] mb-4">Our Services</h2>
            <div className="w-24 h-1 bg-[#61525a] mx-auto mb-4"></div>
            <p className="text-lg text-[#736c64] max-w-2xl mx-auto">
              Premium beauty and grooming services tailored to your needs
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
            {salonData.services.map((serviceCategory) => (
              <Card key={serviceCategory.id} className="bg-white hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-[#1e1919] mb-6">{serviceCategory.category}</h3>
                  <div className="space-y-4">
                    {serviceCategory.items.map((item, index) => (
                      <div key={index} className="flex justify-between items-center pb-3 border-b border-gray-100 last:border-0">
                        <span className="text-[#1e1919] font-medium">{item.name}</span>
                        <span className="text-[#61525a] font-bold">{item.price}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <a href={`tel:${salonData.business.phone}`}>
              <Button size="lg" className="bg-[#61525a] hover:bg-[#4a3f45] text-white px-8 py-6 text-lg transition-all duration-300 hover:scale-105 shadow-lg">
                <Phone className="w-5 h-5 mr-2" />
                Book an Appointment
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[#1e1919] mb-4">Our Gallery</h2>
            <div className="w-24 h-1 bg-[#61525a] mx-auto mb-4"></div>
            <p className="text-lg text-[#736c64]">
              Glimpse into our world of beauty and style
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {salonData.gallery.map((image) => (
              <div 
                key={image.id} 
                className="relative overflow-hidden rounded-lg shadow-lg group cursor-pointer"
                style={{ paddingBottom: '75%' }}
              >
                <img 
                  src={image.url} 
                  alt={image.alt}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1e1919]/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <p className="text-white font-medium">{image.alt}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 bg-[#f7f5f2]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[#1e1919] mb-4">What Our Clients Say</h2>
            <div className="w-24 h-1 bg-[#61525a] mx-auto mb-4"></div>
            <p className="text-lg text-[#736c64]">
              Don't just take our word for it
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {salonData.testimonials.map((testimonial) => (
              <Card key={testimonial.id} className="bg-white hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <CardContent className="p-8">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-500 fill-yellow-500" />
                    ))}
                  </div>
                  <p className="text-[#1e1919] mb-6 italic leading-relaxed">"{testimonial.text}"</p>
                  <div className="border-t border-gray-100 pt-4">
                    <p className="font-bold text-[#1e1919]">{testimonial.name}</p>
                    <p className="text-sm text-[#736c64]">{testimonial.service}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[#1e1919] mb-4">Visit Us</h2>
            <div className="w-24 h-1 bg-[#61525a] mx-auto"></div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-gradient-to-br from-[#f7f5f2] to-white text-center p-8 border-2 border-[#61525a] hover:shadow-xl transition-all duration-300">
              <Phone className="w-12 h-12 mx-auto mb-4 text-[#61525a]" />
              <h3 className="text-xl font-bold text-[#1e1919] mb-3">Call Us</h3>
              <a 
                href={`tel:${salonData.business.phone}`}
                className="text-lg text-[#61525a] hover:underline font-medium"
              >
                {salonData.business.phoneDisplay}
              </a>
            </Card>
            
            <Card className="bg-gradient-to-br from-[#f7f5f2] to-white text-center p-8 border-2 border-[#61525a] hover:shadow-xl transition-all duration-300">
              <MapPin className="w-12 h-12 mx-auto mb-4 text-[#61525a]" />
              <h3 className="text-xl font-bold text-[#1e1919] mb-3">Location</h3>
              <p className="text-[#736c64] mb-3">{salonData.business.address}</p>
              <a 
                href={salonData.business.mapLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#61525a] hover:underline font-medium"
              >
                Get Directions →
              </a>
            </Card>
            
            <Card className="bg-gradient-to-br from-[#f7f5f2] to-white text-center p-8 border-2 border-[#61525a] hover:shadow-xl transition-all duration-300">
              <Clock className="w-12 h-12 mx-auto mb-4 text-[#61525a]" />
              <h3 className="text-xl font-bold text-[#1e1919] mb-3">Hours</h3>
              <p className="text-lg text-[#736c64] font-medium">{salonData.business.hours}</p>
              <p className="text-sm text-[#736c64] mt-2">Mon - Sun</p>
            </Card>
          </div>
          
          <div className="mt-12 text-center">
            <a href={`tel:${salonData.business.phone}`}>
              <Button size="lg" className="bg-[#61525a] hover:bg-[#4a3f45] text-white px-8 py-6 text-lg transition-all duration-300 hover:scale-105 shadow-lg">
                <Phone className="w-5 h-5 mr-2" />
                Book Your Appointment Now
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#1e1919] text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Scissors className="w-6 h-6" />
                <h3 className="text-xl font-bold">{salonData.business.name}</h3>
              </div>
              <p className="text-gray-400 mb-4">{salonData.business.tagline}</p>
              <div className="flex items-center space-x-2">
                <Star className="w-5 h-5 text-yellow-500 fill-yellow-500" />
                <span className="font-bold">{salonData.business.rating}</span>
                <span className="text-gray-400">({salonData.business.reviewCount}+ reviews)</span>
              </div>
            </div>
            
            <div>
              <h4 className="font-bold mb-4 text-lg">Quick Links</h4>
              <ul className="space-y-2">
                {['home', 'about', 'services', 'gallery', 'testimonials', 'contact'].map((section) => (
                  <li key={section}>
                    <button 
                      onClick={() => scrollToSection(section)}
                      className="text-gray-400 hover:text-white transition-colors duration-200 capitalize"
                    >
                      {section}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold mb-4 text-lg">Contact Info</h4>
              <ul className="space-y-3">
                <li className="flex items-start space-x-2">
                  <Phone className="w-5 h-5 mt-1 flex-shrink-0" />
                  <a href={`tel:${salonData.business.phone}`} className="text-gray-400 hover:text-white transition-colors duration-200">
                    {salonData.business.phoneDisplay}
                  </a>
                </li>
                <li className="flex items-start space-x-2">
                  <MapPin className="w-5 h-5 mt-1 flex-shrink-0" />
                  <span className="text-gray-400">{salonData.business.address}</span>
                </li>
                <li className="flex items-start space-x-2">
                  <Clock className="w-5 h-5 mt-1 flex-shrink-0" />
                  <span className="text-gray-400">{salonData.business.hours}</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 pt-8 text-center">
            <p className="text-gray-400">
              © {new Date().getFullYear()} {salonData.business.name}. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;