interface TimelineProps {
  year: number;
  date?: `${number}/${number}/${number}`;
  event: string;
}

const TimelineItem: TimelineProps[] = [
  {
    year: 2024,
    date: "2024/03/31",
    event: "University entrance. Learning computer science.",
  },
  {
    year: 2021,
    event: "High School Entrance.",
  },
  {
    year: 2005,
    date: "2005/09/02",
    event: "Be born in Tokyo!",
  },
];

export default function Timeline() {
  return (
    <div>
      <h2>Timeline</h2>
      {TimelineItem.sort((a, b) => b.year - a.year).map((i) => (
        <div title={i.date} key={i.year}>
          <p>
            {i.year}: {i.event}
          </p>
        </div>
      ))}
    </div>
  );
}
