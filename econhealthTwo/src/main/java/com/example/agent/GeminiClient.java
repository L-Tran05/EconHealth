package com.example.agent;

 /**
 * GeminiClient is a thin wrapper around Gemini / ADK.
 *
 * In the hackathon version, we fake the responses so we can compile and run
 * without needing network calls yet.
 *
 * Later:
 *  - Store your Google API key in an env var
 *  - Actually call Gemini with an HTTP client / ADK SDK
 *  - Parse JSON back into Java objects
 */ 

public class GeminiClient {

    private final String apiKey;

    public GeminiClient(String apiKey) {
        this.apiKey = apiKey;
    }

    /**
     * Ask Gemini to analyze a crisis message and return structured info.
     * Expected JSON shape:
     * {
     *   "crisisType": "financial" | "medical",
     *   "summary": "short restatement",
     *   "urgency": "HIGH" | "LOW"
     * }
     *
     * Right now we mock the return so you can demo offline.
     */
    public CrisisAnalysis analyzeUserMessage(String userMessage) {
        // TODO: Replace this whole method with a real Gemini call.
        CrisisAnalysis ca = new CrisisAnalysis();

        String lower = userMessage.toLowerCase();
        if (lower.contains("bill") || lower.contains("pay") || lower.contains("afford")) {
            ca.crisisType = "financial";
        } else {
            ca.crisisType = "medical";
        }

        // naive summary
        if (userMessage.length() > 140) {
            ca.summary = userMessage.substring(0, 137) + "...";
        } else {
            ca.summary = userMessage;
        }

        if (lower.contains("can't breathe")
                || lower.contains("cant breathe")
                || lower.contains("chest pain")
                || lower.contains("eviction")
                || lower.contains("collections")
                || lower.contains("i'll lose housing")
                || lower.contains("losing housing")) {
            ca.urgency = "HIGH";
        } else {
            ca.urgency = "LOW";
        }

        return ca;
    }

    /**
     * Ask Gemini to draft language for staff and for patient, given structured info.
     * Returns both voices (clinical vs empathetic).
     *
     * Again mocked for now.
     */
    public DraftResponse draftEscalationCopy(
            String patientName,
            String summary,
            double amountDue,
            String serviceDesc,
            String paymentPlanOption,
            String urgencyFlag
    ) {
        // TODO: Replace this with a real Gemini call that does style control.
        DraftResponse dr = new DraftResponse();

        // staff voice = factual, concise
        dr.staffSummary =
                "PATIENT: " + patientName + "\n" +
                "ISSUE: " + summary + "\n" +
                "BILL: $" + amountDue + " for " + serviceDesc + "\n" +
                "SUGGESTED ACTION: " + paymentPlanOption + "\n" +
                "URGENCY: " + urgencyFlag + "\n";

        // patient voice = calm, reassuring
        dr.patientMessage =
                "Hi " + patientName + ",\n\n" +
                "I understand you're stressed about this $" + amountDue +
                " bill for " + serviceDesc + ". You are not expected to pay " +
                "all of this today.\n\n" +
                "We can request a plan like: " + paymentPlanOption + ". " +
                "This is here to help you, not punish you.\n\n" +
                "Would you like me to start that request for you?\n" +
                "You're not alone in this.\n";

        return dr;
    }

    /**
     * This is the structured object you get back from analyzeUserMessage().
     */
    public static class CrisisAnalysis {
        public String crisisType;  // "financial" or "medical"
        public String summary;     // short human summary
        public String urgency;     // "HIGH" or "LOW"
    }

    /**
     * This is the structured object you get back from draftEscalationCopy().
     */
    public static class DraftResponse {
        public String staffSummary;
        public String patientMessage;
    }
}