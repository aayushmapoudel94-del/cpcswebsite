import Image from 'next/image';
import { Navigation } from '@/components/navigation';
import { Footer } from '@/components/footer';

export const metadata = {
  title: 'Services | CPCS Nepal',
  description: 'Comprehensive rehabilitation and support services for children with cerebral palsy.',
};

export default function Services() {
  return (
    <>
      <Navigation />

      {/* Hero */}
      <section className="bg-primary text-white py-16 px-8 mt-6">
        <div className="w-full text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Services</h1>
          <p className="text-lg opacity-90">
            Comprehensive rehabilitation and support programs for children with cerebral palsy
          </p>
        </div>
      </section>

      
      <section className="py-16 px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid gap-10 lg:grid-cols-2 items-center">
            {/* Left: Images */}
            <div className="flex flex-col gap-3">
              <div className="relative h-56 md:h-64 overflow-hidden rounded-2xl border border-border bg-white shadow-md">
                <Image
                  src="/cpcs-building.jpg"
                  alt="Children learning in a therapy classroom"
                  fill
                  className="object-cover"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div className="relative h-32 md:h-40 overflow-hidden rounded-2xl border border-border bg-white shadow-sm">
                  <Image
                    src="/therapys.jpg"
                    alt="Therapy session at CPCS Nepal"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="relative h-32 md:h-40 overflow-hidden rounded-2xl border border-border bg-white shadow-sm">
                  <Image
                    src="/therapy.jpg"
                    alt="Care taker at CPCS Nepal"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Right: Services intro */}
            <div className="space-y-8 flex flex-col justify-center">
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-primary mb-4">
                Education & Therapy
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Programs focused on care, learning and participation
              </h2>
              <p className="text-muted-foreground leading-relaxed max-w-xl">
                At CPCS Nepal, through our Chitapur Day Care Centre, we provide comprehensive education, therapy, rehabilitation, and daily care services for children with disabilities and special needs. Our centre was established to create a safe, inclusive, and supportive environment where every child can learn, grow, and participate according to their abilities.

We understand that every child is unique. That is why our programs are designed around each child's individual needs, strengths, and goals. We provide physiotherapy, occupational therapy, speech and communication support, special education, life-skills training, and recreational activities that help children develop physically, mentally, emotionally, socially, and academically.

Our dedicated team works closely with children and their families to improve mobility, independence, communication, confidence, learning abilities, and overall well-being. We also create individualized support plans to help children participate more actively at home, in school, and in the community.

In addition to therapy and education, children take part in play-based learning, group activities, creative sessions, games, and social interaction, helping them build friendships, teamwork, and self-confidence in a nurturing environment.

Through the Chitapur Day Care Centre, CPCS Nepal is committed to ensuring that children with disabilities receive the care, education, therapy, and opportunities they need to reach their fullest potential and live with dignity, inclusion, and hope.
              </p>
            </div>
          </div>

          {/* Home Visits anchor (linked from homepage) */}
      <section id="home-visits" className="py-10 px-8 bg-primary/5 rounded-3xl mt-6 shadow-sm border border-primary/10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-foreground mb-3">Home Visits & Outreach</h2>
          <p className="text-muted-foreground text-lg">
            When children are unable to attend the centre, CPCS Nepal brings support directly to their homes. Our therapists and educators provide home-based therapy, educational assistance, caregiver training, and follow-up services to ensure continuous learning and development. We also help families access centre-based therapy whenever needed, ensuring every child receives the care, education, and rehabilitation support they deserve.
          </p>
          <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="relative h-36 overflow-hidden rounded-lg border bg-white">
              <Image src="/homeVisit.jpg" alt="Home visit" fill className="object-cover" />
            </div>
           
            <div className="relative h-36 overflow-hidden rounded-lg border bg-white">
              <Image src="/smile.jpg" alt="Home visit" fill className="object-cover" />
            </div>
            <div className="relative h-36 overflow-hidden rounded-lg border bg-white">
              <Image src="/cuty.jpg" alt="Home visit" fill className="object-cover" />
            </div>
            
          </div>
        </div>
      </section>

      <section id="Community Programs" className="py-10 px-8 bg-primary/5 rounded-3xl mt-6 shadow-sm border border-primary/10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-foreground mb-3">Community Programs</h2>
          <p className="text-muted-foreground text-lg">
            CPCS Nepal believes that children learn and grow not only through therapy and education but also through active participation in their communities. Our Community Programs encourage children with disabilities and special needs to engage in physical activities, recreational games, sports, social events, and group learning experiences.

Through these activities, children develop confidence, communication skills, teamwork, physical fitness, and social interaction. We also provide physiotherapy, speech therapy, skill development training, and individualized educational support tailored to each child's abilities, needs, and family environment.

Our goal is to help children become active participants in their homes, schools, and communities while promoting inclusion, independence, and a better quality of life.
          </p>
          <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="relative h-36 overflow-hidden rounded-lg border bg-white">
              <Image src="/award.jpeg" alt="community program" fill className="object-cover" />
            </div>
           
            <div className="relative h-36 overflow-hidden rounded-lg border bg-white">
              <Image src="/playyyy.jpeg" alt="community program" fill className="object-cover" />
            </div>
            <div className="relative h-36 overflow-hidden rounded-lg border bg-white">
              <Image src="/diplux.jpeg" alt="community program" fill className="object-cover" />
            </div>

          </div>
        </div>
      </section>

         
        </div>
      </section>

      <Footer />
    </>
  );
}