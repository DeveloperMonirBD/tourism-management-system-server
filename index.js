const express = require('express');
const cors = require('cors');
const jwt = require('jsonwebtoken');
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
require('dotenv').config();

const port = process.env.PORT || 5000;
const app = express();

app.use(cors());
app.use(express.json());

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.hhc73.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true
    }
});

async function run() {
    try {
        const usersCollection = client.db('tourism-management').collection('users');
        const packagesCollection = client.db('tourism-management').collection('packages');
        const tourGuidesCollection = client.db('tourism-management').collection('tourGuides');
        const bookingsCollection = client.db('tourism-management').collection('bookings');

        // jwt related api
        app.post('/jwt', async (req, res) => {
            const user = req.body;
            const token = jwt.sign(user, process.env.ACCESS_TOKEN_SECRET, { expiresIn: '1h' });
            res.send({ token });
        });

        // packagesCollection Methods
        // Endpoint to get random packages 3 data
        app.get('/api/packages', async (req, res) => {
            const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
            try {
                await client.connect();
                const result = await packagesCollection.aggregate([{ $sample: { size: 3 } }]).toArray();
                res.send(result);
            } catch (error) {
                console.error('Error fetching packages:', error);
                res.status(500).json({ error: 'Failed to fetch packages' });
            } finally {
                await client.close();
            }
        });

        // Endpoint to get specific packages data
        app.get('/api/packages/:id', async (req, res) => {
            const id = req.params.id;
            const query = { _id: new ObjectId(id) };
            const package = await packagesCollection.findOne(query);
            res.send(package);
        });

        // tourGuidesCollection Methods
        // Endpoint to get random guides 6 data
        app.get('/api/tourGuides', async (req, res) => {
            const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
            try {
                await client.connect();
                const result = await tourGuidesCollection.aggregate([{ $sample: { size: 6 } }]).toArray();
                res.send(result);
            } catch (error) {
                console.error('Error fetching packages:', error);
                res.status(500).json({ error: 'Failed to fetch packages' });
            } finally {
                await client.close();
            }
        });

        // Endpoint to get specific guide data
        app.get('/api/tourGuides/:id', async (req, res) => {
            const id = req.params.id;
            const query = { _id: new ObjectId(id) };
            const package = await tourGuidesCollection.findOne(query);
            res.send(package);
        });

        // bookingCollection Methods
        // save booking data in the bookingCollection
        app.post('/api/bookings', async (req, res) => {
            try {
                const booking = req.body;
                await bookingsCollection.insertOne(booking);
                res.status(201).json(booking);
            } catch (error) {
                res.status(400).json({ message: error.message });
            }
        });




        

        // save or update a user in db
        app.post('/users/:email', async (req, res) => {
            const email = req.params.email;
            const query = { email };
            const user = req.body;
            // check if user exists in db
            const isExist = await usersCollection.findOne(query);

            if (isExist) {
                return res.send(isExist);
            }

            const result = await usersCollection.insertOne({
                ...user,
                timestamp: Date.now()
            });
            res.send(result);
        });

        // Send a ping to confirm a successful connection
        await client.db('admin').command({ ping: 1 });
        console.log('Pinged your deployment. You successfully connected to MongoDB!');
    } finally {
        // Ensures that the client will close when you finish/error
    }
}
run().catch(console.dir);
app.get('/', (req, res) => {
    res.send('Hello from Tourism-management Server....');
});

app.listen(port, () => console.log(`Server running on port ${port}`));
