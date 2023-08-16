const getUser = (req, res) => {
    res.render('users/index', { title: 'Express' });

}
const formCreateUser = (req, res) => {
    res.render('users/create', { title: 'tambah' });
}
const detailUser = (req, res) => {
    console.log (req.params.id)
    res.render('users/detail', { title: 'detail' });
}
module.exports = {getUser, formCreateUser, detailUser}
