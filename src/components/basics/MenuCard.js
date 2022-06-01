import React from "react";
// import  './style.css';
// import Menu from './menuAPI';

const MenuCard = ({ menuData }) => {
  console.log(menuData);
  return (
    <>
    <section className="main-card--cointainer">
      {menuData.map((currEle) => {
        const {id, name, category, image, description}= currEle;
        return (
          <>
            <div className="card-container" key={id}>
              <div className="card">
                <div className="card-body">
                  <span className="card-number card-circle subtle">{id}</span>

                  <span className="card-author subtle"> {category}</span>
                  <h2 className="card-title">  {name}</h2>
                  <span className="card-discription subtle">
                  {description}
                  </span>
                  <div className="card-read"> Read</div>
                  <img src={image}  alt='Image' className='cared-media'/>
                  <span className="card-tag subtle"> Order Now</span>
                </div>
              </div>
            </div>
          </>
        );
      })}
      </section>
    </>
    
  );
};

export default MenuCard;
