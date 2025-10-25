package com.example.agent;


/**
 * FinancialAgent:
 * - Pretends to look up billing info for the patient.
 * - Suggests a next step (like a payment plan).
 *
 * Right now it's fully mocked so you don't need a database yet.
 */
public class FinancialAgent {

    public static class FinancialResult {
        public String patientName;
        public String serviceDesc;
        public double amountDue;
        public String status;
        public String insuranceStatus;
        public String proposedOption;
        public String noteForStaff;
    }

    public FinancialResult analyzeFinancialConcern(
            IntakeAgent.IntakeResult intakeResult
    ) {
        FinancialResult fin = new FinancialResult();

        // Mocked "example patient"
        fin.patientName = "Jane Doe";
        fin.serviceDesc = "ER visit - imaging (10/20)";
        fin.amountDue = 220.00;
        fin.status = "unpaid";
        fin.insuranceStatus = "Partially covered";

        // demo rule: if > $200, propose payment plan
        fin.proposedOption = "Offer 4-month payment plan of $55/month";
        fin.noteForStaff = "Patient is overwhelmed by cost and worried about collections.";

        return fin;
    }
}
