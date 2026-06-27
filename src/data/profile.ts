// =============================================================================
//  YOUR PORTFOLIO CONTENT
//  -----------------------------------------------------------------------------
//  This is the ONLY file you need to edit to update your portfolio's content.
//  Change the text between the quotes. Add or remove items from the lists.
//  Source of truth: Lasiter_Forrest_Resume.docx (Google Drive, the polished one).
// =============================================================================

export const profile = {
  // --- Header / hero ---------------------------------------------------------
  name: 'Forrest Lasiter',
  title: 'IT Professional · Industrial Controls · U.S. Army Veteran',
  tagline:
    'IT professional and U.S. Army veteran with 10+ years in IT, network administration, and systems support — skilled in endpoint management, enterprise tooling, and Windows, macOS, and Linux environments.',
  location: 'Fort Smith, Arkansas',
  available: true, // shows an "open to opportunities" badge; set false to hide

  // --- Contact / links -------------------------------------------------------
  // Leave a value as empty string '' to hide that link.
  contact: {
    email: 'forrest.lasiter@gmail.com',
    github: 'https://github.com/ForrestLasiter',
    linkedin: 'https://linkedin.com/in/forrestlasiter',
    resumePdf: '/resume.pdf', // sanitized résumé (no home address/phone) — file in /public
  },

  // --- About -----------------------------------------------------------------
  about: [
    'I’m an IT professional and U.S. Army veteran with 10+ years across information technology, network administration, and systems support. I’m skilled in endpoint management and enterprise tooling — Active Directory, MECM, Microsoft 365, and Jamf — and in supporting Windows, macOS, and Linux environments.',
    'My background runs from enterprise IT support to industrial controls and electronics: I’ve managed campus device fleets, run military help desks overseas, and now engineer PLC- and robotics-driven automation systems. I’m looking for an IT role where technical depth and a service-first mindset drive results.',
  ],

  // --- Skills ---------------------------------------------------------------
  // Group your skills however makes sense. Add/remove groups and items freely.
  skillGroups: [
    {
      label: 'Operating Systems & Endpoints',
      skills: ['Windows 10/11', 'macOS', 'Linux', 'Active Directory', 'MECM', 'Microsoft 365', 'Jamf'],
    },
    {
      label: 'Networking & Infrastructure',
      skills: ['TCP/IP', 'Cabling', 'Server Configuration', 'Monitoring', 'VMware', 'Hyper-V'],
    },
    {
      label: 'Security & Support',
      skills: ['IT Security Fundamentals', 'Patch Management', 'Level II Helpdesk', 'Hardware/Software Troubleshooting'],
    },
    {
      label: 'Industrial & Electrical',
      skills: ['PLCs', 'HMIs', 'Industrial Robotics', 'Control Systems', 'Campus A/V Systems'],
    },
    {
      label: 'Homelab & Tools',
      skills: ['Proxmox', 'Docker', 'Self-hosting', 'PowerShell'],
    },
  ],

  // --- Experience ------------------------------------------------------------
  // Most recent first. Add an entry per role.
  experience: [
    {
      role: 'Industrial Controls Technician',
      company: 'Whalen Automation and Integration',
      location: 'Greenwood, AR',
      start: '2024',
      end: 'Present',
      summary:
        'Engineer and maintain automation systems — PLCs, HMIs, and industrial robots — for diverse control applications.',
      highlights: [
        'Engineer, implement, and maintain PLCs, HMIs, industrial robots, and diverse control systems.',
        'Troubleshoot complex industrial control systems and machinery to minimize downtime.',
        'Collaborate with engineering teams to design and integrate automation solutions.',
      ],
    },
    {
      role: 'PC Systems Analyst (Level II Technician)',
      company: 'University of Arkansas – Fort Smith',
      location: 'Fort Smith, AR',
      start: '2022',
      end: '2024',
      summary:
        'Level II desktop support across a multi-building university campus.',
      highlights: [
        'Provided Level II desktop support for Windows and macOS across a multi-building campus.',
        'Deployed, imaged, and maintained computers and A/V systems for students, faculty, and staff.',
        'Used Active Directory, MECM, and Jamf for endpoint management and software deployment.',
        'Collaborated with IT departments to resolve escalated issues and improve support workflows.',
      ],
    },
    {
      role: 'IT / Signal Support Specialist (MOS 25B / 25U)',
      company: 'U.S. Army',
      location: 'Various Locations (incl. Kuwait, Iraq)',
      start: '2012',
      end: '2019',
      summary:
        'Deployed IT and signal-support specialist running networks and help-desk operations stateside and overseas.',
      highlights: [
        'Managed and monitored network infrastructure; performed patching and preventive maintenance on electronic devices.',
        'Constructed networking cables, configured and maintained server stacks, and monitored server health.',
        'Supervised IT help desk operations in Kuwait in a high-tempo environment.',
        'Managed base surveillance systems and flight scheduling operations in Iraq.',
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
  // (Section is hidden while this list is empty.)
  certifications: [
    // { name: 'CompTIA Security+', issuer: 'CompTIA', year: '' }, // re-add if you hold an active cert
  ],

  // --- Awards & Honors -------------------------------------------------------
  awards: [
    'Army Commendation Medal',
    'National Defense Service Ribbon',
    'Army Service Ribbon',
    'Global War on Terrorism Service Medal',
    'GWOT Expeditionary Medal',
    'Armed Forces Service Medal',
    'Overseas Service Medal w/ Mobilization Device',
    'Arkansas Service Medal',
    'Arkansas Federal Service Medal',
    'Operation Inherent Resolve Campaign Medal (2017)',
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
        'A Proxmox host running a mix of VMs and containers — an OctoPrint container driving my 3D printer, and an Ubuntu Server VM running Docker and a K3s Kubernetes cluster. I’m currently standing up a pfSense VM to firewall an isolated security lab: a Kali Linux box and a Metasploit VM for hands-on penetration-testing practice.',
      stack: ['Proxmox', 'K3s', 'Docker', 'pfSense', 'Kali Linux', 'OctoPrint'],
      link: '',
    },
  ],
};

export type Profile = typeof profile;
