import {
  benefitCard1,
  benefitCard2,
  benefitCard3,
  benefitCard4,
  benefitCard5,
  benefitCard6,
  benefitIcon1,
  benefitIcon2,
  benefitIcon3,
  benefitIcon4,
  benefitImage2,
  chromecast,
  disc02,
  discord,
  figma,
  file02,
  framer,
  homeSmile,
  instagram,
  isha,
  ishita,
  janhavi_mishra,
  kruti,
  notification2,
  notification3,
  notification4,
  notion,
  photoshop,
  plusSquare,
  protopie,
  raindrop,
  recording01,
  recording03,
  roadmap1,
  roadmap2,
  roadmap3,
  roadmap4,
  searchMd,
  shreya_agrawal,
  shreya_mote,
  shreya_watwe,
  siya,
  slack,
  sliders04,
  telegram,
  twitter,
  vaidehi_more,
  varada,
  yashita,

} from "../assets";



import datathon from "../assets/datathon.png";

import mlusion from "../assets/mlusion.jpg";
import kaggle from "../assets/kaggle.jpg";
import synapse from "../assets/synapse.jpg";
import math from "../assets/math.jpg";
import workshop from "../assets/workshop.jpg";


export const navigation = [
  {
    id: "0",
    title: "Home",
    url: "/",
  },
  {
    id: "1",
    title: "Events",
    url: "/events",
  },
  {
    id: "2",
    title: "Blogs",
    url: "/blogs",
  },
  {
    id: "3",
    title: "Team",
    url: "/team",
  },
  {
    id: "4",
    title: "Register",
    url: "/register",
  },

];

export const heroIcons = [homeSmile, file02, searchMd, plusSquare];

export const notificationImages = [notification4, notification3, notification2];



export const brainwaveServices = [
  "Photo generating",
  "Photo enhance",
  "Seamless Integration",
];

export const brainwaveServicesIcons = [
  recording03,
  recording01,
  disc02,
  chromecast,
  sliders04,
];

export const roadmap = [
  {
    id: "0",
    title: "Voice recognition",
    text: "Enable the chatbot to understand and respond to voice commands, making it easier for users to interact with the app hands-free.",
    date: "May 2023",
    status: "done",
    imageUrl: roadmap1,
    colorful: true,
  },
  {
    id: "1",
    title: "Gamification",
    text: "Add game-like elements, such as badges or leaderboards, to incentivize users to engage with the chatbot more frequently.",
    date: "May 2023",
    status: "progress",
    imageUrl: roadmap2,
  },
  {
    id: "2",
    title: "Chatbot customization",
    text: "Allow users to customize the chatbot's appearance and behavior, making it more engaging and fun to interact with.",
    date: "May 2023",
    status: "done",
    imageUrl: roadmap3,
  },
  {
    id: "3",
    title: "Integration with APIs",
    text: "Allow the chatbot to access external data sources, such as weather APIs or news APIs, to provide more relevant recommendations.",
    date: "May 2023",
    status: "progress",
    imageUrl: roadmap4,
  },
];

export const collabText =
  "With smart automation and top-notch security, it's the perfect solution for teams looking to work smarter.";

export const collabContent = [
  {
    id: "0",
    title: "Seamless Integration",
    text: collabText,
  },
  {
    id: "1",
    title: "Smart Automation",
  },
  {
    id: "2",
    title: "Top-notch Security",
  },
];

export const collabApps = [
  {
    id: "0",
    title: "Figma",
    icon: figma,
    width: 26,
    height: 36,
  },
  {
    id: "1",
    title: "Notion",
    icon: notion,
    width: 34,
    height: 36,
  },
  {
    id: "2",
    title: "Discord",
    icon: discord,
    width: 36,
    height: 28,
  },
  {
    id: "3",
    title: "Slack",
    icon: slack,
    width: 34,
    height: 35,
  },
  {
    id: "4",
    title: "Photoshop",
    icon: photoshop,
    width: 34,
    height: 34,
  },
  {
    id: "5",
    title: "Protopie",
    icon: protopie,
    width: 34,
    height: 34,
  },
  {
    id: "6",
    title: "Framer",
    icon: framer,
    width: 26,
    height: 34,
  },
  {
    id: "7",
    title: "Raindrop",
    icon: raindrop,
    width: 38,
    height: 32,
  },
];

export const pricing = [
  {
    id: "0",
    title: "DATAHON",
    img: datathon,
    
  },
  {
    id: "1",
    title: "MLUSION",
    img: mlusion,
    
  },
  {
    id: "2",
    title: "KAGGLE COMPETITION",
    img: kaggle,
  },
  {
    id: "3",
    title: "THE SYNAPSE HACKATHON",
    img: synapse,
  },
  {
    id: "4",
    title: "AICVS X MATH CLUB",
    img: math,
  },
  {
    id: "5",
    title: "WORKSHOP ON GEN AI",
    img: workshop,
  },
];

