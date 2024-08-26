/*
  Warnings:

  - You are about to drop the column `followee` on the `Follow` table. All the data in the column will be lost.
  - You are about to drop the column `follower` on the `Follow` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[followerId,followeeId]` on the table `Follow` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `followeeId` to the `Follow` table without a default value. This is not possible if the table is not empty.
  - Added the required column `followerId` to the `Follow` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "Follow_follower_followee_key";

-- AlterTable
ALTER TABLE "Follow" DROP COLUMN "followee",
DROP COLUMN "follower",
ADD COLUMN     "followeeId" UUID NOT NULL,
ADD COLUMN     "followerId" UUID NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Follow_followerId_followeeId_key" ON "Follow"("followerId", "followeeId");

-- AddForeignKey
ALTER TABLE "Follow" ADD CONSTRAINT "Follow_followerId_fkey" FOREIGN KEY ("followerId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Follow" ADD CONSTRAINT "Follow_followeeId_fkey" FOREIGN KEY ("followeeId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
