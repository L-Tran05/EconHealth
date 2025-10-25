package com.example.agent;


/**
 * IntakeAgent:
 * - Takes the raw user crisis message.
 * - Classifies: "financial" vs "medical".
 * - Extracts summary and any urgent red flags.
 *
 * Right now it's rule-based so you can run this with no API.
 */
public class IntakeAgent {

    public static class IntakeResult {
        public String crisisType;        // "financial" or "medical"
        public String concernSummary;    // short summary of what they said
        public String redFlags;          // "HIGH URGENCY" or "none detected"
    }

    public IntakeResult classifyMessage(String userMessage) {
        String lower = userMessage.toLowerCase();

        IntakeResult result = new IntakeResult();

        // super simple keyword detection
        if (lower.contains("bill")
                || lower.contains("pay")
                || lower.contains("money")
                || lower.contains("afford")
                || lower.contains("insurance")
                || lower.contains("copay")
                || lower.contains("co-pay")
                || lower.contains("collection")
                || lower.contains("collections")) {

            result.crisisType = "financial";
        } else {
            result.crisisType = "medical";
        }

        // use first ~120 chars as summary
        String shortSummary = userMessage.trim();
        if (shortSummary.length() > 120) {
            shortSummary = shortSummary.substring(0, 117) + "...";
        }
        result.concernSummary = shortSummary;

        // quick "danger" detection
        if (lower.contains("can't breathe")
                || lower.contains("cant breathe")
                || lower.contains("chest pain")
                || lower.contains("bleeding a lot")
                || lower.contains("eviction")
                || lower.contains("i'm gonna lose housing")
                || lower.contains("im gonna lose housing")) {

            result.redFlags = "HIGH URGENCY";
        } else {
            result.redFlags = "none detected";
        }

        return result;
    }
}
