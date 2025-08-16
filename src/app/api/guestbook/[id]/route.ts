import { NextRequest, NextResponse } from 'next/server';
import { db } from '@/db';
import { guestbookMessages } from '@/db/schemas';
import { eq } from 'drizzle-orm';

// GET /api/guestbook/[id] - Get specific message
export async function GET(
    request: NextRequest,
    { params }: { params: Promise<{ id: string }> }
) {
    try {
        const { id } = await params;
        const message = await db
            .select()
            .from(guestbookMessages)
            .where(eq(guestbookMessages.id, id))
            .limit(1);

        if (message.length === 0) {
            return NextResponse.json(
                { error: 'Message not found' },
                { status: 404 }
            );
        }

        return NextResponse.json(message[0]);
    } catch (error) {
        console.error('Error fetching message:', error);
        return NextResponse.json(
            { error: 'Failed to fetch message' },
            { status: 500 }
        );
    }
}

// PUT /api/guestbook/[id] - Update message
export async function PUT(
    request: NextRequest,
    { params }: { params: Promise<{ id: string }> }
) {
    try {
        const { id } = await params;
        const body = await request.json();
        const { message, author } = body;

        if (!message || !author) {
            return NextResponse.json(
                { error: 'Message and author are required' },
                { status: 400 }
            );
        }

        const updatedMessage = await db
            .update(guestbookMessages)
            .set({
                message,
                author,
                updatedAt: new Date(),
            })
            .where(eq(guestbookMessages.id, id))
            .returning();

        if (updatedMessage.length === 0) {
            return NextResponse.json(
                { error: 'Message not found' },
                { status: 404 }
            );
        }

        return NextResponse.json(updatedMessage[0]);
    } catch (error) {
        console.error('Error updating message:', error);
        return NextResponse.json(
            { error: 'Failed to update message' },
            { status: 500 }
        );
    }
}

// DELETE /api/guestbook/[id] - Delete message
export async function DELETE(
    request: NextRequest,
    { params }: { params: Promise<{ id: string }> }
) {
    try {
        const { id } = await params;
        const deletedMessage = await db
            .delete(guestbookMessages)
            .where(eq(guestbookMessages.id, id))
            .returning();

        if (deletedMessage.length === 0) {
            return NextResponse.json(
                { error: 'Message not found' },
                { status: 404 }
            );
        }

        return NextResponse.json({ message: 'Message deleted successfully' });
    } catch (error) {
        console.error('Error deleting message:', error);
        return NextResponse.json(
            { error: 'Failed to delete message' },
            { status: 500 }
        );
    }
}
