const router = require("express").Router();
const {
    getThoughts,
    getSingleThought,
    createThought,
    updateThought,
    deleteThought,
    addReaction,
    removeReaction,
} = require("../../controllers/thought-controller");

// /api/thoughts
router.route('/').get(getThoughts).post(createThought);
// /api/thoughts/:thoughtId
router
    .route('/:thoughtId')
    .get(getSingleThought)
    .put(updateThought)
    .delete(deleteThought);
// /api/thoughts/:thoughtId/reactions
router.route('/thoughts/:thoughtId/reacton').post(addReaction)
// /api/thoughts/:thoughtId/reactions/:reactionId
router.route('/thoughts/:thoughtId/reacton').delete(removeReaction)

module.exports = router;
