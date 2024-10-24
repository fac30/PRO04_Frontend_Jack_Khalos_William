import React from 'react';

const PrivacyPolicy: React.FC = () => {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4">Privacy Policy</h1>
      <p><strong>Effective Date: 24/10.2024</strong></p>

      <p>
        This Privacy Policy explains how ZUBI ("we", "our", or "us") collects, uses, discloses, and protects your information when you use our website and services ("Services"). By accessing or using our Services, you agree to the terms of this Privacy Policy.
      </p>

      <h2 className="text-2xl font-bold mt-6 mb-2">1. Information We Collect</h2>
      <p>We may collect the following types of information when you use our Services:</p>

      <h3 className="text-xl font-bold mt-4 mb-1">1.1 Personal Information</h3>
      <ul className="list-disc ml-6">
        <li><strong>Contact Information:</strong> Name, email address, phone number, and mailing address.</li>
        <li><strong>Account Information:</strong> Username, password, and profile information.</li>
        <li><strong>Payment Information:</strong> Credit card details and billing address (processed through a third-party payment processor).</li>
      </ul>

      <h3 className="text-xl font-bold mt-4 mb-1">1.2 Non-Personal Information</h3>
      <ul className="list-disc ml-6">
        <li><strong>Usage Data:</strong> Information about your interactions with our Services, including the pages you visit, the time and date of your visits, and the time spent on each page.</li>
        <li><strong>Device Information:</strong> Information about the device you use to access our Services, including the IP address, browser type, operating system, and device identifiers.</li>
      </ul>

      <h2 className="text-2xl font-bold mt-6 mb-2">2. How We Use Your Information</h2>
      <p>We use the information we collect for various purposes, including to:</p>
      <ul className="list-disc ml-6">
        <li>Provide, maintain, and improve our Services.</li>
        <li>Create and manage your account.</li>
        <li>Process transactions and send you transaction-related communications.</li>
        <li>Personalize your experience and deliver relevant content.</li>
        <li>Communicate with you, including sending updates, newsletters, and promotional materials.</li>
        <li>Monitor and analyze usage and trends to improve user experience.</li>
        <li>Comply with legal obligations and enforce our terms and policies.</li>
      </ul>

      <h2 className="text-2xl font-bold mt-6 mb-2">3. Sharing Your Information</h2>
      <p>We do not sell or rent your personal information to third parties. We may share your information in the following circumstances:</p>
      <ul className="list-disc ml-6">
        <li><strong>With Service Providers:</strong> We may share your information with third-party vendors and service providers to assist with our business operations.</li>
        <li><strong>For Legal Reasons:</strong> We may disclose your information if required to do so by law or in response to valid requests by public authorities.</li>
        <li><strong>In Business Transfers:</strong> If we are involved in a merger, acquisition, or asset sale, your information may be transferred as part of that transaction.</li>
      </ul>

      <h2 className="text-2xl font-bold mt-6 mb-2">4. Security of Your Information</h2>
      <p>
        We take reasonable measures to protect your information from loss, theft, misuse, and unauthorized access. However, no method of transmission over the Internet or method of electronic storage is 100% secure. Therefore, while we strive to protect your personal information, we cannot guarantee its absolute security.
      </p>

      <h2 className="text-2xl font-bold mt-6 mb-2">5. Your Rights</h2>
      <p>You have the right to:</p>
      <ul className="list-disc ml-6">
        <li>Access, update, or delete your personal information.</li>
        <li>Withdraw your consent to the processing of your personal information.</li>
        <li>Object to the processing of your personal information.</li>
        <li>Request a copy of your personal information in a structured, commonly used format.</li>
      </ul>
      <p>To exercise these rights, please contact us using the information below.</p>

      <h2 className="text-2xl font-bold mt-6 mb-2">6. Third-Party Links</h2>
      <p>
        Our Services may contain links to third-party websites. We are not responsible for the privacy practices or content of these websites. We encourage you to read the privacy policies of any third-party sites you visit.
      </p>

      <h2 className="text-2xl font-bold mt-6 mb-2">7. Changes to This Privacy Policy</h2>
      <p>
        We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the effective date. Your continued use of our Services after any changes constitutes your acceptance of the new Privacy Policy.
      </p>

      <h2 className="text-2xl font-bold mt-6 mb-2">8. Contact Us</h2>
      <p>If you have any questions or concerns about this Privacy Policy, please contact us at:</p>
      <p>
        <strong>[Your Company Name]</strong><br />
        <strong>Email:</strong> [your-email@example.com]<br />
        <strong>Address:</strong> [Your Company Address]<br />
        <strong>Phone:</strong> [Your Company Phone Number]
      </p>
    </div>
  );
};

export default PrivacyPolicy;