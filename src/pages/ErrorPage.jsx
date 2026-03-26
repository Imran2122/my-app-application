import React from 'react';
import { Link } from 'react-router';

const ErrorPage = ({ image, heading, title }) => {
    return (
        <div className="min-h-screen flex items-center justify-center text-center">
            
            <div>
                <img 
                    src={image} 
                    alt="error" 
                    className="w-72 mx-auto mb-6"
                />

                <h1 className="text-4xl font-bold mb-2">
                    {heading || "Oops, Page Not Found"}
                </h1>

                <p className="mb-6 text-gray-500">
                    {title || "The page you are looking for is not available."}
                </p>

                <Link to="/" className="btn btn-primary">
                    Go Back Home
                </Link>
            </div>

        </div>
    );
};

export default ErrorPage;