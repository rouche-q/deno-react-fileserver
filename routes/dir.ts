import readDir from "../utils/readir.ts"
import dirPage from "../pages/dirPage.tsx"

export default async (ctx: any) => {
    let path = ctx.request.url.pathname
    console.log("path", path)
    let files = await readDir(Deno.args[0] + path)
    ctx.response.body = dirPage(files, path)
}