import React, { useState } from "react";
import styles from "./Auth.module.scss";
import { Button, Input } from "antd";
import { EyeInvisibleOutlined, EyeOutlined } from "@ant-design/icons";

const Auth = () => {
  const [pwdVisible, setPwdVisible] = useState(false);

  const handlePasswordVisible = () => {
    setPwdVisible(!pwdVisible);
  };

  return (
    <div className={styles.auth}>
      <div className={styles.block}>
        <h1>Вход</h1>
        <Input
          className={styles.textInput}
          type="text"
          placeholder="Username"
        />
        <Input
          className={styles.passwordInput}
          type={pwdVisible ? "text" : "password"}
          placeholder="Password"
          suffix={
            pwdVisible ? (
              <EyeOutlined onClick={handlePasswordVisible} />
            ) : (
              <EyeInvisibleOutlined onClick={handlePasswordVisible} />
            )
          }
        />
        <Button>Войти</Button>
      </div>
    </div>
  );
};

export default Auth;
