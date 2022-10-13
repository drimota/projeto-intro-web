// SEMANA 1, 2, 3 E 4 

const titulo = "Veronica Mars";
const sinopse = "Após a misteriosa morte da sua melhor amiga, Veronica Mars (Kristen Bell) apoiou incondicionalmente o seu pai, Keith (Enrico Colantoni), o xerife responsável pela investigação do caso. Em pouco tempo, ela perdeu todos que sempre amou: seus amigos, sua mãe até mesmo o namorado, Duncan Kane (Teddy Dunn). Agora, Veronica trabalha em pequenos casos da Mars Investigations, enquanto busca o assassino de Lilly Kane (Amanda Seyfried) com a ajuda de um novo amigo, Wallace Fennel (Percy Daggs III). A jovem investigadora irá descobrir segredos da sua própria família e, aos poucos, se envolverá com Logan Echolls (Jason Dohring), o antigo namorado de Lilly."
const duracao = 60;
const dublado = true;
const disponivel = ["HBO Max", "Hulu", "Prime Video"]

const titulo1 = "My Mad Fat Diary"
const sinopse1 = "Ambientada em Lincolnshire de 1996, a série conta a trágica porém bem-humorada história de uma adolescente cheia de problemas, chamada Rae (Shaaron Rooney). Ela acabou de sair do hospital psiquiátrico, onde passou quatro meses depois de uma tentativa de suicídio. Ela então retoma sua amizade com Chloe (Jodie Comer) e seu grupo de amigos, que desconhecem os problemas de Rae com sua própria imagem e acham que ela apenas passou o tempo na França. "
const duracao1 = 30;
const dublado1 = true;
const disponivel1 = ["Hulu", "Prime Video", "Apple TV"]

const titulo2 = "The Office"
const sinopse2 = "No formato de pseudodocumentário, a série retrata o cotidiano de um escritório em Scranton, na Pensilvânia, filial da empresa fictícia Dunder Mifflin, de suprimento de papel. Michael Scott (Steve Carell) é um patrão insensível mas que se preocupa com o bem estar de seus empregados, enquanto a série traça um olhar sobre todos eles, destacando suas diferenças e particularidades."
const duracao2 = 30
const dublado2 = true
const disponivel2 = ["Prime Video", "Paramount+", "Oi Play", "HBO Max"]

const titulo3 = "Orphan Black"
const sinopse3 = "Depois de presenciar o suicídio de uma mulher (que é exatamente como ela) em uma estação de trem, Sarah Manning (Tatiana Maslany) faz o que qualquer um faria: assume a identidade da suicida para tentar resolver os próprios problemas financeiros. Mas logo ela descobre que está no centro de um mistério que vai mudar sua vida, quando se vê cara a cara com mais três mulheres idênticas a ela. Todas são clones, e precisam salvar as próprias peles enquanto tentam descobrir quem são os responsáveis pelos experimentos genéticos."
const duracao3 = 60
const dublado3 = true
const disponivel3 = ["Paramount", "Prime Video"]


const titulo4 = "The L Word"
const sinopse4 = "The L Word acompanha as vidas e os amores de um grupo de lésbicas que vivem em Los Angeles. A personagem principal, Jenny (Mia Kirshner), é recém-formada pela Universidade de Chicago, e se muda para LA a fim de morar com seu namorado, Tim (Eric Mabius), que acabou de começar uma carreira profissional como escritor. A vida de Jenny dá uma reviravolta quando ela conhece as vizinhas Bette (Jennifer Beals) e Tina (Laurel Holloman), um casal que está prestes a dar o próximo passo e começar uma família, após estarem juntas há sete anos. Em uma festa, Jenny encontra Marina (Karina Lombard), a dona de uma cafeteria local, e de repente seu impulso a faz começar a questionar a própria sexualidade. Outras amigas de Bette e Tina incluem Dana (Erin Daniels), uma jogadora de Tênis profissional, Alice (Leisha Hailey), uma jornalista, Shane (Katherine Moennig), cabeleireira incapaz de ficar com apenas uma mulher, e Kit (Pam Grier), meia-irmã de Bette que luta contra o alcoolismo. "
const duracao4 = 60
const dublado4 = true
const disponivel4 = ["Showtime", "Hulu"]

const titulo5 = "The L Word. Gen Q"
const sinopse5 = "Dez anos após os eventos de The L Word, as amigas Bette Porter (Jennifer Beals), Alice Pieszecki (Leisha Hailey) e Shane McCutcheon (Katherine Moennig) continuam vivendo em Los Angeles, onde ainda precisam lidar com corações partidos, obstáculos na carreira e novos amores."
const duracao5 = 60
const dublado5 = true
const disponivel5 = ["Showtime", "Hulu"]

const titulo6 = "Daria"
const sinopse6 = "Daria Morgendorffer é uma inteligente, mal compreendida, nada popular e bastante sarcástica adolescente que tolera a vida rodeada dos seus colegas idiotas de Lawndale High. Com sua melhor amiga Jane, uma artista que é tão deslocada quanto ela, Daria lida com a popular irmã Quinn, e com os pais, Jake e Helen, que tentam mudar suas maneiras anti-sociais."
const duracao6 = 30
const dublado6 = true
const disponivel6 = ["MTV", "Paramount+", "Youtube"]

