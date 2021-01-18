function hex2a(hex) {
    var str = '';
    for (var i = 0; (i < hex.length && hex.substr(i, 2) !== '00'); i += 2)
        str += String.fromCharCode(parseInt(hex.substr(i, 2), 16));
    return str;
}

addEventListener('fetch', event => {
  event.respondWith(handleRequest(event.request))
})
/**
 * Respond with hello worker text
 * @param {Request} request
 */

const htmlHead = `<!DOCTYPE html><html><head><title>Quick Hex to Text</title></head>`
const init = {
  headers: {      
    "content-type": "text/html;charset=UTF-8"
  }
}

async function handleRequest(request) {
  const { searchParams } = new URL(request.url)
  const hexString = searchParams.get('h')
  if (hexString != null) {
    const output = hex2a(hexString)
    return new Response(`${htmlHead}<body><p><a href="${output}">Go ${output}</a><br>To copy:<br>${output}</p></body>`, init)
  }
  return new Response(`${htmlHead}<body><p>h2t.vnbc.workers.dev?h=<i><b>hex here</b></i></p></body>`, init)
}
