import Image from 'next/image';
import Link from 'next/link';
import { Navigation } from '@/components/navigation';
import { Footer } from '@/components/footer';
import { Heart, Users, MapPin, BookOpen, Sparkles } from 'lucide-react';

export const metadata = {
  title: 'Volunteer | CPCS Nepal',
  description: 'Join CPCS Nepal as a volunteer and help children with special needs grow through education, therapy, and community support.',
};

export default function Volunteer() {
  return (
    <>
      <Navigation />

      <section className="bg-gradient-to-br from-primary to-accent text-white py-20 px-6 md:px-10 mt-6">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-sm uppercase tracking-[0.4em] text-primary/90 mb-4">Volunteer with CPCS Nepal</p>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Become a part of our compassionate support team.</h1>
          <p className="max-w-3xl mx-auto text-lg md:text-xl opacity-90 leading-relaxed">
            Be a friend of CPCS Nepal today. Join our volunteer team to support children with special needs through education, therapy, and community outreach. Your time and care can make a lasting impact on the lives of children and families in need.
          </p>
          <div className="mt-10 inline-flex flex-col sm:flex-row items-center gap-4">
            <Link href="/contact" className="rounded-full bg-white text-primary px-8 py-3 font-semibold shadow-lg hover:opacity-90 transition-opacity">
              Contact Us to Volunteer
            </Link>
            <Link href="/donate" className="rounded-full border border-white/90 text-white px-8 py-3 font-semibold hover:bg-white/10 transition-colors">
              Learn More About CPCS
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16 px-6 md:px-10">
        <div className="max-w-7xl mx-auto grid gap-12 lg:grid-cols-[0.95fr_0.9fr] items-start">
          <div className="space-y-8">
            <div className="rounded-3xl overflow-hidden border border-border shadow-lg">
              <div className="relative h-96">
                <Image
                  src="/working.jpg"
                  alt="Volunteers helping children at CPCS Nepal"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            <div className="grid gap-6 md:grid-cols-2">
              <div className="rounded-3xl overflow-hidden border border-border shadow-lg">
                <div className="relative h-72">
                  <Image
                    src="/cpcs-team.jpg"
                    alt="CPCS Nepal team smiling together"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
              <div className="rounded-3xl overflow-hidden border border-border shadow-lg">
                <div className="relative h-72">
                  <Image
                    src="/happy.jpg"
                    alt="Happy children in a learning activity"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-8">
            <div className="bg-white rounded-3xl border border-gray-200 p-8 shadow-sm">
              
              <h2 className="text-3xl font-bold text-foreground mb-4">Support children, families, and communities.</h2>
              <p className="text-muted-foreground leading-relaxed">
                Volunteers play a vital role in making CPCS Nepal a welcoming place for children with special needs. Whether you support learning, assist therapy, or help with outreach activities, your care and commitment help build stronger families and more inclusive communities.
              </p>
            </div>

            <div className="grid gap-5">
              <div className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm">
                <div className="flex items-center gap-3 mb-4 text-primary">
                  <Users size={22} />
                  <h3 className="text-xl font-semibold">Volunteer Roles</h3>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  Assist with classroom support, activity sessions, community outreach, awareness campaigns, and support services for children with special needs and their families.
                </p>
              </div>
              <div className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm">
                <div className="flex items-center gap-3 mb-4 text-primary">
                  <BookOpen size={22} />
                  <h3 className="text-xl font-semibold">Training & Guidance</h3>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  We provide orientation and support so you can volunteer confidently. No prior experience is required — just compassion, patience, and a willingness to learn.
                </p>
              </div>
              <div className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm">
                <div className="flex items-center gap-3 mb-4 text-primary">
                  <MapPin size={22} />
                  <h3 className="text-xl font-semibold">Community Outreach</h3>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  Help extend CPCS Nepal services beyond the centre through home visits, awareness activities, and support for remote families across Kathmandu.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-primary/5 py-16 px-6 md:px-10">
        <div className="max-w-6xl mx-auto grid gap-10 lg:grid-cols-[0.9fr_0.8fr]">
          <div className="space-y-6">
            <div className="rounded-3xl bg-white border border-gray-200 p-8 shadow-sm">
              <p className="text-sm uppercase tracking-[0.28em] text-primary mb-3">How to Join</p>
              <h2 className="text-3xl font-bold text-foreground mb-4">Simple steps to get started</h2>
              <div className="space-y-5">
                <div className="rounded-3xl border border-border bg-primary/5 p-5">
                  <p className="font-semibold text-foreground mb-2">1. Reach out to us</p>
                  <p className="text-muted-foreground leading-relaxed">
                    Call or WhatsApp us at <span className="font-semibold text-foreground">+977 9851191131</span> to let us know you want to volunteer. We will reply with details on how to join and support the children.
                  </p>
                </div>
                <div className="rounded-3xl border border-border bg-white p-6 shadow-sm">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 rounded-2xl bg-primary/10 text-primary flex items-center justify-center">
                      <MapPin size={22} />
                    </div>
                    <div>
                      <p className="font-semibold text-xl text-foreground mb-1">Address</p>
                      <p className="text-sm text-muted-foreground">Suryabinayak-4, Dadhikot, Kathmandu</p>
                    </div>
                  </div>
                  <a
                    href="https://maps.app.goo.gl/QwHuFiZfhQqyJogW8"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center rounded-full bg-primary px-4 py-2 text-sm font-semibold text-white hover:bg-primary/90 transition-colors"
                  >
                    Open in Google Maps
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="rounded-3xl border border-gray-200 bg-white p-8 shadow-sm">
            <div className="flex items-center gap-3 mb-6 text-primary">
              <Sparkles size={22} />
              <h3 className="text-xl font-semibold">Volunteer impact</h3>
            </div>
            <ul className="space-y-4 text-muted-foreground">
              <li className="rounded-3xl border border-border bg-primary/5 p-4">
                <p className="font-semibold text-foreground">Create meaningful connections.</p>
                <p>Build trust with children and families through regular support and encouragement.</p>
              </li>
              <li className="rounded-3xl border border-border bg-primary/5 p-4">
                <p className="font-semibold text-foreground">Strengthen community care.</p>
                <p>Help bring therapy, education, and awareness into homes and neighbourhoods.</p>
              </li>
              <li className="rounded-3xl border border-border bg-primary/5 p-4">
                <p className="font-semibold text-foreground">Grow your skills.</p>
                <p>Learn about inclusive education, disability support, and community rehabilitation.</p>
              </li>
            </ul>
            <div className="mt-8 text-center">
              <Link href="/contact" className="inline-flex items-center justify-center gap-2 rounded-full bg-primary text-white px-8 py-3 font-semibold hover:bg-primary/90 transition-colors">
                Start volunteering
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
