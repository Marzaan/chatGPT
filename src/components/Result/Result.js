/* eslint-disable eqeqeq */
import React, { createRef } from "react";
import { Col, Form, Row, Button } from "react-bootstrap";
import { FaFilePdf } from "react-icons/fa";

import Pdf from "react-to-pdf";
const ref = createRef();

const Result = ({ proposalLetter }) => {

  return (
    <>
      <Row className="justify-content-md-center"  >
        <Col md={7} >

          <Form
            className="my-3 bg-light pb-3 shadow mb-3 rounded"
          >

            <div ref={ref} style={{ height: 'auto' }}>

              <div className="mb-4 p-4"
              >
                <h3 className="img-fluid"><b>PROPOSAL</b></h3>
                <div>
                  {proposalLetter.split("\n").map((data, index) => {
                    return(
                      <span key={index}>{data}<br/></span>
                    )
                  })}
                </div>
              </div>

            </div>

            <Pdf targetRef={ref} filename="Proposal.pdf">
              {({ toPdf }) => <Button variant="primary" className="ms-4" onClick={toPdf}><FaFilePdf /> Download Pdf </Button>}
            </Pdf>
            <Button variant="success" className="ms-4" onClick={() => window.location.reload(true)}> New Request </Button>
          </Form>
        </Col>
      </Row>

    </>
  );
};

export default Result;
