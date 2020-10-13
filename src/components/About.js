import React from 'react'
import '../App.css';

const About = () => {
    return (
        <div className="container">
            <br />
            <br />
            <p>A second-year Computer Science undergraduate at <a href="https://www.smu.edu.sg/" target="_blank">Singapore Management University (SMU)</a>, I have a varied range of skills and interests, and am actively seeking internships (for the summer and December breaks) to continue to learn and grow as well as contribute to an organisation.</p>
            <p>I've had experience / am familiar with:</p>
            <ul className="show-points">
                <li>Web development (HTML, CSS, JavaScript - vanilla, jQuery, React)</li>
                <li>Building Java applications</li>
                <li>Game development with Unity</li>
                <li>Databases with MySQL</li>
                <li>Python for general programming and data analysis</li>
                <li>C for general programming</li>
                <li>Agile practices</li>
                <li>Basic ethical hacking</li>
            </ul>
            <br />
            <p>Some additional stuff that usually do not make it into my professional profiles:</p>
            <ul>
                <li>
                    <div>
                        <h6><b>Computer Graphics</b></h6>
                        <p>I have a growing interest in the field of computer graphics, both from the perspective of programming and art. Currently, I have been exploring the art side, experimenting with 3D software like Blender and Maya. I plan to explore the programming side in the near future.</p>
                    </div>
                </li>

                <li>
                    <div>
                        <h6><b>Rails Girls</b></h6>
                        <p>Prior to university, I was actively involved with Rails Girls Kuala Lumpur (RGKL). Besides mentoring workshop participants in web development, I organised events for my local city chapter. Fun fact: I also joined Rails Girls London's event as it happened to take place when I was in London for vacation in December 2018.</p>
                        <p>Here are a couple of interviews I have contributed to as part of RGKL:</p>
                        <ul>
                            <li><a href="https://blog.surialabs.com/empowering-women-in-tech-rails-girls-kl/">SuriaLabs: EMPOWERING WOMEN IN TECH</a></li>
                            <li><a href="https://www.makchic.com/rails-girls-kuala-lumpur-opening-the-world-of-coding-to-girls/">MakChic: Opening the world of coding to girls</a></li>
                        </ul>
                    </div>
                </li>

                <li>
                    <div>
                        <h6><b>Events & Backstage</b></h6>
                        <p>At SMU, I am involved with the school's broadcast and entertainment society, particularly in their Events & Backstage department. I have received training in Live Sound Reinforcement, Lighting and am currently undertaking Stage Management training.</p>
                    </div>
                </li>
            </ul>
            <br />
            <br />

        </div>
    )
}

export default About;