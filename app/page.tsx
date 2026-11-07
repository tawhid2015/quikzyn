import ScrollReveal from '@/components/ScrollReveal';

const PLAY_STORE_URL =
  'https://play.google.com/store/apps/details?id=com.quikgen.messagealarm';

const features = [
  {
    icon: (
      <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
        <path d="M13.73 21a2 2 0 0 1-3.46 0" />
        <line x1="12" y1="2" x2="12" y2="4" />
      </svg>
    ),
    title: 'Smart Keyword Matching',
    description:
      'Set rules with keywords. Alarm rings only when notification text matches your specified terms.',
  },
  {
    icon: (
      <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="5" y="2" width="14" height="20" rx="2" ry="2" />
        <line x1="12" y1="18" x2="12" y2="18.01" />
      </svg>
    ),
    title: 'App-Specific Rules',
    description:
      'Target specific apps like WhatsApp, Slack, TradingView, or any installed app on your device.',
  },
  {
    icon: (
      <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
        <path d="M15.54 8.46a5 5 0 0 1 0 7.07" />
        <path d="M19.07 4.93a10 10 0 0 1 0 14.14" />
      </svg>
    ),
    title: 'Custom Alarm Sounds',
    description:
      'Choose from system tones, default alarm sounds, or use your own audio files for each rule.',
  },
  {
    icon: (
      <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
      </svg>
    ),
    title: 'DND & Silent Override',
    description:
      'Alarms play even when your phone is in Do Not Disturb or Silent mode. Never miss a critical alert.',
  },
  {
    icon: (
      <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <polyline points="12 6 12 12 16 14" />
      </svg>
    ),
    title: 'Smart Scheduling',
    description:
      'Set active hours and days for each rule. No alarms during sleep, meetings, or weekends.',
  },
  {
    icon: (
      <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
        <path d="M7 11V7a5 5 0 0 1 10 0v4" />
      </svg>
    ),
    title: 'Privacy First',
    description:
      'All notification processing happens entirely on-device. No data ever leaves your phone.',
  },
];

const steps = [
  {
    number: '01',
    title: 'Select an App',
    description:
      'Choose which app to monitor — WhatsApp, Slack, email, trading apps, or any installed application.',
    icon: (
      <svg className="h-8 w-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="5" y="2" width="14" height="20" rx="2" ry="2" />
        <path d="M9 22V2M15 22V2M3 12h18" />
      </svg>
    ),
  },
  {
    number: '02',
    title: 'Add Trigger Keywords',
    description:
      'Enter the keywords or phrases that matter to you. Multiple keywords per rule, case-insensitive matching.',
    icon: (
      <svg className="h-8 w-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="4 7 4 4 20 4 20 7" />
        <line x1="9" y1="20" x2="15" y2="20" />
        <line x1="12" y1="4" x2="12" y2="20" />
      </svg>
    ),
  },
  {
    number: '03',
    title: 'Get Alerted Instantly',
    description:
      'When a matching notification arrives, your chosen alarm sounds immediately — even in silent mode.',
    icon: (
      <svg className="h-8 w-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
        <path d="M13.73 21a2 2 0 0 1-3.46 0" />
        <line x1="1" y1="1" x2="23" y2="1" />
      </svg>
    ),
  },
];

