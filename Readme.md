Memoring
=========

Create .env file and copy `.env.template` and paste in `.env` file, and write yours values.

```
npm install
npm run dev
```

## Scripts

| script |  description  |
|--------|---------------|
| `test`   | run test |
| `test:watch`   | run test watch |
| `dev`   | run app |
| `lint`  | linter |
| `build`  | build |

## Structure

```
|- __test__/
|  |- integrations/
|  |- units/
|- src/
|  |- commands/
|  |- config/
|  |- models/
|  |- routers/
|  |- utils/
|  |- app.ts
|  |- index.ts
```

## Crear comandos

Crea el `command name` en `config/commands`
```ts
export const MY_COMMAND = 'my_command'
```
En el directorio `./commands` puedes crear acciones por cada comando. Nombre el archivo con el mismo nombre.
En el `index.ts` importa tu archivo y asigna en la condición.

```ts
switch (command) {
    //...
    case MY_COMMAND: // imported config/commands.ts
        my_command(message, args) // imported ./my_command.ts
        break
}
```

`message` es un propiedad proveída por Discord Client.
`args` son los valores recividos. Tener en cuenta que ahí no se obtiene el `prefix` ni el `command name`.

## Rutas

Puedes crear una nueva ruta desde el directorio `routers`. Al crear un nuevo archivo asignar como sufijo `route`.

Desde el `index.ts` importa tu route y asignale una ruta.
```ts
routers.use('/my_route', my_route) // imported my_route.route.ts
```

## Modelos

Desde el directorio `models` crea tus modelos para la db. Se recomienda usar interface.

```ts
import { Schema, model, Document } from 'mongoose'

const myModelShema = new Schema({
    name: String
    age: Number
})

export default model<MyModel>('my_model', myModelShema) // name in snake case

interface MyModel extends Document {
    name: string
    age: number
}
```

## APIS

```
GET /
GET /api/members
```

## Commands
```
!send --> Retorna el mismo mensaje que escribiste
!add --> Agrega un nuevo miembro
```

## Sources

* [discord.js](https://discord.js.org/#/docs/main/stable/examples/embed)
* [Mongoose v5.12.0: Queries](https://mongoosejs.com/docs/queries.html)
