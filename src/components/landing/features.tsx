import { FileText, Globe, PieChart, Receipt, Shield, Zap } from "lucide-react";

const features = [
	{
		icon: FileText,
		title: "Professional Invoicing",
		description:
			"Create and send polished invoices in Rands. Set up recurring billing and automated payment reminders.",
	},
	{
		icon: Receipt,
		title: "Expense Tracking",
		description:
			"Snap receipts, categorise expenses automatically, and always know where your money is going.",
	},
	{
		icon: PieChart,
		title: "Financial Reports",
		description:
			"Get clear insights into your income, expenses, and profit margins with real-time dashboards.",
	},
	{
		icon: Shield,
		title: "SARS Compliant",
		description:
			"VAT calculations, tax-ready reports, and everything you need to stay on the right side of SARS.",
	},
	{
		icon: Zap,
		title: "Bank Integration",
		description:
			"Connect your South African bank account for automatic transaction imports and reconciliation.",
	},
	{
		icon: Globe,
		title: "Multi-Currency",
		description:
			"Invoice international clients in their currency with automatic ZAR conversion at live rates.",
	},
];

export function Features() {
	return (
		<section id="features" className="px-6 py-20 md:py-28">
			<div className="mx-auto max-w-6xl">
				<div className="text-center">
					<p className="text-xs font-medium uppercase tracking-widest text-accent">Features</p>
					<h2 className="mt-3 font-serif text-3xl font-medium tracking-tight text-foreground md:text-4xl">
						<span className="text-balance">Everything you need, nothing you don&apos;t</span>
					</h2>
					<p className="mx-auto mt-4 max-w-lg text-base leading-relaxed text-muted-foreground">
						Built from the ground up for how South African freelancers actually work.
					</p>
				</div>

				<div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
					{features.map((feature) => (
						<div
							key={feature.title}
							className="group rounded-xl border border-border bg-card p-6 transition-colors hover:border-accent/30 hover:bg-card/80"
						>
							<div className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent/10">
								<feature.icon className="h-5 w-5 text-accent" />
							</div>
							<h3 className="mt-4 font-serif text-lg font-medium text-foreground">
								{feature.title}
							</h3>
							<p className="mt-2 text-sm leading-relaxed text-muted-foreground">
								{feature.description}
							</p>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
