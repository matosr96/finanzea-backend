# Finanzea Backend

## Descripción
Este es el backend de la aplicación Finanzea. Proporciona una API para administrar y gestionar las finanzas de los usuarios.

## Instalación
1. Clona este repositorio: `git clone <URL_DEL_REPOSITORIO>`
2. Navega hasta el directorio del proyecto: `cd finanzea-backend`
3. Instala las dependencias: `npm install`

## Configuración
1. Crea un archivo `.env` en la raíz del proyecto basándote en el archivo `.env.example`.
2. Actualiza las variables de entorno en el archivo `.env` según tu configuración.

## Uso
1. Inicia el servidor en modo de desarrollo: `npm run dev`
2. El servidor estará disponible en `http://localhost:3000`.

## Scripts
- `npm test`: Ejecuta los casos de prueba.
- `npm run dev`: Inicia el servidor en modo de desarrollo utilizando `ts-node-dev`.
- `npm run build`: Compila el código TypeScript a JavaScript en la carpeta `dist`.
- `npm start`: Inicia el servidor en producción utilizando los archivos compilados en `dist`.

## Dependencias principales
- [fastify](https://www.fastify.io/): Framework web rápido y minimalista para Node.js.
- [mongoose](https://mongoosejs.com/): Herramienta de modelado de objetos MongoDB para Node.js.
- [bcrypt](https://www.npmjs.com/package/bcrypt): Biblioteca para el hashing de contraseñas.
- [jsonwebtoken](https://www.npmjs.com/package/jsonwebtoken): Implementación de JSON Web Tokens (JWT).
- [dotenv](https://www.npmjs.com/package/dotenv): Módulo para cargar variables de entorno desde un archivo `.env`.

## Contribución
Si deseas contribuir a este proyecto, por favor sigue los siguientes pasos:
1. Crea un fork del repositorio.
2. Crea una rama para tu función o corrección de bug: `git checkout -b nombre-de-la-rama`.
3. Realiza los cambios necesarios y realiza commits: `git commit -m "Descripción de los cambios"`.
4. Envía tus cambios al repositorio remoto: `git push origin nombre-de-la-rama`.
5. Abre un Pull Request en GitHub y describe los cambios realizados.

## Autor
- Edgar Matos

## Licencia
Este proyecto está licenciado bajo la Licencia ISC. Consulta el archivo [LICENSE](LICENSE) para más detalles.
