// =============================================================================
//  YOUR PORTFOLIO CONTENT
//  -----------------------------------------------------------------------------
//  This is the ONLY file you need to edit to update your portfolio's content.
//  Change the text between the quotes. Add or remove items from the lists.
//  Anything marked  // TODO  is a placeholder I (Claude) couldn't fill in yet —
//  give me the real details and I'll drop them in, or edit them here yourself.
// =============================================================================

export const profile = {
  // --- Header / hero ---------------------------------------------------------
  name: 'Forrest Lasiter',
  title: 'IT Professional & Homelab Engineer', // TODO: your preferred headline
  tagline:
    'I build, break, and run things — from self-hosted infrastructure in my homelab to software that solves real problems.',
  location: 'United States', // TODO: city/region if you want it shown
  available: true, // shows an "open to opportunities" badge; set false to hide

  // --- Contact / links -------------------------------------------------------
  // Leave a value as empty string '' to hide that link.
  contact: {
    email: 'forrest.lasiter@gmail.com',
    github: 'https://github.com/ForrestLasiter',
    linkedin: '', // TODO: your LinkedIn URL
    resumePdf: '', // TODO: drop a resume.pdf in /public and put '/resume.pdf' here
  },

  // --- About -----------------------------------------------------------------
  about: [
    // Each string is a paragraph. Rewrite these in your own voice.
    'I’m an IT professional with a hands-on, build-it-yourself approach to technology. Most of what I know I learned by running it myself — standing up servers, wiring networks, automating the boring parts, and fixing what breaks at 2am.',
    'My homelab is my proving ground: it’s where I test ideas before they matter in production and where I keep my skills sharp across systems administration, networking, virtualization, and self-hosting.',
  ],

  // --- Skills ---------------------------------------------------------------
  // Group your skills however makes sense. Add/remove groups and items freely.
  skillGroups: [
    {
      label: 'Systems & OS',
      skills: ['Windows', 'Linux', 'Windows Server'], // TODO: refine
    },
    {
      label: 'Virtualization & Containers',
      skills: ['Proxmox', 'Docker', 'VMware'], // TODO: refine
    },
    {
      label: 'Networking',
      skills: ['TCP/IP', 'VLANs', 'Firewalls', 'DNS', 'VPN'], // TODO: refine
    },
    {
      label: 'Tools & Automation',
      skills: ['Git', 'PowerShell', 'Bash'], // TODO: refine
    },
  ],

  // --- Experience ------------------------------------------------------------
  // Most recent first. Add an entry per role.
  experience: [
    {
      role: 'Your Job Title', // TODO
      company: 'Company Name', // TODO
      start: 'YYYY', // TODO
      end: 'Present', // TODO  ('Present' or a year)
      summary:
        'One or two lines on what you did and the impact you had.', // TODO
      highlights: [
        'A specific accomplishment with a number if you have one.', // TODO
        'Another responsibility or win.', // TODO
      ],
    },
  ],

  // --- Certifications --------------------------------------------------------
  certifications: [
    // { name: 'CompTIA A+', issuer: 'CompTIA', year: '2024' },  // TODO
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
        'My self-hosted lab environment — the place I run, test, and document the infrastructure that backs everything else.', // TODO: expand with what you actually run
      stack: ['Proxmox', 'Docker', 'Networking'], // TODO: refine
      link: '',
    },
  ],
};

export type Profile = typeof profile;
