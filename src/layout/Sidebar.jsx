import React from 'react'
import ListItemSingleLine from '../components/ListItemSingleLine'
import ListItemTwoLines from '../components/ListItemTwoLines'
import './Sidebar.css'

 const Sidebar = () => (
    <div className='Sidebar'>
        <ListItemSingleLine />
        <ListItemTwoLines />
    </div>
)

export default Sidebar