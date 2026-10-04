import didintle from '../assets/team/Didi Avatar.png';
import lethabo from '../assets/team/Lethabo Avatar.png';
import michael from '../assets/team/Michael Avatar.png';
import tanja from '../assets/team/Tanja Avatar.png';
import tlhalefang from '../assets/team/Tlhalefang Avatar.png';

export const team = [
  {
    id: 'michael',
    name: 'Michael',
    roles: ['Project Manager', 'Verbal Presentation Lead'],
    image: michael,
    summary:
      'Michael leads Apex on the Nexus project. He coordinates the team, communicates with stakeholders and leads the spoken side of every presentation.',
    traits: [
      {
        label: 'Coordination',
        detail: 'Keeps the plan on track and makes the final call when the team cannot reach consensus.',
      },
      { label: 'Verbal lead', detail: 'Opens each presentation and talks the audience through the week.' },
    ],
  },
  {
    id: 'tanja',
    name: 'Tanja',
    roles: ['Main Business Analyst', 'Visual Presentation Lead'],
    image: tanja,
    summary:
      'Tanja analyses how Nexus works today and what it needs, and designs the visual side of every presentation, including this website.',
    traits: [
      {
        label: 'Analysis',
        detail: 'Gathers and analyses process information and business needs to support the recommendation.',
      },
      { label: 'Visual lead', detail: 'Designs the slides and presentation materials each week.' },
    ],
  },
  {
    id: 'tlhalefang',
    name: 'Tlhalefang',
    roles: ['Researcher', 'Visual Presentation Support'],
    image: tlhalefang,
    summary:
      'Tlhalefang researches the business context behind each week and helps turn it into clear visual presentation material.',
    traits: [
      { label: 'Research', detail: 'Gathers the supporting information the analysis stands on.' },
      { label: 'Visual support', detail: 'Helps prepare the slides and visual materials.' },
    ],
  },
  {
    id: 'lethabo',
    name: 'Lethabo',
    roles: ['Researcher'],
    image: lethabo,
    summary:
      "Lethabo researches and validates project information, so the team's findings are accurate and well supported.",
    traits: [
      { label: 'Research', detail: 'Carries out research and data gathering for the analysis.' },
      { label: 'Validation', detail: 'Checks project information against its sources.' },
    ],
  },
  {
    id: 'didintle',
    name: 'Didintle',
    roles: ['Secretary', 'Documentation Coordinator'],
    image: didintle,
    summary:
      "Didintle keeps the project's record: meeting minutes, documentation and administrative support.",
    traits: [
      { label: 'Minutes', detail: 'Records meetings, decisions and action items.' },
      { label: 'Documentation', detail: 'Maintains project documents and records in the shared repository.' },
    ],
  },
];
