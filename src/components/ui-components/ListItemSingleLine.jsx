import React, { Component } from 'react'
import '../ListItems.css'

class ListItem extends Component {
    state = {
        editing: false,
        text: 'Dummy content'
    }

    onTextClick() {
        this.setState({editing: true})

    }

    onEndEditing() {
        this.setState({editing: false})
    }

    onTextChange(event) {
        this.setState({text: event.target.value})
    }

    render() {
        
        return (
            <div className='ListItem'>
                <div style={{
                    width: 40, 
                    height: 40, 
                    backgroundColor: '#eeeeee66', 
                    borderRadius:30,
                    marginLeft: 10,
                    marginRight: 20,
            }}></div>
                <div className='list-item-text' onClick={this.onTextClick.bind(this)}>
                    {this.state.editing
                        ? <input
                            autoFocus 
                            className='list-item-text-edit' 
                            type='text' 
                            onKeyUp={(event) => {event.keyCode === 13 ? this.onEndEditing() : null}}
                            onBlur={this.onEndEditing.bind(this)} 
                            onChange={this.onTextChange.bind(this)}
                            onFocus={(event) => event.target.select()}
                            value={this.state.text}
                        />
                        : this.state.text}
                </div>
            </div>
        )
    }
}

export default ListItem