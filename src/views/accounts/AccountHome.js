import React, { Component } from "react";
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


    const TableHeader  = () => {
            return(
                <thead>
                <tr>
                    <th>ID</th>
                    <th>Last Name</th>
                    <th>First Name</th>
                    {/* <th>Middle Name</th> */}
                    <th>Phone No</th>
                    {/* <th>E-mail</th> */}
                    <th>Address</th>
                    <th>Bank</th>
                    <th>Account No</th>
                    <th>Service ID</th>
                    {/* <th>Service Type</th> */}
                    <th>Last Update</th>
                    {/* <th>Anniversary</th> */}
                    <th></th>
                </tr>
                </thead>
            )
    };
const TableBody = (props) => {
    return(
        <tbody>
        { props.body}
        </tbody>
    )
}
const AccountsTable = (props) => {
    return(
        <Table responsive striped hover>
            <TableHeader/>
            <TableBody>
                <AccountTableBody
                    accountList={props.accountList}
                />
            </TableBody>


        </Table>
    )
};
const Paginator = () => {
    return(
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
    )
}

  const AccountTableBody = (props) => {
      return(
          props.accountList.map( (account , index) => (
              <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{account.lastName}</td>
                  <td>{account.firstName}</td>
                  {/* <td>{account.middleName}</td> */}
                  <td>{account.phoneNumber}</td>
                  {/* <td>{account.email}</td> */}
                  <td>{account.address}</td>
                  <td>{account.bank}</td>
                  <td>{account.bankAccountNumber}</td>
                  <td>{account.serviceId} </td>
                  {/* <td>{account.serviceTypeId}</td> */}
                  <td>{account.updatedOn}</td>
                  {/* <td>{account.anniversary}</td> */}
                  <td>
                      <a href=''> <Badge color="success">View</Badge></a>
                  </td>
              </tr>
          )
          )
      )
  }

 const AccountHome = (props) =>  {
      

          console.log("account home",props.accountList);
          return (
              <div>
                  <Row>
                      <div className="h2">Account</div>
                      <Col col="2" className="mb-3 mb-xl-0 text-center">
                          <Button href="http://localhost:3000/#/dashboard/accounts/add"
                                  style={{float: 'right'}}
                                  color="primary" size="sm">
                              <i className="fa fa-plus"></i>&nbsp;New Account</Button>
                      </Col>

                  </Row>
                  <Row>
                      <Col xs="3" sm="6" lg="12">
                          {/* A account table here */}
                          <Card>
                              <CardHeader>
                                  <i className="fa fa-align-justify"></i> Accounts
                              </CardHeader>
                              <CardBody>
                                  <AccountsTable
                                      accountList={props.accountList}
                                  />
                                  <Paginator/>
                              </CardBody>
                          </Card>
                      </Col>
                  </Row>

              </div>
          )
      }
  


export default AccountHome
