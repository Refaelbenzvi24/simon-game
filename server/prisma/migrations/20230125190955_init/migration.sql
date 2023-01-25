-- CreateTable
CREATE TABLE "Game" (
    "id" TEXT NOT NULL,
    "computerMoves" TEXT[] DEFAULT ARRAY[]::TEXT[],
    "userMoves" TEXT[] DEFAULT ARRAY[]::TEXT[],
    "score" INTEGER NOT NULL DEFAULT 0,
    "gameOver" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "Game_pkey" PRIMARY KEY ("id")
);
