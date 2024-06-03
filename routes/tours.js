const { getAllTours, getTourById, addTour, updateTour, updateTourImage, deleteTour } = require('../controller/tours');
const router = require('express').Router();
const multer = require('multer');

const diskStorage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'images')
  },
  filename: function (req, file, cb) {
    cb(null, `${new Date().getTime()}-${file.originalname}`);
  }
});

const upload = multer({ storage: diskStorage });

router.post('/tours', addTour);
router.get('/tours', getAllTours);
router.get('/tours/:id', getTourById);
router.put('/tours/:id', updateTour);
router.put('/tours/image/:id', upload.single('image'), updateTourImage);
router.get('/tours/image/:image', (req, res) => {
  res.sendFile(`${process.cwd()}/images/${req.params.image}`);
});
router.delete('/tours/:id', deleteTour);

module.exports = router;
