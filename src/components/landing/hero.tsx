import { ArrowRight } from "lucide-react";
import Link from "next/link";

import { Button } from "@/components/ui/button";

export function Hero() {
	return (
		<section className="relative overflow-hidden px-6 pb-20 pt-20 md:pb-32 md:pt-28">
			<div className="mx-auto max-w-6xl text-center">
				<div className="mb-8 inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-1.5">
					<span className="h-2 w-2 rounded-full bg-accent" />
					<span className="text-xs font-medium text-muted-foreground">
						Built for South African freelancers
					</span>
				</div>

				<h1 className="mx-auto max-w-3xl font-serif text-4xl font-medium leading-tight tracking-tight text-foreground md:text-6xl md:leading-tight">
					<span className="text-balance">Bookkeeping that works as hard as you do</span>
				</h1>

				<p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg">
					Simple, affordable invoicing and expense tracking built for solopreneurs. Stay
					SARS-compliant without the accounting degree.
				</p>

				<div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
					<Button
						size="lg"
						className="bg-primary px-8 text-primary-foreground hover:bg-primary/90"
						asChild
					>
						<Link href="#">
							Start your free trial
							<ArrowRight className="ml-2 h-4 w-4" />
						</Link>
					</Button>
					<Button variant="outline" size="lg" className="bg-transparent px-8" asChild>
						<Link href="#features">See how it works</Link>
					</Button>
				</div>

				<p className="mt-4 text-xs text-muted-foreground">
					No credit card required. 14-day free trial.
				</p>

				<div className="mx-auto mt-16 max-w-4xl">
					<div className="overflow-hidden rounded-xl border border-border bg-card shadow-lg">
						<div className="flex items-center gap-1.5 border-b border-border px-4 py-3">
							<div className="h-2.5 w-2.5 rounded-full bg-border" />
							<div className="h-2.5 w-2.5 rounded-full bg-border" />
							<div className="h-2.5 w-2.5 rounded-full bg-border" />
						</div>
						<div className="p-6 md:p-8">
							<div className="grid grid-cols-3 gap-4 md:gap-6">
								<DashboardCard label="Revenue (MTD)" value="R 42,850" change="+12.3%" />
								<DashboardCard label="Outstanding" value="R 8,200" change="3 invoices" />
								<DashboardCard label="Expenses (MTD)" value="R 15,430" change="-4.1%" />
							</div>
							<div className="mt-6 space-y-3">
								{[
									{ client: "Acme Design Co.", amount: "R 12,500", status: "Paid" },
									{
										client: "Cape Digital Agency",
										amount: "R 8,200",
										status: "Pending",
									},
									{
										client: "Joburg Marketing Ltd.",
										amount: "R 6,750",
										status: "Paid",
									},
									{
										client: "Durban Tech Solutions",
										amount: "R 15,400",
										status: "Overdue",
									},
								].map((row) => (
									<div
										key={row.client}
										className="flex items-center justify-between rounded-lg bg-muted/50 px-4 py-3"
									>
										<span className="text-sm font-medium text-foreground">{row.client}</span>
										<div className="flex items-center gap-4">
											<span className="text-sm text-muted-foreground">{row.amount}</span>
											<span
												className={[
													"rounded-full px-2.5 py-0.5 text-xs font-medium",
													row.status === "Paid"
														? "bg-accent/10 text-accent"
														: row.status === "Pending"
															? "bg-secondary text-muted-foreground"
															: "bg-destructive/10 text-destructive",
												].join(" ")}
											>
												{row.status}
											</span>
										</div>
									</div>
								))}
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

function DashboardCard({ label, value, change }: { label: string; value: string; change: string }) {
	return (
		<div className="rounded-lg bg-muted/50 p-4">
			<p className="text-xs text-muted-foreground">{label}</p>
			<p className="mt-1 font-serif text-xl font-semibold text-foreground md:text-2xl">{value}</p>
			<p className="mt-0.5 text-xs text-muted-foreground">{change}</p>
		</div>
	);
}
