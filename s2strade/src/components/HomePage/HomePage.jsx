import React, { useState } from 'react';
import { Container, Button, Navbar, Nav, Table } from 'react-bootstrap';
import { ClickableText, TableCellImage, CustomFooter } from './styled';

function HomePage() {
  const products = [
    {
      request: 'https://picsum.photos/id/10/200/3001',
      requestImgText: 'View Product',
      offer: 'https://picsum.photos/id/26/200/3001',
      offerImgText: 'View Offer',
    },
    {
      request: 'https://picsum.photos/id/28/200/3001',
      requestImgText: 'View Product',
      offer: 'https://picsum.photos/id/10/200/3001',
      offerImgText: 'View Offer',
    },
    {
      request: 'https://picsum.photos/id/29/200/3001',
      requestImgText: 'View Product',
      offer: 'https://picsum.photos/id/22/200/3001',
      offerImgText: 'View Offer',
    },
  ];

  const services = [
    {
      request: 'https://picsum.photos/id/38/200/3001',
      requestImgText: 'View Service',
      offer: 'https://picsum.photos/id/10/200/3001',
      offerImgText: 'View Offer',
    },
    {
      request: 'https://picsum.photos/id/22/200/3001',
      requestImgText: 'View Service',
      offer: 'https://picsum.photos/id/20/200/3001',
      offerImgText: 'View Offer',
    },
    {
      request: 'https://picsum.photos/id/6/200/3001',
      requestImgText: 'View Service',
      offer: 'https://picsum.photos/id/30/200/3001',
      offerImgText: 'View Offer',
    },
  ];

  const deliveries = [
    {
      request: 'https://picsum.photos/id/24/200/3001',
      requestImgText: 'View Delivery',
      offer: 'https://picsum.photos/id/15/200/3001',
      offerImgText: 'View Offer',
    },
    {
      request: 'https://picsum.photos/id/29/200/3001',
      requestImgText: 'View Delivery',
      offer: 'https://picsum.photos/id/58/200/3001',
      offerImgText: 'View Offer',
    },
    {
      request: 'https://picsum.photos/id/19/200/3001',
      requestImgText: 'View Delivery',
      offer: 'https://picsum.photos/id/10/200/3001',
      offerImgText: 'View Offer',
    },
  ];

  return (
    <div>
      <Navbar bg="primary" variant="dark" expand="lg">
        <Navbar.Brand href="#home">
          <img
            src="https://img.icons8.com/?size=100&id=30840&format=png&color=000000"
            alt="Logo"
            width="40"
            height="40"
          />
        </Navbar.Brand>
        <Nav className="ms-auto">
          <Button variant="outline-light" className="ml-2 custom-btn-padding ms-2">
            Sign In
          </Button>
          <Button variant="outline-light" className="ml-2 custom-btn-padding ms-2">
            Sign Out
          </Button>
        </Nav>
      </Navbar>

      <Container fluid className="my-4" style={{paddingLeft:'0px',paddingRight:'0px'}}>
        <Table bordered style={{width:'100%'}}>
          <thead className="text-center">
            <tr>
              <th colSpan="2">Product</th>
              <th colSpan="2">Service</th>
              <th colSpan="2">Delivery</th>
            </tr>
            <tr>
              <th>Request</th>
              <th>Offer</th>
              <th>Request</th>
              <th>Offer</th>
              <th>Request</th>
              <th>Offer</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product, index) => (
              <tr key={index} className="text-center">
                
                <td>
                  <a href={product.request} target="_blank" rel="noopener noreferrer">
                    <TableCellImage
                      src={product.request}
                      alt={`Product Request ${index + 1}`}
                    />
                  </a>
                  <br />
                  <ClickableText
                    href={product.request}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="clickable-text"
                  >
                    {product.requestImgText}
                  </ClickableText>
                </td>

                
                <td>
                  <a href={product.offer} target="_blank" rel="noopener noreferrer">
                    <TableCellImage
                      src={product.offer}
                      alt={`Product Offer ${index + 1}`}
                    />
                  </a>
                  <br />
                  <ClickableText
                    href={product.offer}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="clickable-text"
                  >
                    {product.offerImgText}
                  </ClickableText>
                </td>

               
                <td>
                  <a href={services[index]?.request} target="_blank" rel="noopener noreferrer">
                    <TableCellImage
                      src={services[index]?.request}
                      alt={`Service Request ${index + 1}`}
                    />
                  </a>
                  <br />
                  <ClickableText
                    href={services[index]?.request}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="clickable-text"
                  >
                    {services[index]?.requestImgText}
                  </ClickableText>
                </td>

               
                <td>
                  <a href={services[index]?.offer} target="_blank" rel="noopener noreferrer">
                    <TableCellImage
                      src={services[index]?.offer}
                      alt={`Service Offer ${index + 1}`}
                    />
                  </a>
                  <br />
                  <ClickableText
                    href={services[index]?.offer}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="clickable-text"
                  >
                    {services[index]?.offerImgText}
                  </ClickableText>
                </td>

               
                <td>
                  <a href={deliveries[index]?.request} target="_blank" rel="noopener noreferrer">
                    <TableCellImage
                      src={deliveries[index]?.request}
                      alt={`Delivery Request ${index + 1}`}
                    />
                  </a>
                  <br />
                  <ClickableText
                    href={deliveries[index]?.request}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="clickable-text"
                  >
                    {deliveries[index]?.requestImgText}
                  </ClickableText>
                </td>

                
                <td>
                  <a href={deliveries[index]?.offer} target="_blank" rel="noopener noreferrer">
                    <TableCellImage
                      src={deliveries[index]?.offer}
                      alt={`Delivery Offer ${index + 1}`}
                    />
                  </a>
                  <br />
                  <ClickableText
                    href={deliveries[index]?.offer}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="clickable-text"
                  >
                    {deliveries[index]?.offerImgText}
                  </ClickableText>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Container>

      <CustomFooter>
        <p>Footer</p>
      </CustomFooter>
    </div>
  );
}

export default HomePage;
