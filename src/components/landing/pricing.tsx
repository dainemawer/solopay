import { Check } from "lucide-react";
import Link from "next/link";

import { Button } from "@/components/ui/button";

const plans = [
	{
		name: "Starter",
		price: "R 0",
		period: "/ month",
		description: "For freelancers just getting started.",
		features: [
			"5 invoices per month",
			"Basic expense tracking",
			"1 bank connection",
			"Email support",
		],
		cta: "Get started free",
		featured: false,
	},
	{
		name: "Professional",
		price: "R 199",
		period: "/ month",
		description: "For established freelancers and solopreneurs.",
		features: [
			"Unlimited invoices",
			"Full expense tracking",
			"Unlimited bank connections",
			"VAT & SARS reports",
			"Multi-currency invoicing",
			"Priority support",
		],
		cta: "Start free trial",
		featured: true,
	},
	{
		name: "Business",
		price: "R 399",
		period: "/ month",
		description: "For growing teams and small businesses.",
		features: [
			"Everything in Professional",
			"Up to 5 team members",
			"Advanced reporting",
			"API access",
			"Dedicated account manager",
			"Custom invoice branding",
		],
		cta: "Start free trial",
		featured: false,
	},
];

export function Pricing() {
	return (
		<section id="pricing" className="bg-muted/40 px-6 py-20 md:py-28">
			<div className="mx-auto max-w-6xl">
				<div className="text-center">
					<p className="text-xs font-medium uppercase tracking-widest text-accent">Pricing</p>
					<h2 className="mt-3 font-serif text-3xl font-medium tracking-tight text-foreground md:text-4xl">
						<span className="text-balance">Honest pricing for honest work</span>
					</h2>
					<p className="mx-auto mt-4 max-w-lg text-base leading-relaxed text-muted-foreground">
						No hidden fees, no surprises. Cancel anytime.
					</p>
				</div>

				<div className="mt-16 grid gap-6 md:grid-cols-3">
					{plans.map((plan) => (
						<div
							key={plan.name}
							className={[
								"relative flex flex-col rounded-xl border p-6 transition-colors md:p-8",
								plan.featured
									? "border-accent bg-card shadow-md"
									: "border-border bg-card hover:border-accent/30",
							].join(" ")}
						>
							{plan.featured && (
								<div className="absolute -top-3 left-6 rounded-full bg-accent px-3 py-0.5 text-xs font-medium text-accent-foreground">
									Most popular
								</div>
							)}
							<div>
								<h3 className="font-serif text-lg font-medium text-foreground">{plan.name}</h3>
								<p className="mt-1 text-sm text-muted-foreground">{plan.description}</p>
							</div>
							<div className="mt-6">
								<span className="font-serif text-4xl font-semibold text-foreground">
									{plan.price}
								</span>
								<span className="text-sm text-muted-foreground">{plan.period}</span>
							</div>
							<ul className="mt-6 flex-1 space-y-3">
								{plan.features.map((feature) => (
									<li key={feature} className="flex items-start gap-2.5">
										<Check className="mt-0.5 h-4 w-4 flex-shrink-0 text-accent" />
										<span className="text-sm text-muted-foreground">{feature}</span>
									</li>
								))}
							</ul>
							<Button
								className={[
									"mt-8 w-full",
									plan.featured
										? "bg-accent text-accent-foreground hover:bg-accent/90"
										: "bg-primary text-primary-foreground hover:bg-primary/90",
								].join(" ")}
								asChild
							>
								<Link href="#">{plan.cta}</Link>
							</Button>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
