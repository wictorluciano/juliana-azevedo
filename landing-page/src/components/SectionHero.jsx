
export default function SectionHero() {
    return (
      <section className="bg-dark-scale-400">
        <div className="flex items-center justify-between gap-6
        w-[312px] md:w-[500px] lg:w-[1024px] mx-auto my-14 lg:my-0">
          <div className="flex flex-col items-start justify-start gap-6">
            <div className="flex flex-col gap-3">
              <div className="flex flex-col">
                <span className="font-semiboldbold text-2xl lg:font-bold lg:text-4xl">Faça Agora a</span>
                <span className="font-semiboldbold text-2xl lg:font-bold lg:text-4xl">Declaração do seu</span>
                <span className="font-semiboldbold text-2xl lg:font-bold lg:text-4xl">imposto de renda.</span>
              </div>
              <span className="text-brand-color font-bold text-2xl lg:font-bold lg:text-5xl">Simples e Rápido!</span>
              <span className="text-dark-scale-200 font-semibold text-sm lg:font-semibold lg:text-xl">Existimos para facilitar a sua vida!</span>
            </div>
            <a target="_blank" rel="noreferrer" href="https://api.whatsapp.com/send?phone=5521993088630&text=Olá,%20Gostaria%20de%20informações%20sobre%20a%20declaração%20de%20imposto%20de%20renda.">
              <button className="text-white font-semibold text-sm drop-shadow-xl
              bg-brand-color rounded-[50px] px-4 py-2 lg:px-9 lg:py-4
              hover:bg-dark-scale-400 hover:text-brand-color hover:border hover:border-brand-color
              transition ease-in-out delay-150 duration-150 hover:scale-105">
                Entrar em contato
              </button>     
            </a>
          </div>
          <img src="/ju-hero.png" alt="" className="hidden lg:flex w-[400px]" />
        </div>
      </section>
    )
}
