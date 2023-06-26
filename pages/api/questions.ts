import AnswersModel from "@/model/answers";
import QuestionModel from "@/model/question";

const questions: QuestionModel[] = [
    new QuestionModel(278, 'O que é o Next.js?', [

        AnswersModel.wrong('Uma linguagem de programação.'),
        AnswersModel.wrong('Um banco de dados relacional.'),
        AnswersModel.wrong('Um sistema operacional.'),
        AnswersModel.correct('Um framework de desenvolvimento front-end.'),

    ]),
    new QuestionModel(89, 'Qual é o objetivo principal do Next.js?', [

        AnswersModel.wrong('Simplificar o desenvolvimento de aplicativos móveis.'),
        AnswersModel.wrong('Facilitar o desenvolvimento de aplicativos desktop.'),
        AnswersModel.wrong('Todas as alternativas estão corretas.'),
        AnswersModel.correct('Acelerar o desenvolvimento de aplicações web com React.'),

    ]),
    new QuestionModel(655, 'Quais são os benefícios do Next.js?', [

        AnswersModel.wrong('Renderização do lado do servidor (Server-side rendering - SSR).'),
        AnswersModel.wrong('Roteamento automático.'),
        AnswersModel.wrong('Pré-renderização estática (Static Site Generation - SSG).'),
        AnswersModel.correct('Todas as alternativas estão corretas.'),

    ]),
    new QuestionModel(370, 'Qual comando é usado para iniciar um novo projeto Next.js?', [

        AnswersModel.wrong('create-react-app my-app'),
        AnswersModel.wrong('ng new my-app'),
        AnswersModel.wrong('npm init my-app'),
        AnswersModel.correct('npx create-next-app my-app'),

    ]),
    new QuestionModel(524, 'Como o Next.js lida com o roteamento de páginas?', [

        AnswersModel.wrong('Utilizando arquivos de configuração específicos para cada rota.'),
        AnswersModel.wrong('Através de uma função de roteamento personalizada.'),
        AnswersModel.wrong('Utilizando a biblioteca React Router.'),
        AnswersModel.correct('O roteamento é tratado automaticamente pelo Next.js.'),

    ]),
    new QuestionModel(290, 'O Next.js é compatível com qual linguagem de programação?', [

        AnswersModel.wrong('JavaScript'),
        AnswersModel.wrong('TypeScript'),
        AnswersModel.wrong('Python'),
        AnswersModel.correct('Todas as alternativas estão corretas.'),

    ]),
    new QuestionModel(791, 'Como o Next.js lida com a renderização no lado do servidor (SSR)?', [

        AnswersModel.wrong('O Next.js renderiza as páginas no cliente após o carregamento inicial.'),
        AnswersModel.wrong('O Next.js utiliza exclusivamente a renderização no lado do cliente (CSR).'),
        AnswersModel.wrong('O Next.js não suporta renderização no lado do servidor.'),
        AnswersModel.correct('O Next.js renderiza as páginas no servidor e envia o HTML resultante para o cliente.'),

    ]),
    new QuestionModel(1, 'Qual comando é usado para iniciar o servidor de desenvolvimento no Next.js?', [

        AnswersModel.wrong('npm start'),
        AnswersModel.wrong('npm run build'),
        AnswersModel.wrong('npm run server'),
        AnswersModel.correct('npm run dev'),

    ]),
    new QuestionModel(380, 'O Next.js suporta a pré-renderização estática (SSG). O que isso significa?', [

        AnswersModel.wrong('Todas as páginas são pré-renderizadas no servidor.'),
        AnswersModel.wrong('As páginas são renderizadas no cliente durante o carregamento inicial.'),
        AnswersModel.wrong('A pré-renderização dinânmica não é suportada pelo Next.js.'),
        AnswersModel.correct('O Next.js gera um HTML estático para cada página durante o build.'),

    ]),
    new QuestionModel(422, 'Quais empresas e projetos populares utilizam o Next.js?', [

        AnswersModel.wrong('Netflix'),
        AnswersModel.wrong('TikTok'),
        AnswersModel.wrong('Uber'),
        AnswersModel.correct('Todas as alternativas estão corretas.'),

    ]),
    new QuestionModel(211, 'O que é o TypeScript?', [

        AnswersModel.wrong('Um framework de desenvolvimento web.'),
        AnswersModel.wrong('Uma biblioteca de gráficos e visualização de dados.'),
        AnswersModel.wrong('Todas as alternativas estão corretas.'),
        AnswersModel.correct('Uma linguagem de programação baseada em JavaScript.'),

    ]),
    new QuestionModel(369, 'Qual é o objetivo principal do TypeScript?', [

        AnswersModel.wrong('Melhorar o desempenho das aplicações JavaScript.'),
        AnswersModel.wrong('Simplificar a sintaxe do JavaScript.'),
        AnswersModel.wrong('Todas as alternativas estão corretas.'),
        AnswersModel.correct('Adicionar tipagem estática e recursos avançados ao JavaScript.'),

    ]),
    new QuestionModel(401, 'O TypeScript é compatível com qual versão do JavaScript?', [

        AnswersModel.wrong('ECMAScript 5 (ES5)'),
        AnswersModel.wrong('ECMAScript 6 (ES6)'),
        AnswersModel.wrong('ECMAScript 2015 (ES2015)'),
        AnswersModel.correct('Todas as alternativas estão corretas.'),

    ]),
    new QuestionModel(788, 'Como as declarações de tipo são adicionadas no TypeScript?', [

        AnswersModel.wrong('Utilizando comentários especiais no código.'),
        AnswersModel.wrong('Definindo tipos em arquivos separados com extensão .ts.'),
        AnswersModel.wrong('O TypeScript infere automaticamente os tipos.'),
        AnswersModel.correct('Todas as alternativas estão corretas.'),

    ]),
    new QuestionModel(118, 'Qual é o comando usado para compilar um arquivo TypeScript para JavaScript?', [

        AnswersModel.wrong('ts compile'),
        AnswersModel.wrong('ts transpile'),
        AnswersModel.wrong('typescript compile'),
        AnswersModel.correct('tsc'),

    ]),
    new QuestionModel(57, 'Quais são os benefícios do uso do TypeScript?', [

        AnswersModel.wrong('Detecção de erros em tempo de compilação.'),
        AnswersModel.wrong('Melhor autocompletar e recursos de sugestão de código.'),
        AnswersModel.wrong('Refatoração de código mais segura.'),
        AnswersModel.correct('Todas as alternativas estão corretas.'),

    ]),
    new QuestionModel(760, 'É possível utilizar bibliotecas JavaScript existentes em um projeto TypeScript?', [

        AnswersModel.wrong('Não, o TypeScript requer bibliotecas específicas para TypeScript.'),
        AnswersModel.wrong('Apenas algumas bibliotecas JavaScript são compatíveis com TypeScript.'),
        AnswersModel.wrong('É necessário converter as bibliotecas JavaScript para TypeScript antes de usá-las.'),
        AnswersModel.correct('Sim, o TypeScript é totalmente compatível com bibliotecas JavaScript.'),

    ]),
    new QuestionModel(173, 'Como o TypeScript é transformado em JavaScript para ser executado nos navegadores?', [

        AnswersModel.wrong('O TypeScript é interpretado diretamente pelos navegadores.'),
        AnswersModel.wrong('O código TypeScript é convertido em código JavaScript válido durante o tempo de execução.'),
        AnswersModel.wrong('O TypeScript requer um ambiente de execução especial para funcionar nos navegadores.'),
        AnswersModel.correct('O código TypeScript é compilado antecipadamente para JavaScript antes da execução.'),

    ]),
    new QuestionModel(735, 'O TypeScript é um software de código aberto?', [

        AnswersModel.wrong('Não, o TypeScript é um software proprietário.'),
        AnswersModel.wrong('Apenas a versão básica do TypeScript é de código aberto.'),
        AnswersModel.wrong('O TypeScript não é um software, mas uma especificação de linguagem.'),
        AnswersModel.correct('Sim, é desenvolvido pela Microsoft e mantido pela comunidade de código aberto.'),

    ]),
    new QuestionModel(332, 'Quais ferramentas populares suportam o uso do TypeScript?', [

        AnswersModel.wrong('Visual Studio Code'),
        AnswersModel.wrong('Angular'),
        AnswersModel.wrong('Vue.js'),
        AnswersModel.correct('Todas as alternativas estão corretas.'),

    ]),
    new QuestionModel(933, 'O que é o React?', [

        AnswersModel.wrong('Um banco de dados relacional.'),
        AnswersModel.wrong('Um framework de desenvolvimento front-end.'),
        AnswersModel.wrong('Uma linguagem de programação.'),
        AnswersModel.correct('Uma biblioteca JavaScript para construir interfaces de usuário.'),

    ]),
    new QuestionModel(272, 'Quais são os principais conceitos do React?', [

        AnswersModel.wrong('Promessas e ciclos de vida.'),
        AnswersModel.wrong('Roteamento e injeção de dependência.'),
        AnswersModel.wrong('Todas as alternativas estão corretas.'),
        AnswersModel.correct('Componentes e estado.'),

    ]),
    new QuestionModel(441, 'Qual é a sintaxe usada para definir um componente funcional no React?', [

        AnswersModel.wrong('class MyComponent extends React.Component { ... }'),
        AnswersModel.wrong('function MyComponent() { ... }'),
        AnswersModel.wrong('const MyComponent = () => { ... }'),
        AnswersModel.correct('Todas as alternativas estão corretas.'),

    ]),
    new QuestionModel(581, 'O React utiliza qual tipo de renderização?', [

        AnswersModel.wrong('Renderização no lado do servidor (Server-side rendering - SSR).'),
        AnswersModel.wrong('Renderização estática (Static rendering).'),
        AnswersModel.wrong('Todas as alternativas estão corretas.'),
        AnswersModel.correct('Renderização no lado do cliente (Client-side rendering - CSR).'),

    ]),
    new QuestionModel(83, 'Qual é o método utilizado para atualizar o estado de um componente no React?', [

        AnswersModel.wrong('updateState()'),
        AnswersModel.wrong('changeState()'),
        AnswersModel.wrong('modifyState()'),
        AnswersModel.correct('setState()'),

    ]),
    new QuestionModel(764, 'O que é o JSX no contexto do React?', [

        AnswersModel.wrong('Um formato de arquivo usado para definir componentes React.'),
        AnswersModel.wrong('Uma biblioteca de estilização utilizada em conjunto com o React.'),
        AnswersModel.wrong('Todas as alternativas estão corretas.'),
        AnswersModel.correct('Uma sintaxe de marcação semelhante ao HTML para criar elementos React.'),

    ]),
    new QuestionModel(693, 'Como os eventos são tratados no React?', [

        AnswersModel.wrong('Utilizando diretivas especiais no JSX.'),
        AnswersModel.wrong('O React não suporta a manipulação de eventos.'),
        AnswersModel.wrong('Os eventos são manipulados automaticamente pelo React sem a necessidade de código adicional.'),
        AnswersModel.correct('Através de funções de callback.'),

    ]),
    new QuestionModel(389, 'O que é o Virtual DOM no React?', [

        AnswersModel.wrong('Uma versão simplificada do Document Object Model (DOM).'),
        AnswersModel.wrong('Uma biblioteca de teste de unidade para o React.'),
        AnswersModel.wrong('O Virtual DOM não está relacionado ao React.'),
        AnswersModel.correct('Uma técnica para otimizar a renderização de componentes React.'),

    ]),
    new QuestionModel(636, 'Qual comando é usado para criar um novo aplicativo React?', [

        AnswersModel.wrong('ng new my-app'),
        AnswersModel.wrong('npm init react-app my-app'),
        AnswersModel.wrong('npm create my-app react'),
        AnswersModel.correct('create-react-app my-app'),

    ]),
    new QuestionModel(705, 'Quais empresas e projetos populares utilizam o React?', [

        AnswersModel.wrong('Facebook'),
        AnswersModel.wrong('Instagram'),
        AnswersModel.wrong('Airbnb'),
        AnswersModel.correct('Todas as alternativas estão corretas.'),

    ]),
    new QuestionModel(430, 'O que é o JavaScript?', [

        AnswersModel.wrong('Um sistema operacional.'),
        AnswersModel.wrong('Um banco de dados relacional.'),
        AnswersModel.wrong('Uma biblioteca para construir interfaces de usuário.'),
        AnswersModel.correct('Uma linguagem de programação.'),

    ]),
    new QuestionModel(548, 'Quais são as principais características do JavaScript?', [

        AnswersModel.wrong('Compilação estática e tipagem estática.'),
        AnswersModel.wrong('Orientação a objetos pura e compilação JIT.'),
        AnswersModel.wrong('Todas as alternativas estão corretas.'),
        AnswersModel.correct('Tipagem dinâmica e suporte a programação assíncrona.'),

    ]),
    new QuestionModel(288, 'O JavaScript é uma linguagem de programação compilada ou interpretada?', [

        AnswersModel.wrong('Compilada.'),
        AnswersModel.wrong('Interpretada.'),
        AnswersModel.wrong('O JavaScript requer um ambiente de execução específico para ser executado.'),
        AnswersModel.correct('O JavaScript pode ser tanto compilado quanto interpretado.'),

    ]),
    new QuestionModel(42, 'Qual é a forma correta de declarar uma variável no JavaScript?', [

        AnswersModel.wrong('var myVar = 10;'),
        AnswersModel.wrong('let myVar = 10;'),
        AnswersModel.wrong('const myVar = 10;'),
        AnswersModel.correct('Todas as alternativas estão corretas.'),

    ]),
    new QuestionModel(147, 'O JavaScript suporta herança de classes?', [

        AnswersModel.wrong('Sim, o JavaScript suporta herança de classes.'),
        AnswersModel.wrong('Não, o JavaScript não suporta herança de classes nem herança prototípica.'),
        AnswersModel.wrong('O JavaScript suporta herança apenas em bibliotecas externas.'),
        AnswersModel.correct('O JavaScript suporta apenas herança prototípica.'),

    ]),
    new QuestionModel(273, 'Como é feito o comentário de linha única no JavaScript?', [

        AnswersModel.wrong('/* Comentário de linha única */'),
        AnswersModel.wrong('# Comentário de linha única'),
        AnswersModel.wrong('% Comentário de linha única'),
        AnswersModel.correct('// Comentário de linha única'),

    ]),
    new QuestionModel(835, 'O que é o DOM (Document Object Model) no contexto do JavaScript?', [

        AnswersModel.wrong('Uma biblioteca de manipulação de documentos HTML.'),
        AnswersModel.wrong('Uma biblioteca de animações e efeitos visuais.'),
        AnswersModel.wrong('O DOM não está relacionado ao JavaScript.'),
        AnswersModel.correct('Uma representação em memória de um documento HTML que o JavaScript pode interagir.'),

    ]),
    new QuestionModel(226, 'Como é feita a iteração em uma matriz (array) no JavaScript?', [

        AnswersModel.wrong('Utilizando apenas o método forEach.'),
        AnswersModel.wrong('Utilizando apenas um loop for...in.'),
        AnswersModel.wrong('O JavaScript não suporta iteração em matrizes.'),
        AnswersModel.correct('Utilizando um loop for ou métodos como forEach e map.'),

    ]),
    new QuestionModel(619, 'Quais são os operadores de comparação no JavaScript?', [

        AnswersModel.wrong('= (igual), == (igual), != (diferente), !== (estritamente diferente).'),
        AnswersModel.wrong('== (igual), <> (diferente), === (estritamente igual), !== (estritamente diferente).'),
        AnswersModel.wrong('= (igual), == (igual), === (estritamente igual), >< (diferente).'),
        AnswersModel.correct('== (igual), === (estritamente igual), != (diferente), !== (estritamente diferente).'),

    ]),
    new QuestionModel(961, 'Qual é a função console.log() utilizada para fazer no JavaScript?', [

        AnswersModel.wrong('Realizar operações matemáticas.'),
        AnswersModel.wrong('Manipular o DOM de uma página web.'),
        AnswersModel.wrong('Todas as alternativas estão corretas.'),
        AnswersModel.correct('Exibir informações no console do navegador ou no console do Node.js.'),

    ]),
]

export default questions;