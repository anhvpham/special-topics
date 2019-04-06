import React from "react"
import { withStyles } from "@material-ui/core/styles"
import Typography from "@material-ui/core/Typography"
import Grid from "@material-ui/core/Grid"

const styles = theme => ({
  root: {
    marginTop: "50px"
  },
  img: {
    width: "100%",
    objectFit: "contain"
  }
})

const ResultContainer = props => {
  const { classes } = props
  return (
    <Grid container spacing={24} className={classes.root}>
      {props.food ? (
        props.food.map((aNew, key) => {
          return (
            <React.Fragment key={key}>
              <Grid item xs={12} sm={4}>
                <img
                  src={aNew.urlToImage}
                  className={classes.img}
                />
              </Grid>
              <Grid item xs={12} sm={8}>
                <Typography component="h5" variant="h5">{aNew.name}</Typography>
                <Typography component="h5" variant="h5">{aNew.open}</Typography>
                <Typography component="h5" variant="h5">{aNew.price}</Typography>
                <Typography component="h5" variant="h5">{aNew.review}</Typography>
                <Typography component="h5" variant="h5">{aNew.rating}</Typography>
                <Typography component="h5" variant="h5">{aNew.address}</Typography>
                <Typography component="h5" variant="h5">{aNew.phone}</Typography>
                <Typography>
                  <a href={aNew.url}>Yelp Link</a>
                </Typography>
              </Grid>
            </React.Fragment>
          )
        })
      ) : (
        <Typography>Please type a keyword to search</Typography>
      )}
    </Grid>
  )
}

export default withStyles(styles)(ResultContainer)