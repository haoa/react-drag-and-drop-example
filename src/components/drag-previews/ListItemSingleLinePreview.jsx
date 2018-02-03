import React from 'react';
import '../ListItems.css'

const ListItemSingleLinePreview = () => (
    <div className='ListItemDragging'>
        <div style={{
            width: 40, 
            height: 40, 
            backgroundColor: '#eeeeee66', 
            borderRadius:30,
            marginLeft: 10,
            marginRight: 20,
    }}></div>
        This is a long single line of text
    </div>
)

export default ListItemSingleLinePreview