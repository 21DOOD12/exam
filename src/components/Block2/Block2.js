import React from "react";
import "./Block2.css";
import icon2 from "../../assets/img/icon2.svg"
import arrow from "../../assets/img/arrow.svg"
import time from "../../assets/img/time2x.svg"

function Block2() {
  return (
    <div className="block2">
      <div className="container__block2">
        <div className="block2__text">
          <div className="block2__img">
            <img src={icon2} alt="" />
          </div>
          <div className="block2__title">
            <div className="block2__text">
              Macquarie University, Sydney, Australia
            </div>
          </div>
        </div>

        <div className="block2__details">
          <div className="block2__details-text">
            Maiores voluptas laboriosam non dolorum perferendis fuga repellat
            aut. Blanditiis quos in minus. Voluptatum quia quia voluptas
            voluptatem vero ex possimus. Iure et consectetur dolorem dicta
            accusantium fugiat.
          </div>
        </div>
        <div className="block__btn">
          <div className="btn__text">
            <div className="btn__title">Learn More</div>
            <div className="btn__icon">
              <img src={arrow} alt="" />
            </div>
            <div className="clock">
              <div className="btn__clock">
                <img src={time} alt="" />
              </div>
              <div className="btn__clock-text">
                <div className="clock__text">10:00 AM - 2:00 PM</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Block2;
