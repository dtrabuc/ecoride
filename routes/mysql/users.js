import express from 'express';
import { v4 as uuidv4 } from 'uuid';
const router = express.Router();

const users = [
    {
        first_name: 'John',
        last_name: 'Doe',
        email: 'johndoe@email.com',
        password: '1234'
    },
    {
        first_name: 'Admin',
        last_name: 'Dylan',
        email: 'eee@adm.fr',
        password: '1234'
    }
];

router.get('/', (req, res) => {
    res.send(users); 
});

router.post('/', (req, res) => {
    const user = req.body;
    users.push({ ...user, id: uuidv4() });
    res.send(`L'utilisateur avec le nom ${user.first_name} a bien été ajouté à la base de données!`);
});

export default router;