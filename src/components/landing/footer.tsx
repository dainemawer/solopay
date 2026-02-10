import Link from "next/link";

const links = {
	Product: ["Features", "Pricing", "Integrations", "Changelog"],
	Company: ["About", "Blog", "Careers", "Contact"],
	Resources: ["Help Centre", "API Docs", "Community", "Status"],
	Legal: ["Privacy Policy", "Terms of Service", "Cookie Policy"],
};

export function Footer() {
	return (
		<footer className="border-t border-border px-6 py-12 md:py-16">
			<div className="mx-auto max-w-6xl">
				<div className="grid gap-10 md:grid-cols-5">
					<div className="md:col-span-1">
						<Link href="/" className="flex items-center gap-2">
							<div className="flex h-7 w-7 items-center justify-center rounded-md bg-primary">
								<span className="text-xs font-bold text-primary-foreground">S</span>
							</div>
							<span className="font-serif text-lg font-semibold text-foreground">SoloPay</span>
						</Link>
						<p className="mt-3 text-xs leading-relaxed text-muted-foreground">
							Simple bookkeeping for South African freelancers.
						</p>
					</div>

					{Object.entries(links).map(([heading, items]) => (
						<div key={heading}>
							<h4 className="text-xs font-semibold uppercase tracking-widest text-foreground">
								{heading}
							</h4>
							<ul className="mt-4 space-y-2.5">
								{items.map((item) => (
									<li key={item}>
										<Link
											href="#"
											className="text-sm text-muted-foreground transition-colors hover:text-foreground"
										>
											{item}
										</Link>
									</li>
								))}
							</ul>
						</div>
					))}
				</div>

				<div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-border pt-8 md:flex-row">
					<p className="text-xs text-muted-foreground">
						&copy; {new Date().getFullYear()} SoloPay. All rights reserved.
					</p>
					<p className="text-xs text-muted-foreground">Made with care in South Africa</p>
				</div>
			</div>
		</footer>
	);
}
