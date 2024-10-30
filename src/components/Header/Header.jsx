import React from 'react';

function Header() {
  return (
    <header className="bg-gray-100 py-12">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center px-4 lg:px-8">
        
        {/* Text Section */}
        <div className="lg:w-1/2 text-center lg:text-left space-y-6 mb-8 lg:mb-0">
          <h1 className="text-4xl font-bold text-gray-800 leading-tight">
           <span className='text-pink-400'>Hey, You are Just Mine </span> <br /> <span className='text-blue-400'>and I am Yours</span>  <br /> <span className='text-yellow-300'>And I love you so much</span>
          </h1>
          <br />
          <br />
          <p className="text-red-600 text-lg">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptate corrupti atque asperiores, consequatur officiis omnis? Iusto omnis, doloribus nemo nesciunt fugiat nobis incidunt quaerat similique aliquid sit iure quos ducimus!
          </p>
          <br />
          <br />
          <a href="#" className="inline-block bg-blue-500 text-white px-6 py-3 rounded-lg shadow hover:bg-blue-600 transition duration-200">
            Visit Us
          </a>
        </div>
        
        {/* Image Section */}
        <div className="lg:w-1/2 flex justify-center lg:justify-end">
          <img
            src="https://images.unsplash.com/photo-1543899161-d044e847c40f?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Romantic scene"
            className="w-full max-w-lg rounded-lg shadow-lg"
          />
        </div>
      </div>
    </header>
  );
}

export default Header;