const mediaDuracao = (duracao + duracao1 + duracao2 + duracao3 + duracao4 + duracao5 + duracao6) / 8

console.log(mediaDuracao)

const dublados = dublado && dublado1 && dublado2 && dublado3 && dublado4 && dublado5 && dublado6

console.log(dublado)


console.log((`Título:${titulo}`).toUpperCase(), `\nDuração: ${duracao} \nÉ um dublado? ${dublado} \nOnde está disponível? ${disponivel.join()}`)
console.log((`Título:${titulo1}`).toUpperCase(), `\nDuração: ${duracao1} \nÉ um dublado? ${dublado1} \nOnde está disponível? ${disponivel1.join()}`)
console.log((`Título:${titulo2}`).toUpperCase(), `\nDuração: ${duracao2} \nÉ um dublado? ${dublado2} \nOnde está disponível? ${disponivel2.join()}`)
console.log((`Título:${titulo3}`).toUpperCase(), `\nDuração: ${duracao3} \nÉ um dublado? ${dublado3} \nOnde está disponível? ${disponivel3.join()}`)
console.log((`Título:${titulo4}`).toUpperCase(), `\nDuração: ${duracao4} \nÉ um dublado? ${dublado4} \nOnde está disponível? ${disponivel4.join()}`)
console.log((`Título:${titulo5}`).toUpperCase(), `\nDuração: ${duracao5} \nÉ um dublado? ${dublado5} \nOnde está disponível? ${disponivel5.join()}`)
console.log((`Título:${titulo6}`).toUpperCase(), `\nDuração: ${duracao6} \nÉ um dublado? ${dublado6} \nOnde está disponível? ${disponivel6.join()}`)

// SEMANA 5

const series =
{
    titulo: "Veronica Mars",
    sinopse: "Após a misteriosa morte da sua melhor amiga, Veronica Mars (Kristen Bell) apoiou incondicionalmente o seu pai, Keith (Enrico Colantoni), o xerife responsável pela investigação do caso. Em pouco tempo, ela perdeu todos que sempre amou: seus amigos, sua mãe até mesmo o namorado, Duncan Kane (Teddy Dunn). Agora, Veronica trabalha em pequenos casos da Mars Investigations, enquanto busca o assassino de Lilly Kane (Amanda Seyfried) com a ajuda de um novo amigo, Wallace Fennel (Percy Daggs III). A jovem investigadora irá descobrir segredos da sua própria família e, aos poucos, se envolverá com Logan Echolls (Jason Dohring), o antigo namorado de Lilly.",
    duracao: 60,
    dublado: true,
    disponivel: ["HBO Max", "Hulu", "Prime Video"],
    imagem: "./img/veronica.gif"
}

const series1 =
{
    titulo: "My Mad Fat Diary",
    sinopse: "Ambientada em Lincolnshire de 1996, a série conta a trágica porém bem-humorada história de uma adolescente cheia de problemas, chamada Rae (Shaaron Rooney). Ela acabou de sair do hospital psiquiátrico, onde passou quatro meses depois de uma tentativa de suicídio. Ela então retoma sua amizade com Chloe (Jodie Comer) e seu grupo de amigos, que desconhecem os problemas de Rae com sua própria imagem e acham que ela apenas passou o tempo na França.",
    duracao: 30,
    dublado: true,
    disponivel: ["Hulu", "Prime Video", "Apple TV"],
    imagem: "./img/MMFD.gif"
}

const series2 =
{
    titulo: "The Office",
    sinopse: "No formato de pseudodocumentário, a série retrata o cotidiano de um escritório em Scranton, na Pensilvânia, filial da empresa fictícia Dunder Mifflin, de suprimento de papel. Michael Scott (Steve Carell) é um patrão insensível mas que se preocupa com o bem estar de seus empregados, enquanto a série traça um olhar sobre todos eles, destacando suas diferenças e particularidades.",
    duracao: 30,
    dublado: true,
    disponivel: ["Prime Video", "Paramount+", "Oi Play", "HBO Max"],
    imagem: "./img/theoffice.gif"
}

const series3 =
{
    titulo: "Orphan Black",
    sinopse: "Depois de presenciar o suicídio de uma mulher (que é exatamente como ela) em uma estação de trem, Sarah Manning (Tatiana Maslany) faz o que qualquer um faria: assume a identidade da suicida para tentar resolver os próprios problemas financeiros. Mas logo ela descobre que está no centro de um mistério que vai mudar sua vida, quando se vê cara a cara com mais três mulheres idênticas a ela. Todas são clones, e precisam salvar as próprias peles enquanto tentam descobrir quem são os responsáveis pelos experimentos genéticos.",
    duracao: 60,
    dublado: true,
    disponivel: ["Paramount", "Prime Video"],
    imagem: "./img/orphanblack.gif"
}

