import React from 'react'
import { DropTarget } from 'react-dnd'
import DragDropTypes from '../../DragDropTypes';

const viewerTarget = {
    canDrop(props, monitor) {
        let item = monitor.getItem()
        return item.type === DragDropTypes.ListItemSingleLine
    },

    hover(props, monitor, component) {
        //console.log('hovering', component)
    },

    drop(props, monitor, component) {
        console.log('did', monitor.getItem())
    }
}


const collect = ( connect, monitor ) => {
    return {
        // Call this function inside render()
        // to let React DnD handle the drag events:
        connectDropTarget: connect.dropTarget(),
        // You can ask the monitor about the current drag state:
        isOver: monitor.isOver(),
        isOverCurrent: monitor.isOver({ shallow: true }),
        canDrop: monitor.canDrop(),
        itemType: monitor.getItemType()
    }
}

const ListView = ({ isOver, canDrop, connectDropTarget }) => (
        connectDropTarget(
            <div
                style={{ backgroundColor: isOver 
                    ? canDrop 
                        ? '#458b73': '#873e2d' 
                    : '#2f5e4e' }}
                className='ListView'>
            </div>)
)

export default DropTarget([DragDropTypes.GeneralUIElement], viewerTarget, collect)(ListView)