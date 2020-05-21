import { Router } from 'https://deno.land/x/oak/mod.ts'
import welcome from "./routes/welcome.ts"
import root from "./routes/root.ts"
import file from "./routes/file.ts"
import dir from "./routes/dir.ts"

const router = new Router()

let dynamicPath: string[] = []

for (let i = 0; i < 20; i++) {
    if (i == 0)
        dynamicPath.push("/:path")
    else
        dynamicPath.push(dynamicPath[i - 1] + "/:path")
}

router.get("/", root)
    .get("/file/:path", file)
    .get(dynamicPath, dir)

export default router