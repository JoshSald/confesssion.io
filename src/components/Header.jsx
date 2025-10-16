import priestImg from "../assets/priest.png";

export default function Header() {
  return (
    <header className="flex flex-col items-center justify-center mt-12 md:mt-20">
      <img
        src={priestImg}
        alt="Priest"
        className="w-32 h-32 md:w-48 md:h-48 object-contain mb-6 drop-shadow-xl"
      />

      <h1 className="text-5xl md:text-6xl font-extrabold text-white text-center drop-shadow-2xl">
        Confess.<span className="text-red-500">io</span>
      </h1>

      <p className="text-lg md:text-xl text-gray-200 text-center mt-4 max-w-md drop-shadow">
        Your sins, judged. Your soul, redeemed. Speak, and be absolved.
      </p>
    </header>
  );
}
