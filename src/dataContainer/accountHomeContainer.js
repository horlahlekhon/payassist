import React from 'react'
//import {Component} from 'react'
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import  getAccountList from "../actions/getAccountList";
import AccountHome from '../views/accounts/AccountHome'

class AccountHomeContainer extends React.Component {

    componentDidMount(){
        this.props.getAccountList();
        console.log("component did mount",this.props.accountList)
    }

    render(){
        return(
            <AccountHome
                accountList={this.props.accountList}
            />
        )
    }
}
const mapStateToProps = state => ({
    accountList : state.AccountAndServiceReducers.accountList
});
const mapDispatchToProps = dispatch => {
    console.log("map dispatch to props ");
    return {
        getAccountList : () => {
            dispatch(getAccountList())
        }
    }

};
//const mapDispatchToProps = {getAccountList}

export default connect(mapStateToProps, mapDispatchToProps)(AccountHome);
