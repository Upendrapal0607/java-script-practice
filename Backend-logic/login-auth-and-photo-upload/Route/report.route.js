const express = require("express");
const Sale = require("../model/report.model");

const route = express.Router();

route.post("/", async (req, res) => {
  try {
    const { date_from, date_to, type, branch_id } = req.body;
    console.log({ date_from, date_to, type, branch_id });
    console.log(
      new Date(date_from),
      "divider",
      new Date(date_to + "T23:59:59+03:00")
    );
    let final = [];
    let sales = [];
    let n = 1;

    do {
      sales = await Sale.aggregate([
        {
          $match: {
            createdAt: {
              $gte: new Date(date_from),
              $lte: new Date(date_to + "T23:59:59+03:00"),
            },
            "branch_details.branch_id": branch_id,
            "game_details.0": { $exists: true },
          },
        },
        {
          $addFields: {
            game_count: {
              $size: "$game_details",
            },
           
          },
        },
        {
          $unwind: "$game_details",
        },
        { $skip: (n - 1) * 500 },
        { $limit: 500 },

        {
          $addFields: {
            booking_id: { $toObjectId: "$booking_id" },
          },
        },
        {
          $lookup: {
            from: "bookings",
            localField: "booking_id",
            foreignField: "_id",
            as: "booking",
          },
        },

        {
          $sort: {
            createdAt: 1,
          },
        },
      ]);
      final = final.concat(sales);
      n++;
    } while (sales.length);
    console.log(final.length);
    res.send({ final });
  } catch (error) {
    res.send({ error });
  }
});

module.exports = route;
