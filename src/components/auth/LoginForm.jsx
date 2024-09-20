import { useState } from "react";
import { Button } from "../UI/Button";
import { Input } from "../UI/Input";
import "./LoginForm.css";

export const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [does, setDoes] = useState([]);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setDoes([...does, email, password]);
    setEmail("");
    setPassword("");
  };

  return (
    <div className="head-login">
      <h1>Вход</h1>
      <form className="form-login" onSubmit={(e) => handleSubmit(e)}>
        <Input
          className="login-one"
          type="email"
          onChange={handleEmailChange}
          value={email}
          placeholder="Email..."
        />

        <Input
          className="login-two"
          type="password"
          onChange={handlePasswordChange}
          value={password}
          placeholder="Password..."
        />

        <Button  className="button-login"  type="submit">Войти</Button>
      </form>
      <ul id="ul-form">
        {does.map((item) => (
          <li className="li-form" key={item.toString()}>{item}</li>
        ))}
      </ul>
    </div>
  );
};
