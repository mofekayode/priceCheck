import React, { useState } from "react";
import { Link } from "react-router-dom";
import Input from "./Components/Input";

export default function PriceCheck() {
  const [SKU, setSKU] = useState("");
  const [HTP, setHTP] = useState("");
  const [XSP, setXSP] = useState("");
  const [BBRP, setBBRP] = useState("");
  const [StoreNumber, setStoreNumber] = useState("");

  const [SKUError, setSKUError] = useState({
    required: false,
    successValue: "white",
  });
  const [HTPError, setHTPError] = useState({
    required: false,
    successValue: "white",
  });
  const [XSPError, setXSPError] = useState({
    required: false,
    successValue: "white",
  });
  const [BBRPError, setBBRPError] = useState({
    required: false,
    successValue: "white",
  });
  const [storeNumberError, setStoreNumberError] = useState({
    required: false,
    successValue: "white",
  });
  const handleSKUError = () => {
    console.log("blurred");
    if (SKU.length < 1) {
      setSKUError({
        ...SKUError,
        required: true,
      });
    } else {
      setSKUError({
        ...SKUError,
        required: false,
      });
    }
  };
  return (
    <div className="App">
      <div className="Sign-Box">
        <div className="Header-name">Price Check</div>
        <form>
          <Input
            placeholder="SKU"
            value={SKU}
            onChange={(e) => {
              setSKU(e.target.value);
              setSKUError({
                required: false,
                successValue: "white",
              });
            }}
            error={SKUError}
            onBlur={handleSKUError}
          />
          <select name="cars" id="cars">
            <option value="volvo">USD</option>
            <option value="saab">CAD</option>
            <option value="mercedes">EUR</option>
          </select>
          <Input
            placeholder="Hang Tag Price"
            value={HTP}
            onChange={(e) => {
              setHTP(e.target.value);
            }}
            error={HTPError}
          />
          <Input
            placeholder="XStore Price"
            value={XSP}
            onChange={(e) => {
              setXSP(e.target.value);
            }}
            error={XSPError}
          />
          <Input
            placeholder="BBR Price"
            value={BBRP}
            onChange={(e) => {
              setBBRP(e.target.value);
            }}
            error={BBRPError}
          />
          <Input
            placeholder="Store Number"
            value={StoreNumber}
            onChange={(e) => {
              setStoreNumber(e.target.value);
            }}
            error={storeNumberError}
          />
          <Link to="/price-check">
            <div className="login">Login</div>
          </Link>
        </form>
      </div>
    </div>
  );
}
