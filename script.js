// Change image with mouse hover to gif
function changeImage(projectId, imageUrl) {
    var projectElement = document.getElementById(projectId);
    if (projectElement) {
        projectElement.src = imageUrl;
    }
}

// Open project modal
function openModal(projectId) {
    var modal = document.getElementById("myModal");
    var modalContent = document.getElementById("modalContent");

    // Update modal content based on the project clicked
    var projectContent = getProjectContent(projectId);
    modalContent.innerHTML = projectContent;

    modal.style.display = "block";
}

// Close project modal
function closeModal() {
    var modal = document.getElementById("myModal");
    var youtubeVideo = document.getElementById("youtubeVideo");

    youtubeVideo.src = "";
    modal.style.display = "none";
}

// Set modal with project information
function getProjectContent(projectId) {

    var videoId; // Set the YouTube video ID for each project
    var projectContent;

    // Determine the video ID and project information based on the selected project
    switch (projectId) {
        case 'project1':
            videoId = 'HFdBSmzKYks?si=IBT3jPlfA9A22kUT';
            projectContent = `
                        <h2>COBRA KAI 2</h2>
                        <div class="project-video">
                            <iframe id="youtubeVideo" width="560" height="315" src="https://www.youtube.com/embed/${videoId}" frameborder="0" allowfullscreen></iframe>
                        </div>
                        <div class="project-description">
                        <p>Make your choice – Eagle Fang, Cobra Kai, or Miyagi-do – marks the beginning of your journey. It's up to you to recruit the most powerful team, master your fighting style, and battle to establish your dojo's legacy as the All Valley Karate Grand Champion.</p>
                        </div>
                        <div class="project-links">
                            <h2>Links</h2>
                            <a href="#">Link 1</a>
                            <a href="#">Link 2</a>
                        </div>
`                   ;
            break;
        case 'project2':
            videoId = 'HFdBSmzKYks?si=IBT3jPlfA9A22kUT';
            projectContent = `
                        <h2>COBRA KAI 2</h2>
                        <div class="project-video">
                            <iframe id="youtubeVideo" width="560" height="315" src="https://www.youtube.com/embed/${videoId}" frameborder="0" allowfullscreen></iframe>
                        </div>
                        <div class="project-description">
                        <p>Make your choice – Eagle Fang, Cobra Kai, or Miyagi-do – marks the beginning of your journey. It's up to you to recruit the most powerful team, master your fighting style, and battle to establish your dojo's legacy as the All Valley Karate Grand Champion.</p>
                        </div>
                        <div class="project-links">
                            <h2>Links</h2>
                            <a href="#">Link 1</a>
                            <a href="#">Link 2</a>
                        </div>
`                   ;
            break;
        case 'project3':
            videoId = 'HFdBSmzKYks?si=IBT3jPlfA9A22kUT';
            projectContent = `
                        <h2>COBRA KAI 2</h2>
                        <div class="project-video">
                            <iframe id="youtubeVideo" width="560" height="315" src="https://www.youtube.com/embed/${videoId}" frameborder="0" allowfullscreen></iframe>
                        </div>
                        <div class="project-description">
                        <p>Make your choice – Eagle Fang, Cobra Kai, or Miyagi-do – marks the beginning of your journey. It's up to you to recruit the most powerful team, master your fighting style, and battle to establish your dojo's legacy as the All Valley Karate Grand Champion.</p>
                        </div>
                        <div class="project-links">
                            <h2>Links</h2>
                            <a href="#">Link 1</a>
                            <a href="#">Link 2</a>
                        </div>
`                   ;
            break;
        case 'project4':
            videoId = 'HFdBSmzKYks?si=IBT3jPlfA9A22kUT';
            projectContent = `
                        <h2>COBRA KAI 2</h2>
                        <div class="project-video">
                            <iframe id="youtubeVideo" width="560" height="315" src="https://www.youtube.com/embed/${videoId}" frameborder="0" allowfullscreen></iframe>
                        </div>
                        <div class="project-description">
                        <p>Make your choice – Eagle Fang, Cobra Kai, or Miyagi-do – marks the beginning of your journey. It's up to you to recruit the most powerful team, master your fighting style, and battle to establish your dojo's legacy as the All Valley Karate Grand Champion.</p>
                        </div>
                        <div class="project-links">
                            <h2>Links</h2>
                            <a href="#">Link 1</a>
                            <a href="#">Link 2</a>
                        </div>
`                   ;
            break;
        case 'project5':
            videoId = 'HFdBSmzKYks?si=IBT3jPlfA9A22kUT';
            projectContent = `
                        <h2>COBRA KAI 2</h2>
                        <div class="project-video">
                            <iframe id="youtubeVideo" width="560" height="315" src="https://www.youtube.com/embed/${videoId}" frameborder="0" allowfullscreen></iframe>
                        </div>
                        <div class="project-description">
                        <p>Make your choice – Eagle Fang, Cobra Kai, or Miyagi-do – marks the beginning of your journey. It's up to you to recruit the most powerful team, master your fighting style, and battle to establish your dojo's legacy as the All Valley Karate Grand Champion.</p>
                        </div>
                        <div class="project-links">
                            <h2>Links</h2>
                            <a href="#">Link 1</a>
                            <a href="#">Link 2</a>
                        </div>
`                   ;
            break;
        case 'project6':
            videoId = 'HFdBSmzKYks?si=IBT3jPlfA9A22kUT';
            projectContent = `
                        <h2>COBRA KAI 2</h2>
                        <div class="project-video">
                            <iframe id="youtubeVideo" width="560" height="315" src="https://www.youtube.com/embed/${videoId}" frameborder="0" allowfullscreen></iframe>
                        </div>
                        <div class="project-description">
                        <p>Make your choice – Eagle Fang, Cobra Kai, or Miyagi-do – marks the beginning of your journey. It's up to you to recruit the most powerful team, master your fighting style, and battle to establish your dojo's legacy as the All Valley Karate Grand Champion.</p>
                        </div>
                        <div class="project-links">
                            <h2>Links</h2>
                            <a href="#">Link 1</a>
                            <a href="#">Link 2</a>
                        </div>
`                   ;
            break;
        case 'project7':
            videoId = 'HFdBSmzKYks?si=IBT3jPlfA9A22kUT';
            projectContent = `
                        <h2>COBRA KAI 2</h2>
                        <div class="project-video">
                            <iframe id="youtubeVideo" width="560" height="315" src="https://www.youtube.com/embed/${videoId}" frameborder="0" allowfullscreen></iframe>
                        </div>
                        <div class="project-description">
                        <p>Make your choice – Eagle Fang, Cobra Kai, or Miyagi-do – marks the beginning of your journey. It's up to you to recruit the most powerful team, master your fighting style, and battle to establish your dojo's legacy as the All Valley Karate Grand Champion.</p>
                        </div>
                        <div class="project-links">
                            <h2>Links</h2>
                            <a href="#">Link 1</a>
                            <a href="#">Link 2</a>
                        </div>
`                   ;
            break;
        case 'project8':
            videoId = 'HFdBSmzKYks?si=IBT3jPlfA9A22kUT';
            projectContent = `
                        <h2>COBRA KAI 2</h2>
                        <div class="project-video">
                            <iframe id="youtubeVideo" width="560" height="315" src="https://www.youtube.com/embed/${videoId}" frameborder="0" allowfullscreen></iframe>
                        </div>
                        <div class="project-description">
                        <p>Make your choice – Eagle Fang, Cobra Kai, or Miyagi-do – marks the beginning of your journey. It's up to you to recruit the most powerful team, master your fighting style, and battle to establish your dojo's legacy as the All Valley Karate Grand Champion.</p>
                        </div>
                        <div class="project-links">
                            <h2>Links</h2>
                            <a href="#">Link 1</a>
                            <a href="#">Link 2</a>
                        </div>
`                   ;
            break;
        case 'project9':
            videoId = 'HFdBSmzKYks?si=IBT3jPlfA9A22kUT';
            projectContent = `
                        <h2>COBRA KAI 2</h2>
                        <div class="project-video">
                            <iframe id="youtubeVideo" width="560" height="315" src="https://www.youtube.com/embed/${videoId}" frameborder="0" allowfullscreen></iframe>
                        </div>
                        <div class="project-description">
                        <p>Make your choice – Eagle Fang, Cobra Kai, or Miyagi-do – marks the beginning of your journey. It's up to you to recruit the most powerful team, master your fighting style, and battle to establish your dojo's legacy as the All Valley Karate Grand Champion.</p>
                        </div>
                        <div class="project-links">
                            <h2>Links</h2>
                            <a href="#">Link 1</a>
                            <a href="#">Link 2</a>
                        </div>
`                   ;
            break;
        case 'project10':
            videoId = 'HFdBSmzKYks?si=IBT3jPlfA9A22kUT';
            projectContent = `
                        <h2>COBRA KAI 2</h2>
                        <div class="project-video">
                            <iframe id="youtubeVideo" width="560" height="315" src="https://www.youtube.com/embed/${videoId}" frameborder="0" allowfullscreen></iframe>
                        </div>
                        <div class="project-description">
                        <p>Make your choice – Eagle Fang, Cobra Kai, or Miyagi-do – marks the beginning of your journey. It's up to you to recruit the most powerful team, master your fighting style, and battle to establish your dojo's legacy as the All Valley Karate Grand Champion.</p>
                        </div>
                        <div class="project-links">
                            <h2>Links</h2>
                            <a href="#">Link 1</a>
                            <a href="#">Link 2</a>
                        </div>
`                   ;
            break;
        case 'project11':
            videoId = 'HFdBSmzKYks?si=IBT3jPlfA9A22kUT';
            projectContent = `
                        <h2>COBRA KAI 2</h2>
                        <div class="project-video">
                            <iframe id="youtubeVideo" width="560" height="315" src="https://www.youtube.com/embed/${videoId}" frameborder="0" allowfullscreen></iframe>
                        </div>
                        <div class="project-description">
                        <p>Make your choice – Eagle Fang, Cobra Kai, or Miyagi-do – marks the beginning of your journey. It's up to you to recruit the most powerful team, master your fighting style, and battle to establish your dojo's legacy as the All Valley Karate Grand Champion.</p>
                        </div>
                        <div class="project-links">
                            <h2>Links</h2>
                            <a href="#">Link 1</a>
                            <a href="#">Link 2</a>
                        </div>
`                   ;
            break;
        case 'project12':
            videoId = 'HFdBSmzKYks?si=IBT3jPlfA9A22kUT';
            projectContent = `
                        <h2>COBRA KAI 2</h2>
                        <div class="project-video">
                            <iframe id="youtubeVideo" width="560" height="315" src="https://www.youtube.com/embed/${videoId}" frameborder="0" allowfullscreen></iframe>
                        </div>
                        <div class="project-description">
                        <p>Make your choice – Eagle Fang, Cobra Kai, or Miyagi-do – marks the beginning of your journey. It's up to you to recruit the most powerful team, master your fighting style, and battle to establish your dojo's legacy as the All Valley Karate Grand Champion.</p>
                        </div>
                        <div class="project-links">
                            <h2>Links</h2>
                            <a href="#">Link 1</a>
                            <a href="#">Link 2</a>
                        </div>
`                   ;
            break;
    }


    return projectContent;
}