import React from "react";

const ArchiveDetails = props => (
  <div>
    {props.project.key}
    <div className="card hoverable">
      <div className="view overlay" />
      <div className="card-body">
        <a href="" className="activator p-3 mr-2">
          <i className="fa fa-paperclip" />
          {props.project.filelocation.length}
        </a>
        <h4 className="card-title">{props.project.title}</h4>
        <hr />
        <p className="card-text d-block">{props.project.description}</p>
      </div>
      <div className="card-footer">
        <p className="card-text">
          <span className="h5">Date:</span>
          {" " + props.project.date}
        </p>
        <div className="card-text">
          <span className="h5">Files: </span>
          {props.project.filelocation.map(data => {
            return (
              <div>
                <a>{data + " "}</a>
              </div>
            );
          })}
        </div>
      </div>
      <a onClick={props.collapse} className="link-text">
        <h6 className="pull-right mr-2">
          Show Less <i className="fa fa-chevron-up" />
        </h6>
      </a>
      <br />
    </div>
    <br />
  </div>
);

export default ArchiveDetails;
