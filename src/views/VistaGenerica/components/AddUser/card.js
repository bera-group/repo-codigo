import React, { Component } from 'react';
import { Card, Image, Button} from 'semantic-ui-react'
import './styles.css'
class Cardd extends Component {
  render() {

    const cardOne = this.props.data.map(data => {
      return (
        <div key={data.id} className = 'helo'>
          <Card  >
            <Card.Content >
              <Button floated='left' icon='chevron left' size='mini' onClick={this.props.handleMove.bind(this, data.id)}>
              </Button>
              <Image
                floated='right'
                size='mini'
                src={data.image}
              />
              <Card.Header>{data.name}</Card.Header>
              <Card.Meta>{data.metaname}</Card.Meta>

            </Card.Content>

          </Card>
        </div>
      )
    })

    return (
      <div >
        
 
            {cardOne}


      </div>

    );
  }
}

export default Cardd;