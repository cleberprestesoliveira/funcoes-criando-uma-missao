const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas =[
    {
        enunciado: "Você é um jovem aprendiz em uma cidade futurista. Ao sair da escola, encontra um artefato mágico: um orbe que responde qualquer pergunta e cria imagens ilusórias. Qual a sua reação?",
        alternativas: [
            {
                texto: "Isso é uma magia perigosa!",
                afirmacao: "Você se sente receoso, imaginando os perigos que essa tecnologia ancestral pode trazer."
            },
            {
                texto: "Essa magia pode ser útil para o bem!",
                afirmacao: "Decide aprender como controlar essa magia para ajudar nas tarefas do dia a dia."
            }
        ]
    },
    {
        enunciado: "A mestra dos magos, intrigada com sua descoberta, propõe uma missão: escrever um pergaminho sobre como a magia dos orbes pode ajudar nos estudos da guilda. Qual caminho você segue?",
        alternativas: [
            {
                texto: "Consulta os grimórios mágicos (busca na IA) para entender melhor os efeitos dos orbes.",
                afirmacao: "Você conseguiu informações valiosas sobre os orbes através dos grimórios encantados."
            },
            {
                texto: "Conversa com outros aprendizes e busca sabedoria nos relatos orais da guilda.",
                afirmacao: "Prefere confiar nas histórias dos sábios e em seu próprio raciocínio."
            }
        ]
    },
    {
        enunciado: "Durante a assembleia dos magos, surge o debate: os orbes mágicos vão criar novas funções na guilda ou ameaçar os trabalhos tradicionais? Qual seu posicionamento?",
        alternativas: [
            {
                texto: "Defende que os orbes vão abrir novas possibilidades e aprimorar as habilidades dos magos.",
                afirmacao: "Torna-se um defensor da magia como ferramenta de evolução e inovação."
            },
            {
                texto: "Alerta sobre os riscos de magos perderem seu lugar para os orbes autônomos.",
                afirmacao: "Cria um conselho de magos para discutir a ética no uso dos orbes mágicos."
            }
        ]
    },
    {
        enunciado: "Como prova final, a mestra pede que você crie uma ilustração que represente sua visão sobre o futuro dos orbes mágicos. Como irá proceder?",
        alternativas: [
            {
                texto: "Desenha manualmente usando os pincéis encantados do templo.",
                afirmacao: "Decide ensinar os colegas a importância de dominar as artes tradicionais do desenho mágico."
            },
            {
                texto: "Utiliza o orbe para gerar uma ilustração mágica instantaneamente.",
                afirmacao: "Acelera a produção de imagens e passa a ensinar os outros aprendizes a dominar a criação visual com orbes."
            }
        ]
    },
    {
        enunciado: "Sua guilda precisa entregar um relatório sobre criaturas mágicas, mas um dos colegas propõe copiar integralmente o texto que o orbe gerou. Qual sua atitude?",
        alternativas: [
            {
                texto: "Aceita, achando que o uso do orbe é suficiente como contribuição para o trabalho.",
                afirmacao: "Acaba tornando-se dependente do orbe e sente dificuldades em criar por conta própria."
            },
            {
                texto: "Decide revisar e adaptar o texto, acrescentando a visão do grupo e corrigindo possíveis erros do orbe.",
                afirmacao: "Aprende que a magia dos orbes é uma ferramenta auxiliar e não substitui a essência do pensamento humano."
            }
        ]
    },
];


let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Em 2049...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();

