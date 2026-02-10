"use client";

import { Menu, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

import { Button } from "@/components/ui/button";

export function Navbar() {
	const [mobileOpen, setMobileOpen] = useState(false);

	return (
		<header className="sticky top-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur-md">
			<nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
				<Link href="/" className="flex items-center gap-2">
					<div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary">
						<span className="text-sm font-bold text-primary-foreground">S</span>
					</div>
					<span className="font-serif text-xl font-semibold tracking-tight text-foreground">
						SoloPay
					</span>
				</Link>

				<div className="hidden items-center gap-8 md:flex">
					<Link
						href="#features"
						className="text-sm text-muted-foreground transition-colors hover:text-foreground"
					>
						Features
					</Link>
					<Link
						href="#pricing"
						className="text-sm text-muted-foreground transition-colors hover:text-foreground"
					>
						Pricing
					</Link>
					<Link
						href="#testimonials"
						className="text-sm text-muted-foreground transition-colors hover:text-foreground"
					>
						Testimonials
					</Link>
					<Link
						href="#faq"
						className="text-sm text-muted-foreground transition-colors hover:text-foreground"
					>
						FAQ
					</Link>
				</div>

				<div className="hidden items-center gap-3 md:flex">
					<Button variant="ghost" size="sm" asChild>
						<Link href="#" className="text-foreground">
							Log in
						</Link>
					</Button>
					<Button size="sm" className="bg-accent text-accent-foreground hover:bg-accent/90" asChild>
						<Link href="#">Start free trial</Link>
					</Button>
				</div>

				<button
					type="button"
					onClick={() => setMobileOpen((open) => !open)}
					className="md:hidden"
					aria-label={mobileOpen ? "Close menu" : "Open menu"}
				>
					{mobileOpen ? (
						<X className="h-5 w-5 text-foreground" />
					) : (
						<Menu className="h-5 w-5 text-foreground" />
					)}
				</button>
			</nav>

			{mobileOpen && (
				<div className="border-t border-border/60 bg-background px-6 pb-6 pt-4 md:hidden">
					<div className="flex flex-col gap-4">
						<Link
							href="#features"
							className="text-sm text-muted-foreground"
							onClick={() => setMobileOpen(false)}
						>
							Features
						</Link>
						<Link
							href="#pricing"
							className="text-sm text-muted-foreground"
							onClick={() => setMobileOpen(false)}
						>
							Pricing
						</Link>
						<Link
							href="#testimonials"
							className="text-sm text-muted-foreground"
							onClick={() => setMobileOpen(false)}
						>
							Testimonials
						</Link>
						<Link
							href="#faq"
							className="text-sm text-muted-foreground"
							onClick={() => setMobileOpen(false)}
						>
							FAQ
						</Link>
						<div className="flex flex-col gap-2 pt-2">
							<Button variant="outline" size="sm" asChild>
								<Link href="#">Log in</Link>
							</Button>
							<Button
								size="sm"
								className="bg-accent text-accent-foreground hover:bg-accent/90"
								asChild
							>
								<Link href="#">Start free trial</Link>
							</Button>
						</div>
					</div>
				</div>
			)}
		</header>
	);
}