const templates = [
  {
    name: 'Instagram Mentions',
    app: 'Instagram',
    keywords: '@yourusername, mentioned you',
    color: 'from-pink-500 to-rose-500',
  },
  {
    name: 'TradingView Alerts',
    app: 'TradingView',
    keywords: 'alert, price crossed, breakout',
    color: 'from-blue-500 to-cyan-500',
  },
  {
    name: 'Slack Urgent',
    app: 'Slack',
    keywords: 'urgent, ASAP, critical, emergency',
    color: 'from-purple-500 to-violet-500',
  },
  {
    name: 'WhatsApp Family',
    app: 'WhatsApp',
    keywords: 'Mom, Dad, emergency, help',
    color: 'from-green-500 to-emerald-500',
  },
  {
    name: 'Email VIP',
    app: 'Gmail',
    keywords: 'boss@company.com, CEO, board meeting',
    color: 'from-red-500 to-orange-500',
  },
  {
    name: 'Delivery Updates',
    app: 'Any SMS / Courier App',
    keywords: 'delivered, out for delivery, arriving today',
    color: 'from-amber-500 to-yellow-500',
  },
];

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-32 pb-20 sm:pt-40 sm:pb-32">
        {/* Background decoration */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 h-[600px] w-[600px] rounded-full bg-gradient-to-br from-primary-100/40 to-primary-50/20 blur-3xl" />
          <div className="absolute top-20 right-0 h-[400px] w-[400px] rounded-full bg-gradient-to-bl from-indigo-100/30 to-transparent blur-3xl" />
        </div>

        <div className="section-container">
          <div className="mx-auto max-w-4xl text-center">
            {/* Badge */}
            <ScrollReveal>
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary-200 bg-primary-50 px-4 py-1.5 text-xs font-medium text-primary-700">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary-400 opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-primary-500" />
                </span>
                Coming soon on Google Play
              </div>
            </ScrollReveal>

            {/* App Icon */}
            <ScrollReveal delay={100}>
              <div className="mx-auto mb-8 h-24 w-24 overflow-hidden rounded-3xl shadow-2xl shadow-primary-600/30 sm:h-28 sm:w-28">
                <img
                  src="/app-icon.png"
                  alt="Message Alarm"
                  className="h-full w-full object-cover"
                />
              </div>
            </ScrollReveal>

            {/* Heading */}
            <ScrollReveal delay={200}>
              <h1 className="text-4xl font-extrabold tracking-tight text-navy-900 sm:text-5xl lg:text-6xl">
                Message Alarm
                <span className="mt-2 block gradient-text">
                  Notification Alerts
                </span>
              </h1>
            </ScrollReveal>

            <ScrollReveal delay={300}>
              <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-gray-500 sm:text-xl">
                Never miss important notifications. Smart alarm rules that ring
                when keywords match — for WhatsApp, Slack, TradingView, and any
                app on your phone.
              </p>
            </ScrollReveal>

            {/* CTA Buttons */}
            <ScrollReveal delay={400}>
              <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
                <a
                  href={PLAY_STORE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary !px-8 !py-4 !text-base"
                >
                  <svg
                    className="h-5 w-5"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.61 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z" />
                  </svg>
                  Get it on Google Play
                </a>
                <a href="#features" className="btn-secondary !px-8 !py-4 !text-base">
                  Learn More
                  <svg
                    className="h-4 w-4"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M12 5v14M19 12l-7 7-7-7" />
                  </svg>
                </a>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 sm:py-28 bg-gray-50/50">
        <div className="section-container">
          <ScrollReveal>
            <div className="mx-auto max-w-2xl text-center">
              <p className="text-sm font-semibold uppercase tracking-widest text-primary-600">
                Features
              </p>
              <h2 className="mt-3 text-3xl font-bold tracking-tight text-navy-900 sm:text-4xl">
                Everything you need to stay alerted
              </h2>
              <p className="mt-4 text-lg text-gray-500">
                Powerful features designed to make sure you never miss what
                matters most.
              </p>
            </div>
          </ScrollReveal>

          <div className="mx-auto mt-16 grid max-w-5xl gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature, index) => (
              <ScrollReveal key={feature.title} delay={index * 100}>
                <div className="card group h-full">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary-50 text-primary-600 transition-colors group-hover:bg-primary-100">
                    {feature.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-navy-900">
                    {feature.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-gray-500">
                    {feature.description}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-20 sm:py-28">
        <div className="section-container">
          <ScrollReveal>
            <div className="mx-auto max-w-2xl text-center">
              <p className="text-sm font-semibold uppercase tracking-widest text-primary-600">
                How It Works
              </p>
              <h2 className="mt-3 text-3xl font-bold tracking-tight text-navy-900 sm:text-4xl">
                Set up in under a minute
              </h2>
              <p className="mt-4 text-lg text-gray-500">
                Three simple steps to never miss an important notification
                again.
              </p>
            </div>
          </ScrollReveal>

          <div className="mx-auto mt-16 grid max-w-4xl gap-8 sm:grid-cols-3">
            {steps.map((step, index) => (
              <ScrollReveal key={step.number} delay={index * 150}>
                <div className="relative text-center">
                  {/* Connector line */}
                  {index < steps.length - 1 && (
                    <div className="absolute right-0 top-12 hidden h-px w-full translate-x-1/2 bg-gradient-to-r from-primary-200 to-primary-100 sm:block" />
                  )}
                  <div className="relative mx-auto mb-6 flex h-24 w-24 items-center justify-center rounded-2xl bg-gradient-to-br from-primary-50 to-primary-100/50 text-primary-600">
                    {step.icon}
                    <span className="absolute -top-2 -right-2 flex h-7 w-7 items-center justify-center rounded-full bg-primary-600 text-xs font-bold text-white shadow-md">
                      {step.number}
                    </span>
                  </div>
                  <h3 className="text-lg font-semibold text-navy-900">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-gray-500">
                    {step.description}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Templates Section */}
      <section className="py-20 sm:py-28 bg-gray-50/50">
        <div className="section-container">
          <ScrollReveal>
            <div className="mx-auto max-w-2xl text-center">
              <p className="text-sm font-semibold uppercase tracking-widest text-primary-600">
                Templates
              </p>
              <h2 className="mt-3 text-3xl font-bold tracking-tight text-navy-900 sm:text-4xl">
                Quick-start rule templates
              </h2>
              <p className="mt-4 text-lg text-gray-500">
                Get started instantly with pre-built rule templates for popular
                use cases.
              </p>
            </div>
          </ScrollReveal>

          <div className="mx-auto mt-16 grid max-w-5xl gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {templates.map((template, index) => (
              <ScrollReveal key={template.name} delay={index * 80}>
                <div className="card group h-full">
                  <div
                    className={`mb-4 inline-flex rounded-lg bg-gradient-to-r ${template.color} px-3 py-1 text-xs font-semibold text-white`}
                  >
                    {template.app}
                  </div>
                  <h3 className="text-base font-semibold text-navy-900">
                    {template.name}
                  </h3>
                  <p className="mt-2 text-sm text-gray-400">
                    <span className="font-medium text-gray-500">Keywords:</span>{' '}
                    {template.keywords}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Download CTA Section */}
      <section id="download" className="py-20 sm:py-28">
        <div className="section-container">
          <ScrollReveal>
            <div className="relative mx-auto max-w-4xl overflow-hidden rounded-3xl bg-gradient-to-br from-navy-900 to-navy-800 px-8 py-16 text-center shadow-2xl sm:px-16 sm:py-20">
              {/* Background decoration */}
              <div className="absolute inset-0 -z-0">
                <div className="absolute -top-24 -right-24 h-64 w-64 rounded-full bg-primary-600/10 blur-3xl" />
                <div className="absolute -bottom-24 -left-24 h-64 w-64 rounded-full bg-primary-500/10 blur-3xl" />
              </div>

              <div className="relative z-10">
                <div className="mx-auto mb-6 h-16 w-16 overflow-hidden rounded-2xl shadow-lg shadow-primary-500/30">
                  <img
                    src="/app-icon.png"
                    alt="Message Alarm"
                    className="h-full w-full object-cover"
                  />
                </div>
                <h2 className="text-3xl font-bold text-white sm:text-4xl">
                  Ready to never miss a notification?
                </h2>
                <p className="mx-auto mt-4 max-w-xl text-lg text-gray-400">
                  Message Alarm is coming soon to Google Play. Be the first to try it — set up your first rule in
                  under 60 seconds. Free to use, no account required.
                </p>
                <div className="mt-8 flex flex-col items-center gap-3">
                  <a
                    href={PLAY_STORE_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-xl bg-white px-8 py-4 text-base font-semibold text-navy-900 shadow-lg transition-all duration-200 hover:bg-gray-100 hover:-translate-y-0.5 hover:shadow-xl"
                  >
                    <svg
                      className="h-5 w-5 text-primary-600"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.61 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z" />
                    </svg>
                    Get it on Google Play
                  </a>
                  <p className="text-sm text-gray-500">Coming soon — stay tuned!</p>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
