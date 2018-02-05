import React, { Component } from 'react'
import { DragSource } from 'react-dnd'
import { getEmptyImage } from 'react-dnd-html5-backend'
import DragDropTypes from '../../DragDropTypes';
import './DragComponents.css'

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

class DragComponent extends Component {
    componentDidMount() {
        this.props.hasCustomDragPreview && this.props.connectDragPreview(getEmptyImage(), {captureDraggingState: true,})
    }

    render() {
        let { isDragging, connectDragSource } = this.props
        return connectDragSource(
            <div className={'list-item-drag-component ' + this.props.cssModifier || ''}>
                {this.props.itemLabel}
            </div>
        )
    }
}

const getDragComponent = (dragDropType, itemLabel, cssModifier, hasCustomDragPreview) => {
    let WithProps = DragSource(
        DragDropTypes.GeneralUIElement,
        {
            beginDrag(props, monitor, component) {
                // Return the data describing the dragged item
                const item = { id: dragDropType, type: dragDropType }
                return item;
            },
        },
        collect
    )(DragComponent)
    return <WithProps itemLabel={itemLabel} cssModifier={cssModifier} hasCustomDragPreview={hasCustomDragPreview} />
}

export default getDragComponent