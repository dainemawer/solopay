export function LogoBar() {
	const logos = [
		"Freelancer.co.za",
		"Cape Creative",
		"JHB Digital",
		"StartupSA",
		"DesignCape",
		"Durban Dev Co.",
	];

	return (
		<section className="border-y border-border/60 py-10">
			<div className="mx-auto max-w-6xl px-6">
				<p className="text-center text-xs font-medium uppercase tracking-widest text-muted-foreground">
					Trusted by 2,000+ South African freelancers
				</p>
				<div className="mt-8 flex flex-wrap items-center justify-center gap-x-10 gap-y-4">
					{logos.map((name) => (
						<span
							key={name}
							className="font-serif text-base font-medium text-muted-foreground/60 md:text-lg"
						>
							{name}
						</span>
					))}
				</div>
			</div>
		</section>
	);
}
