import React from "react";
import "./Resume.css";
import { Fragment } from "react";
import { Typography, Grid, Paper } from "@material-ui/core";
import CustomTimeline, {
  CustomeTimelineSaperator,
} from "../../components/Timeline/Timeline";

import SchoolIcon from "@mui/icons-material/School";
import CodeIcon from "@mui/icons-material/Code";

import Edu from "./Edu";

import ResumeData from "../../utils/ResumeData";
import { TimelineDot } from "@mui/lab";

const Resume = () => {
  return (
    <div className="resume">
      <Grid container className="section pb_30">
        <Grid item className="section-title">
          <span></span>
          <Typography variant="h5" className="section-text">
            學歷和其他經歷
          </Typography>
        </Grid>

        <Grid item xs={12}>
          <CustomTimeline title="學歷" icon={<SchoolIcon />}>
            <Edu />
          </CustomTimeline>
        </Grid>
      </Grid>

      <Grid container className="section pb_30">
        <Grid item className="section-title">
          <span></span>
          <Typography variant="h5" className="section-text">
            技能
          </Typography>
        </Grid>
      </Grid>
      <Grid container xs={12} justifyContent="space-between" spacing={3}>
        {ResumeData.skills.map((skill) => (
          <Grid item xs={12} sm={6} md={4}>
            <Paper elevation={0} className="skill">
              <Typography variant="h6" className="skill-title">
                {skill.title}
              </Typography>
              {skill.description.map((element) => (
                <Typography variant="body2" className="skill-description">
                  <TimelineDot variant="outlined" className="timeline-dot" />
                  {element}
                </Typography>
              ))}
            </Paper>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default Resume;
