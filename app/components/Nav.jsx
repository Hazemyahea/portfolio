import Link from "next/link";

const Nav = () => {
  return (
    <nav className="container mx-auto p-3">
      <ul className="flex gap-5 ">
        <li className=" hover:bg-white hover:text-black hover:p-2 rounded-full transition-all">
          <Link href="/">Home</Link>
        </li>
        <li className=" hover:bg-white hover:text-black hover:p-2 rounded-full transition-all">
          <Link href="/about">About</Link>
        </li>
        <li className=" hover:bg-white hover:text-black hover:p-2 rounded-full transition-all">
          <Link href="/mywork">My Work</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
