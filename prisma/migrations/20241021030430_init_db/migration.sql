-- CreateTable
CREATE TABLE `User` (
    `iD` INTEGER NOT NULL AUTO_INCREMENT,
    `userName` VARCHAR(191) NOT NULL,
    `displayName` VARCHAR(191) NULL DEFAULT '',

    UNIQUE INDEX `User_userName_key`(`userName`),
    PRIMARY KEY (`iD`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `UserSetting` (
    `iD` INTEGER NOT NULL AUTO_INCREMENT,
    `notificationOn` BOOLEAN NOT NULL,
    `smsEnable` BOOLEAN NOT NULL,

    PRIMARY KEY (`iD`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Post` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `title` VARCHAR(191) NOT NULL,
    `description` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
