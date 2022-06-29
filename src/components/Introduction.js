import React from 'react'

export default function Introduction() {
    return (
        <>
        <div>
            <div className="container my-5">
                <h2>Hello There !</h2>
                <h3>I am <strong className='text-success'>Uday Singh</strong> - Web Developer , Programmer, Technology Enthusiast and a Nature Lover</h3>
                <div className="container my-3">
                    <h4>Currently Persuing My B.Tech in -</h4>
                    <h5 className='text-info'>Computer Science and Engineering from - </h5>
                    <h3 className='text-primary'>Indian Institute of Technology Guwahati , Guwahati</h3>
                    <h5>Assam , <strong>INDIA</strong></h5>
                </div>
                <div className="container my-3">
                    <h3 className='text-success'><strong>Frameworks</strong> - in which I am Working</h3>
                    <ul>
                        <li><strong>React </strong> - most Popular Single Page Library often called as Framework</li>
                    </ul>
                </div>
                <div className="container my-3">
                    <h4><strong className='text-danger'>Programming Languages</strong></h4>
                    <div className="container">
                        <ul style={{ color: 'green' }}>
                            <li><h4>HTML5 - Hyper Text Markup Language </h4></li>
                            <li><h4>CSS3 - Cascading Style Sheets</h4></li>
                            <li><h4>Vanilla JavaScript - Fastest Growing Language </h4></li>
                            <li><h4>C/C++</h4></li>
                            <li><h4>Core Java</h4></li>
                        </ul>
                    </div>
                </div>
                <div className="container my-3">
                    <h3>Projects on which I am currently Working Now : </h3>
                    <hr />
                    <h4>1. <strong ><a rel='noreferrer' href="https://uday755.github.io/TextUtils/" target={"_blank"}>TextUtils</a></strong> - a text Utility application can be used for text manipulation</h4>
                    <h4>2. <strong>Spotify</strong> - clone of popular music app Spotify </h4>
                    <h4>3. <strong>NewsWorld </strong> - a News Application which can be used for personal purpose for daily Updates</h4>
                    <h4>4. <strong><a rel='noreferrer' href="https://uday755.github.io/Uday-Portfolio/"> Uday-Portfolio</a></strong> - My Personal Portfolio Website</h4>
                    <h4>5. <strong> MagicNotes </strong>- a Notes Taking Application for Personal purpose</h4>
                </div>
                <hr />
                <div className="container my-3">
                    <h4 className='text-center text-secondary'><strong>Educational Qualifications</strong>:</h4>
                    <ul>
                        <li><h4>Done 12th Grade from D.A.V Public School, Tohana (125120) Haryana India</h4></li>
                        <li><h4>Qualified JEE Mains 2018,JEE Mains 2019</h4></li>
                        <li><h4>Qualified JEE Advanced 2018,JEE Advanced 2019</h4></li>
                    </ul>
                </div>
            </div>
        </div>
        </>
    )
}
