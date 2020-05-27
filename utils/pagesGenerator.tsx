// @deno-types="https://deno.land/x/types/react/v16.13.1/react.d.ts"
import React from "https://dev.jspm.io/react@16.13.1";
// @deno-types="https://deno.land/x/types/react-dom/v16.13.1/server.d.ts"
import ReactDOMServer from "https://dev.jspm.io/react-dom/server"

export default (elements: any) => {
    let page = ReactDOMServer.renderToStaticMarkup(
        <html>
            <body>
                {elements}
            </body>
        </html>
    )
    return page
}