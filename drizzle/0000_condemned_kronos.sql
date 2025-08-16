CREATE TABLE "guestbook_messages" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"message" text NOT NULL,
	"author" varchar(255) NOT NULL,
	"author_email" varchar(255),
	"author_image" varchar(500),
	"provider" varchar(50),
	"created_at" timestamp DEFAULT now() NOT NULL,
	"updated_at" timestamp DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE "users" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"email" varchar(255) NOT NULL,
	"name" varchar(255) NOT NULL,
	"image" varchar(500),
	"provider" varchar(50) NOT NULL,
	"provider_id" varchar(255),
	"created_at" timestamp DEFAULT now() NOT NULL,
	"updated_at" timestamp DEFAULT now() NOT NULL,
	CONSTRAINT "users_email_unique" UNIQUE("email")
);
--> statement-breakpoint
CREATE INDEX "guestbook_author_idx" ON "guestbook_messages" USING btree ("author");--> statement-breakpoint
CREATE INDEX "guestbook_created_at_idx" ON "guestbook_messages" USING btree ("created_at");--> statement-breakpoint
CREATE INDEX "guestbook_provider_idx" ON "guestbook_messages" USING btree ("provider");--> statement-breakpoint
CREATE INDEX "users_email_idx" ON "users" USING btree ("email");--> statement-breakpoint
CREATE INDEX "users_provider_idx" ON "users" USING btree ("provider");--> statement-breakpoint
CREATE INDEX "users_provider_id_idx" ON "users" USING btree ("provider_id");