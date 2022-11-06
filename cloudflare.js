var url2
var src_default = {
  async fetch(request, env, ctx) {
    console.log(request,url2,'search:',url2.search)
    let url='https://data.cdc.gov/resource/muzy-jte6.json?$limit=2'
    url2=new URL(request.url)
    
    let res = await (await fetch(url)).json()
    return new Response(JSON.stringify(res),{
      headers: {
        //'content-type': 'text/html;charset=UTF-8',
        'Access-Control-Allow-Origin': '*'
      },
  });
  }
};
export {
  src_default as default
};
