// requires at the top 
const React = require('react') 

// component... This one is a class component
class Show extends React.Component {
   render () {
    const log = this.props.log
    return (
        <div>
        <h1> logs Show Page </h1>
          The {log.name} is {log.title}
          {log.shipIsBroken? '. Its broken' : '. It is not broken' }
          <nav>
                    <a href="/logs">Back to captain's logs</a>
                </nav>
        </div>
     )
    }
 }
 module.exports  = Show;