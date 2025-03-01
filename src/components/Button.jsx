import ButtonSvg from "../assets/svg/ButtonSvg";

const Button = ({ className, href, onClick, children, px, white }) => {
  const classes = "h-12 w-12 my-2 ml-4 lg:hidden md:w-fit md:h-auto rounded-full mr-4 bg-transparent border border-white lg:hover:text-purple-700 mt-3";

  const spanClasses = "block ml-[14.5px] lg:hidden text-white hover:text-purple-700 rounded-full";

  const renderButton = () => (
    <button className={classes} onClick={onClick}>
      <span className={spanClasses}>{children}</span>
  
    </button>
  );

  const renderLink = () => (
    <a href={href} className={classes}>
      <span className={spanClasses}>{children}</span>
  
    </a>
  );

  return href ? renderLink() : renderButton();
};

export default Button;