const series4 =
{
    titulo: "The L Word",
    sinopse: "The L Word acompanha as vidas e os amores de um grupo de lésbicas que vivem em Los Angeles. A personagem principal, Jenny (Mia Kirshner), é recém-formada pela Universidade de Chicago, e se muda para LA a fim de morar com seu namorado, Tim (Eric Mabius), que acabou de começar uma carreira profissional como escritor. A vida de Jenny dá uma reviravolta quando ela conhece as vizinhas Bette (Jennifer Beals) e Tina (Laurel Holloman), um casal que está prestes a dar o próximo passo e começar uma família, após estarem juntas há sete anos. Em uma festa, Jenny encontra Marina (Karina Lombard), a dona de uma cafeteria local, e de repente seu impulso a faz começar a questionar a própria sexualidade. Outras amigas de Bette e Tina incluem Dana (Erin Daniels), uma jogadora de Tênis profissional, Alice (Leisha Hailey), uma jornalista, Shane (Katherine Moennig), cabeleireira incapaz de ficar com apenas uma mulher, e Kit (Pam Grier), meia-irmã de Bette que luta contra o alcoolismo.",
    duracao: 60,
    dublado: true,
    disponivel: ["Showtime", "Hulu"],
    imagem: "./img/thelword.gif"

}

const series5 =
{
    titulo: "The L Word. Gen Q",
    sinopse: "Dez anos após os eventos de The L Word, as amigas Bette Porter (Jennifer Beals), Alice Pieszecki (Leisha Hailey) e Shane McCutcheon (Katherine Moennig) continuam vivendo em Los Angeles, onde ainda precisam lidar com corações partidos, obstáculos na carreira e novos amores.",
    duracao: 60,
    dublado: true,
    disponivel: ["Showtime", "Hulu"],
    imagem: "./img/genq.gif"
}

const series6 =
{
    titulo: "Daria",
    sinopse: "Daria Morgendorffer é uma inteligente, mal compreendida, nada popular e bastante sarcástica adolescente que tolera a vida rodeada dos seus colegas idiotas de Lawndale High. Com sua melhor amiga Jane, uma artista que é tão deslocada quanto ela, Daria lida com a popular irmã Quinn, e com os pais, Jake e Helen, que tentam mudar suas maneiras anti-sociais.",
    duracao: 30,
    dublado: true,
    disponivel: ["MTV", "Paramount+", "Youtube"],
    imagem: "./img/daria.gif"
}


let objetos = [];

if (series.dublado === true) {
    objetos.push(series)
} else {
    alert("Item não adicionado")
}

if (series1.dublado === true) {
    objetos.push(series1)
} else {
    alert("Item não adicionado")
}

if (series2.dublado === true) {
    objetos.push(series2)
} else {
    alert("Item não adicionado")
}

if (series3.dublado === true) {
    objetos.push(series3)
} else {
    alert("Item não adicionado")
}

if (series4.dublado === true) {
    objetos.push(series4)
} else {
    alert("Item não adicionado")
}

if (series5.dublado === true) {
    objetos.push(series5)
} else {
    alert("Item não adicionado")
}

if (series6.dublado === true) {
    objetos.push(series6)
} else {
    alert("Item não adicionado")
}

console.log(objetos)


for (let serie of objetos) {
    console.log((`Título:${serie.titulo}`).toUpperCase(), `\nDuração: ${serie.duracao} \nÉ um dublado? ${serie.dublado ? "sim" : "não"} \nOnde está disponível? ${serie.disponivel.join()}`)
    // console.log(serie.disponivel.join())
}

//SEMANA 6


const serie = (objeto) => {
    let i = `Título:${objeto.titulo.toUpperCase()}, \nDuração: ${objeto.duracao} \nÉ um dublado? ${objeto.dublado ? "sim" : "não"} \nOnde está disponível? ${objeto.disponivel.join()}`
    return i
}

const tvShow = serie(series)
console.log(tvShow)



function buscaSerie(objeto, titulo) {

    if (titulo != undefined) {

        const objetosNomes = objeto.filter(objeto => objeto.titulo.toUpperCase().includes(titulo.toUpperCase()));
        if (objetosNomes.length >= 1) {
            return objetosNomes;
        } else {
            alert('Nenhuma série foi encontrada')
        }
    }

}


function buscaShows() {

    let tvShow;

    const search = document.querySelector('#searchBar').value;
    if (!search) {
        alert("Digite algo para que a busca aconteça");
    } else {
        const seriesFiltradas = buscaSerie(objetos, search);
        exibeSeries(seriesFiltradas)

    }
}

function exibeSeries(series) {
    let objeto = document.getElementById("objeto")
    objeto.innerHTML = ""
    for (const serie of series) {
        let tvShow
    tvShow = `<article class="card">
    <div id="imagem"> <img src="${serie.imagem}" alt="${serie.titulo}"/></div>
    <ul>
        <li>${serie.titulo}</li>
        <li>Sinopse: ${serie.sinopse}</li>
        <li>Duração: ${serie.duracao} minutos </li>
        <li>Tem dublado? ${serie.dublado ? "sim" : "não"}</li>
        <li>Você encontra em: ${serie.disponivel}</li>
    </ul>
    </article>`;
    objeto.innerHTML += tvShow
    }
}

exibeSeries(objetos)
