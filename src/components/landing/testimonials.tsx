const testimonials = [
	{
		quote:
			"SoloPay saved me hours every month. I used to dread invoicing and now it takes me five minutes. The SARS reports alone are worth it.",
		name: "Thandi Mkhize",
		role: "Graphic Designer, Cape Town",
		initials: "TM",
	},
	{
		quote:
			"As a freelance developer, I needed something that handles multi-currency without the Xero price tag. SoloPay nails it.",
		name: "James van der Merwe",
		role: "Software Developer, Johannesburg",
		initials: "JV",
	},
	{
		quote:
			"I finally feel in control of my finances. The bank integration means everything reconciles automatically. Game changer.",
		name: "Nomsa Dlamini",
		role: "Content Strategist, Durban",
		initials: "ND",
	},
];

export function Testimonials() {
	return (
		<section id="testimonials" className="px-6 py-20 md:py-28">
			<div className="mx-auto max-w-6xl">
				<div className="text-center">
					<p className="text-xs font-medium uppercase tracking-widest text-accent">Testimonials</p>
					<h2 className="mt-3 font-serif text-3xl font-medium tracking-tight text-foreground md:text-4xl">
						<span className="text-balance">Loved by freelancers across South Africa</span>
					</h2>
				</div>

				<div className="mt-16 grid gap-6 md:grid-cols-3">
					{testimonials.map((t) => (
						<div key={t.name} className="flex flex-col rounded-xl border border-border bg-card p-6">
							<blockquote className="flex-1 text-sm leading-relaxed text-muted-foreground">
								&ldquo;{t.quote}&rdquo;
							</blockquote>
							<div className="mt-6 flex items-center gap-3">
								<div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary">
									<span className="text-xs font-semibold text-primary-foreground">
										{t.initials}
									</span>
								</div>
								<div>
									<p className="text-sm font-medium text-foreground">{t.name}</p>
									<p className="text-xs text-muted-foreground">{t.role}</p>
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
