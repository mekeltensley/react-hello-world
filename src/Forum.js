import React, { Component } from 'react';
import './Forum.css';

const comment = {
    message: "I love coding. All day everyday....",
    author: "@theodore",
};

const commentList = [
    {
        message: 'I love bball....',
        author: '@stephcurry'
    },
    {
        message: 'What are those???? ....',
        author: '@mike'
    },
    {
        message: 'What up ...',
        author: '@john'
    },
    {
        message: 'Comment here ...',
        author: '@jake'
    },
    {
        message: 'Lets go ...',
        author: '@tombrady'
    },
]

const displayCommentList = commentList.map((c, idx) => {
    return (
        <article className="post">
            <h4>{comment.message}</h4>
            <div className="media">
                <div className="media-left">
                    <p className="image is-32x32">
                        <img src="http://bulma.io/images/placeholders/128x128.png" alt="" />
                    </p>
                </div>
                <div className="media-content">
                    <div className="content">
                        <p>
                            <a href="#">{comment.author}</a> replied 34 minutes ago &nbsp;
                            <span className="tag">Question</span>
                        </p>
                    </div>
                </div>
                <div className="media-right">
                    <span className="has-text-grey-light"
                    ><i className="fa fa-comments"></i> 1</span
                    >
                </div>
            </div>
        </article>

    );
});

