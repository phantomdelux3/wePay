/*
  Warnings:

  - You are about to drop the column `form` on the `Transactions` table. All the data in the column will be lost.
  - Added the required column `from` to the `Transactions` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Transactions" DROP COLUMN "form",
ADD COLUMN     "from" TEXT NOT NULL;
