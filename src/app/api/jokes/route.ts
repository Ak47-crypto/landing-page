import { StreamingTextResponse, GoogleGenerativeAIStream } from "ai";
import { GoogleGenerativeAI, Content } from "@google/generative-ai";
export const runtime = "edge";
export async function POST(req: Request, res: Response) {
  const reqBody = await req.json();
  console.log(reqBody)
  const ModelName: string = "gemini-pro";
  const prompt:string = reqBody.data.prompt;
  const prompt2=('answer it in short! ')+prompt
  const genAI = new GoogleGenerativeAI(process.env.GOOGLE_API_KEY!);
  const model = genAI.getGenerativeModel({
    model: ModelName,
  });
  const streamingResponse = await model.generateContentStream(prompt2);

  return new StreamingTextResponse(GoogleGenerativeAIStream(streamingResponse));
}
