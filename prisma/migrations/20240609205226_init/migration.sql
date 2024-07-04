/*
  Warnings:

  - You are about to drop the column `creationDate` on the `Comment` table. All the data in the column will be lost.
  - You are about to drop the column `creationDate` on the `Ticket` table. All the data in the column will be lost.
  - You are about to drop the column `position` on the `User` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Comment" DROP COLUMN "creationDate";

-- AlterTable
ALTER TABLE "Ticket" DROP COLUMN "creationDate";

-- AlterTable
ALTER TABLE "User" DROP COLUMN "position";
