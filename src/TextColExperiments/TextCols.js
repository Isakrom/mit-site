import React, { Component } from 'react';
import logo from '../logo.svg';
import '../App.css';
import PokemonBlurb from '../PokemonCard/PokemonBlurb';
import TextPaper from '../TextPaper/TextPaper';
import HomeHeader from '../HomeHeader/HomeHeader';
import bgImg from '../img/webBG.png';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
});

var genStyle = {
    backgroundImage: `url(${bgImg})`,
    /* Full height */
    height: "100%",
    /* Center and scale the image nicely */
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover"
};

class TextCols extends React.Component {
  constructor(props){
    super(props)
  }

  render() {
    return (
      <div style={ genStyle }>
        {/* Columnn */}
        <Grid
                container
                spacing={16}
                alignItems="center"
                direction="column"
                justify="center"
              >
              {/* Row 1 */}
              <Grid
                      container
                      spacing={16}
                      alignItems="center"
                      direction="row"
                      justify="center"
                      style = {{margin: 20}}
                    >
                    <Paper style={{padding:15}}><Typography component="h2" variant="h2"><b>Resume</b></Typography></Paper>
              </Grid>
              {/* Row 2 */}
              <Grid
                      container
                      spacing={16}
                      alignItems="center"
                      direction="row"
                      justify="center"
                      style = {{margin: 20}}
                    >
                    <Paper style={{padding: 20}}>
                      <Typography component="h4" variant="h4"><b>Education</b></Typography>
                        <p>Aug. 2016 - Present	 Massachusetts Institute of Technology <br/> GPA: 4.2</p>
                        <p>Aug. 2004 - May 2016 Academia del Perpetuo Socorro High School
                        <br/>GPA: 4.353 SAT: 2210</p>
                    </Paper>
              </Grid>
              <Grid
                      container
                      spacing={16}
                      alignItems="center"
                      direction="row"
                      justify="center"
                      style = {{margin: 20}}
                    >
                    <Paper style={{padding: 15}}>
                      <Typography component="h4" variant="h4"><b>College Activities</b></Typography>
                      <p>
                      <Typography component="h6" variant="h6">Sophomore &nbsp; <br/></Typography>
    &nbsp;&nbsp;&nbsp;&nbsp; <b>Internship at Facebook</b> <br/>
		&nbsp;&nbsp;&nbsp;&nbsp; Worked on implementing backend for several new features on the Messenger <br/>
app as well as creating data pipelines and setting data monitoring. Worked
primarily <br/> in Hack, SQL, and Python. <br/>
		&nbsp;&nbsp;&nbsp;&nbsp;<b>Treasurer of the Association of Puerto Rican Students</b><br/>
		&nbsp;&nbsp;&nbsp;&nbsp;<b>Treasurer of the MIT American Jiu Jitsu Club</b><br/>
		&nbsp;&nbsp;&nbsp;&nbsp;<b>Rush Chair of the Theta Delta Chi Fraternity</b><br/>
		&nbsp;&nbsp;&nbsp;&nbsp;<b>Librarian of the Theta Delta Chi Fraternity</b><br/>
    &nbsp;&nbsp;&nbsp;&nbsp;<b>Jiu-Jitsu Club</b><br/>
                      <Typography component="h6" variant="h6">Freshman &nbsp; <br/></Typography>
                      &nbsp;&nbsp;&nbsp;&nbsp; <b>Facebook University Program</b> <br/>
                      &nbsp;&nbsp;&nbsp;&nbsp; Summer internship at Facebook for computer science inclined <br/>
                       minorities. Consisted of a Android Development Boot Camp and 2 months to develop <br/>
                       an Android application as part of a team. <br/>
                      &nbsp;&nbsp;&nbsp;&nbsp; <b>UROP in LAMMDesign and 3D print innovative composites via bioinspired <br/>
                      engineering approach</b> <br/>
                      &nbsp;&nbsp;&nbsp;&nbsp; Researched bone based composite structures, modelled these <br/>
                       using 3D printing software, then tested these in order to <br/>
                       find what elements would maximize their toughness. <a href="http://www.cnn.com/2017/01/13/design/gyroid-new-material-stronger-than-graphene/">CNN Article</a><br/>
                      &nbsp;&nbsp;&nbsp;&nbsp; <b>Jiu-Jitsu Club</b> <br/>
                      </p>
                    </Paper>
              </Grid>
              <Grid
                      container
                      spacing={16}
                      alignItems="center"
                      direction="row"
                      justify="center"
                      style = {{margin: 20}}
                    >
                    <Paper style={{padding: 15}}>
                      <Typography component="h4" variant="h4"><b>High School Activities</b></Typography><br/>
                      <Typography component="h6" variant="h6"><b>12th High School Newspaper</b></Typography><br/>
                      		&nbsp;&nbsp;&nbsp;&nbsp; Worked as the newspaper editor for the literary magazine published within the
                      school.
                      <Typography component="h6" variant="h6"><b>12th 		High School Finance and Investment President 12th.</b></Typography><br/>
                      		&nbsp;&nbsp;&nbsp;&nbsp; Founded the club as a place where students interested in the world of Finance<br/>
                      and Investment could come to learn.<br/>
                      <Typography component="h6" variant="h6"><b>9th-12th National Honor Society, Member</b></Typography><br/>
                      <Typography component="h6" variant="h6"><b>9th-12th Math Club, Member 9th-11th, Vice-President 12th</b></Typography><br/>
                      		&nbsp;&nbsp;&nbsp;&nbsp; Organized and trained a team to compete at several local competitions.<br/>
                      <Typography component="h6" variant="h6"><b>9th-12th Architecture and Engineering Club Member 9th-11th, President 12th</b></Typography><br/>
                      <Typography component="h6" variant="h6"><b>10th-12th High School Choir</b></Typography><br/>
                          &nbsp;&nbsp;&nbsp;&nbsp; Practiced 3 hours a week, sang at local concerts and events, competed at<br/>
                      national competitions.<br/>
                      <Typography component="h6" variant="h6"><b>9th-12th	High School Swim Team</b></Typography><br/>
                      		&nbsp;&nbsp;&nbsp;&nbsp; Practiced 5 hours a week, competed in local Intercollegiate swim meets.<br/>
                    </Paper>
              </Grid>
              <Grid
                      container
                      spacing={16}
                      alignItems="center"
                      direction="row"
                      justify="center"
                      style = {{margin: 20}}
                    >
                    <Paper style={{padding: 15}}>
                      <Typography component="h4" variant="h4"><b>Summer Programs</b></Typography>
                      <Typography component="h6" variant="h6"><b>June 2018 - September 2018 Software Engineering Internship at Facebook</b></Typography>
                      <Typography component="h6" variant="h6"><b>June 2017 - August 2017	Facebook University for Software Engineering</b></Typography>
                      <Typography component="h6" variant="h6"><b>June 2016 - August 2016	Interphase EDGE</b></Typography>
                      <Typography component="h6" variant="h6"><b>June 2015 - August 2015	MOSTEC (MIT Online Science and Technology Community)</b></Typography>
                    </Paper>
              </Grid>
              <Grid
                      container
                      spacing={16}
                      alignItems="center"
                      direction="row"
                      justify="center"
                      style = {{margin: 20}}
                    >
                    <Paper style={{padding: 15}}>
                      <Typography component="h4" variant="h4"><b>Community Service</b></Typography> <br/>
                      <Typography component="h6" variant="h6"><b>Beach Cleanups</b></Typography><br/>
  &nbsp;&nbsp;&nbsp;&nbsp; Participated in several cleanups of local beaches both on the shore and by <br/>
&nbsp;&nbsp;&nbsp;&nbsp; scuba diving to collect trash from the ocean. <br/>
<Typography component="h6" variant="h6"><b>Free concerts at several community activities and retirement homes</b></Typography><br/>
  &nbsp;&nbsp;&nbsp;&nbsp; As part of the choir I’ve visited several local retirement homes to liven up the <br/>
&nbsp;&nbsp;&nbsp;&nbsp; residents of these.<br/>
<Typography component="h6" variant="h6"><b>Tutoring</b></Typography><br/>
&nbsp;&nbsp;&nbsp;&nbsp; Since the 9th grade I’ve offered free tutoring services on STEM subjects to any <br/>
&nbsp;&nbsp;&nbsp;&nbsp; student who was interested.<br/>
                    </Paper>
              </Grid>
              <Grid
                      container
                      spacing={16}
                      alignItems="center"
                      direction="row"
                      justify="center"
                      style = {{margin: 20}}
                    >
                    <Paper style={{padding: 15}}>
                      <Typography component="h4" variant="h4"><b>Honors and Awards</b></Typography> <br/>
                      <b>Men’s 50M freestyle finalist</b> <br/>
                      <b>World Strides Heritage Festival Gold Award</b> <br/>
                      &nbsp;&nbsp;&nbsp;&nbsp;  World Strides Heritage Festival is a national singing competition held at several <br/>
                      &nbsp;&nbsp;&nbsp;&nbsp;  locations, this award is given to the choirs that achieve the highest distinction. <br/>
                      &nbsp;&nbsp;&nbsp;&nbsp; 2nd Place in the Puerto Rico Intercollegiate Mathematics League(PRIL) <br/>
                      <b>Chosen to Represent Puerto Rico at the 2016 Ibero Mathematics Olympiad </b><br/>
                      <b>Intel ISEF 2014 Semifinalist</b><br/>
                      <b>National Merit Scholarship Finalist</b> <br/>
                      <b>Presidential Scholar Semifinalist</b> <br/>
                      <Typography component="h4" variant="h4"><b>Skills Talents, and Achievements</b></Typography>
                      <b>Substantial knowledge of how to use AutoCad</b><br/>
	                    <b>Programming Knowledge of Python, Java, and Hack (a PHP variant)</b><br/>
	                    <b>Experience in Android App Development</b><br/>
                      <b>Some experience in SQL, HTML and Javascript</b><br/>
	                    <b>SCUBA Diving License and Training</b><br/>
                    </Paper>
              </Grid>
              </ Grid>
      </div>
    );
  }
}

export default TextCols;
