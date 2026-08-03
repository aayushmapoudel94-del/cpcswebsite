import Image from 'next/image';
import { Navigation } from '@/components/navigation';
import { Footer } from '@/components/footer';

export const metadata = {
  title: 'About Us | CPCS Nepal',
  description: 'Learn about CPCS Nepal mission, vision, and our commitment to inclusive care for children with special needs.',
};

const executiveLeadership = [
  {
    name: 'Bijay Laxmi Maharjan',
    role: 'Chairperson',
    photo: '/Bijay_laxmi.jpg',
  },
  {
    name: 'Ekaraj Subedi',
    role: 'Secretary / Carer / Former Employee of Nepal Rastra Bank',
    photo: '/ekaraj.png',
  },
  {
    name: 'Yadav Dahal',
    role: 'Treasurer / Carer / Entrepreneur',
    photo: '/yadav_dahal.jpg',
  },
];

const management = [
  {
    name: 'Jyoti Khatiwada',
    role: 'CEO',
    photo: '/jyoti.jpg',
  },
];

const carersMembers = [
  {
    name: 'Ranjita Acharya',
    role: 'Carers / Member / Teacher',
    photo: '/ranjita_acharya.jpg',
  },
  {
    name: 'Damodar Karki',
    role: 'Carers / Social Worker / Former Government Employee',
    photo: 'damodar.jpg',
  },
  {
    name: 'Kamala Shrestha',
    role: 'Carers / Member / Nurse',
    photo: '/kamala_shrestha.jpg',
  },
  {
    name: 'Sachita Bhandari',
    role: 'Carers / Member / Social Worker',
    photo: '/sachita_bhandari.jpg',
  },
  {
    name: 'Rita Niraula',
    role: 'Carers / Member / Teacher',
    photo: 'rita.jpg',
  },
  {
    name: 'Alisha Dware',
    role: 'Care Taker',
    photo: '/Alisha_Dware.jpg',
  },
  {
    name: 'Tek Bahadur Sunuwar',
    role: 'Driver',
    photo: '/Tek_Bahadur_Sunuwar.jpg',
  },
  {
    name: 'Sabita Gautam',
    role: 'Care Taker',
    photo: 'sabita.jpg',
  },
];

type TeamMember = {
  name: string;
  role: string;
  photo: string;
};

function TeamCard({
  member,
  variant = 'default',
  size = 'normal',
}: {
  member: TeamMember;
  variant?: 'default' | 'accent' | 'management';
  size?: 'normal' | 'large';
}) {
  const photoSize = size === 'large' ? 'w-36 h-36' : 'w-28 h-28';

  const borderColor = {
    default: 'border-gray-200',
    accent: 'border-primary/30',
    management: 'border-accent/30',
  };

  const roleColor = {
    default: 'text-muted-foreground',
    accent: 'text-muted-foreground',
    management: 'text-muted-foreground',
  };

  const ringColor = {
    default: 'ring-gray-200 group-hover:ring-primary/40',
    accent: 'ring-primary/20 group-hover:ring-primary/60',
    management: 'ring-accent/20 group-hover:ring-accent/60',
  };

  return (
    <div className="group flex flex-col items-center text-center cursor-default transition-all duration-300">
      {/* Photo */}
      <div
        className={`relative ${photoSize} mb-4 rounded-2xl overflow-hidden ring-2 ring-offset-2 transition-all duration-300 shadow-sm group-hover:shadow-md group-hover:-translate-y-1 ${ringColor[variant]}`}
      >
        <Image
          src={member.photo}
          alt={member.name}
          fill
          className="object-cover"
        />
      </div>

      {/* Name */}
      <h3 className="font-bold text-foreground text-base text-center leading-tight mb-1">
        {member.name}
      </h3>

      {/* Role */}
      <p className={`text-sm text-center leading-snug ${roleColor[variant]}`}>
        {member.role}
      </p>
    </div>
  );
}

