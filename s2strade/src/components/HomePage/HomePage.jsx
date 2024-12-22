import React, { useState } from 'react';
import { Container, Button, Navbar, Nav, Table } from 'react-bootstrap';
import { ClickableText, TableCellImage, CustomFooter } from './styled';
import homePagestyles from '../css/homePage.module.css';  // Use CSS Modules for scoped stylesy


function HomePage() {
  const [openModel, setOpenModel] = useState(false)

  const openDeliveryModel = () => {
    setOpenModel(!openModel)
    document.getElementById("abcd")?.click()
  }
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

      <Container fluid className="my-4" style={{ paddingLeft: '0px', paddingRight: '0px' }}>
        <Table bordered style={{ width: '100%' }}>
          <thead className="text-center">
            <tr>
              <th colSpan="2">Product</th>
              <th colSpan="2">Service</th>
              <th colSpan="2" className={homePagestyles.deliveryQuotation}
                onClick={() => openDeliveryModel()}>Request For Delivery Quotation </th>
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

      <>
        {/* Trigger button */}
        <button
          type="button"
          className="btn btn-primary"
          data-bs-toggle="modal"
          data-bs-target="#exampleModal"
          id="abcd"
          style={{ display: "none" }}
        >
          Launch demo modal
        </button>

        {/* Modal Structure */}
        <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div className="modal-dialog modal-lg">
            <div className="modal-content">
              <form id="deliveryForm" className={homePagestyles.abcd}>
                {/* Delivery Information */}
                <fieldset className={homePagestyles.fieldset}>
                  <legend className={homePagestyles.legend}>Request for Delivery Quotation</legend>
                  <label className={homePagestyles.label} htmlFor="quantity">Quantity (Total Units):</label>
                  <input className={homePagestyles.input} type="number" id="quantity" name="quantity" min={1} required placeholder="Enter total quantity of items" />
                  <label className={homePagestyles.legend} htmlFor="batchQuantity">Batch Quantity (Units per Batch):</label>
                  <input className={homePagestyles.input} type="number" id="batchQuantity" name="batchQuantity" placeholder="e.g., 100 units , by the dozen" />
                  <label className={homePagestyles.legend} htmlFor="consumerUnitQuantity">Consumer Unit Quantity (Units per Pack):</label>
                  <input className={homePagestyles.input} type="number" id="consumerUnitQuantity" name="consumerUnitQuantity" placeholder="e.g., packs of 10" />
                  <label className={homePagestyles.legend} htmlFor="note">Notes:</label>
                  <textarea id="note" name="note" placeholder="Add any additional details about the delivery" defaultValue={""} />
                  <label className={homePagestyles.legend} htmlFor="specialTerms">Special Terms:</label>
                  <textarea id="specialTerms" name="specialTerms" placeholder="Enter any specific terms or conditions for the delivery items" defaultValue={""} />
                  <label className={homePagestyles.legend} htmlFor="lossRiskResponsibilityCode">Loss Risk Responsibility:</label>
                  <select id="lossRiskResponsibilityCode" name="lossRiskResponsibilityCode">
                    <option value>-- Select Responsibilities for loss risk --</option>
                    {/* Populate with appropriate options */}
                  </select>
                  <label className={homePagestyles.legend} htmlFor="lossRisk">Loss Risk Description:</label>
                  <textarea id="lossRisk" name="lossRisk" placeholder="A description of responsibility for risk of loss in execution of the delivery" defaultValue={""} />
                  <label className={homePagestyles.legend} htmlFor="amount">Amount:</label>
                  <input className={homePagestyles.input} type="number" id="amount" name="amount" min={0} required placeholder="Enter the amount, e.g., per delivery batch" />
                  <label className={homePagestyles.legend} htmlFor="deliveryQuotationStartDate">Delivery Quotation Start Date:</label>
                  <input className={homePagestyles.input} type="date" id="deliveryQuotationStartDate" name="deliveryQuotationStartDate" />
                  <label className={homePagestyles.legend} htmlFor="deliveryQuotationEndDate">Delivery Quotation End Date:</label>
                  <input className={homePagestyles.input} type="date" id="deliveryQuotationEndDate" name="deliveryQuotationEndDate" />
                  <label className={homePagestyles.legend} htmlFor="deliveryQuotationDurationMeasure">Delivery Quotation Duration:</label>
                  <input className={homePagestyles.input} type="text" id="deliveryQuotationDurationMeasure" name="deliveryQuotationDurationMeasure" maxLength={255} />
                  {/* Trigger Button to Open Drawer for Document Reference Form */}
                  <button className={homePagestyles.button} id="openDocumentDrawerButton" type="button">Attach Document</button>
                </fieldset>
                {/* Pickup Information */}
                <div className={homePagestyles.splitContainer}>
                  <fieldset className={homePagestyles.pickupInfo}>
                    <legend className={homePagestyles.pickupTitle}>Pickup Information</legend>
                    <label  htmlFor="actualDespatchDate">Pickup Date:</label>
                    <input className={homePagestyles.input} type="date" id="actualDespatchDate" name="actualDespatchDate" required />
                    {/* Pickup Contact Drawer Trigger */}
                    <button id="openPickupContactDrawerButton" type="button" className={homePagestyles
                      .pickupContact}>Open Pickup Contact</button>

                    {/* Pickup Location Drawer Trigger */}
                    <button className={homePagestyles
                      .pickuplocation} id="openPickupLocationDrawerButton" type="button">Open Pickup Location</button>

                  </fieldset>
                  {/* Delivery Information */}
                  <fieldset className={homePagestyles.deliveryInfo} >
                    <legend className={homePagestyles.pickupTitle}>Delivery Information</legend>
                    <label  htmlFor="actualDeliveryDate">Delivery Date:</label>
                    <input className={homePagestyles.input} type="date" id="actualDeliveryDate" name="actualDeliveryDate" required />
                    {/* Trigger Button to Open Drawer for Contact */}
                    <button id="openContactDrawerButton" type="button" className={homePagestyles.openDeliveryContact}>Open Delivery Contact</button>

                    {/* Delivery Location Drawer Trigger */}
                    <button id="openDeliveryLocationDrawerButton" type="button" className={homePagestyles.opnDeliveryLocation}>Open Delivery Location</button>

                  </fieldset>
                </div>
                {/* Item Classification */}
                <div className={homePagestyles.splitContainer}>
                  <fieldset className={homePagestyles.pickupInfo}>
                    <legend className={homePagestyles.pickupTitle}>Item Classification</legend>
                    <label  htmlFor="natureCode">Nature of item:</label>
                    <select id="natureCode" name="natureCode" />
                    <label  htmlFor="cargoTypeCode">Cargo Type:</label>
                    <select id="cargoTypeCode" name="cargoTypeCode" />
                    <label  htmlFor="commodityCode">Commodity:</label>
                    <select id="commodityCode" name="commodityCode" />
                    <label  htmlFor="itemClassificationCode">Item Classification:</label>
                    <select id="itemClassificationCode" name="itemClassificationCode" />
                  </fieldset>
                  {/* Dimensions */}
                  <fieldset className={homePagestyles.deliveryInfo}>
                    <legend className={homePagestyles.pickupTitle}>Dimensions</legend>
                    <label  htmlFor="length">Length (cm):</label>
                    <input className={homePagestyles.input} type="number" id="length" name="length" required />
                    <label  htmlFor="width">Width (cm):</label>
                    <input className={homePagestyles.input} type="number" id="width" name="width" required />
                    <label  htmlFor="height">Height (cm):</label>
                    <input className={homePagestyles.input} type="number" id="height" name="height" required />
                    <label  htmlFor="weight">Weight (kg):</label>
                    <input className={homePagestyles.input} type="number" id="weight" name="weight" required />
                    <div id="volumeDisplay">Volume: 0.000000 m³</div> {/* Display for volume */}
                  </fieldset>
                </div>
                <button type="button" id="submit" className={homePagestyles.submit} onclick="submitForm()">Submit</button>
              </form>
            </div>
          </div>
        </div>
      </>

    </div>
  );
}

export default HomePage;
