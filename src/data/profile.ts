// =============================================================================
//  YOUR PORTFOLIO CONTENT
//  -----------------------------------------------------------------------------
//  This is the ONLY file you need to edit to update your portfolio's content.
//  Change the text between the quotes. Add or remove items from the lists.
//  Built from your résumé + Joint Services Transcript — tweak anything that
//  doesn't sound like you.
// =============================================================================

export const profile = {
  // --- Header / hero ---------------------------------------------------------
  name: 'Forrest Lasiter',
  title: 'IT Systems Analyst · Electronics Engineering Technologist',
  tagline:
    'U.S. Army veteran turned IT systems analyst — I work where hardware, networks, and software meet, from enterprise endpoints to industrial controls to my own homelab.',
  location: 'Fort Smith, Arkansas',
  available: true, // shows an "open to opportunities" badge; set false to hide

  // --- Contact / links -------------------------------------------------------
  // Leave a value as empty string '' to hide that link.
  contact: {
    email: 'forrest.lasiter@gmail.com',
    github: 'https://github.com/ForrestLasiter',
    linkedin: '', // TODO: your LinkedIn URL
    resumePdf: '', // a sanitized résumé PDF can go here (no home address/phone)
  },

  // --- About -----------------------------------------------------------------
  about: [
    'I’m an IT systems analyst and U.S. Army veteran with a hands-on background that runs from enterprise endpoint management to industrial controls and electronics. I got my start as an Army Signal/IT specialist — running networks and help desks stateside and overseas — and I’ve been building on that foundation ever since.',
    'Today I support a university’s fleet of Windows, macOS, and iOS/iPadOS devices, and I keep my skills sharp in a homelab where I run and break my own infrastructure. I hold a B.S. in Electrical Engineering Technology, and I’m drawn to problems that sit right where hardware, networks, and software meet.',
  ],

  // --- Skills ---------------------------------------------------------------
  // Group your skills however makes sense. Add/remove groups and items freely.
  skillGroups: [
    {
      label: 'IT & Endpoint Management',
      skills: ['Windows', 'macOS', 'iOS / iPadOS', 'Active Directory', 'MECM / SCCM', 'Microsoft Intune', 'JAMF'],
    },
    {
      label: 'Networking',
      skills: ['TCP/IP', 'Cisco Routing & Switching', 'Network Cabling', 'Server Administration', 'Help Desk'],
    },
    {
      label: 'Industrial & Electrical',
      skills: ['PLCs', 'HMIs', 'SCADA', 'Industrial Control Systems', 'AC/DC Motors', 'Electrical Troubleshooting'],
    },
    {
      label: 'Engineering & Design',
      skills: ['SolidWorks', 'AutoCAD', 'Robotics', 'Solar / Wind Power Systems'],
    },
    {
      label: 'Homelab & Virtualization',
      skills: ['Proxmox', 'Docker', 'Linux', 'Self-hosting', 'PowerShell'],
    },
  ],

  // --- Experience ------------------------------------------------------------
  // Most recent first. Add an entry per role.
  experience: [
    {
      role: 'PC Systems Analyst',
      company: 'University of Arkansas – Fort Smith',
      start: '2022',
      end: 'Present',
      summary:
        'Endpoint and systems support across a university campus, keeping faculty, staff, and student devices running.',
      highlights: [
        'Troubleshoot Windows, macOS, iOS, and iPadOS hardware and software issues for end users.',
        'Image, deploy, and remotely manage devices using Active Directory, MECM, Microsoft Intune, and JAMF.',
        'Provide remote and on-site assistance across the campus fleet.',
      ],
    },
    {
      role: 'Electrical Technician',
      company: 'Glatfelter',
      start: '2021',
      end: '2022',
      summary:
        'Maintained industrial automation and electrical systems on the plant floor.',
      highlights: [
        'Programmed and maintained PLCs, HMIs, and SCADA systems for production machinery.',
        'Installed and repaired electrical wiring for machines and devices.',
      ],
    },
    {
      role: 'IT / Signal Support Specialist (25B, 25U)',
      company: 'U.S. Army',
      start: '2012',
      end: '2019',
      summary:
        'Deployed IT and signal-support specialist running networks and help-desk operations stateside and overseas.',
      highlights: [
        'Managed an IT help desk in Kuwait and base surveillance + flight scheduling operations in Iraq.',
        'Built and maintained network infrastructure — server stacks, cabling, and connectivity.',
        'Performed preventive maintenance on electronic and communications equipment.',
        'Trained at the U.S. Army Signal School (Ft. Gordon); earned CompTIA Security+. Awarded the Army Commendation Medal.',
      ],
    },
  ],

  // --- Education -------------------------------------------------------------
  // Most recent first.
  education: [
    {
      school: 'University of Arkansas – Fort Smith',
      credentials: [
        { name: 'B.S., Electrical Engineering Technology', year: '2021' },
        { name: 'A.A.S., Electronics Technology', year: '2019' },
        { name: 'Technical Certificate, Industrial Electronics & Electrical Maintenance', year: '2019' },
        { name: 'Certificate of Proficiency, Robotics', year: '2019' },
      ],
    },
  ],

  // --- Certifications --------------------------------------------------------
  certifications: [
    { name: 'CompTIA Security+', issuer: 'CompTIA', year: '' },
  ],

  // --- Projects --------------------------------------------------------------
  // Things you've built. The homelab itself is a great entry here.
  projects: [
    {
      name: 'QuoteIT',
      blurb:
        'A job-quoting SaaS for independent IT contractors: fill in a little, it auto-populates the rest, shows a market-value band, and generates shareable, acceptable quotes.',
      stack: ['Next.js', 'TypeScript', 'PostgreSQL', 'Stripe'],
      link: '', // private for now
    },
    {
      name: 'Homelab',
      blurb:
        'My self-hosted lab environment — the place I run, test, and document the infrastructure that backs everything else.', // TODO: tell me what you actually run and I'll expand this
      stack: ['Proxmox', 'Docker', 'Networking'],
      link: '',
    },
  ],
};

export type Profile = typeof profile;
