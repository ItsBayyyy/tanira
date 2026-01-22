-- AlterTable
ALTER TABLE `harvestlisting` ADD COLUMN `description` TEXT NULL,
    ADD COLUMN `minOrder` DOUBLE NOT NULL DEFAULT 1;
