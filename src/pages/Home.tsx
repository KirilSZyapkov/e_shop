import React from 'react';
import { Col, Row } from 'react-bootstrap';
import HomeItems from '../components/HomeItems';

import items from '../data/items.json';

function Home() {
  return (
    <Row md={2} xs={1} lg={3} className='g-3'>
      {items.map(item => (
        <Col key={item.id}>
        <HomeItems {...item} />
        </Col>
      ))}
    </Row>
  )
}

export default Home;