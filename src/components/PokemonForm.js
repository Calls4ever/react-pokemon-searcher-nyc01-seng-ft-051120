import React from 'react'
import { Form } from 'semantic-ui-react'

class PokemonForm extends React.Component {
  render() {
    const {name, sprites, hp}=this.props.newPokemon
    return (
      <div>
        <h3>Add a Pokemon!</h3>
        <Form onSubmit={this.props.handleSubmit}>
          <Form.Group widths="equal">
            <Form.Input fluid label="Name" placeholder="Name" name="name" value={name} onChange={this.props.handleChange} />
            <Form.Input fluid label="hp" placeholder="hp" name="hp" value={hp} onChange={this.props.handleChange}/>
            <Form.Input fluid label="Front Image URL" placeholder="url" name="front" value={sprites.front} onChange={this.props.handleSpriteChange} />
            <Form.Input fluid label="Back Image URL" placeholder="url" name="back" value={sprites.back} onChange={this.props.handleSpriteChange}/>
          </Form.Group>
          <Form.Button>Submit</Form.Button>
        </Form>
      </div>
    )
  }
}

export default PokemonForm
