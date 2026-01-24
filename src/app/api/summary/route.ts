import { NextResponse } from 'next/server'

export async function GET() {
  // Query mais complexas, mais condições, relacionamentos => SQL na mão (RAW)
  // nesse exemplo em uma rota, acesso o banco de dados 3 vezes, isso custa dinheiro
  // não seria interessante para a empresa, escrevendo na mão(sem usar o ORL), economizo
  // por isso é importante aprender SQL
  // Prisma ORM: RAW SQL => SQLite

  // const summary = await prisma.$queryRaw`
  //     SELECT 
  //       D.id, 
  //       D.date,
  //       (
  //         SELECT 
  //           count(DH.id)
  //         FROM day_habits DH
  //         WHERE DH.day_id = D.id
  //       ) as completed,
  //       (
  //         SELECT
  //           count(HWD.id)
  //         FROM habit_week_days HWD
  //         JOIN habits H
  //           ON H.id = HWD.habit_id
  //         WHERE
  //           HWD.week_day = DATE_FORMAT(D.date/1000.0, '%d%m')
  //           AND H.created_at <= D.date
  //       ) as amount
  //     FROM days D
  //   `

  return NextResponse.json({})
}
