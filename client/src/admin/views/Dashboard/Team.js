import React, { useEffect, useContext } from "react";
import PropTypes from "prop-types";
import LoadingComponent from "../../../components/loading/LoadingComponent";
import { withStyles } from "@material-ui/core/styles";
import CardMedia from "@material-ui/core/CardMedia";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import AdminContext from "../../../components/context/adminAPI/adminContext";
import Button from "@material-ui/core/Button";
// import IconButton from "@material-ui/core/IconButton";
// import GitHubIcon from "@material-ui/icons/GitHub";
// import TwitterIcon from "@material-ui/icons/Twitter";

const styles = theme => ({
  details: {
    margin: theme.spacing(1, 1, 1, 0)
  },
  cover: {
    width: theme.spacing(10),
    height: theme.spacing(10),
    margin: theme.spacing(2),
    borderRadius: "50%",
    flexShrink: 0,
    backgroundColor: theme.palette.background.default
  },
  icon: {
    fontSize: 18,
    padding: theme.spacing(1)
  },
  container: {
    margin: theme.spacing(2, 0, 4)
  }
});

function Group(props) {
  const adminContext = useContext(AdminContext);
  const { adminUsers, teams, loading, deleteUser, updateUser } = adminContext;

  useEffect(() => {
    adminUsers();
    //eslint-disable-next-line
  }, []);
  function onRemove(userId) {
    deleteUser(userId);
  }

  const { title, description, classes } = props;
  if (loading) return <LoadingComponent />;
  return (
    <div>
      <Typography gutterBottom component="h2" variant="h5">
        {title}
      </Typography>
      <Typography>{description}</Typography>
      <Grid container spacing={2} className={classes.container}>
        {teams.length > 0 &&
          teams.map((team, id) => (
            <Grid key={id} item xs={12} md={6}>
              <Paper>
                <Grid container wrap="nowrap">
                  <Grid item>
                    <CardMedia
                      className={classes.cover}
                      image={require(`../../assets/img/${team.photo}`)}
                      title="Avatar"
                    />
                  </Grid>
                  <Grid item>
                    <div className={classes.details}>
                      <Typography component="h3" variant="h6">
                        {team.firstname}
                      </Typography>
                      <Typography variant="body2" color="textSecondary">
                        {team.title}
                      </Typography>
                      <Typography variant="body2" color="textSecondary">
                        {team.description}
                      </Typography>
                      <Typography variant="body2" color="textSecondary">
                        {team.carrers}
                      </Typography>
                      <Typography variant="body2" color="textSecondary">
                        {team.pricing}
                      </Typography>
                      <Button
                        variant="contained"
                        color="secondary"
                        onClick={() => onRemove(team._id)}
                      >
                        Delete
                      </Button>
                    </div>
                  </Grid>
                </Grid>
              </Paper>
            </Grid>
          ))}
      </Grid>
    </div>
  );
}

Group.propTypes = {
  classes: PropTypes.object.isRequired,
  description: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired
};

function Team(props) {
  return (
    <div>
      <Group
        title="Canterbury Music Teachers"
        description={`canterbury music teacher's profiles`}
        {...props}
      />
    </div>
  );
}

export default withStyles(styles)(Team);

{
  /* <Grid container>
                      {member.github && (
                        <IconButton
                          aria-label="github"
                          component="a"
                          href={`https://github.com/${member.github}`}
                          className={classes.icon}
                        >
                          <GitHubIcon fontSize="inherit" />
                        </IconButton>
                      )}
                      {member.twitter && (
                        <IconButton
                          aria-label="twitter"
                          component="a"
                          href={`https://twitter.com/${member.twitter}`}
                          className={classes.icon}
                        >
                          <TwitterIcon fontSize="inherit" />
                        </IconButton>
                      )}
                    </Grid> */
}
