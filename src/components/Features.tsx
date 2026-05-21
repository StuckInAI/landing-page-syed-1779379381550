import { Zap, Shield, BarChart2, GitBranch, Layers, Cpu } from 'lucide-react';
import clsx from 'clsx';

type FeatureCardProps = {
  icon: React.ReactNode;
  title: string;
  description: string;
  highlight?: boolean;
};

function FeatureCard({ icon, title, description, highlight }: FeatureCardProps) {
  return (
    <div
      className={clsx(
        'relative rounded-2xl p-6 border transition-all duration-300 card-glow group',
        highlight
          ? 'bg-[#6C63FF]/10 border-[#6C63FF]/40'
          : 'bg-[#16162A] border-white/5 hover:border-white/10'
      )}
    >
      <div
        className={clsx(
          'w-11 h-11 rounded-xl flex items-center justify-center mb-4',
          highlight ? 'bg-[#6C63FF]' : 'bg-[#1E1E35] group-hover:bg-[#6C63FF]/20 transition-colors'
        )}
      >
        {icon}
      </div>
      <h3 className="text-white font-semibold text-base mb-2">{title}</h3>
      <p className="text-white/50 text-sm leading-relaxed">{description}</p>
    </div>
  );
}

export default function Features() {
  const features = [
    {
      icon: <Zap className="w-5 h-5 text-[#6C63FF]" />,
      title: 'Instant Deploys',
      description: 'Push your code and watch it go live in under 2 seconds. Zero config, zero friction.',
      highlight: true,
    },
    {
      icon: <Shield className="w-5 h-5 text-white/70" />,
      title: 'Enterprise Security',
      description: 'SOC 2 Type II certified. Your code and data are protected with military-grade encryption.',
    },
    {
      icon: <BarChart2 className="w-5 h-5 text-white/70" />,
      title: 'Real-time Analytics',
      description: 'Monitor performance, error rates, and user behavior from a single unified dashboard.',
    },
    {
      icon: <GitBranch className="w-5 h-5 text-white/70" />,
      title: 'Git-native Workflows',
      description: 'Preview environments for every PR. Merge with confidence knowing exactly what changes.',
    },
    {
      icon: <Layers className="w-5 h-5 text-white/70" />,
      title: 'Any Stack, Any Scale',
      description: 'Node, Python, Go, Rust — we support every language and framework out of the box.',
    },
    {
      icon: <Cpu className="w-5 h-5 text-white/70" />,
      title: 'AI-Powered Insights',
      description: 'Automatic anomaly detection, smart alerting, and AI-generated post-mortems.',
    },
  ];

  return (
    <section id="features" className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Section header */}
      <div className="text-center mb-16">
        <div className="inline-flex items-center gap-2 bg-[#6C63FF]/10 border border-[#6C63FF]/20 rounded-full px-4 py-1.5 mb-5">
          <span className="text-xs text-[#6C63FF] font-medium uppercase tracking-widest">Features</span>
        </div>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-4">
          Everything you need to{' '}
          <span className="gradient-text">ship confidently</span>
        </h2>
        <p className="text-white/50 text-lg max-w-2xl mx-auto">
          NovaSpark bundles the tools your team needs — deploy pipeline, observability, analytics — into one elegant platform.
        </p>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {features.map((feature, i) => (
          <FeatureCard key={i} {...feature} />
        ))}
      </div>
    </section>
  );
}
