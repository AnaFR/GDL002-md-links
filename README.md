# Markdown Links

Markdown es un lenguaje de marcado ligero muy popular entre developers. Es usado en muchísimas plataformas que manejan texto plano (GitHub, foros, blogs, ...), y es muy común encontrar varios archivos en ese formato en cualquier tipo de repositorio (empezando por el tradicional README.md).

Estos archivos Markdown normalmente contienen links (vínculos/ligas) que muchas veces están rotos o ya no son válidos y eso perjudica mucho el valor de la información que se quiere compartir.

Dentro de una comunidad de código abierto, nos propusierón crear una herramienta usando Node.js, que lee y analiza archivos en formato Markdown, para verificar los links que contengan y reportar algunas estadísticas.

A continuación se describe el flujo del modulo:

## Diagrama de flujo del modulo
 ![Diagrama de flujo](https://github.com/AnaFR/GDL002-md-links/blob/master/img/flujograma.png)}






## ¿QUÉ ES?
Es un modulo con las siguientes funcionalidades:

    Lee  archivos exclusivamente con extensión .md

    Extrae e imprime todos los links que contenga el archivo

    Seleccionando la opción --validate valida estado actual de los links encontrados (  verifica que e se encuentren funcionando, es decir, que no esten rotos.)
    
    Seleccionando la opción --stats la salida será un texto con estadísticas básicas sobre los links.




 

##¿CÓMO INSTALAR EL MÓDULO?

Requisitos :

 Debes tener instalado Node.js en tu computadora.

Librerias utilizadas:

node-fetch

Pasos para la instalación:


1. Abrir la terminal desde la carpeta del proyecto o abrir carpeta del proyecto desde la terminal.

Formas de instalación: 

# Local

npm install AnaFR/GDL002-md-links

# Global

npm install --save 

 documentación del API y ejemplos




USO:

Options
--validate

Si pasamos la opción --validate, el módulo debe hacer una petición HTTP para averiguar si el link funciona o no. Si el link resulta en una redirección a una URL que responde ok, entonces consideraremos el link como ok.

Por ejemplo:

$ md-links ./some/example.md --validate
./some/example.md http://algo.com/2/3/ ok 200 Link a algo
./some/example.md https://otra-cosa.net/algun-doc.html fail 404 algún doc
./some/example.md http://google.com/ ok 301 Google

Vemos que el output en este caso incluye la palabra ok o fail después de la URL, así como el status de la respuesta recibida a la petición HTTP a dicha URL.
--stats

Si pasamos la opción --stats el output (salida) será un texto con estadísticas básicas sobre los links.

$ md-links ./some/example.md --stats
Total: 3
Unique: 3

También podemos combinar --stats y --validate para obtener estadísticas que necesiten de los resultados de la validación.

$ md-links ./some/example.md --stats --validate
Total: 3
Unique: 3
Broken: 1

VERSION


#Autor

Ana Laura Flores