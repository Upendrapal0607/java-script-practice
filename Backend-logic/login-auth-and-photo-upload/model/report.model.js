// accessoryitem[object], batch[string],expiry_date[date],quantity[number], cost_price[number],selling_price[number],is_active[boolean default true],
const mongoose = require("mongoose");
const validator = require("validator");
const { ObjectId } = require("mongodb");


const saleSchema = mongoose.Schema(
    {
        booking_id: {
            type: String,
            required: true,
            trim: true
        },
        item_details: [],
        item_total_price: {
            type: Number,
            required: function () { return this.item_details.length > 0 ? true : false }
        },
        game_details: [],
        game_total_price: {
            type: Number,
            required: function () { return this.game_details.length > 0 ? true : false }
        },
        package_details: [],
        invoice_no: {
            type: String,
            required: true,
            trim: true,
        },
        emp_details: {
        },
        from_wallet: {
            type: Number,
            default: 0,
            required: true
        },
        payment_details: [
        ],
        discount: {
            type: Number,
            required: true, //ui should give 0 if nothing came
            trim: true,
        },
        paid_amount: {
            type: Number,
            required: true,
            trim: true,
        },
        change_amount: {
            type: Number,
            default: 0,
            trim: true,
        },
        total_amount: {
            type: Number,
            required: true,
            trim: true
        },
        total_time: {
            type: Number,
            required: function () { return this.game_details.length > 0 ? true : false },
            trim: true
        },
        final_amount: {
            type: Number,
            default: 0,
            required: true,
            trim: true,
        },
        is_bill_split: {
            type: Boolean
        },
        bill_split_between: {
            type: Number
        },
        bill_split_amount: {
            type: Number
        },
        difference_amount: {
            type: Number
        },
        customer_details: {
            _id: { type: ObjectId },
            name: { type: String },
            mobile: { type: String },
            customer_type: { type: String },
            is_wallet_eligible: { type: Boolean },
            wallet: { type: Number }
        },
        branch_details: {},
        remarks: {
            type: String,
            default: "",
            // required: true,
            trim: true,
        },
        is_active: {
            type: Boolean,
            default: true,
        },
        is_item_only: {
            type: Boolean,
            default: false
        },
        is_package_only: {
            type: Boolean,
            default: false
        }
    },
    {
        timestamps: true,
    }
);

const Sale = mongoose.model(
    "sale",
    saleSchema
);
module.exports = Sale;
