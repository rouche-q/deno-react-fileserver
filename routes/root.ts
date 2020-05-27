import readDir from "../utils/readir.ts"
import dirPage from "../pages/dirPage.tsx"

export default async (ctx: any) => {
    Deno.chdir(Deno.args[0])
    let files = await readDir(Deno.args[0], true)
    ctx.response.body = dirPage(files, "/")
}