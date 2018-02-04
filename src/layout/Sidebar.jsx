import React from 'react'
import ListItemSingleLine from '../components/drag-components/ListItemSingleLine'
import ListItemTwoLines from '../components/drag-components/ListItemTwoLines'
import './Sidebar.css'

 const Sidebar = () => (
    <div className='Sidebar'>
        <div className='sidebar-description'>List Items</div>
        <ListItemSingleLine />
        <ListItemTwoLines />
    </div>
)

export default Sidebar