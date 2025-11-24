import { Metadata } from "next";
import Link from "next/link";
import { Mail, Phone, MapPin, ArrowLeft } from "lucide-react";

export const metadata: Metadata = {
    title: "TapTheGrey - Privacy Policy & Support",
    description: "Privacy Policy, FAQ, and Support for TapTheGrey - A simple static block game developed by Bhanit Gaurav.",
};

export default function TapTheGrey() {
    return (
        <div className="min-h-screen bg-background text-foreground pt-24 pb-12">
            <div className="container mx-auto px-4 max-w-4xl">
                <Link
                    href="/"
                    className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-8"
                >
                    <ArrowLeft className="w-4 h-4" />
                    Back to Portfolio
                </Link>

                <header className="mb-12 text-center flex flex-col items-center">
                    <div className="w-32 h-32 mb-6 rounded-2xl overflow-hidden shadow-xl border-[5px] border-zinc-200 dark:border-zinc-700 bg-background">
                        <img
                            src="/tapthegrey.png"
                            alt="TapTheGrey Logo"
                            className="w-full h-full object-cover"
                        />
                    </div>
                    <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary to-blue-600">
                        TapTheGrey
                    </h1>
                    <p className="text-xl text-muted-foreground mb-8 max-w-2xl">
                        A simple static block game developed by Bhanit Gaurav. Test your focus and reflexes!
                    </p>
                    <div className="flex flex-col sm:flex-row justify-center gap-4">
                        <a
                            href="https://play.google.com/store/apps/details?id=com.bhanit.games.mytapthegrey&hl=en_IN"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-primary text-primary-foreground font-bold hover:bg-primary/90 transition-all hover:scale-105 shadow-lg"
                        >
                            Download on Google Play
                        </a>
                        <a
                            href="https://www.indusappstore.com/apps/board/tapthegrey/com.bhanit.games.tapthegrey"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-secondary text-secondary-foreground font-bold hover:bg-secondary/90 transition-all hover:scale-105 shadow-lg"
                        >
                            Download on Indus App Store
                        </a>
                    </div>
                </header>

                <section className="mb-12 space-y-6">
                    <h2 className="text-2xl font-bold border-b border-border pb-2">About</h2>
                    <p className="text-muted-foreground leading-relaxed">
                        The <strong>TAP THE GREY</strong> game is the best way to concentrate and focus on moving blocks colors.
                        TAP THE GREY helps to focus, to hit the grey block before turning it into its original color.
                    </p>
                    <p className="text-muted-foreground leading-relaxed">
                        TAP THE GREY is an engaging and fast-paced game designed to test your focus and sharpen your concentration.
                        The goal is simple: tap the grey block before it changes back to its original color. With constantly moving blocks
                        and dynamic color changes, this game challenges your reflexes and attention to detail like never before.
                        Perfect for all ages, TAP THE GREY is an excellent way to improve your reaction time, enhance focus, and enjoy
                        some quick, fun gameplay. Whether you're looking to take a break or train your brain, this game offers an
                        addictive experience that keeps you coming back for more!
                    </p>
                </section>

                <section className="mb-12 space-y-6">
                    <h2 className="text-2xl font-bold border-b border-border pb-2">Contact & Support</h2>
                    <div className="grid md:grid-cols-3 gap-6">
                        <div className="flex flex-col items-center p-6 bg-card rounded-xl border border-border">
                            <Mail className="w-8 h-8 text-primary mb-4" />
                            <h3 className="font-semibold mb-2">Email</h3>
                            <a href="mailto:bhanitgauravapps@gmail.com" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                                bhanitgauravapps@gmail.com
                            </a>
                        </div>
                        <div className="flex flex-col items-center p-6 bg-card rounded-xl border border-border">
                            <Phone className="w-8 h-8 text-primary mb-4" />
                            <h3 className="font-semibold mb-2">Phone</h3>
                            <a href="tel:+918419848105" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                                +91-8419848105
                            </a>
                        </div>
                        <div className="flex flex-col items-center p-6 bg-card rounded-xl border border-border">
                            <MapPin className="w-8 h-8 text-primary mb-4" />
                            <h3 className="font-semibold mb-2">Address</h3>
                            <p className="text-sm text-muted-foreground text-center">
                                Mumbai, India
                            </p>
                        </div>
                    </div>
                </section>

                <section className="mb-12 space-y-8">
                    <h2 className="text-2xl font-bold border-b border-border pb-2">Privacy Policy</h2>
                    <div className="prose prose-neutral dark:prose-invert max-w-none">
                        <p className="text-sm text-muted-foreground">Last updated January 01, 2025</p>

                        <p>
                            This Privacy Notice for BhanitGauravApps ('we', 'us', or 'our'), describes how and why we might access, collect, store, use, and/or share ('process') your personal information when you use our services ('Services'), including when you:
                        </p>
                        <ul className="list-disc pl-6 space-y-2">
                            <li>Download and use our mobile application (TapTheGrey), or any other application of ours that links to this Privacy Notice</li>
                            <li>Engage with us in other related ways, including any sales, marketing, or events</li>
                        </ul>

                        <h3 className="text-xl font-semibold mt-8 mb-4">Summary of Key Points</h3>
                        <div className="bg-muted/30 p-6 rounded-xl border border-border space-y-4">
                            <p><strong>What personal information do we process?</strong> We do not collect, store, or process any personal data from our users. The app is designed to be played without requiring any personal information.</p>
                            <p><strong>Do we process any sensitive personal information?</strong> No. We do not process sensitive personal information.</p>
                            <p><strong>Do we collect any information from third parties?</strong> No. We do not collect any information from third parties.</p>
                            <p><strong>How do we process your information?</strong> Since we do not collect personal data, we do not process it. Any data handling is strictly limited to local device operations necessary for the game to function (e.g., saving high scores locally).</p>
                            <p><strong>How do we keep your information safe?</strong> Since we do not collect personal data, there is no risk of data breach from our servers.</p>
                        </div>

                        <h3 className="text-xl font-semibold mt-8 mb-4">1. What Information Do We Collect?</h3>
                        <p><strong>Personal information you disclose to us</strong></p>
                        <p>We collect personal information that you voluntarily provide to us when you express an interest in obtaining information about us or our products and Services, when you participate in activities on the Services, or otherwise when you contact us.</p>

                        <p><strong>Application Data</strong></p>
                        <p>If you use our application(s), we also may collect the following information if you choose to provide us with access or permission:</p>
                        <ul className="list-disc pl-6 space-y-2">
                            <li><strong>Mobile Device Data:</strong> We automatically collect device information (such as your mobile device ID, model, and manufacturer), operating system, version information and system configuration information, device and application identification numbers, browser type and version, hardware model Internet service provider and/or mobile carrier, and Internet Protocol (IP) address (or proxy server).</li>
                            <li><strong>Push Notifications:</strong> We may request to send you push notifications regarding your account or certain features of the application(s). If you wish to opt out from receiving these types of communications, you may turn them off in your device's settings.</li>
                        </ul>

                        <h3 className="text-xl font-semibold mt-8 mb-4">2. How Do We Process Your Information?</h3>
                        <p>We process your personal information for a variety of reasons, depending on how you interact with our Services, including:</p>
                        <ul className="list-disc pl-6 space-y-2">
                            <li>To save or protect an individual's vital interest.</li>
                            <li>To provide, improve, and administer our Services.</li>
                            <li>To communicate with you.</li>
                            <li>For security and fraud prevention.</li>
                            <li>To comply with law.</li>
                        </ul>

                        <h3 className="text-xl font-semibold mt-8 mb-4">3. Data Retention & Security</h3>
                        <p>We will only keep your personal information for as long as it is necessary for the purposes set out in this Privacy Notice, unless a longer retention period is required or permitted by law. No purpose in this notice will require us keeping your personal information for longer than 1 year.</p>
                        <p>We have implemented appropriate and reasonable technical and organisational security measures designed to protect the security of any personal information we process.</p>

                        <h3 className="text-xl font-semibold mt-8 mb-4">4. Your Privacy Rights</h3>
                        <p>Depending on your location (EEA, UK, Switzerland, Canada, US), you have certain rights regarding your personal information, including the right to request access, rectification, erasure, or restriction of processing. You can exercise these rights by contacting us at <strong>bhanitgauravapps@gmail.com</strong>.</p>

                        <h3 className="text-xl font-semibold mt-8 mb-4">5. Contact Us</h3>
                        <p>If you have questions or comments about this notice, you may email us at <a href="mailto:bhanitgauravapps@gmail.com" className="text-primary hover:underline">bhanitgauravapps@gmail.com</a> or contact us by post at:</p>
                        <address className="not-italic mt-4 p-4 bg-muted/30 rounded-lg border border-border">
                            <strong>BhanitGauravApps</strong><br />
                            Krishna Nagar<br />
                            Private Colony<br />
                            Gorakhpur, Uttar Pradesh 273004<br />
                            India
                        </address>
                    </div>
                </section>
            </div>
        </div>
    );
}
