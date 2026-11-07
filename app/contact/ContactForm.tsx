'use client';

import { useState, FormEvent } from 'react';

export default function ContactForm() {
  const [formState, setFormState] = useState<'idle' | 'submitted'>('idle');

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setFormState('submitted');
  };

  if (formState === 'submitted') {
    return (
      <div className="mt-8 rounded-xl border border-green-200 bg-green-50 p-8 text-center">
        <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-green-100">
          <svg
            className="h-6 w-6 text-green-600"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polyline points="20 6 9 17 4 12" />
          </svg>
        </div>
        <h3 className="text-lg font-semibold text-green-900">
          Thank you for your message!
        </h3>
        <p className="mt-2 text-sm text-green-700">
          Since this is a static website, please email us directly at{' '}
          <a
            href="mailto:contactus@quikzyn.com"
            className="font-medium underline"
          >
            contactus@quikzyn.com
          </a>{' '}
          for the fastest response. We&apos;ll get back to you within 24–48
          hours.
        </p>
        <button
          onClick={() => setFormState('idle')}
          className="mt-4 text-sm font-medium text-green-700 underline hover:text-green-800"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="mt-8 space-y-6">
      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <label
            htmlFor="name"
            className="block text-sm font-medium text-navy-900"
          >
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            className="mt-2 block w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm text-navy-900 placeholder-gray-400 transition-colors focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-500/20"
            placeholder="Your name"
          />
        </div>
        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-navy-900"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            className="mt-2 block w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm text-navy-900 placeholder-gray-400 transition-colors focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-500/20"
            placeholder="your@email.com"
          />
        </div>
      </div>

      <div>
        <label
          htmlFor="subject"
          className="block text-sm font-medium text-navy-900"
        >
          Subject
        </label>
        <select
          id="subject"
          name="subject"
          required
          className="mt-2 block w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm text-navy-900 transition-colors focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-500/20"
        >
          <option value="">Select a topic</option>
          <option value="support">App Support</option>
          <option value="bug">Bug Report</option>
          <option value="feature">Feature Request</option>
          <option value="business">Business Inquiry</option>
          <option value="other">Other</option>
        </select>
      </div>

      <div>
        <label
          htmlFor="message"
          className="block text-sm font-medium text-navy-900"
        >
          Message
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          className="mt-2 block w-full resize-none rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm text-navy-900 placeholder-gray-400 transition-colors focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-500/20"
          placeholder="Tell us how we can help..."
        />
      </div>

      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-xs text-gray-400">
          For faster responses, email us directly at{' '}
          <a
            href="mailto:contactus@quikzyn.com"
            className="text-primary-600 hover:underline"
          >
            contactus@quikzyn.com
          </a>
        </p>
        <button type="submit" className="btn-primary">
          Send Message
          <svg
            className="h-4 w-4"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <line x1="22" y1="2" x2="11" y2="13" />
            <polygon points="22 2 15 22 11 13 2 9 22 2" />
          </svg>
        </button>
      </div>
    </form>
  );
}
