import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
	title: "Privacy Policy | SoloPay",
	description: "How SoloPay collects, uses, and protects personal information.",
};

export default function PrivacyPolicyPage() {
	const effectiveDate = "10 February 2026";

	return (
		<main className="px-6 py-16 md:py-24">
			<div className="mx-auto w-full max-w-3xl">
				<header className="space-y-3">
					<p className="text-xs font-medium uppercase tracking-widest text-accent">Legal</p>
					<h1 className="font-serif text-3xl font-medium tracking-tight text-foreground md:text-4xl">
						Privacy Policy
					</h1>
					<p className="text-sm text-muted-foreground">Effective date: {effectiveDate}</p>
					<p className="text-sm leading-relaxed text-muted-foreground">
						This Privacy Policy explains how SoloPay (“we”, “us”, “our”) collects, uses, discloses,
						and protects personal information when you use our website and services (the “Service”).
						This document is provided for informational purposes and is not legal advice.
					</p>
				</header>

				<section className="mt-10 space-y-8 text-sm leading-relaxed text-foreground">
					<div className="space-y-2">
						<h2 className="font-serif text-xl font-medium">1. Who we are</h2>
						<p className="text-muted-foreground">
							SoloPay provides bookkeeping and related tools for freelancers and small businesses.
							For questions about privacy, contact us using the details in the “Contact us” section
							below.
						</p>
					</div>

					<div className="space-y-2">
						<h2 className="font-serif text-xl font-medium">2. Information we collect</h2>
						<ul className="list-disc space-y-2 pl-5 text-muted-foreground">
							<li>
								<strong>Account information</strong>: name, email address, password (hash), business
								details, and preferences.
							</li>
							<li>
								<strong>Billing information</strong>: subscription plan, invoices, and payment
								status. Payment processing may be handled by third-party payment providers who
								collect and process payment details directly.
							</li>
							<li>
								<strong>Service data</strong>: bookkeeping entries, invoice data, expense records,
								attachments you upload (e.g., receipts), and other content you submit to the
								Service.
							</li>
							<li>
								<strong>Usage and device data</strong>: log data, approximate location derived from
								IP, browser type, pages viewed, and actions taken to help operate and secure the
								Service.
							</li>
							<li>
								<strong>Support communications</strong>: messages you send to us, including emails
								and support requests.
							</li>
						</ul>
					</div>

					<div className="space-y-2">
						<h2 className="font-serif text-xl font-medium">3. How we use information</h2>
						<ul className="list-disc space-y-2 pl-5 text-muted-foreground">
							<li>Provide, maintain, and improve the Service.</li>
							<li>Create and manage your account and subscriptions.</li>
							<li>Process transactions and send service-related communications.</li>
							<li>Detect, prevent, and respond to security incidents and fraud.</li>
							<li>Comply with legal obligations and enforce our terms.</li>
							<li>Provide customer support and respond to requests.</li>
						</ul>
					</div>

					<div className="space-y-2">
						<h2 className="font-serif text-xl font-medium">4. Legal bases</h2>
						<p className="text-muted-foreground">
							Where applicable, we process personal information based on your consent, performance
							of a contract (providing the Service), compliance with legal obligations, and our
							legitimate interests (such as security, fraud prevention, and improving the Service).
						</p>
					</div>

					<div className="space-y-2">
						<h2 className="font-serif text-xl font-medium">5. How we share information</h2>
						<ul className="list-disc space-y-2 pl-5 text-muted-foreground">
							<li>
								<strong>Service providers</strong>: hosting, analytics, customer support, and
								infrastructure providers who process data on our behalf.
							</li>
							<li>
								<strong>Payment providers</strong>: when you subscribe, payments may be handled by
								third-party processors under their own terms and privacy policies.
							</li>
							<li>
								<strong>Legal</strong>: to comply with law, court orders, or lawful requests, or to
								protect rights, safety, and security.
							</li>
							<li>
								<strong>Business transfers</strong>: in connection with a merger, acquisition, or
								sale of assets, subject to appropriate safeguards.
							</li>
						</ul>
						<p className="text-muted-foreground">We do not sell your personal information.</p>
					</div>

					<div className="space-y-2">
						<h2 className="font-serif text-xl font-medium">6. Data retention</h2>
						<p className="text-muted-foreground">
							We retain personal information for as long as necessary to provide the Service, comply
							with legal obligations, resolve disputes, and enforce agreements. You may request
							deletion as described below, subject to legal and operational requirements.
						</p>
					</div>

					<div className="space-y-2">
						<h2 className="font-serif text-xl font-medium">7. Security</h2>
						<p className="text-muted-foreground">
							We implement reasonable administrative, technical, and physical safeguards designed to
							protect your information. No method of transmission or storage is fully secure, and we
							cannot guarantee absolute security.
						</p>
					</div>

					<div className="space-y-2">
						<h2 className="font-serif text-xl font-medium">8. Your rights and choices</h2>
						<ul className="list-disc space-y-2 pl-5 text-muted-foreground">
							<li>Access, correct, or update your information.</li>
							<li>Request deletion of your information (subject to exceptions).</li>
							<li>Object to or restrict certain processing where applicable.</li>
							<li>Withdraw consent where processing is based on consent.</li>
						</ul>
					</div>

					<div className="space-y-2">
						<h2 className="font-serif text-xl font-medium">9. International transfers</h2>
						<p className="text-muted-foreground">
							We may process and store information in countries other than your own, depending on
							our service providers. Where required, we implement appropriate safeguards for
							cross-border transfers.
						</p>
					</div>

					<div className="space-y-2">
						<h2 className="font-serif text-xl font-medium">10. Cookies</h2>
						<p className="text-muted-foreground">
							We use cookies and similar technologies for authentication, security, and site
							functionality. For details, see our{" "}
							<Link href="/cookie-policy" className="underline underline-offset-4">
								Cookie Policy
							</Link>
							.
						</p>
					</div>

					<div className="space-y-2">
						<h2 className="font-serif text-xl font-medium">11. Changes</h2>
						<p className="text-muted-foreground">
							We may update this policy from time to time. We will update the effective date above
							and, where appropriate, provide additional notice.
						</p>
					</div>

					<div className="space-y-2">
						<h2 className="font-serif text-xl font-medium">12. Contact us</h2>
						<p className="text-muted-foreground">
							Questions or requests can be sent to{" "}
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
