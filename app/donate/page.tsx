import Image from 'next/image';
import { Navigation } from '@/components/navigation';
import { Footer } from '@/components/footer';
import { Phone, Mail, Building2, MapPin, QrCode } from 'lucide-react';

export const metadata = {
  title: 'Donate | CPCS Nepal',
  description: 'Support CPCS Nepal and help us provide better care for children with special needs.',
};

export default function Donate() {
  return (
    <>
      <Navigation />

      {/* Hero */}
      <section className="bg-gradient-to-br from-primary to-accent text-white py-16 px-8 mt-6">
        <div className="w-full text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Make a Difference</h1>
          <p className="text-lg opacity-90">
            Your donation helps us provide life-changing care and support to children with special needs and their families in Nepal
          </p>
        </div>
      </section>

      {/* How to Donate */}
      <section className="py-16 px-8">
        <div className="w-full max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-foreground text-center mb-4">
            Want to Donate?
          </h2>
          <p className="text-center text-muted-foreground mb-12 text-lg">
            You can donate by scanning the QR code below or by reaching out to us directly.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-stretch">

            {/* QR Code */}
            <div className="bg-white border-2 border-gray-200 rounded-2xl p-8 text-center flex flex-col items-center justify-between shadow-sm">
              <div>
                <div className="bg-primary/10 w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4">
                  <QrCode className="text-primary" size={28} />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  Scan to Donate
                </h3>
                <p className="text-muted-foreground text-sm mb-6">
                  Use any mobile banking or digital wallet app to scan and donate instantly.
                </p>
              </div>

              {/* QR code image */}
              <div className="relative w-full min-h-[260px] rounded-xl overflow-hidden border border-gray-200">
                <Image
                  src="/Qr.jpeg"
                  alt="CPCS Nepal Donation QR Code"
                  fill
                  className="object-contain"
                />
              </div>
            </div>

            {/* Contact Details */}
            <div className="bg-white border-2 border-gray-200 rounded-2xl p-8 shadow-sm flex flex-col justify-between">
              <div>
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  Contact Us to Donate
                </h3>
                <p className="text-muted-foreground text-sm mb-8">
                  Prefer to donate directly? Get in touch and we'll guide you through the process.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 w-10 h-10 rounded-lg flex items-center justify-center shrink-0 mt-0.5">
                    <Phone size={18} className="text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground text-sm mb-0.5">Phone / WhatsApp</p>
                    <p className="text-primary text-base">.........................</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 w-10 h-10 rounded-lg flex items-center justify-center shrink-0 mt-0.5">
                    <Mail size={18} className="text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground text-sm mb-0.5">Email</p>
                    <p className="text-primary text-base">.........................</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 w-10 h-10 rounded-lg flex items-center justify-center shrink-0 mt-0.5">
                    <Building2 size={18} className="text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground text-sm mb-0.5">Bank Details</p>
                    <p className="text-primary text-base">.........................</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 w-10 h-10 rounded-lg flex items-center justify-center shrink-0 mt-0.5">
                    <MapPin size={18} className="text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground text-sm mb-0.5">Address</p>
                    <p className="text-primary text-base">.........................</p>
                  </div>
                </div>
              </div>
            </div>

          </div>

          {/* Thank you note */}
          <div className="mt-10 bg-accent/10 border-l-4 border-accent rounded-lg p-6 text-center">
            <p className="text-foreground font-semibold text-lg mb-1">Thank you for your generosity 🙏</p>
            <p className="text-muted-foreground text-sm">
              Every contribution, big or small, directly supports children with special needs and their families across Nepal.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}