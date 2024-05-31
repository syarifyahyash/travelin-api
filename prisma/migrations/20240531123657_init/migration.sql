-- CreateTable
CREATE TABLE `Culture` (
    `id` VARCHAR(191) NOT NULL,
    `name` VARCHAR(100) NOT NULL,
    `description` TEXT NOT NULL,
    `province` VARCHAR(50) NOT NULL,
    `address` VARCHAR(50) NOT NULL,
    `image` TEXT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
