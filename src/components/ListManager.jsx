var React = require('react');
var List = require('./List.jsx');


var ListManager = React.createClass({
  getInitialState: function() {
    return {
      items: [],
      newItemText: ''
    }
  },
  handleSubmit: function(e) {
    e.preventDefault();

    var currentItems = this.state.items;
    currentItems.push(this.state.newItemText);

    this.setState({
      items: currentItems,
      newItemText: ''
    });
  },
  onChange: function(e) {
    this.setState({
      newItemText: e.target.value
    });
  },
  render: function() {
    var divStyle = {
      marginTop: 10
    };

    var formStyle = {
      marginLeft: 20,
      marginRight: 20,
      marginBottom: 10
    };

    var headingStyle = {

    };

    if (this.props.headingColor) {
      headingStyle.backgroundColor = this.props.headingColor;
    }

    var inputStyle = {

    }

    return (
      <div className="col-sm-4" style={divStyle}>
        <div className="panel panel-danger">
          <div className="panel-heading" style={headingStyle}>
            <h4>{this.props.title}</h4>
          </div>
          <div className="row panel-body">
            <form onSubmit={this.handleSubmit}>
              <div className="input-group" style={formStyle}>
                <input className="form-control" type="text" onChange={this.onChange} value={this.state.newItemText} />
                <span className="input-group-btn">
                  <button style={headingStyle} className="btn btn-danger">Add</button>
                </span>
              </div>
            </form>
            <List items={this.state.items}/>
          </div>
        </div>
      </div>
    )
  }
});

module.exports = ListManager;
