import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
	title: "Cookie Policy | SoloPay",
	description: "How SoloPay uses cookies and similar technologies.",
};

export default function CookiePolicyPage() {
	const effectiveDate = "10 February 2026";

	return (
		<main className="px-6 py-16 md:py-24">
			<div className="mx-auto w-full max-w-3xl">
				<header className="space-y-3">
					<p className="text-xs font-medium uppercase tracking-widest text-accent">Legal</p>
					<h1 className="font-serif text-3xl font-medium tracking-tight text-foreground md:text-4xl">
						Cookie Policy
					</h1>
					<p className="text-sm text-muted-foreground">Effective date: {effectiveDate}</p>
					<p className="text-sm leading-relaxed text-muted-foreground">
						This Cookie Policy explains how SoloPay (“we”, “us”, “our”) uses cookies and similar
						technologies on our website and Service. This document is provided for informational
						purposes and is not legal advice.
					</p>
				</header>

				<section className="mt-10 space-y-8 text-sm leading-relaxed text-foreground">
					<div className="space-y-2">
						<h2 className="font-serif text-xl font-medium">1. What are cookies?</h2>
						<p className="text-muted-foreground">
							Cookies are small text files stored on your device by your browser. Similar
							technologies include local storage, pixels, and SDKs that help provide and secure the
							Service.
						</p>
					</div>

					<div className="space-y-2">
						<h2 className="font-serif text-xl font-medium">2. How we use cookies</h2>
						<ul className="list-disc space-y-2 pl-5 text-muted-foreground">
							<li>
								<strong>Strictly necessary</strong>: authentication, session management, security,
								load balancing, and basic functionality.
							</li>
							<li>
								<strong>Preferences</strong>: remembering settings and choices.
							</li>
							<li>
								<strong>Performance</strong>: understanding usage to improve the Service (e.g.,
								aggregate analytics).
							</li>
						</ul>
					</div>

					<div className="space-y-2">
						<h2 className="font-serif text-xl font-medium">3. Third-party cookies</h2>
						<p className="text-muted-foreground">
							We may use third-party services (for example, hosting, analytics, or customer support
							tools) that set their own cookies. Those providers’ use of cookies is governed by
							their policies.
						</p>
					</div>

					<div className="space-y-2">
						<h2 className="font-serif text-xl font-medium">4. Managing cookies</h2>
						<p className="text-muted-foreground">
							Most browsers allow you to control cookies through settings. You can delete cookies or
							block certain cookies, but some features of the Service may not function properly if
							you do.
						</p>
					</div>

					<div className="space-y-2">
						<h2 className="font-serif text-xl font-medium">5. Do Not Track</h2>
						<p className="text-muted-foreground">
							Some browsers offer “Do Not Track” signals. The Service may not respond to all such
							signals consistently because there is no common industry standard.
						</p>
					</div>

					<div className="space-y-2">
						<h2 className="font-serif text-xl font-medium">6. Changes</h2>
						<p className="text-muted-foreground">
							We may update this policy from time to time. We will update the effective date above
							and, where appropriate, provide additional notice.
						</p>
					</div>

					<div className="space-y-2">
						<h2 className="font-serif text-xl font-medium">7. Related policies</h2>
						<p className="text-muted-foreground">
							Read our{" "}
							<Link href="/privacy-policy" className="underline underline-offset-4">
								Privacy Policy
							</Link>{" "}
							and{" "}
							<Link href="/terms-of-service" className="underline underline-offset-4">
								Terms of Service
							</Link>
							.
						</p>
					</div>

					<div className="space-y-2">
						<h2 className="font-serif text-xl font-medium">8. Contact</h2>
						<p className="text-muted-foreground">
							Questions can be sent to{" "}
							<a className="underline underline-offset-4" href="mailto:privacy@solopay.co.za">
								privacy@solopay.co.za
							</a>
							.
						</p>
						<p className="text-xs text-muted-foreground">
							If this email address is not correct for your organization, update it before going
							live.
						</p>
					</div>
				</section>
			</div>
		</main>
	);
}
