import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy — Message Alarm | Quikzyn',
  description:
    'Privacy Policy for Message Alarm – Notification Alerts by Quikzyn. Learn how we protect your data.',
};

export default function PrivacyPolicyPage() {
  return (
    <div className="pt-32 pb-20 sm:pt-40 sm:pb-28">
      <div className="section-container">
        <div className="mx-auto max-w-3xl">
          <div className="mb-12">
            <p className="text-sm font-semibold uppercase tracking-widest text-primary-600">
              Legal
            </p>
            <h1 className="mt-3 text-3xl font-bold tracking-tight text-navy-900 sm:text-4xl">
              Privacy Policy
            </h1>
            <p className="mt-4 text-base text-gray-500">
              Last Updated: November 7, 2026
            </p>
          </div>

          <div className="prose prose-gray max-w-none prose-headings:font-semibold prose-headings:text-navy-900 prose-p:text-gray-600 prose-p:leading-relaxed prose-li:text-gray-600 prose-a:text-primary-600 prose-a:no-underline hover:prose-a:underline prose-strong:text-navy-900">
            <section className="mb-10">
              <h2 className="text-xl font-semibold text-navy-900 mb-4">
                Introduction
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Quikzyn, operated by Tawhid Islam (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;), is committed to protecting your privacy. This Privacy Policy explains how Message Alarm – Notification Alerts (&quot;the App&quot;) handles information when you use our Android application.
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                We designed Message Alarm with a privacy-first approach. The App processes all notification data entirely on your device. No personal data is collected, stored on external servers, or transmitted to us or any third parties. Your privacy is not just a feature — it is a core principle of how the App is built.
              </p>
              <p className="text-gray-600 leading-relaxed">
                By installing and using the App, you acknowledge that you have read and understood this Privacy Policy. If you do not agree with any part of this Privacy Policy, please uninstall the App.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-xl font-semibold text-navy-900 mb-4">
                1. Information We Do Not Collect
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                We want to be completely transparent: <strong className="text-navy-900">we do not collect any personal data</strong>. Specifically, the App:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-600 mb-4">
                <li>Does <strong className="text-navy-900">not</strong> collect, store, or transmit any personal information (name, email, phone number, etc.)</li>
                <li>Does <strong className="text-navy-900">not</strong> require user accounts or registration</li>
                <li>Does <strong className="text-navy-900">not</strong> use any analytics or tracking SDKs (no Google Analytics, Firebase Analytics, Crashlytics, or similar services)</li>
                <li>Does <strong className="text-navy-900">not</strong> use advertising SDKs or display ads</li>
                <li>Does <strong className="text-navy-900">not</strong> collect device identifiers, IP addresses, or location data</li>
                <li>Does <strong className="text-navy-900">not</strong> track your usage patterns or behavior within the App</li>
                <li>Does <strong className="text-navy-900">not</strong> share any data with third parties</li>
                <li>Does <strong className="text-navy-900">not</strong> transmit notification content, keywords, or alarm rules to any external server</li>
              </ul>
            </section>

            <section className="mb-10">
              <h2 className="text-xl font-semibold text-navy-900 mb-4">
                2. Information the App Accesses
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                While the App does not collect or transmit data, it does access certain information on your device to provide its core functionality:
              </p>
              <h3 className="text-lg font-semibold text-navy-900 mt-6 mb-3">
                2.1 Notification Content
              </h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                The App reads incoming notification content (title and body text) from applications you have specifically selected. This access is used <strong className="text-navy-900">solely for keyword matching</strong> — comparing notification text against your user-defined keywords to determine whether to trigger an alarm. Notification content is processed in real-time, entirely on your device, and is <strong className="text-navy-900">never stored, logged, or transmitted</strong> anywhere.
              </p>
              <h3 className="text-lg font-semibold text-navy-900 mt-6 mb-3">
                2.2 Installed Applications List
              </h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                The App accesses the list of installed applications on your device to allow you to select which apps to monitor for notifications. This list is used only for display purposes within the App and is not stored or transmitted externally.
              </p>
              <h3 className="text-lg font-semibold text-navy-900 mt-6 mb-3">
                2.3 User-Created Data
              </h3>
              <p className="text-gray-600 leading-relaxed">
                The App stores alarm rules, keywords, scheduling preferences, alarm sound selections, and other settings that you create. All of this data is stored locally on your device using Android&apos;s standard local storage mechanisms. This data is never transmitted to any external servers.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-xl font-semibold text-navy-900 mb-4">
                3. Permissions Used
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                The App requests the following Android permissions to function properly:
              </p>
              <div className="space-y-4">
                <div className="rounded-xl border border-gray-100 bg-gray-50 p-4">
                  <h4 className="font-semibold text-navy-900">Notification Access (NotificationListenerService)</h4>
                  <p className="mt-1 text-sm text-gray-600">Required to read incoming notifications from selected apps for keyword matching. This is the core permission that enables the App&apos;s primary functionality. Notification content is processed in real-time and never stored or transmitted.</p>
                </div>
                <div className="rounded-xl border border-gray-100 bg-gray-50 p-4">
                  <h4 className="font-semibold text-navy-900">Display Over Other Apps (SYSTEM_ALERT_WINDOW)</h4>
                  <p className="mt-1 text-sm text-gray-600">Required to display alarm overlays on top of other applications and the lock screen when a matching notification is detected.</p>
                </div>
                <div className="rounded-xl border border-gray-100 bg-gray-50 p-4">
                  <h4 className="font-semibold text-navy-900">Battery Optimization Exemption (REQUEST_IGNORE_BATTERY_OPTIMIZATIONS)</h4>
                  <p className="mt-1 text-sm text-gray-600">Required to prevent the Android system from terminating the notification listener service in the background, ensuring reliable alarm delivery.</p>
                </div>
                <div className="rounded-xl border border-gray-100 bg-gray-50 p-4">
                  <h4 className="font-semibold text-navy-900">Do Not Disturb Override (ACCESS_NOTIFICATION_POLICY)</h4>
                  <p className="mt-1 text-sm text-gray-600">Required to play alarm sounds even when the device is in Do Not Disturb or Silent mode, ensuring critical alerts are not silenced.</p>
                </div>
                <div className="rounded-xl border border-gray-100 bg-gray-50 p-4">
                  <h4 className="font-semibold text-navy-900">Vibrate (VIBRATE)</h4>
                  <p className="mt-1 text-sm text-gray-600">Required to provide haptic feedback (vibration) when an alarm is triggered.</p>
                </div>
                <div className="rounded-xl border border-gray-100 bg-gray-50 p-4">
                  <h4 className="font-semibold text-navy-900">Wake Lock (WAKE_LOCK)</h4>
                  <p className="mt-1 text-sm text-gray-600">Required to keep the device&apos;s screen and processor awake while an alarm is actively sounding to ensure it can be dismissed properly.</p>
                </div>
                <div className="rounded-xl border border-gray-100 bg-gray-50 p-4">
                  <h4 className="font-semibold text-navy-900">Boot Completed (RECEIVE_BOOT_COMPLETED)</h4>
                  <p className="mt-1 text-sm text-gray-600">Required to automatically restart the notification listener service after a device reboot, so alarm rules remain active without manual intervention.</p>
                </div>
                <div className="rounded-xl border border-gray-100 bg-gray-50 p-4">
                  <h4 className="font-semibold text-navy-900">Internet (INTERNET)</h4>
                  <p className="mt-1 text-sm text-gray-600">Reserved for a planned future webhook feature that will allow users to optionally send alarm events to their own specified endpoints. This permission is <strong>not currently used</strong> for any data transmission. When the webhook feature is implemented, it will be entirely optional and user-initiated.</p>
                </div>
              </div>
            </section>

            <section className="mb-10">
              <h2 className="text-xl font-semibold text-navy-900 mb-4">
                4. Data Storage and Retention
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                All data generated by your use of the App — including alarm rules, keywords, scheduling settings, alarm sound preferences, and app configurations — is stored <strong className="text-navy-900">locally on your device only</strong>, using Android&apos;s standard local storage (SharedPreferences and/or local databases).
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                This data persists on your device until:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-600 mb-4">
                <li>You manually delete individual rules or settings within the App</li>
                <li>You clear the App&apos;s data through your device&apos;s Settings</li>
                <li>You uninstall the App from your device</li>
              </ul>
              <p className="text-gray-600 leading-relaxed">
                Since no data is transmitted to external servers, there is no remote data to manage. All your data remains entirely under your control on your device.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-xl font-semibold text-navy-900 mb-4">
                5. Data Security
              </h2>
              <p className="text-gray-600 leading-relaxed">
                Because the App processes all data locally and does not transmit any information to external servers, the security of your data depends on the security of your device. We recommend that you protect your device with a screen lock (PIN, pattern, fingerprint, or face recognition) and keep your Android operating system up to date to benefit from the latest security patches. We do not have access to your device or the data stored by the App.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-xl font-semibold text-navy-900 mb-4">
                6. Third-Party Services
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                The App <strong className="text-navy-900">does not currently integrate with any third-party services</strong>, analytics platforms, advertising networks, or tracking tools. The App does not contain any third-party SDKs that collect user data.
              </p>
              <p className="text-gray-600 leading-relaxed">
                The App is distributed through the Google Play Store. Your interaction with the Google Play Store is governed by Google&apos;s own Privacy Policy and Terms of Service. We do not have access to any information Google may collect through the Play Store (such as download statistics or crash reports), except for aggregated, anonymized data that Google may provide through the Play Console.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-xl font-semibold text-navy-900 mb-4">
                7. Children&apos;s Privacy
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                The App is not directed at children under the age of 13. We do not knowingly collect personal information from children under 13. Since the App does not collect any personal information from any user, there is no risk of inadvertently collecting children&apos;s data.
              </p>
              <p className="text-gray-600 leading-relaxed">
                If you are a parent or guardian and believe that your child has provided personal information through the App (which should not be possible given the App&apos;s design), please contact us at{' '}
                <a href="mailto:contactus@quikzyn.com" className="text-primary-600 hover:underline">
                  contactus@quikzyn.com
                </a>{' '}
                and we will take appropriate action.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-xl font-semibold text-navy-900 mb-4">
                8. Your Rights
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Since the App does not collect or store any personal data on external servers, traditional data subject rights (such as access, rectification, portability, and erasure requests) are effectively managed entirely by you on your device. You have full control over your data at all times:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-600 mb-4">
                <li><strong className="text-navy-900">Access & Review:</strong> All your rules, keywords, and settings are visible and editable within the App at any time</li>
                <li><strong className="text-navy-900">Modification:</strong> You can modify any alarm rule, keyword, schedule, or setting at any time within the App</li>
                <li><strong className="text-navy-900">Deletion:</strong> You can delete individual rules within the App, clear all App data through your device Settings, or uninstall the App entirely to remove all stored data</li>
                <li><strong className="text-navy-900">Revoke Permissions:</strong> You can revoke any of the App&apos;s permissions at any time through your device&apos;s Settings app</li>
              </ul>
              <p className="text-gray-600 leading-relaxed">
                If you have any questions about your data rights or need assistance managing your data, please contact us at{' '}
                <a href="mailto:contactus@quikzyn.com" className="text-primary-600 hover:underline">
                  contactus@quikzyn.com
                </a>.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-xl font-semibold text-navy-900 mb-4">
                9. International Users
              </h2>
              <p className="text-gray-600 leading-relaxed">
                The App is available for download globally through the Google Play Store. Since the App does not collect or transmit any data to external servers, there are no cross-border data transfers to be concerned about. All data processing occurs locally on your device, subject to the laws and regulations of your jurisdiction.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-xl font-semibold text-navy-900 mb-4">
                10. Changes to This Privacy Policy
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                We may update this Privacy Policy from time to time to reflect changes in the App&apos;s functionality, legal requirements, or our practices. When we make changes, we will:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-600 mb-4">
                <li>Update the &quot;Last Updated&quot; date at the top of this Privacy Policy</li>
                <li>Post the updated Privacy Policy on our website</li>
                <li>For material changes, we may notify you through the App or the Google Play Store listing</li>
              </ul>
              <p className="text-gray-600 leading-relaxed">
                We encourage you to review this Privacy Policy periodically for any changes. Your continued use of the App after the posting of changes constitutes your acceptance of such changes.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-xl font-semibold text-navy-900 mb-4">
                11. Compliance
              </h2>
              <p className="text-gray-600 leading-relaxed">
                This Privacy Policy is designed to comply with applicable data protection regulations, including the Google Play Developer Program Policies. Since the App does not collect personal data, many data protection requirements (such as GDPR data processing requirements) are inherently satisfied by the App&apos;s privacy-by-design architecture.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-xl font-semibold text-navy-900 mb-4">
                12. Contact Us
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                If you have any questions, concerns, or requests regarding this Privacy Policy or the App&apos;s privacy practices, please contact us:
              </p>
              <ul className="list-none space-y-2 text-gray-600">
                <li>
                  <strong className="text-navy-900">Company:</strong> Quikzyn
                </li>
                <li>
                  <strong className="text-navy-900">Operated by:</strong> Tawhid Islam
                </li>
                <li>
                  <strong className="text-navy-900">General Inquiries:</strong>{' '}
                  <a
                    href="mailto:contactus@quikzyn.com"
                    className="text-primary-600 hover:underline"
                  >
                    contactus@quikzyn.com
                  </a>
                </li>
                <li>
                  <strong className="text-navy-900">App Support:</strong>{' '}
                  <a
                    href="mailto:messagealarm@quikzyn.com"
                    className="text-primary-600 hover:underline"
                  >
                    messagealarm@quikzyn.com
                  </a>
                </li>
              </ul>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
