import React, { Component } from 'react';
import './Personal.css';

class Personal extends Component {
    render() {
        return (

            <div>
                <nav className="navbar is-link is-fixed-top">
                    <div className="navbar-brand">
                        <div className="navbar-burger burger" data-target="navbarExampleTransparentExample">
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                    </div>

                    <div id="navbarExampleTransparentExample" className="navbar-menu">
                        <div className="navbar-end">
                            <a className="navbar-item" href="#about">
                                <span className="icon">
                                    <i className="fas fa-info"></i>
                                </span>
                                <span title="About">About</span>
                            </a>
                            <a className="navbar-item" href="#services">
                                <span className="icon">
                                    <i className="fas fa-bars"></i>
                                </span>
                                <span title="Title">Services</span>
                            </a>
                            <a className="navbar-item" href="#resume">
                                <span className="icon">
                                    <i className="fas fa-file-alt"></i>
                                </span>
                                <span>Resume</span>
                            </a>
                            <a className="navbar-item" href="#portfolio">
                                <span className="icon">
                                    <i className="fas fa-th-list"></i>
                                </span>
                                <span>Portfolio</span>
                            </a>
                            <a className="navbar-item" href="#contact">
                                <span className="icon">
                                    <i className="fas fa-envelope"></i>
                                </span>
                                <span>Contact</span>
                            </a>
                        </div>
                    </div>
                </nav>

                <section className="hero is-link is-fullheight is-fullheight-with-navbar">
                    <div className="hero-body">
                        <div className="container">Hello! I am
                            <h1 className="title is-1">
                                Minion Tim
                            </h1>
                            <h2 className="subtitle is-3">
                                Full Stack Web Developer
                            </h2>
                        </div>
                    </div>
                </section>

    
                <section className="section" id="about">


                    <div className="section-heading">
                        <h3 className="title is-2">About Me</h3>
                        <h4 className="subtitle is-5">Jack of all trades, master of "some"</h4>
                        <div className="container">
                            <p>Web developer with more than <strong>4 years</strong> of well-rounded experience with a degree in the
                                field of
                                <strong>Computer Science</strong>, extensive knowledge of modern Web techniques and love for <strong>Coffee</strong>.
                                Looking for an opportunity to work and upgrade, as well as being involved in an organization that
                                believes
                                in gaining a competitive edge and giving back to the community.</p>
                        </div>
                    </div>

                    <div className="columns has-same-height is-gapless">
                        <div className="column">

                            <div className="card">
                                <div className="card-content">
                                    <h3 className="title is-4">Profile</h3>

                                    <div className="content">
                                        <table className="table-profile">
                                            <tr>
                                                <th colspan="1"></th>
                                                <th colspan="2"></th>
                                            </tr>
                                            <tr>
                                                <td>Address:</td>
                                                <td>Guru's Lab</td>
                                            </tr>
                                            <tr>
                                                <td>Phone:</td>
                                                <td>0123-456789</td>
                                            </tr>
                                            <tr>
                                                <td>Email:</td>
                                                <td>minion@despicable.me</td>
                                            </tr>
                                        </table>
                                    </div>
                                    <br/>
                                        <div className="buttons has-addons is-centered">
                                            <a href="#" className="button is-link">Github</a>
                                            <a href="#" className="button is-link">LinkedIn</a>
                                            <a href="#" className="button is-link">Twitter</a>
                                            <a href="#" className="button is-link">CodeTrace</a>
                                        </div>
                                </div>
                            </div>
                        </div>
                        <div className="column">

                            <div className="card">
                                <div className="card-image">
                                    <figure className="image is-4by3">
                                        <img src="https://source.unsplash.com/random/1280x960" alt="Placeholder image"/>
                                    </figure>
                                </div>
                            </div>
                        </div>
                        <div className="column">


                            <div className="card">
                                <div className="card-content skills-content">
                                    <h3 className="title is-4">Skills</h3>
                                    <div className="content">

                                        <article className="media">
                                            <div className="media-content">
                                                <div className="content">
                                                    <p>
                                                        <strong>JavaScript:</strong>
                                                        <br/>
                                                            <progress className="progress is-primary" value="90" max="100"></progress>
                                                    </p>
                                                </div>
                                            </div>
                                        </article>

                                        <article className="media">
                                            <div className="media-content">
                                                <div className="content">
                                                    <p>
                                                        <strong>Vue.js:</strong>
                                                        <br/>
                                                            <progress className="progress is-primary" value="90" max="100"></progress>
                                                    </p>
                                                </div>
                                            </div>
                                        </article>

                                        <article className="media">
                                            <div className="media-content">
                                                <div className="content">
                                                    <p>
                                                        <strong>Node.js:</strong>
                                                        <br/>
                                                            <progress className="progress is-primary" value="75" max="100"></progress>
                                                    </p>
                                                </div>
                                            </div>
                                        </article>

                                        <article className="media">
                                            <div className="media-content">
                                                <div className="content">
                                                    <p>
                                                        <strong>HTML5/CSS3</strong>
                                                        <br/>
                                                            <progress className="progress is-primary" value="95" max="100"></progress>
                                                    </p>
                                                </div>
                                            </div>
                                        </article>

                                        <article className="media">
                                            <div className="media-content">
                                                <div className="content">
                                                    <p>
                                                        <strong>Databases</strong>
                                                        <br/>
                                                            <progress className="progress is-primary" value="66" max="100"></progress>
                                                    </p>
                                                </div>
                                            </div>
                                        </article>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>


                <br/>
                    <div className="tags custom-tags">
                        <span className="tag is-light">Node.js</span><span className="tag is-light">Express.js</span><span className="tag is-light">VueJS</span><span
                            className="tag is-light">JavaScript</span><span className="tag is-light">HTML5</span><span className="tag is-light">Canvas</span><span
                                className="tag is-light">CSS3</span><span className="tag is-light">Bulma</span><span className="tag is-light">Bootstrap</span><span
                                    className="tag is-light">jQuery</span><span className="tag is-light">Pug</span><span className="tag is-light">Stylus</span><span
                                        className="tag is-light">SASS/SCSS</span><span className="tag is-light">Webpack</span><span className="tag is-light">Git</span><span
                                            className="tag is-light">ASP.NET Web Forms</span><span className="tag is-light">MSSQL</span><span className="tag is-light">MongoDB</span><span
                                                className="tag is-light">Apache Cordova</span><span className="tag is-light">Chrome Extensions</span>
                    </div>

                   
                    <section className="section" id="services">
                        <div className="section-heading">
                            <h3 className="title is-2">Services</h3>
                            <h4 className="subtitle is-5">What can I do for you?</h4>
                        </div>
                        <div className="container">
                            <div className="columns">
                                <div className="column">
                                    <div className="box">
                                        <div className="content">
                                            <h4 className="title is-5">Front End Web Development</h4>
                                            Develop Front End using latest standards with HTML5/CSS3 with added funtionality using JavaScript and
                                            Vue.js.
                                        </div>
                                    </div>
                                </div>
                                <div className="column">
                                    <div className="box">
                                        <div className="content">
                                            <h4 className="title is-5">Back End Web Development</h4>
                                            Develop Back End application/service using Node.js or ASP .NET and SQL server or Mongo DB databases.
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="columns">
                                <div className="column">
                                    <div className="box">
                                        <div className="content">
                                            <h4 className="title is-5">Front End Web Development</h4>
                                            Develop Front End using latest standards with HTML5/CSS3 with added funtionality using JavaScript and
                                            Vue.js.
                                        </div>
                                    </div>
                                </div>
                                <div className="column">
                                    <div className="box">
                                        <div className="content">
                                            <h4 className="title is-5">Back End Web Development</h4>
                                            Develop Back End application/service using Node.js or ASP .NET and SQL server or Mongo DB databases.
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

        
                    <section className="section" id="resume">
                        <div className="section-heading">
                            <h3 className="title is-2">Resume</h3>
                            <h4 className="subtitle is-5">More about my past</h4>
                            <a href="#" className="button is-link is-medium">
                                <span className="icon">
                                    <i className="fas fa-file-alt"></i>
                                </span>
                                <span>Download My Resume</span>
                            </a>
                        </div>
                    </section>

            
                    <section className="section" id="portfolio">
                        <div className="container">
                            <div className="section-heading">
                                <h3 className="title is-2">Portfolio</h3>
                                <h4 className="subtitle is-5">My latest works</h4>
                            </div>
                            <br/>

                                <div className="container portfolio-container">
                                    <div className="columns">
                                        <div className="column is-4">
                            

                                            <div className="card">
                                                <header className="card-header">
                                                    <p className="card-header-title">
                                                        <span>Admin <small>(Light)</small></span>
                                                        <span className="is-pulled-right">
                                                            <a href="https://github.com/jgthms/bulma/releases/tag/0.7.2">
                                                                <span className="tag is-default">v0.7.2</span>
                                                            </a>
                                                            <span className="tag is-default">Desktop</span>
                                                            <span className="tag is-danger">WIP</span>
                                                        </span>
                                                    </p>
                                                </header>
                                                <div className="card-content">
                                                    <figure className="image">
                                                        <img src="../images/admin.png" alt="Admin template screenshot"/>
                                                    </figure>
                                                </div>
                                                <footer className="card-footer">
                                                    <a href="templates/admin.html" className="card-footer-item">Preview</a>
                                                    <a href="https://github.com/BulmaTemplates/bulma-templates/blob/master/templates/admin.html" className="card-footer-item">Source
                                                        Code</a>
                                                </footer>
                                            </div>
                                    

                                            <div className="card">
                                                <header className="card-header">
                                                    <p className="card-header-title">
                                                        <span>Cards</span>
                                                        <span className="is-pulled-right">
                                                            <a href="https://github.com/jgthms/bulma/releases/tag/0.7.2">
                                                                <span className="tag is-default">v0.7.2</span>
                                                            </a>
                                                            <span className="tag is-default">Desktop</span>
                                                            <span className="tag is-default">?</span>
                                                        </span>
                                                    </p>
                                                </header>
                                                <div className="card-content">
                                                    <figure className="image">
                                                        <img src="../images/cards.png" alt="Cards template screenshot"/>
                                                    </figure>
                                                </div>
                                                <footer className="card-footer">
                                                    <a href="templates/cards.html" className="card-footer-item">Preview</a>
                                                    <a href="https://github.com/BulmaTemplates/bulma-templates/blob/master/templates/cards.html" className="card-footer-item">Source
                                                        Code</a>
                                                </footer>
                                            </div>
                                         

                                            <div className="card">
                                                <header className="card-header">
                                                    <p className="card-header-title">
                                                        <span>Forum</span>
                                                        <span className="is-pulled-right">
                                                            <a href="https://github.com/jgthms/bulma/releases/tag/0.7.2">
                                                                <span className="tag is-default">v0.7.2</span>
                                                            </a>
                                                            <span className="tag is-default">Desktop</span>
                                                            <span className="tag is-default">Mobile</span>
                                                        </span>
                                                    </p>
                                                </header>
                                                <div className="card-content">
                                                    <figure className="image">
                                                        <img src="../images/forum.png" alt="Hero template screenshot"/>
                                                    </figure>
                                                </div>
                                                <footer className="card-footer">
                                                    <a href="templates/forum.html" className="card-footer-item">Preview</a>
                                                    <a href="https://github.com/BulmaTemplates/bulma-templates/blob/master/templates/forum.html" className="card-footer-item">Source
                                                        Code</a>
                                                </footer>
                                            </div>
                
                                            <div className="card">
                                                <header className="card-header">
                                                    <p className="card-header-title">
                                                        <span>InstaAlbum</span>
                                                        <span className="is-pulled-right">
                                                            <a href="https://github.com/jgthms/bulma/releases/tag/0.7.2">
                                                                <span className="tag is-default">v0.7.2</span>
                                                            </a>
                                                            <span className="tag is-default">Desktop</span>
                                                            <span className="tag is-default">Mobile</span>
                                                        </span>
                                                    </p>
                                                </header>
                                                <div className="card-content">
                                                    <figure className="image">
                                                        <img src="../images/instaalbum.png" alt="Landing template screenshot"/>
                                                    </figure>
                                                </div>
                                                <footer className="card-footer">
                                                    <a href="templates/instaAlbum.html" className="card-footer-item">Preview</a>
                                                    <a href="https://github.com/BulmaTemplates/bulma-templates/blob/master/templates/instaAlbum.html" className="card-footer-item">Source
                                                        Code</a>
                                                </footer>
                                            </div>


                                            <div className="card">
                                                <header className="card-header">
                                                    <p className="card-header-title">
                                                        <span>Landing</span>
                                                        <span className="is-pulled-right">
                                                            <a href="https://github.com/jgthms/bulma/releases/tag/0.7.2">
                                                                <span className="tag is-default">v0.7.2</span>
                                                            </a>
                                                            <span className="tag is-default">Desktop</span>
                                                            <span className="tag is-default">Mobile</span>
                                                        </span>
                                                    </p>
                                                </header>
                                                <div className="card-content">
                                                    <figure className="image">
                                                        <img src="../images/landing.png" alt="Landing template screenshot"/>
                                                    </figure>
                                                </div>
                                                <footer className="card-footer">
                                                    <a href="templates/landing.html" className="card-footer-item">Preview</a>
                                                    <a href="https://github.com/BulmaTemplates/bulma-templates/blob/master/templates/landing.html" className="card-footer-item">Source
                                                        Code</a>
                                                </footer>
                                            </div>

                                        </div>
                                        <div className="column is-4">


                                            <div className="card">
                                                <header className="card-header">
                                                    <p className="card-header-title">
                                                        <span>Band</span>
                                                        <span className="is-pulled-right">
                                                            <a href="https://github.com/jgthms/bulma/releases/tag/0.7.2">
                                                                <span className="tag is-default">v0.7.2</span>
                                                            </a>
                                                            <span className="tag is-default">Desktop</span>
                                                            <span className="tag is-default">?</span>
                                                        </span>
                                                    </p>
                                                </header>
                                                <div className="card-content">
                                                    <figure className="image">
                                                        <img src="../images/band.png" alt="Band template screenshot"/>
                                                    </figure>
                                                </div>
                                                    <a href="templates/band.html" className="card-footer-item">Preview</a>
                                                    <a href="https://github.com/BulmaTemplates/bulma-templates/blob/master/templates/band.html" className="card-footer-item">Source
                                                        Code</a>
                                                <footer className="card-footer">
                                                </footer>
                                            </div>
                                            
                                            <div className="card">
                                                <header className="card-header">
                                                    <p className="card-header-title">
                                                        <span>Cheatsheet</span>
                                                        <span className="is-pulled-right">
                                                            <a href="https://github.com/jgthms/bulma/releases/tag/0.7.2">
                                                                <span className="tag is-default">v0.7.2</span>
                                                            </a>
                                                            <span className="tag is-default">Desktop</span>
                                                            <span className="tag is-default">?</span>
                                                        </span>
                                                    </p>
                                                </header>
                                                <div className="card-content">
                                                    <figure className="image">
                                                        <img src="https://dummyimage.com/555x255/000/fff" alt="Cheatsheet template screenshot"/>
                                                    </figure>
                                                </div>
                                                <footer className="card-footer">
                                                    <a href="templates/cheatsheet.html" className="card-footer-item">Preview</a>
                                                    <a href="https://github.com/BulmaTemplates/bulma-templates/blob/master/templates/cheatsheet.html" className="card-footer-item">Source
                                                        Code</a>
                                                </footer>
                                            </div>
                                        
                                            <div className="card">
                                                <header className="card-header">
                                                    <p className="card-header-title">
                                                        <span>Hero</span>
                                                        <span className="is-pulled-right">
                                                            <a href="https://github.com/jgthms/bulma/releases/tag/0.7.2">
                                                                <span className="tag is-default">v0.7.2</span>
                                                            </a>
                                                            <span className="tag is-default">Desktop</span>
                                                            <span className="tag is-default">?</span>
                                                        </span>
                                                    </p>
                                                </header>
                                                <div className="card-content">
                                                    <figure className="image">
                                                        <img src="../images/hero.png" alt="Hero template screenshot"/>
                                                    </figure>
                                                </div>
                                                <footer className="card-footer">
                                                    <a href="templates/hero.html" className="card-footer-item">Preview</a>
                                                    <a href="https://github.com/BulmaTemplates/bulma-templates/blob/master/templates/hero.html" className="card-footer-item">Source
                                                        Code</a>
                                                </footer>
                                            </div>
                                    

                                            <div className="card">
                                                <header className="card-header">
                                                    <p className="card-header-title">
                                                        <span>Kanban</span>
                                                        <span className="is-pulled-right">
                                                            <a href="https://github.com/jgthms/bulma/releases/tag/0.7.2">
                                                                <span className="tag is-default">v0.7.2</span>
                                                            </a>
                                                            <span className="tag is-default">Desktop</span>
                                                            <span className="tag is-default">?</span>
                                                        </span>
                                                    </p>
                                                </header>
                                                <div className="card-content">
                                                    <figure className="image">
                                                        <img src="../images/kanban.png" alt="Kanban template screenshot"/>
                                                    </figure>
                                                </div>
                                                <footer className="card-footer">
                                                    <a href="templates/kanban.html" className="card-footer-item">Preview</a>
                                                    <a href="https://github.com/BulmaTemplates/bulma-templates/blob/master/templates/kanban.html" className="card-footer-item">Source
                                                        Code</a>
                                                </footer>
                                            </div>
                
                                            <div className="card">
                                                <header className="card-header">
                                                    <p className="card-header-title">
                                                        <span>Login</span>
                                                        <span className="is-pulled-right">
                                                            <a href="https://github.com/jgthms/bulma/releases/tag/0.7.2">
                                                                <span className="tag is-default">v0.7.2</span>
                                                            </a>
                                                            <span className="tag is-default">Desktop</span>
                                                            <span className="tag is-default">Mobile</span>
                                                        </span>
                                                    </p>
                                                </header>
                                                <div className="card-content">
                                                    <figure className="image">
                                                        <img src="../images/login.png" alt="Login template screenshot"/>
                                                    </figure>
                                                </div>
                                                <footer className="card-footer">
                                                    <a href="templates/login.html" className="card-footer-item">Preview</a>
                                                    <a href="https://github.com/BulmaTemplates/bulma-templates/blob/master/templates/login.html" className="card-footer-item">Source
                                                        Code</a>
                                                </footer>
                                            </div>
                                        </div>
                                        <div className="column is-4">


                                            <div className="card">
                                                <header className="card-header">
                                                    <p className="card-header-title">
                                                        <span>Blog</span>
                                                        <span className="is-pulled-right">
                                                            <a href="https://github.com/jgthms/bulma/releases/tag/0.7.2">
                                                                <span className="tag is-default">v0.7.2</span>
                                                            </a>
                                                            <span className="tag is-default">Desktop</span>
                                                            <span className="tag is-danger">WIP</span>
                                                        </span>
                                                    </p>
                                                </header>
                                                <div className="card-content">
                                                    <figure className="image">
                                                        <img src="../images/blog.png" alt="Blog template screenshot"/>
                                                    </figure>
                                                </div>
                                                <footer className="card-footer">
                                                    <a href="templates/blog.html" className="card-footer-item">Preview</a>
                                                    <a href="https://github.com/BulmaTemplates/bulma-templates/blob/master/templates/blog.html" className="card-footer-item">Source
                                                        Code</a>
                                                </footer>
                                            </div>


                                            <div className="card">
                                                <header className="card-header">
                                                    <p className="card-header-title">
                                                        <span>Cover</span>
                                                        <span className="is-pulled-right">
                                                            <a href="https://github.com/jgthms/bulma/releases/tag/0.7.2">
                                                                <span className="tag is-default">v0.7.2</span>
                                                            </a>
                                                            <span className="tag is-default">Desktop</span>
                                                            <span className="tag is-default">Mobile</span>
                                                        </span>
                                                    </p>
                                                </header>
                                                <div className="card-content">
                                                    <figure className="image">
                                                        <img src="../images/cover.png" alt="Cover template screenshot"/>
                                                    </figure>
                                                </div>
                                                <footer className="card-footer">
                                                    <a href="templates/cover.html" className="card-footer-item">Preview</a>
                                                    <a href="https://github.com/BulmaTemplates/bulma-templates/blob/master/templates/cover.html" className="card-footer-item">Source
                                                        Code</a>
                                                </footer>
                                            </div>


                                            <div className="card">
                                                <header className="card-header">
                                                    <p className="card-header-title">
                                                        <span>Inbox</span>
                                                        <span className="is-pulled-right">
                                                            <a href="https://github.com/jgthms/bulma/releases/tag/0.7.2">
                                                                <span className="tag is-default">v0.7.2</span>
                                                            </a>
                                                            <span className="tag is-default">Desktop</span>
                                                            <span className="tag is-default">Mobile</span>
                                                        </span>
                                                    </p>
                                                </header>
                                                <div className="card-content">
                                                    <figure className="image">
                                                        <img src="../images/inbox.png" alt="Inbox template screenshot"/>
                                                    </figure>
                                                </div>
                                                <footer className="card-footer">
                                                    <a href="templates/inbox.html" className="card-footer-item">Preview</a>
                                                    <a href="https://github.com/BulmaTemplates/bulma-templates/blob/master/templates/inbox.html" className="card-footer-item">Source
                                                        Code</a>
                                                </footer>
                                            </div>
                                            <div className="card">
                                                <header className="card-header">
                                                    <p className="card-header-title">
                                                        <span>Kanban with Search box</span>
                                                        <span className="is-pulled-right">
                                                            <a href="https://github.com/jgthms/bulma/releases/tag/0.7.2">
                                                                <span className="tag is-default">v0.7.2</span>
                                                            </a>
                                                            <span className="tag is-default">Desktop</span>
                                                            <span className="tag is-default">?</span>
                                                        </span>
                                                    </p>
                                                </header>
                                                <div className="card-content">
                                                    <figure className="image">
                                                        <img src="../images/kanban2.png" alt="Kanban template screenshot"/>
                                                    </figure>
                                                </div>
                                                <footer className="card-footer">
                                                    <a href="templates/kanban[search].html" className="card-footer-item">Preview</a>
                                                    <a href="https://github.com/BulmaTemplates/bulma-templates/blob/master/templates/kanban[search].html" className="card-footer-item">Source
                                                        Code</a>
                                                </footer>
                                            </div>


                                            <div className="card">
                                                <header className="card-header">
                                                    <p className="card-header-title">
                                                        <span>Modal Cards</span>
                                                        <span className="is-pulled-right">
                                                            <a href="https://github.com/jgthms/bulma/releases/tag/0.7.2">
                                                                <span className="tag is-default">v0.7.2</span>
                                                            </a>
                                                            <span className="tag is-default">Desktop</span>
                                                            <span className="tag is-default">?</span>
                                                        </span>
                                                    </p>
                                                </header>
                                                <div className="card-content">
                                                    <figure className="image">
                                                        <img src="https://dummyimage.com/555x255/000/fff" alt="modal-cards template screenshot"/>
                                                    </figure>
                                                </div>
                                                <footer className="card-footer">
                                                    <a href="templates/modal-cards.html" className="card-footer-item">Preview</a>
                                                    <a href="https://github.com/BulmaTemplates/bulma-templates/blob/master/templates/modal-cards.html" className="card-footer-item">Source
                                                        Code</a>
                                                </footer>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                        </div>
                    </section>
                    
                    <section className="section">
                        <nav className="level">
                            <div className="level-item has-text-centered">
                                <div>
                                    <p className="heading">Tweets</p>
                                    <p className="title">3,456</p>
                                </div>
                            </div>
                            <div className="level-item has-text-centered">
                                <div>
                                    <p className="heading">Following</p>
                                    <p className="title">123</p>
                                </div>
                            </div>
                            <div className="level-item has-text-centered">
                                <div>
                                    <p className="heading">Followers</p>
                                    <p className="title">456K</p>
                                </div>
                            </div>
                            <div className="level-item has-text-centered">
                                <div>
                                    <p className="heading">Likes</p>
                                    <p className="title">789</p>
                                </div>
                            </div>
                        </nav>
                    </section>


                    <section className="section" id="contact">
                        <div className="container">
                            <div className="section-heading">
                                <h3 className="title is-2">Contact</h3>
                                <h4 className="subtitle is-5">Get in touch</h4>
                            </div>
                            <br/>

                                <div className="columns">
                                    <div className="column is-6 is-offset-3">
                                        <div className="box">
                                            <div className="field">
                                                <label className="label">Name</label>
                                                <div className="control">
                                                    <input className="input" type="text" placeholder="Text input"/>
                                                </div>
                                            </div>

                                            <div className="field">
                                                <label className="label">Email</label>
                                                <div className="control has-icons-left">
                                                    <input className="input" type="email" placeholder="Email input" value=""/>
                                                        <span className="icon is-small is-left">
                                                            <i className="fas fa-envelope"></i>
                                                        </span>
                                                </div>
                                            </div>

                                            <div className="field">
                                                <label className="label">Message</label>
                                                <div className="control">
                                                    <textarea className="textarea" placeholder="Textarea"></textarea>
                                                </div>
                                            </div>

                                            <div className="field is-grouped has-text-centered">
                                                <div className="control">
                                                    <button className="button is-link is-large"><span className="icon">
                                                        <i className="fas fa-envelope"></i>
                                                    </span>
                                                        <span>Submit</span></button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                        </div>
                    </section>

                    <footer className="footer">
                        <div className="section-heading">
                            <p>
                                <strong>Bulma Personal Template</strong> by <a href="https://mubaidr.js.org">Muhammad Ubaid Raza</a>. The
                                source code is licensed
                                <a href="http://opensource.org/licenses/mit-license.php">MIT</a>.
                            </p>
                        </div>
                    </footer>
            </div>
        )
    }
}

export default Personal;