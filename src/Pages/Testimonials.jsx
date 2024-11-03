
const testimonialsData = [
    {
      name: "John Doe",
      feedback: "This is the best service I've ever used! Highly recommend to everyone.",
      image: "https://randomuser.me/api/portraits/men/1.jpg",
    },
    {
      name: "Jane Smith",
      feedback: "Excellent quality and amazing customer support. I will definitely come back!",
      image: "https://randomuser.me/api/portraits/women/2.jpg",
    },
    {
      name: "Michael Lee",
      feedback: "The products exceeded my expectations. Very satisfied with my purchase!",
      image: "https://randomuser.me/api/portraits/men/3.jpg",
    },
    {
      name: "Emily Johnson",
      feedback: "Fantastic experience! The quality is top-notch and the support is incredible.",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      name: "David Brown",
      feedback: "Very reliable and well-priced. Couldn't be happier with the purchase.",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      name: "Sophia Turner",
      feedback: "Absolutely love it! Will definitely recommend to friends and family.",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
    {
      name: "Chris Evans",
      feedback: "The service is fast and friendly. I am very impressed with the quality.",
      image: "https://randomuser.me/api/portraits/men/7.jpg",
    },
    {
      name: "Linda Taylor",
      feedback: "A wonderful experience from start to finish. Totally worth it!",
      image: "https://randomuser.me/api/portraits/women/8.jpg",
    }
  ];
  

const Testimonials = () => {
    return (
        <section className="-mb-[450px]">
            <div className="bg-purple-600 text-center py-10 text-white">
                {/* Container for Title, Subtitle, and Button */}
                <div className="max-w-3xl mx-auto px-4">
                    <h1 className="text-3xl md:text-5xl font-bold mb-4">
                        Testimonials
                    </h1>
                    <p className="text-lg md:text-xl mb-6">
                        Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!
                    </p>
                </div>
            </div>
            <section className="bg-gray-100 py-20">
                <div className="max-w-6xl mx-auto text-center">
                    <h2 className="text-3xl font-bold text-gray-800 mb-8">What Our Customers Say</h2>

                    <div className="grid gap-8 md:grid-cols-3 px-4">
                        {testimonialsData.map((testimonial, index) => (
                            <div
                                key={index}
                                className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
                            >
                                <img
                                    src={testimonial.image}
                                    alt={`${testimonial.name}'s profile`}
                                    className="w-20 h-20 rounded-full mx-auto mb-4"
                                />
                                <p className="text-gray-700 italic mb-4">"{testimonial.feedback}"</p>
                                <h3 className="text-lg font-semibold text-gray-800">{testimonial.name}</h3>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </section>
    );
};

export default Testimonials;