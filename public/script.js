const catalogo = [
    {
        id: 1,
        titulo: "Peaky Blinders",
        tipo: "serie",
        ano: 2008,
        generos: ["suspense", "crime"],
        nota: 9.0,
        assistido: true
    },

    {
        id: 2,
        titulo: "Stranger Things",
        tipo: "serie",
        ano: 2016,
        generos: ["Ficção científica", "Suspense"],
        nota: 8.0,
        assistido: false
    },

    {
         id: 3,
        titulo: "La Casa de Papel",
        tipo: "serie",
        ano: 2017,
        generos: ["Crime", "Suspense"],
        nota: 10.0,
        assistido: true
    },

    {
         id: 4,
        titulo: "Cobra Kai",
        tipo: "serie",
        ano: 2018,
        generos: ["Artes maciais", "Drama"],
        nota: 7.0,
        assistido: false
    },

    {
        id: 5,
        titulo: "Tropa de Elite",
        tipo: "filme",
        ano: 2007,
        generos: ["Policial", "Suspense"],
        nota: 8.0,
        assistido: true
    },

    {
        id: 6,
        titulo: "Vingadores Ultimato",
        tipo: "filme",
        ano: 2019,
        generos: ["Aventura", "Ficção cientifica"],
        nota: 9.0,
        assistido: true
    },
]; 

console.log (catalogo[0].titulo);
console.log (catalogo [catalogo.length - 1]. ano);
console.log (catalogo[2]. generos[1]);
if (catalogo[2].generos[1]) {
    console.log(catalogo[2].generos[1]);
} else {
    console.log("O terceiro item possui apenas um gênero.");
}

catalogo.forEach(item => {
    console.log(`- [${item.tipo}] ${item.titulo} (${item.ano})`); // percorrer todos
});

const titulosEmCaixaAlta = catalogo.map(item => {
    return item.titulo.toUpperCase(); // titulos em maiusculo
});

console.log(titulosEmCaixaAlta);

const naoAssistidos = catalogo.filter(item => {
    return item.assistido === false; // nao assistidos
});

console.log(naoAssistidos.length);

const notaAlta = catalogo.find(item => {
    return item.nota >= 9; // primeiro >=9
});
if (notaAlta) {
    console.log(notaAlta.titulo, notaAlta.nota);
} else {
    console.log("Nenhum item encontrado.");
}

const somaNotas = catalogo.reduce((acumulador, item) => {
    return acumulador + item.nota; // media geral
}, 0);

const media = somaNotas / catalogo.length;

console.log("Média Geral: ", media.toFixed(2));

const assistidos = catalogo.filter(item => {
    return item.assistido === true; 
});

const somaAssistidos = assistidos.reduce((acumulador, item) => {
    return acumulador + item.nota;
}, 0);

const mediaAssistidos = somaAssistidos / assistidos.length;

console.log("Média dos assistidos:", (mediaAssistidos.toFixed(2)))
const antigo = catalogo.some(item => {
    return item.ano < 2000;
});

console.log("Existem filmes antes de 2000?", antigo);

const todosTemGenero = catalogo.every(item => {
    return item.generos.length > 0;
});

console.log("Todos os filmes/series possuem genero? ",todosTemGenero);

const output = document.getElementById("output");
const filmes = catalogo.filter(item => item.tipo === "filme");
const series = catalogo.filter(item => item.tipo === "serie");
const ranking = [...catalogo]
    .sort((a, b) => b.nota - a.nota)
    .slice(0, 3);

    output.innerHTML = `
    <h2>Resumo do Catálogo</h2>

    <p>Total de itens: ${catalogo.length}</p>

    <p>Quantidade de filmes: ${filmes.length}</p>

    <p>Quantidade de séries: ${series.length}</p>

    <p>Não assistidos: ${naoAssistidos.length}</p>

    <p>Média geral: ${media.toFixed(2)}</p>

    <h3>Top 3 notas</h3>

    <ol>
        ${ranking.map(item => `
            <li>${item.titulo} - Nota ${item.nota}</li>
        `).join("")}
    </ol>
`;