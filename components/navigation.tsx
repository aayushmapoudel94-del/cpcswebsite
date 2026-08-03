'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Menu, X, Heart } from 'lucide-react';
import Image from 'next/image';

interface NavItem {
  label: string;
  href: string;
  highlight?: boolean;
  external?: boolean;
}

const navItems: NavItem[] = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Services', href: '/services' },
  { label: 'Volunteer', href: '/volunteer' },
  { label: 'Donate', href: '/donate', highlight: true },
  { label: 'Contact', href: '/contact' },
];

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white dark:bg-slate-900 border-b border-border fixed top-0 left-0 right-0 z-50 shadow-sm">
      <div className="w-full px-6 md:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
            <Image
              src="/logo.jpg"
              alt="CPCS Nepal"
              width={40}
              height={40}
              className="object-contain rounded"
            />
            <div className="hidden sm:block">
              <div className="text-base font-bold text-primary leading-none">CPCS Nepal</div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex gap-8 items-center">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                target={item.external ? '_blank' : undefined}
                rel={item.external ? 'noopener noreferrer' : undefined}
                className={`font-medium transition-colors duration-200 ${
                  item.highlight
                    ? 'text-white bg-primary px-4 py-2 rounded-lg hover:bg-primary/90 flex items-center gap-2'
                    : 'text-foreground hover:text-primary'
                }`}
              >
                {item.highlight && <Heart size={16} />}
                {item.label}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-muted transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden border-t border-border bg-white dark:bg-slate-900">
            <div className="px-4 pt-2 pb-3 space-y-1">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  target={item.external ? '_blank' : undefined}
                  rel={item.external ? 'noopener noreferrer' : undefined}
                  className={`block px-4 py-2 rounded-lg font-medium transition-colors duration-200 ${
                    item.highlight
                      ? 'text-white bg-primary hover:bg-primary/90 flex items-center gap-2'
                      : 'text-foreground hover:bg-muted'
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {item.highlight && <Heart size={16} />}
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}