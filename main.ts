import { serve } from "https://deno.land/std@0.202.0/http/server.ts";

// Serve the main page (index.html) without applying style.css
async function mainHandler() {
  const html = await Deno.readTextFile("./index.html"); // Read index.html
  return new Response(html, {
    headers: { "content-type": "text/html" },
  });
}

// Serve the validation page (validation.html) with style.css
async function validationHandler() {
  const html = await Deno.readTextFile("./validation.html"); // Read validation.html
  const css = await Deno.readTextFile("./style.css"); // Read style.css
  
  // Add the CSS to the validation page HTML
  const updatedHtml = html.replace("</head>", `<style>${css}</style></head>`);
  
  return new Response(updatedHtml, {
    headers: { "content-type": "text/html" },
  });
}

const handler = (req: Request) => {
  const url = new URL(req.url);
  if (url.pathname === "/validation.html") {
    return validationHandler(); // Serve validation page with styles
  }
  // Default to mainHandler (index.html)
  return mainHandler();
};

console.log("Server is running on http://localhost:8000");
serve(handler);
