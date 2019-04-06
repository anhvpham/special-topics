import React from "react"
import TextField from "@material-ui/core/TextField"
import Button from "@material-ui/core/Button"
import Grid from "@material-ui/core/Grid"
import { withStyles } from "@material-ui/core/styles"

const styles = theme => ({
  form: {
    width: "100%",
    
  },
  textField: {
    width: "60%",
    height: "20px",
    marginBottom:"40px",
  },
  button: {
    width: "19%",
    margin: "15px 0 0 1%"
  }
})

const SearchBar = props => {
  const { classes } = props
  return (
    <Grid container spacing={24} alignItems="center">
      <form onSubmit={props.getNews} className={classes.form}>
        <TextField
          id="outlined-bare"
          className={classes.textField}
          placeholder="Search term Input"
          margin="normal"
          variant="outlined"
          name="search term"
        />
        <TextField
          id="outlined-bare"
          className={classes.textField}
          placeholder="categories Input"
          margin="normal"
          variant="outlined"
          name="categories"
        />
        <TextField
          id="outlined-bare"
          className={classes.textField}
          placeholder="City/location Input"
          margin="normal"
          variant="outlined"
          name="City/Location"
        />
        <Grid item xs={12} md={6} alignItems="center">
        <Button
          variant="contained"
          color="secondary"
          className={classes.button}
          type='SEARCH'
        >
          Search
        </Button>
        </Grid>
      </form>
    </Grid>
  )
}

export default withStyles(styles)(SearchBar)