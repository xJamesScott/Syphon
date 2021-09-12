import router, { useRouter } from 'next/router';

export default (req, res) => {
    const { body: redirect } = req
    res.status(200);
    res.send({
        handler: { redirect: redirect },
        data: { name: 'John Doe' }
    })
    return
}
