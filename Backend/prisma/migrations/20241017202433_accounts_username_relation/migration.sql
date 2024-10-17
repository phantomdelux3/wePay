-- CreateIndex
CREATE INDEX "Accounts_username_idx" ON "Accounts"("username");

-- AddForeignKey
ALTER TABLE "Accounts" ADD CONSTRAINT "Accounts_username_fkey" FOREIGN KEY ("username") REFERENCES "User"("username") ON DELETE RESTRICT ON UPDATE CASCADE;
