import Header from './Header.js';
import Footer from './Footer.js';


export default function initialize() {
    return (
        <>

        <Header/>
            <main class="container">

                <div class="row g-5">
                    <div class="col-md-2"></div>
                    <div class="col-md-8 bg-light-subtle pt-3 pb-3">

                        <h2 class="font-playfair display-5 link-body-emphasis mb-3">Release Notes</h2>
                        <hr/>

                            <article class="blog-post">
                                <p class="h5"><b>v3.0.7</b></p>
                                <ul>
                                    <li>Added feature to download all/mutiple components and apex classes backup.</li>
                                    <li>CodeFinder feature: In this version you can search code in lwc and apex class.</li>
                                    <li>Bug fixes</li>
                                </ul>
                            </article>
                            <article class="blog-post">
                                <p class="h5"><b>v3.0.6</b></p>
                                <ul>
                                    <li>Added new UI buttons for these features:
                                        <ul>
                                            <li> Document Format</li>
                                            <li>Word Wrap</li>
                                            <li>Open Command Pattern</li>
                                            <li>Zoom In/Out</li>
                                            <li>Save Mode</li>
                                            <li>Minimap (Hide/Show)</li>
                                            <li>Zen Mode</li>
                                            <li>Full Screen Mode</li>
                                        </ul>
                                    </li>
                                    <li>Fixed: Error message was always displayed in the Deployment Output Results panel.</li>
                                </ul>
                            </article>
                            <article class="blog-post">
                                <p class="h5"><b>v3.0.5</b></p>
                                <ul>
                                    <li>Added feature to download component backup OR specify component file locally.</li>
                                    <li>Added more editor color themes.</li>
                                    <li>Bug and messages fixes.</li>
                                </ul>
                            </article>
                            <article class="blog-post">
                                <p class="h5"><b>v3.0.4</b></p>
                                <ul>
                                    <li>Added <span class="badge text-bg-dark">Dark</span> and <span
                                        class="badge text-bg-light">Light</span> theme feature.</li>
                                    <li>Bug Fixes.</li>
                                </ul>
                            </article>
                            <article class="blog-post">
                                <p class="h5"><b>v3.0.3</b></p>
                                <ul>
                                    <li>it includes the ability to create new LWC files for a specific component.</li>
                                    <li>Fixed: UI issue with the new LWC creation model form.</li>
                                </ul>
                            </article>
                            <article class="blog-post">
                                <p class="h5"><b>v3.0.2</b></p>
                                <ul>
                                    <li>Added apex classes editing feature.</li>
                                    <li>Added shortcut key to save changes. Win: <kbd>CTRL+S</kbd> iOS: <kbd>⌘+S</kbd></li>
                                    <li>Removed aura component view feature.</li>
                                </ul>
                            </article>
                            <article class="blog-post">
                                <p class="h5"><b>v3.0.1</b></p>
                                <ul>
                                    <li>Added: Copy Session ID feature.</li>
                                    <li>Fixed the issue with Lightning Studio not launching on MacOS.</li>
                                </ul>
                            </article>
                            <article class="blog-post">
                                <p class="h5"><b>v3.0.0</b></p>
                                <ul>
                                    <li>Initial version launched on manifest v3.</li>
                                    <li>Lightning web component creation and update feature.</li>
                                    <li>Lightning Message Channel creation and update feature.</li>
                                    <li>View Apex Classes and aura components.</li>
                                </ul>
                            </article>
                            <article class="blog-post">
                                <p class="h5"><b>v2.0.0</b> <span class="badge rounded-pill text-bg-danger">Deprecated</span></p>
                                <ul>
                                    <li>Google policy no longer supports Manifest 2, and Lightning Studio v2.X.X was working on it, We
                                        had to remove it as a result of the Chrome policy upgrade.</li>

                                </ul>
                            </article>

                    </div>

                </div>

            </main>
            {/* Footer */}
            <Footer />
        </>
    );
}
