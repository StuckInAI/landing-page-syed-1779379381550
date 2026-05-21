import { Star } from 'lucide-react';

type TestimonialCardProps = {
  name: string;
  role: string;
  initials: string;
  color: string;
  quote: string;
  rating: number;
};

function TestimonialCard({ name, role, initials, color, quote, rating }: TestimonialCardProps) {
  return (
    <div className="bg-[#1A0E0E] border border-white/5 rounded-2xl p-6 flex flex-col gap-4 card-glow hover:border-white/10 transition-all">
      {/* Stars */}
      <div className="flex gap-1">
        {Array.from({ length: rating }).map((_, i) => (
          <Star key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
        ))}
      </div>
      {/* Quote */}
      <p className="text-white/70 text-sm leading-relaxed flex-1">"{quote}"</p>
      {/* Author */}
      <div className="flex items-center gap-3">
        <div
          className="w-9 h-9 rounded-full flex items-center justify-center text-xs font-bold text-white"
          style={{ backgroundColor: color }}
        >
          {initials}
        </div>
        <div>
          <div className="text-white text-sm font-semibold">{name}</div>
          <div className="text-white/40 text-xs">{role}</div>
        </div>
      </div>
    </div>
  );
}

const testimonials: TestimonialCardProps[] = [
  {
    name: 'Sarah Chen',
    role: 'CTO @ Buildly',
    initials: 'SC',
    color: '#DC2626',
    quote: 'NovaSpark cut our deploy time from 12 minutes to under 2 seconds. Our engineers finally have time to focus on what matters.',
    rating: 5,
  },
  {
    name: 'Marcus Feld',
    role: 'Lead Engineer @ Orbit',
    initials: 'MF',
    color: '#EAB308',
    quote: 'The preview environments alone are worth the price of admission. We catch bugs in PRs before they ever reach main.',
    rating: 5,
  },
  {
    name: 'Priya Nair',
    role: 'VP Engineering @ Lumio',
    initials: 'PN',
    color: '#B91C1C',
    quote: 'Migrated our entire infra in a weekend. The documentation is stellar and support was incredibly responsive.',
    rating: 5,
  },
  {
    name: 'Jake Torres',
    role: 'Solo Founder @ Craftd',
    initials: 'JT',
    color: '#CA8A04',
    quote: 'As a solo dev, having one platform that handles CI/CD, monitoring, and deployments is a game changer. Highly recommend.',
    rating: 5,
  },
  {
    name: 'Lena Müller',
    role: 'DevOps Lead @ FluxAI',
    initials: 'LM',
    color: '#DC2626',
    quote: 'The AI anomaly detection caught a memory leak in production before any users were impacted. Absolutely invaluable.',
    rating: 5,
  },
  {
    name: 'Amir Hassan',
    role: 'Engineering Manager @ Kova',
    initials: 'AH',
    color: '#EAB308',
    quote: 'Our whole team onboarded in a day. The UX is intuitive and the performance metrics speak for themselves.',
    rating: 5,
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <div className="inline-flex items-center gap-2 bg-[#DC2626]/10 border border-[#DC2626]/20 rounded-full px-4 py-1.5 mb-5">
          <span className="text-xs text-[#DC2626] font-medium uppercase tracking-widest">Testimonials</span>
        </div>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-4">
          Loved by{' '}
          <span className="gradient-text">engineering teams</span>
        </h2>
        <p className="text-white/50 text-lg max-w-xl mx-auto">
          Don't just take our word for it — hear from the developers and teams who ship with NovaSpark every day.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {testimonials.map((t, i) => (
          <TestimonialCard key={i} {...t} />
        ))}
      </div>
    </section>
  );
}
