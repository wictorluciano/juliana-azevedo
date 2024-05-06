export default function SectionFuncional(props) {
    return (
        <div id="funciona" className="flex flex-col items-center justify-center gap-6 mx-auto">
          <img src={props.imgUrl} alt={props.alt} />
          <h2 className="font-semibold text-base">{props.titulo}</h2>
          <p className="font-normal text-sm text-center">{props.descricao}</p>
        </div>
    )
}