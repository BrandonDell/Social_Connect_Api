const router = require("express").Router();
const {
    getUsers,
    getSingleUser,
    createUser,
    updateUser,
    deleteUser,
    addFriend,
    removeFriend,
} = require("../../controllers/user-controller");

// /api/users
router.route('/').get(getUsers).post(createUser);
// /api/users/:userId
router.route('/:userId').get(getSingleUser).delete(deleteUser);
// /api/users/:userId/friends/:friendId
router.route('/:userId/friends/:friendId').delete(removeFriend);
module.exports = router;
