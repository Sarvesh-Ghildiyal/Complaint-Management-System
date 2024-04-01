-- CreateTable
CREATE TABLE `User` (
    `id` VARCHAR(191) NOT NULL,
    `name` VARCHAR(191) NOT NULL,
    `passwordHash` VARCHAR(191) NOT NULL,
    `email` VARCHAR(191) NOT NULL,
    `role` ENUM('USER', 'ADMIN', 'WORKER') NOT NULL DEFAULT 'USER',
    `department` VARCHAR(191) NOT NULL DEFAULT 'CSE',
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    UNIQUE INDEX `User_email_key`(`email`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Complaint` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `userEmail` VARCHAR(191) NOT NULL,
    `title` VARCHAR(191) NOT NULL,
    `room_n0` INTEGER NOT NULL,
    `department` VARCHAR(191) NOT NULL,
    `reported_by` VARCHAR(191) NOT NULL,
    `requested_by` VARCHAR(191) NOT NULL,
    `body` VARCHAR(191) NOT NULL,
    `status` ENUM('OPEN', 'CLOSE') NOT NULL DEFAULT 'OPEN',
    `workerId` VARCHAR(191) NULL,
    `assigned_at` DATETIME(3) NULL,
    `due_date` DATETIME(3) NULL,
    `feedback` VARCHAR(191) NULL,
    `admin_notes` VARCHAR(191) NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    UNIQUE INDEX `Complaint_id_key`(`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Complaint` ADD CONSTRAINT `Complaint_userEmail_fkey` FOREIGN KEY (`userEmail`) REFERENCES `User`(`email`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Complaint` ADD CONSTRAINT `Complaint_workerId_fkey` FOREIGN KEY (`workerId`) REFERENCES `User`(`email`) ON DELETE CASCADE ON UPDATE CASCADE;
