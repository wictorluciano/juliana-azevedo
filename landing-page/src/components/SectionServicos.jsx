export default function SectionServicos(props) {
    return (
        <div id="servicos"  className="flex items-center justify-start gap-2">
          <img src={props.imgUrl} alt={props.alt} />
          <p className="font-normal text-sm">{props.titulo}</p>
        </div>
    )
}