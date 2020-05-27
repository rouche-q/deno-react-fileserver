export default async (ctx: any) => {
    let query = ctx.request.url.searchParams.get("path")
    const decoder = new TextDecoder("utf-8");
    const data = await Deno.readFile(Deno.cwd() + query);
    ctx.response.body = decoder.decode(data)
}