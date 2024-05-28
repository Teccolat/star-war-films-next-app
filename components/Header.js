import Link from 'next/link'

const linkStyle = {
  marginRight: 15
}

const Header = () => (
    <div>
        <Link href="/" legacyBehavior >
          <a style={linkStyle}>Home</a>
        </Link>
        <Link href="/about" legacyBehavior >
          <a style={linkStyle}>About</a>
        </Link>
    </div>
)

export default Header
