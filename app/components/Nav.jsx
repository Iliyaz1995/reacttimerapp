const React = require('react');
var {Link, IndexLink} = require('react-router')

var Nav = React.createClass({
  render: function(){
    return(

         <div className="top-bar">
           <div className="top-bar-left">
             <ul className="menu">
               <li className="menu-text">React Timer App!</li>
               <li><Link to="/" activeClassName="active" activeStyle={{fontWeight:"bold"}}>Timer</Link></li>
               <li><Link to="/" activeClassName="active" activeStyle={{fontWeight:"bold"}}>Countdown</Link></li>
             </ul>
           </div>
           <div className="top-bar-right">
             <ul className="menu">
               <li className="menu-text">Created By <a href="https://www.facebook.com/iliyaz1995" target="_blank">Iliyaz</a></li>
             </ul>
           </div>
         </div>
    );
  }
});

module.exports = Nav;
