import Link from 'next/link';
import { Mail, Phone, MapPin, Facebook, Heart } from 'lucide-react';
import Image from 'next/image';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 dark:bg-slate-950 text-white">
      {/* Main Footer Content */}
      <div className="w-full px-6 md:px-8 py-16">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 mb-12">
            {/* Brand */}
            <div className="flex flex-col items-center text-center sm:col-span-2 md:col-span-1">
              <Link href="/" className="flex flex-col items-center gap-3 mb-4 hover:opacity-80 transition-opacity">
                <Image
                  src="/logo.jpg"
                  alt="CPCS Nepal"
                  width={40}
                  height={40}
                  className="object-contain rounded"
                />
                <div>
                  <div className="text-base font-bold leading-none">CPCS Nepal</div>
                  <div className="text-xs text-slate-400">Special Care</div>
                </div>
              </Link>
              <p className="text-slate-300 text-sm leading-relaxed mt-4 max-w-[250px]">
                Empowering children with special needs through inclusive education, rehabilitation, and family support.
              </p>
              <div className="flex gap-4 mt-6">
                <a
                  href="https://www.facebook.com/share/1DxvWGwN8f/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-slate-800 hover:bg-primary rounded-lg flex items-center justify-center transition-colors"
                  aria-label="Facebook"
                >
                  <Facebook size={18} />
                </a>
                <a
                  href="https://wa.me/9779851191131"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-slate-800 hover:bg-primary rounded-lg flex items-center justify-center transition-colors"
                  aria-label="WhatsApp"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
                    <path d="M20.52 3.48A11.8 11.8 0 0 0 12 .25 11.9 11.9 0 0 0 1.5 11.75c0 2.08.55 4.12 1.6 5.9L.5 23.5l6-1.58c1.64.9 3.5 1.36 5.4 1.36h.01c6.56 0 11.9-5.33 11.9-11.9 0-3.18-1.24-6.17-3.29-8.3zM12 21.5h-.01c-1.65 0-3.27-.44-4.7-1.27l-.34-.2-3.56.94.95-3.47-.22-.36A8.45 8.45 0 0 1 3.5 11.75c0-4.65 3.78-8.43 8.45-8.43 2.25 0 4.36.88 5.95 2.47 1.6 1.6 2.48 3.7 2.48 5.95 0 4.67-3.78 8.45-8.45 8.45z"/>
                    <path d="M17.5 14.2c-.3-.15-1.8-.88-2.07-.98-.28-.1-.48-.15-.68.15-.2.3-.77.98-.95 1.18-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.48-.88-.78-1.47-1.73-1.64-2.03-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.53.15-.18.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.68-1.63-.93-2.23-.24-.59-.48-.51-.66-.52l-.56-.01c-.18 0-.47.07-.72.34-.25.28-.95.93-.95 2.27 0 1.34.97 2.64 1.1 2.82.13.18 1.9 2.9 4.6 4.06 2.7 1.17 2.7.78 3.18.73.47-.05 1.53-.62 1.75-1.21.22-.6.22-1.12.15-1.22-.07-.1-.26-.15-.56-.3z"/>
                  </svg>
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div className="text-center sm:text-left">
              <h3 className="font-bold text-lg mb-6">Quick Links</h3>
              <ul className="space-y-3">
                <li>
                  <Link href="/" className="text-slate-300 hover:text-white transition-colors text-sm">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="/about" className="text-slate-300 hover:text-white transition-colors text-sm">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="/services" className="text-slate-300 hover:text-white transition-colors text-sm">
                    Services
                  </Link>
                </li>
                <li>
                  <Link href="/volunteer" className="text-slate-300 hover:text-white transition-colors text-sm">
                    Volunteer
                  </Link>
                </li>
              </ul>
            </div>

            {/* Support */}
            <div className="text-center sm:text-left">
              <h3 className="font-bold text-lg mb-6">Support Us</h3>
              <ul className="space-y-3">
                <li>
                  <Link href="/donate" className="text-slate-300 hover:text-white transition-colors text-sm inline-flex items-center gap-2">
                    <Heart size={16} />
                    Make a Donation
                  </Link>
                </li>
                <li>
                  <Link href="/volunteer" className="text-slate-300 hover:text-white transition-colors text-sm">
                    Volunteer with Us
                  </Link>
                </li>
                <li>
                  <Link href="/about" className="text-slate-300 hover:text-white transition-colors text-sm">
                    Our Story
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="text-slate-300 hover:text-white transition-colors text-sm">
                    Get Involved
                  </Link>
                </li>
              </ul>
            </div>

            {/* Contact Info */}
            <div className="text-center sm:text-left">
              <h3 className="font-bold text-lg mb-6">Contact</h3>
              <ul className="space-y-4">
                <li className="flex gap-3 items-start justify-center sm:justify-start">
                  <Phone size={18} className="flex-shrink-0 mt-0.5 text-primary" />
                  <p className="text-slate-300 text-sm text-left">+977 9851191131 / 9852021844</p>
                </li>
                <li className="flex gap-3 items-start justify-center sm:justify-start">
                  <Mail size={18} className="flex-shrink-0 mt-0.5 text-primary" />
                  <p className="text-slate-300 text-sm text-left">cpcsnepal2023@gmail.com</p>
                </li>
                <li className="flex gap-3 items-start justify-center sm:justify-start">
                  <MapPin size={18} className="flex-shrink-0 mt-0.5 text-primary" />
                  <p className="text-slate-300 text-sm text-left">Suryabinayak-4, Dadhikot, Kathmandu</p>
                </li>
              </ul>
            </div>
          </div>

          {/* Divider */}
          <div className="border-t border-slate-800 pt-8">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
              <p className="text-slate-400 text-sm">
                &copy; {currentYear} CPCS Nepal. All rights reserved.
              </p>
              <div className="flex gap-6 text-slate-400 text-sm">
                <Link href="#" className="hover:text-white transition-colors">
                  Privacy Policy
                </Link>
                <Link href="#" className="hover:text-white transition-colors">
                  Terms of Service
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Accent Bar */}
      <div className="h-1 bg-gradient-to-r from-primary via-primary/50 to-transparent"></div>
    </footer>
  );
}