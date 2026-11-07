import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="border-t border-gray-100 bg-gray-50">
      <div className="section-container py-12 sm:py-16">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <Link href="/" className="flex items-center gap-2">
              <img
                src="/logo.png"
                alt="Quikzyn"
                className="h-8 w-8 rounded-lg"
              />
              <span className="text-lg font-bold text-navy-900">Quikzyn</span>
            </Link>
            <p className="mt-3 text-sm leading-relaxed text-gray-500">
              Building smart mobile utilities that simplify everyday tasks. Our
              flagship app, Message Alarm, ensures you never miss an important
              notification.
            </p>
          </div>

          {/* Product */}
          <div>
            <h3 className="text-sm font-semibold text-navy-900">Product</h3>
            <ul className="mt-4 space-y-3">
              <li>
                <Link
                  href="/#features"
                  className="text-sm text-gray-500 transition-colors hover:text-primary-600"
                >
                  Features
                </Link>
              </li>
              <li>
                <Link
                  href="/#how-it-works"
                  className="text-sm text-gray-500 transition-colors hover:text-primary-600"
                >
                  How It Works
                </Link>
              </li>
              <li>
                <a
                  href="https://play.google.com/store/apps/details?id=com.quikgen.messagealarm"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-gray-500 transition-colors hover:text-primary-600"
                >
                  Download
                </a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-sm font-semibold text-navy-900">Legal</h3>
            <ul className="mt-4 space-y-3">
              <li>
                <Link
                  href="/m-terms"
                  className="text-sm text-gray-500 transition-colors hover:text-primary-600"
                >
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link
                  href="/m-privacy-policy"
                  className="text-sm text-gray-500 transition-colors hover:text-primary-600"
                >
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-semibold text-navy-900">Contact</h3>
            <ul className="mt-4 space-y-3">
              <li>
                <a
                  href="mailto:contactus@quikzyn.com"
                  className="text-sm text-gray-500 transition-colors hover:text-primary-600"
                >
                  contactus@quikzyn.com
                </a>
              </li>
              <li>
                <a
                  href="mailto:messagealarm@quikzyn.com"
                  className="text-sm text-gray-500 transition-colors hover:text-primary-600"
                >
                  messagealarm@quikzyn.com
                </a>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-sm text-gray-500 transition-colors hover:text-primary-600"
                >
                  Contact Page
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 flex flex-col items-center gap-4 border-t border-gray-200 pt-8 sm:flex-row sm:justify-between">
          <p className="text-sm text-gray-400">
            &copy; {new Date().getFullYear()} Quikzyn. All rights reserved.
          </p>
          <p className="text-sm text-gray-400">
            Made with <span className="text-red-400">❤️</span> by Tawhid Islam
          </p>
        </div>
      </div>
    </footer>
  );
}
