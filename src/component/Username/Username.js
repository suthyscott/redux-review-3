import React from 'react';
import {connect} from 'react-redux';
import './Username.css'

function Username(props){
    
    return(
        <div>
            {props.user.username ? 
            <header id='username'>{props.user.username}</header>
            :
            <div>
                nothing here bro
            </div> }
            
        </div>
    )
}

const mapStateToProps = duckState => {
    return {
        user: duckState
    }
}

export default connect(mapStateToProps)(Username)