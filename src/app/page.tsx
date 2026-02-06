export default function Home() {
	return (
		<div className="min-h-screen bg-zinc-50 text-zinc-950 dark:bg-black dark:text-zinc-50">
			<main className="mx-auto flex w-full max-w-3xl flex-col gap-6 px-6 py-20">
				<header className="space-y-2">
					<p className="text-sm font-medium text-zinc-600 dark:text-zinc-400">SoloPay</p>
					<h1 className="text-balance text-4xl font-semibold tracking-tight">
						Payments, simplified.
					</h1>
					<p className="text-pretty text-base leading-7 text-zinc-600 dark:text-zinc-400">
						Next.js + TypeScript + Tailwind + Biome + Supabase.
					</p>
				</header>

				<section className="rounded-xl border border-zinc-200 bg-white p-5 dark:border-zinc-800 dark:bg-zinc-950">
					<h2 className="text-base font-semibold">Supabase</h2>
					<p className="mt-2 text-sm leading-6 text-zinc-600 dark:text-zinc-400">
						Add <code className="font-mono">NEXT_PUBLIC_SUPABASE_URL</code> and{" "}
						<code className="font-mono">NEXT_PUBLIC_SUPABASE_ANON_KEY</code> in{" "}
						<code className="font-mono">.env.local</code> (see{" "}
						<code className="font-mono">.env.example</code>).
					</p>
				</section>
			</main>
		</div>
	);
}
