export type HealthStatus = "ok" | "degraded";

export type HealthCheck = {
	key: string;
	label: string;
	status: HealthStatus;
	message: string;
};

export type HealthReport = {
	status: HealthStatus;
	updatedAt: string;
	checks: HealthCheck[];
};

function isNonEmptyString(value: unknown): value is string {
	return typeof value === "string" && value.trim().length > 0;
}

export function getHealthReport(): HealthReport {
	const updatedAt = new Date().toISOString();

	const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
	const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

	const supabaseConfigured = isNonEmptyString(supabaseUrl) && isNonEmptyString(supabaseAnonKey);

	const checks: HealthCheck[] = [
		{
			key: "app",
			label: "Web app",
			status: "ok",
			message: "Operational",
		},
		{
			key: "runtime",
			label: "Runtime",
			status: "ok",
			message: `Uptime: ${Math.floor(process.uptime())}s`,
		},
		{
			key: "supabase",
			label: "Supabase configuration",
			status: supabaseConfigured ? "ok" : "degraded",
			message: supabaseConfigured
				? "Configured"
				: "Missing NEXT_PUBLIC_SUPABASE_URL or NEXT_PUBLIC_SUPABASE_ANON_KEY",
		},
	];

	const overallStatus: HealthStatus = checks.some((c) => c.status !== "ok") ? "degraded" : "ok";

	return {
		status: overallStatus,
		updatedAt,
		checks,
	};
}
