import React from 'react';
import SEO from '../components/SEO';
import Breadcrumbs from '../components/Breadcrumbs';
import { breadcrumbSchema } from '../lib/jsonld';

const Terms = () => {
  const breadcrumbItems = [
    { name: 'Home', url: '/' },
    { name: 'Terms of Service', url: '/terms' }
  ];

  const jsonLd = breadcrumbSchema(breadcrumbItems);

  return (
    <>
      <SEO
        title="Terms of Service | TREND MAKERS 360"
        description="Terms and conditions for using TREND MAKERS 360 services and website."
        path="/terms"
        jsonLd={jsonLd}
      />

      <Breadcrumbs items={breadcrumbItems} />

      <div className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h1 className="text-4xl font-bold text-brand-text mb-4">Terms of Service</h1>
              <p className="text-gray-600">Last updated: January 15, 2024</p>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-8 prose prose-lg max-w-none">
              <section className="mb-8">
                <h2 className="text-2xl font-bold text-brand-text mb-4">1. Acceptance of Terms</h2>
                <p className="text-gray-700">
                  These Terms of Service ("Terms") govern your access to and use of the website and services provided by TREND MAKERS 360, a digital marketing agency based in Chennai, Tamil Nadu, India ("we," "our," or "us").
                </p>
                <p className="text-gray-700">
                  By accessing or using our website <strong>www.trendmakers360.in</strong> or engaging our services, you agree to be bound by these Terms. If you do not agree to these Terms, please do not use our services.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-brand-text mb-4">2. Description of Services</h2>
                <p className="text-gray-700 mb-4">
                  TREND MAKERS 360 provides digital marketing services specifically for educational institutions, including:
                </p>
                <ul className="list-disc pl-6 text-gray-700 mb-4">
                  <li>Social media management and content creation</li>
                  <li>Search engine optimization (SEO)</li>
                  <li>Pay-per-click (PPC) advertising management</li>
                  <li>Creative design and branding services</li>
                  <li>Website development and maintenance</li>
                  <li>Digital marketing strategy and consulting</li>
                </ul>
                <p className="text-gray-700">
                  We reserve the right to modify, suspend, or discontinue any aspect of our services at any time with reasonable notice to our clients.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-brand-text mb-4">3. Service Agreements</h2>
                <p className="text-gray-700 mb-4">
                  Specific terms for our services will be outlined in separate service agreements or proposals. These Terms serve as the general framework, while service agreements contain project-specific details including:
                </p>
                <ul className="list-disc pl-6 text-gray-700 mb-4">
                  <li>Scope of work and deliverables</li>
                  <li>Timeline and milestones</li>
                  <li>Pricing and payment terms</li>
                  <li>Client responsibilities and requirements</li>
                </ul>
                <p className="text-gray-700">
                  In case of conflict between these Terms and a service agreement, the service agreement shall take precedence for that specific project.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-brand-text mb-4">4. Client Responsibilities</h2>
                <p className="text-gray-700 mb-4">
                  To ensure successful service delivery, clients agree to:
                </p>
                <ul className="list-disc pl-6 text-gray-700 mb-4">
                  <li>Provide accurate and complete information required for services</li>
                  <li>Grant necessary access to accounts, platforms, and systems</li>
                  <li>Respond to requests for feedback and approvals in a timely manner</li>
                  <li>Make payments according to agreed terms</li>
                  <li>Comply with all applicable laws and platform policies</li>
                  <li>Provide content and materials as specified in service agreements</li>
                </ul>
                <p className="text-gray-700">
                  Delays in client responsibilities may impact project timelines and deliverables.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-brand-text mb-4">5. Payment Terms</h2>
                <p className="text-gray-700 mb-4">
                  Unless otherwise specified in a service agreement:
                </p>
                <ul className="list-disc pl-6 text-gray-700 mb-4">
                  <li>Monthly retainer fees are due on the 1st of each month</li>
                  <li>Project-based payments follow the schedule outlined in the service agreement</li>
                  <li>Invoices are payable within 30 days of receipt</li>
                  <li>Late payments may incur a 2% monthly service charge</li>
                  <li>Services may be suspended for accounts more than 60 days overdue</li>
                </ul>
                <p className="text-gray-700">
                  All fees are quoted and payable in Indian Rupees (INR) unless otherwise agreed. Clients are responsible for any applicable taxes.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-brand-text mb-4">6. Intellectual Property Rights</h2>
                
                <h3 className="text-xl font-semibold text-brand-text mb-3">6.1 Client Content</h3>
                <p className="text-gray-700 mb-4">
                  Clients retain ownership of all content, trademarks, and intellectual property provided to us. By engaging our services, clients grant us a limited license to use such materials for the purposes of delivering agreed services.
                </p>

                <h3 className="text-xl font-semibold text-brand-text mb-3">6.2 Created Materials</h3>
                <p className="text-gray-700 mb-4">
                  Upon full payment, clients will own the rights to custom creative materials developed specifically for them, including:
                </p>
                <ul className="list-disc pl-6 text-gray-700 mb-4">
                  <li>Custom graphics and designs</li>
                  <li>Written content and copy</li>
                  <li>Custom website code (excluding third-party components)</li>
                </ul>

                <h3 className="text-xl font-semibold text-brand-text mb-3">6.3 Our Property</h3>
                <p className="text-gray-700">
                  We retain ownership of our methodologies, processes, templates, and any pre-existing intellectual property used in delivering services.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-brand-text mb-4">7. Confidentiality</h2>
                <p className="text-gray-700 mb-4">
                  We understand the sensitive nature of information shared by educational institutions. We commit to:
                </p>
                <ul className="list-disc pl-6 text-gray-700 mb-4">
                  <li>Maintain confidentiality of all client information</li>
                  <li>Use client information solely for providing agreed services</li>
                  <li>Implement reasonable security measures to protect data</li>
                  <li>Not disclose client strategies or results without permission</li>
                </ul>
                <p className="text-gray-700">
                  This obligation continues beyond the termination of our service relationship.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-brand-text mb-4">8. Performance and Results</h2>
                <p className="text-gray-700 mb-4">
                  While we strive for excellence in all our services:
                </p>
                <ul className="list-disc pl-6 text-gray-700 mb-4">
                  <li>We cannot guarantee specific results or outcomes from marketing activities</li>
                  <li>Digital marketing results depend on numerous factors beyond our control</li>
                  <li>We will provide regular reporting and recommendations based on data</li>
                  <li>Performance benchmarks will be established where possible and appropriate</li>
                </ul>
                <p className="text-gray-700">
                  Our obligation is to perform services professionally and in accordance with industry standards.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-brand-text mb-4">9. Termination</h2>
                <p className="text-gray-700 mb-4">
                  Either party may terminate ongoing services with 30 days' written notice. Upon termination:
                </p>
                <ul className="list-disc pl-6 text-gray-700 mb-4">
                  <li>All outstanding invoices become immediately due</li>
                  <li>We will provide reasonable transition assistance</li>
                  <li>Access credentials and materials will be transferred or returned</li>
                  <li>Confidentiality obligations remain in effect</li>
                </ul>
                <p className="text-gray-700">
                  Project-based work will be completed according to the service agreement unless terminated for cause.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-brand-text mb-4">10. Limitation of Liability</h2>
                <p className="text-gray-700 mb-4">
                  To the maximum extent permitted by law:
                </p>
                <ul className="list-disc pl-6 text-gray-700 mb-4">
                  <li>Our liability for any claim related to our services is limited to the fees paid for those specific services</li>
                  <li>We are not liable for indirect, consequential, or punitive damages</li>
                  <li>We are not responsible for third-party platform changes, policies, or technical issues</li>
                  <li>Clients are responsible for backing up their own data and content</li>
                </ul>
                <p className="text-gray-700">
                  This limitation applies regardless of the legal theory on which the claim is based.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-brand-text mb-4">11. Indemnification</h2>
                <p className="text-gray-700">
                  Clients agree to indemnify and hold us harmless from any claims arising from: (a) client's use of our services, (b) client's violation of these Terms, (c) client's violation of any third-party rights, or (d) content provided by the client.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-brand-text mb-4">12. Governing Law and Dispute Resolution</h2>
                <p className="text-gray-700 mb-4">
                  These Terms are governed by the laws of India and the state of Tamil Nadu. Any disputes will be resolved through:
                </p>
                <ol className="list-decimal pl-6 text-gray-700 mb-4">
                  <li>Good faith negotiation between the parties</li>
                  <li>Mediation if negotiation fails</li>
                  <li>Arbitration under Indian Arbitration and Conciliation Act, 2015</li>
                  <li>Courts in Chennai, Tamil Nadu for any legal proceedings</li>
                </ol>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-brand-text mb-4">13. Changes to Terms</h2>
                <p className="text-gray-700">
                  We may update these Terms from time to time. Changes will be posted on our website with an updated effective date. Continued use of our services after changes constitutes acceptance of the new Terms.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-brand-text mb-4">14. Contact Information</h2>
                <p className="text-gray-700 mb-4">
                  For questions about these Terms, please contact us:
                </p>
                <div className="bg-gray-50 rounded-lg p-6">
                  <p className="text-gray-700 mb-2"><strong>TREND MAKERS 360</strong></p>
                  <p className="text-gray-700 mb-2">Email: <a href="mailto:legal@trendmakers360.in" className="text-brand-blue hover:text-brand-cyan">legal@trendmakers360.in</a></p>
                  <p className="text-gray-700 mb-2">Phone: <a href="tel:+91XXXXXXXXXX" className="text-brand-blue hover:text-brand-cyan">+91-XXXXXXXXXX</a></p>
                  <p className="text-gray-700">Address: 123 Anna Salai, Chennai, Tamil Nadu 600002, India</p>
                </div>
              </section>

              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
                <p className="text-yellow-800 text-sm">
                  <strong>Important:</strong> These Terms of Service constitute a legal agreement. Please read them carefully and contact us if you have any questions before engaging our services.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Terms;
