-- AlterTable
ALTER TABLE `toollisting` ADD COLUMN `category` VARCHAR(191) NOT NULL DEFAULT 'Alat Berat',
    ADD COLUMN `description` TEXT NULL,
    ADD COLUMN `imageUrl` VARCHAR(191) NULL;
