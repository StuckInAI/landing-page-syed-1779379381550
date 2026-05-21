import { Check } from 'lucide-react';
import clsx from 'clsx';
import { useState } from 'react';

type PricingCardProps = {
  name: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  cta: string;
  highlighted: boolean;
  badge?: string;
};

function PricingCard({ name, price, period, description, features, cta, highlighted, badge }: PricingCardProps) {
  return (
    <div
      className={clsx(
        'relative rounded-2xl p-8 border flex flex-col transition-all duration-300 card-glow',
        highlighted
          ? 'bg-[#DC2626]/10 border-[#DC2626]/50 shadow-xl shadow-[#DC2626]/10'
          : 'bg-[#1A0E0E] border-white/5 hover:border-white/10'
      )}
    >
      {badge && (
        <div className="absolute -top-3 left-1/2 -translate-x-1/2">
          <span className="bg-[#DC2626] text-white text-xs font-bold px-4 py-1 rounded-full">{badge}</span>
        </div>
      )}

      <div className="mb-6">
        <h3 className={clsx('font-semibold text-base mb-1', highlighted ? 'text-[#DC2626]' : 'text-white/70')}>{name}</h3>
        <div className="flex items-end gap-1 mb-2">
          <span className="text-4xl font-extrabold text-white">{price}</span>
          {period && <span className="text-white/40 text-sm mb-1">{period}</span>}
        </div>
        <p className="text-white/40 text-sm">{description}</p>
      </div>

      <ul className="flex flex-col gap-3 mb-8 flex-1">
        {features.map((feat, i) => (
          <li key={i} className="flex items-start gap-2">
            <Check className={clsx('w-4 h-4 mt-0.5 flex-shrink-0', highlighted ? 'text-[#DC2626]' : 'text-[#EAB308]')} />
            <span className="text-white/60 text-sm">{feat}</span>
          </li>
        ))}
      </ul>

      <button
        className={clsx(
          'w-full py-3 rounded-xl font-medium text-sm transition-all',
          highlighted
            ? 'bg-[#DC2626] hover:bg-[#B91C1C] text-white'
            : 'bg-white/5 hover:bg-white/10 text-white border border-white/10'
        )}
      >
        {cta}
      </button>
    </div>
  );
}

const plans: PricingCardProps[] = [
  {
    name: 'Starter',
    price: '$0',
    period: '/month',
    description: 'Perfect for side projects and indie hackers.',
    features: [
      'Up to 3 projects',
      '100 deploys/month',
      'Community support',
      'Shared build runners',
      '1 GB storage',
    ],
    cta: 'Get started free',
    highlighted: false,
  },
  {
    name: 'Pro',
    price: '$29',
    period: '/month',
    description: 'For growing teams that need more power.',
    features: [
      'Unlimited projects',
      'Unlimited deploys',
      'Priority support',
      'Dedicated build runners',
      '50 GB storage',
      'Preview environments',
      'Advanced analytics',
    ],
    cta: 'Start free trial',
    highlighted: true,
    badge: 'Most Popular',
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    period: '',
    description: 'For large teams with advanced requirements.',
    features: [
      'Everything in Pro',
      'SSO & SAML',
      'SLA guarantee',
      'Dedicated support team',
      'Custom integrations',
      'Audit logs',
      'On-prem option',
    ],
    cta: 'Contact sales',
    highlighted: false,
  },
];

export default function Pricing() {
  const [annual, setAnnual] = useState(false);

  return (
    <section id="pricing" className="py-24 bg-[#1A0E0E]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-[#DC2626]/10 border border-[#DC2626]/20 rounded-full px-4 py-1.5 mb-5">
            <span className="text-xs text-[#DC2626] font-medium uppercase tracking-widest">Pricing</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-4">
            Simple,{' '}
            <span className="gradient-text">transparent pricing</span>
          </h2>
          <p className="text-white/50 text-lg max-w-xl mx-auto mb-8">
            No hidden fees. No surprises. Scale as you grow.
          </p>

          {/* Toggle */}
          <div className="flex items-center justify-center gap-3">
            <span className={clsx('text-sm', !annual ? 'text-white' : 'text-white/40')}>Monthly</span>
            <button
              onClick={() => setAnnual((v) => !v)}
              className={clsx(
                'relative w-12 h-6 rounded-full transition-colors',
                annual ? 'bg-[#DC2626]' : 'bg-white/10'
              )}
            >
              <span
                className={clsx(
                  'absolute top-0.5 left-0.5 w-5 h-5 rounded-full bg-white transition-transform',
                  annual && 'translate-x-6'
                )}
              />
            </button>
            <span className={clsx('text-sm', annual ? 'text-white' : 'text-white/40')}>Annual</span>
            {annual && (
              <span className="bg-[#EAB308]/20 text-[#EAB308] text-xs font-medium px-2 py-0.5 rounded-full">
                Save 20%
              </span>
            )}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {plans.map((plan, i) => (
            <PricingCard key={i} {...plan} />
          ))}
        </div>

        <p className="text-center text-white/30 text-sm mt-8">
          All plans include a 14-day free trial. No credit card required.
        </p>
      </div>
    </section>
  );
}
