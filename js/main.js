const questions = document.querySelectorAll('.panel-header');
questions.forEach(question => question.addEventListener('click', toggleQuestionFAQ));

// green-color
// red-color
// blue-color
// pink-color
// yellow-color
// ligth-blue-color

const courses = [
    {
        title: '1. Lógica de programação',
        description: 'É a forma como o desenvolvedor entende a comunicação a fim de programar uma função de um programa.',
        link: 'https://web.digitalinnovation.one/course/logica-de-programacao-essencial/learning/aea1ea26-fd56-417d-8272-6e15253f4405',
        color: 'green-color',
        category: 'logic',
        modal: 'modal_example_1'
    },
    {
        title: '2. HTML5 e CSS3 básico',
        description: 'Aprenda a construir uma página WEB utilizando estrutura de HTML5 e defina estilos para elementos utilizando CSS3.',
        link: 'https://web.digitalinnovation.one/course/programando-interfaces-com-html5-e-css3/learning/f5066ef9-b542-43c0-a3c5-1519c61b84ee/',
        color: 'red-color',
        category: 'html',
        modal: 'modal_example_2'
    },
    {
        title: '3. Construindo páginas com Bootstrap',
        description: 'Aprenda a utilizar o framework Bootstrap e aprofunde mais o seu conhecimento.',
        link: 'https://web.digitalinnovation.one/course/crie-paginas-responsivas-na-web-utilizando-um-poderoso-framework/learning/d5695916-44d4-4d47-9db4-0bc829264835/',
        color: 'red-color',
        category: 'html',
        modal: 'modal_example_3'
    },
    {
        title: '4. Iniciando com javascript',
        description: 'É uma das mais importantes linguagens front-end, e nesse curso você entenderá o porquê e como trabalhar com ela.',
        link: 'https://web.digitalinnovation.one/course/programacao-para-internet-com-javascript/learning/33e81edf-6f9b-4b97-b3c6-12d930cf0831/',
        color: 'blue-color',
        category: 'javascript',
        modal: 'modal_example_4'
    },
]

const coursesContainer = document.querySelector('.courses-container');

function filterCourses(category) {

    // update menu right with color

    const coursesMenu = document.querySelector('.courses-menu');

    const all = (category === 'all') ? `class="activated-menu-item"` : '';
    const logic = (category === 'logic') ? `class="activated-menu-item"` : '';
    const html5 = (category === 'html') ? `class="activated-menu-item"` : '';
    const javascript = (category === 'javascript') ? `class="activated-menu-item"` : '';

    const menuRight = `
        <a ${all} onclick="filterCourses('all')">Todos cursos</a>
        <a ${logic} onclick="filterCourses('logic')">Entendendo a programação</a>
        <a ${html5} onclick="filterCourses('html')">HTML5 e CSS3</a>
        <a ${javascript} onclick="filterCourses('javascript')">Javascript</a>
        `

    coursesMenu.innerHTML = menuRight;

    // send courses after filter

    let html = "";

    if (category === 'all') {
        courses.map(course => {
            html += `
            <div class="courses-projects">
                <div class="course-panel ${course.color}">
                    <div class="course-icon-container">
                        <img src="assets/icon.png" />
                    </div>
                    <div class="banner">
                        <h4>${course.title}</h4>
                        <p>
                            ${course.description}
                        </p>
    
                        <a class="projeto" onclick="toggleModal('${course.modal}')">
                            <i class="far fa-file"></i>
                            Após finalizar curso, clique aqui e faça o desafio!
                        </a>
                        <a href="${course.link}" target="_blank">
                        <button class="${course.color}">Iniciar</button>
                        </a>
                    </div>
                </div>
            </div>`
        });
    } else {
        const coursesFilter = courses.filter(course => course.category === category);
        coursesFilter.map(course => {
            html += `
            <div class="courses-projects">
                <div class="course-panel ${course.color}">
                    <div class="course-icon-container">
                        <img src="assets/icon.png" />
                    </div>
                    <div class="banner">
                        <h4>${course.title}</h4>
                        <p>
                            ${course.description}
                        </p>
    
                        <a class="projeto" onclick="toggleModal('${course.modal}')">
                            <i class="far fa-file"></i>
                            Após finalizar curso, clique aqui e faça o desafio!
                        </a>
                        <a href="${course.link}" target="_blank">
                        <button class="${course.color}">Iniciar</button>
                        </a>
                    </div>
                </div>
            </div>`
        });
    }

    coursesContainer.innerHTML = html;
}

filterCourses('all');


function openMenu() {
    const body = window.document.getElementById("body");
    const menuIcon = window.document.querySelector("#menu-icon i");

    menuIcon.classList.add('fa-times');
    if (body.style.overflow) {
        body.style.overflow = "";
        menuIcon.classList.remove('fa-times');
        menuIcon.classList.add('fa-bars');
    } else {
        menuIcon.classList.add('fa-times');
        menuIcon.classList.remove('fa-bars');
        body.style.overflow = "hidden";
    }

}

function closeMenu() {
    const input = window.document.getElementById("hambuguer");
    input.checked = false;
    openMenu();
}

function toggleModal(modalId) {
    const modal = window.document.getElementById(modalId);
    if (!modal)
        throw "This element was not found";
    if (modal.style.display === "none" || modal.style.display === "")
        modal.style.display = "flex"
    else
        modal.style.display = "none"
}