function SectionHeader({ title, subtitle }: { title: string; subtitle: string }) {
  return (
    <div className="text-center mb-12">
      <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-2">{title}</h2>
      <p className="text-muted-foreground text-sm">{subtitle}</p>
      <div className="w-16 h-1 bg-primary rounded-full mx-auto mt-4" />
    </div>
  );
}

export default function About() {
  return (
    <>
      <Navigation />

      {/* Hero */}
      <section className="bg-primary text-white py-16 px-8 mt-6">
        <div className="w-full text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">About CPCS Nepal</h1>
          <p className="text-lg opacity-90">
            Dedicated to inclusive care and support for children with special needs since our founding
          </p>
          <div className="mt-10 mx-auto max-w-xl rounded-[2rem] border border-white/20 bg-transparent p-8 backdrop-blur-xl shadow-none text-left text-white/90">
            <h2 className="text-2xl font-bold mb-3">Our Mission</h2>
            <p className="leading-relaxed text-sm">
              Empowering children with special needs through quality education, rehabilitation, and community support.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 px-8">
        <div className="w-full">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="relative h-80">
              <Image
                src="/logo.jpg"
                alt="CPCS Nepal Logo"
                fill
                className="object-contain"
              />
            </div>
            <div>
              <div className="inline-block bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold mb-4 border border-primary/30">
                Who We Are
              </div>
              <h2 className="text-3xl font-bold text-foreground mb-4">Our Story</h2>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                CPCS Nepal is a non-governmental and non-profit organization established
                in 2073 B.S. as Chhatarpur Abhibhawak Swavalamban Samuha. It began with
                seven children requiring care, attention, aid, support, and medical
                assistance, including children with Down Syndrome, Autism, Cerebral
                Palsy, and other disabilities.
              </p>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                In 2080 B.S., the organization was upgraded and registered in
                Suryabinayak-4, Dadhikot Municipality under the name Cerebral Palsy
                Carers Society Nepal. Our programs include Special Education,
                Community-Based Rehabilitation (CBR), Day Care Services, Physical Therapy,
                Occupational Therapy, Speech Therapy, Family Support Programs, and
                Vocational Skill Development.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Guided by compassion, inclusion, and respect, CPCS Nepal works to ensure
                that children with disabilities receive the care, opportunities, and
                support they need to succeed. Our objective is to improve the "Quality
                Upliftment Life" of children by building participation in family life,
                school, and community activities.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── MEET OUR TEAM HEADER ── */}
      <section className="pt-16 pb-2 px-8 bg-gray-50">
        <div className="w-full text-center">
          <div className="inline-block bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold mb-4 border border-primary/30">
            Our People
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Meet Our Team
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto pb-4">
            Our dedicated team of carers, professionals, and leaders work tirelessly
            to support children with special needs and their families across Nepal.
          </p>
        </div>
      </section>

      {/* ── SECTION 1: EXECUTIVE LEADERSHIP ── */}
      <section className="py-16 px-8 bg-gray-50">
        <div className="w-full">
          <SectionHeader
            title="Executive Committee"
            subtitle="The elected executive committee leading the organization"
          />
          <div className="flex flex-wrap justify-center gap-12">
            {executiveLeadership.map((member, index) => (
              <TeamCard key={index} member={member} variant="accent" size="large" />
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION 2: MANAGEMENT / CEO ── */}
      <section className="py-16 px-8 bg-white">
        <div className="w-full">
          <SectionHeader
            title="Management"
            subtitle="The professional management team running day-to-day operations"
          />
          <div className="flex justify-center">
            <TeamCard member={management[0]} variant="management" size="large" />
          </div>
        </div>
      </section>

      {/* ── SECTION 3: CARERS & MEMBERS ── */}
      <section className="py-16 px-8 bg-gray-50">
        <div className="w-full">
          <SectionHeader
            title="Carers & Members"
            subtitle="Our dedicated carers and board members supporting children and families"
          />
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-10">
            {carersMembers.map((member, index) => (
              <TeamCard key={index} member={member} variant="default" />
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}