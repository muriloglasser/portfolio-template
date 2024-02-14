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
    modal.scrollTop = 0;
    modal.classList.add('slide-in-up');

    var content = document.getElementById('modal-c');
    content.scrollTop = 0;
    window.addEventListener('click', outsideClick);
}


// Close project modal
function closeModal() {
    var modal = document.getElementById("myModal");
    var youtubeVideo = document.getElementById("youtubeVideo");

    youtubeVideo.src = "";
    window.removeEventListener('click', outsideClick);
    modal.classList.remove('slide-in-up');

    // Adicionar classe de animação de saída
    modal.classList.add('slide-out-up');

    // Aguardar o término da animação de saída antes de ocultar a modal
    modal.addEventListener('animationend', () => {
        // Ocultar a modal
        modal.style.display = 'none';

        // Remover a classe de animação de saída
        modal.classList.remove('slide-out-up');
    }, { once: true });

}

function outsideClick(event) {
    var modal = document.getElementById('myModal');

    if (event.target === modal) {
        closeModal();
    }
}



// Set modal with project information
function getProjectContent(projectId) {

    var videoId; // Set the YouTube video ID for each project
    var projectContent;

    // Determine the video ID and project information based on the selected project
    switch (projectId) {
        case 'project1':
            videoId = 'N4vmPq09dN4?si=eyzXwmLVzzDp4Ayt';
            projectContent = `
                            <div class="title-bg">
                                <h2 class="project-title">Cobra Kai 2</h2>
                            </div>

                            <div class="project-video">
                                <iframe id="youtubeVideo" width="560" height="315" src="https://www.youtube.com/embed/${videoId}" frameborder="0" allowfullscreen></iframe>
                            </div>

                            <div class="description-bg">
                                <div class="project-description">
                                    <p>Make your choice – Eagle Fang, Cobra Kai, or Miyagi-do – marks the beginning of your journey. It's up to you to recruit the most powerful team, master your fighting style, and battle to establish your dojo's legacy as the All Valley Karate Grand Champion.</p>
                                </div>
                            </div>

                            <div class="project-links">
                                <h2>Links</h2>

                                <a href="https://store.steampowered.com/app/1681870/Cobra_Kai_2_Dojos_Rising/" target="_blank" class="social-icon github" style="margin-left: 6px">
                                    <img src="Images/Steam.png" alt="Github">
                                </a>

                                <a href="https://store.playstation.com/pt-br/product/UP0283-PPSA04644_00-4810208968054641" target="_blank" class="social-icon github" style="margin-left: 6px">
                                    <img src="Images/Playstation.png" alt="Github">
                                </a>

                                <a href="https://www.xbox.com/pt-BR/games/store/cobra-kai-2-dojos-rising/9NP4WZNSN0NN" target="_blank" class="social-icon github" style="margin-left: 6px">
                                    <img src="Images/Xbox.png" alt="Github">
                                </a>

                                <a href="https://www.nintendo.com/pt-br/store/products/cobra-kai-2-dojos-rising-switch/" target="_blank" class="social-icon github" style="margin-left: 6px">
                                    <img src="Images/Nintendo.png" alt="Github">
                                </a>
                            </div>

                            <div class="close">
                                <span onclick="closeModal()" target="_blank" class="social-icon github">&times;</span>
                            </div>
`                   ;
            break;
        case 'project2':
            videoId = 'FlSIC41wyX4?si=sri-3iJzy4L83Xct';
            projectContent = `
                        <div class="title-bg">
                                <h2 class="project-title">Mega Button Soccer</h2>
                            </div>

                            <div class="project-video">
                                <iframe id="youtubeVideo" width="560" height="315" src="https://www.youtube.com/embed/${videoId}" frameborder="0" allowfullscreen></iframe>
                            </div>

                            <div class="description-bg">
                                <div class="project-description">
                                    <p>Mega Button Soccer is a reinvented version of the traditional button soccer! With a fun storyline and charismatic characters, enjoy the journey of Cauã as he pursues his dream of becoming the greatest button soccer player on Aru-Açu Island!</p>
                                </div>
                            </div>

                            <div class="project-links">
                                <h2>Links</h2>

                                <a href="https://store.steampowered.com/app/2290440/Mega_Button_Soccer/" target="_blank" class="social-icon github" style="margin-left: 0px">
                                    <img src="Images/Steam.png" alt="Github">
                                </a>
                            </div>


                            <div class="close">
                                <span onclick="closeModal()" target="_blank" class="social-icon github">&times;</span>
                            </div>
`                   ;
            break;
        case 'project3':
            videoId = 'MuOGtenrr8k?si=njIRm4660M5-CjWU';
            projectContent = `
                        <div class="title-bg">
                                <h2 class="project-title">Food Boy</h2>
                            </div>

                            <div class="project-video">
                                <iframe id="youtubeVideo" width="560" height="315" src="https://www.youtube.com/embed/${videoId}" frameborder="0" allowfullscreen></iframe>
                            </div>

                            <div class="description-bg">
                                <div class="project-description">
                                    <p>Food Boy combines the classic Paperboy vibe from the 1980s with the modern twist of 2020's food delivery services. Players deliver pizzas in urban settings, aiming for perfect deliveries while avoiding angry customers. Unlock new cities ,skins and challenges by mastering the art of pizza delivery in this exciting arcade game.</p>
                                </div>
                            </div>

                            <div class="project-links">
                                <h2>Links</h2>


                                <a href="https://store.steampowered.com/app/2331990/Food_Boy/" target="_blank" class="social-icon github" style="margin-left: 6px">
                                    <img src="Images/Steam.png" alt="Github">
                                </a>

                                <a href="https://store.playstation.com/pt-br/product/UP0283-PPSA04644_00-4810208968054641" target="_blank" class="social-icon github" style="margin-left: 6px">
                                    <img src="Images/Playstation.png" alt="Github">
                                </a>

                                <a href="https://www.xbox.com/pt-BR/games/store/cobra-kai-2-dojos-rising/9NP4WZNSN0NN" target="_blank" class="social-icon github" style="margin-left: 6px">
                                    <img src="Images/Xbox.png" alt="Github">
                                </a>

                                <a href="https://www.nintendo.com/pt-br/store/products/cobra-kai-2-dojos-rising-switch/" target="_blank" class="social-icon github" style="margin-left: 6px">
                                    <img src="Images/Nintendo.png" alt="Github">
                                </a>
                            </div>


                            <div class="close">
                                <span onclick="closeModal()" target="_blank" class="social-icon github">&times;</span>
                            </div>
`                   ;
            break;
        case 'project4':
            videoId = 'gT8AB68s_2k?si=9lWQuuRO1j9Kbjin';
            projectContent = `
                        <div class="title-bg">
                                <h2 class="project-title">Joy & Toy</h2>
                            </div>

                            <div class="project-video">
                                <iframe id="youtubeVideo" width="560" height="315" src="https://www.youtube.com/embed/${videoId}" frameborder="0" allowfullscreen></iframe>
                            </div>

                            <div class="description-bg">
                                <div class="project-description">
                                    <p>Joy & Toy is an engaging mobile game created for the renowned soap opera "Poliana" on the SBT TV network. In this game, players take on the roles of two characters with a mission to combat depression and spread happiness. Join the adventure as you guide these characters through challenges, fostering positivity and joy along the way. Experience the transformative power of gaming, all while being part of a meaningful journey towards mental well-being.</p>
                                </div>
                            </div>

                            <div class="project-links">
                                <h2>Links</h2>
                                <a href="https://play.google.com/store/search?q=Joy%20%26%20toy&c=apps" target="_blank" class="social-icon github" style="margin-left: 6px">
                                    <img src="Images/Playstore.png" alt="Github">
                                </a>

                                <a href="https://apps.apple.com/br/app/aventuras-de-poliana-joy-toy/id1481899470" target="_blank" class="social-icon github" style="margin-left: 6px">
                                    <img src="Images/Appstore.png" alt="Github">
                                </a>                               
                            </div>


                            <div class="close">
                                <span onclick="closeModal()" target="_blank" class="social-icon github">&times;</span>
                            </div>
`                   ;
            break;
        case 'project5':
            videoId = 'cs_BVRnD4QU?si=wNPxuS40Bg4ij1Vz';
            projectContent = `
                        <div class="title-bg">
                                <h2 class="project-title">Hot Potato</h2>
                            </div>

                            <div class="project-video">
                                <iframe id="youtubeVideo" width="560" height="315" src="https://www.youtube.com/embed/${videoId}" frameborder="0" allowfullscreen></iframe>
                            </div>

                            <div class="description-bg">
                                <div class="project-description">
                                    <p>Hot Potato is an engaging game designed for four players. Set in a vibrant and interactive environment, this game brings people together on the ground, creating a thrilling experience. Players immerse themselves in the action, using specially crafted wooden joysticks to control the game, adding a unique and tactile element to the gameplay.</p>
                                </div>
                            </div>


                            <div class="close">
                                <span onclick="closeModal()" target="_blank" class="social-icon github">&times;</span>
                            </div>
`                   ;
            break;
        case 'project6':
            videoId = 'eK7_MLSFprU?si=GgySrIEi62Ylybsh';
            projectContent = `
                         <div class="title-bg">
                                <h2 class="project-title">Trader's Life</h2>
                            </div>

                            <div class="project-video">
                                <iframe id="youtubeVideo" width="560" height="315" src="https://www.youtube.com/embed/${videoId}" frameborder="0" allowfullscreen></iframe>
                            </div>

                            <div class="description-bg">
                                <div class="project-description">
                                    <p>Trader's Life is an immersive 2D/3D game designed to empower newcomers in the world of trading. The goal is to demystify the complexities of the trade business, providing players with a comfortable space to navigate intricate brokerage jargon and applications that can often appear daunting.</p>
                                </div>
                            </div>

                            <div class="project-links">
                                <h2>Links</h2>
                                <a href="https://play.google.com/store/apps/details?id=com.liga.traderlife&hl=pt_BR&gl=US" target="_blank" class="social-icon github" style="margin-left: 6px">
                                    <img src="Images/Playstore.png" alt="Github">
                                </a>

                                <a href="https://apps.apple.com/br/app/traders-life/id1475175020" target="_blank" class="social-icon github" style="margin-left: 6px">
                                    <img src="Images/Appstore.png" alt="Github">
                                </a>
                            </div>


                            <div class="close">
                                <span onclick="closeModal()" target="_blank" class="social-icon github">&times;</span>
                            </div>
`                   ;
            break;
        case 'project7':
            videoId = '6iZYMm5oXdk?si=OHhVYIERtpBtTUa0';
            projectContent = `
                        <div class="title-bg">
                                <h2 class="project-title">Anitta Boss Game</h2>
                            </div>

                            <div class="project-video">
                                <iframe id="youtubeVideo" width="560" height="315" src="https://www.youtube.com/embed/${videoId}" frameborder="0" allowfullscreen></iframe>
                            </div>

                            <div class="description-bg">
                                <div class="project-description">
                                    <p>Anitta Boss Game, a result of the strategic alliance between our team and Garena, serves as a powerful promotional tool, enhancing both Garena's collaboration with Anitta and the game's visibility. This venture showcases our expertise in developing engaging and impactful gaming experiences.</p>
                                </div>
                            </div>


                            <div class="close">
                                <span onclick="closeModal()" target="_blank" class="social-icon github">&times;</span>
                            </div>
`                   ;
            break;
        case 'project8':
            videoId = '_rkVQpotLIw?si=jvUrWaw5Q3xtb5Ub';
            projectContent = `
                        <div class="title-bg">
                                <h2 class="project-title">Free Fighter</h2>
                            </div>

                            <div class="project-video">
                                <iframe id="youtubeVideo" width="560" height="315" src="https://www.youtube.com/embed/${videoId}" frameborder="0" allowfullscreen></iframe>
                            </div>

                            <div class="description-bg">
                                <div class="project-description">
                                    <p>Free Fighter game was developed in partnership with Garena as a promotional initiative, assisting their collaboration with Capcom and Street Fighter. This project stands out for its strategic collaboration, delivering a dynamic and thrilling gaming experience for fighting game enthusiasts. This successful partnership resulted in a game that not only honors the classic elements of Street Fighter but also offers a new and exciting twist, solidifying my portfolio as an innovative and creative game developer.</p>
                                </div>
                            </div>


                            <div class="close">
                                <span onclick="closeModal()" target="_blank" class="social-icon github">&times;</span>
                            </div>
`                   ;
            break;
        case 'project9':
            videoId = '8RWrj6cPtd0?si=NjWYzSLpEmjNZJco';
            projectContent = `
                        <div class="title-bg">
                                <h2 class="project-title">Cash Plane</h2>
                            </div>

                            <div class="project-video">
                                <iframe id="youtubeVideo" width="560" height="315" src="https://www.youtube.com/embed/${videoId}" frameborder="0" allowfullscreen></iframe>
                            </div>

                            <div class="description-bg">
                                <div class="project-description">
                                    <p>Cash Plane is an exciting virtual reality experience that made its debut at BGS in 2018, presented exclusively for the SBT television channel. This immersive virtual reality adventure takes users on a thrilling journey.</p>
                                </div>
                            </div>


                            <div class="close">
                                <span onclick="closeModal()" target="_blank" class="social-icon github">&times;</span>
                            </div>
`                   ;
            break;
        case 'project10':
            videoId = 'YI0jJG-jhSo?si=VpCqWNVHP1jQJTjO';
            projectContent = `
                        <div class="title-bg">
                                <h2 class="project-title">Shofu Ar Experience</h2>
                            </div>

                            <div class="project-video">
                                <iframe id="youtubeVideo" width="560" height="315" src="https://www.youtube.com/embed/${videoId}" frameborder="0" allowfullscreen></iframe>
                            </div>

                            <div class="description-bg">
                                <div class="project-description">
                                    <p>Augmented reality promotional game: immerse yourself in a captivating experience where you learn about the molecules that constitute Shofu's revolutionary teeth product. Through cutting-edge augmented reality technology, this game offers an interactive and educational journey, showcasing our commitment to innovative and engaging marketing solutions.</p>
                                </div>
                            </div>


                            <div class="close">
                                <span onclick="closeModal()" target="_blank" class="social-icon github">&times;</span>
                            </div>
`                   ;
            break;
        case 'project11':
            videoId = 'q-s1OCA3Tw8?si=AiH2tMIBBzAgCFpa';
            projectContent = `
                        <div class="title-bg">
                                <h2 class="project-title">Lego Ar Experience</h2>
                            </div>

                            <div class="project-video">
                                <iframe id="youtubeVideo" width="560" height="315" src="https://www.youtube.com/embed/${videoId}" frameborder="0" allowfullscreen></iframe>
                            </div>

                            <div class="description-bg">
                                <div class="project-description">
                                    <p>Enter the world of augmented reality with our unique game where you will be in command of a robot built entirely from LEGO bricks. This immersive experience offers a fascinating mix of creativity and technology.</p>
                                </div>
                            </div>


                            <div class="close">
                                <span onclick="closeModal()" target="_blank" class="social-icon github">&times;</span>
                            </div>
`                   ;
            break;
        case 'project12':
            videoId = '3cyNc31jY4I?si=w69jaH9h51mRlbdF';
            projectContent = `
                        <div class="title-bg">
                                <h2 class="project-title">Merge Cube</h2>
                            </div>

                            <div class="project-video">
                                <iframe id="youtubeVideo" width="560" height="315" src="https://www.youtube.com/embed/${videoId}" frameborder="0" allowfullscreen></iframe>
                            </div>

                            <div class="description-bg">
                                <div class="project-description">
                                    <p>This project was developed at LIGA (Games and Apps Innovation Laboratory) at the Sorocaba Engineering University (Facens). With an augmented reality interaction, its purpose is to present the university in a more interactive and enjoyable way.</p>
                                </div>
                            </div>


                            <div class="close">
                                <span onclick="closeModal()" target="_blank" class="social-icon github">&times;</span>
                            </div>
`                   ;
            break;
    }


    return projectContent;
}