import { PrismaClient } from '@prisma/client'

export const prisma = new PrismaClient()

/* eslint no-extend-native: "off" */
;(BigInt.prototype as any).toJSON = function () {
  const int = Number.parseFloat(this.toString())
  return int ?? this.toString()
}
