import profile from '../../assets/images/profile.png'
const Headers = () => {
    return (
        <header className='profile'>
            <h1 className='container'>Knowledge Cafe</h1>
            <img src={profile} alt="" />
        </header>
    );
};

export default Headers;