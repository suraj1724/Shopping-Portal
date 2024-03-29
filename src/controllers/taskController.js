

const Task = require('../models/Task');

exports.getAllProducts = async (req, res) => {
    try {
        console.log("All tasks are here..")
             const tasks = await Task.find();
         res.json(tasks);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };

  exports.createProduct = async (req, res) => {
    try {
        const { title, description, status } = req.body;
        const newTask = new Task({
            title,
            description,
            status: status || 'pending', 
        });

        const savedTask = await newTask.save();

        res.status(201).json(savedTask);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};


exports.getProductById = async (req, res) => {
    try {
        const taskId = req.params.id; 
        const task = await Task.findById(taskId);

        if (!task) {
            return res.status(404).json({ message: 'Task not found' });
        }

        res.json(task); 
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.deleteProduct = async (req, res) => {
    try {
        const taskId = req.params.id;

        const deletedTask = await Task.findByIdAndDelete(taskId);

        if (!deletedTask) {
            return res.status(404).json({ message: 'Task not found' });
        }

        res.json({ message: 'Task deleted successfully' }); 
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.updateProduct = async (req, res) => {
    try {
        const taskId = req.params.id
          const { title, description, status } = req.body;
        const updatedTask = await Task.findByIdAndUpdate(
            taskId,
            { title, description, status },
            { new: true }
        );

        if (!updatedTask) {
            return res.status(404).json({ message: 'Task not found' });
        }

        res.json(updatedTask); 
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};



exports.getProductsByStatus = async (req, res) => {
    try {
        const status = req.params.status; 
        const products = await Task.find({ status: status });
        res.json(products); 
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.getProductsUpdatedLast24Hours = async (req, res) => {
    try {
       
        const twentyFourHoursAgo = new Date();
        twentyFourHoursAgo.setDate(twentyFourHoursAgo.getDate() - 1);

        const products = await Task.find({
            $or: [
                { createdAt: { $gte: twentyFourHoursAgo } },
                { updatedAt: { $gte: twentyFourHoursAgo } }
            ]
        });

        res.json(products);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};