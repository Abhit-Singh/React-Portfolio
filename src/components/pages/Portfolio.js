import React from 'react';

export default function Portfolio() {
  return (
    <div>
            <div className='panelhead'>Work</div>
            <div>
                <a href="https://github.com/Abhit-Singh/Note-Taker" target="_blank" className="card img1 fitImageBackground" id="project1">
                    <div className="card-title card-title-show-1">
                        <h3>Note-Taker</h3>
                        <p>I developed this Note-Taker .I am studying web development and it's one of my weekly projects.</p>
                    </div>
                </a>
                <a href="https://github.com/Abhit-Singh/Weather-Dashboard" target="_blank"  className="card img2 fitImageBackground" id="project2">
                    <div className="card-title card-title-show-2">
                        <h3>Weather Dashboard</h3>
                        <p>Its a simple weather application that allows a user to check the weather outlook for multiple cities SO that they can plan a trip accordingly.</p>
                    </div>
                </a>
                <a href="https://github.com/Abhit-Singh/Stock-Checker" target="_blank"  className="card img3 fitImageBackground" id="project3">
                    <div className="card-title card-title-show-3">
                        <h3>Stock-checker</h3>
                        <p>An application that details the price of a given stock as well as any associated news.</p>
                    </div>
                </a>
                <a href="https://github.com/Abhit-Singh/Work-Day-Scheduler" target="_blank"  className="card img4 fitImageBackground" id="project4">
                    <div className="card-title card-title-show-4">
                        <h3>Work-Day-Scheduler</h3>
                        <p>I developed this Work-Day-Scheduler.I am studying web development and it's one of my weekly projects.</p>
                    </div>
                </a>
                <a href="https://github.com/Abhit-Singh/Mango-Dashboard" target="_blank"  className="card img5 fitImageBackground" id="project5">
                    <div className="card-title card-title-show-5">
                        <h3>Mango Project</h3>
                        <p>A project management dashboard helps project teams track projects</p>
                    </div>
                </a>
            </div>
        </div>
  );
}
