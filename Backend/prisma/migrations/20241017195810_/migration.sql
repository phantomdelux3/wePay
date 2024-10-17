/*
  Warnings:

  - A unique constraint covering the columns `[account]` on the table `Accounts` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Accounts_account_key" ON "Accounts"("account");
