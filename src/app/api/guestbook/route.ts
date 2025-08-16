import { NextRequest, NextResponse } from 'next/server';
import { db } from '@/db';
import { guestbookMessages } from '@/db/schemas';
import { eq, desc } from 'drizzle-orm';

// GET /api/guestbook - Get all messages
export async function GET() {
    try {
        const messages = await db
            .select()
            .from(guestbookMessages)
            .orderBy(desc(guestbookMessages.createdAt));

        return NextResponse.json(messages);
    } catch (error) {
        console.error('Error fetching messages:', error);
        return NextResponse.json(
            { error: 'Failed to fetch messages' },
            { status: 500 }
        );
    }
}

// POST /api/guestbook - Create new message
export async function POST(request: NextRequest) {
    try {
        const body = await request.json();
        const { message, author, authorEmail, authorImage, provider } = body;

        if (!message || !author) {
            return NextResponse.json(
                { error: 'Message and author are required' },
                { status: 400 }
            );
        }

        const newMessage = await db
            .insert(guestbookMessages)
            .values({
                message,
                author,
                authorEmail,
                authorImage,
                provider,
            })
            .returning();

        return NextResponse.json(newMessage[0], { status: 201 });
    } catch (error) {
        console.error('Error creating message:', error);
        return NextResponse.json(
            { error: 'Failed to create message' },
            { status: 500 }
        );
    }
}
