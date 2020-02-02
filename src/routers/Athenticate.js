import React,{ Component } from 'react';
import { connect } from 'react-redux';

const Athenticate = (WrappedComponent)=>{
    return (props)=>{
        if(jwtToken){
            return WrappedComponent
        }else{
            return <p>Not Allowed</p>
        }
    }
}

const mapToStateToProps = (state,props)=>({
    jwtToken:state.token || 'token'
})

export default connect(mapToStateToProps)(Athenticate);