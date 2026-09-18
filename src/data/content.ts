export const site = {
  name: "SESNAK LIMITED",
  shortName: "Sesnak",
  tagline: "Labour Hire for the Mining Industry",
  pillars: ["Labour Hire", "Boiler Making", "Automotive Mechanics", "Transport Logistics"],
  descriptor:
    "A Solwezi-based labour and technical services company supplying skilled workers, fabrication, vehicle repair, and controlled transport to North-Western Province's mining industry.",
  email: "sesnakltd@gmail.com",
  phones: ["+260 966 400 390", "+260 977 705 100"],
  address: {
    line1: "Solwezi Lodge, Room 2",
    line2: "Solwezi, North-Western Province",
    country: "Republic of Zambia",
  },
  year: "2026",
  profilePdf: {
    url: "/documents/Sesnak-Limited-Company-Profile-2026.pdf",
    filename: "Sesnak-Limited-Company-Profile-2026.pdf",
    label: "Company Profile 2026",
    sizeLabel: "PDF · 1 MB · 19 pages",
  },
};

export const nav = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Services", to: "/services" },
  { label: "Leadership", to: "/leadership" },
  { label: "Safety & Quality", to: "/safety" },
  { label: "Contact", to: "/contact" },
];

export type Pillar = {
  id: string;
  title: string;
  short: string;
  summary: string;
  icon: "users" | "flame" | "wrench" | "truck";
  points: string[];
  detail: string[];
};

export const pillars: Pillar[] = [
  {
    id: "labour-hire",
    title: "Labour Hire for the Mines",
    short: "Skilled, vetted workers deployed on time, every time.",
    icon: "users",
    summary:
      "The principal business of SESNAK LIMITED. We supply artisans, operators, drivers, general workers, and specialised trades to mines and mine-support contractors across North-Western Province, matched precisely to the trade ticket a client requisitions.",
    points: [
      "General workers, semi-skilled assistants, and coded tradespeople",
      "Welders, boiler makers, and automotive & plant mechanics",
      "Drivers and machine operators to the client's specified class",
      "Administrative and stores support where a contract requires it",
    ],
    detail: [
      "Mining is a twenty-four-hour industry. A labour partner that arrives late, sends the wrong trade, or ignores site rules is not a partner — it is a liability. SESNAK LIMITED is built to be dependable: the right people, with the right trade skill and the right safety discipline, on sites that cannot afford idle plant or empty shift lines.",
      "Every placement follows a disciplined seven-step cycle: the client issues a requisition with trade, numbers, duration and site rules; Human Resources searches the existing pool and recruits where needed; documents, references, and medical or induction requirements are verified; the Manager confirms logistics — reporting time, transport, tools and supervisor; the worker is deployed and introduced to site control; timekeeping, conduct and safety are monitored for the life of the placement; and the placement closes with a clear record, so the next call is answered faster.",
      "A person we place remains our employee. We do not treat the mine gate as the end of our responsibility — if there is a grievance, a safety concern, an injury, or a disciplinary issue, SESNAK LIMITED must be reachable, and must act.",
    ],
  },
  {
    id: "boiler-making",
    title: "Boiler Making",
    short: "Fabrication and plate work that holds under real conditions.",
    icon: "flame",
    summary:
      "Mines and contractors do not only need hands — they need metal that has been cut, rolled, welded and fitted correctly. Boiler making is a core competence, not a sideline, backing our labour hire with genuine workshop skill.",
    points: [
      "Plate marking, cutting, rolling and forming",
      "Welding of structural and plate assemblies",
      "Chutes, hoppers, guards, frames, brackets and platforms",
      "Shutdown-ready replacement sections and rapid site support",
    ],
    detail: [
      "Every job is judged by fit, strength, neatness of weld, and the safety of the finished item. A guard that does not guard, or a platform that flexes under a person, is not workmanship — it is a future incident.",
      "Boiler making depends on coded or competent welders, platers who can read a mark, and helpers who understand heat, clamp and grind. Work is managed on a job card with a material list, an inspection of the finished item, and a delivery note — the paperwork discipline that keeps tools accounted for and invoices undisputed.",
      "Our standard is simple to say and hard to fake: measure twice, cut once, weld to the procedure, inspect before release, and never send a piece the maker would refuse to stand under.",
    ],
  },
  {
    id: "automotive-mechanics",
    title: "Automotive Mechanics",
    short: "Vehicles that start, steer, stop, and carry a load safely.",
    icon: "wrench",
    summary:
      "Labour that cannot reach the gate is not labour. Materials that sit in town because a truck is down are not logistics. Our automotive section keeps light and commercial vehicles fit for the road and fit for the mine.",
    points: [
      "Scheduled service and diagnosis of running faults",
      "Brake, steering and safety-critical repairs",
      "Electrical fault-finding and worn service-item replacement",
      "Pre-despatch inspection before any vehicle is released to a driver",
    ],
    detail: [
      "A vehicle with defective brakes, dangerous steering, bald tyres on a mine road, failed lights at night, or a load restraint that cannot hold, will not be released — a rule that is not negotiable by a driver in a hurry or a client who wants it 'just for today'. The mechanic who signs a release is signing for other people's lives, and that decision is backed the whole way up the chain.",
      "We do not pretend to be a full original-equipment dealer for every brand on the road. We commit to honest diagnosis, safe release standards, and a clear report when a job is beyond the section and must go to a specialist.",
      "Every service and safety-critical repair is recorded against the vehicle — job cards, parts used, and the artisan's name — not left to memory that disappears when a supervisor changes.",
    ],
  },
  {
    id: "transport-logistics",
    title: "Transport Logistics",
    short: "Controlled, dispatched movement — never an informal lift.",
    icon: "truck",
    summary:
      "The planned movement of workers, tools, materials and authorised cargo so that labour hire and workshop jobs happen on time — a controlled service with a purpose, a vehicle, a driver, a time and a destination.",
    points: [
      "Crew transport between accommodation, reporting points and mine gates",
      "Movement of tools, consumables and fabricated items to site",
      "Collection and delivery of parts to keep labour and fleet productive",
      "Authorised support runs within Solwezi and connected mine corridors",
    ],
    detail: [
      "Dispatch answers five questions before the key turns: who is travelling, what is being carried, which vehicle is assigned, who is driving, and what time must the movement complete. Missing any one of those answers turns a professional run into a gamble.",
      "Drivers are company ambassadors on the public road and at the mine gate. Speeding, alcohol, unauthorised passengers, unsecured loads and abusive conduct are company problems, not just driver problems.",
      "Mine labour hire often lives on night shift, so transport lives on night shift too. Fatigue is treated as a safety risk equal to a bald tyre — rosters are built to allow rest, because a driver pushed past a safe limit is not a solution to a late crew. He is the next incident.",
    ],
  },
];

