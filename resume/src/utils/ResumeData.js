import GitHubIcon from "@mui/icons-material/GitHub";
import React from "react";
import YouTubeIcon from "@mui/icons-material/YouTube";
import LinkIcon from "@mui/icons-material/Link";

const ResumeData = {
  name: "游陳叡",
  title: "中正大學資工所",

  birthday: "1996.12.31",
  email: "omarchen1231",

  socials: {
    Github: {
      link: "#",
      text: "MyGitHub",
      icon: <GitHubIcon />,
    },
  },

  education: [
    {
      title: "國立中正大學資訊工程研究所",
      date: "Sep 2019 - Jul 2021",
      description: "碩論: 基於深度學習和 MediaPipe 的手勢輔助虛擬觸控系統",
      description1:
        "碩論摘要: 透過深度學習讓使用者只要透過一般的網路攝影機(Webcam)達成手部追蹤以及手勢辨識進而與電腦達成人機互動。",
      description2: "使用技術: Python, MediaPipe, YoloV4, Deep Learning",
    },
    {
      title: "國立中正大學資訊工程系",
      date: "Sep 2015 - Jul 2019",
      description:
        "大學的課程內容主要是以資料結構、演算法和物件導向為主，基本上使用C語言實作資料結構以及演算法，如：堆疊、雜湊、二元樹、排序、Dynamic Programming。至於物件導向的課程，則是以C++與Java實作。",
      description1:
        "大學專題: 透過機器學習的方式，將音樂中的人聲以及背景音樂分離出來。",
      description2:
        "學習內容: C, C++, Python, Java, ,資料結構, 演算法, 訊號處理, 網路概論",
      description3: "社團: 桃友會, 返鄉服務",
    },
    {
      title: "其他經歷",
      description: "超市打工",
    },
  ],

  skills: [
    {
      title: "Front-End",
      description: ["ReactJS", "JavaScript", "Bootstrap", "Material UI"],
    },
    {
      title: "Back-End",
      description: ["NodeJS", "Python"],
    },
    {
      title: "Machine Learning",
      description: ["Tensorflow", "Object Detection", "Object Recognition"],
    },
  ],

  project: [
    {
      tag: "Python",
      image: "https://i.imgur.com/48lWTez.png",
      title: "碩士畢業論文",
      description:
        "透過深度學習讓使用者只要透過一般的網路攝影機(Webcam)達成手部追蹤以及手勢辨識進而與電腦達成人機互動。",
      links: {
        link: "https://www.youtube.com/watch?v=9ihnASHHpcw",
        icon: <YouTubeIcon />,
      },
    },
    {
      tag: "React",
      image: "https://i.imgur.com/EO02pTl.png",
      title: "Food App",
      description: "簡單的點餐APP",
      links: { link: "https://omar-food-app.netlify.app/", icon: <LinkIcon /> },
    },
    {
      tag: "React",
      image: "https://i.imgur.com/ROKPxRk.png",
      title: "Resume Web",
      description: "我的個人網站",
      links: { link: "https://omar-resume.netlify.app/", icon: <LinkIcon /> },
    },
  ],
};

export default ResumeData;
