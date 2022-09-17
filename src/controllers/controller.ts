import kingsData from '../models/structure-base'

export const StoreUser = (req: any, res: any) => {
  const name = req.body.name
  const email = req.body.email
  const subject = req.body.subject
  const message = req.body.message

  const newUserData = new kingsData({
    name,
    email,
    subject,
    message,
  })

  newUserData
    .save()
    .then(() => res.json('Data Sent'))
    .catch((err: any) => res.status(400).json('Reg Error' + err))
}
