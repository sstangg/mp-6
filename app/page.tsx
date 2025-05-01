import SignIn from "./components/SignIn"

export default function Home() {
  return (
      <>
          <div className="flex flex-col w-full items-center">
              <main className="flex flex-col items-center justify-center p-4 pt-28"></main>
              <SignIn />
          </div>
      </>
);
}
