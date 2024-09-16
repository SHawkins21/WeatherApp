-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_location" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT,
    "address" TEXT,
    "city" TEXT,
    "state" TEXT,
    "latitude" REAL,
    "longitude" REAL,
    "zip" TEXT,
    "country" TEXT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);
INSERT INTO "new_location" ("address", "city", "country", "createdAt", "id", "name", "state", "updatedAt", "zip") SELECT "address", "city", "country", "createdAt", "id", "name", "state", "updatedAt", "zip" FROM "location";
DROP TABLE "location";
ALTER TABLE "new_location" RENAME TO "location";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
