import React from 'react'
import ListItemSingleLine from '../components/drag-components/ListItemSingleLine'
import ListItemTwoLines from '../components/drag-components/ListItemTwoLines'
import SimpleButton from '../components/drag-components/SimpleButton'
import getDragComponent from '../components/drag-components/DragComponent'
import DragDropTypes from '../DragDropTypes'
import './Sidebar.css'

 const Sidebar = () => (
    <div className='Sidebar'>
        <div className='sidebar-title'>GUI Elements</div>
        <div className='sidebar-description'>List Items</div>
        <ListItemSingleLine />
        <ListItemTwoLines />
        {getDragComponent(DragDropTypes.ListItemSingleLine, 'Three Lines', '', true)}
        <div className='sidebar-description'>Buttons</div>
        <SimpleButton />
        {getDragComponent(DragDropTypes.SimpleButton, 'Complex Button', 'button')}
    </div>
)

export default Sidebar