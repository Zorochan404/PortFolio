import { GuestbookMessage, NewGuestbookMessage } from '@/db/schemas';

class GuestbookService {
    private baseUrl = '/api/guestbook';

    async getMessages(): Promise<GuestbookMessage[]> {
        try {
            const response = await fetch(this.baseUrl);
            if (!response.ok) {
                throw new Error('Failed to fetch messages');
            }
            return await response.json();
        } catch (error) {
            console.error('Error fetching messages:', error);
            return [];
        }
    }

    async addMessage(message: string, author: string, authorImage?: string, provider?: string): Promise<GuestbookMessage> {
        try {
            const newMessage: Partial<NewGuestbookMessage> = {
                message,
                author,
                authorImage,
                provider,
            };

            const response = await fetch(this.baseUrl, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(newMessage),
            });

            if (!response.ok) {
                throw new Error('Failed to create message');
            }

            return await response.json();
        } catch (error) {
            console.error('Error creating message:', error);
            throw error;
        }
    }

    async updateMessage(id: string, message: string, author: string): Promise<GuestbookMessage> {
        try {
            const response = await fetch(`${this.baseUrl}/${id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ message, author }),
            });

            if (!response.ok) {
                throw new Error('Failed to update message');
            }

            return await response.json();
        } catch (error) {
            console.error('Error updating message:', error);
            throw error;
        }
    }

    async deleteMessage(id: string): Promise<void> {
        try {
            const response = await fetch(`${this.baseUrl}/${id}`, {
                method: 'DELETE',
            });

            if (!response.ok) {
                throw new Error('Failed to delete message');
            }
        } catch (error) {
            console.error('Error deleting message:', error);
            throw error;
        }
    }
}


export const guestbookService = new GuestbookService();
