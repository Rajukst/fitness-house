import React from 'react';
import { Col } from 'react-bootstrap';

const DynamicClass = () => {
    return (
        <div>
            <Col>
            <div className="containeres">
            <div className="rowes">
              <div className="aaaaa">
                <div className="card border-0">
                  <div className="card-body">
                    <Link to={`/single-item/${_id}`}>
                      <img
                        src={image}
                        className="img-fluid p-1"
                        alt="Girl in a jacket"
                      />
                    </Link>
                  </div>
                </div>
              </div>
              <div className="textsBody">
                
              </div>
            </div>
          </div>
            </Col>
        </div>
    );
};

export default DynamicClass;