import { useState, useEffect } from 'react';
import { Calendar, Clock, MapPin, Mail, Phone, Instagram, Twitter, Facebook, Play } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import heroImage from '@/assets/hero-bg.jpg';
import { Link } from "react-router-dom";
import ReactDOM from 'react-dom/client';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import App from "src/App";


ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// Mock data for the festival
const festivalData = {
  dates: "March 15-22, 2024",
  location: "Venice, Italy",
  venue: {
    name: "Palazzo del Cinema",
    address: "Lungomare Marconi, 30126 Venice, Italy",
    coordinates: [12.3683, 45.4053]
  }
};



const films = [
  {
    id: 1,
    title: "Whispers in the Wind",
    director: "Sofia Martinez",
    runtime: "127 min",
    poster: "https://images.fineartamerica.com/images/artworkimages/mediumlarge/3/whispers-on-the-wind-edward-robert-hughes.jpg"

  },
  {
    id: 2,
    title: "Neon Dreams",
    director: "Akira Tanaka",
    runtime: "98 min",
    poster: "https://images.unsplash.com/photo-1518929458119-e5bf444c30f4?w=400&h=600&fit=crop"
  },
  {
    id: 3,
    title: "The Last Chronicle",
    director: "Emma Thompson",
    runtime: "145 min",
    poster: "https://images.unsplash.com/photo-1440404653325-ab127d49abc1?w=400&h=600&fit=crop"
  },
  {
    id: 4,
    title: "Midnight in Mumbai",
    director: "Raj Patel",
    runtime: "112 min",
    poster: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=600&fit=crop"
  },
  {
    id: 5,
    title: "Silent Echoes",
    director: "Marie Dubois",
    runtime: "134 min",
    poster: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=400&h=600&fit=crop"
  }
];

const schedule = [
  { date: "March 15", events: ["Opening Ceremony", "Whispers in the Wind", "Industry Mixer"] },
  { date: "March 16", events: ["Neon Dreams", "Director's Panel", "The Last Chronicle"] },
  { date: "March 17", events: ["Midnight in Mumbai", "Screenplay Workshop", "Silent Echoes"] },
  { date: "March 18", events: ["Documentary Day", "Film Critics Forum", "Evening Gala"] },
  { date: "March 19", events: ["Short Film Showcase", "Young Filmmaker Awards", "Networking Event"] },
  { date: "March 20", events: ["International Competition", "Jury Deliberation", "Special Screenings"] },
  { date: "March 21", events: ["Award Ceremony", "Red Carpet Event", "After Party"] },
  { date: "March 22", events: ["Closing Ceremony", "Final Screenings", "Farewell Brunch"] }
];

const pastHighlights = [
  {
    id: 1,
    type: "image",
    url: "https://images.unsplash.com/photo-1594909122845-11baa439b7bf?w=800&h=600&fit=crop",
    caption: "CineSpectra 2023 Opening Ceremony"
  },
  {
    id: 2,
    type: "image", 
    url: "https://images.unsplash.com/photo-1626814026160-2237a95fc5a0?w=800&h=600&fit=crop",
    caption: "Award Winners Celebrating"
  },
  {
    id: 3,
    type: "image",
    url: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=800&h=600&fit=crop",
    caption: "Industry Panel Discussion"
  },
  {
    id: 4,
    type: "image",
    url: "https://t3.ftcdn.net/jpg/01/85/55/44/360_F_185554469_T3TrOWPsW8b9BGwBkGCNP2okOkTBDhIX.jpg",
    caption: "Red Carpet Premiere"
  }
];

