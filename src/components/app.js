import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import ErrorIndicator from './error-indicator';
import Loader from './loader';
import { getUsers } from '../services/user-service';


class App extends Component{


    componentDidMount(){
        const { getUsers } = this.props;
        getUsers();
    }
    render(){
        const { usersList, error, loading } = this.props;
        console.log(usersList, error, loading);
        return(
            <div>hey</div>
        )
    }
}

const mapStateToProps = ({ usersList, error, loading }) => {
    return {
        usersList,
        error,
        loading
    };
};

export default connect(mapStateToProps, { getUsers })(App);