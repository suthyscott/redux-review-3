import React from 'react';
import { connect } from 'react-redux';
import { checkUser, registerUser, loginUser, logoutUser } from '../../ducks/userReducer';
import './Header.css'

class Header extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            showInputs: false,
            username: '',
            password: '',
            loggedIn: false,
            showSecondHeader: false

        }
    }

    componentDidMount() {
        this.props.checkUser()
        this.setState({
            user: this.props.user
        })
    }

    componentDidUpdate(prevProps) {
        if (prevProps !== this.props) {
            this.setState({
                loggedIn: false
            })
        }
        if (this.props.user.username && this.props.user.id && this.state.loggedIn === false) {
            this.setState({ loggedIn: true })
        }

    }

    handleUpdateUsername = val => {
        this.setState({
            username: val
        })
    }

    handleUpdatePassword = val => {
        this.setState({
            password: val
        })
    }

    handleToggleInputs = () => {
        this.setState({ showInputs: !this.state.showInputs })
    }
    render() {
        return (
            <div className='header-container'>
                <header className='header'>This is a header</header>
                {/* <header className='second-header'>This is a second header</header> */}

                {this.state.showInputs ?

                    <div className='input-view'>
                        {this.state.loggedIn ?

                            <button className='header-button' onClick={() => this.props.logoutUser()}>Logout</button>

                            :

                            <div className='input-view-container'>
                                <section className='input-view-inputs'>
                                    <input
                                        className='header-input'
                                        onChange={e => this.handleUpdateUsername(e.target.value)} />

                                    <input
                                        className='header-input'
                                        onChange={e => this.handleUpdatePassword(e.target.value)} />
                                </section>

                                <section className='input-view-buttons'>
                                    <button
                                        className='header-button'
                                        onClick={() => this.props.registerUser(this.state.username, this.state.password)}>Register</button>

                                    <button
                                        className='header-button'
                                        onClick={() => this.props.loginUser(this.state.username, this.state.password)}>Login</button>
                                </section>

                            </div>
                        }
                    </div>
                    :
                    <div className='enter-view'>
                        {this.state.loggedIn ?

                            <button
                                className='header-button'
                                onClick={() => this.props.logoutUser()}>Logout</button>
                            :

                            <button
                                className='header-button'
                                onClick={() => this.handleToggleInputs()}>Enter</button>
                        }
                    </div>
                }

            </div>
        )
    }
}

const mapStateToProps = duckState => {
    return {
        user: duckState
    }
}

export default connect(mapStateToProps, { checkUser, registerUser, loginUser, logoutUser })(Header)