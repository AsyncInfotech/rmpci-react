const Contact = ()=> {
  return (
    <div className="container contact-content">
      <h2 className="text-center text-danger mb-4">Contact Us</h2>
      <p className="text-center">
        You may contact us through any of the following methods:
      </p>
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card p-4">
            <h5><strong>Address:</strong></h5>
            <p>29/1 Canal South Road, Kolkata - 700015, West Bengal, INDIA</p>

            <h5><strong>Mobile:</strong></h5>
            <p>9836786777, 7063766685</p>

            <h5><strong>Email:</strong></h5>
            <p>
              drbibhutosh7@gmail.com
              <br />
              ambhowmik112233@gmail.com
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
