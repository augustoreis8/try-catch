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
    numbers = document.getElementById("inputnumbers").value

    try {
        if (numbers == '') throw 'Informe um valor';

        if (numbers < 6 || numbers > 9) throw 'Informe um valor maior que 5 e menor que 10';

        if (numbers > 5 || numbers < 10) throw '';
    }
    catch (erro) {
        document.getElementById("outputnumbers").innerHTML = erro;
    }
    finally {
        alert("O numero escolhido foi:  " + numbers);
    }
}