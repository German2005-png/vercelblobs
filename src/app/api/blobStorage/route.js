import { NextResponse } from "next/server";
import { put } from '@vercel/blob';

// export const config = {
//     api: {
//       bodyParser: false,
//     },
//   };

export async function POST(req){
    const { searchParams } = new URL(req.url);
    try {
        const filename = searchParams.get('filename');
        const blob = await put(filename, req.body, {
            access: 'public',
        });
        return NextResponse.json({message: blob});
    } catch (error) {
        return NextResponse.json({err: error});
    }
}