export const values = [
  {
    title: "Safety First",
    body: "No contract, bonus or rush order outweighs a person returning home unharmed. Every deployment, weld, vehicle release and night shift is judged first by whether it is safe.",
  },
  {
    title: "Reliability",
    body: "Mines plan production around people being present. Punctual deployment, completed repairs and honouring contract numbers are treated as a matter of honour.",
  },
  {
    title: "Skill & Workmanship",
    body: "Labour hire is not the dumping of bodies on a gate. We prefer a smaller number of competent people to a large number of unprepared names.",
  },
  {
    title: "Respect & Protocol",
    body: "Workers, supervisors, union representatives, clients and community leaders are spoken to with respect. Grievances follow procedure; instructions follow the chain of command.",
  },
  {
    title: "Local Strength",
    body: "A Solwezi company serving a Solwezi economy. Preference goes, wherever competence allows, to local men and women building a working life in North-Western Province.",
  },
  {
    title: "Integrity",
    body: "Hours claimed must be hours worked. Materials booked must be materials used. Statutory contributions must be remitted. Integrity is how payroll, stores and invoices are prepared.",
  },
];

export type Leader = {
  id: string;
  name: string;
  title: string;
  role: string;
  photo: string;
  summary: string;
  duties: string[];
};

export const leadership: Array<{
  id: string;
  name: string;
  title: string;
  photoKey: "ceo" | "manager" | "hr";
  standing: string;
  summary: string;
  duties: string[];
}> = [
  {
    id: "ceo",
    name: "Mr Ernest Muwowo",
    title: "Chief Executive Officer",
    photoKey: "ceo",
    standing:
      "The highest executive authority of SESNAK LIMITED — the point where strategy, commercial commitment, public reputation and final accountability meet.",
    summary:
      "When the question is 'who carries SESNAK LIMITED?', the answer is the Chief Executive Officer. Mr Muwowo sets the direction of the company, protects its name, decides which work the company will take, and ensures the Manager and Human Resources have the authority and resources to perform.",
    duties: [
      "Strategic leadership — deciding where the company concentrates its strength",
      "Commercial authority over major contracts, credit positions and public commitments",
      "Principal face of the company to mines, contractors, civic offices and financiers",
      "Governance, lawful conduct, tax, licensing and statutory compliance",
      "Setting safety culture from the top — backing any supervisor who stops unsafe work",
      "Setting the industrial-relations climate between management and the Workers' Union",
    ],
  },
  {
    id: "manager",
    name: "Mr Zulu",
    title: "Manager — Operations, Workshop & Transport",
    photoKey: "manager",
    standing:
      "The operating centre of SESNAK LIMITED. If the CEO owns the direction of the company, the Manager owns the day — the strongest operating office in the business.",
    summary:
      "Nothing the company promises on paper becomes real until Mr Zulu turns it into a plan, a roster, a vehicle, a job card, and a supervisor who knows what must happen before dawn. He is the hinge between the CEO's decisions and the people on tools.",
    duties: [
      "Command of the operating day — deployments, rosters, job cards and dispatch",
      "Supervision of hired labour and first response to client performance complaints",
      "Workshop control across boiler making and automotive — quality of release, priority calls",
      "Transport and dispatch — no vehicle moves without control",
      "Standing safety stop-authority to halt unsafe work or take a vehicle off the road",
      "Honest performance reporting to the CEO, including bad news brought early",
    ],
  },
  {
    id: "hr",
    name: "Mr Fred Kasonda",
    title: "Human Resources",
    photoKey: "hr",
    standing:
      "In a labour-hire company, Human Resources is not a back room — it is a production office. Every person who walks through a mine induction is an HR product as much as an operations product.",
    summary:
      "Mr Kasonda's role is to obtain, contract, administer, develop and, where necessary, separate the people of SESNAK LIMITED lawfully, fairly, and usefully. He translates the Manager's need for numbers and trades into real people who can be sent, paid and supervised without shame or illegality.",
    duties: [
      "Recruitment and selection matched to trade, site standard and record — not favours",
      "Contracts and conditions of service in writing, controlling the file",
      "Statutory compliance — NAPSA, NHIMA, Workers' Compensation, the Employment Code Act",
      "Time, attendance and clean payroll input in coordination with supervisors",
      "Discipline, grievance handling and dignity — procedure, not public show",
      "Training, competence tracking, and induction readiness for every worker sent",
    ],
  },
];

