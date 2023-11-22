/*
  Warnings:

  - You are about to drop the column `email` on the `Exercise` table. All the data in the column will be lost.
  - You are about to drop the column `fullName` on the `Exercise` table. All the data in the column will be lost.
  - You are about to drop the column `password` on the `Exercise` table. All the data in the column will be lost.
  - Added the required column `name` to the `Exercise` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "Exercise_email_key";

-- AlterTable
ALTER TABLE "Exercise" DROP COLUMN "email",
DROP COLUMN "fullName",
DROP COLUMN "password",
ADD COLUMN     "name" TEXT NOT NULL;
