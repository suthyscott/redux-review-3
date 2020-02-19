import React from 'react';
import {connect} from 'react-redux';
import {checkUser, registerUser, loginUser, logoutUser} from '../ducks/userReducer'

class Header extends React.Component {
    constructor(props){
        super(props)

        this.state = {
            showInputs: false,
            username: '',
            password: '',
            loggedIn: false

        }
    }

    componentDidMount(){
        this.props.checkUser()
        console.log(this.props)
        this.setState({
            user: this.props.user
        })
    }

    componentDidUpdate(prevProps){
        console.log(prevProps, this.props)
        if(prevProps !== this.props){
            this.setState({
                loggedIn: false
            })
        }
               if(this.props.user.username && this.props.user.id && this.state.loggedIn === false){
                this.setState({loggedIn: true})
            } 
        
    }

    handleUpdateUsername = val => {
        this.setState({
            username: val
        })
    }    

    handleUpdatePassword  = val => {
        this.setState({
            password: val
        })
    } 

    handleToggleInputs = () => {
        this.setState({showInputs: !this.state.showInputs})
    }
    render(){
        console.log(this.state)
        console.log(this.props)
        return(
            <div className='header'>
                Header.js

                {this.state.showInputs ? 
                <div>                
                {this.state.loggedIn ? <button onClick={() => this.props.logoutUser()}>Logout</button> : 
                    <div>
                        <input onChange={e => this.handleUpdateUsername(e.target.value)} />
                        <input onChange={e => this.handleUpdatePassword(e.target.value)}/>
                        <button onClick={() => this.props.registerUser(this.state.username, this.state.password)}>Register</button>
                        <button onClick={() => this.props.loginUser(this.state.username, this.state.password)}>Login</button>
                    </div>}
                </div>
                :
                <div>
                    {this.state.loggedIn ? <button onClick={() => this.props.logoutUser()}>Logout</button> : 
                    <button onClick={() => this.handleToggleInputs()}>Login</button>}
                </div>
                }

            </div>
        )
    }
}

const mapStateToProps = duckState => {
    return{
        user: duckState
    }
}

export default connect(mapStateToProps, {checkUser, registerUser, loginUser, logoutUser}) (Header)