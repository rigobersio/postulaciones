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

        3.4 aun después de crear el proyecto angular, ocurrieron errores en la instalación. De momento solo hice un npm install para descargar dependencias faltantes, asimismo, también ejecute `npm cache clean --force`.
        
