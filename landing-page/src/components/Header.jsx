import { useState } from "react";
import { TfiClose } from "react-icons/tfi";
import { CiMenuFries } from "react-icons/ci";

export default function Header() {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  const content = 
    <>
      <div className="absolute flex items-center justify-center lg:hidden right-0 left-0 mt-[29px] mx-auto w-[312px] md:w-[500px]">
          <ul className="flex flex-col items-center w-[312px] md:w-[500px]
          bg-dark-scale-400 border border-brand-color p-2 rounded-lg gap-1">
              <a href="#funciona" className="w-full"><li className="w-full p-2 hover:bg-brand-color hover:rounded-lg hover:text-white">Como funciona</li></a>
              <a href="#sobre" className="w-full"><li className="w-full p-2 hover:bg-brand-color hover:rounded-lg hover:text-white">Sobre mim</li></a>
              <a href="#servicos" className="w-full"><li className="w-full p-2 hover:bg-brand-color hover:rounded-lg hover:text-white">Serviços</li></a>
              <a href="#contato" className="w-full"><li className="w-full p-2 hover:bg-brand-color hover:rounded-lg hover:text-white">Contato</li></a>
          </ul>
      </div>
    </>

    const options = document.getElementById("options")

    function menu() {
    options.classList.toggle("hidden")
    }

    return (
      <header id="header" className="flex items-center justify-center">
        <nav className="flex items-center justify-between 
        w-[312px] md:w-[500px] lg:w-[1024px] h-[60px]">
          <div className="flex items-center gap-2">
            <img src="/favicon.svg" alt="logo juliana azevedo" className="lg:w-7" />
            <span className="text-brand-color text-sm font-semibold lg:text-lg">Juliana Azevedo</span>
          </div>

          {/* menu lg */}
          <div className="hidden lg:flex h-full">
            <ul className="flex items-center justify-between w-[500px]">
              <li className="hover:border-b-2 hover:text-brand-color hover:border-brand-color hover:pb-[0.5px]  transition"><a href="#funciona">Como funciona</a></li>
              <li className="hover:border-b-2 hover:text-brand-color hover:border-brand-color hover:pb-[0.5px]  transition"><a href="#sobre">Sobre mim</a></li>
              <li className="hover:border-b-2 hover:text-brand-color hover:border-brand-color hover:pb-[0.5px]  transition"><a href="#servicos">Serviços</a></li>
              <li className="hover:border-b-2 hover:text-brand-color hover:border-brand-color hover:pb-[0.5px]  transition"><a href="#contato">Contato</a></li>
            </ul>
          </div>

          {/* menu mb */}
          <div className="lg:hidden">
            {click && content}
          </div>
          <div className="lg:hidden">                 
              <button onClick={handleClick} className="">
                  {click ? <TfiClose className="h-6 w-6 fill-brand-color" /> : <CiMenuFries className="h-[26px] w-[26px] fill-brand-color" />}
              </button>
          </div>
        </nav>
      </header>
    )
}