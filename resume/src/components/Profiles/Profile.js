import { Typography } from "@material-ui/core";
import React from "react";
import CustomTimeline, { CustomeTimelineSaperator } from "../Timeline/Timeline";
import GetAppIcon from "@mui/icons-material/GetApp";
import resumeData from "../../utils/ResumeData";
import PersonIcon from "@mui/icons-material/Person";
import CustomButton from "../Button/Button";

import "./Profile.css";
import TimelineItem from "@mui/lab/TimelineItem";
import Timeline from "@mui/lab/Timeline";
import TimelineContent from "@mui/lab/TimelineContent";

const CustomTimelineItem = ({ title, text, link }) => (
  <TimelineItem>
    <CustomeTimelineSaperator />
    <TimelineContent className="timeline_content">
      {link ? (
        <Typography className="timeline_text">
          <span>{title}: </span>
          <a href={link} target="_blank">
            {text}
          </a>
        </Typography>
      ) : (
        <Typography className="timeline_text">
          <span>{title}: </span>
          {text}
        </Typography>
      )}
    </TimelineContent>
  </TimelineItem>
);
const Profile = () => {
  return (
    <div className="profile contaier_shadow">
      <div className="profile_name">
        <Typography className="name">游陳叡</Typography>
        <Typography className="title">{resumeData.title}</Typography>
      </div>

      <div className="profile_img">
        <img src="https://picsum.photos/400/300" alt="" />
      </div>

      <div className="profile_info">
        <CustomTimeline icon={<PersonIcon />}>
          <CustomTimelineItem title="Name" text={resumeData.name} />
          <CustomTimelineItem title="Education" text={resumeData.title} />
          <CustomTimelineItem title="Email" text={resumeData.email} />

          {Object.keys(resumeData.socials).map((key) => (
            <CustomTimelineItem
              key={key}
              title={key}
              text={resumeData.socials[key].text}
              link={resumeData.socials[key].link}
            />
          ))}
        </CustomTimeline>
        <br />
        {/* <div className="ctm_btn">
          <CustomButton text={"Download Cv"} icon={<GetAppIcon />} />
        </div> */}
      </div>
    </div>
  );
};

export default Profile;
