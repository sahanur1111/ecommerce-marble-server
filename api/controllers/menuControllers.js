const Menu = require("../models/Menu");

// get menu item*****
const getAllMenuItems = async (req, res) => {
  try {
    const menus = await Menu.find({}).sort({ createdAt: -1 }); //sort the item respect to time FIFO order
    res.status(200).json(menus);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
// post a new menu item ******
const postMenuItem = async (req, res) => {
  const newItem = req.body;
  try {
    const result = await Menu.create(newItem);
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// delete a menu item
const deleteMenuItem = async (req, res) => {
  const menuId = req.params.id;
  try {
    const deletedItem = await Menu.findByIdAndDelete(menuId); // await dini jonno fontend thake delete hoc6ilo na
    if (!deletedItem) {
      return res.status(404).json({ message: "Menu not found" });
    }
    res.status(200).json({ message: "Menu Item deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

//GET single menu Item
const singleMenuItem = async (req, res) => {
  const menuId = req.params.id;
  try {
    const menu = await Menu.findById(menuId);
    res.status(200).json(menu);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Update single menu item
const updateMenuItem = async (req, res) => {
  const menuId = req.params.id;
  const { _id, name, product, image, price, category,optional} = req.body;
  try {
    const updateMenu = await Menu.findByIdAndUpdate(
      menuId,
      { name, product, image, price, category, optional },
      { new: true, runValidators: true }
    );
    if(!updateMenu){
      return res.status(404).json({ message: "Menu not found" });
    }

    res.status(200).json(updateMenu)
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getAllMenuItems,
  postMenuItem,
  deleteMenuItem,
  singleMenuItem,
  updateMenuItem
};
