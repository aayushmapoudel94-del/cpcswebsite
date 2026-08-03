import Image from 'next/image';
import Link from 'next/link';
import { Navigation } from '@/components/navigation';
import { Footer } from '@/components/footer';
import { Heart, Users, Lightbulb, TrendingUp, Award, BookOpen } from 'lucide-react';
import ProgramCarousel from '@/components/program-carousel';

export default function Home() {
  return (
    <>
      <Navigation />

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-6 md:px-8 bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-950 dark:to-slate-900">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Hero Text */}
            <div className="space-y-6">
              <div className="inline-block">
                <span className="text-sm font-semibold text-primary bg-primary/10 px-4 py-2 rounded-full">
                  🌟 Empowering Special Needs Children
                </span>
              </div>
              <h1 className="text-5xl md:text-6xl font-bold text-foreground leading-tight">
                Every Child Deserves <span className="text-primary">Love & Learning</span>
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed">
                CPCS Nepal delivers inclusive education,  and family-centered support for children with Autism, Cerebral Palsy, Down Syndrome, and other developmental needs. We empower each child to build confidence, independence, and a brighter future.
              </p>
              <div className="flex flex-wrap gap-4 pt-4">
                <Link
                  href="/services"
                  className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-all duration-200 shadow-md hover:shadow-lg"
                >
                  Explore Our Services
                  <span className="text-lg">→</span>
                </Link>
                <Link
                  href="/donate"
                  className="inline-flex items-center gap-2 border-2 border-primary text-primary px-8 py-3 rounded-lg font-semibold hover:bg-primary/5 transition-all duration-200"
                >
                  Support Us
                  <Heart size={18} />
                </Link>
              </div>
            </div>

            {/* Hero Image */}
            <div className="relative">
              <div className="relative w-full h-[500px] rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/cpcs-team.jpg"
                  alt="CPCS Nepal Team supporting children"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 bg-white dark:bg-slate-800 rounded-2xl shadow-lg p-6 w-64">
                <p className="font-bold text-lg text-foreground mb-2">Our Mission</p>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Empowering children with special needs through quality education, rehabilitation, and community support.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>



      {/* Services Overview */}
      <section className="py-20 px-6 md:px-8 bg-slate-50 dark:bg-slate-950">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">Our Services</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Comprehensive programs designed to support the development and well-being of children with special needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Service Card 1 */}
            <div className="group bg-white dark:bg-slate-800 rounded-xl p-8 shadow-md hover:shadow-xl transition-all duration-300 border border-border hover:border-primary">
              <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                <BookOpen className="text-primary" size={28} />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-3">Education & Therapy</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Specialized education programs and therapeutic interventions tailored to each child's unique needs and learning style.
              </p>
              <Link href="/services#education-therapy" className="text-primary font-semibold hover:underline inline-flex items-center gap-2">
                Learn More <span>→</span>
              </Link>
            </div>

            {/* Service Card 2 */}
            <div className="group bg-white dark:bg-slate-800 rounded-xl p-8 shadow-md hover:shadow-xl transition-all duration-300 border border-border hover:border-primary">
              <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                <Users className="text-primary" size={28} />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-3">Family Support</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Counseling, training, and community programs to support families in their journey of caring and nurturing.
              </p>
                <Link href="/services#home-visits" className="text-primary font-semibold hover:underline inline-flex items-center gap-2">
                Learn More <span>→</span>
              </Link>
            </div>

            {/* Service Card 3 */}
            <div className="group bg-white dark:bg-slate-800 rounded-xl p-8 shadow-md hover:shadow-xl transition-all duration-300 border border-border hover:border-primary">
              <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                <Lightbulb className="text-primary" size={28} />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-3">Community Programs</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Awareness, advocacy, and skill-building initiatives to create an inclusive society for children with special needs.
              </p>
              <Link href="/services" className="text-primary font-semibold hover:underline inline-flex items-center gap-2">
                Learn More <span>→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <ProgramCarousel />

      {/* Why Choose Us Section */}
      <section className="py-16 px-6 md:px-8 bg-white dark:bg-slate-900">
        <div className="max-w-7xl mx-auto">
          <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] items-center">
            <div className="rounded-3xl border border-border bg-slate-50 dark:bg-slate-950 p-8 shadow-sm">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-5">Why Choose CPCS Nepal</h2>
              <div className="grid gap-4">
                <div className="flex gap-4 rounded-3xl border border-gray-200 bg-white p-4">
                  <div>
                    <h3 className="text-lg font-semibold text-foreground">🌟 Compassionate Care</h3>
                    <p className="text-sm text-muted-foreground leading-snug">
                      Providing love, respect, and professional support to every child.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4 rounded-3xl border border-gray-200 bg-white p-4">
                  <div>
                    <h3 className="text-lg font-semibold text-foreground">🧩 Tailored Therapy</h3>
                    <p className="text-sm text-muted-foreground leading-snug">
                      Individual therapy plans designed around each child's strengths and goals.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4 rounded-3xl border border-gray-200 bg-white p-4">
                  <div>
                    <h3 className="text-lg font-semibold text-foreground">🎓 Learning Without Limits</h3>
                    <p className="text-sm text-muted-foreground leading-snug">
                      Inclusive education that encourages confidence, creativity, and independence.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4 rounded-3xl border border-gray-200 bg-white p-4">
                  <div>
                    <h3 className="text-lg font-semibold text-foreground">🤲 Supporting Families</h3>
                    <p className="text-sm text-muted-foreground leading-snug">
                      Working hand in hand with parents to achieve lasting progress.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4 rounded-3xl border border-gray-200 bg-white p-4">
                  <div>
                    <h3 className="text-lg font-semibold text-foreground">🌍 Community Inclusion</h3>
                    <p className="text-sm text-muted-foreground leading-snug">
                      Helping children participate in school, family life, and their communities.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative w-full h-[360px] overflow-hidden rounded-3xl border border-border bg-white shadow-sm">
              <Image
                src="/playing.jpg"
                alt="CPCS Nepal team members with children"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>
      

      {/* CTA Section */}
      <section className="py-20 px-6 md:px-8 bg-gradient-to-r from-primary to-primary/80 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Make a Difference?</h2>
          <p className="text-xl text-primary-foreground/90 mb-8 leading-relaxed">
            Whether you want to support a child, volunteer your time, or learn more about our programs, we're here to help create positive change.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-white text-primary px-8 py-3 rounded-lg font-semibold hover:bg-primary-foreground transition-all duration-200 shadow-md hover:shadow-lg"
            >
              Get In Touch
            </Link>
            <Link
              href="/donate"
              className="inline-flex items-center gap-2 border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition-all duration-200"
            >
              Donate Now
            </Link>
          </div>
        </div>
      </section>

     

      {/* Final CTA */}
      <section className="py-16 px-6 md:px-8 bg-white dark:bg-slate-900">
        <div className="max-w-4xl mx-auto bg-gradient-to-br from-primary/5 to-primary/10 dark:from-primary/10 dark:to-primary/5 rounded-2xl p-12 border-2 border-primary/20 text-center">
          <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">Questions? We're Here to Help</h3>
          <p className="text-lg text-muted-foreground mb-8">
            Contact us to learn more about our programs or to schedule a consultation.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-all duration-200"
          >
            Contact Us Today
          </Link>
        </div>
      </section>

      <Footer />
    </>
  );
}