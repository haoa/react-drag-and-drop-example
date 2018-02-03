import React, { Component } from 'react';
import './App.css';
import Sidebar from './layout/Sidebar'
import Viewer from './layout/Viewer'
import HTML5Backend from 'react-dnd-html5-backend'
import { DragDropContext } from 'react-dnd'
import CustomDragLayer from './CustomDragLayer'

class App extends Component {
  onDragStart = (sth) => {
    console.log('start', sth)
  }
  onDragEnd = (sth) => {
    console.log('end', sth)
  }

  render() {
    return (
      <div className="App">
        <CustomDragLayer />
        <Sidebar />
        <Viewer />
      </div>
    );
  }
}

export default DragDropContext(HTML5Backend)(App);
