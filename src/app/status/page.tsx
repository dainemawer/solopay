import type { Metadata } from "next";

import { getHealthReport } from "@/lib/health";

export const metadata: Metadata = {
	title: "Status | SoloPay",
	description: "SoloPay service status and health checks.",
};

function StatusPill({ status }: { status: "ok" | "degraded" }) {
	if (status === "ok") {
		return (
			<span className="inline-flex items-center gap-2 rounded-full bg-accent/10 px-3 py-1 text-xs font-medium text-accent">
				<span className="h-2 w-2 rounded-full bg-accent" />
				All systems operational
			</span>
		);
	}

	return (
		<span className="inline-flex items-center gap-2 rounded-full bg-destructive/10 px-3 py-1 text-xs font-medium text-destructive">
			<span className="h-2 w-2 rounded-full bg-destructive" />
			Degraded performance
		</span>
	);
}

function CheckPill({ status }: { status: "ok" | "degraded" }) {
	if (status === "ok") {
		return (
			<span className="rounded-full bg-accent/10 px-2.5 py-0.5 text-xs font-medium text-accent">
				OK
			</span>
		);
	}

	return (
		<span className="rounded-full bg-destructive/10 px-2.5 py-0.5 text-xs font-medium text-destructive">
			Degraded
		</span>
	);
}

export default function StatusPage() {
	const report = getHealthReport();

	return (
		<main className="px-6 py-16 md:py-24">
			<div className="mx-auto w-full max-w-4xl">
				<div className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-center">
					<div>
						<h1 className="font-serif text-3xl font-medium tracking-tight text-foreground md:text-4xl">
							Status
						</h1>
						<p className="mt-2 text-sm leading-relaxed text-muted-foreground">
							Current service health for SoloPay.
						</p>
					</div>
					<StatusPill status={report.status} />
				</div>

				<section className="mt-10 rounded-xl border border-border bg-card p-6 md:p-8">
					<div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
						<p className="text-sm font-medium text-foreground">Health checks</p>
						<p className="text-xs text-muted-foreground">
							Last updated: <time dateTime={report.updatedAt}>{report.updatedAt}</time>
						</p>
					</div>

					<div className="mt-6 divide-y divide-border">
						{report.checks.map((check) => (
							<div key={check.key} className="flex flex-col gap-2 py-4 md:flex-row md:items-start">
								<div className="flex flex-1 items-start justify-between gap-3">
									<p className="text-sm font-medium text-foreground">{check.label}</p>
									<CheckPill status={check.status} />
								</div>
								<p className="text-sm text-muted-foreground md:w-[55%]">{check.message}</p>
							</div>
						))}
					</div>
				</section>

				<section className="mt-8 rounded-xl border border-border bg-card p-6 md:p-8">
					<h2 className="text-sm font-medium text-foreground">API</h2>
					<p className="mt-2 text-sm leading-relaxed text-muted-foreground">
						For automated monitoring, query{" "}
						<code className="rounded bg-muted px-1.5 py-0.5 font-mono text-xs">/api/health</code>{" "}
						for a JSON health report.
					</p>
				</section>
			</div>
		</main>
	);
}
