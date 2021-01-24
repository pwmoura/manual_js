// [Definição do cavas] ============================================>
var cnv = document.querySelector('canvas')
var ctx = cnv.getContext('2d')


// [Classes] =======================================================>


// [Recursos do Jogo] ==============================================>

// # Entradas / teclas
const LEFT = 37, RIGHT = 39, ENTER = 13, SPACE = 32

// # Direções
var mvLeft = mvRight = false;

// # Estados do Jogo
const LOADING = 0, PLAYNG = 1, PAUSED = 2, OVER = 3
var gameState = LOADING

// [Funções] =======================================================>



