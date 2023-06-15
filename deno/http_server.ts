import { serve } from "https://deno.land/std@0.157.0/http/server.ts";

if (import.meta.main) {
  const port = 8080;

  const handler = async (_request: Request): Promise<Response> => {
    const resp = await fetch("https://api.github.com/users/denoland", {
      headers: {
        accept: "application/json",
      },
    });
    return new Response(resp.body, {
      status: resp.status,
      headers: {
        "content-type": "application/json",
      },
    });
  };

  // console.log("Listening on http://localhost:8000");
  serve(handler, { port });
}
