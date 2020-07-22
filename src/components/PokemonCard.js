import React from 'react'
import { Card } from 'semantic-ui-react'

class PokemonCard extends React.Component {
  state={
    front: true}
    handleFrontSprite=()=>{
      this.setState({front: !this.state.front})
    }
  render() {
    const {name, hp, sprites   }=this.props
 
    return (
      <Card>
        <div >
          <div className="image" onClick={this.handleFrontSprite}>
            <img src={this.state.front?sprites.front:sprites.back} />
          </div>
          <div className="content">
            <div className="header">{name}</div>
          </div>
          <div className="extra content">
            <span>
              <i className="icon heartbeat red" />
              {hp}
            </span>
          </div>
        </div>
      </Card>
    )
  }
}

export default PokemonCard
