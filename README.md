# Hex to Text worker

A simple service that helps you to quickly convert hex to text.

This project is dedicated to create referenced link to another web page. Please feel free to change!

# Deploy to Cloudflare Workers

1. Install Cloudflare `wrangler` CLI tool from [here](https://github.com/cloudflare/wrangler)

2. Copy `wrangler.toml.example` to `wrangler.toml` and modify it

3. Dev using `wrangler dev` and publish using `wrangler pulish`

Check [Cloudflare Workers docs](https://developers.cloudflare.com/workers/learning/getting-started) for more information

# How to use it

Simply add the hex to the url:

https://h2t.example.workers.dev?h=`some long hex`