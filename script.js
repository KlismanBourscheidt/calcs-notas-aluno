const prompt = require("prompt-sync")();

function inicio() {
    let lista = [];
    const totalAlunos = 10;
    const totalNotas = 4;

    for (let i = 0; i < totalAlunos; i++) {
        // Captura o nome do aluno
        let nomeAluno = prompt(`Digite o nome do aluno (${i + 1}/${totalAlunos}): `);
        let somaNotas = 0;

        // Captura as notas e valida
        for (let n = 1; n <= totalNotas; n++) {
            let nota;
            do {
                nota = Number(prompt(`Digite a nota ${n} (entre 0 e 10): `));
                if (nota < 0 || nota > 10) {
                    console.log("Nota inválida! Digite um valor entre 0 e 10.");
                }
            } while (nota < 0 || nota > 10);
            
            somaNotas += nota;
        }

        // Calcula a média final
        let mediaFinal = somaNotas / totalNotas;

        // Adiciona o aluno à lista com sua média
        lista.push({
            nome: nomeAluno,
            media: mediaFinal,
            status: mediaFinal >= 7 ? "Aprovado" : "Reprovado",
        });
    }

    // Exibe os resultados
    console.log("\nResultados:");
    lista.forEach((aluno, index) => {
        console.log(
            `Aluno ${index + 1}: ${aluno.nome} - Média Final: ${aluno.media.toFixed(2)} - ${aluno.status}`
        );
    });
}

inicio();
