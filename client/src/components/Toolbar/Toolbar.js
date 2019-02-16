import React from 'react'
import { ToggleButton } from '../SideDrawer'
import './Toolbar.css'


const Toolbar = ({ drawerClickHandler }) => (
    <header className='toolbar'>
        <nav className='toolbar__navigation'>
            <div>
                <ToggleButton 
                    click={drawerClickHandler} 
                />
            </div>
            <div className='toolbar__logo'><a href='/'>THE LOGO</a></div>
            <div className='spacer' />
            <div className='toolbar__navigation-items'>
                <ul>
                    <li><a href='/'>Products</a></li>
                    <li><a href='/'>Users</a></li>
                </ul>
            </div>
        </nav>
    </header>
)


export { Toolbar }
