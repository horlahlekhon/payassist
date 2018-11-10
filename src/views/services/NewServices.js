import React,{Component} from 'react';
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Col,
  Form,
  FormGroup,
  FormText,
  FormFeedback,
  Input,
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  Label,
  Row,
} from 'reactstrap';
import {connect} from 'react-redux'

import createService from '../../actions/createService'
import multiCreate from '../../actions/multiCreate'
import PropTypes from 'prop-types'
import CSVReader from 'react-csv-reader'
import { Redirect , withRouter} from "react-router-dom";

  class NewServices extends Component {
  constructor(props) {
    super(props);
   
    this.state = {
      id : 0,
      serviceProviderId : '',
      tenor : 0,
      amount : 0,
      name : '',
      description : '',
      
    };
      this.onSubmit = this.onSubmit.bind(this);
      this.onChange = this.onChange.bind(this);
      this.handleCSV = this.handleCSV.bind(this)
  }
  onChange(e){
    this.setState({[e.target.name] : e.target.value})

  }
  static contextTypes = {
    router: PropTypes.object
  }
   

  onSubmit(e){
    e.preventDefault();
    let id = Math.random()*10
    let serviceProviderId = Math.random()*10
      const newService = {
      id : Math.ceil(id),
      serviceProviderId : Math.ceil(serviceProviderId).toString(),
      tenor : parseInt(this.state.tenor),
      amount : parseInt(this.state.amount),
      name : this.state.name,
      description : this.state.description,
      
    }
     console.log('submitted data',newService);
    this.props.createService(newService)
    document.getElementById('form').reset()
    alert('form submitted')
    this.context.router.history.push("/dashboard/services")
    

  }
  handleCSV(file) {
    //console.log('uploaded files', files[0] );
    const files = file.splice(1)
  
    var obj = {} 
  const  arrayServices = files.map( each => obj = {
             id : parseInt(each[0]),
            serviceProviderId:each[1],
            tenor:parseInt(each[2]),
            amount : parseInt(each[3]),
            name:each[4],
            description : each[5]
     })
     
      this.props.multiCreate(arrayServices)
      console.log('array of services',arrayServices);
      this.context.router.history.push("/dashboard/services")
    
}
    render() {
        return (
          <div>
                <Row>
                  <Col sm='5' xs='3' lg='8' >
                    <div style={{marginLeft: '10px' , display:'inline'}} className="h2">Add New Service</div>
                  </Col>
                </Row>
                <Row>
                    <Col xs="1" sm="3" lg="8">
                      <Card >
                        <CardHeader>
                          <strong>New</strong> Service
                           <Button color='success' size='sm' style={{float : 'right', width: '175px'}}>
                           <CSVReader 
                            cssClass=""
                            label=""
                            onFileLoaded={this.handleCSV}
                            inputId="service"
                          />
                            {/* <i style={{float: "right"}} className='fa fa-upload'></i> */}
                          </Button>
                          
                        </CardHeader>
                        <CardBody>
                          <Form  action="" method="post" id="form" onSubmit={this.onSubmit} className="was-validated">
                            <Row>
                                <Col xs="4" sm="6" lg="12">
                                  <FormGroup className='pr-1'>
                                      <Row>
                                        {/* <Col xs="1" sm="3" lg="6" >
                                          <InputGroup style={{marginLeft:'10px'}}>
                                            <InputGroupAddon addonType="prepend">
                                              <InputGroupText>
                                                <i className="fa fa-list-alt"></i>
                                              </InputGroupText>
                                            </InputGroupAddon>
                                            <Input type="text" onChange={this.onChange}  required={true} name='serviceProviderId' placeholder="Service Provider ID" />
                                            <FormFeedback valid className="help-block">OK</FormFeedback>
                                          </InputGroup>
                                        </Col> */}
                                        <Col xm='2' sm='3' lg='7'>
                                              <InputGroup >
                                                <InputGroupAddon addonType="prepend">
                                                  <InputGroupText>
                                                    <i className="fa fa-pencil"></i>
                                                  </InputGroupText>
                                                </InputGroupAddon>
                                                <Input type="text" onChange={this.onChange}  required={true} name='name' placeholder="Service Name" />
                                                <FormFeedback valid className="help-block">OK</FormFeedback>
                                              </InputGroup>
                                          </Col>
                                        <Col xs="1" sm="3" lg="5" >
                                          <InputGroup style={{marginLeft:'10px'}}>
                                            <InputGroupAddon addonType="prepend">
                                              <InputGroupText>
                                                <i className="fa fa-calendar-minus-o"></i>
                                              </InputGroupText>
                                            </InputGroupAddon>
                                            <Input type="select" onChange={this.onChange}  required={true} pattern="[0-9]*" name='tenor' placeholder="subscription period">
                                                    <option value=""> Select tenor </option>
                                                    <option value="7">7 Days</option>
                                                    <option value="14">Two Weeks</option>
                                                    <option value="30">1 Month</option>
                                                    <option value="61">2 Months</option>
                                                    <option value="180">6 Months</option>
                                                    <option value="366">1 year</option>
                                            </Input>
                                            <FormFeedback className="help-block">Please provide a duration for the service life circle</FormFeedback>
                                            <FormFeedback valid className="help-block">OK</FormFeedback>
                                          </InputGroup>
                                        </Col>
                                      </Row>
                                      <Row>
                                        <Col xm='2' sm='3' lg='12'>
                                            <InputGroup style={{marginTop:'20px'}}>
                                              <InputGroupAddon addonType="prepend">
                                                <InputGroupText>
                                                  <i className="fa fa-pencil"></i>
                                                </InputGroupText>
                                              </InputGroupAddon>
                                              <Input type="text" onChange={this.onChange}  required={true} name='description' placeholder="Description" />
                                              <FormFeedback valid className="help-block">OK</FormFeedback>
                                            </InputGroup>
                                        </Col>
                                      </Row>
                                      <Row>
                                          <Col xm='2' sm='3' lg='4'>
                                              <InputGroup style={{marginTop:'20px'}}>
                                                <InputGroupAddon addonType="prepend">
                                                  <InputGroupText>
                                                    <i className="fa fa-money"></i>
                                                  </InputGroupText>
                                                </InputGroupAddon>
                                                    <Input type="text" onChange={this.onChange}  required pattern="[0-9]*" className="form-control-warning" id="amount" name='amount' placeholder="Amount" />
                                                    <FormFeedback className="help-block">Please provide valid money-like value</FormFeedback>
                                                    <FormFeedback valid className="help-block">OK</FormFeedback>
                                               </InputGroup>
                                          </Col>
                                          

                                      </Row>
                                      
                                  </FormGroup>
                                </Col>
                            </Row>
                            <CardFooter>
                              <Button type="submit" size="sm" color="success" value=""><i className="fa fa-dot-circle-o"></i> Submit</Button>
                            </CardFooter>

                          </Form>

                        </CardBody>

                      </Card>

                    </Col>

                </Row>
        </div>
        );
    }
}


NewServices.propTypes = {
  createService : PropTypes.func.isRequired,
  multiCreate : PropTypes.func.isRequired
}

export default connect(null, { createService, multiCreate })(NewServices)
