import { CTA } from "@/components/landing/cta";
import { FAQ } from "@/components/landing/faq";
import { Features } from "@/components/landing/features";
import { Footer } from "@/components/landing/footer";
import { Hero } from "@/components/landing/hero";
import { LogoBar } from "@/components/landing/logo-bar";
import { Navbar } from "@/components/landing/navbar";
import { Pricing } from "@/components/landing/pricing";
import { Testimonials } from "@/components/landing/testimonials";

export default function Home() {
	return (
		<main>
			<Navbar />
			<Hero />
			<LogoBar />
			<Features />
			<Pricing />
			<Testimonials />
			<FAQ />
			<CTA />
			<Footer />
		</main>
	);
}
