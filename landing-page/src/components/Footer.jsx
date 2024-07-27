export default function Footer() {
    return (
      <footer id="contato" className="flex flex-col items-center justify-center bg-dark-scale-400 mt-14">
        <div className="flex flex-col justify-center w-[312px] md:w-[500px] lg:w-[1024px] h-[150px] lg:h-[200px]">
          <div className="flex items-center justify-between border-b border-brand-color gap-2">
            <img src="/logo2.svg" alt="" className="w-[70px] lg:w-[170px] mb-2"/>
              <div className="flex gap-4 lg:gap-12">
                <div className="flex gap-2 lg:gap-6">
                  <a target="_blank" rel="noreferrer" href="https://api.whatsapp.com/send?phone=5521973209697&text=Olá,%20Gostaria%20de%20informações%20sobre%20a%20declaração%20de%20imposto%20de%20renda.">
                      <div className="flex items-center  
                      w-[36px] h-[36px] xl:w-[50px] xl:h-[50px]
                      bg-white rounded-full p-2 hover:bg-dark-scale-400 hover:text-brand-color hover:border hover:border-brand-color 
                      transition ease-in-out delay-150 duration-150 hover:scale-105">
                        <img src="/icon-wpp.svg" alt="icon whatsapp" className="mx-auto" />
                      </div>
                  </a>
                  <a target="_blank" rel="noreferrer" href="mailto:julianaazevedofloriano@gmail.com">
                      <div className="flex items-center  
                      w-[36px] h-[36px] xl:w-[50px] xl:h-[50px]
                      bg-white rounded-full p-2 hover:bg-dark-scale-400 hover:text-brand-color hover:border hover:border-brand-color
                      transition ease-in-out delay-150 duration-150 hover:scale-105">
                        <img src="/icon-email.svg" alt="icon email" className="mx-auto" />
                      </div>
                  </a>
                  <a target="_blank" rel="noreferrer" href="https://www.instagram.com/contadora.azevedo">
                      <div className="flex items-center  
                      w-[36px] h-[36px] xl:w-[50px] xl:h-[50px]
                      bg-white rounded-full p-2 hover:bg-dark-scale-400 hover:text-brand-color hover:border hover:border-brand-color
                      transition ease-in-out delay-150 duration-150 hover:scale-105">
                        <img src="/icon-insta.svg" alt="icon insta" className="mx-auto" />
                      </div>
                  </a>
                </div>
                <a target="" rel="noreferrer" href="#header">
                    <div className="flex items-center  
                    w-[36px] h-[36px] xl:w-[50px] xl:h-[50px]
                    bg-white rounded-full p-2 hover:bg-dark-scale-400 hover:text-brand-color hover:border hover:border-brand-color
                    transition ease-in-out delay-150 duration-150 hover:scale-105">
                      <img src="/icon-arrow.svg" alt="icon arrow up" className="mx-auto" />
                    </div>
                </a> 
              </div>
          </div>
          <div className="font-light text-xs text-center text-brand-color mx-auto my-4 lg:text-sm">
            © Copyright 2024, Todos os direitos reservados Desenvolvido por <span className="font-semibold text-brand-color lg:text-sm"><a target="_blank" rel="noreferrer" href="https://wictor.vercel.app/">Wictor</a></span>
          </div>
        </div>
      </footer>
    )
}