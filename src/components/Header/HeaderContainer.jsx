import React from 'react';
import { connect } from 'react-redux';
import Header from './Header';
import {setAuthData, authThunk} from '../../redux/authReducer';

class HeaderContainer extends React.Component {
    
    componentDidMount() {
        this.props.authThunk();
    }
    
    render() {
        return ( <Header {...this.props} /> )
    }
}

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login
});

export default connect(mapStateToProps, {setAuthData, authThunk})(HeaderContainer);