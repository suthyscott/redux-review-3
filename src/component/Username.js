import React from 'react';
import {connect} from 'react-redux';
// Make this component display the username from redux store. 
function Username(props){
    // console.log(props)
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