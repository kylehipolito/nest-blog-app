-- CreateTable
CREATE TABLE "Follow" (
    "follower" UUID NOT NULL,
    "followee" UUID NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "Follow_follower_followee_key" ON "Follow"("follower", "followee");
