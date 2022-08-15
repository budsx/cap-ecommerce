const Register = () => {
  return (
    <div className="container">
      <div class="register">
        <form class="register-form" action="/">
          <h1>Register</h1>
          <div class="register-input">
            <label for="name">
              <b>Name</b>
            </label>
            <input
              type="text"
              placeholder="Enter Name"
              name="name"
              id="name"
              required
            />
            <label for="email">
              <b>Email</b>
            </label>
            <input
              type="text"
              placeholder="Enter Email"
              name="email"
              id="email"
              required
            />
            <label for="psw">
              <b>Password</b>
            </label>
            <input
              type="password"
              placeholder="Enter Password"
              name="psw"
              id="psw"
              required
            />
            <button type="submit" class="registerbtn">
              Register
            </button>
            <div class="signin">
              <p>
                Already have an account? <a href="login">Sign in</a>.
              </p>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
