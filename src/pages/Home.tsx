import React from 'react';
import { BookOpen, FileText, Bell, Play, Download, Eye, Users, FileCheck, TrendingUp, ArrowRight, Star, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { IMAGES, getOptimizedImage } from '@/config/images';

const Home = () => {
  const features = [
    {
      title: 'Study Notes',
      description: 'Comprehensive notes covering all subjects and topics in detail',
      icon: <BookOpen className="w-6 h-6 sm:w-8 sm:h-8 text-primary" />,
      image: IMAGES.features.notes
    },
    {
      title: 'Past Questions',
      description: 'Access previous exam questions to practice and prepare effectively',
      icon: <FileText className="w-6 h-6 sm:w-8 sm:h-8 text-primary" />,
      image: IMAGES.features.pastQuestions
    },
    {
      title: 'Syllabus',
      description: 'Complete curriculum and course outlines for structured learning',
      icon: <FileCheck className="w-6 h-6 sm:w-8 sm:h-8 text-primary" />,
      image: IMAGES.features.syllabus
    },
    {
      title: 'Notices',
      description: 'Stay updated with important announcements and notifications',
      icon: <Bell className="w-6 h-6 sm:w-8 sm:h-8 text-primary" />,
      image: IMAGES.features.notices
    }
  ];

  const latestMaterials = [
    {
      title: 'Advanced Python Programming',
      subject: 'Python',
      semester: '6th Semester',
      date: 'Jan 15, 2025',
      image: IMAGES.materials.programming,
      rating: 4.8,
      downloads: 1250,
      githubLink: 'https://github.com/python/cpython'
    },
    {
      title: 'Django Web Framework',
      subject: 'Django',
      semester: '5th Semester', 
      date: 'Jan 12, 2025',
      image: IMAGES.materials.programming,
      rating: 4.9,
      downloads: 980,
      githubLink: 'https://github.com/django/django'
    },
    {
      title: 'Laravel PHP Framework',
      subject: 'Laravel',
      semester: '4th Semester',
      date: 'Jan 10, 2025',
      image: IMAGES.materials.programming,
      rating: 4.7,
      downloads: 1500,
      githubLink: 'https://github.com/laravel/laravel'
    },
    {
      title: 'Git Version Control',
      subject: 'Git',
      semester: '3rd Semester',
      date: 'Jan 8, 2025',
      image: IMAGES.materials.programming,
      rating: 4.6,
      downloads: 750,
      githubLink: 'https://github.com/git/git'
    },
    {
      title: 'Technical Documentation',
      subject: 'Technical Writing',
      semester: '2nd Semester',
      date: 'Jan 5, 2025',
      image: IMAGES.materials.programming,
      rating: 4.5,
      downloads: 650,
      githubLink: 'https://github.com/github/docs'
    }
  ];

  const stats = [
    {
      label: 'Active Students',
      value: '10,000+',
      icon: <Users className="w-5 h-5 sm:w-6 sm:h-6" />
    },
    {
      label: 'Study Materials',
      value: '500+',
      icon: <FileText className="w-5 h-5 sm:w-6 sm:h-6" />
    },
    {
      label: 'Success Rate',
      value: '95%',
      icon: <TrendingUp className="w-5 h-5 sm:w-6 sm:h-6" />
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary/10 via-background to-primary/5 py-12 sm:py-16 lg:py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-transparent"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="space-y-4 sm:space-y-6 text-center lg:text-left">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-foreground leading-tight">
                Master Your Studies with{' '}
                <span className="text-primary bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">
                  Comprehensive Learning Resources
                </span>
              </h1>
              <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto lg:mx-0">
                Access notes, past questions, syllabus, and important notices all in one place. 
                Your academic success starts here.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground group">
                  <Play className="w-4 h-4 sm:w-5 sm:h-5 mr-2 group-hover:scale-110 transition-transform" />
                  Get Started
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button size="lg" variant="outline" className="group">
                  <Eye className="w-4 h-4 sm:w-5 sm:h-5 mr-2 group-hover:scale-110 transition-transform" />
                  Explore Resources
                </Button>
              </div>
            </div>
            <div className="relative order-first lg:order-last">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src={getOptimizedImage(IMAGES.hero.dashboard, 600, 400)}
                  alt="Learning Dashboard"
                  className="w-full h-auto object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <h3 className="text-lg font-semibold mb-2">Interactive Learning Platform</h3>
                  <p className="text-sm opacity-90">Access all your study materials in one place</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Everything You Need to Excel
            </h2>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto">
              Comprehensive study resources designed for your academic success
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="hover:shadow-xl transition-all duration-300 border-border/50 hover:-translate-y-2 group overflow-hidden">
                <div className="aspect-video relative overflow-hidden">
                  <img 
                    src={getOptimizedImage(feature.image, 400, 250)}
                    alt={feature.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  <div className="absolute top-4 right-4 p-2 bg-primary/90 rounded-full">
                    {feature.icon}
                  </div>
                </div>
                <CardHeader className="text-center pb-4">
                  <CardTitle className="text-lg sm:text-xl group-hover:text-primary transition-colors">
                    {feature.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-center text-sm sm:text-base">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 sm:py-16 bg-gradient-to-br from-primary/5 via-muted/20 to-primary/10 border-y border-border/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-2">
              Our Impact
            </h2>
            <p className="text-muted-foreground">
              Trusted by students worldwide
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="inline-flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 bg-primary/10 hover:bg-primary/20 rounded-full mb-4 transition-all duration-300 group-hover:scale-110">
                  <div className="text-primary group-hover:scale-110 transition-transform duration-300">
                    {stat.icon}
                  </div>
                </div>
                <div className="text-3xl sm:text-4xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors duration-300">
                  {stat.value}
                </div>
                <div className="text-sm sm:text-base text-muted-foreground font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Latest Materials */}
      <section className="py-12 sm:py-16 lg:py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Latest Study Materials
            </h2>
            <p className="text-lg sm:text-xl text-muted-foreground">
              Fresh technical content added regularly to keep you ahead
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 sm:gap-8">
            {latestMaterials.map((material, index) => (
              <Card key={index} className="hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group overflow-hidden">
                <div className="aspect-video relative overflow-hidden">
                  <img 
                    src={getOptimizedImage(material.image, 400, 250)}
                    alt={material.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute top-4 left-4">
                    <span className="bg-primary text-primary-foreground px-2 py-1 rounded text-xs font-medium">
                      {material.semester}
                    </span>
                  </div>
                  <div className="absolute bottom-4 right-4 flex items-center space-x-1 text-white text-sm">
                    <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    <span>{material.rating}</span>
                  </div>
                </div>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <span className="text-xs sm:text-sm text-primary font-medium">{material.subject}</span>
                    <span className="text-xs sm:text-sm text-muted-foreground">{material.date}</span>
                  </div>
                  <CardTitle className="text-base sm:text-lg group-hover:text-primary transition-colors">
                    {material.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between mb-2">
                    <Button variant="outline" size="sm" className="text-xs sm:text-sm group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                      <Download className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />
                      Download
                    </Button>
                    <span className="text-xs text-muted-foreground">
                      {material.downloads} downloads
                    </span>
                  </div>
                  <Button variant="ghost" size="sm" asChild className="w-full text-xs">
                    <a href={material.githubLink} target="_blank" rel="noopener noreferrer" className="group">
                      <ExternalLink className="w-3 h-3 mr-2 group-hover:scale-110 transition-transform" />
                      View on GitHub
                    </a>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-primary to-primary/80 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="w-full h-full bg-repeat" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }}></div>
        </div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-primary-foreground mb-4">
            Ready to Excel in Your Studies?
          </h2>
          <p className="text-lg sm:text-xl text-primary-foreground/90 mb-6 sm:mb-8 max-w-2xl mx-auto">
            Join thousands of students who are already using LearnHub to achieve academic success
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="bg-background text-foreground hover:bg-background/90 group">
              <BookOpen className="w-4 h-4 sm:w-5 sm:h-5 mr-2 group-hover:scale-110 transition-transform" />
              Start Learning Now
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button size="lg" variant="outline" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
              <Eye className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
              View Demo
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
