import React from "react";
import { Button } from "@material-ui/core";
import { Link } from "react-scroll";
import { ArrowDownward } from "@material-ui/icons";

function _about() {
  return (
    <div className="about">
      <div className="Content">
        <h1>OnServices Ltd.Şti.</h1>
        <h5>
          15 yılı aşkın süredir geçiş kontrol ve personel devam kontrol
          sistemleri alanında edindiğimiz sektörel deneyimimizi genişleterek
          OnServices Bilişim Ltd.Şti. çatısı altında sizlere sunuyoruz. Söz
          verilen zamanda ve söz verilen kapsamda hizmet vermeyi ilke edinmiş
          bulunuyoruz.
        </h5>
      </div>
      <div className="slideNext">
        <Link to="mainServices" smooth={true} duration={700}>
          <Button className="_slideNextButton">
            <ArrowDownward className="nextPageArrow"></ArrowDownward>
          </Button>
        </Link>
      </div>
    </div>
  );
}

export default _about;
