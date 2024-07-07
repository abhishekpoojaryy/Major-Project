import { auth } from "@clerk/nextjs";
import { NextResponse } from "next/server";
import { Configuration,OpenAIApi } from "openai";

const configuration=new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
});

const openai=new OpenAIApi(configuration);

export async function POST(
    req: Request
) {
    try {
     const{ userId }=auth();
     const body=await req.json();
     const { prompt,amount=1,resolution="512x512" }=body;
    //  const { prompt1, prompt2, amount = 1, resolution = "512x512" } = body;
    if(!userId) {
        return new NextResponse("Unauthorized", { status:401});
    }

    if(!configuration.apiKey){
        return new NextResponse("OpenAI API Key not configured", {status:500});
    }

    if(!prompt){
        return new NextResponse("Prompt is required",{status:400});
    }
    // if (!prompt1 || !prompt2) {
    //     return new NextResponse("Both prompts are required", { status: 400 });
    // }
    if(!amount){
        return new NextResponse("Amount is required",{status:400});
    }

    if(!resolution){
        return new NextResponse("Resolution is required",{status:400});
    }

     const response=await openai.createImage({
        prompt,
        n:parseInt(amount,10),
        size:resolution,
     });
    // const Prompt = `${prompt1}\n${prompt2}`;
    // const response = await openai.createImage({
    //     prompt: Prompt,
    //     n: parseInt(amount, 10),
    //     size: resolution,
    // });

     return NextResponse.json(response.data.data);

    }catch(error){
        console.log("[IMAGE_ERROR]",error);
        return new NextResponse("Internal error",{status:500});
    }
};


// export async function POST(req: Request) {
//     try {
//         const { userId } = auth();
//         const body = await req.json();
//         const { prompt1, prompt2, amount = "1", resolution = "512x512" } = body; // Destructure prompt1 and prompt2

//         if (!userId) {
//             return new NextResponse("Unauthorized", { status: 401 });
//         }

//         if (!configuration.apiKey) {
//             return new NextResponse("OpenAI API Key not configured", { status: 500 });
//         }

//         if (!prompt1 && !prompt2) { // Ensure at least one prompt is provided
//             return new NextResponse("At least one prompt is required", { status: 400 });
//         }

//         if (!amount) {
//             return new NextResponse("Amount is required", { status: 400 });
//         }

//         if (!resolution) {
//             return new NextResponse("Resolution is required", { status: 400 });
//         }

//         const combinedPrompt = `${prompt1}\n${prompt2}`; // Combine prompt1 and prompt2
//         const response = await openai.createImage({
//             prompt: combinedPrompt,
//             n: parseInt(amount, 10),
//             size: resolution,
//         });

//         return NextResponse.json(response.data.data);

//     } catch (error) {
//         console.log("[IMAGE_ERROR]", error);
//         return new NextResponse("Internal error", { status: 500 });
//     }
// }
