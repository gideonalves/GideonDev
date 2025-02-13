const cardsContainer = document.querySelector('.cards');

// Lista com os nomes dos repositórios que você quer buscar
const desiredRepos = [
    'coffee-delivery', 
    'Github-Blog',
    'ignite-timer', 
    'Projeto-Cartao-Virtual',
    'desafio-todoList-rocketseat',
    'IgniteFeed',
    'caravan'
];

// Mapeando repositórios para suas URLs de hospedagem
const projectUrls = {
    'coffee-delivery': 'https://zippy-dusk-46cb76.netlify.app/',
    'Github-Blog': 'https://github.com/gideonalves/Github-Blog',
    'ignite-timer': 'https://ignite-timer.netlify.app/',
    'Projeto-Cartao-Virtual': 'https://seu-projeto.netlify.app', // Substitua com o link correto
    'desafio-todoList-rocketseat': 'https://desafio-todolist.netlify.app/',
    'IgniteFeed': 'https://ignite-feed.netlify.app/',
    'caravan': 'https://caravan.netlify.app/'
};

async function fetchGitHubRepos() {
    try {
        let allRepos = [];
        let page = 1;
        let perPage = 100; // Pode pegar até 100 repositórios por página

        // Loop para buscar várias páginas de repositórios
        while (true) {
            const response = await fetch(`https://api.github.com/users/gideonalves/repos?per_page=${perPage}&page=${page}`);
            const repos = await response.json();

            // Se não houver repositórios, podemos parar o loop
            if (repos.length === 0) break;

            // Adiciona os repositórios da página atual à lista
            allRepos = [...allRepos, ...repos];

            // Vai para a próxima página
            page++;
        }

        // Filtrar os repositórios desejados com base no array 'desiredRepos'
        const filteredRepos = allRepos.filter(repo => desiredRepos.includes(repo.name));

        // Exibe os repositórios filtrados
        filteredRepos.forEach(repo => {
            const card = document.createElement('div');
            card.classList.add('card');

            const createdAt = new Date(repo.created_at).toLocaleDateString('pt-BR');

            // Obter a URL de hospedagem do projeto
            const projectUrl = projectUrls[repo.name] || repo.html_url;

            card.innerHTML = `
                <h2>${repo.name}</h2>
                <p>Criado em ${createdAt}</p>
                <div class="buttons">
                    <a href="${projectUrl}" target="_blank" class="btn">Visualizar Projeto</a>
                    <a href="${repo.html_url}" target="_blank" class="icon-btn">
                        <img src="https://cdn-icons-png.flaticon.com/512/25/25231.png" alt="GitHub">
                    </a>
                </div>
            `;

            cardsContainer.appendChild(card);
        });

    } catch (error) {
        console.error('Erro ao buscar repositórios:', error);
    }
}

fetchGitHubRepos();






// const cardsContainer = document.querySelector('.cards');

//         async function fetchGitHubRepos() {
//             try {
//                 const response = await fetch('https://api.github.com/users/gideonalves/repos');
//                 const repos = await response.json();

//                 repos.forEach(repo => {
//                     const card = document.createElement('div');
//                     card.classList.add('card');

//                     const createdAt = new Date(repo.created_at).toLocaleDateString('pt-BR');

//                     card.innerHTML = `
//                         <h2>${repo.name}</h2>
//                         <p>Criado em ${createdAt}</p>
//                         <div class="buttons">
//                             <a href="${repo.html_url}" target="_blank" class="btn">Visualizar Projeto</a>
//                             <a href="${repo.html_url}" target="_blank" class="icon-btn">
//                                 <img src="https://cdn-icons-png.flaticon.com/512/25/25231.png" alt="GitHub">
//                             </a>
//                         </div>
//                     `;

//                     cardsContainer.appendChild(card);
//                 });

//             } catch (error) {
//                 console.error('Erro ao buscar repositórios:', error);
//             }
//         }

//         fetchGitHubRepos();
