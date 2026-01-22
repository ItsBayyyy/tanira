-- AlterTable
ALTER TABLE `harvestlisting` ADD COLUMN `lastLogDate` DATETIME(3) NULL,
    ADD COLUMN `lastLogMessage` TEXT NULL,
    ADD COLUMN `progressStage` INTEGER NOT NULL DEFAULT 0;
