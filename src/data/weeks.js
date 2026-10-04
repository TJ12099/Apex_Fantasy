/**
 * Weekly briefing copy for the Nexus Business Solutions Digital Operations Improvement Project.
 * Highlighting is controlled by CURRENT_WEEK in src/config.js.
 * Progress is worked out from the week number, so the final presentation reads 100%.
 */

import { TOTAL_WEEKS } from '../config';
import ganttChart from '../assets/charts/gantt.jpg';
import pertChart from '../assets/charts/pert.jpg';
import wbsChart from '../assets/charts/wbs.jpg';

const briefings = [
  {
    week: 1,
    phase: 'Onboarding & Foundation',
    title: 'Meet Apex and Nexus',
    about:
      'Apex Business Solutions introduces Nexus Business Solutions, the simulated host organisation for our Work Integrated Learning project, and the business challenge we have been asked to investigate.',
    summary: [
      'Nexus Business Solutions (Pty) Ltd is a simulated business-services organisation that manages clients, sales opportunities, projects, administration and business information.',
      'At the initial engagement on 21 July 2026, stakeholders raised fragmented information, manual follow-ups, repetitive admin work and limited visibility of sales opportunities.',
      'The five-person Apex team completed onboarding, the Professional Conduct in the Workplace Programme and personal SMART goals.',
    ],
    objectives: [
      'Introduce the Apex team, our roles and the simulated Nexus stakeholders.',
      'Explain the preliminary business challenges raised at the initial engagement.',
      'Share our onboarding progress, SMART goals and agreed ways of working.',
    ],
    progressNote:
      'Onboarding is complete. The team, stakeholders, communication channels and areas for investigation are confirmed, so formal project planning can begin.',
    concepts: [
      {
        title: 'Work Integrated Learning',
        detail:
          'A module where we apply what we have learnt across our degree to a workplace problem, here through a simulated organisation.',
      },
      {
        title: 'Initial engagement',
        detail:
          'Our first meeting with the Nexus stakeholders and our WIL supervisor, where we agreed the project context, communication channels and next steps.',
      },
      {
        title: 'SMART goals',
        detail:
          'Personal goals that are specific, measurable, achievable, relevant and time-bound, linked to the module outcomes.',
      },
    ],
    nextWeek:
      'Week 2 presents the Project Charter: the problem statement, objectives, scope and expected deliverables.',
  },
  {
    week: 2,
    phase: 'Project Planning',
    title: 'The Project Charter',
    about:
      'This presentation sets out the Project Charter for the Nexus Business Solutions Digital Operations Improvement Project: the problem we are solving, what we aim to achieve and what we will hand over.',
    summary: [
      'Problem: Nexus manages client, sales and administrative information in a fragmented, largely manual way, which duplicates work and slows down decisions.',
      'Objectives: analyse business processes, prioritise automation opportunities and investigate AI-assisted business support.',
      'Scope covers analysis, requirements and recommendations only. Software development, deployment, system integration and data migration are out of scope.',
    ],
    objectives: [
      'Present a clear problem statement based on the initial engagement.',
      'Set SMART project objectives and agree what is in and out of scope.',
      'List the deliverables Apex will produce for Nexus and for the module.',
    ],
    progressNote:
      'The Project Charter defines the problem, objectives, scope and deliverables, giving the team an agreed baseline for detailed planning.',
    concepts: [
      {
        title: 'Project Charter',
        detail:
          "The document that defines the project's background, problem, objectives, scope, assumptions, constraints and expected outcomes.",
      },
      {
        title: 'Business-first approach',
        detail:
          'Technology is only recommended once it is backed by a clear understanding of business needs, processes and requirements.',
      },
      {
        title: 'Project scope',
        detail:
          'The line between what we will do (analysis, requirements and recommendations) and what we will not (building or deploying software).',
      },
    ],
    nextWeek:
      'Week 3 covers stakeholder analysis, the Work Breakdown Structure, the project schedule and the communication plan.',
  },
  {
    week: 3,
    phase: 'Project Planning',
    title: 'Stakeholders, WBS and Schedule',
    about:
      'This presentation shows who the project affects, how the work is broken down, when it will happen and how we will keep everyone informed.',
    summary: [
      'Key Nexus stakeholders are Sarah Mokoena (Managing Director and sponsor), Daniel Naidoo (Operations), Lerato Maseko (Client Services & Sales) and Kabelo Dlamini (Finance & Administration).',
      'The Work Breakdown Structure splits the project into onboarding, planning and analysis, solution recommendation and closure.',
      'The Gantt chart schedules the work from July until project closure by 6 November 2026, and the communication plan sets our channels and meeting rhythm.',
    ],
    objectives: [
      "Analyse each stakeholder's influence on and interest in the project.",
      'Break the project down into manageable work packages and tasks.',
      'Show the project schedule and how we will communicate with stakeholders.',
    ],
    progressNote:
      'Stakeholders, work packages, the timeline and the communication approach are defined.',
    concepts: [
      {
        title: 'Stakeholder analysis',
        detail:
          "Mapping each stakeholder's influence and interest, so we know who to manage closely and who to keep informed.",
      },
      {
        title: 'Work Breakdown Structure',
        detail: 'A structured breakdown of the project into phases, work packages and tasks.',
      },
      {
        title: 'Communication plan',
        detail:
          'Email for formal communication, Microsoft Teams for meetings, a shared repository for documents, and a weekly team meeting on Tuesdays.',
      },
    ],
    nextWeek:
      'Week 4 presents the Risk Management Plan, the RACI matrix, supervisor feedback and the finalised project plan.',
  },
  {
    week: 4,
    phase: 'Project Planning',
    title: 'Risks, RACI and Plan Approval',
    about:
      'This presentation closes the planning phase: the risks that could affect the project, who is responsible for what, and the feedback that shapes the final project plan.',
    summary: [
      'The Risk Management Plan logs the main project risks with their impact and planned responses.',
      'The RACI matrix shows who is Responsible, Accountable, Consulted and Informed for each key task.',
      'We present the plan to our WIL supervisor, Nobhule Moyo, and incorporate her feedback to finalise it.',
    ],
    objectives: [
      'Identify the main project risks and how we will reduce them.',
      'Show clear roles and accountability through the RACI matrix.',
      'Present supervisor feedback and the finalised project plan.',
    ],
    progressNote:
      'Planning is complete. The finalised project plan becomes the foundation for the business analysis phase.',
    concepts: [
      {
        title: 'Risk Management Plan',
        detail: 'A log of what could go wrong, how likely and serious it is, and the planned response.',
      },
      {
        title: 'RACI matrix',
        detail:
          'Responsible, Accountable, Consulted and Informed: a table that makes ownership of every task clear.',
      },
      {
        title: 'Plan approval',
        detail:
          'Validation of the project plan by the academic supervisor, which is the approval evidence required for Task 2.',
      },
    ],
    nextWeek:
      'Week 5 starts the business analysis with an organisation snapshot, the selected business process, a stakeholder overview and a SWOT analysis.',
  },
  {
    week: 5,
    phase: 'Business Analysis',
    title: 'Organisation Snapshot and SWOT',
    about:
      'The business analysis phase begins. We profile Nexus Business Solutions, confirm the one business process we will focus on and analyse where the organisation stands.',
    summary: [
      'The organisation snapshot profiles Nexus, its sector, the process in scope and the value that process delivers.',
      'One process is selected from the areas raised at engagement, such as client management and sales opportunity tracking, and its boundaries are confirmed with our supervisor.',
      "A SWOT analysis summarises Nexus's strengths, weaknesses, opportunities and threats, with a short interpretation.",
    ],
    objectives: [
      'Present a one-page snapshot of Nexus Business Solutions.',
      'Confirm the business process in scope and its boundaries.',
      'Interpret the SWOT analysis and what it means for the project.',
    ],
    progressNote:
      'The organisation and the process in scope are defined, giving the analysis a clear focus.',
    concepts: [
      {
        title: 'Organisation snapshot',
        detail:
          'A short profile covering the organisation, its sector, the process in scope and the stakeholders involved.',
      },
      {
        title: 'Process selection',
        detail:
          'Focusing on one well-bounded process keeps the analysis deep enough to be useful within the project timeframe.',
      },
      {
        title: 'SWOT analysis',
        detail:
          'Strengths, Weaknesses, Opportunities and Threats: a quick framework for seeing where the organisation stands.',
      },
    ],
    nextWeek: 'Week 6 maps the current (As-Is) process and discusses its key issues and gaps.',
  },
  {
    week: 6,
    phase: 'Business Analysis',
    title: 'The As-Is Process',
    about:
      'This presentation maps how the selected process works at Nexus today and highlights where it breaks down.',
    summary: [
      'A Level 1 flowchart shows each step of the current process, who performs it and where information moves.',
      'The issue and gap log records the top five to eight problems, such as duplicated information, manual follow-ups and delays in reaching the information needed for decisions.',
      'Each gap is linked to its business impact so it can be turned into requirements.',
    ],
    objectives: [
      'Walk through the As-Is process step by step.',
      'Present the key issues and gaps in the current process.',
      'Show how each gap affects the business.',
    ],
    progressNote: 'The current process and its main problems are documented.',
    concepts: [
      {
        title: 'As-Is process',
        detail: 'A model of how the process works today, before any change is made.',
      },
      {
        title: 'Flowchart / BPMN Level 1',
        detail: 'A simple, high-level diagram of the process steps, roles and decisions.',
      },
      {
        title: 'Gap analysis',
        detail:
          'Comparing how things work now with how they should work, to find what needs to change.',
      },
    ],
    nextWeek: 'Week 7 turns the gaps into initial business requirements and prioritises them.',
  },
  {
    week: 7,
    phase: 'Business Analysis',
    title: 'Initial Business Requirements',
    about:
      'This presentation translates the gaps into a prioritised list of what an improved process and solution must do.',
    summary: [
      'Eight to twelve initial requirements are drafted from the issue and gap log.',
      'They mix functional requirements with key non-functional ones such as security, performance and usability.',
      'Each requirement is prioritised using MoSCoW, with acceptance hints for the top items.',
    ],
    objectives: [
      'Present the initial functional and non-functional requirements.',
      'Explain how the requirements were prioritised.',
      'Show how the top requirements will be checked.',
    ],
    progressNote: 'Requirements are drafted and prioritised, ready to guide the solution options.',
    concepts: [
      {
        title: 'Functional requirements',
        detail:
          'What the solution must do, for example capture, track or report on client and sales information.',
      },
      {
        title: 'Non-functional requirements',
        detail:
          'How well the solution must work: security, performance, usability and compliance with POPIA.',
      },
      {
        title: 'MoSCoW prioritisation',
        detail: "Must have, Should have, Could have and Won't have (this time).",
      },
    ],
    nextWeek:
      'Week 8 presents the Nexus Project Plan: the Work Breakdown Structure, Gantt chart, PERT network and critical path, key risks and feasibility.',
  },
  {
    week: 8,
    phase: 'Project Planning',
    title: 'The Nexus Project Plan',
    about:
      'This presentation turns the Nexus project context into a complete Project Plan, moving from what the project is to how we will deliver it: the work breakdown, schedule, critical path, risks and feasibility.',
    summary: [
      'Nexus information, project and communication activities are spread across platforms and manual processes. Our response is a structured improvement plan and an assessment of a conceptual AI-Assisted Client Intelligence Dashboard.',
      'The Work Breakdown Structure splits the work into six phases (Initiation, Planning, Schedule Analysis, Risk Management, Feasibility and Finalisation) and 24 work packages.',
      'The Gantt chart schedules those tasks over 19 working days, from 7 September to 2 October 2026, and the PERT network uses (O + 4M + P) / 6 to confirm the critical path.',
      'Seven key risks are managed through proactive, detective, responsive and reactive measures, and the feasibility study confirms the hardware, software and person-time effort needed.',
    ],
    objectives: [
      'Show how the project is broken down into phases and work packages.',
      'Present the schedule, PERT estimates and critical path.',
      'Explain the key risks and how we will respond to them.',
      'Confirm the technical and economic feasibility of the plan.',
    ],
    progressNote:
      'The Project Plan is complete. Scope, WBS, Gantt, PERT, critical path, risks and feasibility now connect in one coherent plan for the rest of the project.',
    concepts: [
      {
        title: 'Work Breakdown Structure',
        detail:
          'The bridge from what the project is to how we will execute it: six phases broken down into 24 numbered work packages.',
      },
      {
        title: 'PERT and the critical path',
        detail:
          'Optimistic, most-likely and pessimistic estimates give each task an expected time. The critical path is the chain of dependent tasks that sets the 19-day finish.',
      },
      {
        title: 'Risk response structure',
        detail:
          'Proactive steps prevent risks, detective measures spot early warning signs, responsive actions deal with a risk when it occurs, and reactive measures limit the impact afterwards.',
      },
    ],
    charts: [
      {
        title: 'Work Breakdown Structure',
        caption: 'Six phases and 24 work packages, from Initiation to Finalisation.',
        src: wbsChart,
      },
      {
        title: 'Project schedule (Gantt)',
        caption: '19 working days, 7 September to 2 October 2026, with the critical path highlighted.',
        src: ganttChart,
      },
      {
        title: 'PERT network and critical path',
        caption: 'Three-point estimates for every task, using TE = (O + 4M + P) / 6.',
        src: pertChart,
      },
    ],
    nextWeek:
      'Week 9 presents the complete draft of the Project Report, with all documentation ready for review.',
  },
  {
    week: 9,
    phase: 'Finalisation',
    title: 'Project Report Draft',
    about:
      'This presentation walks through the complete draft of the Project Report and confirms that all documentation is ready for review.',
    summary: [
      'The 6 to 10 page report brings together the organisation snapshot, SWOT, As-Is process, gap log, requirements, solution options and mini-RFC evidence.',
      'Each team member completes an Individual Contribution Statement and a reflective report.',
      'The team reviews the full Portfolio of Evidence for quality and completeness before submission.',
    ],
    objectives: [
      'Present the structure and key findings of the draft Project Report.',
      'Confirm that every required document is complete.',
      'Agree final corrections before submission.',
    ],
    progressNote:
      'All analysis is complete and documented in draft. Only the final review and compilation remain.',
    concepts: [
      {
        title: 'Project Report',
        detail:
          'The consolidated group report covering the organisation context, analysis, requirements and recommendation.',
      },
      {
        title: 'Individual Contribution Statement',
        detail: "Each student's record of their roles, the artefacts they produced and the hours they contributed.",
      },
      {
        title: 'Quality review',
        detail: 'A final check of consistency, accuracy and formatting across all documents.',
      },
    ],
    nextWeek: 'Week 10 is the final submission of our Portfolio of Evidence.',
  },
  {
    week: 10,
    phase: 'Project Closure',
    title: 'Final Portfolio of Evidence',
    about:
      'This presentation marks the submission of our final Portfolio of Evidence and summarises the project from onboarding to recommendation.',
    summary: [
      'The final Portfolio of Evidence is submitted, including the Task 1 onboarding evidence, the Task 2 project plan and the Project Report.',
      'The team looks back on the journey from the initial engagement to the recommended solution.',
      'Our reflections capture what we learnt about teamwork, professional conduct and business analysis.',
    ],
    objectives: [
      'Confirm submission of the complete Portfolio of Evidence.',
      "Summarise the project's key findings and recommendation.",
      'Share lessons learnt and next steps.',
    ],
    progressNote: 'The Portfolio of Evidence is submitted and the project is complete.',
    concepts: [
      {
        title: 'Portfolio of Evidence',
        detail: 'The collection of documents, analysis and reflections that shows what we did and learnt.',
      },
      {
        title: 'Reflection',
        detail: 'Looking back on our learning, challenges, teamwork and professional growth.',
      },
      {
        title: 'Project closure',
        detail: 'Final review, supervisor feedback and administrative completion by 6 November 2026.',
      },
    ],
    nextWeek:
      'After submission, the lecturer gives feedback in Week 11 for final improvements, and in Week 13 we deliver the final presentation to the lecturer and mentor.',
  },
];

export const weeks = briefings.map((item) => ({
  ...item,
  progress: Math.round((item.week / TOTAL_WEEKS) * 100),
}));

export function getWeek(weekNumber) {
  return weeks.find((item) => item.week === weekNumber);
}

export function getWeekStatus(weekNumber, currentWeek) {
  if (weekNumber < currentWeek) return 'complete';
  if (weekNumber === currentWeek) return 'current';
  return 'upcoming';
}
