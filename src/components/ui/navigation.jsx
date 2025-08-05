import React, { useState, useEffect } from 'react'
import { Button } from './button'

export function Navigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setIsMobileMenuOpen(false)
    }
  }

  if (!mounted) {
    return null;
  }

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-sm shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="text-xl font-bold">Vernon Cheuk 卓君風</div>
          <div className="hidden md:flex space-x-4">
            <Button variant="ghost" onClick={() => scrollToSection('about')}>關於我</Button>
            <Button variant="ghost" onClick={() => scrollToSection('services')}>我哋嘅服務</Button>
            <Button variant="ghost" onClick={() => scrollToSection('achievements')}>專業資歷</Button>
            <Button variant="ghost" onClick={() => scrollToSection('career')}>職業亮點</Button>
            <Button variant="ghost" onClick={() => scrollToSection('media')}>媒體整合</Button>
            <Button variant="ghost" onClick={() => scrollToSection('contact')}>聯絡我們</Button>
          </div>
          <Button 
            className="md:hidden" 
            variant="ghost"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? '✕' : '☰'}
          </Button>
          {isMobileMenuOpen && (
            <div className="absolute top-16 left-0 right-0 bg-white shadow-lg md:hidden z-50">
              <div className="flex flex-col p-4 space-y-2">
                <Button variant="ghost" onClick={() => scrollToSection('about')}>關於我</Button>
                <Button variant="ghost" onClick={() => scrollToSection('services')}>我哋嘅服務</Button>
                <Button variant="ghost" onClick={() => scrollToSection('achievements')}>專業資歷</Button>
                <Button variant="ghost" onClick={() => scrollToSection('career')}>職業亮點</Button>
                <Button variant="ghost" onClick={() => scrollToSection('media')}>媒體整合</Button>
                <Button variant="ghost" onClick={() => scrollToSection('contact')}>聯絡我們</Button>
              </div>
            </div>
          )}
        </div>
      </div>
    </nav>
  )
}
