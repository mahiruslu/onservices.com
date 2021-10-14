import React from "react";
import { Button } from "@material-ui/core";
import { Link } from "react-scroll";
import { ArrowDownward } from "@material-ui/icons";

function _home() {
  return (
    <div className="home">
      <div className="Content">
        <h1>OnServices Ltd.Şti.</h1>
        <h5>Güvenli Geçiş Teknolojileri</h5>
      </div>
      <div className="slideNextWrapper">
        <Link to="mainAbout" smooth={true} duration={700}>
          <Button className="_slideNextButton">
            <ArrowDownward className="nextPageArrow"></ArrowDownward>
          </Button>
        </Link>
      </div>
    </div>
  );
}

export default _home;
