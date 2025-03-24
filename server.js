const http = require('http');

let users = [
    {
        id: 1,
        name: 'peter'
    },
    {
        id: 2,
        name: 'lily'
    },
    {
        id: 3,
        name: 'sam'
    },
]

const server = http.createServer((req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    if(req.url === '/api/users'){
        res.end(JSON.stringify(users));
    }
})

server.listen(3000, () => {
    console.log('3000 port listening.....');
})