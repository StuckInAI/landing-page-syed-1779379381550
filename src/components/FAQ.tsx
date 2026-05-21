import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import clsx from 'clsx';

type FAQItemProps = {
  question: string;
  answer: string;
};

const faqs: FAQItemProps[] = [
  {
    question: 'How long does it take to get started?',
    answer:
      'Most teams are up and running within 10 minutes. Connect your repository, configure your build command, and NovaSpark handles the rest automatically.',
  },
  {
    question: 'What frameworks and languages are supported?',
    answer:
      'NovaSpark supports virtually every language and framework including Node.js, Python, Go, Rust, Ruby, PHP, and more. We auto-detect your stack and configure the build pipeline accordingly.',
  },
  {
    question: 'Can I migrate from my current platform?',
    answer:
      'Yes! We offer a concierge migration service for Pro and Enterprise customers. Our team will help you migrate your existing deployments, environment variables, and integrations with zero downtime.',
  },
  {
    question: 'How does billing work?',
    answer:
      'You're billed monthly or annually based on your chosen plan. Usage-based overages are billed at the end of each billing cycle. You can upgrade, downgrade, or cancel anytime.',
  },
  {
    question: 'Is my code and data secure?',
    answer:
      'Absolutely. NovaSpark is SOC 2 Type II certified. We use AES-256 encryption at rest and TLS 1.3 in transit. Your source code is never stored on our servers after builds complete.',
  },
  {
    question: 'Do you offer an SLA for uptime?',
    answer:
      'Enterprise plans include a 99.99% uptime SLA with financial credits for any breach. Pro plans have a best-effort 99.9% uptime commitment.',
  },
];

function FAQItem({ question, answer }: FAQItemProps) {
  const [open, setOpen] = useState(false);

  return (
    <div
      className={clsx(
        'border rounded-xl overflow-hidden transition-all',
        open ? 'border-[#6C63FF]/40 bg-[#6C63FF]/5' : 'border-white/5 bg-[#16162A]'
      )}
    >
      <button
        className="w-full flex items-center justify-between px-6 py-5 text-left gap-4"
        onClick={() => setOpen((v) => !v)}
      >
        <span className="text-white font-medium text-sm sm:text-base">{question}</span>
        <ChevronDown
          className={clsx(
            'w-4 h-4 text-white/40 flex-shrink-0 transition-transform duration-200',
            open && 'rotate-180'
          )}
        />
      </button>
      {open && (
        <div className="px-6 pb-5">
          <p className="text-white/50 text-sm leading-relaxed">{answer}</p>
        </div>
      )}
    </div>
  );
}

export default function FAQ() {
  return (
    <section id="faq" className="py-24 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-12">
        <div className="inline-flex items-center gap-2 bg-[#6C63FF]/10 border border-[#6C63FF]/20 rounded-full px-4 py-1.5 mb-5">
          <span className="text-xs text-[#6C63FF] font-medium uppercase tracking-widest">FAQ</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">
          Frequently asked{' '}
          <span className="gradient-text">questions</span>
        </h2>
        <p className="text-white/50 text-lg">
          Still have questions? <a href="#" className="text-[#6C63FF] hover:underline">Chat with us</a>.
        </p>
      </div>

      <div className="flex flex-col gap-3">
        {faqs.map((faq, i) => (
          <FAQItem key={i} {...faq} />
        ))}
      </div>
    </section>
  );
}
