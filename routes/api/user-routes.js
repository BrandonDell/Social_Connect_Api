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

// /api/users (POST)
router.route('/').get(getUsers).post(createUser);
// /api/users/:userId (PUT)
router.route('/:userId').get(getSingleUser).put(updateUser);
// /api/users/:userId (DELETE)
router.route('/:userId').get(getSingleUser).delete(deleteUser);
// /api/users/:userId/friends/:friendId (ADD-POST)
router.route('/:userId/friends/:friendId').get(getSingleUser).post(addFriend);
// /api/users/:userId/friends/:friendId (DELETE)
router.route('/:userId/friends/:friendId').delete(removeFriend);
module.exports = router;
