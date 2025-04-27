var lastModal;

function changeClass(modalType) {
    document.getElementById("modal-c").className = modalType;
    document.body.classList.add("body-opened");
}

function returnBody(modalType) {
    document.body.classList.remove("body-opened");
}

function openModal(projectId) {
    changeClass('modal-content');
    var modal = document.getElementById("myModal");
    var modalContent = document.getElementById("modalContent");
    // Update modal content based on the project clicked
    var projectContent = getProjectContent(projectId);
    modalContent.innerHTML = projectContent;

    modal.style.display = "block";
    modal.scrollTop = 0;
    modal.classList.add('slide-in-up');

    var content = document.getElementById('modal-c');
    content.scrollTop = 0;
    window.addEventListener('click', outsideClick);
}

function openModalAbout(projectId) {
    changeClass('about-modal-content');
    var modal = document.getElementById("myModal");
    var modalContent = document.getElementById("modalContent");
    // Update modal content based on the project clicked
    var projectContent = getProjectContent(projectId);
    modalContent.innerHTML = projectContent;

    modal.style.display = "block";
    modal.scrollTop = 0;
    modal.classList.add('slide-in-up');

    var content = document.getElementById('modal-c');
    content.scrollTop = 0;
    window.addEventListener('click', outsideClickAbout);
}

function openModalDemo(projectId) {
    changeClass('demo-modal-content');
    var modal = document.getElementById("myModal");
    var modalContent = document.getElementById("modalContent");
    // Update modal content based on the project clicked
    var projectContent = getProjectContent(projectId);
    modalContent.innerHTML = projectContent;

    modal.style.display = "block";
    modal.scrollTop = 0;
    modal.classList.add('slide-in-up');

    var content = document.getElementById('modal-c');
    content.scrollTop = 0;
    window.addEventListener('click', outsideClickDemo);
}

function closeModal() {
    var modal = document.getElementById("myModal");
    var youtubeVideo = document.getElementById("youtubeVideo");
    returnBody();

    youtubeVideo.src = "";
    window.removeEventListener('click', outsideClick);
    modal.classList.remove('slide-in-up');

    // Add exit animation class
    modal.classList.add('slide-out-up');

    // Wait for the end of exit animation before hiding the modal
    modal.addEventListener('animationend', () => {
        // Hide the modal
        modal.style.display = 'none';

        // Remove the exit animation class
        modal.classList.remove('slide-out-up');
    }, { once: true });
}

function closeModalAbout() {
    var modal = document.getElementById("myModal");

    returnBody();

    window.removeEventListener('click', outsideClickAbout);
    modal.classList.remove('slide-in-up');

    // Add exit animation class
    modal.classList.add('slide-out-up');

    // Wait for the end of exit animation before hiding the modal
    modal.addEventListener('animationend', () => {
        // Hide the modal
        modal.style.display = 'none';

        // Remove the exit animation class
        modal.classList.remove('slide-out-up');
    }, { once: true });
}

function closeModalDemo() {
    var modal = document.getElementById("myModal");
    var youtubeVideo = document.getElementById("youtubeVideo");
    returnBody();

    youtubeVideo.src = "";
    window.removeEventListener('click', outsideClickDemo);
    modal.classList.remove('slide-in-up');

    // Add exit animation class
    modal.classList.add('slide-out-up');

    // Wait for the end of exit animation before hiding the modal
    modal.addEventListener('animationend', () => {
        // Hide the modal
        modal.style.display = 'none';

        // Remove the exit animation class
        modal.classList.remove('slide-out-up');
    }, { once: true });
}

function outsideClick(event) {
    var modal = document.getElementById('modal-c');

    if (event.target === modal) {
        closeModal();
    }
}

function outsideClickAbout(event) {
    var modal = document.getElementById('modal-c');

    if (event.target === modal) {
        closeModalAbout();
    }
}

function outsideClickDemo(event) {
    var modal = document.getElementById('modal-c');

    if (event.target === modal) {
        closeModalDemo();
    }
}

