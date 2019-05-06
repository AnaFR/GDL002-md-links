  # Markdown Links

Markdown es un lenguaje de marcado ligero muy popular entre developers principalmente para redactar el archivo README.md de los proyectos.

Estos archivos Markdown normalmente contienen links (vínculos/ligas) que muchas veces están rotos o ya no son válidos y eso perjudica mucho el valor de la información que se quiere compartir.

Markdown links es una herramienta que lee y analiza archivos en formato Markdown, para verificar los links que contengan y reportar algunas estadísticas.

A continuación se describe el flujo del modulo:

### DIAGRAMA DE FLUJO DEL MODULO
 ![Diagrama de flujo]
 (https://github.com/AnaFR/GDL002-md-links/blob/master/img/flujograma.png)}

### PASOS PARA LA INSTALACIÓN:


1. Abrir la terminal desde la carpeta del proyecto o abrir carpeta del proyecto desde la terminal.

 2. El módulo se instala de la siguienite manera: 
          
            npm i anafrs-md-links

### ¿CUÁLES SON LAS FUNCIONALIDADES?

Es un modulo con las siguientes funcionalidades:

 - Lee  archivos exclusivamente con extensión .md.

 - Extrae e imprime todos los links que contenga el archivo.

- #### Seleccionando la opción --validate:
     Valida el estado actual de los links encontrados (  verifica que e se encuentren funcionando, es decir, que no esten rotos.)
    
- #### Seleccionando la opción --stats:
    La salida será un texto con estadísticas básicas sobre los links.



## Requisitos :

  - Debes tener instalado Node.js en tu computadora.

- Librerias utilizadas:    node-fetch.


#### USO:

##### Options
--validate

Si pasamos a esta opción, el módulo debe hacer una petición HTTP para averiguar si el link funciona o no. Si el link resulta en una redirección a una URL que responde ok, entonces consideraremos el link como ok.

#### Por ejemplo:

     $ md-links ./some/example.md --validate
    ./some/example.md http://algo.com/2/3/ ok 200 Link a algo
    ./some/example.md https://otra-cosa.net/algun-doc.html fail 404 algún doc
    ./some/example.md http://google.com/ ok 301 Google

Vemos que el output en este caso incluye la palabra ok o fail después de la URL, así como el status de la respuesta recibida a la petición HTTP a dicha URL.

--stats

Si pasamos a esta opción el output (salida) será un texto con estadísticas básicas sobre los links.

#### Por ejemplo:


    $ md-links ./some/example.md  --stats
    Total: 3
    Unique: 3
    Broken: 0


También podemos combinar --stats y --validate para obtener estadísticas que necesiten de los resultados de la validación.


#### VERSION
0.1.3

#### AUTOR
Ana Laura Flores