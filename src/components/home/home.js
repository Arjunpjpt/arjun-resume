import React from 'react';
import './home.css';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import ImageIcon from '@material-ui/icons/Image';
import WorkIcon from '@material-ui/icons/Work';
import AndroidIcon from '@material-ui/icons/Android';
import GamesIcon from '@material-ui/icons/Games';
import DeviceHubIcon from '@material-ui/icons/DeviceHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import EmailIcon from '@material-ui/icons/Email';
import PhoneIcon from '@material-ui/icons/Phone';
import GitHubIcon from '@material-ui/icons/GitHub';

const useStyle = makeStyles(theme => ({
    root: {
      width: '100%',
      maxWidth: 360,
      backgroundColor: theme.palette.background.paper,
    },
    inline: {
      display: 'inline',
    },
    large: {
        width: theme.spacing(10),
        height: theme.spacing(7),
      },
  }));
  
export default function Home() {
    const classes = makeStyles(theme => ({
    root: {
      width: '100%',
      maxWidth: 360,
      backgroundColor: theme.palette.background.paper,
    },
    inline: {
      display: 'inline',
    },
    large: {
        width: theme.spacing(10),
        height: theme.spacing(7),
      },
  }));
    return(
        <div className="homeDiv">
            <div className="profileLeft">
            <List className={classes.root}>
      <ListItem alignItems="flex-start">
        {/* <ListItemAvatar> */}
          {/* <Avatar alt="Arjun" src="/static/images/avatar/1.jpg" /> */}
        {/* </ListItemAvatar> */}
        <ListItemText
          primary={<b>Arjun Prajapati</b>}
          secondary={
            <React.Fragment>
              <Typography
                component="span"
                variant="body2"
                className={classes.inline}
                color="textPrimary"
              >
                  <span className="colorwhite">
                    <table>
                      <tr>
                        <td> <EmailIcon/></td>
                        <td> arjunpjpt@gmail.com </td>
                      </tr>
                      <tr>
                        <td> <PhoneIcon/> </td>
                        <td>2066310910 </td>
                      </tr>
                      <tr>
                        <td> <LinkedInIcon/></td>
                        <td>linkedin.com/in/arjun-prajapati </td>
                      </tr>
                      <tr>
                        <td> <GitHubIcon/></td>
                        <td> github.com/Arjunpjpt</td>
                      </tr>
                    </table>
                
                
                </span>
              </Typography>
              
            </React.Fragment>
          }
        />

      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        
        <ListItemText
          primary="Education:"
          secondary={
            <React.Fragment>
              <Typography
                component="span"
                variant="body2"
                className={classes.inline}
                color="textPrimary"
              >
                  <span className="colorwhite">
                University of Washington – Tacoma (2017-2019)<br></br>
Bachelor of Science: Computer Science and Systems, 
Applied Mathematics(minor)
</span>

              </Typography>
              
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        
        <ListItemText
          primary="Technical Skills:"
          secondary={
            <React.Fragment>
                <Typography
                component="span"
                variant="body2"
                className={classes.inline}
                color="textPrimary"
              >
                  <span className="colorwhite">
              <u> Programming language and other skills: </u>
               </span><br/>
              </Typography><span className="colorwhite">
              {' Android Software Development, C, C#, CSS, HTML, Java, JavaScript, JSON, MarkLogic, MySQL, Node.JS Oracle DBMS, PostgreSQL, PHP, Python, React, ROBOTC, XML '}
           </span>
              <Typography
                component="span"
                variant="body2"
                className={classes.inline}
                color="textPrimary"
              >
                  <br></br>
                  <span className="colorwhite">
              <br/> <u> Software Development Skills: </u><br/>
               </span>
              </Typography>
              <span className="colorwhite">  {' Agile Scrum Team Methodologies, Documentation, Git, MVC Architecture, Object Oriented Design/Programming, Unit Testing with JUnit '}
           </span>
<br></br>
              <Typography
                component="span"
                variant="body2"
                className={classes.inline}
                color="textPrimary"
              >
                  <span className="colorwhite">
              <br/> <u>Exposed:</u> <br/>
               </span>
              </Typography>
              <span className="colorwhite">      {' Machine Learning, Amazon Web Services'}
              </span>
            </React.Fragment>
          }
        />
      </ListItem>
    </List>


            </div>
            <div className="profileRight">

            <List className={classes.root}>
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <WorkIcon  />
          </Avatar>
        </ListItemAvatar>
        
        <ListItemText
          primary="Work Experience:"
          secondary={
            <React.Fragment>
          
              <Typography
                component="span"
                variant="body2"
                className={classes.inline}
                color="textPrimary"
              >
               Software Engineer at HCL under contract to The Boeing Company,  Bellevue, WA - (Sept 2019 - Present)  
              </Typography><br/>
              {'•	Developed RESTful web services using Spring Boot MVC and tested with Postman using HTTP request methods.'}
              <br/>
{'•	Data manipulation, handling large OData Schema converting into valid JSON Schema and CSV’s for data modeling.'}
<br/>{'•Created a single page web application using React.js with features of faceted search, and data visualization using D3.'}
            </React.Fragment>
          }
        />
   
      </ListItem>
      <Divider variant="inset" component="li" />
      
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <AndroidIcon />
          </Avatar>
        </ListItemAvatar>
        
        <ListItemText
          primary="Projects:"
          secondary={
            <React.Fragment>
          
              <Typography
                component="span"
                variant="body2"
                className={classes.inline}
                color="textPrimary"
              >
Wessenger (Weather and Messaging app for Android):
              </Typography><br/>
              {'•	Developed in a group of four people using Agile(Scrum) Methodology.'}
              <br/>
{'•	Coded in Java for front-end UI and developed RESTful API’s and also connected with different third party API’s (Weather, Push Notification, Google Map).'}
<br/>{'•Deployed on Heroku, used Node JS for backend and PostgreSQL to store and retrieve data.'}
<br/>{' App Demo: www.youtube.com/watch?v=u1JCXcK-G2A'}
            </React.Fragment>
          }
        />
   
      </ListItem>

      <Divider variant="inset" component="li" />
      
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <GamesIcon />
          </Avatar>
        </ListItemAvatar>
        
        <ListItemText
         
          secondary={
            <React.Fragment>
          
              <Typography
                component="span"
                variant="body2"
                className={classes.inline}
                color="textPrimary"
              >
PUBG In 90s:
              </Typography><br/>
              {'•	Multi-level battle game developed for web using JavaScript, HTML and CSS.'}
              <br/>
{'•	Implemented Dijkstra Algorithm and some Mathematical formula for AI’s.'}
<br/>{'Game Trailer: www.youtube.com/watch?v=BnAui6bydJA&t=20s'}
<br/>{'Game Site: arjunpjpt.github.io/pubg-1990'}
            </React.Fragment>
          }
        />
   
      </ListItem>

      <Divider variant="inset" component="li" />
      
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <DeviceHubIcon />
          </Avatar>
        </ListItemAvatar>
        
        <ListItemText
         
          secondary={
            <React.Fragment>
          
              <Typography
                component="span"
                variant="body2"
                className={classes.inline}
                color="textPrimary"
              >
UWT Blood Bank:
              </Typography><br/>
              {'•Designed and developed database application for a blood bank with front-end Web interface.'}
              <br/>
{'•	Used Complex SQL Queries for table relationship, Boyce-codd Normal Form technique for Database Normalization, ER diagram, HTML, CSS and PHP for the documentation and presentation.'}

            </React.Fragment>
          }
        />
   
      </ListItem>
    </List>
            </div>
         
        </div>
    );
}