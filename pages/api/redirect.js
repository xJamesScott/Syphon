import router, { useRouter } from 'next/router';

// export default (req, res) => {

//     // console.log({ "query!": res.redirect('https://www.google.com') })

//     // return res.json({ data: 'yooooooo!' })
//     // return res.writeHead(303, { Location: '/' })
//     return res.redirect(200, "/signup");
//     // return res.writeHead(200, { Location: "/" })
//     // async () => { res.redirect('https://www.google.com') }
//     // res.send(req).writeHead(200, { Location: "/bro" })
//     // console.log({ "res": res })
//     // res.end()
//     // res.writeHead(200, { Location: "https://www.google.com" })
// }

export default (req, res) => {
    const { body: redirect } = req
    res.status(200);
    res.send({
        handler: { redirect: redirect },
        data: { name: 'John Doe' }
    })
    return
}