export const team2024 = [
  {
    id: "0",
    title: "Isha Bhagat",
    text: "Co-Head Coordinator",
    backgroundUrl: benefitCard1,
    iconUrl: benefitIcon1,
    imageUrl: isha,
    light: true,
    members: ["Sameeksha Tantak", "Vedika Kayangude", "Sanika Shidore", "Shraddha Sabde", "Akshata Ramgiri"]
  },
  {
    id: "1",
    title: "Ishita Lele",
    text: "Co-Head Coordinator",
    backgroundUrl: benefitCard2,
    iconUrl: benefitIcon2,
    imageUrl: ishita,
    light: true,
    members: ["Sameeksha Tantak", "Vedika Kayangude", "Sanika Shidore", "Shraddha Sabde", "Akshata Ramgiri"]
  },
  {
    id: "2",
    title: "Kruti Newalkar",
    text: "Web Development Team Lead",
    backgroundUrl: benefitCard3,
    iconUrl: benefitIcon3,
    imageUrl: kruti,
    light: true,
    members: ["Sameeksha Tantak", "Vedika Kayangude", "Sanika Shidore", "Shraddha Sabde", "Akshata Ramgiri"]
  },
  {
    id: "3",
    title: "Varada Gokhale",
    text: "Technical Team Lead",
    backgroundUrl: benefitCard4,
    iconUrl: benefitIcon4,
    imageUrl: varada,
    light: true,
    members: ["Sameeksha Tantak", "Vedika Kayangude", "Sanika Shidore", "Shraddha Sabde", "Akshata Ramgiri"]
  },
  {
    id: "4",
    title: "Yashita Killedar",
    text: "Content and Design Team Lead",
    backgroundUrl: benefitCard5,
    iconUrl: benefitIcon1,
    imageUrl: yashita,
    light: true,
    members: ["Sameeksha Tantak", "Vedika Kayangude", "Sanika Shidore", "Shraddha Sabde", "Akshata Ramgiri"]
  },
  {
    id: "5",
    title: "Siya Shah",
    text: "PR and Sponsorship Team Lead",
    backgroundUrl: benefitCard6,
    iconUrl: benefitIcon2,
    imageUrl: siya,
    light: true,
    members: ["Sameeksha Tantak", "Vedika Kayangude", "Sanika Shidore", "Shraddha Sabde", "Akshata Ramgiri"]
  },
];

export const team2023 = [
  {
    id: "0",
    title: "Janhavi Mishra",
    text: "Projects and Internships Team Lead",
    backgroundUrl: benefitCard4,
    iconUrl: benefitIcon4,
    imageUrl: janhavi_mishra,
    light: true,
    members: ["Sameeksha Tantak", "Vedika Kayangude", "Sanika Shidore", "Shraddha Sabde", "Akshata Ramgiri"]
  },
  {
    id: "1",
    title: "Shreya Watwe",
    text: "Head Coordinator",
    backgroundUrl: benefitCard1,
    iconUrl: benefitIcon1,
    imageUrl: shreya_watwe,
    light: true,
    members: ["Sameeksha Tantak", "Vedika Kayangude", "Sanika Shidore", "Shraddha Sabde", "Akshata Ramgiri"]
  },
  {
    id: "2",
    title: "Shreya Agrawal",
    text: "Web Development Team Lead",
    backgroundUrl: benefitCard2,
    iconUrl: benefitIcon3,
    imageUrl: shreya_agrawal,
    light: true,
    members: ["Sameeksha Tantak", "Vedika Kayangude", "Sanika Shidore", "Shraddha Sabde", "Akshata Ramgiri"]
  },
  {
    id: "3",
    title: "Vaidehi More",
    text: "Content and Design Team Lead",
    backgroundUrl: benefitCard5,
    iconUrl: benefitIcon1,
    imageUrl: vaidehi_more,
    light: true,
    members: ["Sameeksha Tantak", "Vedika Kayangude", "Sanika Shidore", "Shraddha Sabde", "Akshata Ramgiri"]
  },
  {
    id: "4",
    title: "Shreya Mote",
    text: "PR and Sponsorship Team Lead",
    backgroundUrl: benefitCard3,
    iconUrl: benefitIcon2,
    imageUrl: shreya_mote,
    light: true,
    members: ["Sameeksha Tantak", "Vedika Kayangude", "Sanika Shidore", "Shraddha Sabde", "Akshata Ramgiri"]
  },
];

export const socials = [

  {
    id: "1",
    title: "Linkedin",
    iconUrl: twitter,
    url: "https://www.linkedin.com/company/cummins-aicvs/",
  },
  {
    id: "2",
    title: "Instagram",
    iconUrl: instagram,
    url: "https://www.instagram.com/aicvs?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
  },
  {
    id: "3",
    title: "Youtube",
    iconUrl: telegram,
    url: "https://www.youtube.com/@aicvscummins3964",
  },

];
