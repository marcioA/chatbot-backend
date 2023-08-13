import { Configuration, OpenAIApi } from "openai"
import * as dotenv from 'dotenv'

dotenv.config();

const openAiKey = process.env.OPENAI_KEY;

const configuration = new Configuration({
    organization: "org-WorfcDonsEh5zgNYyKIR4GdC",
    apiKey: "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",
});

const openai = new OpenAIApi(configuration);

export const getChatGptResponse = async (clientText) => {
    const options = {
        model: "gpt-3.5-turbo", // Modelo GPT a ser usado
        messages: [{ "role": "user", "content": clientText }], // Texto enviado pelo usuário
    }

    try {
        const response = await openai.createChatCompletion(options)

        return response.data.choices[0].message.content;
    } catch (e) {
        return `❌ OpenAI Response Error: ${e}`;
    }
}