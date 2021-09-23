import React, { Component } from 'react'
import { NavLink } from 'react-router-dom';
import '../App.css';

class Portfolio extends Component {

    state = {
        games : [
            {id:1, title: "Anon", url:"https://venushmallow.github.io/Anon/", desc: "A simple narrative game where you learn basic OSINT skills and track down your missing friend. School project for Software Project Management. My role included building Levels 1-2."},
            {id:2, title: "Housemates from Hell", url:"https://wallflower6.itch.io/housemates-from-hell", desc: "A very simple game made for GMTK Game Jam 2021 (theme: Joined Together) in under 48 hours using free assets from Kenney and OpenGameArt. For MacOS."},
            {id:3, title: "Lame Space Collector", url:"https://wallflower6.github.io/LameSpaceCollector/", desc: "Collect stars and gems in a spacecraft but keep an eye out for asteroids! Inspired by snake, a project to try some beginner's independent work in Unity."},
            {id:4, title: "Pong Clone", url:"https://wallflower6.github.io/PongClone/", desc: "Pong clone, drew on Noobtuts' tutorial. Added in some extras, like a trail effect, increasing speed, single-player mode, scoreboard, menu, audio."}
        ],
        web : [
          {id:1, title: "Toothless (CSS)", url:"https://codepen.io/wallflower6/full/MLmJLj", desc: "Toothless from Dreamworks' How To Train Your Dragon, made with CSS. A simple project to celebrate the release of the third film, The Hidden World."},
          {id:2, title: "Tribute Page", url:"https://wallflower6.github.io/tribute-page/", desc: "A tribute page to Alan Turing, made as a freeCodeCamp project. The UI was inspired by the Bletchley Park bombe, but greyed out."},
          {id:3, title: "House of Quotes", url:"https://codepen.io/wallflower6/full/NvPdvN", desc: "A random quote machine, made as a freeCodeCamp project. Fetches from the Forismatic API."},
          {id:4, title: "Wikipedia Viewer", url:"https://codepen.io/wallflower6/full/WdbpWL", desc: "Search and view wikipedia articles, made as a freeCodeCamp project. Uses the Wikipedia API."},
          {id:5, title: "Product Landing Page", url:"https://codepen.io/wallflower6/full/omeBYx", desc: "How To Train Your Dragon-themed product landing page, a freeCodeCamp project. Frontend only, with no backend functionality."},
          {id:6, title: "Whack-A-Char", url:"https://wallflower6.github.io/whack-a-char/", desc: "Based on Wes Bos's JS30 tutorial, modified with characters from my favourite films, includes a mallet and sound effects."}
        ],
        misc: [
            {id:1, title: "Blender: Doughnut", url:"https://drive.google.com/file/d/1np4tHk0nE_ebUuQckdqy7Wz482BCKMK5/view?usp=sharing", desc: "Followed Blender Guru's doughnut tutorial, and here's my final render. It was my first attempt at 3D modelling, texturing and lighting."},
            {id:2, title: "Blender: Sword Scene", url:"https://drive.google.com/file/d/1y6MLLDpA7E_KcbsmwT67G7lxyGq0-ecc/view?usp=sharing", desc: "Followed CG Fast Track's tutorial series. I got to brush up on 3D modelling, learned to use HDRIs, imported assets, was introduced to composition."},
            {id:3, title: "Blender: Room", url:"https://drive.google.com/file/d/11UNg1f4jv8kKnTb0jAIgYYGEUfjUJaXr/view?usp=sharing", desc: "Followed Polygon Runway's tutorial. Brushed up on 3D modelling, and learned basic lighting and image texturing in Blender."}
        ]
    }

    render() {
        return (
            <div className="container">
                <br />
                <h5>Game Projects</h5>
                <br />
                <div className="grid-container">
                {this.state.games.map(
                    project => {
                        return (
                            <div className="grid-item" key={project.id}>
                                <h6 className="title"><b><a href={project.url} target="_blank">{project.title}</a></b></h6>
                                <p>{project.desc}</p>
                            </div>
                        )
                    }
                )}
                </div>
                <br />
                <br />
                <h5>Web Projects</h5>
                <br />
                <div className="grid-container">
                {this.state.web.map(
                    project => {
                        return (
                            <div className="grid-item" key={project.id}>
                                <h6 className="title"><b><a href={project.url} target="_blank">{project.title}</a></b></h6>
                                <p>{project.desc}</p>
                            </div>
                        )
                    }
                )}
                </div>
                <br />
                <br />
                <h5>Miscellaneous</h5>
                <br />
                <div className="grid-container">
                {this.state.misc.map(
                    project => {
                        return (
                            <div className="grid-item" key={project.id}>
                                <h6 className="title"><b><a href={project.url} target="_blank">{project.title}</a></b></h6>
                                <p>{project.desc}</p>
                            </div>
                        )
                    }
                )}
                </div>
                <br />
                <br />
            </div>
        )
    }
}

export default Portfolio;
