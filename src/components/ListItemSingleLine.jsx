import React from 'react'
import './ListItems.css'

const ListItem = ({text}) => (
    <div className='ListItem'>
        <div style={{
            width: 40, 
            height: 40, 
            backgroundColor: '#eeeeee66', 
            borderRadius:30,
            marginLeft: 10,
            marginRight: 20,
    }}></div>
        {text ? text : 'Dummy content'}
    </div>
)

export default ListItem