const Header = () => {
  return (
    <div>
      <img
        className="w-56 absolute bg-gradient-to-b from-black p-6 z-10"
        src="https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production_2025-07-01/consent/87b6a5c0-0104-4e96-a291-092c11350111/01938dc4-59b3-7f67-86aa-d06aa27c6cc0/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
        alt="logo"
      />
      <div className="w-full absolute z-10 bg-black/50 text-white text-center text-sm font-semibold py-2 px-4 shadow-md">
        ⚠️ This is a clone made for learning purposes only. Not affiliated with
        or endorsed by Netflix.
      </div>
    </div>
  );
};

export default Header;
