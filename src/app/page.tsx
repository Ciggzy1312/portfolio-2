import { AchievementsCard } from "@/components/achievements-card";
import { Avatar } from "@/components/avatar";
import { EntryCard } from "@/components/entry-card";
import { SectionHeading } from "@/components/section-heading";
import {
  achievements,
  connect,
  excitement,
  experience,
  openSource,
  profile,
} from "@/lib/content";

export default function Home() {
  return (
    <div className="mt-8">
      <header>
        <div className="flex items-center gap-2.5">
          <Avatar />
          <h1 className="text-[15px] font-semibold tracking-tight text-neutral-950">
            {profile.name}
          </h1>
        </div>
        <p className="mt-3 text-[13.5px] leading-6 text-neutral-600">
          {profile.bio}
        </p>
      </header>

      <section className="mt-8">
        <SectionHeading>what i do</SectionHeading>
        <div className="space-y-3">
          {experience.map((entry) => (
            <EntryCard key={`${entry.role}-${entry.dates}`} entry={entry} />
          ))}
        </div>
      </section>

      <section className="mt-8">
        <SectionHeading>open source</SectionHeading>
        <div className="space-y-3">
          {openSource.map((entry) => (
            <EntryCard key={`${entry.role}-${entry.org}`} entry={entry} />
          ))}
        </div>
      </section>

      <section className="mt-8">
        <SectionHeading>achievements</SectionHeading>
        <AchievementsCard title="Highlights & Awards" items={achievements} />
      </section>

      <section className="mt-8">
        <SectionHeading>what excites me</SectionHeading>
        <p className="text-[13.5px] leading-6 text-neutral-600">{excitement}</p>
      </section>

      <section className="mt-8">
        <SectionHeading>let&apos;s connect</SectionHeading>
        <p className="text-[13.5px] leading-6 text-neutral-600">{connect.note}</p>
        <ul className="mt-3 flex flex-wrap gap-x-4 gap-y-1 text-[13.5px] leading-6">
          {connect.links.map((link) => (
            <li key={link.label}>
              <a href={link.href} className="text-[#2563eb] hover:underline">
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
