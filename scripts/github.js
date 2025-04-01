const cardsContainer = document.querySelector("#cardsContainer");

const desiredRepos = [
    "caravan",
    "coffee-delivery",
    "ignite-timer", 
    "desafio-todoList-rocketseat",
    "IgniteFeed", 
    "bikcraft",
];

const projectUrls = {
    "caravan": "https://zippy-dusk-46cb76.netlify.app/",
    "coffee-delivery": "https://coffee-delivery-gideondev-git-master-gideonalves-projects.vercel.app/",
    "desafio-todoList-rocketseat": "https://desafio-todo-list-rocketseat-rose.vercel.app/",
    "ignite-timer": "https://ignite-timer-omega-seven.vercel.app/",
    "IgniteFeed": "https://ignite-feed.netlify.app/",
    "bikcraft": "https://leafy-croquembouche-7bb4e0.netlify.app/",
};

const projectImages = {
    "caravan": "assets/imgProjetos/Caravan.png",
    "coffee-delivery": "assets/imgProjetos/coffee.png",
    "desafio-todoList-rocketseat": "assets/imgProjetos/todo.png",
    "ignite-timer": "assets/imgProjetos/ignite-timer.png",
    "IgniteFeed": "assets/imgProjetos/ignite-feed.png",
    "bikcraft": "assets/imgProjetos/bikcraft.png",
};

async function fetchGitHubRepos() {
    const url = "https://api.github.com/users/gideonalves/repos?per_page=100";
    try {
        const response = await fetch(url);
        if (!response.ok) throw new Error(`Erro ${response.status}: Não foi possível carregar os repositórios`);

        const allRepos = await response.json();
        const filteredRepos = desiredRepos.map(name => 
            allRepos.find(repo => repo.name.toLowerCase() === name.toLowerCase())
        ).filter(Boolean);

        if (filteredRepos.length === 0) {
            cardsContainer.innerHTML = "<p>Nenhum projeto encontrado.</p>";
            return;
        }

        cardsContainer.innerHTML = filteredRepos.map(createProjectCard).join("");
    } catch (error) {
        console.error("Erro ao buscar repositórios:", error);
        cardsContainer.innerHTML = "<p>Erro ao carregar projetos.</p>";
    }
}

function createProjectCard(repo) {
    const createdAt = new Date(repo.created_at).toLocaleDateString("pt-BR");
    const projectUrl = projectUrls[repo.name] || repo.html_url;
    const projectImage = projectImages[repo.name] || "assets/imgProjetos/default.png";

    return `
        <div class="card">
            <img src="${projectImage}" alt="${repo.name}" class="project-img">
            <h2>${repo.name}</h2>
            <p>Criado em ${createdAt}</p>
            <div class="buttons">
                <a href="${projectUrl}" target="_blank" class="btn">Ver Projeto</a>
                <a href="${repo.html_url}" target="_blank" class="icon-btn">
                    <img src="https://cdn-icons-png.flaticon.com/512/25/25231.png" alt="GitHub" class="github-icon">
                </a>
            </div>
        </div>
    `;
}


fetchGitHubRepos();