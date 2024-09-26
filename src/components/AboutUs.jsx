import React from 'react';

const AboutUs = () => {
    return (
        <section className="py-10 px-5 text-white relative z-10">
            <div className="container mx-auto max-w-4xl bg-n-800 p-8 rounded-lg shadow-lg">
                <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center">About Us</h2>
                
                <div className="mb-8">
                    <p className="text-xl md:text-lg mb-5 text-center">
                        Welcome to the <strong>Artificial Intelligence and Computer Vision Society</strong>! 
                        As Artificial Intelligence is revolutionizing the tech landscape, we aim to provide a platform 
                        for students to explore this exciting field. Our society is dedicated to imparting knowledge and 
                        expertise in AI and Computer Vision, making these valuable skills accessible to all.
                    </p>
                </div>

                {/* Shorter separator between questions */}
                <hr className="border-t-2 border-white opacity-30 mb-8 mx-auto w-1/2" />

                <div className="mb-8">
                    <h3 className="text-2xl md:text-3xl font-bold mb-4 text-center">What are the Pre-requisites?</h3>
                    <p className="text-xl md:text-lg text-center">
                        Absolutely nothing! We believe that enthusiasm to learn and a commitment to putting in effort 
                        are the only requirements. Starting from the basics, we invite students from all branches to join 
                        us, regardless of prior coding experience.
                    </p>
                </div>

                <hr className="border-t-2 border-white opacity-30 mb-8 mx-auto w-1/2" /> {/* Shorter Divider */}

                <div className="mb-8">
                    <h3 className="text-2xl md:text-3xl font-bold mb-4 text-center">Our Activities</h3>
                    <p className="text-xl md:text-lg text-center">
                        Our club will host various practical workshops, guest lectures, seminars, and hackathons, allowing 
                        members to engage and grow together. To help us plan these events effectively, we’re circulating 
                        a document to gauge interest.
                    </p>
                </div>

                <hr className="border-t-2 border-white opacity-30 mb-8 mx-auto w-1/2" /> {/* Shorter Divider */}

                <div className="mb-8">
                    <h3 className="text-2xl md:text-3xl font-bold mb-4 text-center">Why Deep Learning and Computer Vision?</h3>
                    <p className="text-xl md:text-lg text-center">
                        Deep Learning is a groundbreaking tool transforming numerous fields and becoming an industry necessity. 
                        It drives significant advancements in Computer Vision, Natural Language Processing, and Artificial 
                        Intelligence, making it one of the fastest-growing sectors today.
                    </p>
                </div>

                <hr className="border-t-2 border-white opacity-30 mb-8 mx-auto w-1/2" /> {/* Shorter Divider */}

                <div className="mb-8">
                    <h3 className="text-2xl md:text-3xl font-bold mb-4 text-center">What We Wish to Achieve</h3>
                    <p className="text-xl md:text-lg text-center">
                        Our goal is to introduce students to the fundamentals of AI and Computer Vision. We aim to equip 
                        members with essential skills in Deep Learning and a comprehensive understanding of the algorithms 
                        at play behind the scenes.
                    </p>
                </div>

               
            </div>
        </section>
    );
};

export default AboutUs;
