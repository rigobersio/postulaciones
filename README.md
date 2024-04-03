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

    5. También mencionar que la carpeta src está el archivo **favicon.ico** que es el icono de la aplicación y eventualmente la carpeta environments donde se pueden encontrar los archivos de configuración para desarrollo y producción (enviroment.ts y environment.prod.ts). `Al parecer esto solo aplica por defecto hasta angular 14`. A partir de **Angular 15** es necesario crear la carpeta y los archivos manualmente si es que se desea configurar el **enviroment** para almacenar credenciales.


# Nuevo componente

1. cuando se trabaja con un nuevo componente lo normal es tenerlo separado en archivos .ts, .html y .css.

2. creación manual del componente contador
    2.1 dentro de la carpeta src/app se crea la carpeta **contador**.
    2.2 en esta carpeta se crea un archivo **contador.component.ts**
        2.2.1 en este archivo es necesario importar el decorador @component

        ```bash
        import { component } from '@angular/core';

        @component({
            selector: 'app-contador',
            templateUrl: './contador.component.html',
            styleUrls: ['./contador.component.css']
            
            // siempre que se crea un componente es necesario importar en el un decorador
            // el decorador es un objeto que define propiedades de un componente
            
            /* siempre que se define un componente es necesario el archivo .ts tiene que llevar una clase que sea el nombre del componente. Dentro de esta clase se define toda la lógica del componente 
            */
        })
        
        class ContadorComponent {
                
            }
        ```
        Lo anterior ha definido un componente y su lógica se gestiona con la clase ContadorComponent, no obstante es necesario que está se exporte y luego sea importada.

    2.3 `Exportar e importar el componente`

    ```bash
        import { component } from '@angular/core';

        @component({
            selector: 'app-contador',
            templateUrl: './contador.component.html',
            styleUrls: ['./contador.component.css']
            
        })

        export class ContadorComponent {
                
            }
        ```
    ahora la clase se exporta para que pueda ser importada.

    2.4 ¿cómo se importar el componente?
        Hay 2 formas generales de hacer eso. Por ejemplo si se quiere importar **contador** en el componente AppComponent, es necesario hacer ajustes en el archivo app.module.ts

        ```bash
        import { NgModule } from '@angular/core';
        import { BrowserModule } from '@angular/platform-browser';

        import { AppComponent } from './app.component';
        import { ContadorComponent } from './app/contador/contador.component';


        @NgModule({
            declarations: [
                AppComponent,
                ContadorComponent //!ojo acá, eso ya permitiría ocupar contador en el AppComponent
            ],
            imports: [
                BrowserModule
            ],
            providers: [],
            bootstrap: [AppComponent]
        })
        export class AppModule { }
        ```
        Por otra parte en versiones superiores como **angular 17** no es necesario hacer esto ya los módulos han sido reemplazados por una nueva característica llamada `componentes autónomos` (standalone components). Esto significa que cada componente es ahora su propio módulo y puede importar y exportar funcionalidades directamente.

        ```bash
        import { Component } from '@angular/core';
        import { RouterOutlet } from '@angular/router';

        @Component({
        selector: 'app-root',
        standalone: true, //!ojo acá
        imports: [RouterOutlet],
        templateUrl: './app.component.html',
        styleUrl: './app.component.css'
        })
        export class AppComponent {
        title = 'postulaciones-angular-mongo';
        }
        ```

        como en este caso appComponent es un `componentes autónomos`, el componente **contador** y para importarlo se tendría que agregar en el array de imports de decorador. Además de lo anterior es necesario transformar al componente **contador** en un `componente autónomo` ocupando `standalone: true` en el decorador. Con el cambio anterior se podría agregar **contador** directamente en app.component.html ocupando el selector `app-contador` como una etiqueta.

        ```bash
        import { Component } from "@angular/core";

        @Component({
            selector: 'app-contador',
            standalone: true,
            templateUrl: './contador.component.html',
            styleUrls: ['./contador.component.css']
        })

        export class ContadorComponent {

            public contador: number = 0;
        ```

        ```bash
        import { Component } from '@angular/core';
        import { RouterOutlet } from '@angular/router';
        import { ContadorComponent } from './contador/contador.component';

        @Component({
        selector: 'app-root',
        standalone: true,
        imports: [RouterOutlet, ContadorComponent],
        templateUrl: './app.component.html',
        styleUrl: './app.component.css'
        })
        export class AppComponent {
        title = 'postulaciones-angular-mongo';
        }

        ```

        ```bash
        <main>
        <h1>Hola y bienvenido a la app de postulaciones</h1>
        <p>yo pertenezco a app.component</p>
        <br/>
        <div>
            <h2>yo soy un contenedor de contador</h2>
            <app-contador></app-contador>
        </div>

        </main>
        ```

    2.5 lo lógico es que también se cree un componente .component.css y .component.html, para descomponer el código del componente

3. también se puede crear un nuevo componente utilizando el comando ng generate component
    ```bash
    ng generate component nombre_del_componente
    ```
    3.1 como ejemplo se creará un LoginComponent
    ```bash
    ng generate component login
    ```
# Tipado en TS
1. Para especificar el tipado de una variable, por ejemplo en una clase se puede hacer ocupando ":" luego de nombre de la variable he indicando el tipo de dato que tendrá. Por ejemplo:
    ```typescript
    export class ContadorComponent {
        let contador: number = 0;
    }
    ```      
    Asimismo para especificar el tipado de estructuras más complejas como un objeto se puede crear un nuevo archivo donde se indiquen los tipos de dato de cada propiedad y luego importar ese archivo en el componente. Esto se hace mediante lo que se conoce como interfaces. Por ejemplo, para un objeto que almacenará información sobre una persona, se puede crear un archivo **persona.ts** y dentro de este archivo se definen los tipos de datos de cada propiedad ocupando una interface. ejemplo:
    ```typescript
    export interface Persona {
        nombre: string;
        edad: number;
    }
    ```
    luego esto se puede importar en el componente:
    ```typescript
    import { Persona } from './persona';
    export class ContadorComponent {
        public persona: Persona = {
            nombre: 'Juan',
            edad: 25
        }
    }
    ```
    el tipo de dato también se puede asignar directamente en el propiedad, por ejemplo:
    ```typescipt
    export class PersonaComponent {
        nombre: string = 'Juan';
        edad: number = 25;
    }
    ```	

# Lógica para el botón
    Pasos para crear un botón en ContadorComponent:
    ```typescript
    export class ContadorComponent {
        title: string;
        numero: number;

        constructor() {
            this.title = 'Botón para contar todos los clicles que realice el usuario'; 
            this.numero = 0;
        }

        incrementar() {
            this.numero++;
        }

        decrementar() {
            this.numero--;
        }
    }
    ```
    mientras que en el contador.component.html:
    ```html
    <h1>{{ title }}</h1>
    <br/>
    <button (click)="incrementar()">+</button>
    <span>{{ numero }}</span>
    <button (click)="decrementar()">-</button>
    ``` 