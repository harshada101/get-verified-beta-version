import { serve } from "https://deno.land/std@0.202.0/http/server.ts";

// Serve the main page (index.html)
async function mainHandler() {
  const html = await Deno.readTextFile("./index.html"); // Read index.html
  return new Response(html, {
    headers: { "content-type": "text/html" },
  });
}

// Serve the validation page (validation.html)
async function validationHandler() {
  const html = await Deno.readTextFile("./validation.html"); // Read validation.html
  return new Response(html, {
    headers: { "content-type": "text/html" },
  });
}

const handler = (req: Request) => {
  const url = new URL(req.url);
  if (url.pathname === "/validation.html") {
    return validationHandler();
  }
  // Default to mainHandler (index.html)
  return mainHandler();
};

console.log("Server is running on http://localhost:8000");
serve(handler);
