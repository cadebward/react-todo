/* @flow */

'use strict';

var React = require('react')

var BlankItem = React.createClass({
  getInitialState() {
    return {
      name: null,
      description: null,
    }
  },

  add() {
    var item = {
      name: this.state.name,
      description: this.state.description
    }

    if (item.name && item.description) {
      this.props.add(item)
    }

    this.setState({
      name: null,
      description: null,
    })

  },



  onChange(e, propName) {
    var obj = {};
    obj[propName] = e.target.value
    this.setState(obj)
  },

  render() {
    return (
      <div className="clearfix" style={styles.item}>
        <input style={styles.name} value={this.state.name} onChange={(e) => this.onChange(e, 'name')} />
        <input style={styles.description} value={this.state.description} onChange={(e) => this.onChange(e, 'description')} />
        <div style={styles.edit} onClick={this.add}>Add</div>
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
    background: 'green',
    border: 'none',
    clear: 'right',
    cursor: 'pointer',
    float: 'left',
    padding: 5
  },
}

module.exports = BlankItem