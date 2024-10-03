import Deal from "../models/Deal.js";

export const getDeals = async (req, res) => {
  try {
    const deals = await Deal.find();
    res.json(deals);
  } catch (error) {
    res.status(500).json({ error: "Error fetching deals" });
  }
};

export const addDeal = async (req, res) => {
  try {
    const newDeal = new Deal({
      title: req.body.title,
      price: req.body.price,
      ticket: req.body.ticket,
      yield: req.body.yield,
      days: req.body.days,
      sold: req.body.sold,
      image: req.file ? req.file.path : null,
    });
    await newDeal.save();
    res.status(201).json({ message: "Deal added", deal: newDeal });
  } catch (error) {
    res
      .status(500)
      .json({ error: "Error adding deal", details: error.message });
  }
};
