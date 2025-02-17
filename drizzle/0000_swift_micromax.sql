CREATE TABLE `products` (
	`id` int AUTO_INCREMENT NOT NULL,
	`name` varchar(256),
	CONSTRAINT `products_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
CREATE TABLE `users` (
	`id` int AUTO_INCREMENT NOT NULL,
	`first_name` varchar(256),
	`last_name` varchar(256),
	`email` varchar(256) NOT NULL,
	CONSTRAINT `users_id` PRIMARY KEY(`id`)
);
