//package main.java.com.example.agent;
package com.example.agent;

import java.util.Scanner;


/**
 * AgentCliRunner:
 * - Simulates an incoming crisis message from a patient.
 * - Runs all 3 agents:
 *    1) IntakeAgent → classify/triage
 *    2) FinancialAgent → suggest plan
 *    3) EscalationAgent → generate staff + patient messages
 *
 * This is the class we will run with Maven.
 */
public class AgentCliRunner {

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        IntakeAgent intakeAgent = new IntakeAgent();
        FinancialAgent financialAgent = new FinancialAgent();
        EscalationAgent escalationAgent = new EscalationAgent();

        System.out.println("Patient says:");
        String userMsg = scanner.nextLine();

        // 1. Intake
        IntakeAgent.IntakeResult intakeResult = intakeAgent.classifyMessage(userMsg);
        System.out.println("\n[IntakeAgent Output]");
        System.out.println("{");
        System.out.println("  crisisType: " + intakeResult.crisisType);
        System.out.println("  concernSummary: " + intakeResult.concernSummary);
        System.out.println("  redFlags: " + intakeResult.redFlags);
        System.out.println("}");

        // 2. Financial
        FinancialAgent.FinancialResult finResult =
                financialAgent.analyzeFinancialConcern(intakeResult);
        System.out.println("\n[FinancialAgent Output]");
        System.out.println("{");
        System.out.println("  patientName: " + finResult.patientName);
        System.out.println("  serviceDesc: " + finResult.serviceDesc);
        System.out.println("  amountDue: " + finResult.amountDue);
        System.out.println("  insuranceStatus: " + finResult.insuranceStatus);
        System.out.println("  proposedOption: " + finResult.proposedOption);
        System.out.println("  noteForStaff: " + finResult.noteForStaff);
        System.out.println("}");

        // 3. Escalation
        EscalationAgent.EscalationPacket packet =
                escalationAgent.buildEscalationPacket(intakeResult, finResult);

        System.out.println("\n[EscalationAgent Staff Summary]");
        System.out.println(packet.staffSummary);

        System.out.println("\n[EscalationAgent Patient Message]");
        System.out.println(packet.patientMessage);

        scanner.close();
    }
}
