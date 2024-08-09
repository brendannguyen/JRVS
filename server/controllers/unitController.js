const asyncHandler = require('express-async-handler')

const unitsModel = require('../models/unitsModel')
const unitModel = require('../models/unitModel')

// @desc    Get Unit
// @route   GET /api/units
// @access  Private
const getUnits = asyncHandler (async (req, res) => {
    const units = await unitsModel.find();
    res.status(200).json(units);
})

// @desc    Get Unit
// @route   GET /api/units/:id
// @access  Private
const getUnit = asyncHandler (async (req, res) => {
    const unitId = req.params.id
    const units = await unitModel.find();
    const unit = units.find(unit => unit._id == unitId)

    if (!unit) {
        res.status(404).json({message: 'Unit not found'})
        // res.status(404).json({message: "test123"})
    } else {
        res.status(200).json(unit);
    }
})

// @desc    Append a node to a unit
// @route   POST /api/units/:id/append
// @access  Private
const appendNode = asyncHandler(async (req, res) => {
    // Get the inputs
    const { unitId, targetNodeId, newNode } = req.body;

    // Find the unit being changed
    const unit = await unitModel.findById(unitId);
    
    if (!unit) {
        return res.status(404).json({ message: "Unit not found" });
    }

    // Find the selected node, and append the new node to its children locally
    const isUpdated = addChildNode(unit.data, targetNodeId, newNode);
    console.log(unit.data)

    // TODO: Insert the new node into the lesson/video/quiz object in the database

    // TODO: Update learning path with the new node in the database
});

// Recursive function to append a node to a target node in the learning path
function addChildNode(data, targetId, newNode) {
    for (let item of data) {
        // Log the IDs being compared to help debug
        // console.log(`Comparing ${item.id} with ${targetId}`);

        if (item.id === targetId) {
            // Append the new node to the children of the matched node
            item.children.push(newNode);
            // console.log(`Node appended to ${item.id}`);
            return true; // Return true to indicate success
        }

        // Recur if children exist
        if (item.children && item.children.length > 0) {
            const found = addChildNode(item.children, targetId, newNode);
            if (found) {
                return true; // Stop further recursion if the node was found
            }
        }
    }

    return false; // Return false if the target node wasn't found
}

module.exports = {
    getUnits,
    getUnit,
    appendNode
}