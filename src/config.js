const profile = {
  fullName: 'Farai Mathemera',
  description: 'BACK-END DEVELOPER | CLOUD ENGINEER',

  avatarPath: 'avatar.jpg',
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
    img: '../assets/fadzai.png',
    description: 'Personal website of PhD candidate looking to put herself out there and showcase herself.',
    categories: ['Website', 'NodeJS', 'React'],
    siteUrl: 'https://fadzaikadzinga.co.za'
  },
  {
    title: 'faraimathemera.co.za',
    img: '../assets/icons/favicon.ico',
    description: 'My personal website with projects I have done.',
    categories: ['Website', 'NodeJS', 'React'],
    siteUrl: 'https://faraimathemera.co.za'
  },
  {
    title: 'I Do Foundation (NGO)',
    img: '../assets/ido.jpg',
    description: 'NGO providing the community with education and support services.',
    categories: ['JS', 'Website', 'PHP'],
    siteUrl: 'http://idofoundation.co.za',
    sourceCodeUrl: 'https://github.com/FaraiMathemera/I-DO-FOUNDATION'
  },
  {
    title: 'Simple Sentiment Analysis on Twitter',
    img: '../assets/tweepy.jpg',
    description: 'Simple Sentiment Analysis on Twitter.',
    categories: ['Tweepy', 'Python'],
    sourceCodeUrl: 'https://github.com/FaraiMathemera/Very-Simple-Sentiment-Analysis'
  },
  {
    title: 'LingoLearn',
    img: '',
    description: '3rd Year Capstone Group Project. Application geared at helping users learn a second language. The software is aimed at school children, who need to grasp another language and the interface reflects this by the use of bright colours and images.',
    categories: ['Django', 'Python'],
    sourceCodeUrl: 'https://github.com/FaraiMathemera/Very-Simple-Sentiment-Analysis'
  },
  {
    title: 'S3 Pipeline',
    img: '../assets/s3.jpg',
    description: 'Get TwitterApi data save it to a JSON file, which is then stored in AWS S3.',
    categories: ['AWS', 'Python', 'S3'],
    sourceCodeUrl: 'https://github.com/FaraiMathemera/step_by_step_pipeline'
  },
  {
    title: 'Instant Express Transfers',
    img: '../assets/iet.jpg',
    description: 'Website for financial services company providing niche products directed at diasporians',
    categories: ['PHP', 'JS', 'HTML'],
    sourceCodeUrl: 'https://github.com/FaraiMathemera/INSTANT-EXPRESS-MONEY-TRANSFERES'
  },
  {
    title: 'Kaggle Projectss',
    img: '../assets/Kaggle.jpeg',
    description: 'Collection of Kaggle projects I did to grasp core concepts of data science and data analysis, while exploring concepts I find interesting',
    categories: ['Juypter Notebooks', 'Python'],
    sourceCodeUrl: 'https://github.com/FaraiMathemera/Data-Analysis-Projects'
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
