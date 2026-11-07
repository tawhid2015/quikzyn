import type { Metadata } from 'next';
import ContactForm from './ContactForm';

export const metadata: Metadata = {
  title: 'Contact Us — Quikzyn',
  description:
    'Get in touch with Tawhid Islam, the developer behind Quikzyn and Message Alarm. Contact us for support, feedback, or general inquiries.',
};

export default function ContactPage() {
  return (
    <div className="pt-32 pb-20 sm:pt-40 sm:pb-28">
      <div className="section-container">
        <div className="mx-auto max-w-3xl">
          {/* Header */}
          <div className="mb-12 text-center">
            <p className="text-sm font-semibold uppercase tracking-widest text-primary-600">
              Contact
            </p>
            <h1 className="mt-3 text-3xl font-bold tracking-tight text-navy-900 sm:text-4xl">
              Get in Touch
            </h1>
            <p className="mx-auto mt-4 max-w-xl text-lg text-gray-500">
              Have a question, suggestion, or need help with Message Alarm?
              We&apos;d love to hear from you.
            </p>
          </div>

          {/* Contact Cards */}
          <div className="mb-16 grid gap-6 sm:grid-cols-2">
            {/* General Inquiries */}
            <div className="card text-center">
              <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary-50 text-primary-600">
                <svg
                  className="h-6 w-6"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
              </div>
              <h3 className="text-base font-semibold text-navy-900">
                General Inquiries
              </h3>
              <p className="mt-1 text-sm text-gray-500">
                For business, partnerships, or general questions
              </p>
              <a
                href="mailto:contactus@quikzyn.com"
                className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-primary-600 transition-colors hover:text-primary-700"
              >
                contactus@quikzyn.com
                <svg
                  className="h-4 w-4"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </a>
            </div>

            {/* App Support */}
            <div className="card text-center">
              <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary-50 text-primary-600">
                <svg
                  className="h-6 w-6"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="12" cy="12" r="10" />
                  <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
                  <line x1="12" y1="17" x2="12.01" y2="17" />
                </svg>
              </div>
              <h3 className="text-base font-semibold text-navy-900">
                App Support
              </h3>
              <p className="mt-1 text-sm text-gray-500">
                For help with Message Alarm, bugs, or feature requests
              </p>
              <a
                href="mailto:messagealarm@quikzyn.com"
                className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-primary-600 transition-colors hover:text-primary-700"
              >
                messagealarm@quikzyn.com
                <svg
                  className="h-4 w-4"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <div className="rounded-2xl border border-gray-100 bg-white p-8 shadow-sm sm:p-10">
            <h2 className="text-xl font-semibold text-navy-900">
              Send Us a Message
            </h2>
            <p className="mt-2 text-sm text-gray-500">
              Fill out the form below and we&apos;ll get back to you as soon as
              possible. Since this is a static site, please use the email
              addresses above to reach us directly.
            </p>
            <ContactForm />
          </div>

          {/* Response Time */}
          <div className="mt-8 rounded-xl border border-primary-100 bg-primary-50/50 p-6 text-center">
            <p className="text-sm font-medium text-primary-900">
              ⏱️ We typically respond within 24–48 hours during business days.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
