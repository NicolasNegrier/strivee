import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { LoginForm } from "../components/LoginForm";

export function Login() {
  
    return (
      <div className="login">
        <section id="leftLogin">
            <Header/>
            <LoginForm />
            <Footer />
        </section>
        <section id="rightLogin">
          <div className="imgLogin"></div>
        </section>
      </div>
    );
  }