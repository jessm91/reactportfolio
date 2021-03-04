import React from 'react'; 

function Resume() {

return(
<section class="mb-5">
    <h2 className="resume">Resume</h2>
        <hr></hr>
        <div class="row justify-content-center" id="resume">
            <div class="mt-5 pl-5 pr-5">
                <h2>Jessica Mangiameli</h2>
               
               <a href="https://github.com/jessm91/jessica-portfolio/blob/master/assets/resume.docx?raw=true" class="link">Download Resume</a>
               
            </div>
        </div>

        <div class="justify-content-center mt-5">
            <div>
                <h2>Proficiencies</h2>
                <p>HTML, CSS (Bootstrap, HandleBars), JavaScript, React.js, 
                    Node.js, Express.js, SQL, Sequelize, NoSQL, APIs</p>
            </div>
        </div>
</section>
);
}

export default Resume;