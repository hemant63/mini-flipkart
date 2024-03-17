function Footer() {
  return (
    <div
      style={{
        backgroundColor: "#070F2B",
        display: "flex",
        justifyContent: "space-between",
        paddingRight: "100px",
        paddingLeft: "100px",
        paddingTop: "50px",
        paddingBottom: "50px",
        width: "1400px",
        bottom: "0",
      }}
    >
      <h1 style={{ color: "grey" }}>Flipkart</h1>
      <div>
        <h3 style={{ color: "gray" }}>Product</h3>
        <span style={{ color: "whitesmoke" }}>
          <p>Clothes</p>
          <p>Electronic Appliances</p>
          <p>Home Decors</p>
          <p>Mobiles & Accessories</p>
        </span>
      </div>
      <div>
        <h3 style={{ color: "gray" }}>Company</h3>
        <span style={{ color: "whitesmoke" }}>
          <p>About us</p>
          <p>News</p>
          <p>Press</p>
        </span>
      </div>
      <div>
        <h3 style={{ color: "gray" }}>Legal</h3>
        <span style={{ color: "whitesmoke" }}>
          <p>SignIn</p>
          <p>Terms & Conditions</p>
          <p>Privacy Policy</p>
          <p>Contact</p>
        </span>
      </div>
    </div>
  );
}

export default Footer;
