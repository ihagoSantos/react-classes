# react-classes
Anotações das aulas do curso *React: do zero à maestria*. Do professor *Matheus Battisti*

## useState
- Usado para re-renderizar um componente quando o seu valor é alterado

## useReducer
- tem a mesma função do useState, ele gerencia valores
- Porém temos a possibilidade de *executar uma função na hora da alteração do valor*
- Então temos que o useReducer recebe *um valor* para gerenciar e *uma função* para alterar esse valor
- O useReducer geralmente contém operações mais complexas, usando uma estrutura switch com actions

## useEffect
- É utilizado para várias ações no nosso APP, junto com useState é um dos hooks mais utilizados
- Podemos realizar desde alterações na DOM a requisições HTTP
- E o grande motivo é: conseguimos controlar quantas vezes algo acontece (re-renderizar os componentes sempre que algo acontece pode causar um loop infinito. É possível controlar isso com useEffect)
- A sintaxe é formada por *uma função a ser executada* e *um array de dependências*
- Pode ser executado com ou sem dependências
### useEffect com array vazio
- Uma estratégia interessante para algumas situações é utilizar o useEffect apenas uma vez
- Para isso apenas precisamos deixar o array de dependências vazio
- Ao renderizar o componente, a lógica será executada
    - Quando você executa seu aplicativo em modo de desenvolvimento e o StrictMode (no arquivo main.jsx) está ativado (o que é padrão no React 18), ele monta e desmonta o componente duas vezes intencionalmente. Isso serve para ajudar a detectar efeitos colaterais inesperados dentro do useEffect. Em modo de produção isso não acontece.
### useEffect com array de dependências
- Outra maneira de controlar quando o useEffect será executado é colocando algum item no array de dependências.
- Assim, sempre que o item fo alterado, teremos o useEffect sendo executado novamente.
- Nos fornecendo um maior controle de quando a função deve ou não ser executada
### Limpeza do useEffect
- Alguns efeitos precisam ter uma *técnica de cleanup (limpeza)* para garantir o seu funcionamento
- Não fazer isso pode gerar erros ou comportamentos indesejados
- Exemplo: um timeout que ao mudar de página pode continuar a ser executado, pela falta desta limpeza

## useContext
- o useContext é o hook utilizado para consumir um contexto, da Context API
- Vamor precisar criar o *context* e também o *Provider*
- *Envolver os componentes* que receberão os valores compartilhados
- E entaõ fazer o uso do hook onde necessário

## useRef
- O useRef pode ser utilizado como useState para gerenciar valores
- A diferença é que ele é um objeto, seu valor está na propriedade *current*
- outra particularidade do useRef é que ele *não re-renderiza o componente ao ser alterado*, sendo interessante em alguns casos

### useRef e o DOM
- O useRef pode ser utilizado para selecionar elementos do JSX
- com isso, podemos fazer manipulação e DOM ou aplicar funções como a *focus*, que foca no input
- Este é um outro uso muito interessante para esse hook

## useCallback
- O hook de *useCallback* pode ser utilizado para duas situações
- Ele basicamente *memoriza uma função*, fazendo ela *Não ser reconstruída a ada renderização* de um componente
- O primeiro caso é quando estamos prezando pela *performace*, então queremos que uma função muito complexa não seja reconstruída toda vez
- Já o seguindo é quando *o próprio React nos indica que uma função deveria estar contida em um useCallback*, para evitar problemas de performace

## useMemo
- O useMemo pode ser utilizado para garantir a referência de um objeto
- Fazendo com que algo possa ser atrelado a uma referência e não a um valor
- Com isso, conseguimos *condicionar useEffects a uma variável* da maneira mais inteligente

## useLayoutEffect
- Muito parecido com o useEffect
- A grande diferença é que este hook roda antes de renderizar o componente
- ou seja, o hook é *síncrono*, bloqueando o carregamento da página para o sucesso da sua funcionalidade
- A ideia é executar algo antes que o usuário veja a página

## useImperativeHandle
- Com o hook useImperativeHandle temos como acionar ações em outro componente de forma imperativa (de cima para baixo)
- Como não podemos passar refs como props, precisamos usar uma função *fowardRef*
- isso nos permite passar as referências, e torna o nosso exemplo viável

## Custom Hooks
- Os custom hooks são os hooks que nós criamos
- Muitas vezes para *abstrair funções complexas do componente* ou simplesmente *reaproveitar o código*
- Esta técnica é muito utilizada em projetos profissionais

## useDebugValue
- É um hook que é utilizado para debug
- Aconselhado para ser utilizado em *custom hooks*
- Adiciona uma área no *React Dev Tools (extensão para chrome)*, ele estará no componente em que o hook é utilizado