import React from 'react';
import SEO from '../components/SEO';
import Breadcrumbs from '../components/Breadcrumbs';
import { breadcrumbSchema } from '../lib/jsonld';

const Privacy = () => {
  const breadcrumbItems = [
    { name: 'Home', url: '/' },
    { name: 'Privacy Policy', url: '/privacy' }
  ];

  const jsonLd = breadcrumbSchema(breadcrumbItems);

  return (
    <>
      <SEO
        title="Privacy Policy | TREND MAKERS 360"
        description="Learn how TREND MAKERS 360 collects, uses, and protects your personal information."
        path="/privacy"
        jsonLd={jsonLd}
      />

      <Breadcrumbs items={breadcrumbItems} />

      <div className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h1 className="text-4xl font-bold text-brand-text mb-4">Privacy Policy</h1>
              <p className="text-gray-600">Last updated: January 15, 2024</p>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-8 prose prose-lg max-w-none">
              <section className="mb-8">
                <h2 className="text-2xl font-bold text-brand-text mb-4">Introduction</h2>
                <p className="text-gray-700">
                  TREND MAKERS 360 ("we," "our," or "us") is committed to protecting and respecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website <strong>www.trendmakers360.in</strong> or use our services.
                </p>
                <p className="text-gray-700">
                  Please read this Privacy Policy carefully. If you do not agree with the terms of this Privacy Policy, please do not access or use our services.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-brand-text mb-4">Information We Collect</h2>
                
                <h3 className="text-xl font-semibold text-brand-text mb-3">Personal Information</h3>
                <p className="text-gray-700 mb-4">
                  We may collect personal information that you provide directly to us, including:
                </p>
                <ul className="list-disc pl-6 text-gray-700 mb-4">
                  <li>Name and contact information (email address, phone number, mailing address)</li>
                  <li>College or institution name and your role</li>
                  <li>Professional information and job title</li>
                  <li>Communication preferences</li>
                  <li>Any other information you choose to provide in forms or communications</li>
                </ul>

                <h3 className="text-xl font-semibold text-brand-text mb-3">Automatically Collected Information</h3>
                <p className="text-gray-700 mb-4">
                  When you visit our website, we may automatically collect certain information:
                </p>
                <ul className="list-disc pl-6 text-gray-700 mb-4">
                  <li>IP address and location data</li>
                  <li>Browser type and version</li>
                  <li>Device information</li>
                  <li>Pages visited and time spent on our website</li>
                  <li>Referring website information</li>
                  <li>Cookies and similar tracking technologies</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-brand-text mb-4">How We Use Your Information</h2>
                <p className="text-gray-700 mb-4">
                  We use the information we collect for various purposes, including:
                </p>
                <ul className="list-disc pl-6 text-gray-700 mb-4">
                  <li>Providing and maintaining our services</li>
                  <li>Responding to your inquiries and providing customer support</li>
                  <li>Sending you marketing communications (with your consent)</li>
                  <li>Improving our website and services</li>
                  <li>Analyzing usage patterns and trends</li>
                  <li>Protecting against fraud and ensuring security</li>
                  <li>Complying with legal obligations</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-brand-text mb-4">Information Sharing and Disclosure</h2>
                <p className="text-gray-700 mb-4">
                  We do not sell, trade, or otherwise transfer your personal information to third parties except in the following circumstances:
                </p>
                
                <h3 className="text-xl font-semibold text-brand-text mb-3">Service Providers</h3>
                <p className="text-gray-700 mb-4">
                  We may share your information with trusted third-party service providers who assist us in operating our website and providing our services, including:
                </p>
                <ul className="list-disc pl-6 text-gray-700 mb-4">
                  <li>Web hosting and cloud storage providers</li>
                  <li>Email marketing platforms</li>
                  <li>Analytics services (Google Analytics, etc.)</li>
                  <li>Customer relationship management (CRM) systems</li>
                </ul>

                <h3 className="text-xl font-semibold text-brand-text mb-3">Legal Requirements</h3>
                <p className="text-gray-700 mb-4">
                  We may disclose your information if required by law or in response to valid requests by public authorities.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-brand-text mb-4">Cookies and Tracking Technologies</h2>
                <p className="text-gray-700 mb-4">
                  We use cookies and similar tracking technologies to enhance your experience on our website. These technologies help us:
                </p>
                <ul className="list-disc pl-6 text-gray-700 mb-4">
                  <li>Remember your preferences and settings</li>
                  <li>Understand how you use our website</li>
                  <li>Improve our services and user experience</li>
                  <li>Provide personalized content and advertisements</li>
                </ul>
                <p className="text-gray-700">
                  You can control cookies through your browser settings. However, disabling cookies may affect the functionality of our website.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-brand-text mb-4">Data Security</h2>
                <p className="text-gray-700 mb-4">
                  We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. These measures include:
                </p>
                <ul className="list-disc pl-6 text-gray-700 mb-4">
                  <li>SSL/TLS encryption for data transmission</li>
                  <li>Secure data storage and processing</li>
                  <li>Regular security assessments and updates</li>
                  <li>Access controls and employee training</li>
                </ul>
                <p className="text-gray-700">
                  However, no method of transmission over the internet or electronic storage is 100% secure. While we strive to protect your information, we cannot guarantee its absolute security.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-brand-text mb-4">Your Rights and Choices</h2>
                <p className="text-gray-700 mb-4">
                  Depending on your location, you may have certain rights regarding your personal information:
                </p>
                <ul className="list-disc pl-6 text-gray-700 mb-4">
                  <li><strong>Access:</strong> Request a copy of the personal information we hold about you</li>
                  <li><strong>Correction:</strong> Request correction of inaccurate or incomplete information</li>
                  <li><strong>Deletion:</strong> Request deletion of your personal information (subject to legal requirements)</li>
                  <li><strong>Portability:</strong> Request transfer of your information to another service provider</li>
                  <li><strong>Objection:</strong> Object to certain processing of your information</li>
                  <li><strong>Marketing opt-out:</strong> Unsubscribe from marketing communications at any time</li>
                </ul>
                <p className="text-gray-700">
                  To exercise these rights, please contact us using the information provided in the "Contact Us" section.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-brand-text mb-4">Data Retention</h2>
                <p className="text-gray-700">
                  We retain your personal information only for as long as necessary to fulfill the purposes for which it was collected, including legal, accounting, or reporting requirements. When personal information is no longer needed, we will securely delete or anonymize it.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-brand-text mb-4">International Data Transfers</h2>
                <p className="text-gray-700">
                  Your information may be transferred to and processed in countries other than your country of residence. We ensure that such transfers comply with applicable data protection laws and that appropriate safeguards are in place.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-brand-text mb-4">Children's Privacy</h2>
                <p className="text-gray-700">
                  Our services are not directed to children under the age of 16. We do not knowingly collect personal information from children under 16. If we become aware that we have collected such information, we will take steps to delete it promptly.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-brand-text mb-4">Changes to This Privacy Policy</h2>
                <p className="text-gray-700">
                  We may update this Privacy Policy from time to time. When we make changes, we will update the "Last updated" date at the top of this policy and notify you of any material changes through our website or by email. We encourage you to review this Privacy Policy periodically.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-brand-text mb-4">Contact Us</h2>
                <p className="text-gray-700 mb-4">
                  If you have any questions about this Privacy Policy or our privacy practices, please contact us:
                </p>
                <div className="bg-gray-50 rounded-lg p-6">
                  <p className="text-gray-700 mb-2"><strong>TREND MAKERS 360</strong></p>
                  <p className="text-gray-700 mb-2">Email: <a href="mailto:privacy@trendmakers360.in" className="text-brand-blue hover:text-brand-cyan">privacy@trendmakers360.in</a></p>
                  <p className="text-gray-700 mb-2">Phone: <a href="tel:+91XXXXXXXXXX" className="text-brand-blue hover:text-brand-cyan">+91-XXXXXXXXXX</a></p>
                  <p className="text-gray-700">Address: 123 Anna Salai, Chennai, Tamil Nadu 600002, India</p>
                </div>
              </section>

              <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                <p className="text-blue-800 text-sm">
                  <strong>Note:</strong> This Privacy Policy is designed to comply with Indian data protection laws and international standards. For specific legal requirements in your jurisdiction, please consult with legal professionals.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Privacy;
