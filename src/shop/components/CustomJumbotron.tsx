
interface Props {
    title:string;
    subTitle?:string;
}

export const CustomJumbotron = ({title, subTitle}: Props) => {
    const defaultSubTitle = 'Explora nuestra colección de productos inspirados en el estilo de vida de Tesla. Desde camisetas hasta accesorios, encuentra el artículo perfecto para expresar tu pasión por la innovación y el diseño futurista.'
  return (
    <section className="py-10 px-4 lg:px-8 bg-muted/30">
        <div className="container mx-auto text-center">
          <h1 className="font-mnontserrat text-2xl lg:text-5xl  tracking-tight mb-6">
            {title}
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            {subTitle || defaultSubTitle}
          </p>
        </div>
      </section>
  )
}
