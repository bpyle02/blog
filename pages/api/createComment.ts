import { client } from '../../lib/sanity.client';

export default async function createComment(req, res) {

    const {name, text, _id } = JSON.parse(req.body);
    
    await client.config({
        token: process.env.SANITY_API_TOKEN
    }).create({
        _type: 'comment',
        name,
        text,
        post: {
            _type: 'reference',
            _ref: _id
        }
    })

    return res.status(200);

}