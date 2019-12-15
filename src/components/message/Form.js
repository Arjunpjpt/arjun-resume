import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(theme => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: 600
    }
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary
  }
}));

export default function Form() {
  const classes = useStyles();
  const [value, setValue] = React.useState("Controlled");

  const handleChange = event => {
    setValue(event.target.value);
  };

  return (
      <div>
<Grid container spacing={12}>
        <Grid item xs={12}>
          <Paper className={classes.paper}>
          <form className={classes.root} noValidate autoComplete="off">
      <div>
        <table>
            <tr>
                <td>
                    Message To : Arjun Prajapati
                </td>
            </tr>
            <tr>
                <td>
                    <TextField
          id="fullname"
          label="Full Name"
          placeholder="Full Name"
          multiline
        />
             </td>
            </tr>

            <tr>
                <td>
                <TextField
          id="email"
          label="Your Email"
          placeholder="Your Email"
          multiline
        />
                </td>
            </tr>
            <tr>
                <td>
                <TextField
          id="outlined-multiline-static"
          label="Message"
          multiline
          rows="10"
          placeholder="Message"
          variant="outlined"
        /> 
                </td>
            </tr>
            <tr>
                <td>
                <Button variant="contained" color="primary">
        Send
      </Button>
                </td>
            </tr>
        </table>
        
        
        
        
      </div>
    </form>

          </Paper>
        </Grid>
      </Grid>

      </div>
   
  );
}
