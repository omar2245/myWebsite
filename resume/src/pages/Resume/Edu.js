import React from "react";
import { TimelineContent, TimelineItem } from "@mui/lab";
import { Typography, Grid } from "@material-ui/core";

import { CustomeTimelineSaperator } from "../../components/Timeline/Timeline";

import ResumeData from "../../utils/ResumeData";
const Edu = (props) => {
  return (
    <div>
      {ResumeData.education.map((edu) => (
        <TimelineItem style={{ padding: "10px 10px 10px 0" }}>
          <CustomeTimelineSaperator />
          <TimelineContent className="timeline">
            <Typography className="timeline-title">{edu.title}</Typography>
            <Typography variant="caption" className="timeline-date">
              {edu.date}
            </Typography>
            <Typography variant="body2" className="timeline-description">
              {edu.description}
            </Typography>
            <Typography variant="body2" className="timeline-description">
              {edu.description1}
            </Typography>
            <Typography
              variant="body2"
              className="timeline-description"
              style={{ color: "#b5838d" }}
            >
              {edu.description2}
            </Typography>
            <Typography variant="body2" className="timeline-description">
              {edu.description3}
            </Typography>
          </TimelineContent>
        </TimelineItem>
      ))}
    </div>
  );
};

export default Edu;
