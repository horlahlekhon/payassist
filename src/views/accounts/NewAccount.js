import React,{Component} from 'react';
import {
  Badge,
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
import createAccount from '../../actions/createAccount'
import multiCreateAccount from '../../actions/multiCreateAccount'
import getServiceList from '../../actions/getServiceList'
//import getAccountList from  '../../actions/getAccountList'
import PropTypes from 'prop-types'
import CSVReader from 'react-csv-reader'


class NewAccount extends Component{
  constructor(props){
    super(props)
    this.state = {
      id:0,
      lastName: '',
      firstName:'',
      middlename : '',
      phoneNumber : '',
      email :'',
      address : '',
      bank : '',
      bankAccountNumber:'',
      serviceid : '',
      serviceTypeId:0,
      updatedOn: '',
      anniversary : '',
      banksList:['UBA','GTB',"First Bank",
      "Zenith Bank","FCMB","EcoBank","Diamond Bank",
      "Fidelity Bank","Heritage Bank","Keystone Bank",
      "Stanbic IBTC","Skye Bank","Union Bank","United Bank",
      "Sun Trust Bank","Wema Bank","Jaiz Bank",
      "FBN merchant Bank","FSDH Merchant Bank",
      "Coronantion Merchant Bank","Rand Merchant Bank","Nova Merchant Bank","Barclays Bank"]
      

    }
    this.onChange = this.onChange.bind(this)
    this.onSubmit = this.onSubmit.bind(this)
    this.handleCSV = this.handleCSV.bind(this)

  }
  onChange(e){
    this.setState({[e.target.name] : e.target.value})

  }



  static contextTypes = {
    router: PropTypes.object
  }
  onSubmit(e){
    e.preventDefault()
    const anniversary = this.state.anniversary + '--00:00:00'
    const updatedOn = this.state.updatedOn + '--00:00:00'
    const id = Math.random()*10
  
    const newAccount = {
      id: Math.ceil(id),
      lastName: this.state.lastName,
      firstName:this.state.firstName,
      middleName : this.state.middleName,
      phoneNumber : this.state.phoneNumber,
      email :this.state.email,
      address : this.state.address,
      bank : this.state.bank,
      bankAccountNumber:this.state.bankAccountNumber,
      serviceId : this.state.serviceId,
      serviceTypeId : parseInt(this.state.serviceTypeId),
      updatedOn : anniversary,  ///TODO calculate the date to be set to current time when the account is updated 
      anniversary : anniversary,

    }
    console.log('submitted data',newAccount);
    document.getElementById('form').reset()
    this.props.createAccount(newAccount)
    alert('account details submitted')
    this.context.router.history.push("/dashboard/accounts")

  }
  componentWillMount(){
      this.props.getServiceList()
  }
  handleCSV(file){
    let files = file.splice(1)
    const id = Math.random()*10
    let obj = {}
    let uploadedAccounts = files.map(account => obj ={
      id : parseInt(account[0]),
      lastName : account[1],
      firstName : account[2],
      middleName : account[3],
      phoneNumber : account[4],
      email : account[5],
      address : account[6],
      bank : account[7],
      bankAccountNumber : account[8],
      serviceId : account[9],
      serviceTypeId :  parseInt(account[10]),
      updatedOn:account[12] + '--00:00:00',
      anniversary : account[12]+ '--00:00:00',
    })
    console.log('List of uploadedd accounts',uploadedAccounts);
    this.props.multiCreateAccount(uploadedAccounts)
    console.log('List of uploadedd accounts',uploadedAccounts);
    this.context.router.history.push("/dashboard/accounts")

  }
  


  render(){
   // console.log('list services in new account page',this.props.serviceList);
   console.log('list of returned accounts after succesfully upload', this.props.newUploadedAccounts);
   
    return(
        <div>
        <Row>
          <Col sm='5' xs='3' lg='8' >
            <div style={{marginLeft: '10px' , display:'inline'}} className="h2">Add New Account</div>
              <Col col="2" className="mb-3 mb-xl-0 text-center" >
                
              </Col>
          </Col>
        </Row>
          <Row>
            <Col xs="1" sm="3" lg="8">
            <Card >
              <CardHeader>
                <strong>New</strong> Account
                <Button color='success' size='sm' style={{float : 'right', width: '175px'}}>
                           <CSVReader 
                            cssClass=""
                            label=""
                            onFileLoaded={this.handleCSV}
                            inputId="account"
                          />
                            {/* <i style={{float: "right"}} className='fa fa-upload'></i> */}
                 </Button>
              </CardHeader>
              <CardBody>

                      <Form action="" method="post" id="form"  onSubmit={this.onSubmit} className="was-validated">
                          <Row>
                              <Col xs="4" sm="6" lg="12">
                                <FormGroup>
                                    <Row>
                                        <Col xs="3" sm="6" lg="12">
                                            <Label>Last name</Label>
                                            <InputGroup>
                                              <InputGroupAddon addonType="prepend">
                                                <InputGroupText>
                                                  <i className="fa fa-id-card"></i>
                                                </InputGroupText>
                                              </InputGroupAddon>
                                              <Input onChange={this.onChange} name='lastName' type="text" required placeholder="" />
                                              <FormFeedback valid className="help-block">OK</FormFeedback>
                                            </InputGroup>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col xs="1" sm="3" lg="12" style={{marginTop:'10px'}}>
                                            <Label>Last name</Label>
                                            <InputGroup>
                                              <InputGroupAddon addonType="prepend">
                                                <InputGroupText>
                                                  <i className="fa fa-id-card"></i>
                                                </InputGroupText>
                                              </InputGroupAddon>
                                              <Input onChange={this.onChange} name='firstName' type="text" required placeholder="" />
                                               <FormFeedback valid className="help-block">OK</FormFeedback>
                                            </InputGroup>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col xs="3" sm="6" lg="12" style={{marginTop:'10px'}}>
                                            <Label>Other name</Label>
                                            <InputGroup>
                                              <InputGroupAddon addonType="prepend">
                                                <InputGroupText>
                                                  <i className="fa fa-id-card"></i>
                                                </InputGroupText>
                                              </InputGroupAddon>
                                              <Input onChange={this.onChange} name='middleName' type="text" placeholder="" />
                                            </InputGroup>
                                        </Col>
                                    </Row>
                                    <Row>
                                       <Col xs="1" sm="3" lg="6" style={{marginTop:'10px'}}>
                                            <Label>Telephone</Label>
                                            <InputGroup>
                                              <InputGroupAddon addonType="prepend">
                                                <InputGroupText>
                                                  <i className="fa fa-hashtag"></i>
                                                </InputGroupText>
                                              </InputGroupAddon>
                                              <Input onChange={this.onChange} name='phoneNumber' type="text" required placeholder="" pattern="[0-9]*" maxLength={11} minLength={11}/>
                                              <FormFeedback className="help-block">Please provide  a valid phoneNumber</FormFeedback>
                                              <FormFeedback valid className="help-block">OK</FormFeedback>
                                            </InputGroup>
                                        </Col>
                                        <Col xs="1" sm="3" lg="6" style={{marginTop:'10px'}}>
                                            <Label>E-mail</Label>
                                            <InputGroup>
                                              <InputGroupAddon addonType="prepend">
                                                <InputGroupText>
                                                  <i className="fa fa-id-card"></i>
                                                </InputGroupText>
                                              </InputGroupAddon>
                                              <Input onChange={this.onChange} name='email' required type="email" placeholder="" />
                                              <FormFeedback className="help-block">Inputed email address is not valid</FormFeedback>
                                              <FormFeedback valid className="help-block">OK</FormFeedback>
                                            </InputGroup>
                                        </Col>

                                    </Row>
                                    <Row>
                                        <Col xs="3" sm="6" lg="12" style={{marginTop:'10px'}}>
                                                <Label>Address</Label>
                                                <InputGroup>
                                                  <InputGroupAddon addonType="prepend">
                                                    <InputGroupText>
                                                      <i className="fa fa-id-card"></i>
                                                    </InputGroupText>
                                                  </InputGroupAddon>
                                                  <Input onChange={this.onChange} name='address' type="text" placeholder="" required/>
                                                  <FormFeedback valid className="help-block">OK</FormFeedback>
                                                </InputGroup>
                                            </Col>
                                    </Row>       
                                    <Row>
                                          <Col xs="1" sm="3" lg="6" style={{marginTop:'10px'}}>
                                               <Label>Address</Label>
                                              <InputGroup>
                                                <InputGroupAddon addonType="prepend">
                                                  <InputGroupText>
                                                    <i className="fa fa-credit-card"></i>
                                                  </InputGroupText>
                                                </InputGroupAddon>
                                                
                                                  <Input onChange={this.onChange} name='bank' type="select" >
                                                    <option value=""> Select Bank</option>
                                                    {this.state.banksList.map((bank, index) => (
                                                      <option key={index} value={bank}> {bank}</option>
                                                    ))}
                                                  </Input>
                                                  <FormFeedback valid className="help-block">OK</FormFeedback>
                                              </InputGroup>
                                          </Col>
                                          <Col xs="1" sm="3" lg="6" style={{marginTop:'10px'}}>
                                              <Label> Bank Account Number</Label>  
                                              <InputGroup>
                                                <InputGroupAddon addonType="prepend">
                                                  <InputGroupText>
                                                    <i className="fa fa-id-card"></i>
                                                  </InputGroupText>
                                                </InputGroupAddon>
                                                <Input onChange={this.onChange} name='bankAccountNumber' type="text" placeholder="" />
                                                <FormFeedback valid className="help-block">OK</FormFeedback>
                                              </InputGroup>
                                          </Col>
                                    </Row>   
                                    <Row>
                                        <Col xs="1" sm="3" lg="6" style={{marginTop:'10px'}}>
                                            <Label>Service ID</Label>
                                            <InputGroup>
                                              <InputGroupAddon addonType="prepend">
                                                <InputGroupText>
                                                  <i className="fa fa-id-card"></i>
                                                </InputGroupText>
                                              </InputGroupAddon>
                                              <Input onChange={this.onChange} name='serviceId' type="text" required placeholder="" />
                                              <FormFeedback valid className="help-block">OK</FormFeedback>
                                            </InputGroup>
                                        </Col>
                                        <Col xs="1" sm="3" lg="6" style={{marginTop:'10px'}}>
                                          <Label>Service Type</Label>
                                            <InputGroup>
                                              <InputGroupAddon addonType="prepend">
                                                <InputGroupText>
                                                  <i className="fa fa-id-card"></i>
                                                </InputGroupText>
                                              </InputGroupAddon>
                                              <Input onChange={this.onChange} required name='serviceTypeId' required type="select" placeholder="" >
                                                <option  value=''>Select Service Type</option>
                                                {
                                                  this.props.serviceList.map((service, index) =>
                                                   <option key={index} value={service.id}>{service.name}</option>)
                                                }
                                              </Input>
                                              {/* <FormFeedback className="help-block">Inputed email address is not valid</FormFeedback> */}
                                              <FormFeedback valid className="help-block">OK</FormFeedback>                                           
                                            </InputGroup>
                                        </Col>
                                        
                                        

                                    </Row>
                                    <Row>
                                    <Col xs="1" sm="2" lg="6" style={{marginTop:'10px',marginLeft:'20px'}}>
                                                <FormGroup row style={{width:'320px'}}>
                                                    <Label>Anniversary</Label>
                                                    <InputGroup >
                                                        <InputGroupAddon addonType="prepend">
                                                          <InputGroupText>
                                                            <i className="fa fa-id-card"></i>
                                                          </InputGroupText>
                                                        </InputGroupAddon>
                                                        <Input onChange={this.onChange} name='anniversary' required type="date" id="date-input"  placeholder="                                          " />
                                                        <FormFeedback valid className="help-block">OK</FormFeedback>
                                                      </InputGroup>
                                                </FormGroup>
                                              </Col>   

                                    </Row>
                                </FormGroup>
                              </Col>
                          </Row>
                          <Button type="submit" size="sm" color="success" value=""><i className="fa fa-dot-circle-o"></i> Submit</Button>
                      </Form>
              </CardBody>
             </Card>
            </Col>
          </Row>
        </div>
    )
  }
}

const mapStateToProps = (state) => ({
  serviceList : state.AccountAndServiceReducers.serviceList,
  newUploadedAccounts : state.AccountAndServiceReducers.multiAccountInsertSuccess
})
 export default connect(mapStateToProps, {createAccount,getServiceList,multiCreateAccount})(NewAccount)
