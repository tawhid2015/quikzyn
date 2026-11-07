import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms of Service — Message Alarm | Quikzyn',
  description:
    'Terms of Service for Message Alarm – Notification Alerts by Quikzyn.',
};

export default function TermsOfServicePage() {
  return (
    <div className="pt-32 pb-20 sm:pt-40 sm:pb-28">
      <div className="section-container">
        <div className="mx-auto max-w-3xl">
          <div className="mb-12">
            <p className="text-sm font-semibold uppercase tracking-widest text-primary-600">
              Legal
            </p>
            <h1 className="mt-3 text-3xl font-bold tracking-tight text-navy-900 sm:text-4xl">
              Terms of Service
            </h1>
            <p className="mt-4 text-base text-gray-500">
              Last Updated: November 7, 2026
            </p>
          </div>

          <div className="prose prose-gray max-w-none prose-headings:font-semibold prose-headings:text-navy-900 prose-p:text-gray-600 prose-p:leading-relaxed prose-li:text-gray-600 prose-a:text-primary-600 prose-a:no-underline hover:prose-a:underline prose-strong:text-navy-900">
            <section className="mb-10">
              <h2 className="text-xl font-semibold text-navy-900 mb-4">
                1. Acceptance of Terms
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Welcome to Message Alarm – Notification Alerts (&quot;the App&quot;), developed and operated by Quikzyn, operated by Tawhid Islam (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;). By downloading, installing, accessing, or using the App, you (&quot;User,&quot; &quot;you,&quot; or &quot;your&quot;) agree to be bound by these Terms of Service (&quot;Terms&quot;). If you do not agree to these Terms, please do not use the App.
              </p>
              <p className="text-gray-600 leading-relaxed">
                These Terms constitute a legally binding agreement between you and Quikzyn regarding your use of the App. We reserve the right to modify these Terms at any time, and such modifications will be effective immediately upon posting. Your continued use of the App after any changes indicates your acceptance of the updated Terms.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-xl font-semibold text-navy-900 mb-4">
                2. Description of Service
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Message Alarm – Notification Alerts is a mobile application for Android devices that allows users to create custom alarm rules based on notification content. The App monitors incoming notifications from user-selected applications and triggers an audible alarm when specific keywords or phrases are detected in the notification text.
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                Key features of the App include:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-600 mb-4">
                <li>Creating alarm rules with custom keywords for specific applications</li>
                <li>Customizable alarm sounds, including system tones and user-provided audio files</li>
                <li>Ability to override Do Not Disturb and Silent mode settings</li>
                <li>Scheduling alarm activity based on specific hours and days</li>
                <li>On-device notification processing with no data transmission to external servers</li>
              </ul>
              <p className="text-gray-600 leading-relaxed">
                The App is provided &quot;as is&quot; and &quot;as available.&quot; We do not guarantee that the App will function without interruption, errors, or defects, nor do we guarantee that the App will meet your specific requirements or expectations.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-xl font-semibold text-navy-900 mb-4">
                3. Eligibility
              </h2>
              <p className="text-gray-600 leading-relaxed">
                You must be at least 13 years of age to use this App. If you are under the age of 18 (or the age of majority in your jurisdiction), you must have permission from a parent or legal guardian to use the App. By using the App, you represent and warrant that you meet these eligibility requirements. We do not knowingly collect or solicit personal information from children under 13. If we learn that we have collected personal information from a child under 13, we will take steps to delete such information promptly.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-xl font-semibold text-navy-900 mb-4">
                4. User Obligations
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                By using the App, you agree to:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-600 mb-4">
                <li>Use the App only for lawful purposes and in accordance with these Terms</li>
                <li>Not use the App in any way that could damage, disable, overburden, or impair the App or interfere with any other party&apos;s use of the App</li>
                <li>Not attempt to gain unauthorized access to any portion of the App, other accounts, computer systems, or networks connected to the App</li>
                <li>Not use the App to monitor notifications of other users&apos; devices without their explicit consent</li>
                <li>Not reverse-engineer, decompile, disassemble, or otherwise attempt to derive the source code of the App</li>
                <li>Not use the App for any purpose that is unlawful, harmful, threatening, abusive, harassing, defamatory, or otherwise objectionable</li>
                <li>Grant the necessary device permissions for the App to function properly, including Notification Access, Display Over Other Apps, and related system permissions</li>
                <li>Comply with all applicable local, state, national, and international laws and regulations</li>
              </ul>
              <p className="text-gray-600 leading-relaxed">
                You are solely responsible for your use of the App and for any rules, keywords, and configurations you create. We are not liable for any consequences arising from your alarm configurations, including but not limited to missed or unintended alarms.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-xl font-semibold text-navy-900 mb-4">
                5. Permissions and Device Access
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                The App requires certain device permissions to function properly. By using the App, you acknowledge and consent to the following permissions:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-600 mb-4">
                <li><strong className="text-navy-900">Notification Access:</strong> Required to read incoming notifications from selected applications for keyword matching</li>
                <li><strong className="text-navy-900">Display Over Other Apps:</strong> Required to show alarm overlays on top of other applications</li>
                <li><strong className="text-navy-900">Battery Optimization Exemption:</strong> Required to ensure the App runs reliably in the background without being terminated by the system</li>
                <li><strong className="text-navy-900">Do Not Disturb Override:</strong> Required to play alarm sounds even when the device is in DND or Silent mode</li>
                <li><strong className="text-navy-900">Vibrate:</strong> Required to provide haptic feedback during alarms</li>
                <li><strong className="text-navy-900">Wake Lock:</strong> Required to keep the device awake while an alarm is active</li>
                <li><strong className="text-navy-900">Boot Completed:</strong> Required to restart the notification listener service after a device reboot</li>
                <li><strong className="text-navy-900">Internet:</strong> Reserved for a future optional webhook feature; not currently used for data transmission</li>
              </ul>
              <p className="text-gray-600 leading-relaxed">
                You may revoke any of these permissions at any time through your device settings; however, doing so may impair the functionality of the App.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-xl font-semibold text-navy-900 mb-4">
                6. Intellectual Property
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                The App, including all content, features, and functionality (including but not limited to the design, layout, interface, text, graphics, logos, icons, images, audio clips, software, and code) is owned by Quikzyn and is protected by international copyright, trademark, patent, trade secret, and other intellectual property laws.
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                We grant you a limited, non-exclusive, non-transferable, revocable license to use the App for your personal, non-commercial use, subject to these Terms. This license does not include:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-600 mb-4">
                <li>The right to modify, copy, distribute, transmit, display, perform, reproduce, publish, license, create derivative works from, transfer, or sell any information or content obtained from the App</li>
                <li>The right to use the App for any commercial purpose without our prior written consent</li>
                <li>The right to use data mining, robots, or similar data gathering and extraction tools on the App</li>
              </ul>
              <p className="text-gray-600 leading-relaxed">
                The &quot;Quikzyn&quot; name, the &quot;Message Alarm&quot; name, and all related logos, product and service names, designs, and slogans are trademarks of Quikzyn. You may not use such marks without our prior written permission.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-xl font-semibold text-navy-900 mb-4">
                7. Disclaimer of Warranties
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                THE APP IS PROVIDED ON AN &quot;AS IS&quot; AND &quot;AS AVAILABLE&quot; BASIS WITHOUT ANY WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT.
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                We do not warrant that:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-600 mb-4">
                <li>The App will function uninterrupted, securely, or be available at any particular time or location</li>
                <li>Any errors or defects will be corrected</li>
                <li>The App will meet your specific requirements or expectations</li>
                <li>All notifications will be correctly processed and matched against your defined keywords</li>
                <li>Alarms will always sound as configured, especially considering device-specific battery optimization behaviors, operating system restrictions, and manufacturer customizations</li>
              </ul>
              <p className="text-gray-600 leading-relaxed">
                Different Android device manufacturers may impose varying levels of background process restrictions that could affect the App&apos;s ability to monitor notifications reliably. We provide guidance within the App to help mitigate these issues, but we cannot guarantee compatibility with all devices and configurations.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-xl font-semibold text-navy-900 mb-4">
                8. Limitation of Liability
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, IN NO EVENT SHALL QUIKZYN, ITS OFFICERS, DIRECTORS, EMPLOYEES, AGENTS, OR AFFILIATES BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, INCLUDING WITHOUT LIMITATION, LOSS OF PROFITS, DATA, USE, GOODWILL, OR OTHER INTANGIBLE LOSSES, RESULTING FROM:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-600 mb-4">
                <li>Your access to or use of (or inability to access or use) the App</li>
                <li>Any conduct or content of any third party in connection with the App</li>
                <li>Any missed notifications, failed alarms, or unintended alarm activations</li>
                <li>Unauthorized access, use, or alteration of your device configurations</li>
                <li>Any financial, physical, emotional, or other damages arising from reliance on the App&apos;s alarm functionality</li>
              </ul>
              <p className="text-gray-600 leading-relaxed">
                IN NO EVENT SHALL OUR TOTAL LIABILITY TO YOU FOR ALL CLAIMS ARISING FROM OR RELATED TO THE APP EXCEED THE AMOUNT YOU PAID, IF ANY, FOR ACCESSING THE APP DURING THE TWELVE (12) MONTHS PRECEDING THE CLAIM.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-xl font-semibold text-navy-900 mb-4">
                9. Indemnification
              </h2>
              <p className="text-gray-600 leading-relaxed">
                You agree to defend, indemnify, and hold harmless Quikzyn, its officers, directors, employees, agents, and affiliates from and against any and all claims, damages, obligations, losses, liabilities, costs, and expenses (including but not limited to attorney&apos;s fees) arising from: (a) your use of the App; (b) your violation of these Terms; (c) your violation of any third-party rights, including without limitation any intellectual property right, publicity, confidentiality, property, or privacy right; or (d) any claim that your use of the App caused damage to a third party.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-xl font-semibold text-navy-900 mb-4">
                10. Termination
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                We may terminate or suspend your access to the App immediately, without prior notice or liability, for any reason, including without limitation if you breach these Terms. Upon termination, your right to use the App will immediately cease.
              </p>
              <p className="text-gray-600 leading-relaxed">
                You may terminate your use of the App at any time by uninstalling the App from your device. Upon uninstallation, all locally stored data, including your alarm rules, settings, and preferences, will be permanently deleted from your device.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-xl font-semibold text-navy-900 mb-4">
                11. Third-Party Services
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                The App may contain links to third-party websites, services, or applications that are not owned or controlled by Quikzyn. We have no control over, and assume no responsibility for, the content, privacy policies, or practices of any third-party websites or services. You acknowledge and agree that we shall not be responsible or liable, directly or indirectly, for any damage or loss caused or alleged to be caused by or in connection with the use of or reliance on any such content, goods, or services available on or through any such websites or services.
              </p>
              <p className="text-gray-600 leading-relaxed">
                The App is distributed through the Google Play Store, which is operated by Google LLC. Your use of the Google Play Store is governed by Google&apos;s Terms of Service and Privacy Policy. We are not responsible for any actions or policies of Google LLC.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-xl font-semibold text-navy-900 mb-4">
                12. Changes to Terms
              </h2>
              <p className="text-gray-600 leading-relaxed">
                We reserve the right to modify or replace these Terms at any time at our sole discretion. If a revision is material, we will provide at least 30 days&apos; notice prior to any new terms taking effect by posting the updated Terms on our website and/or within the App. What constitutes a material change will be determined at our sole discretion. By continuing to access or use our App after those revisions become effective, you agree to be bound by the revised terms. If you do not agree to the new terms, you must stop using the App.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-xl font-semibold text-navy-900 mb-4">
                13. Governing Law and Dispute Resolution
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                These Terms shall be governed by and construed in accordance with the laws of Bangladesh, without regard to its conflict of law provisions. Any disputes arising out of or relating to these Terms or the App shall be resolved through good-faith negotiations between the parties.
              </p>
              <p className="text-gray-600 leading-relaxed">
                If a dispute cannot be resolved through negotiation, the parties agree to submit to the exclusive jurisdiction of the courts located in Dhaka, Bangladesh. You waive any objections to the exercise of jurisdiction over you by such courts and to venue in such courts.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-xl font-semibold text-navy-900 mb-4">
                14. Severability
              </h2>
              <p className="text-gray-600 leading-relaxed">
                If any provision of these Terms is held to be invalid, illegal, or unenforceable by a court of competent jurisdiction, such provision shall be modified to the minimum extent necessary to make it valid, legal, and enforceable while preserving the intent of the original provision. If modification is not possible, the provision shall be severed from these Terms, and the remaining provisions shall continue in full force and effect.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-xl font-semibold text-navy-900 mb-4">
                15. Entire Agreement
              </h2>
              <p className="text-gray-600 leading-relaxed">
                These Terms, together with the Privacy Policy, constitute the entire agreement between you and Quikzyn regarding the use of the App and supersede all prior and contemporaneous agreements, proposals, or representations, whether written or oral, concerning the App.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-xl font-semibold text-navy-900 mb-4">
                16. Contact Information
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                If you have any questions, concerns, or feedback about these Terms of Service, please contact us:
              </p>
              <ul className="list-none space-y-2 text-gray-600">
                <li>
                  <strong className="text-navy-900">Company:</strong> Quikzyn
                </li>
                <li>
                  <strong className="text-navy-900">Operated by:</strong> Tawhid Islam
                </li>
                <li>
                  <strong className="text-navy-900">Email:</strong>{' '}
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