const sponsors = [
  { name: "Sony Pictures", logo: "https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=200&h=100&fit=crop" },
  { name: "Venice Film Institute", logo: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=200&h=100&fit=crop" },
  { name: "Europa Cinema", logo: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=200&h=100&fit=crop" },
  { name: "Italian Ministry of Culture", logo: "https://images.unsplash.com/photo-1560520653-9e0e4c89eb11?w=200&h=100&fit=crop" }
];

const Index = () => {
  const [selectedHighlight, setSelectedHighlight] = useState<any>(null);
  const [email, setEmail] = useState('');

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('fade-in');
        }
      });
    }, observerOptions);

    const sections = document.querySelectorAll('.observe-section');
    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Newsletter signup logic would go here
    console.log('Newsletter signup:', email);
    setEmail('');
  };

  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-serif font-bold text-primary">CineSpectra</h1>
          <div className="hidden md:flex space-x-8">
            <a href="#about" className="text-foreground hover:text-primary transition-colors">About</a>
            <a href="#program" className="text-foreground hover:text-primary transition-colors">Program</a>
            <a href="#schedule" className="text-foreground hover:text-primary transition-colors">Schedule</a>
            <a href="#venue" className="text-foreground hover:text-primary transition-colors">Venue</a>
          </div>
          <Link to="/tickets">
            <Button className="btn-hero" variant="default">Get Tickets</Button>
          </Link>

        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroImage})` }}
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <h1 className="text-hero mb-6 fade-in">CineSpectra</h1>
          <p className="text-xl md:text-2xl text-foreground/90 mb-4 fade-in-delay font-light">
            Boutique International Film Festival
          </p>
          <p className="text-lg text-foreground/80 mb-8 fade-in-delay-2">
            {festivalData.dates} • {festivalData.location}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center fade-in-delay-2">
            <Link to="/tickets">
              <Button className="btn-hero text-lg px-8 py-4" variant="default">Get Tickets</Button>
            </Link>

            <Button variant="outline" className="btn-secondary text-lg px-8 py-4">
              View Program
            </Button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 observe-section">
        <div className="container mx-auto px-4">
          <h2 className="text-section text-center mb-12">About CineSpectra</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                CineSpectra is a boutique international film festival that celebrates the art of cinema in its most refined form. 
                We curate exceptional films from emerging and established filmmakers worldwide, creating an intimate platform 
                for cinematic excellence.
              </p>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Our mission is to bridge cultures through storytelling, foster meaningful dialogue between filmmakers and audiences, 
                and support the next generation of cinematic visionaries.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">150+</div>
                  <div className="text-sm text-muted-foreground">Films Screened</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">40+</div>
                  <div className="text-sm text-muted-foreground">Countries</div>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <Card className="card-cinematic">
                <CardHeader>
                  <CardTitle className="text-lg">Curation Excellence</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Every film is carefully selected by our international jury of industry experts.
                  </p>
                </CardContent>
              </Card>
              <Card className="card-cinematic">
                <CardHeader>
                  <CardTitle className="text-lg">Cultural Bridge</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Connecting diverse voices and stories from around the globe.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Program Section */}
      <section id="program" className="py-20 bg-secondary/30 observe-section">
        <div className="container mx-auto px-4">
          <h2 className="text-section text-center mb-12">Official Selection</h2>
          <div className="overflow-x-auto pb-4">
            <div className="flex space-x-6 min-w-max">
              {films.map((film) => (
                <Card key={film.id} className="card-cinematic w-80 flex-shrink-0">
                  <div className="relative h-96 rounded-t-xl overflow-hidden">
                    <img 
                      src={film.poster} 
                      alt={film.title}
                      className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <div className="absolute bottom-4 left-4 right-4">
                      <Badge className="mb-2 bg-primary text-primary-foreground">{film.runtime}</Badge>
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-2">{film.title}</h3>
                    <p className="text-muted-foreground">Directed by {film.director}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Schedule Section */}
      <section id="schedule" className="py-20 observe-section">
        <div className="container mx-auto px-4">
          <h2 className="text-section text-center mb-12">Festival Schedule</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {schedule.map((day, index) => (
              <Card key={index} className="card-cinematic">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Calendar className="w-5 h-5 text-primary" />
                    {day.date}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    {day.events.map((event, eventIndex) => (
                      <div key={eventIndex} className="flex items-center gap-2 text-sm">
                        <Clock className="w-4 h-4 text-muted-foreground" />
                        <span>{event}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Past Highlights */}
      <section className="py-20 bg-secondary/30 observe-section">
        <div className="container mx-auto px-4">
          <h2 className="text-section text-center mb-12">Past Highlights</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {pastHighlights.map((highlight) => (
              <div 
                key={highlight.id}
                className="relative group cursor-pointer"
                onClick={() => setSelectedHighlight(highlight)}
              >
                <div className="aspect-video rounded-xl overflow-hidden">
                  <img 
                    src={highlight.url} 
                    alt={highlight.caption}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <Play className="w-12 h-12 text-white" />
                  </div>
                </div>
                <p className="mt-2 text-sm text-muted-foreground text-center">{highlight.caption}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Venue Section */}
      <section id="venue" className="py-20 observe-section">
        <div className="container mx-auto px-4">
          <h2 className="text-section text-center mb-12">Venue & Travel</h2>
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <Card className="card-cinematic">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <MapPin className="w-5 h-5 text-primary" />
                    {festivalData.venue.name}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">{festivalData.venue.address}</p>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <Phone className="w-4 h-4 text-primary" />
                      <span>+39 041 521 8711</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Mail className="w-4 h-4 text-primary" />
                      <span>info@cinespectra.com</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
            <div className="bg-muted rounded-xl h-96 flex items-center justify-center">
              <p className="text-muted-foreground">Interactive Map Coming Soon</p>
            </div>
          </div>
        </div>
      </section>

      {/* Sponsors */}
      <section className="py-20 bg-secondary/30 observe-section">
        <div className="container mx-auto px-4">
          <h2 className="text-section text-center mb-12">Partners & Sponsors</h2>
          <div className="flex flex-wrap justify-center items-center gap-8">
            {sponsors.map((sponsor, index) => (
              <div key={index} className="bg-white p-4 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                <img 
                  src={sponsor.logo} 
                  alt={sponsor.name}
                  className="h-16 w-32 object-contain grayscale hover:grayscale-0 transition-all"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-card border-t border-border py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="text-2xl font-serif font-bold text-primary mb-4">CineSpectra</h3>
              <p className="text-muted-foreground mb-4">
                Celebrating cinematic excellence through curated international storytelling.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  <Instagram className="w-5 h-5" />
                </a>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  <Twitter className="w-5 h-5" />
                </a>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  <Facebook className="w-5 h-5" />
                </a>
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <div className="space-y-2">
                <a href="#about" className="block text-muted-foreground hover:text-primary transition-colors">About</a>
                <a href="#program" className="block text-muted-foreground hover:text-primary transition-colors">Program</a>
                <a href="#schedule" className="block text-muted-foreground hover:text-primary transition-colors">Schedule</a>
                <a href="#venue" className="block text-muted-foreground hover:text-primary transition-colors">Venue</a>
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Newsletter</h4>
              <form onSubmit={handleNewsletterSubmit} className="space-y-4">
                <Input 
                  type="email" 
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="bg-background"
                />
                <Button type="submit" className="btn-secondary w-full">
                  Subscribe
                </Button>
              </form>
            </div>
          </div>
          
          <div className="border-t border-border pt-8 text-center text-muted-foreground">
            <p>&copy; 2024 CineSpectra. All rights reserved. | Privacy Policy | Terms of Service</p>
          </div>
        </div>
      </footer>

      {/* Lightbox Modal */}
      {selectedHighlight && (
        <div 
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
          onClick={() => setSelectedHighlight(null)}
        >
          <div className="relative max-w-4xl w-full">
            <img 
              src={selectedHighlight.url} 
              alt={selectedHighlight.caption}
              className="w-full h-auto rounded-lg"
            />
            <p className="text-white text-center mt-4">{selectedHighlight.caption}</p>
            <button 
              onClick={() => setSelectedHighlight(null)}
              className="absolute top-4 right-4 text-white hover:text-primary text-2xl"
            >
              ×
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Index;
