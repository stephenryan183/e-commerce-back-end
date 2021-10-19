const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/',async (req, res) => {
  // find all categories
  // be sure to include its associated Products

  try {
    const categoryData = await Category.findAll({
      // include its associated Products
      include: [
        {
          model: Product,
        },
      ],
    })
    res.status(200).json(categoryData)
  } catch (err) {
    res.status(500).json(err);
  }
});





router.get('/:id',async (req, res) => {

  try {
    const categoryData = await Category.findOne({
      where: {
        id: req.params.id,
      },
      // include its associated Products
      include: [
        {
          model: Product
        },
      ],
    })
    res.status(200).json(categoryData);
  } catch (err) {
    res.status(500).json(err);
  }


  // be sure to include its associated Products
});

router.post('/',async (req, res) => {
  try {
    const categoryData = await Category.create(req.body);
    res.status(200).json(categoryData);
  } catch (err) {
    res.status(500).json(err);
  }
  // create a new category
});

router.put('/:id', async(req, res) => {
  try {
    const categoryData = await Category.update(req.body, {
      where: {
        id: req.params.id,
      },
    })
    res.status(200).json(categoryData);
  } catch (err) {
    res.status(500).json(err);
  }
  // update a category by its `id` value
});

router.delete('/:id', async(req, res) => {

  try {
    const categoryData = await Category.destroy({
      where: {
        id: req.params.id,
      },
    })
    res.status(200).json(categoryData);
  } catch (err) {
    res.status(500).json(err);
  }

});

module.exports = router;
