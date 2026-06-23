interface HeroProps {
  title: string;
  subtitle: string;
  classname?: string;
}

export function Hero({ title, subtitle, classname }: HeroProps) {
  return (
    <div
      className={`flex flex-col items-center justify-center py-20 rounded-md bg-linear-to-t from-background to-primary/10 {classname}`}
    >
      <h1 className="text-5xl font-bold {classname}">{title}</h1>
      {subtitle && (
        <p className="text-2xl font-light text-foreground">{subtitle}</p>
      )}
    </div>
  );
}
