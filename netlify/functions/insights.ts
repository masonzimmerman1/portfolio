import Anthropic from "@anthropic-ai/sdk";

// Serverless function: generates a live "executive insight" from sample KPI data.
// The ANTHROPIC_API_KEY lives only in Netlify's environment — never in the browser.
// Runs on Netlify at /.netlify/functions/insights

// Fictional sample KPIs (mirrors the sanitized dashboard demo — no real company data).
const SAMPLE_KPIS = {
  quarter: "Q2 FY26",
  revenue: { value: 4_200_000, qoqChangePct: 8.5 },
  grossMarginPct: 61.2,
  employeeUtilizationPct: 78,
  topCustomerConcentrationPct: 34,
  cashRunwayMonths: 11,
  newBookings: { value: 1_350_000, qoqChangePct: -6 },
};

export default async (req: Request): Promise<Response> => {
  if (req.method !== "POST") {
    return json({ error: "Use POST." }, 405);
  }

  const apiKey = process.env.ANTHROPIC_API_KEY;
  if (!apiKey) {
    return json(
      { error: "Insights service not configured (missing ANTHROPIC_API_KEY)." },
      500,
    );
  }

  try {
    const anthropic = new Anthropic({ apiKey });

    const message = await anthropic.messages.create({
      model: "claude-haiku-4-5-20251001",
      max_tokens: 400,
      system:
        "You are an FP&A analyst writing a crisp executive briefing for company leadership. " +
        "Given a JSON of quarterly KPIs, write 2 short paragraphs: (1) the headline of business health, " +
        "(2) the single most important risk or opportunity and a concrete recommended action. " +
        "Be specific with the numbers. No preamble, no bullet points, plain English.",
      messages: [
        {
          role: "user",
          content: `Here are this quarter's KPIs as JSON:\n\n${JSON.stringify(
            SAMPLE_KPIS,
            null,
            2,
          )}\n\nWrite the executive insight.`,
        },
      ],
    });

    const insight = message.content
      .filter((b) => b.type === "text")
      .map((b) => (b as { text: string }).text)
      .join("\n\n");

    return json({ insight });
  } catch (err) {
    const msg = err instanceof Error ? err.message : "Unknown error.";
    return json({ error: `Claude API call failed: ${msg}` }, 502);
  }
};

function json(body: unknown, status = 200): Response {
  return new Response(JSON.stringify(body), {
    status,
    headers: { "Content-Type": "application/json" },
  });
}
