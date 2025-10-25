package com.example.agent;


/**
 * EscalationAgent:
 * - Takes intake triage + financial suggestion.
 * - Produces 2 things:
 *   1) staffSummary (for clinic/billing staff)
 *   2) patientMessage (reassuring, next steps)
 */
public class EscalationAgent {

    public static class EscalationPacket {
        public String staffSummary;
        public String patientMessage;
    }

    public EscalationPacket buildEscalationPacket(
            IntakeAgent.IntakeResult intake,
            FinancialAgent.FinancialResult fin
    ) {
        EscalationPacket packet = new EscalationPacket();

        // Staff summary (concise, factual)
        StringBuilder sbStaff = new StringBuilder();
        sbStaff.append("PATIENT: ").append(fin.patientName).append("\n");
        sbStaff.append("ISSUE: ").append(intake.concernSummary).append("\n");
        sbStaff.append("BILL: $").append(fin.amountDue)
               .append(" for ").append(fin.serviceDesc).append("\n");
        sbStaff.append("INSURANCE: ").append(fin.insuranceStatus).append("\n");
        sbStaff.append("SUGGESTED ACTION: ").append(fin.proposedOption).append("\n");
        sbStaff.append("RED FLAGS: ").append(intake.redFlags).append("\n");
        packet.staffSummary = sbStaff.toString();

        // Patient-facing message (supportive tone)
        StringBuilder sbPatient = new StringBuilder();
        sbPatient.append("Hi ").append(fin.patientName).append(",\n\n");
        sbPatient.append("I see you're stressed about a $").append(fin.amountDue)
                 .append(" charge from your recent visit (")
                 .append(fin.serviceDesc).append(").\n\n");
        sbPatient.append("You do NOT have to pay this all at once today.\n");
        sbPatient.append("We can set up a payment plan around $55/month so it's more manageable.\n\n");
        sbPatient.append("Would you like me to start that request for you?\n");
        sbPatient.append("You're not in trouble and we're here to help.\n");
        packet.patientMessage = sbPatient.toString();

        return packet;
    }
}
