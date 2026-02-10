"use client";

import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
	{
		question: "Is SoloPay really free to start?",
		answer:
			"Yes! Our Starter plan is completely free with up to 5 invoices per month. No credit card required. Upgrade to Professional whenever you're ready.",
	},
	{
		question: "Does SoloPay handle VAT for South African businesses?",
		answer:
			"Absolutely. SoloPay automatically calculates VAT at 15%, generates VAT201 reports, and keeps your records SARS-ready. You can also handle zero-rated and exempt supplies.",
	},
	{
		question: "Which South African banks are supported?",
		answer:
			"We support all major SA banks including FNB, Standard Bank, Absa, Nedbank, Capitec, and Investec. Bank feeds import automatically for seamless reconciliation.",
	},
	{
		question: "Can I invoice international clients?",
		answer:
			"Yes! You can invoice in USD, GBP, EUR, and 20+ other currencies. SoloPay converts to ZAR automatically using live exchange rates for your records.",
	},
	{
		question: "How does SoloPay compare to Freshbooks or Xero?",
		answer:
			"SoloPay offers the same core features at a fraction of the price, with the added benefit of being built specifically for the South African market. No paying in dollars for features you don't need.",
	},
	{
		question: "Can I cancel anytime?",
		answer:
			"Of course. There are no contracts or cancellation fees. You can downgrade to the free Starter plan or cancel your subscription at any time.",
	},
];

export function FAQ() {
	return (
		<section id="faq" className="bg-muted/40 px-6 py-20 md:py-28">
			<div className="mx-auto max-w-2xl">
				<div className="text-center">
					<p className="text-xs font-medium uppercase tracking-widest text-accent">FAQ</p>
					<h2 className="mt-3 font-serif text-3xl font-medium tracking-tight text-foreground md:text-4xl">
						<span className="text-balance">Common questions</span>
					</h2>
				</div>

				<Accordion type="single" collapsible className="mt-12">
					{faqs.map((faq, i) => (
						<AccordionItem
							// biome-ignore lint/suspicious/noArrayIndexKey: FAQ list is static content.
							key={i}
							value={`faq-${i}`}
							className="border-border"
						>
							<AccordionTrigger className="text-left font-serif text-base font-medium text-foreground hover:no-underline">
								{faq.question}
							</AccordionTrigger>
							<AccordionContent className="text-sm leading-relaxed text-muted-foreground">
								{faq.answer}
							</AccordionContent>
						</AccordionItem>
					))}
				</Accordion>
			</div>
		</section>
	);
}
