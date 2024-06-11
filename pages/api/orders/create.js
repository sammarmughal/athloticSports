import { connectToDatabase } from '../../../utils/db';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { username, order_date, status, total_amount, shipping_address, phone } = req.body;

    try {
      const { db } = await connectToDatabase();
      const collection = db.collection('orders');

      const result = await collection.insertOne({
        username,
        order_date,
        status,
        total_amount,
        shipping_address,
        phone,
      });

      res.status(200).json({ success: true, message: 'Order Placed successfully', orderId: result.insertedId });
    } catch (error) {
      res.status(500).json({ success: false, message: 'Error Placing order', error: error.message });
    }
  } else {
    res.status(405).json({ success: false, message: 'Method not allowed' });
  }
}
