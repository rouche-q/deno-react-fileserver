import { Application } from 'https://deno.land/x/oak/mod.ts'
import router from "./router.ts"

const app = new Application()
app.use(router.routes())
app.use(router.allowedMethods())

console.log("Starting deno-react-fileserver ...")
console.log("Go to http://localhost:8080")

await app.listen("127.0.0.1:8080")

