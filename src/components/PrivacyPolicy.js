import Header from './Header.js';
import Footer from './Footer.js';


export default function initialize() {
    return (
        <>
            {/* Header */}
            <Header />
            {/* Body */}
            <main class="container">

                <div class="row g-5">
                    <div class="col-md-2"></div>
                    <div class="col-md-8 bg-light-subtle pt-3 pb-3">

                        <h2 class="display-5 link-body-emphasis mb-3 font-playfair">Privacy Policy</h2>
                        <p>At Lightning Studio, we are committed to ensuring the privacy and security of our users. This Privacy
                            Policy details how our Chrome extensions handle data and outlines our practices. By using our
                            extensions, you agree to the terms outlined in this Privacy Policy.</p>
                        <hr />

                        <article class="blog-post">
                            <h3>Information We Collect!</h3>
                            <p class="h6">Salesforce Data:</p>
                            <ul>
                                <li>Lightning Web Components, Lightning Message Service, and Apex Classes: Our extensions read
                                    data related to Salesforce Lightning Web Components, Lightning Message Service, and Apex
                                    Classes as necessary for their operation.</li>
                                <li>Company Name: We retrieve the company name from the user object within
                                    Salesforce to enable the functionality of our extension</li>
                                <li>Tooling and Metadata APIs: We utilize Salesforce’s Tooling and Metadata APIs
                                    to perform Create, Read, Update, and Delete (CRUD) operations required by the extension.
                                </li>
                            </ul>
                        </article>

                        <article class="blog-post">
                            <h3>How We Use Your Information</h3>
                            <p class="h6">Local Processing:</p>
                            <ul>
                                <li>All data collected by our extension is processed and used solely on your local system. There
                                    is no transmission of data to or from third-party servers. The data is used exclusively to
                                    operate and maintain the functionality of the extension within your local environment.</li>
                            </ul>
                        </article>

                        <article class="blog-post">
                            <h3>Data Security</h3>
                            <p class="h6">Local Data Handling:</p>
                            <ul>
                                <li>Since no data is transmitted to third-party servers, the data remains within your local system.
                                    We ensure that the extension operates with secure practices to protect the data while it is on
                                    your system.</li>
                            </ul>
                        </article>

                        <article class="blog-post">
                            <h3>Data Sharing and Disclosure</h3>
                            <p class="h6">Third-Party Services:</p>
                            <ul>
                                <li>We do not share any information with third-party services or applications. All data
                                    processing
                                    occurs locally on your system.</li>
                            </ul>
                            <p class="h6">Legal Requirements:</p>
                            <ul>
                                <li>If required by law, we may disclose information as necessary, but no personal data is
                                    handled or
                                    shared in this manner.</li>
                            </ul>
                        </article>

                        <article class="blog-post">
                            <h3>Do Not Sell My Personal Information</h3>
                            <p class="h6"> No Collection of Personal Information:</p>
                            <ul>
                                <li>We do not collect, sell, or share any personal information. The data handled by our
                                    extension is limited to what is necessary for its functionality and is not used for any
                                    other purpose.</li>
                            </ul>
                        </article>

                        <article class="blog-post">
                            <h3>Your Rights and Choices</h3>
                            <p class="h6">No Personal Data:</p>
                            <ul>
                                <li>As no personal data is collected or processed, there are no rights to access or control over
                                    personal data. However, if you have any questions or need further clarification regarding
                                    our practices, please refer to this Privacy Policy.</li>
                            </ul>
                        </article>

                        <article class="blog-post">
                            <h3>Changes to This Privacy Policy</h3>
                            <ul>
                                <li>This Privacy Policy is fixed and will not change. Any updates to this policy will be
                                    reflected directly in this document. Please review this Privacy Policy periodically to stay
                                    informed about our practices.</li>
                            </ul>
                        </article>

                        <article class="blog-post">
                            <h3>Disclaimer</h3>
                            <div  >
                                <p>The use of "Lightning Studio" Chrome extension is at your own risk. we does not assume any
                                    responsibility or liability for any potential impact the App may have on your Salesforce
                                    environment
                                    or data.</p>

                                <p>While the App is designed to function within your local system and does not transmit data to
                                    or
                                    from
                                    third-party servers, you acknowledge and agree that you are solely responsible for managing
                                    and
                                    protecting your sensitive data. We shall not be liable for any direct or indirect
                                    consequences,
                                    including but not limited to data loss, corruption, or overwrite that may result from the
                                    use of
                                    the
                                    app.</p>

                                <p>It is your responsibility to ensure that your data is properly backed up and to take all
                                    necessary
                                    precautions to prevent any unintended modifications or loss of data. By using the App, you
                                    agree
                                    to
                                    accept all risks associated with its use and understand that we are not liable for any
                                    damages
                                    or
                                    issues arising from the interaction between the App and your Salesforce data.</p>
                            </div>
                        </article>
                    </div>
                </div>
            </main>

            {/* Footer */}
            <Footer />
        </>
    );
}
