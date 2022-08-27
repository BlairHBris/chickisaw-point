const navItems = [
    {
        id: 1,
        text: 'Home'
    },
    {
        id:2,
        text: 'Jaclyn'
    },
    {
        id:3,
        text: 'Golf'
    },
    {
        id:4,
        text: 'Area'
    },
    {
        id:5,
        text: 'POA'
    },
    {
        id:6,
        text: 'Contact'
    },
]

const NavigationBar = () => {
  return (
    <ul className='navigation-bar'>
        {navItems.map((navItem) => (
            <li key={navItem.id}>{navItem.text}</li>
        ))}
    </ul>
  )
}

export default NavigationBar