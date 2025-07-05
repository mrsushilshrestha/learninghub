import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { GraduationCap, User, Sun, Moon, Palette, Menu, X } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const location = useLocation();
  const { theme, setTheme, isDark, toggleDarkMode } = useTheme();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navigation = [
    { name: 'Home', href: '/', current: location.pathname === '/' },
    { name: 'Note', href: '/notes', current: location.pathname === '/notes' },
    { name: 'Past-Question', href: '/past-questions', current: location.pathname === '/past-questions' },
    { name: 'Syllabus', href: '/syllabus', current: location.pathname === '/syllabus' },
    { name: 'Notice', href: '/notices', current: location.pathname === '/notices' },
  ];

  const themes = [
    { name: 'Default', value: 'default', color: 'bg-indigo-500' },
    { name: 'Blue', value: 'blue', color: 'bg-blue-500' },
    { name: 'Green', value: 'green', color: 'bg-green-500' },
    { name: 'Yellow', value: 'yellow', color: 'bg-yellow-500' },
    { name: 'Red', value: 'red', color: 'bg-red-500' },
    { name: 'Purple', value: 'purple', color: 'bg-purple-500' },
    { name: 'Teal', value: 'teal', color: 'bg-teal-500' },
  ];

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="bg-background/95 backdrop-blur-md border-b border-border sticky top-0 z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex items-center">
              <Link to="/" className="flex items-center space-x-2 hover:opacity-80 transition-opacity">
                <div className="w-8 h-8 sm:w-10 sm:h-10 bg-primary rounded-lg flex items-center justify-center">
                  <GraduationCap className="w-5 h-5 sm:w-6 sm:h-6 text-primary-foreground" />
                </div>
                <span className="text-lg sm:text-xl font-bold text-foreground">LearnHub</span>
              </Link>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex ml-10 space-x-6 lg:space-x-8">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`px-3 py-2 text-sm font-medium transition-colors hover:text-primary ${
                    item.current
                      ? 'text-primary border-b-2 border-primary'
                      : 'text-muted-foreground'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </nav>

            {/* Right side controls */}
            <div className="flex items-center space-x-2 sm:space-x-4">
              {/* Theme Controls - Hidden on mobile */}
              <div className="hidden sm:flex items-center space-x-2">
                <span className="text-xs sm:text-sm text-muted-foreground">Theme:</span>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="outline" size="sm" className="w-8 h-8 p-0">
                      <Palette className="w-4 h-4" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end" className="bg-card border-border z-50">
                    {themes.map((themeOption) => (
                      <DropdownMenuItem
                        key={themeOption.value}
                        onClick={() => setTheme(themeOption.value)}
                        className="flex items-center space-x-2 hover:bg-accent hover:text-accent-foreground"
                      >
                        <div className={`w-4 h-4 rounded-full ${themeOption.color}`} />
                        <span>{themeOption.name}</span>
                      </DropdownMenuItem>
                    ))}
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>

              {/* Dark Mode Toggle */}
              <Button
                variant="outline"
                size="sm"
                onClick={toggleDarkMode}
                className="w-8 h-8 p-0"
              >
                {isDark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
              </Button>

              {/* Login Button - Hidden on small mobile */}
              <Button className="hidden xs:flex bg-primary hover:bg-primary/90 text-primary-foreground text-sm">
                <User className="w-4 h-4 mr-1 sm:mr-2" />
                <span className="hidden sm:inline">Login</span>
              </Button>

              {/* Mobile Menu Button */}
              <Button
                variant="outline"
                size="sm"
                onClick={toggleMobileMenu}
                className="md:hidden w-8 h-8 p-0"
              >
                {isMobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
              </Button>
            </div>
          </div>

          {/* Mobile Navigation Menu */}
          {isMobileMenuOpen && (
            <div className="md:hidden border-t border-border mt-2 py-4 animate-fade-in">
              <nav className="space-y-2">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`mobile-nav-item rounded-md ${
                      item.current
                        ? 'bg-primary/10 text-primary font-semibold'
                        : 'text-muted-foreground'
                    }`}
                  >
                    {item.name}
                  </Link>
                ))}
              </nav>

              {/* Mobile Theme Selector */}
              <div className="mt-4 pt-4 border-t border-border">
                <p className="text-sm font-medium text-foreground mb-3">Choose Theme:</p>
                <div className="grid grid-cols-4 gap-2">
                  {themes.map((themeOption) => (
                    <button
                      key={themeOption.value}
                      onClick={() => setTheme(themeOption.value)}
                      className={`flex flex-col items-center space-y-1 p-2 rounded-md transition-colors ${
                        theme === themeOption.value
                          ? 'bg-primary/10 text-primary'
                          : 'hover:bg-accent hover:text-accent-foreground'
                      }`}
                    >
                      <div className={`w-6 h-6 rounded-full ${themeOption.color}`} />
                      <span className="text-xs">{themeOption.name}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Mobile Login */}
              <div className="mt-4 pt-4 border-t border-border">
                <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
                  <User className="w-4 h-4 mr-2" />
                  Login
                </Button>
              </div>
            </div>
          )}
        </div>
      </header>

      <main className="flex-1">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-muted/30 border-t border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            <div className="space-y-4 col-span-1 sm:col-span-2 lg:col-span-1">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                  <GraduationCap className="w-5 h-5 text-primary-foreground" />
                </div>
                <span className="text-lg font-semibold">LearnHub</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Your comprehensive learning platform for academic excellence
              </p>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><Link to="/" className="hover:text-primary transition-colors">Home</Link></li>
                <li><Link to="/notes" className="hover:text-primary transition-colors">Notes</Link></li>
                <li><Link to="/past-questions" className="hover:text-primary transition-colors">Past Questions</Link></li>
                <li><Link to="/syllabus" className="hover:text-primary transition-colors">Syllabus</Link></li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Support</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-primary transition-colors">Help Center</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Contact Us</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">FAQ</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Privacy Policy</a></li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Connect</h3>
              <div className="flex space-x-4">
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  Facebook
                </a>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  Twitter
                </a>
              </div>
            </div>
          </div>

          <div className="mt-6 sm:mt-8 pt-6 sm:pt-8 border-t border-border text-center text-sm text-muted-foreground">
            © 2025 LearnHub. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
