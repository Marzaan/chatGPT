import React, { useState } from "react";
import { Col, Row, Form, Button, Spinner, FormGroup } from "react-bootstrap";
import { useForm } from "react-hook-form";
import "./Home.css";
import Result from "../Result/Result";
import { toast } from 'react-hot-toast';
import Endpoints from "../../constants/Endpoints";
import Variables from "../../constants/Variables";
import axios from "axios";

function Home() {

  const [proposalData, setProposalData] = useState(null);
  const [isLoading, setLoading] = useState(false);
  const techStacks = Variables.techStacks;

  const { register, handleSubmit, reset } = useForm();

  const onSubmit = async (data) => {

    setLoading(true);
    const formData = {
      "techStack": data?.techStack,
      "jobTitle": data?.jobTitle,
      "jobDescription": data?.jobDes
    }
    console.log(formData);
    toast.success('The form has been submitted.. Please Wait');
    await axios.post(Endpoints.addInfo, formData)
      .then(response => {
        let res = response.data.msg;
        if (res[0] === '\n') {
          res = res.slice(1);
        }
        setProposalData(res);
      })
      .catch(error => {
        toast.error(error.message);
        console.log(error);
      });

    setLoading(false);
    reset();
  };

  return (
    <div className="rt-home mt-5">
      {proposalData === null ? (
        <Row className="justify-content-md-center">

          <Col md="9">
            <h3>Please fill up the below information to proceed:</h3>
            <Form
              className="mt-3 bg-light p-4 shadow mb-3 rounded"
              onSubmit={handleSubmit(onSubmit)}
            >

              <Row>
                <Col>
                  <Form.Group
                    className="mb-4"
                    controlId="exampleForm.ControlInput1"
                  >
                    <Form.Label>Job Title: </Form.Label>
                    <Form.Control
                      {...register("jobTitle", { required: true })}
                      type="text"
                      placeholder="Title of the Job"
                    />
                  </Form.Group>
                </Col>
                <Col>
                  <Form.Group
                    className="mb-4"
                    controlId="exampleForm.ControlInput1"
                  >

                    <Form.Label>Tech Stack: </Form.Label>
                    <Form.Select aria-label="Default select example"  {...register("techStack", { required: true })}>
                      <option>Select The Tech Stack</option>
                      {techStacks.map((item, index) => (
                        <option key={index} value={item}>{item}</option>
                      ))}
                    </Form.Select>
                  </Form.Group>
                </Col>
              </Row>

              <Row>
                <FormGroup>
                  <Form.Label>Job Description: </Form.Label>
                  <Form.Control as="textarea" rows={6} {...register("jobDes", { required: true })}/>
                </FormGroup>
              </Row>

              {
                isLoading ?
                  <Spinner
                    as="span"
                    animation="border"
                    size="sm"
                    role="status"
                    aria-hidden="true"
                  />
                  :
                  <Button
                    className="mt-2"
                    variant="primary"
                    type="submit">
                      Submit
                  </Button>
              }

            </Form>
          </Col>
        </Row>
      ) : (
        <Result 
          proposalLetter={proposalData}
        />
      )}
    </div>
  );
}

export default Home;
