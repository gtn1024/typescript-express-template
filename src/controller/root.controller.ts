import type { Request, Response } from 'express'

export function root(_req: Request, res: Response) {
  res.json({ message: 'Hello World' })
}
