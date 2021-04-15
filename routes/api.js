const router = require("express").Router();
const Exercise = require("../models/exercise.js")

router.post('/api/exercise', (req, res) => {
    Exercise.create({})
    .then((dbExercise) => {
      res.json(dbExercise);
    })
    .catch((err) => {
      res.json(err);
    });
});

router.put('/api/exercise/:id', ({ body, params }, res) => {
    Exercise.findByIdAndUpdate(
    params.id,
    { $push: { exercises: body } },
    // "runValidators" will ensure new exercises meet our schema requirements
    { new: true, runValidators: true }
  )
    .then((dbExercise) => {
      res.json(dbExercise);
    })
    .catch((err) => {
      res.json(err);
    });
});

router.get('/api/exercise', (req, res) => {
    Exercise.aggregate([
    {
      $addFields: {
        totalDuration: {
          $sum: '$exercises.duration',
        },
      },
    },
  ])
    .then((dbExercises) => {
      res.json(dbExercises);
    })
    .catch((err) => {
      res.json(err);
    });
});

router.get('/api/exercise/range', (req, res) => {
    Exercise.aggregate([
    {
      $addFields: {
        totalDuration: {
          $sum: '$exercises.duration',
        },
      },
    },
  ])
    .sort({ _id: -1 })
    .limit(7)
    .then((dbExercises) => {
      console.log(dbExercises);
      res.json(dbExercises);
    })
    .catch((err) => {
      res.json(err);
    });
});

router.delete('/api/exercise', ({ body }, res) => {
    Exercise.findByIdAndDelete(body.id)
    .then(() => {
      res.json(true);
    })
    .catch((err) => {
      res.json(err);
    });
});

module.exports = router;
