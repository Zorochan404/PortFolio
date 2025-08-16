# Database Setup Guide

This project uses **NeonDB** (PostgreSQL) with **Drizzle ORM** for the guestbook functionality.

## 🚀 Quick Setup

### 1. Environment Variables

Create a `.env.local` file in your project root with:

```env
# Database
DATABASE_URL="postgresql://username:password@hostname/database?sslmode=require"

# NextAuth
NEXTAUTH_SECRET="your-secret-key-here"
NEXTAUTH_URL="http://localhost:3000"

# OAuth Providers
GOOGLE_ID="your-google-client-id"
GOOGLE_SECRET="your-google-client-secret"
GITHUB_ID="your-github-client-id"
GITHUB_SECRET="your-github-client-secret"
```

### 2. Get NeonDB Connection String

1. Go to [neon.tech](https://neon.tech)
2. Create a new project
3. Copy the connection string from your dashboard
4. Replace `DATABASE_URL` in `.env.local`

### 3. Run Database Migrations

```bash
# Generate migration files
npm run db:generate

# Push schema to database (for development)
npm run db:push

# Or run migrations (for production)
npm run db:migrate
```

## 📊 Database Schema

### Tables

#### `guestbook_messages`
- `id` - UUID primary key
- `message` - Text content
- `author` - Author name
- `authorEmail` - Author email (optional)
- `authorImage` - Author avatar URL (optional)
- `provider` - Auth provider ('google' or 'github')
- `createdAt` - Timestamp
- `updatedAt` - Timestamp

#### `users`
- `id` - UUID primary key
- `email` - User email
- `name` - User name
- `image` - User avatar URL
- `provider` - Auth provider
- `providerId` - Provider's user ID
- `createdAt` - Timestamp
- `updatedAt` - Timestamp

## 🛠️ Available Commands

```bash
# Generate new migration
npm run db:generate

# Push schema changes to database
npm run db:push

# Run migrations
npm run db:migrate

# Open Drizzle Studio (database viewer)
npm run db:studio
```

## 🔧 Development Workflow

1. **Make schema changes** in `src/db/schemas.ts`
2. **Generate migration**: `npm run db:generate`
3. **Apply changes**: `npm run db:push` (dev) or `npm run db:migrate` (prod)
4. **Test your changes**

## 🚨 Important Notes

- **Never commit `.env.local`** to version control
- **Use `db:push` for development** (auto-syncs schema)
- **Use `db:migrate` for production** (versioned migrations)
- **Backup your data** before running migrations in production

## 🆘 Troubleshooting

### Common Issues

1. **Connection refused**: Check your `DATABASE_URL` and NeonDB status
2. **Schema mismatch**: Run `npm run db:push` to sync schema
3. **Migration errors**: Check migration files in `drizzle/` folder

### Getting Help

- [Drizzle Documentation](https://orm.drizzle.team/)
- [NeonDB Documentation](https://neon.tech/docs)
- [NextAuth Documentation](https://next-auth.js.org/)
