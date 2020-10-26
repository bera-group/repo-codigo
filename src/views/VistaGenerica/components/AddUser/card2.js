import React, { Component } from 'react';
import { Card, Image, Button, Input } from 'semantic-ui-react'

import './styles.css'
class CarddTwo extends Component {
  render() {
    let cardTwo = null;
    if (this.props.data && this.props.data.length > 0) {
      console.log(this.props.data)
      cardTwo = this.props.data.map(data => {
        return (
          <div key={data.id} className='helo'>
            <Card>
              <Card.Content>
                <Button floated='left' icon='close' size='mini' onClick={this.props.handleDelete.bind(this, data.id)}>
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
    }

    return (
      <div>
        <div style={{ paddingBottom: '15px' }}>
          {cardTwo}
        </div>
      </div>

    );
  }
}

export default CarddTwo;