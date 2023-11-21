# Forløb 12 - smarte deklarative programmeringsmetoder, til arrays, i javascript

```javascript
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>

    <p id="i1">Det originale array vises her</p>
    <p id="i2">Det beregnede resutat vises her</p>    
    <button style="display: block;" onclick="sorter()">Sorter!</button>
    <button style="display: block;" onclick="gennemsnit()">Gennemsnit!</button>
    <button style="display: block;" onclick="dobbelt()">Dobbelt!</button>
    <button style="display: block;" onclick="fjernHverAnden()">Hver anden til nul!</button>

    <script>
        let liste = [1,5,3,4,7,8,0,9];
        document.getElementById("i1").innerHTML = liste;

        let pi2   = document.getElementById("i2")

        function sorter(){
            pi2.innerHTML = "kode mangler";
        }

        function gennemsnit(){
            pi2.innerHTML = "kode mangler";
        }

        function dobbelt(){
            pi2.innerHTML = "kode mangler";
        }

        function fjernHverAnden(){
            pi2.innerHTML = "kode mangler";
        }
    </script>

</body>
</html>
```