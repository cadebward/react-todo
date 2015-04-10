/* @flow */

'use strict';

var React = require('react')

var Item = React.createClass({
  getInitialState() {
    return {
      completed: false,
    }
  },

  removeItem() {
    this.props.remove(this.props.id)
  },

  toggleComplete(e) {
    this.setState({
      completed: !this.state.completed
    })
  },

  editItem(e) {
    console.log('Edit ' + this.props.item.name)
  },

  render() {
    var itemStyle = {
      clear: 'both',
      padding: 10,
    }

    if (this.state.completed) {
      itemStyle.backgroundColor = 'pink';
    }

    return (
      <div className="clearfix" style={itemStyle}>
        <div style={styles.name}>{ this.props.item.name }</div>
        <div style={styles.description}>{ this.props.item.description }</div>
        <div style={styles.edit} onClick={this.editItem}>Edit</div>
        <div style={styles.options}>
          <input type="checkbox" onChange={this.toggleComplete}/>
          <span style={styles.delete} onClick={this.removeItem}>&#xd7;</span>
        </div>
      </div>
    )
  }
})

var styles = {
  item: {
    clear: 'both',
    padding: 10
  },
  name: {
    fontWeight: '900',
  },
  description: {
    color: '#777',
  },
  edit: {
    background: '#99f',
    border: 'none',
    clear: 'right',
    cursor: 'pointer',
    float: 'left',
    padding: 5
  },
  options: {
    float: 'right'
  },
  delete: {
    background: '#f00',
    borderRadius: 100,
    boxSizing: 'border-box',
    cursor: 'pointer',
    display: 'inline-block',
    fontSize: 23,
    height: 25,
    lineHeight: '17px',
    marginLeft: 10,
    padding: 5,
    textAlign: 'center',
    width: 25
  }
}

module.exports = Item