export const projects = [
  {
    title: "Pitch App",
    subtitle: "NSBE LinkedIn Hackathon Project",
    description: `We are all familiar with the brief speech that happens within 20 to 30 seconds in professional environments 
                  called an elevator pitch. An elevator pitch is a simple and direct opportunity for job 
                  seekers to share their skills more engagingly. Pitch would be a short-form video platform 
                  for recruiters to seek out potential employees aside from viewing just resumes and profiles.`,
    image: "../photos/pitch.jpg",
    link: "https://pitch30.community/"
  },
  {
    title: "Gulp Project Seed",
    subtitle: "Seed file for web development projects",
    description: `I created this project seed as a way to gain better understand of the Gulp task manager. In addition, it has been
    a great way to start of the development process for freelance and personal projects.`,
    image: "../photos/pitch.jpg",
    link: "https://github.com/tylerhooks1/mygulp"
  },

];

export const skills = [
  "HTML/CSS",
  "JavaScript",
  "React.js",
  ".Net",
  "Bootstrap",
  "Node.js",
  "C++",
  "Java"
];

export const experience = [
  {
    company: "Dell Technologies",
    role: "Software Engineer",
    date: "August 2019 - Present",
    description:
      <div className="text-left mb-8" >
        <ul className="list-disc mb-5">
          <li>Develop and manage a UI library for reusable components resulting in an increase in compatibility, accessibility, and efficiency of hundreds of projects in production across the IT Services organization</li>
          <li>Contribute to developing front-end IT Services website architecture</li>
          <li>Workclosely with UX designers to develop components and user interactions to ensure responsiveness and cross-platform optimization for mobile viewing</li>
          <li>Participate and support the IT Development Program as a subcommittee and global council member</li>
          <li>Mentor interns and new hires.</li>
        </ul>
        <p className="font-medium">Key Achievements</p>
        <ul className="list-disc">
          <li>Receiving recognition for contributing to the creation of a more efficient development process</li>
        </ul>
      </div>,
  },

  {
    company: "South By Southwest",
    role: "Emergent Technologies Intern",
    date: "January 2018 - April 2018",
    description:
      <div className="text-left" >
        <ul className="list-disc mb-5">
          <li>Troubleshooting data retrieval feature during SXSW festival</li>
          <li>Using Google Data studio to monitor data and create daily analytics report</li>
          <li>IOS and Android app testing for applications used during the festival</li>
          <li>ChatBot testing on Abby Bot through IOS and Android app and Facebook Messengers</li>
          <li>Conducting event technology research and created a newsletter for news on the latest tech trends in AI, Chat Bots, and more</li>
        </ul>
      </div>,
  }
];