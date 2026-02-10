import { ArrowRight } from "lucide-react";
import Link from "next/link";

import { Button } from "@/components/ui/button";

export function CTA() {
	return (
		<section className="px-6 py-20 md:py-28">
			<div className="mx-auto max-w-6xl">
				<div className="rounded-2xl bg-primary px-8 py-16 text-center md:px-16 md:py-20">
					<h2 className="mx-auto max-w-xl font-serif text-3xl font-medium tracking-tight text-primary-foreground md:text-4xl">
						<span className="text-balance">
							Spend less time on admin. More time doing what you love.
						</span>
					</h2>
					<p className="mx-auto mt-4 max-w-md text-base leading-relaxed text-primary-foreground/70">
						Join thousands of South African freelancers who&apos;ve simplified their bookkeeping
						with SoloPay.
					</p>
					<div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
						<Button
							size="lg"
							className="bg-accent px-8 text-accent-foreground hover:bg-accent/90"
							asChild
						>
							<Link href="#">
								Start your free trial
								<ArrowRight className="ml-2 h-4 w-4" />
							</Link>
						</Button>
					</div>
					<p className="mt-4 text-xs text-primary-foreground/50">
						Free 14-day trial. No credit card needed.
					</p>
				</div>
			</div>
		</section>
	);
}
