import { NextResponse } from "next/server";

import { getHealthReport } from "@/lib/health";

export const runtime = "nodejs";

export function GET() {
	return NextResponse.json(getHealthReport(), {
		headers: {
			"cache-control": "no-store",
		},
	});
}
