import React, { Component } from 'react'
import { DropTarget } from 'react-dnd'
import DragDropTypes from '../../DragDropTypes'
import ListItemSingleLine from '../../components/ListItemSingleLine'
import './Listview.css'

const listItems = []

const viewerTarget = {
    canDrop(props, monitor) {
        let item = monitor.getItem()
        return item.type === DragDropTypes.ListItemSingleLine
    },

    hover(props, monitor, component) {
        //console.log('hovering', component)
    },

    drop(props, monitor, component) {
        let item = monitor.getItem()
        listItems.push(item)
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

const getComponentForItem = (item, key) => {
    switch(item.type) {
        case DragDropTypes.ListItemSingleLine:
            return <ListItemSingleLine key={key} />
    }
}

class ListView extends Component {
    render() {
        let { isOver, canDrop, connectDropTarget } = this.props,
            listviewClassName = isOver && !canDrop ? 'ListView Listview-no-drop' : 'ListView'
        return connectDropTarget(
            <div
                className={listviewClassName}
                style={{ backgroundColor: isOver 
                    ? canDrop 
                        ? '#458b73': '#873e2d' 
                    : '#2f5e4e' }}>
                {listItems.map((item, index) => (
                    getComponentForItem(item, index)
                ))}
            </div>)
    }
}

export default DropTarget([DragDropTypes.GeneralUIElement], viewerTarget, collect)(ListView)