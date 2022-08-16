import { Grid, Typography } from "@material-ui/core";
import React, { Fragment } from "react";
import "./About.css";

const About = () => {
  return (
    <div className="about">
      <Grid container className="section pb_30">
        <Grid item className="section-title">
          <span></span>
          <Typography variant="h5" className="section-text">
            關於我
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <br />

          <Typography className="about_me_text">
            我是游陳叡，畢業於中正大學資訊工程研究所，研究所期間的研究內容為機器學習以及物件辨識，
            畢業論文內容主要是致力於透過機器學習讓使用者只要透過一般的網路攝影機(Webcam)達成手部追蹤以及手勢辨識進而與電腦達成人機互動。
          </Typography>
          <br />
          <Typography>
            大學期間熱衷於社團活動，參加的社團為桃友會，大一時主要負責社團的美宣工作，在大二的寒假與友會的同學們一起前往小學從事返鄉服務，
            主要是希望通過帶營隊的方式，讓小學生可以從中學習團隊合作的重要性以及創造美好的回憶，並且從中學習如何在營隊中扮演好輔助角色，以及從每個活動規劃中學習工作分配以及領導、協調的重要性。
          </Typography>
          <br />
          <Typography>
            畢業後先從事了替代役，於嘉義市調查站擔任警衛的工作，並且利用休閒的時間學習網頁的設計，目前主要是學習React框架
            ，以及UI的排版切版的應用。
          </Typography>
        </Grid>
      </Grid>
      {/* <Grid container className="section pb_30">
        <Typography variant="h6" className="sub-title">
          <span></span>
          Experience
        </Typography>
        <br />
      </Grid>
      <Grid container className="section">
        <Typography variant="h6" className="sub-title">
          <span></span>
          Skill
        </Typography>
      </Grid> */}
    </div>
  );
};

export default About;
