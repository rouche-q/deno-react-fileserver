// @deno-types="https://deno.land/x/types/react/v16.13.1/react.d.ts"
import React from "https://dev.jspm.io/react"
// @deno-types="https://deno.land/x/types/react-dom/v16.13.1/server.d.ts"
import ReactDOMServer from "https://dev.jspm.io/react-dom/server"
import pageGenerator from "../utils/pagesGenerator.tsx"

export default (files: any, path: string) => {
    let fileLinks = files.map((file: Deno.DirEntry, key: number) => {
        if (file.isFile)
            return (
                <div key={key}>
                    <a href={"/file/" + file.name} download>{file.name}</a>
                    <br />
                </div>
            )
        else if (file.isDirectory)
            return (
                <div key={key}>
                    <a href={path === "/" ? path + file.name : path + "/" + file.name}>{file.name}</a>
                    <br />
                </div>
            )
    })
    return pageGenerator(fileLinks)
}