export default function Section(props) {
    return (
      <section className="flex flex-col gap-8 lg:gap-14 mx-auto
      w-[312px] md:w-[500px] lg:w-[1024px]">
        <div className="flex flex-col items-center gap-4">
          <h1 className="font-semibold text-2xl lg:text-3xl">{props.titulo}</h1>
          <p className="lg:w-[600px] text-center lg:text-lg">{props.descricao}</p>
        </div>
        <div className="flex flex-col lg:grid lg:grid-cols-3 gap-8
        w-[312px] md:w-[300px] lg:w-[1024px] mx-auto">
          {props.children}
        </div>
      </section>
    );
}