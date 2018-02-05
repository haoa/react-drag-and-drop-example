import React, { Component } from 'react'
import { DragSource } from 'react-dnd'
import { getEmptyImage } from 'react-dnd-html5-backend'
import DragDropTypes from '../../DragDropTypes';
import './DragComponents.css'

const simpleButtonSource = {
    beginDrag(props, monitor, component) {
        // Return the data describing the dragged item
        const item = { id: DragDropTypes.SimpleButton, type: DragDropTypes.SimpleButton }
        return item;
    },
}

const collect = (connect, monitor) => {
    return {
        // Call this function inside render()
        // to let React DnD handle the drag events:
        connectDragSource: connect.dragSource(),
        // You can ask the monitor about the current drag state:
        isDragging: monitor.isDragging(),
        connectDragPreview: connect.dragPreview()
    }
}

class SimpleButton extends Component {
    componentDidMount() {
        /* this.props.connectDragPreview(getEmptyImage(), {captureDraggingState: true,}) */
    }

    render() {
        let { isDragging, connectDragSource } = this.props
        return connectDragSource(
            <div className='list-item-drag-component button'>
                Simple Button
            </div>
        )
    }
}

export default DragSource(DragDropTypes.GeneralUIElement, simpleButtonSource, collect)(SimpleButton)