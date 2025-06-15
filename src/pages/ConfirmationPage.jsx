import { Link } from "react-router-dom";

const ConfirmationPage = () => {
    return (
        <div className="container mx-auto p-8 text-center">
            <h1 className="text-4xl font-bold text-green-600">✅ Order Confirmed!</h1>
            <p className="text-xl text-gray-600 mt-4">Thank you for your purchase! Your order is being processed.</p>
            <Link to="/gallery">
                <button className="mt-6 p-2 bg-blue-500 text-white rounded">
                🎨 Back to Gallery
                </button>
            </Link>
        </div>
    );

};

export default ConfirmationPage;