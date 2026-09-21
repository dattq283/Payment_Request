-- CreateTable
CREATE TABLE `sites` (
    `id` VARCHAR(191) NOT NULL,
    `code` ENUM('HA_NOI', 'THAI_NGUYEN', 'HO_CHI_MINH') NOT NULL,
    `name` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `sites_code_key`(`code`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `users` (
    `id` VARCHAR(191) NOT NULL,
    `name` VARCHAR(191) NOT NULL,
    `email` VARCHAR(191) NOT NULL,
    `passwordHash` VARCHAR(191) NOT NULL,
    `avatarUrl` VARCHAR(191) NULL,
    `isActive` BOOLEAN NOT NULL DEFAULT true,
    `lastSiteSelected` VARCHAR(191) NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    UNIQUE INDEX `users_email_key`(`email`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `user_site_roles` (
    `id` VARCHAR(191) NOT NULL,
    `userId` VARCHAR(191) NOT NULL,
    `siteId` VARCHAR(191) NOT NULL,
    `role` ENUM('NGUOI_TAO', 'TRUONG_PHONG', 'BGD', 'KT_TONG_HOP', 'KT_TRUONG', 'KT_THANH_TOAN', 'NGUOI_XEM', 'ADMIN') NOT NULL,

    INDEX `user_site_roles_siteId_role_idx`(`siteId`, `role`),
    UNIQUE INDEX `user_site_roles_userId_siteId_role_key`(`userId`, `siteId`, `role`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `payment_requests` (
    `id` VARCHAR(191) NOT NULL,
    `code` VARCHAR(191) NULL,
    `siteId` VARCHAR(191) NOT NULL,
    `title` VARCHAR(191) NOT NULL,
    `amount` DECIMAL(18, 2) NOT NULL,
    `currency` ENUM('VND', 'USD') NOT NULL,
    `paymentContent` TEXT NOT NULL,
    `bankName` VARCHAR(191) NOT NULL,
    `bankAccount` VARCHAR(191) NOT NULL,
    `recipientName` VARCHAR(191) NOT NULL,
    `dueDate` DATETIME(3) NOT NULL,
    `creatorId` VARCHAR(191) NOT NULL,
    `approverId` VARCHAR(191) NULL,
    `status` ENUM('NHAP', 'KHOI_TAO', 'TRUONG_PHONG_DUYET', 'BGD_DUYET', 'KT_XU_LY', 'DA_CK_CHO_BO_SUNG', 'DA_THANH_TOAN', 'DA_IN_PDF', 'BGD_TU_CHOI') NOT NULL DEFAULT 'NHAP',
    `rejectReason` TEXT NULL,
    `replenishForId` VARCHAR(191) NULL,
    `version` INTEGER NOT NULL DEFAULT 0,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    UNIQUE INDEX `payment_requests_code_key`(`code`),
    INDEX `payment_requests_siteId_status_idx`(`siteId`, `status`),
    INDEX `payment_requests_creatorId_idx`(`creatorId`),
    INDEX `payment_requests_approverId_idx`(`approverId`),
    INDEX `payment_requests_dueDate_idx`(`dueDate`),
    INDEX `payment_requests_replenishForId_idx`(`replenishForId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `invoice_links` (
    `id` VARCHAR(191) NOT NULL,
    `requestId` VARCHAR(191) NOT NULL,
    `url` VARCHAR(500) NOT NULL,
    `position` INTEGER NOT NULL,

    INDEX `invoice_links_requestId_idx`(`requestId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `attachments` (
    `id` VARCHAR(191) NOT NULL,
    `requestId` VARCHAR(191) NOT NULL,
    `type` ENUM('CONFIRM_IMAGE_1', 'CONFIRM_IMAGE_2', 'CONTRACT_IMAGE', 'FREE') NOT NULL,
    `originalName` VARCHAR(191) NOT NULL,
    `storageKey` VARCHAR(191) NOT NULL,
    `mimeType` VARCHAR(191) NOT NULL,
    `sizeBytes` INTEGER NOT NULL,
    `uploadedById` VARCHAR(191) NOT NULL,
    `uploadedAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    INDEX `attachments_requestId_idx`(`requestId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `request_watchers` (
    `id` VARCHAR(191) NOT NULL,
    `requestId` VARCHAR(191) NOT NULL,
    `userId` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `request_watchers_requestId_userId_key`(`requestId`, `userId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `comments` (
    `id` VARCHAR(191) NOT NULL,
    `requestId` VARCHAR(191) NOT NULL,
    `authorId` VARCHAR(191) NOT NULL,
    `content` VARCHAR(2000) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    INDEX `comments_requestId_createdAt_idx`(`requestId`, `createdAt`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `change_logs` (
    `id` VARCHAR(191) NOT NULL,
    `requestId` VARCHAR(191) NOT NULL,
    `action` ENUM('CREATED', 'SUBMITTED', 'STATUS_CHANGED', 'FILE_UPLOADED', 'COMMENTED') NOT NULL,
    `actorId` VARCHAR(191) NOT NULL,
    `fromStatus` ENUM('NHAP', 'KHOI_TAO', 'TRUONG_PHONG_DUYET', 'BGD_DUYET', 'KT_XU_LY', 'DA_CK_CHO_BO_SUNG', 'DA_THANH_TOAN', 'DA_IN_PDF', 'BGD_TU_CHOI') NULL,
    `toStatus` ENUM('NHAP', 'KHOI_TAO', 'TRUONG_PHONG_DUYET', 'BGD_DUYET', 'KT_XU_LY', 'DA_CK_CHO_BO_SUNG', 'DA_THANH_TOAN', 'DA_IN_PDF', 'BGD_TU_CHOI') NULL,
    `note` TEXT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    INDEX `change_logs_requestId_createdAt_idx`(`requestId`, `createdAt`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `notifications` (
    `id` VARCHAR(191) NOT NULL,
    `userId` VARCHAR(191) NOT NULL,
    `type` ENUM('ASSIGNED', 'APPROVED', 'REJECTED', 'SEND_TO_ACCOUNTING', 'MISSING_DOCS', 'PAID') NOT NULL,
    `requestId` VARCHAR(191) NULL,
    `isRead` BOOLEAN NOT NULL DEFAULT false,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    INDEX `notifications_userId_isRead_idx`(`userId`, `isRead`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `user_site_roles` ADD CONSTRAINT `user_site_roles_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `users`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `user_site_roles` ADD CONSTRAINT `user_site_roles_siteId_fkey` FOREIGN KEY (`siteId`) REFERENCES `sites`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `payment_requests` ADD CONSTRAINT `payment_requests_siteId_fkey` FOREIGN KEY (`siteId`) REFERENCES `sites`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `payment_requests` ADD CONSTRAINT `payment_requests_creatorId_fkey` FOREIGN KEY (`creatorId`) REFERENCES `users`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `payment_requests` ADD CONSTRAINT `payment_requests_approverId_fkey` FOREIGN KEY (`approverId`) REFERENCES `users`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `payment_requests` ADD CONSTRAINT `payment_requests_replenishForId_fkey` FOREIGN KEY (`replenishForId`) REFERENCES `payment_requests`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `invoice_links` ADD CONSTRAINT `invoice_links_requestId_fkey` FOREIGN KEY (`requestId`) REFERENCES `payment_requests`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `attachments` ADD CONSTRAINT `attachments_requestId_fkey` FOREIGN KEY (`requestId`) REFERENCES `payment_requests`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `attachments` ADD CONSTRAINT `attachments_uploadedById_fkey` FOREIGN KEY (`uploadedById`) REFERENCES `users`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `request_watchers` ADD CONSTRAINT `request_watchers_requestId_fkey` FOREIGN KEY (`requestId`) REFERENCES `payment_requests`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `request_watchers` ADD CONSTRAINT `request_watchers_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `users`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `comments` ADD CONSTRAINT `comments_requestId_fkey` FOREIGN KEY (`requestId`) REFERENCES `payment_requests`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `comments` ADD CONSTRAINT `comments_authorId_fkey` FOREIGN KEY (`authorId`) REFERENCES `users`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `change_logs` ADD CONSTRAINT `change_logs_requestId_fkey` FOREIGN KEY (`requestId`) REFERENCES `payment_requests`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `change_logs` ADD CONSTRAINT `change_logs_actorId_fkey` FOREIGN KEY (`actorId`) REFERENCES `users`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `notifications` ADD CONSTRAINT `notifications_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `users`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `notifications` ADD CONSTRAINT `notifications_requestId_fkey` FOREIGN KEY (`requestId`) REFERENCES `payment_requests`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