class Forum extends Component {
    render() {
        return (
            <div>
                <nav class="navbar is-white topNav">
                    <div class="container">
                        <div class="navbar-brand">
                            <a class="navbar-item" href="../">
                                <img src="../images/bulma.png" width="112" height="28" />
                            </a>
                            <div class="navbar-burger burger" data-target="topNav">
                                <span></span>
                                <span></span>
                                <span></span>
                            </div>
                        </div>
                        <div id="topNav" class="navbar-menu">
                            <div class="navbar-start">
                                <a class="navbar-item" href="cover.html">Home</a>
                                <a class="navbar-item" href="landing.html">Landing</a>
                                <a class="navbar-item" href="blog.html">Blog</a>
                                <a class="navbar-item" href="instaAlbum.html">Album</a>
                                <a class="navbar-item" href="kanban[search].html">Kanban</a>
                                <a class="navbar-item" href="search.html">Search</a>
                                <a class="navbar-item" href="tabs.html">Tabs</a>
                            </div>
                            <div class="navbar-end">
                                <div class="navbar-item">
                                    <div class="field is-grouped">
                                        <p class="control">
                                            <a class="button is-small">
                                                <span class="icon">
                                                    <i class="fa fa-user-plus"></i>
                                                </span>
                                                <span>
                                                    Register
                                                </span>
                                            </a>
                                        </p>
                                        <p class="control">
                                            <a class="button is-small is-info is-outlined">
                                                <span class="icon">
                                                    <i class="fa fa-user"></i>
                                                </span>
                                                <span>Login</span>
                                            </a>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </nav>
                <nav class="navbar is-white">
                    <div class="container">
                        <div class="navbar-menu">
                            <div class="navbar-start">
                                <a class="navbar-item is-active" href="#">Popular</a>
                                <a class="navbar-item" href="#">Recent</a>
                                <a class="navbar-item" href="#">Rising</a>
                            </div>
                            <div class="navbar-end">
                                <div class="navbar-item">
                                    <input class="input" type="search" placeholder="Search forum..." />
                                </div>
                            </div>
                        </div>
                    </div>
                </nav>
                <section class="container">
                    <div class="columns">
                        <div class="column is-3">
                            <a class="button is-primary is-block is-alt is-large" href="#">New Post</a>
                            <aside class="menu">
                                <p class="menu-label">
                                    Tags
                                </p>
                                <ul class="menu-list">
                                    <li><span class="tag is-primary is-medium ">Dashboard</span></li>
                                    <li><span class="tag is-link is-medium ">Customers</span></li>
                                    <li><span class="tag is-light is-danger is-medium ">Authentication</span></li>
                                    <li><span class="tag is-dark is-medium ">Payments</span></li>
                                    <li><span class="tag is-success is-medium ">Transfers</span></li>
                                    <li><span class="tag is-warning is-medium ">Balance</span></li>
                                    <li><span class="tag is-medium ">Question</span></li>
                                </ul>
                            </aside>
                        </div>
                        <div class="column is-9">
                            <div class="box content">
                                <article class="post">
                                    <h4>Bulma: How do you center a button in a box?</h4>
                                    <div class="media">
                                        <div class="media-left">
                                            <p class="image is-32x32">
                                                <img src="http://bulma.io/images/placeholders/128x128.png" />
                                            </p>
                                        </div>
                                        <div class="media-content">
                                            <div class="content">
                                                <p>
                                                    <a href="#">@jsmith</a> replied 34 minutes ago &nbsp;
                                                    <span class="tag">Question</span>
                                                </p>
                                            </div>
                                        </div>
                                        <div class="media-right">
                                            <span class="has-text-grey-light"><i class="fa fa-comments"></i> 1</span>
                                        </div>
                                    </div>
                                </article>
                                <article class="post">
                                    <h4>How can I make a bulma button go full width?</h4>
                                    <div class="media">
                                        <div class="media-left">
                                            <p class="image is-32x32">
                                                <img src="http://bulma.io/images/placeholders/128x128.png" />
                                            </p>
                                        </div>
                                        <div class="media-content">
                                            <div class="content">
                                                <p>
                                                    <a href="#">@red</a> replied 40 minutes ago &nbsp;
                                                    <span class="tag">Question</span>
                                                </p>
                                            </div>
                                        </div>
                                        <div class="media-right">
                                            <span class="has-text-grey-light"><i class="fa fa-comments"></i> 0</span>
                                        </div>
                                    </div>
                                </article>
                                <article class="post">
                                    <h4>TypeError: Data must be a string or a buffer when trying touse vue-bulma-tabs</h4>
                                    <div class="media">
                                        <div class="media-left">
                                            <p class="image is-32x32">
                                                <img src="http://bulma.io/images/placeholders/128x128.png" />
                                            </p>
                                        </div>
                                        <div class="media-content">
                                            <div class="content">
                                                <p>
                                                    <a href="#">@jsmith</a> replied 53 minutes ago &nbsp;
                                                    <span class="tag">Question</span>
                                                </p>
                                            </div>
                                        </div>
                                        <div class="media-right">
                                            <span class="has-text-grey-light"><i class="fa fa-comments"></i> 13</span>
                                        </div>
                                    </div>
                                </article>
                                <article class="post">
                                    <h4>How to vertically center elements in Bulma?</h4>
                                    <div class="media">
                                        <div class="media-left">
                                            <p class="image is-32x32">
                                                <img src="http://bulma.io/images/placeholders/128x128.png" />
                                            </p>
                                        </div>
                                        <div class="media-content">
                                            <div class="content">
                                                <p>
                                                    <a href="#">@brown</a> replied 3 hours ago &nbsp;
                                                    <span class="tag">Question</span>
                                                </p>
                                            </div>
                                        </div>
                                        <div class="media-right">
                                            <span class="has-text-grey-light"><i class="fa fa-comments"></i> 2</span>
                                        </div>
                                    </div>
                                </article>
                                <article class="post">
                                    <h4>I'm trying to use hamburger menu on bulma css, but it doesn't work. What is wrong?</h4>
                                    <div class="media">
                                        <div class="media-left">
                                            <p class="image is-32x32">
                                                <img src="http://bulma.io/images/placeholders/128x128.png" />
                                            </p>
                                        </div>
                                        <div class="media-content">
                                            <div class="content">
                                                <p>
                                                    <a href="#">@hamburgler</a> replied 5 hours ago &nbsp;
                                                    <span class="tag">Question</span>
                                                </p>
                                            </div>
                                        </div>
                                        <div class="media-right">
                                            <span class="has-text-grey-light"><i class="fa fa-comments"></i> 2</span>
                                        </div>
                                    </div>
                                </article>
                                <article class="post">
                                    <h4>How to make tiles wrap with Bulma CSS?</h4>
                                    <div class="media">
                                        <div class="media-left">
                                            <p class="image is-32x32">
                                                <img src="http://bulma.io/images/placeholders/128x128.png" />
                                            </p>
                                        </div>
                                        <div class="media-content">
                                            <div class="content">
                                                <p>
                                                    <a href="#">@rapper</a> replied 3 hours ago &nbsp;
                                                    <span class="tag">Question</span>
                                                </p>
                                            </div>
                                        </div>
                                        <div class="media-right">
                                            <span class="has-text-grey-light"><i class="fa fa-comments"></i> 2</span>
                                        </div>
                                    </div>
                                </article>
                                {displayCommentList}
                            </div>
                        </div>
                    </div>
                </section>
                <footer class="footer">
                    <div class="container">
                        <div class="content has-text-centered">
                            <div class="columns is-mobile is-centered">
                                <div class="field is-grouped is-grouped-multiline">
                                    <div class="control">
                                        <div class="tags has-addons">
                                            <a class="tag is-link" href="https://github.com/BulmaTemplates/bulma-templates">Bulma Templates</a>
                                            <span class="tag is-light">Daniel Supernault</span>
                                        </div>
                                    </div>
                                    <div class="control">
                                        <div class="tags has-addons">
                                            <a class="tag is-link">The source code is licensed</a>
                                            <span class="tag is-light">MIT &nbsp;<i class="fa fa-github"></i></span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </footer>
            </div>
        );
    }
}

export default Forum;