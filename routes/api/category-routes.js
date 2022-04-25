const router = require('express').Router();
const { Category, Product } = require('../../models');


router.get('/', async (req, res) => {
  try {
    const categories = await Category.findAll({
      include: [{model: Product}]
    })
    res.status(200).json(categories)
  } catch (err) {
    res.status(500).json(err)
  }
});

router.get('/:id', async (req, res) => {
  try {
    const categories = await Category.findByPk(req.params.id, {
      include: [{model: Product}],
    });
    if (!categories) {
      res.status(404).json({ message: 'No category found with that id'})
    }
    res.status(200).json(categories)
  } catch (err) {
    res.status(500).json(err)
  }
});

router.post('/', async (req, res) => {
  try {
    const category = await Category.create(req.body)
    res.status(200).json(category);
  } catch (err) {
    console.log(err);
    res.status(400).json(err)
  }
});

router.put('/:id', async (req, res) => {
  try {
    const categoryData = await Category.findOne({
      where: {
        id: req.params.id,
      },
    })
    await categoryData.update(req.body)
    res.status(200).json(categoryData);
  } catch (err) {
    return res.status(500).json(err)
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const categoryData = await Category.findOne({
      where: {
        id: req.params.id,
      },
    });
    await categoryData.destroy(); 
    if (!categoryData) {
      res.status(400).json({ message: 'No product found with that id'})
      return
    }
    res.status(200).json(categoryData);
  } catch (err) {
    res.status(500).json(err)
  }
});

module.exports = router;
