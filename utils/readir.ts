export default async (dir : string, hide?: boolean) => {   
        let files = []
        for await (let dirEntry of Deno.readDir(dir)) {
            files.push(dirEntry)
        }
        if (hide)
            return files.filter((item) => item.name.slice(0, 1) != ".")
        return files
}
