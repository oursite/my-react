import React, { Component }  from 'react'
import { render } from 'react-dom'
import { Router, Route, IndexRoute, Link, IndexLink, browserHistory } from 'react-router'
import util from 'util'

import links from 'assets/config/links'

//create the left index linkes
var getLink = function(item ,sub){
  if(!item.title){
    return '';
  }
  return <li className= {item.options.className}><Link to={item.to}>{item.title}</Link> {sub}</li>;
}

var getItems = function(val, res){
  if(util.isArray(val) && val.length > 0){
    var res =<ul>{
          val.map(function(item){
            return getLink(item, getItems(item.items, res));
          })
        }</ul>;
  }
  return res;
}

class leftLink extends Component {
    render () {
      return (
        <div>
            { getItems(links,'') }
        </div>
      );
    }
};

export default leftLink