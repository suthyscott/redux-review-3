import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import './Username.css'


function Username(props) {
    const [iconClassName, setIconClassName] = useState('hide')

    const [buttonClass, setButtonClass] = useState('first')

    function handleToggleMenu() {
        iconClassName === 'hide' ? setIconClassName('show') : setIconClassName('hide')
    }

    const handleSomeAnimation = () => {
        setButtonClass('second')
        setTimeout(() => {
            setButtonClass('first')

        }, 2000)

    }

    return (
        <div className='username-container'>

            {/* <img onClick={() => handleToggleMenu()} className='menu-icon' src="https://img.icons8.com/material-rounded/24/000000/menu.png"></img>

            <header id='username'>{iconClassName === 'show' ?
                <>
                     <span>{props.user.username} likes:</span>
                </>
                :
                <>
                    {props.user.username}
                </>

            }</header>

            <div className={iconClassName}>

                <p>peanut butter</p>
                <p>pizza</p>
                <p>Me want cookie now!!</p>
            </div> */}

            {/* {iconClassName === 'hide' ?
                <div>
                    <img onClick={() => handleToggleMenu()} className='menu-icon' src="https://img.icons8.com/material-rounded/24/000000/menu.png"></img>

                    <header id='username'>{props.user.username}</header>
                </div>
                
                :
                <div>

                    <img onClick={() => handleToggleMenu()} className='menu-icon' src="https://img.icons8.com/material-rounded/24/000000/menu.png"></img>

                    <header id='username'>{props.user.username} is:</header>

                    <div className={iconClassName}>

                        <p>7' 11"</p>
                        <p>546 lbs</p>
                        <p>and wants a cookie</p>
                    </div>
                </div>
            } */}

            <img onClick={() => handleToggleMenu()} src="https://img.icons8.com/material-rounded/24/000000/menu.png"></img>

            <div className={iconClassName}>
                <p>a thing</p>
                <p>more things</p>
                <p>stuff</p>
            </div>

            <button className={buttonClass} onClick={() => handleSomeAnimation()}>SHOW</button>
        </div>
    )
}

const mapStateToProps = duckState => {
    return {
        user: duckState
    }
}

export default connect(mapStateToProps)(Username)