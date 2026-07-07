const router = require('express').Router();
let users =[{id: 1, name: 'Alice'}];
router.get('/', (req, res) => res.json(users));
router.get('/:id', (req, res) => {
    const user = users.find(u => u.id === parseInt(req.params.id));
    if (!user) return res.status(404).json({ error: 'User not found' });
    res.json(user);
});
router.post('/', (req, res) => {
    const User = { id: Date.now(), ...req.body };
    users.push(User);
    res.status(201).json(User);
});
router.delete('/:id', (req, res) => {
    users= users.filter(u => u.id !== + req.params.id);
    res.status(204).send();
});
module.exports = router;