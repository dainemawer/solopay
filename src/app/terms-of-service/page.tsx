import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
	title: "Terms of Service | SoloPay",
	description: "Terms governing your use of SoloPay.",
};

export default function TermsOfServicePage() {
	const effectiveDate = "10 February 2026";

	return (
		<main className="px-6 py-16 md:py-24">
			<div className="mx-auto w-full max-w-3xl">
				<header className="space-y-3">
					<p className="text-xs font-medium uppercase tracking-widest text-accent">Legal</p>
					<h1 className="font-serif text-3xl font-medium tracking-tight text-foreground md:text-4xl">
						Terms of Service
					</h1>
					<p className="text-sm text-muted-foreground">Effective date: {effectiveDate}</p>
					<p className="text-sm leading-relaxed text-muted-foreground">
						These Terms of Service (“Terms”) govern your use of SoloPay (the “Service”). By
						accessing or using the Service, you agree to these Terms. This document is provided for
						informational purposes and is not legal advice.
					</p>
				</header>

				<section className="mt-10 space-y-8 text-sm leading-relaxed text-foreground">
					<div className="space-y-2">
						<h2 className="font-serif text-xl font-medium">1. Eligibility and accounts</h2>
						<ul className="list-disc space-y-2 pl-5 text-muted-foreground">
							<li>You must be able to form a binding contract to use the Service.</li>
							<li>
								You are responsible for maintaining the confidentiality of your account credentials
								and for all activity under your account.
							</li>
							<li>You agree to provide accurate information and keep it up to date.</li>
						</ul>
					</div>

					<div className="space-y-2">
						<h2 className="font-serif text-xl font-medium">2. The Service</h2>
						<p className="text-muted-foreground">
							SoloPay provides bookkeeping tools (including invoicing, expense tracking, and
							reporting). We may modify, suspend, or discontinue parts of the Service at any time.
						</p>
					</div>

					<div className="space-y-2">
						<h2 className="font-serif text-xl font-medium">3. Subscriptions and billing</h2>
						<ul className="list-disc space-y-2 pl-5 text-muted-foreground">
							<li>
								Some features may require a paid subscription. Pricing and plan details will be
								shown at sign-up or within the app.
							</li>
							<li>
								Trials (if offered) convert to a paid subscription unless cancelled before the end
								of the trial period.
							</li>
							<li>
								Payments may be processed by third-party providers. Your use of those providers is
								subject to their terms and policies.
							</li>
							<li>Unless otherwise required by law, fees are non-refundable once paid.</li>
						</ul>
					</div>

					<div className="space-y-2">
						<h2 className="font-serif text-xl font-medium">4. Your content</h2>
						<p className="text-muted-foreground">
							You retain ownership of the content you submit to the Service (including invoices,
							expenses, and attachments) (“User Content”). You grant us a limited license to host,
							process, transmit, and display User Content as necessary to provide the Service.
						</p>
					</div>

					<div className="space-y-2">
						<h2 className="font-serif text-xl font-medium">5. Acceptable use</h2>
						<ul className="list-disc space-y-2 pl-5 text-muted-foreground">
							<li>Do not use the Service for unlawful or fraudulent activities.</li>
							<li>Do not attempt to access other users’ accounts or data.</li>
							<li>Do not interfere with or disrupt the Service or its security features.</li>
							<li>Do not upload malware or content that infringes intellectual property rights.</li>
						</ul>
					</div>

					<div className="space-y-2">
						<h2 className="font-serif text-xl font-medium">6. Intellectual property</h2>
						<p className="text-muted-foreground">
							The Service and its content (excluding User Content) are owned by SoloPay or its
							licensors and are protected by intellectual property laws. You may not copy, modify,
							distribute, or reverse engineer the Service except as permitted by law.
						</p>
					</div>

					<div className="space-y-2">
						<h2 className="font-serif text-xl font-medium">7. Disclaimers (important)</h2>
						<p className="text-muted-foreground">
							The Service is provided on an “as is” and “as available” basis. We do not warrant that
							the Service will be uninterrupted, error-free, or secure, and we disclaim all
							warranties to the maximum extent permitted by law.
						</p>
						<p className="text-muted-foreground">
							SoloPay does not provide accounting, tax, or legal advice. You are responsible for
							your financial records and compliance with laws and SARS requirements.
						</p>
					</div>

					<div className="space-y-2">
						<h2 className="font-serif text-xl font-medium">8. Limitation of liability</h2>
						<p className="text-muted-foreground">
							To the maximum extent permitted by law, SoloPay and its affiliates will not be liable
							for any indirect, incidental, special, consequential, or punitive damages, or any loss
							of profits, revenue, data, or goodwill arising from or related to your use of the
							Service.
						</p>
						<p className="text-muted-foreground">
							Where liability cannot be excluded, our aggregate liability will be limited to the
							amounts you paid to us for the Service in the 3 months preceding the event giving rise
							to the claim.
						</p>
					</div>

					<div className="space-y-2">
						<h2 className="font-serif text-xl font-medium">9. Indemnity</h2>
						<p className="text-muted-foreground">
							You agree to indemnify and hold SoloPay harmless from claims, damages, liabilities,
							and expenses arising out of your use of the Service, your User Content, or your
							violation of these Terms.
						</p>
					</div>

					<div className="space-y-2">
						<h2 className="font-serif text-xl font-medium">10. Termination</h2>
						<p className="text-muted-foreground">
							You may stop using the Service at any time. We may suspend or terminate your access if
							you violate these Terms, pose a security risk, or as otherwise necessary. Upon
							termination, certain provisions (including disclaimers and limitations) survive.
						</p>
					</div>

					<div className="space-y-2">
						<h2 className="font-serif text-xl font-medium">11. Governing law</h2>
						<p className="text-muted-foreground">
							These Terms are governed by the laws of South Africa, without regard to conflict of
							law principles. Courts located in South Africa will have jurisdiction, unless
							applicable law requires otherwise.
						</p>
					</div>

					<div className="space-y-2">
						<h2 className="font-serif text-xl font-medium">12. Changes</h2>
						<p className="text-muted-foreground">
							We may update these Terms from time to time. We will update the effective date above
							and, where appropriate, provide additional notice.
						</p>
					</div>

					<div className="space-y-2">
						<h2 className="font-serif text-xl font-medium">13. Contact</h2>
						<p className="text-muted-foreground">
							For questions about these Terms, contact{" "}
							<a className="underline underline-offset-4" href="mailto:support@solopay.co.za">
								support@solopay.co.za
							</a>
							.
						</p>
						<p className="text-muted-foreground">
							Related documents:{" "}
							<Link href="/privacy-policy" className="underline underline-offset-4">
								Privacy Policy
							</Link>{" "}
							and{" "}
							<Link href="/cookie-policy" className="underline underline-offset-4">
								Cookie Policy
							</Link>
							.
						</p>
						<p className="text-xs text-muted-foreground">
							If these email addresses are not correct for your organization, update them before
							going live.
						</p>
					</div>
				</section>
			</div>
		</main>
	);
}
