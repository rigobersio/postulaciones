# proyecto para construir aplicaciones de formularios con angular TS bootstrap firebase
1. lo primero es instalar angular
    1.1 en este punto el primer problema es la versión antigua de nodejs y para solucionarlo se instala via nvd
2. para instalar angular a nivel global se ocupa:
```bash
npm install -g @angular/cli
```
3. para crear un nuevo proyecto se ejecuta:
```bash
ng new nombre-del-proyecto
```
en este caso el nombre es **postulaciones-app**
    
    3.1 mx linux basado en debian 11.9 da muchos problemas para instalar nodejs y npm actualizado. Lor problemas persisten con yarn y en definitiva la instalación de angular se vuelve muy dificultosa. se recomienda pasar a fedora o windows.

    3.2 en Windows:
        3.2.1 actualizar Nodejs a la ultima lts
        3.2.2 actualizar npm:
            3.2.2.1 desde terminal 
            ```bash
            npm install -g npm@latest
            ```
            (eso instalará la ultima versión de npm y dará acceso a la ultimas versiones de todos los paquetes que necesitamos)
        3.2.3 eliminar cache de npm porque pueden haber paquetes almacenados en la cache y estos paquetes pueden ser utilizados en vez de los más recientes:
            3.2.3.1 desde la terminal
            ```bash
            npm cache clean --force
        3.2.4 otra cosa que hay que hacer para evitar fallos es desactivar las auditorias de los paquetes
            3.2.4.1 desde la terminal

            ```bash
            npm set audit false
            ```
            3.2.4.1 en caso de ya tener instalado angular hay que desinstalarlo antes de iniciar un nuevo proyecto.esto se hace para evitar conflictos, además se va a hacer para la version más vieja y la más nueva


            ```bash
            npm uninstall -g angular-cli
            npm uninstall -g @angular/cli
            ```
            lo siguiente es eliminar la cache

            ```bash
            npm cache clean --force
            ```

        3.2.5 instalar angular/cli
            ```bash
            npm install -g @angular/cli@lastest
            npm install -g @angular/cli //Angular recomienda esta línea (la anterior no funciono)
            ```

        3.3 crear un proyecto de angular

        ```bash
        ng new mi-app
        //! pregunta si es que quiero configurar el routing
        //! a lo que hay que responder que no porque podría causar errores

        //! luego pregunta por estilos CSS y en este caso no tengo ni la más minima idea pero se puede dejar CSS puro
        ```

        3.4 aun después de crear el proyecto angular, ocurrieron errores en la instalación. De momento solo hice un npm install para descargar dependencias faltantes, asimismo, también ejecute `npm cache clean --force`.

4. Apuntes primeros pasos en Angular.
    4.1 ejecutar
        ```bash
        ng serve -o
        ```
    4.2 dentro de src existe index.html y este es el archivo que representa la pagina web, en <body> se encuentra la etiqueta <app-root>
        esa etiqueta corresponde al componente principal de la app. en otras palabras si se comenta este único componente  <!--<app-root></app-root>--> no se visualizara nada
    4.3 los componentes se almacenan dentro de app `y al menos necesitan un archivo .ts`, por ejemplo **app.component.js**
    4.4 siempre que se crea un componente es necesario importar en el un decorador: 
        ```bash
        import { component } form '@angular/core';
        // component es un decorador que ayuda a definir ciertas propiedades de un componente, como por ejemplo el selector
        // el **selector** es el nombre que tendrá el componente en el archivo html, por ejemplo app-root, entonces en el archivo index.html se 
        // se usa el **selector** app-root en formato de etiqueta (<app-root>)
        // el **selector** es obligatorio, por lo que no se puede dejar vacío
        // otra propiedad es **templateUrl**, que indica el archivo que tendrá el contenido del componente, en otras palabras, cada vez que se llame a <app-root> 
        // a su vez se llamara al archivo app.component.html indicado en **templateUrl**
        // también esta la propiedad **styleUrl** que indica el archivo css del componente.
        // el valor de la propiedad **styleUrl** se escribe entre [] porque es un arreglo de archivos.
        @component({
            selector: 'app-root',
            templateUrl: './app.component.html',
            styleUrls: ['./app.component.css']
        })
        
        // la propiedad templateUrl no es necesaria ya que se puede escribir todo el código en le archivo app.component.ts
        // para lo anterior es necesario crear la propiedad **template** en vez de **templateUrl**
        // el valor de la propiedad **template** seria el código html del componente y se escribe como una cadena de texto (plantilla literal)
        // pasa la misma historia con css

        ```
    4.5 el archivo .component.spec.ts es para probar el componente.
    4.5 el archivo .module.ts es como una caja de herramientas ... dentro de ese archivo o módulo se van definiendo todas las herramientas o partes del componente
        4.5.1 componente standalone, a partir de angular 9.0 se crea un componente standalone
            ```bash
            @component({
                standalone: true,
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.css']
            })
            ```
            esta clase de componente no necesita del archivo .module.ts ya que los standalone se renderizan ocupando una lógica diferente a los componentes normales.

    5. También mencionar que la carpeta src está el archivo **favicon.ico** que es el icono de la aplicación y eventualmente la carpeta environments donde se pueden encontrar los archivos de configuración para desarrollo y producción (enviroment.ts y environment.prod.ts). `Al parecer esto solo aplica por defecto hasta angular 14`. A partir de **Angular 15** es necesario crear la carpeta y los archivos manuamente si es que se desea configurar el **enviroment** para almacenar credenciales.

    
        
