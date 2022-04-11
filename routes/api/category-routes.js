const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', (req, res) => {
  // All categories
  try {
    const findAllCategories = await Category.findAll({
      include: [{model: Product}]
    })
    return res.status(200).json(findAllCategories);
  } catch (err) {
    return res.status(400).json(err)
  }
});

router.get('/:id', (req, res) => {
  // find one category by its `id` value
  try {
    const category = await Category.findByPk(req.params.id, {
      include: [{model: Product}],
    })
    return res.status(200).json(category);
  } catch (err) {
    return res.status(400).json(err)
  }
});

router.post('/', (req, res) => {
  // New category
  try {
    const newCategory = await Category.create({
      category_name: req.body.category_name,
    })
    return res.status(200).json(newCategory);
  } catch (err) {
    return res.status(400).json(err)
  }
});

router.put('/:id', (req, res) => {
  // Updated a category by its `id` value
  try {
    const updatedCategory = await Category.update(req.body, 
      { where: { id: req.params.id }
    })
    return res.status(200).json(updatedCategory);
  } catch (err) {
    return res.status(400).json(err)
  }
});

router.delete('/:id', (req, res) => {
  // Deleted a category by its `id` value
  try {
    const deleteCategory = await Category.destroy( 
      { where: { id: req.params.id }
    })
    return res.status(200).json(deleteCategory);
  } catch (err) {
    return res.status(400).json(err)
  }
});

module.exports = router;
