function Header() {
  return (
    <header className="app-header">
      <a className="header-brand" href="/" aria-label="Employee Management System home">
        <span className="header-brand-mark">E</span>
        <span>Employee<span className="header-brand-accent">Hub</span></span>
      </a>

      <div className="header-user">
        <div className="header-greeting">
          <span className="header-greeting-label">Welcome back</span>
          <span className="header-user-name">Yasir</span>
        </div>
        <button className="header-logout" type="button">
          Log Out
        </button>
      </div>
    </header>
  )
}

export default Header