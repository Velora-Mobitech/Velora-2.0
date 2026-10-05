const GEMINI_API_KEY = import.meta.env.VITE_GEMINI_API_KEY;
const GEMINI_API_URL = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=${GEMINI_API_KEY}`;

export const getGeminiResponse = async (userMessage: string, conversationHistory: string[] = []): Promise<string> => {
  // Build context from conversation history
  const contextHistory = conversationHistory.length > 0 
    ? `\n\nConversation Context:\n${conversationHistory.slice(-6).join('\n')}\n\n` 
    : '';

  const systemPrompt = `You are Velora's AI Mobility Intelligence Assistant. You are an expert in corporate employee transportation, vendor contract economics, spatial telemetry reconciliation, and enterprise mobility diagnostics. You are objective, data-driven, professional, and clear.

🏢 COMPANY CONTEXT - VELORA:
- Velora is an independent, vendor-neutral intelligence and orchestration layer designed specifically for enterprise mobility and corporate shift transportation.
- Velora does NOT replace existing dispatcher or driver applications (e.g. MoveInSync, Safetrax, Routematic, Whistle). It sits as an auditable analytical layer above the existing stack.
- Core thesis: "Transportation isn't broken. It's unmeasured. Reporting tells you what happened. Intelligence tells you what to do next."
- Current Stage: Pre-validation, currently partnering with enterprise transport heads and workplace leaders as Design Partners.

🔬 THE FIVE INTELLIGENCE ENGINES:
1. **Cost Intelligence**: Benchmarks ₹/trip and ₹/seat-km across route corridors, reconciles GPS odometer actuals against invoiced lines, and detects billing anomalies.
2. **Utilization Intelligence**: Evaluates seat occupancy curves, identifies parallel corridors running under 35% capacity, flags dead kilometres, and optimizes vehicle sizes.
3. **Vendor Intelligence**: Calculates vendor effective true costs, measures gate arrival punctuality, and benchmarks cross-supplier SLA reliability.
4. **Failure Intelligence**: Quantifies unfulfilled bookings, driver no-shows, emergency spot-ride markups (2.5x–3x contractual tariffs), and compound failure economics.
5. **Sustainability Intelligence**: Audits CO₂/passenger-km, gate idling emissions, and models route-level EV feasibility for BRSR/CSRD Scope-3 compliance.

💡 THE FAILURE ECONOMICS FRAMEWORK:
- Effective True Cost = Contract Tariff + Compound Failure Burden.
- A failed trip costs far more than the replacement cab. We strictly separate Hard Monetary Costs (spot-ride surcharges, minimum guarantee bleed, invoice divergence) from Non-Monetized Risk (shift production delays, female safety compliance exposure, dispatcher firefighting hours).

📐 EXPLAINABILITY STANDARD:
- Every recommendation adheres to a 5-part anatomical standard: Actionable Directive, Observed Evidence, Explicit Assumptions, Realistic Constraints, and Expected Impact.

🛡️ PRE-VALIDATION PRINCIPLES:
- Never fabricate clients, synthetic logos, or guaranteed ROI.
- All benchmark figures are illustrative examples.
- Encourage users to explore the Diagnostic Estimator or apply for a Mobility Diagnostic.

${contextHistory}Current User Question: ${userMessage}

