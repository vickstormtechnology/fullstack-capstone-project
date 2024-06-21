const { connectToDatabase } = require('../models/db.js');
const router = express.Router();

// router.get('/', async (req, res) => {
//     try {
//         // Task 1: Connect to MongoDB and store connection to db constant
//         // const db = {{insert code here}}

//         // Task 2: use the collection() method to retrieve the gift collection
//         // {{insert code here}}

//         // Task 3: Fetch all gifts using the collection.find method. Chain with toArray method to convert to JSON array
//         // const gifts = {{insert code here}}

//         // Task 4: return the gifts using the res.json method
//         res.json(/* {{insert code here}} */);
//     } catch (e) {
//         console.error('Error fetching gifts:', e);
//         res.status(500).send('Error fetching gifts');
//     }
// });

//Retrive all gift data
router.get('/api/gifts', async (req, res) => {
  try {
    // Task 1: Connect to MongoDB and store connection to db constant
    const db = await connectToDatabase();

    // Task 2: Use the collection() method to retrieve the gift collection
    const collection = db.collection('gifts');

    // Task 3: Fetch all gifts using the collection.find method and convert to JSON array
    const gifts = await collection.find({}).toArray();

    // Task 4: Return the gifts using the res.json method
    res.json(gifts);
  } catch (error) {
    console.error('Error retrieving gifts:', error);
    res.status(500).send('Error retrieving gifts');
  }
});

// Fetch a specific gift by ID
router.get('/api/gifts/:id', async (req, res) => {
  const id = req.params.id;

  try {
    // Task 1: Connect to MongoDB and store connection to db constant
    const db = await connectToDatabase();

    // Task 2: Use the collection() method to retrieve the gift collection
    const collection = db.collection('gifts');

    // Task 3: Find a specific gift by ID using the collection.findOne method and store in a constant called gift
    const gift = await collection.findOne({ id: id });

    if (gift) {
      res.json(gift);
    } else {
      res.status(404).send('Gift not found');
    }
  } catch (error) {
    console.error('Error retrieving the gift:', error);
    res.status(500).send('Error retrieving the gift');
  }
});


// Add a new gift
router.post('/', async (req, res, next) => {
    try {
        const db = await connectToDatabase();
        const collection = db.collection("gifts");
        const gift = await collection.insertOne(req.body);

        res.status(201).json(gift.ops[0]);
    } catch (e) {
        next(e);
    }
});

module.exports = router;
