import { connect } from 'mongoose';

const connectDB = async () => {
    try {
        connect(process.env.DATABASE_URI, {
            useUnifiedTopology: true,
            useNewUrlParser: true
        });
    } catch (err) {
        console.error(err);
    }
}

export default connectDB