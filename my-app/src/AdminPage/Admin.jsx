
import './Admin.css'

function Admin() {
    return ( 
        <div>
            <h1>CSS Grid Layout</h1>
            <p>The Grid Layout Module offers a grid-based layout system, with rows and columns.</p>
            <p>The Grid Layout Module makes it easy to design complex and responsive web pages without using floats and positioning:</p>
            <div className="container">
            <div className="menu">
                <a href="#">Link 1</a>
                <br/>
                <a href="#">Link 2</a>
                <br/>
                <a href="#">Link 3</a>
            </div>
            <div className="content">
            <div className="header"><h2>My Header</h2></div>
                <h3>Lorem Ipsum</h3>
                <p>Lorem ipsum odor amet, consectetuer adipiscing elit. Ridiculus sit nisl laoreet facilisis aliquet. Potenti dignissim litora eget montes rhoncus sapien neque urna. Cursus libero sapien integer magnis ligula lobortis quam ut.</p></div>
                <div className="footer">
                    <h4>Footer</h4>
                </div>
            </div>
        </div>
    );
}

export default Admin;