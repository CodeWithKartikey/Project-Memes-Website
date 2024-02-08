import React from 'react';
import Layout from '../../Layout';
import '../Disclaimer-Page/Disclaimer.scss';

const Disclaimer = () => {
  return (
    <Layout>
      <article className='disclaimer-page'>
        <section>
          <header>
            <h1>Disclaimer</h1>
          </header>
          <p>Last updated: [Month] [Date], [Year]</p>
          <p>
            The information provided on LaughWithModi.in ("the website") is for general informational purposes only. 
            The content on this website is subject to change without notice, and we make no guarantees regarding its accuracy, completeness, or timeliness.
          </p>
        </section>

        <section>
          <header>
            <h2>1. Content Accuracy and Use</h2>
          </header>
          <p>
            1.1. The content on LaughWithModi.in is provided "as is" and "as available." 
            We do not warrant or make any representations regarding the accuracy, reliability, 
            or suitability of the information presented on the website. 
            You acknowledge that any reliance on the information found on the website is at your own risk.
          </p>
          <p>
            1.2. The website's content may include opinions, views, or suggestions provided by contributors, visitors, or other third parties. 
            These views do not necessarily represent the views of LaughWithModi.in, and we disclaim any liability for such content.
          </p>
        </section>

        <section>
          <header>
            <h2>2. No Professional Advice</h2>
          </header>
          <p>
            2.1. The content on LaughWithModi.in is not intended to provide professional advice of any kind. 
            It is for general informational purposes only. 
            You should not rely on the information on this website as an alternative to professional advice or seek it as such. 
            If you have specific questions or concerns, you should consult with a qualified professional in the relevant field.
          </p>
        </section>

        <section>
          <header>
            <h2>3. Third-Party Content and Links</h2>
          </header>
          <p>
            3.1. LaughWithModi.in may contain links to third-party websites or display content from third-party sources. 
            We do not endorse, control, or assume responsibility for any third-party content or websites linked from LaughWithModi.in. 
            Accessing third-party content or websites is at your own risk, and we disclaim any liability for any damages or losses that may arise from such interactions.
          </p>
        </section>

        <section>
          <header>
            <h2>4. Limitation of Liability</h2>
          </header>
          <p>
            4.1. We, including our officers, directors, employees, and agents, shall not be liable for any direct, indirect, incidental, special, 
            or consequential damages arising out of or in connection with your use of the website or reliance on its content.
          </p>
        </section>

        <section>
          <header>
            <h2>5. No Warranty</h2>
          </header>
          <p>
            5.1. LaughWithModi.in makes no representations or warranties of any kind, express 
            or implied, regarding the website's operation, the content, or any information provided on the website. 
            We disclaim all warranties, including but not limited to implied warranties of merchantability, fitness for a particular purpose, and non-infringement.
          </p>
        </section>

        <section>
          <header>
            <h2>6. Modification of Content and Disclaimer</h2>
          </header>
          <p>
            6.1. We reserve the right to modify or remove any content from the website at any time without notice. 
            Additionally, we may update this Disclaimer from time to time, and the most current version will be posted on this page.
          </p>
        </section>

        <section>
          <header>
            <h2>7. Indemnification</h2>
          </header>
          <p>
            7.1. By using LaughWithModi.in, you agree to indemnify and hold us harmless from any claims, demands, 
            or damages, including reasonable attorney fees, arising out of your use of the website or any violation of this Disclaimer.
          </p>
        </section>

        <section>
          <header>
            <h2>8. Governing Law</h2>
          </header>
          <p>
            8.1. This Disclaimer shall be governed by and construed in accordance with the laws of India, without regard to its conflicts of law principles.
          </p>
        </section>

        <section>
          <header>
            <h2>9. Contact Us</h2>
          </header>
          <p>
            9.1. If you have any questions or concerns regarding this Disclaimer or the content on LaughWithModi.com, please contact us at contact@laughwithmodi.in.
          </p>
        </section>

        <section>
          <p>
            By using LaughWithModi.in, you acknowledge that you have read and understood this Disclaimer and agree to its terms and conditions.
          </p>
        </section>
      </article>
    </Layout>
  );
}

export default Disclaimer;
