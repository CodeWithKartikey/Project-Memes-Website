import React from 'react';
import Layout from '../../Layout';
import '../PrivacyPolicy-Page/PrivacyPolicy.scss';

const PrivacyPolicy = () => {
  return (
    <>
      <Layout>
        <article className="privacy-policy-page">
          <section>
            <header>
              <h1>Privacy Policy</h1>
            </header>
            <p>Last updated: [Month] [Date], [Year]</p>
            <p>
              At LaughWithModi.in, we are committed to protecting your privacy. 
              This Privacy Policy outlines how we collect, use, and safeguard your personal information when you use our website. 
              Please read this policy carefully to understand our practices regarding your data and how we handle it. 
              By using our website, you consent to the practices described herein.
            </p>
          </section>

          <section>
            <header>
              <h2>1. Information We Collect</h2>
            </header>
            <p>
              1.1. Personal Information: We may collect personal information that you provide directly to us, 
              such as your name, email address, and any other information you voluntarily provide when you subscribe to our newsletter, 
              comment on our content, or interact with our website in any way.
            </p>
            <p>
              1.2. Non-Personal Information: We may also collect non-personal information automatically when you visit our website, 
              such as your IP address, browser type, device information, and other usage data. 
              This information is collected through cookies and similar tracking technologies.
            </p>
          </section>

          <section>
            <header>
              <h2>2. Use of Information</h2>
            </header>
            <p>
              2.1. Personal Information: We may use the personal information we collect to communicate with you, 
              provide you with the information you request, and improve your experience on our website. 
              We will not share your personal information with third parties without your explicit consent, 
              except as required by law or for the purpose of providing the services you have requested.
            </p>
            <p>
              2.2. Non-Personal Information: Non-personal information is used to analyze trends, administer the site,
              track users' movements around the site, and gather demographic information for aggregate use. 
              This data is used to improve the overall user experience and optimize our website's content and layout.
            </p>
          </section>

          <section>
            <header>
              <h2>3. Cookies and Tracking Technologies</h2>
            </header>
            <p>
              We use cookies and similar tracking technologies to collect information about your browsing behavior on our website. 
              Cookies are small text files stored on your device, enabling us to remember your preferences and improve your experience. 
              You can control cookies through your browser settings, but please note that disabling cookies may limit some functionalities of our website.
            </p>
          </section>

          <section>
            <header>
              <h2>4. Third-Party Links</h2>
            </header>
            <p>
              Our website may contain links to third-party websites. 
              We do not control or endorse the content or practices of these external websites. 
              This Privacy Policy applies solely to information collected by LaughWithModi.in. 
              We encourage you to review the privacy policies of any third-party sites you visit.
            </p>
          </section>

          <section>
            <header>
              <h2>5. Data Security</h2>
            </header>
            <p>
              We take reasonable measures to protect your personal information from unauthorized access, disclosure, or destruction. 
              However, no method of data transmission over the internet is entirely secure. 
              Therefore, we cannot guarantee the absolute security of your information.
            </p>
          </section>

          <section>
            <header>
              <h2>6. Children's Privacy</h2>
            </header>
            <p>
              Our website is not intended for children under the age of 13. 
              We do not knowingly collect or store personal information from children under 13. 
              If we learn that we have inadvertently collected personal information from a child under 13, 
              we will take steps to delete such information.
            </p>
          </section>

          <section>
            <header>
              <h2>7. Changes to this Policy</h2>
            </header>
            <p>
              We may update this Privacy Policy from time to time. 
              The most current version will be posted on this page, with the "Last updated" date at the top. 
              Your continued use of the website after any modifications to this policy will signify your acceptance of the changes.
            </p>
          </section>

          <section>
            <header>
              <h2>8. Contact Us</h2>
            </header>
            <p>
              If you have any questions or concerns regarding this Privacy Policy 
              or the way we handle your personal information, please contact us at contact@laughwithmodi.in.
            </p>
          </section>

          <section>
            <p>
              By using LaughWithModi.in, you acknowledge that you have read and understood this Privacy Policy and agree to its terms and conditions.
            </p>
          </section>
        </article>
      </Layout>
    </>
  );
}

export default PrivacyPolicy;
