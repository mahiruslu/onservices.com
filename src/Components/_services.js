import React from "react";
import { Button } from "@material-ui/core";
import { Link } from "react-scroll";
import { ArrowDownward } from "@material-ui/icons";

function _services() {
  return (
    <div className="services">
      <div className="Content">
        <h1>OnServices Ltd.Şti.</h1>
        <h5>Güvenli Geçiş Teknolojileri</h5>
      </div>
      <div className="slideNext">
        <Link to="mainReferences" smooth={true} duration={700}>
          <Button className="_slideNextButton">
            <ArrowDownward></ArrowDownward>
          </Button>
        </Link>
      </div>
    </div>
  );
}

export default _services;
