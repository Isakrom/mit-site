import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import classnames from 'classnames';
// Material react
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import CardActionArea from '@material-ui/core/CardActionArea';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import red from '@material-ui/core/colors/red';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import axios from "axios"
import pokebg from '../img/pokebg.png';

// TODO - add a bg
var genStyle = {
    backgroundImage: `url(${pokebg})`,
    /* Full height */
    height: "100%",
    margin: 0,
    /* Center and scale the image nicely */
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover"
};

const styles = theme => ({
  card: {
    maxWidth: 400,
    margin: "auto",
    marginTop: 10,
  },
  media: {
    objectFit: 'cover',
  },
  actions: {
    display: 'flex',
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
});

class PokemonCard extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      name:  "Bulbasaur",
      sprite: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png",
      height: 7,
      weight: 69,
      type: "grass",
      bgColor: "#01a53b",
      number: 1,
      lightColor:"#A7DB8D",
      darkColor:"#4E8234",
    }

    this.setPokemonTo = this.setPokemonTo.bind(this)
    this.componentDidMount = this.componentDidMount.bind(this)
  }

  capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  setPokemonTo(number){
    var url = "https://pokeapi.co/api/v2/pokemon/" + number
    axios.get(url)
    .then(response => this.setState({
        name: response.data.name,
        sprite: response.data.sprites.front_default,
        type: response.data.types[0].type.name,
        bgColor: this.typeToColor(response.data.types[0].type.name),
        lightColor: this.typeToLightColor(response.data.types[0].type.name),
        darkColor: this.typeToDarkColor(response.data.types[0].type.name)
    }))
  }

  typeToColor(type){
      const typeColors = {grass: "#7AC74C", bug: "#A8B820", dark: "#705848", electric: "#F8D030", fairy: "#EE99AC", fighting: "#C03028", flying: "#A890F0", ghost:"#705898", ground: "#E0C068", ice: "#98D8D8", normal: "#A8A878", poison: "#A040A0", psychic: "#F85888", rock: "#B8A038", steel:"#B8B8D0", water: "#6890F0", dragon: "#7038F8", fairy:"#9B6470", grass:"#4E8234" }
      return typeColors[type]
  }

    typeToDarkColor(type){
      const darkTypeColors = {dragon:"#4924A1", electric:"#A1871F", bug:"#6D7815", ice:"#638D8D", dark:"#49392F", fire:"#9C531F", fighting:"#7D1F1A", ground:"#927D44", ghost:"#493963", flying:"#6D5E9C", psychic:"#A13959", poison:"#682A68", normal:"#6D6D4E", water:"#445E9C", steel:"#787887", rock:"#786824", grass:"#4E8234"}
      return darkTypeColors[type]
    }

    typeToLightColor(type){
      const lightTypeColors = {dragon:"#A27DFA", electric:"#FAE078", bug:"C6D16E", ice:"#BCE6E6", ground:"#EBD69D", rock:"#D1C17D", dark:"#A29288", fire:"#F5AC78", fighting:"#D67873", fairy:"#F4BDC9", grass:"#A7DB8D", ghost:"#A292BC", flying:"#C6B7F5", psychic:"#FA92B2", poison:"#C183C1", normal:"#C6C6A7", water:"#9DB7F5", steel:"#D1D1E0"}
      // TODO - Add in text color, dark color, and light color
      return lightTypeColors[type]
    }

  componentDidMount(){
    var url = "https://pokeapi.co/api/v2/pokemon/" + this.props.num
    axios.get(url)
    .then(response => this.setState({
        name: response.data.name,
        sprite: response.data.sprites.front_default,
        type: response.data.types[0].type.name,
        bgColor: this.typeToColor(response.data.types[0].type.name),
        lightColor: this.typeToLightColor(response.data.types[0].type.name),
        darkColor: this.typeToDarkColor(response.data.types[0].type.name)
    }))
  }

  render() {
    const { classes } = this.props;
    return (
      <div style={ genStyle }>
      <Card className={classes.card} raised="true" style={{backgroundColor: this.state.lightColor, padding: 0}}>
        <CardActionArea>
        <CardMedia
          component="img"
          alt="Pokemon"
          style={{color:this.state.lightColor}}
          className={classes.media}
          image={this.state.sprite}
          title="Sprite"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2" style={{color:this.state.darkColor, padding: 0}}>
            {this.capitalizeFirstLetter(this.state.name)}
          </Typography>
        </CardContent>
        </CardActionArea>
        <CardActions>
        // TODO add animations
        // TODO - add next/prior button, find by number, find by na
        </CardActions>
      </Card>
      </div>
    );
  }
}

PokemonCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(PokemonCard);
