-- AlterTable
ALTER TABLE `payment_requests` MODIFY `title` VARCHAR(191) NULL,
    MODIFY `amount` DECIMAL(18, 2) NULL,
    MODIFY `currency` ENUM('VND', 'USD') NOT NULL DEFAULT 'VND',
    MODIFY `paymentContent` TEXT NULL,
    MODIFY `bankName` VARCHAR(191) NULL,
    MODIFY `bankAccount` VARCHAR(191) NULL,
    MODIFY `recipientName` VARCHAR(191) NULL,
    MODIFY `dueDate` DATETIME(3) NULL;
