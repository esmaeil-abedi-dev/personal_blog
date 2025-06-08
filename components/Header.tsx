import Link from 'next/link';

const Header = () => {
  return (
    <header className="bg-gray-800 text-white p-4">
      <nav className="container mx-auto flex justify-between">
        <ul className="flex space-x-4">
          <li><Link href="/">Home</Link></li>
          <li><Link href="/experiences">Experiences</Link></li>
          <li><Link href="/education">Education</Link></li>
          <li><Link href="/blog">Blog Posts</Link></li>
          <li><Link href="/projects">Projects</Link></li>
          <li><Link href="/certifications">Certifications</Link></li>
          <li><Link href="/contact">Contact</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
