const React = require('react')

   class New extends React.Component {
     render() {
       return (
           <div>
               <h1>Captains log page</h1>
               {/* NOTE: action will be the route, method will be the HTTP verb */}
               <form action="/logs" method="POST">
                 Title: <input type="text" name="title" /><br/>
                 Entry: <input type="text" name="entry" /><br/>
                 Ship is Broken: <input type="checkbox" name="shipIsBroken" /><br/>
                 <input type="submit" name="" value="Create log"/>
               </form>
              
           </div>)
       }
     }

   module.exports = New