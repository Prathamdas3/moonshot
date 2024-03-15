import Header from "@/components/Header";
// import SignUpForm from "@/components/SignUpForm";
// import LogIN from "@/components/LoginForm";
// import DataList from "@/components/DataList";
import VerificationForm from "@/components/Verification";
import "@/styles/page.css";

export default function Home() {
  return (
    <>
      <Header />
      <main className="form-height flex flex-col items-center justify-center">
        {/* <SignUpForm />
        <LogIN /> */}
        {/* <DataList /> */}
        <VerificationForm />
      </main>
    </>
  );
}
