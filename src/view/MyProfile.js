import React from "react";

import MainLayout from "../layout/MainLayout";
import { Link } from "react-router-dom";
const MyProfile = () => {
  return (
    <MainLayout>
      <div className="container mt-5">
        <div className="row d-flex justify-content-center">
          <div className="col-md-7">
            <div className="card p-3 py-4">
              <div className="text-center">
                <img
                  src={
                    "https://avatars.githubusercontent.com/u/120122471?s=400&u=4cd75eeb79e65a9df8990d5223411d328b0791cf&v=4"
                  }
                  width="200"
                  className="rounded-circle"
                  alt=""
                />
              </div>

              <div className="text-center mt-3">
                <div className="px-4 mt-1">
                  <p className="fonts text-justify navTitle">
                    Hey there! I'm Vishal Kamble, and I've been diving into
                    frontend development for a year now, rocking the MERN stack
                    like a champ! But hey, that's not all – I've got a cool
                    handle on Java and MySQL too. What keeps me going? Well, I
                    thrive on learning new tech stuff, and I'm up for any tech
                    adventure that comes my way!
                  </p>
                </div>
                <h3 className="projectHead">Side Projects</h3>
                <table className="table">
                  <tbody>
                    <tr>
                      <td className="projectName">EPIC HIKES BACKEND</td>
                      <td>
                        <Link
                          to={
                            "https://github.com/vishalk1105/epic-hikes-backend-project"
                          }
                          target="_blank"
                          className="projectLink"
                        >
                          Project
                        </Link>
                      </td>
                    </tr>
                    <tr>
                      <td className="projectName">EPIC HIKES FRONTEND</td>
                      <td>
                        <Link
                          to={
                            "https://github.com/vishalk1105/epic-hikes-frontend-project"
                          }
                          target="_blank"
                          className="projectLink"
                        >
                          Project
                        </Link>
                      </td>
                    </tr>
                    <tr>
                      <td className="projectName">SWIGGY CLONE</td>
                      <td>
                        <Link
                          to={"https://github.com/vishalk1105/swiggy-clone"}
                          target="_blank"
                          className="projectLink"
                        >
                          Project
                        </Link>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default MyProfile;
