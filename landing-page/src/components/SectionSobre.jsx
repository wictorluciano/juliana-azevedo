export default function SectionSobre() {
    return (
    <section id="sobre" className="bg-dark-scale-400">
      <div className="flex items-center justify-between w-[312px] md:w-[500px] lg:w-[1024px] mx-auto my-14 lg:my-0">
        <img src="/juliana-vv.svg" alt="" className="hidden lg:flex w-[300px]" />
        <div className="flex flex-col items-center gap-4
        w-[312px] md:w-[500px]">
          <h1 className="font-semibold text-2xl">Sobre mim</h1>
          <div className="flex flex-col items-center justify-center gap-4
          w-[312px] md:w-[600px]">
          <p className="text-center text-sm leading-6 lg:text-start lg:text-lg lg:font-light">Sou Juliana Azevedo, uma contadora com experiência na área contábil. Meu foco está em oferecer serviços de declaração de imposto de renda e consultoria para microempreendedores.</p>
          <p className="text-center text-sm leading-6 lg:text-start lg:text-lg lg:font-light">Com minha habilidade em lidar com questões fiscais e contábeis, proporciono orientações claras e eficazes, ajudando meus clientes a entender e cumprir suas obrigações fiscais enquanto maximizam sua eficiência financeira.</p>
          <p className="text-center text-sm leading-6 lg:text-start lg:text-lg lg:font-light">Compromisso com a excelência, serviços de qualidade e com uma ética de trabalho, sou uma escolha confiável para aqueles que buscam orientação sólida no campo contábil.</p>
          </div>
        </div>
      </div>
      </section>
    )
}