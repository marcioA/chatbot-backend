import express from 'express';
import { getChatGptResponse } from './chatconnect.js';

const routes = express.Router();

routes.all('*', function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    next();
});

routes.post('/response-bot', async (req, res) => {
    const { userText } = req.body;
    const responseBot = await getChatGptResponse(userText);

    return res.status(200).json({ "message": responseBot });
})


export default routes;