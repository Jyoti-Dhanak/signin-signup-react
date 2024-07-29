import "./Signup.css";
import RegisterForm from "../components/RegisterForm";
import ImageSection from "../components/ImageSection";

export default function Signup() {
  return (
    <div className="container">
      <RegisterForm />
      <ImageSection />
    </div>
  );
}
