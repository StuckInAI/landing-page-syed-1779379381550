import { ArrowRight, Play } from 'lucide-react';
import { useState } from 'react';

export default function Hero() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (email.trim()) {
      setSubmitted(true);
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Background blobs */}
      <div className="blob-bg w-96 h-96 bg-[#6C63FF] -top-20 -left-20" />
      <div className="blob-bg w-80 h-80 bg-[#FF6584] top-1/3 -right-20" />
      <div className="blob-bg w-64 h-64 bg-[#6C63FF] bottom-0 left-1/3" />

      {/* Grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: '60px 60px',
        }}
      />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-[#6C63FF]/10 border border-[#6C63FF]/30 rounded-full px-4 py-1.5 mb-8">
          <span className="w-2 h-2 rounded-full bg-[#6C63FF] animate-pulse" />
          <span className="text-sm text-[#6C63FF] font-medium">Now in public beta — join 12,000+ teams</span>
        </div>

        {/* Headline */}
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-white leading-tight mb-6">
          Build faster,{' '}
          <span className="gradient-text">ship smarter</span>
          <br /> with NovaSpark
        </h1>

        {/* Subheadline */}
        <p className="text-lg sm:text-xl text-white/60 max-w-2xl mx-auto mb-10 leading-relaxed">
          The all-in-one developer platform that eliminates friction, automates repetitive tasks,
          and helps your team deliver production-ready features in record time.
        </p>

        {/* CTA form */}
        {!submitted ? (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto mb-6">
            <input
              type="email"
              value={email}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
              placeholder="Enter your work email"
              required
              className="flex-1 bg-white/5 border border-white/10 text-white placeholder-white/30 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-[#6C63FF]/60 focus:bg-white/8 transition-all"
            />
            <button
              type="submit"
              className="flex items-center justify-center gap-2 bg-[#6C63FF] hover:bg-[#4B44CC] text-white font-medium px-6 py-3 rounded-lg transition-colors whitespace-nowrap text-sm"
            >
              Get started free <ArrowRight className="w-4 h-4" />
            </button>
          </form>
        ) : (
          <div className="flex items-center justify-center gap-2 max-w-md mx-auto mb-6 bg-[#6C63FF]/10 border border-[#6C63FF]/30 rounded-lg px-6 py-4">
            <span className="text-[#6C63FF] font-medium">🎉 You're on the list! We'll be in touch soon.</span>
          </div>
        )}

        <p className="text-xs text-white/30 mb-12">No credit card required. Free plan available forever.</p>

        {/* Social proof */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-10 mb-16">
          <div className="flex items-center gap-3">
            <div className="flex -space-x-2">
              {['#FF6584','#6C63FF','#43D9AD','#FFB347'].map((color, i) => (
                <div
                  key={i}
                  className="w-8 h-8 rounded-full border-2 border-[#0F0F1A] flex items-center justify-center text-xs font-bold text-white"
                  style={{ backgroundColor: color }}
                >
                  {['A','B','C','D'][i]}
                </div>
              ))}
            </div>
            <span className="text-sm text-white/50">Loved by <span className="text-white font-medium">12,000+</span> developers</span>
          </div>
          <div className="h-px w-10 bg-white/10 hidden sm:block" />
          <div className="flex items-center gap-1">
            {[1,2,3,4,5].map((s) => (
              <svg key={s} className="w-4 h-4 text-yellow-400 fill-current" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
            <span className="text-sm text-white/50 ml-1"><span className="text-white font-medium">4.9</span>/5 rating</span>
          </div>
        </div>

        {/* Hero image / dashboard mockup */}
        <div className="relative max-w-4xl mx-auto">
          <div className="absolute inset-0 bg-gradient-to-t from-[#0F0F1A] via-transparent to-transparent z-10 pointer-events-none rounded-2xl" />
          <div className="bg-[#16162A] border border-white/10 rounded-2xl overflow-hidden shadow-2xl">
            {/* Window chrome */}
            <div className="flex items-center gap-2 px-4 py-3 border-b border-white/10 bg-[#1E1E35]">
              <div className="w-3 h-3 rounded-full bg-[#FF6584]/80" />
              <div className="w-3 h-3 rounded-full bg-yellow-400/80" />
              <div className="w-3 h-3 rounded-full bg-[#43D9AD]/80" />
              <div className="flex-1 mx-4">
                <div className="bg-[#0F0F1A] rounded-md px-3 py-1 text-xs text-white/30 text-center">app.novaspark.io/dashboard</div>
              </div>
              <button
                className="flex items-center gap-1.5 bg-[#6C63FF]/20 hover:bg-[#6C63FF]/30 text-[#6C63FF] px-3 py-1 rounded-md text-xs transition-colors"
                onClick={() => {}}
              >
                <Play className="w-3 h-3" /> Watch demo
              </button>
            </div>
            {/* Dashboard content */}
            <div className="p-6 grid grid-cols-12 gap-4">
              {/* Sidebar */}
              <div className="col-span-2 flex flex-col gap-3">
                {['Dashboard','Projects','Deploys','Analytics','Settings'].map((item, i) => (
                  <div key={i} className={`px-3 py-2 rounded-lg text-xs ${i === 0 ? 'bg-[#6C63FF]/20 text-[#6C63FF]' : 'text-white/30'}`}>{item}</div>
                ))}
              </div>
              {/* Main */}
              <div className="col-span-10 flex flex-col gap-4">
                {/* Stats row */}
                <div className="grid grid-cols-4 gap-3">
                  {[
                    { label: 'Deployments', value: '1,284', delta: '+12%' },
                    { label: 'Uptime', value: '99.98%', delta: '+0.1%' },
                    { label: 'Build Time', value: '1.4s', delta: '-34%' },
                    { label: 'Team Members', value: '24', delta: '+3' },
                  ].map((stat, i) => (
                    <div key={i} className="bg-[#1E1E35] rounded-lg p-3">
                      <div className="text-white/40 text-[10px] mb-1">{stat.label}</div>
                      <div className="text-white font-bold text-sm">{stat.value}</div>
                      <div className="text-[#43D9AD] text-[10px]">{stat.delta}</div>
                    </div>
                  ))}
                </div>
                {/* Chart placeholder */}
                <div className="bg-[#1E1E35] rounded-lg p-4 h-32 flex items-end gap-1">
                  {[40,65,45,80,55,90,70,85,60,95,75,100].map((h, i) => (
                    <div
                      key={i}
                      className="flex-1 rounded-sm transition-all"
                      style={{ height: `${h}%`, backgroundColor: i === 11 ? '#6C63FF' : 'rgba(108,99,255,0.3)' }}
                    />
                  ))}
                </div>
                {/* List */}
                <div className="bg-[#1E1E35] rounded-lg p-3 flex flex-col gap-2">
                  {['feat/payment-api — deployed 2min ago','fix/auth-timeout — deployed 15min ago','chore/deps-update — deployed 1hr ago'].map((item, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-[#43D9AD]" />
                      <span className="text-white/50 text-[10px]">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
