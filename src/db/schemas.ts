import { pgTable, text, timestamp, uuid, varchar, index } from 'drizzle-orm/pg-core';

// Guestbook messages table
export const guestbookMessages = pgTable(
    'guestbook_messages',
    {
        id: uuid('id').primaryKey().defaultRandom(),
        message: text('message').notNull(),
        author: varchar('author', { length: 255 }).notNull(),
        authorEmail: varchar('author_email', { length: 255 }),
        authorImage: varchar('author_image', { length: 500 }),
        provider: varchar('provider', { length: 50 }), // 'google' or 'github'
        createdAt: timestamp('created_at').defaultNow().notNull(),
        updatedAt: timestamp('updated_at').defaultNow().notNull(),
    },
    (table) => ({
        guestbookAuthorIdx: index('guestbook_author_idx').on(table.author),
        guestbookCreatedAtIdx: index('guestbook_created_at_idx').on(table.createdAt),
        guestbookProviderIdx: index('guestbook_provider_idx').on(table.provider),
    })
);

// Users table for storing additional user information
export const users = pgTable(
    'users',
    {
        id: uuid('id').primaryKey().defaultRandom(),
        email: varchar('email', { length: 255 }).notNull().unique(),
        name: varchar('name', { length: 255 }).notNull(),
        image: varchar('image', { length: 500 }),
        provider: varchar('provider', { length: 50 }).notNull(), // 'google' or 'github'
        providerId: varchar('provider_id', { length: 255 }), // ID from the provider
        createdAt: timestamp('created_at').defaultNow().notNull(),
        updatedAt: timestamp('updated_at').defaultNow().notNull(),
    },
    (table) => ({
        usersEmailIdx: index('users_email_idx').on(table.email),
        usersProviderIdx: index('users_provider_idx').on(table.provider),
        usersProviderIdIdx: index('users_provider_id_idx').on(table.providerId),
    })
);

// Types for TypeScript
export type GuestbookMessage = typeof guestbookMessages.$inferSelect;
export type NewGuestbookMessage = typeof guestbookMessages.$inferInsert;
export type User = typeof users.$inferSelect;
export type NewUser = typeof users.$inferInsert;
