import React from "react";
import { Link } from "react-router-dom";
import Layout from '../components/Layout'

class Todospaca extends React.Component {
  render() {
    return (
      <React.Fragment>
          <Layout/>
        <div className="Badges">
          <div className="Badges__hero">
            <div className="Badges__container"></div>
          </div>
        </div>

        <div className="Badges__container">
          <div className="Badges__buttons">
            <Link to="/" className="btn btn-primary">
              Inicio
            </Link>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Todospaca;
