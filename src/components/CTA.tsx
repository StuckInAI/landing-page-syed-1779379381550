import { ArrowRight } from 'lucide-react';
import { useState } from 'react';

export default function CTA() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (email.trim()) setSubmitted(true);
  };

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-[#1A0E0E]" />
      <div className="blob-bg w-96 h-96 bg-[#DC2626] -left-32 top-0" />
      <div className="blob-bg w-64 h-64 bg-[#EAB308] right-0 bottom-0" />

      <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl sm:text-5xl font-extrabold text-white mb-4 leading-tight">
          Ready to{' '}
          <span className="gradient-text">supercharge</span>
          <br /> your deployments?
        </h2>
        <p className="text-white/50 text-lg mb-10">
          Join thousands of teams shipping faster with NovaSpark. Start free, no credit card required.
        </p>

        {!submitted ? (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
              placeholder="Enter your work email"
              required
              className="flex-1 bg-white/5 border border-white/10 text-white placeholder-white/30 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-[#DC2626]/60 transition-all"
            />
            <button
              type="submit"
              className="flex items-center justify-center gap-2 bg-[#DC2626] hover:bg-[#B91C1C] text-white font-medium px-6 py-3 rounded-lg transition-colors whitespace-nowrap text-sm"
            >
              Get started free <ArrowRight className="w-4 h-4" />
            </button>
          </form>
        ) : (
          <div className="bg-[#DC2626]/10 border border-[#DC2626]/30 rounded-xl px-8 py-6 inline-block">
            <p className="text-white font-medium text-lg">🎉 You're on the list!</p>
            <p className="text-white/50 text-sm mt-1">We'll reach out to <span className="text-[#DC2626]">{email}</span> soon.</p>
          </div>
        )}

        <p className="text-xs text-white/30 mt-4">No spam, ever. Unsubscribe at any time.</p>
      </div>
    </section>
  );
}
