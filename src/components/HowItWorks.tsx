import { Terminal, GitPullRequest, Rocket } from 'lucide-react';

const steps = [
  {
    number: '01',
    icon: <Terminal className="w-6 h-6 text-[#6C63FF]" />,
    title: 'Connect your repo',
    description:
      'Link your GitHub, GitLab, or Bitbucket repository in seconds. No complex configuration or YAML wrangling required.',
  },
  {
    number: '02',
    icon: <GitPullRequest className="w-6 h-6 text-[#6C63FF]" />,
    title: 'Push your code',
    description:
      'Every git push triggers an automated build, test run, and deploy pipeline. Preview environments are created for every branch.',
  },
  {
    number: '03',
    icon: <Rocket className="w-6 h-6 text-[#6C63FF]" />,
    title: 'Ship with confidence',
    description:
      'One-click promotions to production. Instant rollbacks if anything goes wrong. Sleep easy knowing your app is always healthy.',
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 bg-[#16162A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-[#6C63FF]/10 border border-[#6C63FF]/20 rounded-full px-4 py-1.5 mb-5">
            <span className="text-xs text-[#6C63FF] font-medium uppercase tracking-widest">How it works</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-4">
            Up and running in{' '}
            <span className="gradient-text">three steps</span>
          </h2>
          <p className="text-white/50 text-lg max-w-xl mx-auto">
            From zero to production in minutes, not days.
          </p>
        </div>

        {/* Steps */}
        <div className="relative">
          {/* Connector line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#6C63FF]/30 to-transparent -translate-y-1/2" />

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {steps.map((step, i) => (
              <div key={i} className="relative flex flex-col items-center text-center">
                {/* Number badge */}
                <div className="w-16 h-16 rounded-2xl bg-[#1E1E35] border border-white/10 flex items-center justify-center mb-5 relative z-10">
                  <span className="text-2xl font-extrabold text-[#6C63FF]/40">{step.number}</span>
                </div>
                {/* Icon */}
                <div className="w-12 h-12 rounded-xl bg-[#6C63FF]/10 border border-[#6C63FF]/20 flex items-center justify-center mb-4">
                  {step.icon}
                </div>
                <h3 className="text-white font-semibold text-lg mb-2">{step.title}</h3>
                <p className="text-white/50 text-sm leading-relaxed max-w-xs">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
