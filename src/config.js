const profile = {
  fullName: 'Farai Mathemera',
  description: 'BACK-END DEVELOPER | CLOUD ENGINEER',

  avatarPath: 'avatar.svg',
  about: {
    title: `FARAI MATHEMERA`,
    description: ``,

  },
  social: [
    {
      iconName: 'linkedin',
      url: 'https://linkedin.com/in/farai-mathemera',
      text: "I'm on linkedIn",
      hoverColor: '#0e76a8'
    },
    {
      iconName: 'telegram',
      url: 'https://t.me/The_Fusse',
      text: "Drop me a line",
      hoverColor: '#0088cc'
    },
    {
      iconName: 'github',
      url: 'https://github.com/FaraiMathemera',
      text: "I'm on Github",
      hoverColor: '#1e9429'
    },
    {
      iconName: 'email',
      url: 'mailto:queries@faraimathemera.co.za',
      text: 'Send me an email',
      hoverColor: '#d9071c'
    }
  ]
}

const projects = [
  {
    title: 'Personal Website (fadzaikadzinga.co.za)',
    img: '../assets/FadzaiK.png',
    description: 'Personal website of PhD candidate looking to put herself out there and showcase herself.',
    categories: ['Website', 'NodeJS', 'React'],
    siteUrl: 'https://fadzaikadzinga.co.za',
    sourceCodeUrl: 'https://github.com/FaraiMathemera/project'
  },
  {
    title: 'faraimathemera.co.za',
    img: '../assets/icons/favicon.ico',
    description: 'My personal website with projects I have done.',
    categories: ['Website', 'NodeJS', 'React'],
    siteUrl: 'https://faraimathemera.co.za',
    sourceCodeUrl: 'https://github.com/FaraiMathemera/project'
  },
  {
    title: 'I Do Foundation (NGO)',
    img: '',
    description: 'NGO providing the community with education and support services.',
    categories: ['JS', 'Website'],
    siteUrl: 'http://idofoundation.co.za',
    sourceCodeUrl: 'https://github.com/FaraiMathemera/:O'
  }
]


const formUrl = 'http://localhost:4000'
const ReCAPTCHAKey = '6LcBOC8UAAAAAM9YRyBp1RR-1NnwvMU8UDsR63Vu'
const missingProjectIcon = './assets/no-work-icon.jpg'

export {
  profile,
  projects,
  formUrl,
  ReCAPTCHAKey,
  missingProjectIcon
}
