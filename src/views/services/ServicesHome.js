import React, { Component } from 'react'
import {
    Badge,
    Card,
    CardBody,
    CardFooter,
    CardHeader,
    CardTitle,
    Col,
    Row,
    Table,
    Pagination,
    PaginationItem,
    PaginationLink,
    Button
  } from 'reactstrap';
import {connect} from 'react-redux'
import getServiceList from '../../actions/getServiceList.js'


class ServicesHome extends Component {
    constructor(props){
        super(props)
        this.state = {

        }
    }

    componentWillMount(){
        this.props.getServiceList()
    }
    render(){
        console.log('list acciunt',this.props.serviceList);
        const serviceTableBody = this.props.serviceList.map( (service, index) => (
      <tr key={index}>
             <td>{index + 1}</td>
             <td>{service.serviceProviderId}</td>
             <td>{service.tenor}</td>
             <td>{service.amount}</td>
             <td>{service.name}</td>
             <td>{service.description}</td>
             <td>
                 <a href=''><Badge color="success">view</Badge></a>
            </td>
      </tr>
    )
    )
        return(
            <div >
            <Row>
                <div className="h2">Services</div>
                <Col col="2" className="mb-3 mb-xl-0 text-center" >
                    <Button  href="http://localhost:3000/#/dashboard/services/add"
                      style={{float: 'right'}}
                       color="primary" size="sm" >
                       <i className="fa fa-lightbulb-o"></i>&nbsp;New Service</Button>
                </Col>

            </Row>

                <Row>

                    <Col  xs="12" lg="12">
                         {/* Services table here remember to configure the responsiveness */}
                        <Card>
                             <CardHeader>
                                <i className="fa fa-align-justify"></i>Services
                             </CardHeader>
                             <CardBody>
                                  <Table responsive striped hover  >
                                      <thead>
                                         <tr>
                                            <th>ID</th>
                                            <th>SP ID</th>
                                            <th>Tenor</th>
                                            <th>Amount</th>
                                            <th>Service Name</th>
                                            <th>Description</th>
                                            <th></th>
                                         </tr>
                                      </thead>
                                      <tbody>
                                         {serviceTableBody}
                                      </tbody>

                                   </Table>
                                   <Pagination>
                                        <PaginationItem disabled><PaginationLink previous tag="button">Prev</PaginationLink></PaginationItem>
                                        <PaginationItem active>
                                            <PaginationLink tag="button">1</PaginationLink>
                                        </PaginationItem>
                                        <PaginationItem><PaginationLink tag="button">2</PaginationLink></PaginationItem>
                                        <PaginationItem><PaginationLink tag="button">3</PaginationLink></PaginationItem>
                                        <PaginationItem><PaginationLink tag="button">4</PaginationLink></PaginationItem>
                                        <PaginationItem><PaginationLink next tag="button">Next</PaginationLink></PaginationItem>
                                    </Pagination>
                              </CardBody>
                        </Card>
                     </Col>
                 </Row>

             </div>
        )
    }
}
const mapStateToProps = (state) => ({
    serviceList : state.AccountAndServiceReducers.serviceList
})
export default connect(mapStateToProps,{getServiceList})(ServicesHome)