function getProjectContent(projectId) {

    var videoId; // Set the YouTube video ID for each project
    var projectContent;

    // Determine the video ID and project information based on the selected project
    switch (projectId) {
        case 'about':
            videoId = 'N4vmPq09dN4?si=eyzXwmLVzzDp4Ayt';
            projectContent = `
                            <div class="about-title-bg">
                                <h2 class="project-title">About me</h2>
                            </div>
                         

                            <div class="description-bg">
                                <div class="project-description">
                                    <p>
                                I'm Murilo Glasser, a game programmer with five years of experience across platforms like VR, AR, mobile, web, Nintendo Switch, PlayStation, Xbox, and Steam. My education at FACENS and ETEC provided me with strong skills in digital technology, programming, agile methodologies, and software development.                                    </p>
                                </div>
                            </div>

                            <div class="project-stack">
                                <h2>Stack</h2>
                                <a target="_blank" class="stack-icon" style="margin-left: 6px">
                                    <img src="Images/unity.png">
                                </a>

                                <a target="_blank" class="stack-icon" style="margin-left: 6px">
                                    <img src="Images/csharp.png">
                                </a>                             

                                <a target="_blank" class="stack-icon" style="margin-left: 6px">
                                    <img src="Images/clanguage.png">
                                </a>

                                <a target="_blank" class="stack-icon" style="margin-left: 6px">
                                    <img src="Images/javascript.png">
                                </a>

                                <a target="_blank" class="stack-icon" style="margin-left: 6px">
                                    <img src="Images/htmllanguage.png">
                                </a>

                                <a target="_blank" class="stack-icon" style="margin-left: 6px">
                                    <img src="Images/construct3.png">
                                </a>
                            </div>

                            <div class="close">
                                <span onclick="closeModalAbout()" target="_blank" class="social-icon quit">&times;</span>
                            </div>
`                   ;
            break;
        case 'demo':
            videoId = 'X4AbyjhvVHM?si=X_6ZS1wjPM4crLG3';
            projectContent = `
                            <div class="demo-title-bg">
                                <h2 class="project-title">Demo reel</h2>
                            </div>

                            <div class="demo-video-BG">
                            <div class="demo-video">
                                <iframe id="youtubeVideo" width="560" height="315" src="https://www.youtube.com/embed/${videoId}" frameborder="0" allowfullscreen></iframe>
                            </div>
                            </div>

                            <div class="description-bg">
                                <div class="project-description">
                                    <p>
Welcome! This is my demo reel showcasing a selection of my game development projects, highlighting the skills and creativity I've applied across different platforms. I hope you enjoy watching and feel inspired by the work!                                    </p>
                                </div>
                            </div>

                            <div class="demo-close">
                                <span onclick="closeModalDemo()" target="_blank" class="social-icon quit">&times;</span>
                            </div>
`                   ;
            break;

        case 'project1':
            videoId = 'N4vmPq09dN4?si=eyzXwmLVzzDp4Ayt';
            projectContent = `
                            <div class="title-bg">
                                <h2 class="project-title">Cobra Kai 2</h2>
                            </div>

                            <div class="project-video-BG">
                            <div class="project-video">
                                <iframe id="youtubeVideo" width="560" height="315" src="https://www.youtube.com/embed/${videoId}" frameborder="0" allowfullscreen></iframe>
                            </div>
                            </div>

                            <div class="description-bg">
                                <div class="project-description">
                                    <p>Fighting game where players master unique styles from three dojos to become the All Valley Karate Champion.</p>
                                </div>
                            </div>

                            <div class="project-links">
                                <h2>Links</h2>

                                <a href="https://store.steampowered.com/app/1681870/Cobra_Kai_2_Dojos_Rising/" target="_blank" class="social-icon device" style="margin-left: 6px">
                                    <img src="Images/Steam.png" alt="Github">
                                </a>

                                <a href="https://store.playstation.com/pt-br/product/UP0283-PPSA04644_00-4810208968054641" target="_blank" class="social-icon device" style="margin-left: 6px">
                                    <img src="Images/Playstation.png" alt="Github">
                                </a>

                                <a href="https://www.xbox.com/pt-BR/games/store/cobra-kai-2-dojos-rising/9NP4WZNSN0NN" target="_blank" class="social-icon device" style="margin-left: 6px">
                                    <img src="Images/Xbox.png" alt="Github">
                                </a>

                                <a href="https://www.nintendo.com/pt-br/store/products/cobra-kai-2-dojos-rising-switch/" target="_blank" class="social-icon device" style="margin-left: 6px">
                                    <img src="Images/Nintendo.png" alt="Github">
                                </a>
                            </div>

                            <div class="close">
                                <span onclick="closeModal()" target="_blank" class="social-icon quit">&times;</span>
                            </div>
`                   ;
            break;
        case 'project2':
            videoId = 'FlSIC41wyX4?si=sri-3iJzy4L83Xct';
            projectContent = `
                        <div class="title-bg">
                                <h2 class="project-title">Mega Button Soccer</h2>
                            </div>

                            <div class="project-video-BG">
                            <div class="project-video">
                                <iframe id="youtubeVideo" width="560" height="315" src="https://www.youtube.com/embed/${videoId}" frameborder="0" allowfullscreen></iframe>
                            </div>
                            </div>

                            <div class="description-bg">
                                <div class="project-description">
                                    <p>Reinvents traditional button soccer as players guide Cauã to become the island's greatest player.</p>
                                </div>
                            </div>

                            <div class="project-links">
                                <h2>Links</h2>

                                <a href="https://store.steampowered.com/app/2290440/Mega_Button_Soccer/" target="_blank" class="social-icon device" style="margin-left: 0px">
                                    <img src="Images/Steam.png" alt="Github">
                                </a>
                            </div>


                            <div class="close">
                                <span onclick="closeModal()" target="_blank" class="social-icon quit">&times;</span>
                            </div>
`                   ;
            break;
        case 'project3':
            videoId = 'FYDE9CoZ1YU?si=agUJZaT7XYShrXkz';
            projectContent = `
                        <div class="title-bg">
                                <h2 class="project-title">Food Boy</h2>
                            </div>

                            <div class="project-video-BG">
                            <div class="project-video">
                                <iframe id="youtubeVideo" width="560" height="315" src="https://www.youtube.com/embed/${videoId}" frameborder="0" allowfullscreen></iframe>
                            </div>
                            </div>

                            <div class="description-bg">
                                <div class="project-description">
                                    <p>Arcade pizza delivery game with urban challenges, unlockable cities, and Paperboy-inspired mechanics.</p>
                                </div>
                            </div>

                            <div class="project-links">
                                <h2>Links</h2>


                                <a href="https://store.steampowered.com/app/2331990/Food_Boy/" target="_blank" class="social-icon device" style="margin-left: 6px">
                                    <img src="Images/Steam.png" alt="Github">
                                </a>

                                <a href="https://store.playstation.com/pt-br/concept/10007747" target="_blank" class="social-icon device" style="margin-left: 6px">
                                    <img src="Images/Playstation.png" alt="Github">
                                </a>

                                <a href="https://www.xbox.com/en-us/games/store/food-boy/9p6fh6mc3bhh" target="_blank" class="social-icon device" style="margin-left: 6px">
                                    <img src="Images/Xbox.png" alt="Github">
                                </a>
                              

                                <a href="https://www.nintendo.com/pt-br/store/products/food-boy-switch/?srsltid=AfmBOopjCcn7I5iriXm4DA-GRBCFOdWBbRhMmtOxDdE-zqiuR7RvuTuk" target="_blank" class="social-icon device" style="margin-left: 6px">
                                    <img src="Images/Nintendo.png" alt="Github">
                                </a>
                             
                            </div>


                            <div class="close">
                                <span onclick="closeModal()" target="_blank" class="social-icon quit">&times;</span>
                            </div>
`                   ;
            break;
        case 'project4':
            videoId = 'gT8AB68s_2k?si=9lWQuuRO1j9Kbjin';
            projectContent = `
                        <div class="title-bg">
                                <h2 class="project-title">Joy & Toy</h2>
                            </div>

                            <div class="project-video-BG">
                            <div class="project-video">
                                <iframe id="youtubeVideo" width="560" height="315" src="https://www.youtube.com/embed/${videoId}" frameborder="0" allowfullscreen></iframe>
                            </div>
                            </div>

                            <div class="description-bg">
                                <div class="project-description">
                                    <p>Mobile game promoting SBT's "Poliana" soap opera, spreading happiness and combating depression.</p>
                                </div>
                            </div>

                           
                            <div class="project-links">
                                <h2>Links</h2>
                                <h4>This project does not have available links.</h4>                                
                            </div>


                            <div class="close">
                                <span onclick="closeModal()" target="_blank" class="social-icon quit">&times;</span>
                            </div>
`                   ;
            break;
        case 'project5':
            videoId = 'cs_BVRnD4QU?si=wNPxuS40Bg4ij1Vz';
            projectContent = `
                        <div class="title-bg">
                                <h2 class="project-title">Hot Potato</h2>
                            </div>

                            <div class="project-video-BG">
                            <div class="project-video">
                                <iframe id="youtubeVideo" width="560" height="315" src="https://www.youtube.com/embed/${videoId}" frameborder="0" allowfullscreen></iframe>
                            </div>
                            </div>

                            <div class="description-bg">
                                <div class="project-description">
                                     <p>Four-player multiplayer game using custom wooden joysticks for a tactile gaming experience.</p>
                                </div>
                            </div>

                            <div class="project-links">
                                <h2>Links</h2>
                                <h4>This project does not have available links.</h4>                                
                            </div>

                            <div class="close">
                                <span onclick="closeModal()" target="_blank" class="social-icon quit">&times;</span>
                            </div>
`                   ;
            break;
        case 'project6':
            videoId = 'eK7_MLSFprU?si=GgySrIEi62Ylybsh';
            projectContent = `
                         <div class="title-bg">
                                <h2 class="project-title">Trader's Life</h2>
                            </div>

                            <div class="project-video-BG">
                            <div class="project-video">
                                <iframe id="youtubeVideo" width="560" height="315" src="https://www.youtube.com/embed/${videoId}" frameborder="0" allowfullscreen></iframe>
                            </div>
                            </div>

                            <div class="description-bg">
                                <div class="project-description">
                                    <p>2D/3D game simplifying trading concepts for newcomers in an accessible format.</p>
                                </div>
                            </div>

         
                            <div class="project-links">
                                <h2>Links</h2>
                                <h4>This project does not have available links.</h4>                                
                            </div>                

                            <div class="close">
                                <span onclick="closeModal()" target="_blank" class="social-icon quit">&times;</span>
                            </div>
`                   ;
            break;
        case 'project7':
            videoId = '6iZYMm5oXdk?si=OHhVYIERtpBtTUa0';
            projectContent = `
                        <div class="title-bg">
                                <h2 class="project-title">Anitta Boss Game</h2>
                            </div>

                            <div class="project-video-BG">
                            <div class="project-video">
                                <iframe id="youtubeVideo" width="560" height="315" src="https://www.youtube.com/embed/${videoId}" frameborder="0" allowfullscreen></iframe>
                            </div>
                            </div>

                            <div class="description-bg">
                                <div class="project-description">
                                    <p>Web game promoting Garena and Anitta's collaboration in Free Fire.</p>
                                </div>
                            </div>

                            <div class="project-links">
                                <h2>Links</h2>
                                <h4>This project does not have available links.</h4>
                            </div>

                            <div class="close">
                                <span onclick="closeModal()" target="_blank" class="social-icon quit">&times;</span>
                            </div>
`                   ;
            break;
        case 'project8':
            videoId = '_rkVQpotLIw?si=jvUrWaw5Q3xtb5Ub';
            projectContent = `
                        <div class="title-bg">
                                <h2 class="project-title">Free Fighter</h2>
                            </div>

                            <div class="project-video-BG">
                            <div class="project-video">
                                <iframe id="youtubeVideo" width="560" height="315" src="https://www.youtube.com/embed/${videoId}" frameborder="0" allowfullscreen></iframe>
                            </div>
                            </div>

                            <div class="description-bg">
                                <div class="project-description">
                                    <p>Promotional fighting game for Garena's partnership with Capcom's Street Fighter.

</p>
                                </div>
                            </div>

                            <div class="project-links">
                                <h2>Links</h2>
                                <h4>This project does not have available links.</h4>
                            </div>

                            <div class="close">
                                <span onclick="closeModal()" target="_blank" class="social-icon quit">&times;</span>
                            </div>
`                   ;
            break;
        case 'project9':
            videoId = '8RWrj6cPtd0?si=NjWYzSLpEmjNZJco';
            projectContent = `
                        <div class="title-bg">
                                <h2 class="project-title">Cash Plane</h2>
                            </div>

                            <div class="project-video-BG">
                            <div class="project-video">
                                <iframe id="youtubeVideo" width="560" height="315" src="https://www.youtube.com/embed/${videoId}" frameborder="0" allowfullscreen></iframe>
                            </div>
                            </div>

                            <div class="description-bg">
                                <div class="project-description">
                                    <p>VR experience debuted at BGS 2018 for SBT television channel.</p>
                                </div>
                            </div>

                            <div class="project-links">
                                <h2>Links</h2>
                                <h4>This project does not have available links.</h4>
                            </div>

                            <div class="close">
                                <span onclick="closeModal()" target="_blank" class="social-icon quit">&times;</span>
                            </div>
`                   ;
            break;
        case 'project10':
            videoId = 'YI0jJG-jhSo?si=VpCqWNVHP1jQJTjO';
            projectContent = `
                        <div class="title-bg">
                                <h2 class="project-title">Shofu Ar Experience</h2>
                            </div>

                            <div class="project-video-BG">
                            <div class="project-video">
                                <iframe id="youtubeVideo" width="560" height="315" src="https://www.youtube.com/embed/${videoId}" frameborder="0" allowfullscreen></iframe>
                            </div>
                            </div>

                            <div class="description-bg">
                                <div class="project-description">
                                    <p>AR game educating players about Shofu's teeth product molecules.</p>
                                </div>
                            </div>

                            <div class="project-links">
                                <h2>Links</h2>
                                <h4>This project does not have available links.</h4>
                            </div>

                            <div class="close">
                                <span onclick="closeModal()" target="_blank" class="social-icon quit">&times;</span>
                            </div>
`                   ;
            break;
        case 'project11':
            videoId = 'b4Fqc6md3SQ?si=cbq8plc5bLiPIbt4';
            projectContent = `
                        <div class="title-bg">
                                <h2 class="project-title">Stone Tale</h2>
                            </div>

                            <div class="project-video-BG">
                            <div class="project-video">
                                <iframe id="youtubeVideo" width="560" height="315" src="https://www.youtube.com/embed/${videoId}" frameborder="0" allowfullscreen></iframe>
                            </div>
                            </div>

                            <div class="description-bg">
                                <div class="project-description">
                                    <p>Control a stone transformed into a living creature after a witch's accident.</p>
                                </div>
                            </div>

                              <div class="project-links">
                                <h2>Links</h2>


                                <a href="https://riqthegoat.itch.io/stonetale" target="_blank" class="social-icon device" style="margin-left: 6px">
                                    <img src="Images/Itch.png" alt="Github">
                                </a>                               
                             
                            </div>

                            <div class="close">
                                <span onclick="closeModal()" target="_blank" class="social-icon quit">&times;</span>
                            </div>
`                   ;
            break;
        case 'project12':
            videoId = 'piHodHzVQ28?si=nf1lvqtgdO9DZ8Jm';
            projectContent = `
                        <div class="title-bg">
                                <h2 class="project-title">Glitchers</h2>
                            </div>

                            <div class="project-video-BG">
                            <div class="project-video">
                                <iframe id="youtubeVideo" width="560" height="315" src="https://www.youtube.com/embed/${videoId}" frameborder="0" allowfullscreen></iframe>
                            </div>
                            </div>

                            <div class="description-bg">
                                <div class="project-description">
                                    <p>Fight alongside a dying heroine to assemble legendary armor and defeat an Emperor.</p>
                                </div>
                            </div>

                            <div class="project-links">
                                <h2>Links</h2>


                                <a href="https://store.steampowered.com/app/3534130/Glitchers/" target="_blank" class="social-icon device" style="margin-left: 6px">
                                    <img src="Images/Steam.png" alt="Github">
                                </a>                               
                             
                            </div>

                            <div class="close">
                                <span onclick="closeModal()" target="_blank" class="social-icon quit">&times;</span>
                            </div>
`                   ;
            break;
    }


    return projectContent;
}

