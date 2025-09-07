-- CreateTable
CREATE TABLE "public"."User" (
    "id" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "passwordHash" TEXT NOT NULL,
    "role" TEXT NOT NULL DEFAULT 'user',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."Application" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "vehiclePrice" INTEGER NOT NULL,
    "downPayment" INTEGER NOT NULL,
    "tradeIn" INTEGER NOT NULL DEFAULT 0,
    "fees" INTEGER NOT NULL DEFAULT 0,
    "taxRate" DOUBLE PRECISION NOT NULL DEFAULT 0,
    "termMonths" INTEGER NOT NULL,
    "state" TEXT NOT NULL,
    "status" TEXT NOT NULL DEFAULT 'submitted',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Application_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."AppFinancials" (
    "applicationId" TEXT NOT NULL,
    "incomeMonthly" INTEGER NOT NULL,
    "otherDebt" INTEGER NOT NULL DEFAULT 0,
    "housingCost" INTEGER NOT NULL DEFAULT 0,

    CONSTRAINT "AppFinancials_pkey" PRIMARY KEY ("applicationId")
);

-- CreateTable
CREATE TABLE "public"."Decision" (
    "id" TEXT NOT NULL,
    "applicationId" TEXT NOT NULL,
    "decision" TEXT NOT NULL,
    "reasonCodes" TEXT[],
    "pd" DOUBLE PRECISION NOT NULL,
    "modelVersion" TEXT NOT NULL,
    "dti" DOUBLE PRECISION NOT NULL,
    "ltv" DOUBLE PRECISION NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Decision_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."Offer" (
    "id" TEXT NOT NULL,
    "applicationId" TEXT NOT NULL,
    "lenderId" TEXT NOT NULL,
    "lenderName" TEXT NOT NULL,
    "apr" DOUBLE PRECISION NOT NULL,
    "termMonths" INTEGER NOT NULL,
    "monthlyPayment" INTEGER NOT NULL,
    "totalCost" INTEGER NOT NULL,
    "constraints" JSONB NOT NULL,
    "status" TEXT NOT NULL DEFAULT 'presented',

    CONSTRAINT "Offer_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "public"."User"("email");

-- AddForeignKey
ALTER TABLE "public"."Application" ADD CONSTRAINT "Application_userId_fkey" FOREIGN KEY ("userId") REFERENCES "public"."User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."AppFinancials" ADD CONSTRAINT "AppFinancials_applicationId_fkey" FOREIGN KEY ("applicationId") REFERENCES "public"."Application"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Decision" ADD CONSTRAINT "Decision_applicationId_fkey" FOREIGN KEY ("applicationId") REFERENCES "public"."Application"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Offer" ADD CONSTRAINT "Offer_applicationId_fkey" FOREIGN KEY ("applicationId") REFERENCES "public"."Application"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
