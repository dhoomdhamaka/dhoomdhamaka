import React from "react";
import { Link } from "react-router-dom";

import "./eventcard.css";

function Eventcard() {
  return (
    <div>
      <div class="shell">
        <div class="container">
          {/* ====================first row====================== */}

          <div class="row justify-content-between">
            {/* small 1 */}
            {/* <div class="col-md-3">
              <div class="wsk-cp-product">
                <div class="wsk-cp-img">
                  <img
                    src="https://3.bp.blogspot.com/-eDeTttUjHxI/WVSvmI-552I/AAAAAAAAAKw/0T3LN6jABKMyEkTRUUQMFxpe6PLvtcMMwCPcBGAYYCw/s1600/001-culture-clash-matthew-gianoulis.jpg"
                    alt="Product"
                    class="img-responsive"
                  />
                </div>
                <div class="wsk-cp-text">
                  <div class="category">
                    <span>Ethnic</span>
                  </div>
                  <div class="title-product">
                    <h3>My face not my heart</h3>
                  </div>
                  <div class="description-prod">
                    <p>
                      Description Product tell me how to change playlist height
                      size like 600px in html5 player. player good work now
                      check this link
                    </p>
                  </div>
                  <div class="card-footer">
                    <div class="text-center">
<Link to="/birthday">
                        <button className="btn btn-dark">View Details</button>
                      </Link>                    </div>
                  </div>
                </div>
              </div> */}
            {/* </div> */}
            {/* small 2 */}
            <div class="col-md-3">
              <div class="wsk-cp-product">
                <div class="wsk-cp-img">
                  <img
                    src="https://bit.ly/3Ok8HRQ"
                    alt="Product"
                    class="img-responsive"
                  />
                </div>
                <div class="wsk-cp-text">
                  <div class="category">
                    <span>party</span>
                  </div>
                  <div class="title-product">
                    <h3>Birthday</h3>
                  </div>
                  <div class="description-prod">
                    <p>
                    May your wisdom 
                    increase as you move out of your teenage years
                    .I wish you the best on this milestone birthday.
                    </p>
                  </div>
                  <div class="card-footer">
                    <div class="text-center">
                      <Link to="/birthday">
                        <button className="btn btn-dark">View Details</button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* small 3 */}
            <div class="col-md-3">
              <div class="wsk-cp-product">
                <div class="wsk-cp-img">
                  <img
                    src="https://bit.ly/3yOwyn3"
                    alt="Product"
                    class="img-responsive"
                  />
                </div>
                <div class="wsk-cp-text">
                  <div class="category">
                    <span>Beauty</span>
                  </div>
                  <div class="title-product">
                    <h3>Engagement</h3>
                  </div>
                  <div class="description-prod">
                    <p>
                      Keep love in your heart. A life without it is like a
                      sunless garden when the flowers are.
                    </p>
                  </div>
                  <div class="card-footer">
                    <div class="text-center">
                      <Link to="/engagement" type="button" className="btn btn-dark">
                        View Details
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* small 4 */}
            <div class="col-md-3">
              <div class="wsk-cp-product">
                <div class="wsk-cp-img">
                  <img
                    src="https://bit.ly/3Oh98wf"
                    alt="Product"
                    class="img-responsive"
                  />
                </div>
                <div class="wsk-cp-text">
                  <div class="category">
                    <span>Love</span>
                  </div>
                  <div class="title-product">
                    <h3>Pre wedding</h3>
                  </div>
                  <div class="description-prod">
                    <p>
                      I would rather share one lifetime with you than face all
                      the ages of this world alone.
                    </p>
                  </div>
                  <div class="card-footer">
                    <div class="text-center">
                      <Link to="/prewedding">
                        <button className="btn btn-dark">View Details</button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* ==================second row======================= */}

          <div class="row justify-content-between">
            <div class="col-md-3">
              <div class="wsk-cp-product">
                <div class="wsk-cp-img">
                  <img
                    src="https://bit.ly/3AV28Cb"
                    alt="Product"
                    class="img-responsive"
                  />
                </div>
                <div class="wsk-cp-text">
                  <div class="category">
                    <span>Life</span>
                  </div>
                  <div class="title-product">
                    <h3>Wedding</h3>
                  </div>
                  <div class="description-prod">
                    <p>
                      Once in awhile, right in the middle of an ordinary life,
                      love gives us a fairy tale.
                    </p>
                  </div>
                  <div class="card-footer">
                    <div class="text-center">
                      <Link to="/wedding">
                        <button className="btn btn-dark">View Details</button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* small 3 */}
            <div class="col-md-3">
              <div class="wsk-cp-product">
                <div class="wsk-cp-img">
                  <img
                    src="https://bit.ly/3RMsTiu"
                    alt="Product"
                    class="img-responsive"
                  />
                </div>
                <div class="wsk-cp-text">
                  <div class="category">
                    <span>Caring</span>
                  </div>
                  <div class="title-product">
                    <h3>Post wedding</h3>
                  </div>
                  <div class="description-prod">
                    <p>
                      What lies behind us, and what lies before us are tiny
                      matters compared to what lies within us.
                    </p>
                  </div>
                  <div class="card-footer">
                    <div class="text-center">
                      <Link to="/postwedding">
                        <button className="btn btn-dark">View Details</button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* small 4 */}
            <div class="col-md-3">
              <div class="wsk-cp-product">
                <div class="wsk-cp-img">
                  <img
                    src="https://bit.ly/3uWhBOM"
                    alt="Product"
                    class="img-responsive"
                  />
                </div>
                <div class="wsk-cp-text">
                  <div class="category">
                    <span>Newbie</span>
                  </div>
                  <div class="title-product">
                    <h3>Baby shower</h3>
                  </div>
                  <div class="description-prod">
                    <p>
                      Thanks for making me part of your special day. Let the
                      shower games begin!
                    </p>
                  </div>
                  <div class="card-footer">
                    <div class="text-center">
                      <Link to="/babyshower">
                        <button className="btn btn-dark">View Details</button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* ========================third row========================== */}

          <div class="row justify-content-center mt-3">
            <div className="col-md-9 justify-content-center ">
              <div className="row justify-content-between">
                <div class="col-md-4">
                  <div class="wsk-cp-product">
                    <div class="wsk-cp-img">
                      <img
                        // src="https://bit.ly/3oaqYGD"
                        src="https://bit.ly/3RJ1gqd"
                        alt="Product"
                        class="img-responsive"
                      />
                    </div>
                    <div class="wsk-cp-text">
                      <div class="category">
                        <span>Gathering</span>
                      </div>
                      <div class="title-product">
                        <h3>Family function</h3>
                      </div>
                      <div class="description-prod">
                        <p>
                          Having somewhere to go is home. Having someone to love
                          is family. And having both is a blessing.
                        </p>
                      </div>
                      <div class="card-footer">
                        <div class="text-center">
                          <Link to="/familyfunction">
                            <button className="btn btn-dark">
                              View Details
                            </button>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* small 3 */}
                <div class="col-md-4">
                  <div class="wsk-cp-product">
                    <div class="wsk-cp-img">
                      <img
                        // src="https://bit.ly/3ySLy3v"
                        src="https://bit.ly/3aKsdth"
                        alt="Product"
                        class="img-responsive"
                      />
                    </div>
                    <div class="wsk-cp-text">
                      <div class="category">
                        <span>Bold </span>
                      </div>
                      <div class="title-product">
                        <h3>Corporate events</h3>
                      </div>
                      <div class="description-prod">
                        <p>
                          Some people look for a beautiful place. Others make a
                          place beautiful.
                        </p>
                      </div>
                      <div class="card-footer">
                        <div class="text-center">
                          <Link to="/corporateevents">
                            <button className="btn btn-dark">
                              View Details
                            </button>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Eventcard;
