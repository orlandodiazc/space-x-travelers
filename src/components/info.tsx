interface Info {
  title: string;
  description: string;
}

export default function Info({ title, description }: Info) {
  return (
    <div className="flex flex-col gap-1">
      <span className="text-white">{title}</span>
      <span className="text-muted-foreground">{description}</span>
    </div>
  );
}
