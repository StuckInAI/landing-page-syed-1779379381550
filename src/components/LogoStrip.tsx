export default function LogoStrip() {
  const logos = [
    'Vercel', 'GitHub', 'AWS', 'Stripe', 'Figma', 'Linear', 'Notion', 'Slack',
  ];

  return (
    <section className="py-12 border-y border-white/5 overflow-hidden">
      <p className="text-center text-xs uppercase tracking-widest text-white/30 font-medium mb-8">
        Trusted by teams at leading companies
      </p>
      <div className="flex gap-12 items-center justify-center flex-wrap px-8">
        {logos.map((logo) => (
          <span
            key={logo}
            className="text-white/20 font-bold text-lg hover:text-[#EAB308]/70 transition-colors cursor-default select-none tracking-wide"
          >
            {logo}
          </span>
        ))}
      </div>
    </section>
  );
}
