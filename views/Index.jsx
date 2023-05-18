const React = require('react')
// const DefaultLayout = require('../layout/Default');

class Index extends React.Component {
    render() {
        const { logs } = this.props;
        return (
            <div>
                <h1>logs Index Page</h1>
                {/* <nav>
                    <a href="/logs/new">Create a New log</a>
                </nav> */}
                <ul>
                    {logs.map((log, i) => {
                        return (
                            <li>
                                Captain's daily log title is {' '}
                                <a href={`/logs/${log._id}`}>
                                    {log.title}
                                </a>{' '}
                                , entry is {log.entry} <br></br>
                                {log.shipIsBroken
                                    ? `True`
                                    : `False`}
                                <br />
                                <a href={`/logs/${log._id}/edit`}>Edit</a>
                                <form id={`${log._id}`} action={`/logs/${log._id}?_method=DELETE`} method="POST">
                                    <input type="submit" value="DELETE" />
                                </form>
                            </li>
                        );
                    })}
                </ul>
                <nav>
                    <a href="/logs/new">Create a New log</a>
                </nav>
            </div>
        );
    }
}
module.exports = Index;