Provide a crisp, analytical, enterprise-grade response that directly answers the question with clear economic and operational reasoning. Keep responses concise and structured.`;

  // Check if we have an API key
  if (!GEMINI_API_KEY) {
    return "I'm currently running in offline analytical mode. I can help explain Velora's five intelligence modules (Cost, Utilization, Vendor, Failure, Sustainability), the Failure Economics framework, or how to get a Mobility Efficiency Diagnostic. What would you like to explore?";
  }

  try {
    const response = await fetch(GEMINI_API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        contents: [
          {
            parts: [
              {
                text: systemPrompt
              }
            ]
          }
        ],
        generationConfig: {
          temperature: 0.6,
          topK: 40,
          topP: 0.95,
          maxOutputTokens: 1024,
        },
      }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error('Gemini API Error Details:', {
        status: response.status,
        statusText: response.statusText,
        body: errorText,
      });
      throw new Error(`API Error: ${response.status}`);
    }

    const data = await response.json();
    if (data.candidates && data.candidates[0]?.content?.parts?.[0]?.text) {
      return data.candidates[0].content.parts[0].text;
    }
    throw new Error('Unexpected response format');
  } catch (error) {
    console.error('Gemini API Error:', error);
    
    // Fallback response based on topic
    if (userMessage.toLowerCase().includes('diagnostic') || userMessage.toLowerCase().includes('partner')) {
      return "Velora provides a non-intrusive **Mobility Efficiency Diagnostic** for enterprises. We audit anonymized historical GPS logs, vendor invoices, and shift rosters to isolate cost leakage, parallel corridor waste, and failure surcharges. Click **Get a Mobility Diagnostic** in the top navigation to connect with our research team.";
    } else if (userMessage.toLowerCase().includes('module') || userMessage.toLowerCase().includes('feature') || userMessage.toLowerCase().includes('intelligence')) {
      return "Velora deploys five specialized analytical engines:\n\n1. **Cost Intelligence**: ₹/trip, ₹/seat-km, and invoice anomaly detection\n2. **Utilization Intelligence**: Seat occupancy curves and route corridor consolidation\n3. **Vendor Intelligence**: Effective true cost benchmarking and gate punctuality\n4. **Failure Intelligence**: Driver no-shows and spot-ride surcharge economics\n5. **Sustainability Intelligence**: CO₂/passenger-km and BRSR Scope-3 compliance\n\nWhich module would you like to discuss?";
    } else {
      return "Velora is a vendor-neutral intelligence layer that reconciles telematics, vendor invoices, contracts, and shift rosters to identify where enterprise mobility is losing money. Ask me about our 5 Intelligence Engines, Failure Economics, or how to get a Mobility Diagnostic.";
    }
  }
};

export const isGeminiConfigured = (): boolean => {
  return !!GEMINI_API_KEY && GEMINI_API_KEY !== 'your-gemini-api-key-here';
};

export const getVeloraQuickResponse = (message: string): string | null => {
  const lower = message.toLowerCase();
  
  if (lower.includes('what is velora') || lower.includes('about velora') || lower.includes('who are you')) {
    return "Velora is an independent, vendor-neutral intelligence layer for enterprise mobility. We sit above existing ETMS tools, reconciling GPS telematics against invoiced lines, benchmarking vendor reliability, and uncovering cost leakage before it becomes expensive.";
  }
  
  if (lower.includes('failure economics') || lower.includes('failed trip') || lower.includes('failure cost')) {
    return "**The Failure Economics Framework**:\nA failed trip costs far more than the replacement cab.\n\n$$\\text{Effective True Cost} = \\text{Contract Tariff} + \\text{Compound Failure Burden}$$\n\n• **Hard Monetary Costs**: Spot-ride emergency surcharges (2.5x–3x contract tariffs), minimum guarantee retainers on idle cabs, and billing discrepancies.\n• **Non-Monetized Risk**: Production shift delays, female safety compliance exposure, and dispatcher firefighting hours.";
  }
  
  if (lower.includes('etms') || lower.includes('replace') || lower.includes('moveinsync') || lower.includes('safetrax')) {
    return "No, Velora does **not** replace your existing ETMS (MoveInSync, Safetrax, Routematic, Whistle) or dispatcher systems. Velora sits above your current stack as an auditable analytical layer, harmonizing GPS logs, vendor invoices, shift rosters, and ERP ledgers.";
  }

  if (lower.includes('diagnostic') || lower.includes('get started') || lower.includes('demo')) {
    return "You can request a non-intrusive **Mobility Efficiency Diagnostic** directly from the navigation bar. We run an offline audit on sample anonymized historical data under full NDA to identify implementable savings opportunities.";
  }
  
  return null;
};
