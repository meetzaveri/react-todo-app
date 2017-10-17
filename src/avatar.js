import React, {Component} from 'react';
import {Row, Col, Image} from 'react-bootstrap';

class Avatar extends Component {
    render() {
        return (
            <div>
              <Row>
                <Col xs={10}></Col>
                <Col xs={2}>
                  <Image src="https://cdn-images-1.medium.com/fit/c/100/100/1*0J1h-MH77xT-zE4v67et3g.png" thumbnail circle />
                </Col>
              </Row>
            </div>
        );
    }
}

export default Avatar;