export const audiences = [
  {
    title: "Mining Houses & Principal Contractors",
    body: "Surge labour, shutdown crews, replacement trades and standing labour complements.",
  },
  {
    title: "Engineering & Maintenance Contractors",
    body: "Boiler makers, welders, mechanics and general workers aligned to site standards.",
  },
  {
    title: "Transport & Site-Support Operations",
    body: "Drivers, assistants and vehicles that can be reliably kept on the road.",
  },
  {
    title: "Local Businesses & Civic Users",
    body: "Fabrication, vehicle repair, or organised movement of goods and people within the district.",
  },
];

export const processSteps = [
  {
    step: "01",
    title: "Requisition",
    body: "The client issues a requisition specifying trade, numbers, duration and site rules.",
  },
  {
    step: "02",
    title: "Search & Recruit",
    body: "Human Resources searches the existing pool and recruits to close any gap.",
  },
  {
    step: "03",
    title: "Verify",
    body: "Documents, references, medical fitness and induction requirements are checked.",
  },
  {
    step: "04",
    title: "Confirm Logistics",
    body: "The Manager confirms reporting time, transport, tools and supervision.",
  },
  {
    step: "05",
    title: "Deploy",
    body: "The worker is deployed and formally introduced to site control.",
  },
  {
    step: "06",
    title: "Monitor",
    body: "Timekeeping, conduct and safety are monitored for the life of the placement.",
  },
  {
    step: "07",
    title: "Close & Record",
    body: "The placement closes with a clear record, so the next call is answered faster.",
  },
];

export const safetyPoints = [
  {
    title: "Health, Safety & Environment",
    body: "Pre-task talks, personal protective equipment, isolation where required, vehicle inspections, and the right to refuse unsafe work are part of employment with this company. Incidents are reported, not hidden to protect a monthly statistic.",
  },
  {
    title: "Quality",
    body: "Quality means the person sent matches the requisition, the weld holds, the vehicle is fit, and the invoice matches the work. Supervisors inspect. The Manager samples. Human Resources audits files. The CEO asks for evidence, not comfort.",
  },
  {
    title: "Workforce & the Workers' Union",
    body: "Organised labour through the SESNAK LIMITED Workers' Union is recognised as a legitimate counterpart on conditions, dignity and procedure. Management will not substitute insult for negotiation; the union will not substitute disorder for representation.",
  },
  {
    title: "Community Standing in Solwezi",
    body: "A leading company in Solwezi is judged in the township as well as at the mine gate: wages that arrive, young people who gain a trade, vehicles that do not terrorise the road, and management that can be found when a family is in trouble.",
  },
];

export const legalPoints = [
  "Operates as a limited company under the laws of Zambia",
  "Subject to the Employment Code Act and occupational safety law",
  "Compliant with road traffic law and statutory contribution law",
  "Bound by the site rules of every mine or contractor that engages us",
  "Recognises the SESNAK LIMITED Workers' Union as the voice of organised labour",
];

export const orgChain = [
  {
    office: "Chief Executive Officer",
    name: "Mr Ernest Muwowo",
    scope: "Strategy, clients, governance, final accountability",
  },
  {
    office: "Manager",
    name: "Mr Zulu",
    scope: "Operations, workshop, transport, site delivery",
  },
  {
    office: "Human Resources",
    name: "Mr Fred Kasonda",
    scope: "Recruitment, contracts, compliance, welfare",
  },
];

export const operatingUnits = [
  "Labour hire crews",
  "Boiler workshop",
  "Automotive section",
  "Transport dispatch",
];
