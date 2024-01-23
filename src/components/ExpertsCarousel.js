import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import axios from "axios";

export const ExpertsCarousel = () => {
  const [users, setUsers] = useState([]);
  const [imageUrls, setImageUrls] = useState([]);
  const [loading, setLoading] = useState(true);
  // eslint-disable-next-line no-unused-vars
  const [loadingIndexes, setLoadingIndexes] = useState([]); 

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    margin: 0, // Add this line
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };

  useEffect(() => {
    // Fetch user data from JSONPlaceholder
    axios.get("https://jsonplaceholder.typicode.com/users").then((response) => {
      setUsers(response.data);

      // Fetch random doctor images from Unsplash Source API
      const doctorPromises = response.data.map((user) =>
        axios.get(`https://source.unsplash.com/1600x900/?doctor`, {
          responseType: "arraybuffer",
        })
      );

      Promise.all(doctorPromises).then((imageResponses) => {
        const doctorImageUrls = imageResponses.map((imageResponse) =>
          URL.createObjectURL(
            new Blob([imageResponse.data], {
              type: imageResponse.headers["content-type"],
            })
          )
        );
        setImageUrls(doctorImageUrls);
        setLoading(false); // Set loading to false once images are loaded
      });
    });
  }, []);

  return (
    <div className="mt-10 w-4/5 m-auto">
      <Slider {...settings}>
        {users.map((expert, id) => (
          <div key={id} className="px-6">
            <div className="bg-[#317773] p-6 rounded-lg">
              {loading ? (
                <p>Loading...</p>
              ) : (
                <>
                  <div className="image-container">
                    <img
                      src={imageUrls[id]}
                      alt={expert.name}
                      className="w-full h-40 object-cover mb-4 rounded-md"
                    />
                    {/* Add a loading state specifically for the image */}
                    {loadingIndexes.includes(id) && <p>Loading...</p>}
                  </div>
                  <h2 className="text-white text-lg font-semibold mb-2">
                    {expert.name}
                  </h2>
                  <p className="text-white text-sm">{expert.company.name}</p>
                  <p className="text-white text-sm">{expert.website}</p>
                  <button className="text-center bg-[black] rounded-md w-full mt-3 py-2 text-white">
                    Know More
                  </button>
                </>
              )}
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};
