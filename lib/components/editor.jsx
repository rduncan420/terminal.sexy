var _ = require('lodash');
var React = require('react');

var colorNames = [
  'bg', 'fg',
  0, 8, 1, 9, 2, 10, 3, 11,
  4, 12, 5, 13, 6, 14, 7, 15
];

var Editor = React.createClass({

  render: function () {
    var palette = _.map(colorNames, function (name) {
      return (
        <div key={name} className='block'>
          <label className='fg-8'>{name}</label>
          <div className={'color bg-'+name} />
        </div>
      );
    });

    return (
      <div className='editor'>
        <div className='palette'>
          {palette}
        </div>
      </div>
    );
  }

});

module.exports = Editor;
