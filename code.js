const inputFileButton = document.getElementById("inputfilebutton");
inputFileButton.addEventListener("click", clickFileButton);

const inputNumberButton = document.getElementById("inputnumbersbutton");
inputNumberButton.addEventListener("click", clickNumbersButton);

function clickFileButton() {
    arquivo = document.getElementById("inputfile");

    var fr = new FileReader();

    try {
        fr.readAsText(arquivo.files[0]);
        fr.onload = function () {
            info = fr.result;
            document.getElementById('output').textContent = fr.result;
        }
    }
    catch (erro) {
        console.log(erro);
        alert(erro);
    }
    finally {
        alert("Obrigado pela visita");
    }
}

function clickNumbersButton() {

    document.getElementById("outputnumbers").innerHTML = " ";
    numbers = document.getElementById("inputnumbers").value
    numbers = Number(numbers);
    console.log(typeof numbers);

    try {
        if (numbers == '') throw 'Informe um valor';

        if (numbers <= 5 || numbers >= 10) throw 'Informe um valor maior que 5 e menor que 10';

    }
    catch (erro) {
        document.getElementById("outputnumbers").innerHTML = erro;
        console.log("Erro " + erro);
    }
    finally {
        alert("O numero escolhido foi:  " + numbers);
    }
}