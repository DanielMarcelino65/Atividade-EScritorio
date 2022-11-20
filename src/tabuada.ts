/* 
* Perfeito também Dan Dan, aqui faço a mesma objeção da tarefa de IMC
* em relação aos nomes de parâmetros, mas neste caso acrescento o nome da função também.
*/

// A variável foi declarada mas nunca foi usada.
var i: number = 0;

var n: number = 5;

function TAB(a: number) : void
{
    /* 
    * É importante que tu repare um negócio aqui, tu declarou uma variável e inicializou ela como 0
    * mas logo no início do laço for tu já colocou ela como 1. É uma coisa besta mas que mostra a beleza
    * do teu código, fora a escolha ruim do nome da variável. 
    */
    let o: number = 0;

    // Percebe que essa variável de resultado tá sendo usada em lugar nenhum? Ela só foi declarada e tá sem uso.
    let resultado: number;

    for(o= 1; o <= 10; o++)
    {
        console.log(`${a} * ${o} = ${a*o}`);
    }
}

TAB(n);
   