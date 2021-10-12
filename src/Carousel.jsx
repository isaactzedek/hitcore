import React from 'react';
function Carousel()
{

    return(
        <React.Fragment>
        <div id="demo" className="carousel slide" data-ride="carousel">  
        <ul className="carousel-indicators">
          <li data-target="#demo" data-slide-to="0" class="active"></li>
          <li data-target="#demo" data-slide-to="1"></li>
          <li data-target="#demo" data-slide-to="2"></li>
          <li data-target="#demo" data-slide-to="3"></li>
          <li data-target="#demo" data-slide-to="4"></li>
        </ul>
      
       
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src="https://cdn.apartmenttherapy.info/image/upload/f_auto,q_auto:eco/k%2Farchive%2F8cfbcbb2919742682345681d469b7417a73e4dfe" alt="Pancake" height="700" width="100%"/>
          </div>
          <div className="carousel-item">
            <img src="https://www.holidify.com/images/cmsuploads/compressed/IndianStreetFood_20190103000803.jpg" alt="Pav" height="700" width="100%"/>
          </div>
          <div className="carousel-item">
            <img src="https://d.newsweek.com/en/full/1298878/pizza-stock-getty.jpg" alt="Pizza" height="700" width="100%"/>
          </div>
        <div className="carousel-item">
            <img src="https://i.pinimg.com/originals/00/ec/36/00ec36135f19b0b61b574d6a88864fc3.jpgg" alt="Borritos" height="700" width="100%"/>
          </div>
        <div className="carousel-item">
            <img src="https://www.westcentralfoodservice.com/wp-content/uploads/2019/04/5-food-trends-2019-no-title.jpg" alt="Cheesy" height="700" width="100%"/>
          </div>
        </div>
        
        <a className="carousel-control-prev" href="#demo" data-slide="prev">
          <span className="carousel-control-prev-icon"></span>
        </a>
        <a className="carousel-control-next" href="#demo" data-slide="next">
          <span className="carousel-control-next-icon"></span>
        </a>
        </div>
        </React.Fragment>
    );
}
export default Carousel;