import Section from './Section'
import SectionHero from './SectionHero'
import SectionFuncional from './SectionFuncional'
import SectionSobre from './SectionSobre'
import SectionServicos from './SectionServicos'


const funcional = [
  {
    key:"1",
    imgUrl:"/icon-pessoa.svg",
    alt:"icon pessoa",
    titulo:"Serviço de assessoria",
    descricao:"Microempreendedor individual e Simples Nacional",
  },
  {
    key:"2",
    imgUrl:"/icon-confiavel.svg",
    alt:"icon confiavel",
    titulo:"100% Confiável",
    descricao:"Seu imposto de renda em boas mãos",
  },
  {
    key:"3",
    imgUrl:"/icon-financa.svg",
    alt:"icon financa",
    titulo:"Consultoria em BPO",
    descricao:"Administração financeira de empresas",
  },
]
const servicos = [
  {
    key:"1",
    imgUrl:"/icon-checked.svg",
    alt:"icon checked",
    titulo:"Abertura do seu MEI",
  },
  {
    key:"2",
    imgUrl:"/icon-checked.svg",
    alt:"icon checked",
    titulo:"Apuração e emissão mensal do DAS",
  },
  {
    key:"3",
    imgUrl:"/icon-checked.svg",
    alt:"icon checked",
    titulo:"Emissão da guia do parcelamento",
  },
  {
    key:"4",
    imgUrl:"/icon-checked.svg",
    alt:"icon checked",
    titulo:"Emissão de notas fiscais",
  },
  {
    key:"5",
    imgUrl:"/icon-checked.svg",
    alt:"icon checked",
    titulo:"Parcelamento",
  },
  {
    key:"6",
    imgUrl:"/icon-checked.svg",
    alt:"icon checked",
    titulo:"Planejamento",
  },
  {
    key:"7",
    imgUrl:"/icon-checked.svg",
    alt:"icon checked",
    titulo:"Declarações anuais",
  },
]


export default function Main() {
    return (
      <main className="flex flex-col gap-14">

        <SectionHero />

        <div className="flex items-center justify-center lg:hidden">
          <img src="/logo2.svg" alt="" className="my-14" />
        </div>

        <Section          
          titulo="Como funciona"
          descricao="Descomplicando sua declaração e simplificando sua vida."
        > 
          {funcional.map(function (item) {
            return (
              <SectionFuncional
                key={item.key}
                imgUrl={item.imgUrl}
                alt={item.alt}
                titulo={item.titulo}
                descricao={item.descricao}
              />
            );
          })}
        </Section>
        
        <div className='flex flex-col'>
          <img src="/juliana.svg" alt="" className="w-[200px] mx-auto mt-14 lg:hidden" />
          <SectionSobre />
        </div>

        <Section
          id="servicos"           
          titulo="Serviços"
          descricao="Tenha controle do seu negócio, serviços para a gestão eficiente de suas finanças e no cumprimento de suas obrigações fiscais."
        > 
          {servicos.map(function (item) {
            return (
              <SectionServicos
                key={item.key}
                imgUrl={item.imgUrl}
                alt={item.alt}
                titulo={item.titulo}
              />
            );
          })}
        </Section>
        
        <div className="flex flex-col lg:flex-row items-center justify-center gap-6 w-[312px] md:w-[500px] lg:w-[1024px] mx-auto">
          <h1 className="font-bold text-2xl text-center lg:text-4xl lg:text-start lg:w-[380px]">Faça Agora o seu Orçamento!</h1>
          <a target="_blank" rel="noreferrer" href="https://api.whatsapp.com/send?phone=5521973209697&text=Olá,%20Gostaria%20de%20informações%20sobre%20a%20declaração%20de%20imposto%20de%20renda.">
            <button className="text-white font-semibold text-sm drop-shadow-xl 
            bg-brand-color rounded-[50px] px-4 py-2 lg:px-9 lg:py-4
            hover:bg-dark-scale-400 hover:text-brand-color hover:border hover:border-brand-color
            transition ease-in-out delay-150 duration-150 hover:scale-105">
              Entrar em contato
            </button>
          </a>
        </div>
      </main>
    )
}