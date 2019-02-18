import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchUsers } from '../actions';
import styled from 'styled-components';
import ErrorIndicator from './error-indicator';
import Loader from './loader';
import UserCard from './user-card';



class App extends Component{


    componentDidMount(){
        const { fetchUsers } = this.props;
        fetchUsers();
    }


    render(){
        const { usersList, error } = this.props;

        if(error) return <ErrorIndicator />;

        return(
            <Wrapper>
                {usersList.length === 0
                    ? <Loader /> 
                : (
                     <List>
                         {
                             usersList.map(user => {
                                 return(
                                    <ListItem key={user.id}>
                                        <UserCard user={user} />
                                    </ListItem>
                                 )
                             })
                         }
                     </List>
                  )
                }
            </Wrapper>
        )
    }
}

const mapStateToProps = ({ usersList, error }) => {
    return {
        usersList,
        error
    };
};


export default connect(mapStateToProps, { fetchUsers })(App);


const Wrapper = styled.div`
    display: flex;
    width: 100%;
    justify-content: center;
    margin-top: 20px;
`;

const List = styled.ul`
    list-style-type: none;
    margin: 0;
    padding: 0;
    font-size: 18px;
    max-width: 600px;
`;

const ListItem = styled.li`
    font-size: 18px;

`;