import React from 'react'
import PokemonCollection from './PokemonCollection'
import PokemonForm from './PokemonForm'
import Search from './Search'
import { Container } from 'semantic-ui-react'

class PokemonPage extends React.Component {
  state={
    pokemons: [],
    search: '',
    newPokemon: {sprites: {}}
  }

  componentDidMount(){
    fetch('http://localhost:3000/pokemon')
    .then(res=>res.json())
    .then(pokemons=>{
    this.setState({pokemons})
    })
  }
  
   handleSearch=(e)=>{
     
    this.setState({search: e.target.value}) 
   }
   renderSearchResult=()=>{
     if(this.state.search!==''){
      return this.state.pokemons.filter(pokemon=> pokemon.name.includes(this.state.search))
     }else return this.state.pokemons
   }


   handleChange=(e)=>{
     console.log(e.target.name, e.target.value)
     this.setState({newPokemon: {...this.state.newPokemon, [e.target.name]: e.target.value}})
   }

   handleSpriteChange=e=>{
    this.setState({newPokemon: { ...this.state.newPokemon, sprites: {...this.state.newPokemon.sprites, [e.target.name]: e.target.value}}})
   }

   handleSubmit=(e)=>{
     e.preventDefault()
     fetch(`http://localhost:3000/pokemon`,{
       method: "POST",
       headers: {
         accept: 'application/json',
         'content-type': 'application/json'
       },
       body: JSON.stringify(this.state.newPokemon)
     })
     .then(res=>res.json())
     .then(createdPokemon=>{
       this.setState({pokemons: [...this.state.pokemons, createdPokemon]})
     })
   }





  render() {
    console.log(this.state.newPokemon)
    return (
      <Container>
        <h1>Pokemon Searcher</h1>
        <br />
        <PokemonForm newPokemon={this.state.newPokemon}
                    handleChange={this.handleChange}
                    handleSpriteChange={this.handleSpriteChange}
                    handleSubmit={this.handleSubmit}/>
        <br />
        <Search search={this.state.search} handleSearch={this.handleSearch}/>
        <br />
        <PokemonCollection pokemons={this.renderSearchResult()} />
      </Container>
    )
  }
}

export default PokemonPage
