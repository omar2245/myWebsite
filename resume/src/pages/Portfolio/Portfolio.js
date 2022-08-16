import {
  CardActionArea,
  CardMedia,
  CardActions,
  Grid,
  Button,
  Typography,
  Link,
} from "@mui/material";
import { Tabs, Tab, Card } from "@mui/material";

import React, { useState } from "react";
import "./Portfolio.css";
import ResumeData from "../../utils/ResumeData";
import { CardContent } from "@material-ui/core";

const Portfolio = () => {
  const [tabValue, setTabValue] = useState("All");

  const TabValueHandler = (event, newValue) => {
    setTabValue(newValue);
    console.log(newValue);
  };

  return (
    <div className="portfolio">
      <Grid container className="section pb_30">
        <Grid item className="section-title">
          <span></span>
          <Typography variant="h5" className="section-text">
            Portfolio
          </Typography>
        </Grid>
      </Grid>

      {/* Tabs items*/}
      <Grid item xs={12}>
        <Tabs
          value={tabValue}
          indicatorColor="white"
          className="custom-tabs"
          onChange={TabValueHandler}
        >
          <Tab
            label="All"
            value="All"
            className={
              tabValue == "All" ? "custom-tab-item-active" : "custom-tab-item"
            }
          ></Tab>

          {[...new Set(ResumeData.project.map((item) => item.tag))].map(
            (tag) => (
              <Tab
                label={tag}
                value={tag}
                className={
                  tabValue === tag
                    ? "custom-tab-item-active"
                    : "custom-tab-item"
                }
              />
            )
          )}
        </Tabs>

        {/* Projects */}
        <Grid item xs={12}>
          <Grid container spacing={2}>
            {ResumeData.project.map((project) =>
              project.tag !== tabValue ? null : (
                <Grid item xs={12} md={4}>
                  <Link a href={project.links.link} className="card-link">
                    <Card className="card-container">
                      <CardMedia
                        component="img"
                        height="140"
                        image={project.image}
                        alt={project.title}
                      />

                      <CardContent className="card-content">
                        <Typography gutterBottom variant="h5" component="div">
                          {project.title}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          {project.description}
                        </Typography>
                      </CardContent>
                    </Card>
                  </Link>
                </Grid>
              )
            )}
            {ResumeData.project.map((project) =>
              tabValue === "All" ? (
                <Grid item xs={12} md={4}>
                  <Link a href={project.links.link} className="card-link">
                    <Card className="card-container">
                      <CardMedia
                        component="img"
                        height="140"
                        image={project.image}
                        alt={project.title}
                      />

                      <CardContent className="card-content">
                        <Typography gutterBottom variant="h5" component="div">
                          {project.title}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          {project.description}
                        </Typography>
                      </CardContent>
                    </Card>
                  </Link>
                </Grid>
              ) : null
            )}
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default Portfolio;
