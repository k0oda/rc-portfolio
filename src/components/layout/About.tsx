import "@/lib/i18n";

import { useTranslation } from "react-i18next";
import { useTheme } from "next-themes";

import { FaLocationDot, FaCircleDot, FaCode, FaRegCalendarDays, FaCaretRight } from "react-icons/fa6";
import { 
  SiPython,
  SiJavascript,
  SiTypescript,
  SiTailwindcss,
  SiRust,
  SiReact,
  SiDjango,
  SiCelery,
  SiRedis,
  SiSelenium,
  SiPostgresql,
  SiMysql,
  SiSqlite,
  SiMongodb,
  SiClickhouse,
  SiSqlalchemy,
  SiAiohttp,
  SiGit,
  SiDocker,
  SiNginx,
} from "react-icons/si";

import BlurFade from "@/components/ui/blur-fade";
import { MagicCard } from "@/components/ui/magic-card";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { Meteors } from "@/components/ui/meteors";

export function About() {
  const { resolvedTheme } = useTheme();

  const gradientColor = resolvedTheme === "dark" ? "#262626" : "#D9D9D955";

  const timeDiff = Math.abs(new Date().getTime() - new Date('2005-01-18').getTime());

  const age = Math.floor((timeDiff / (1000 * 3600 * 24)) / 365.25);

  const skills = [
    {
      title: "Python",
      icon: <SiPython />,
    },
    {
      title: "TypeScript",
      icon: <SiTypescript />,
    },
    {
      title: "JavaScript",
      icon: <SiJavascript />,
    },
    {
      title: "TailwindCSS",
      icon: <SiTailwindcss />,
    },
    {
      title: "React",
      icon: <SiReact />,
    },
    {
      title: "Rust",
      icon: <SiRust />,
    },
    {
      title: "Django",
      icon: <SiDjango />,
    },
    {
      title: "aiohttp",
      icon: <SiAiohttp />,
    },
    {
      title: "Selenium",
      icon: <SiSelenium />,
    },
    {
      title: "Celery",
      icon: <SiCelery />,
    },
    {
      title: "SQLAlchemy",
      icon: <SiSqlalchemy />,
    },
    {
      title: "MySQL",
      icon: <SiMysql />,
    },
    {
      title: "PostgreSQL",
      icon: <SiPostgresql />,
    },
    {
      title: "SQLite",
      icon: <SiSqlite />,
    },
    {
      title: "MongoDB",
      icon: <SiMongodb />,
    },
    {
      title: "ClickHouse",
      icon: <SiClickhouse />,
    },
    {
      title: "Redis",
      icon: <SiRedis />,
    },
    {
      title: "Git",
      icon: <SiGit />,
    },
    {
      title: "Docker",
      icon: <SiDocker />,
    },
    {
      title: "Nginx",
      icon: <SiNginx />,
    },
  ]

  const { t } = useTranslation();

  return (
    <>
      <div className="select-none container flex flex-col items-center justify-center w-full min-h-screen">
        <BlurFade delay={0.25} inView>
          <h1 className="text-4xl text-center font-bold mt-1">{t("quickInfo")}<span className="text-zinc-500">.</span></h1>
        </BlurFade>
      
        <div className="grid md:grid-cols-2 md:grid-rows-2 gap-10 mt-14">
          <BlurFade delay={0.25 * 3} inView className="w-full h-full row-span-3">
            <MagicCard className="relative h-full" gradientColor={gradientColor}>
              <div className="relative h-full p-5 pb-7">
                <div className="flex items-center">
                    <h3 className="mt-2 mb-4 text-4xl font-bold">{t("aboutMe")}</h3>
                </div>
                <div className="flex flex-col items-start gap-1">
                  <div className="flex items-center gap-2">
                    <FaCircleDot className="dark:text-zinc-500" />
                    <span><span className="dark:text-zinc-400 font-semibold dark:font-normal">{age}</span> {t("yearsOld")}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <FaLocationDot className="dark:text-zinc-500" />
                    <span>{t("basedIn")} <span className="dark:text-zinc-400 font-semibold dark:font-normal">{t("omsk")}, {t("russia")}</span></span>
                  </div>
                  <div className="flex items-center gap-2">
                    <FaCode className="dark:text-zinc-500" />
                    <span><span className="dark:text-zinc-400 font-semibold dark:font-normal">{t("selfTaught")}</span> {t("developmentEnjoyer")}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <FaRegCalendarDays className="dark:text-zinc-500" />
                    <span><span className="dark:text-zinc-400 font-semibold dark:font-normal">6+</span> {t("yearsExperience")}</span>
                  </div>
                  <Separator className="my-2" />
                  <div>
                    <p className="text-pretty">
                      <span className="dark:text-zinc-500 font-bold"><FaCaretRight className="inline" /></span>
                      <span>{t("aboutSumParagraph1")} <span className="dark:text-zinc-400 font-semibold dark:font-normal">{t("batch")}</span>.</span>
                    </p>
                    <p>
                      <span className="dark:text-zinc-500 font-bold"><FaCaretRight className="inline" /></span>
                      <span>{t("aboutSumParagraph2")}</span>
                    </p>
                    <p>
                      <span className="dark:text-zinc-500 font-bold"><FaCaretRight className="inline" /></span>
                      <span>{t("aboutSumParagraph3_1")} <span className="dark:text-zinc-400 font-semibold dark:font-normal">{t("python")}</span>{t("aboutSumParagraph3_2")}</span>
                    </p>
                    <p>
                      <span className="dark:text-zinc-500 font-bold"><FaCaretRight className="inline" /></span>
                      <span>{t("aboutSumParagraph4")}</span>
                    </p>
                    <p>
                      <span className="dark:text-zinc-500 font-bold"><FaCaretRight className="inline" /></span>
                      <span>{t("aboutSumParagraph5")}</span>
                    </p>
                    <p>
                      <span className="dark:text-zinc-500 font-bold"><FaCaretRight className="inline" /></span>
                      <span>
                        {t("aboutSumParagraph6_1")}
                        <span className="dark:text-zinc-400 font-semibold dark:font-normal"> {t("tool")}</span>
                        {t("aboutSumParagraph6_2")}
                        <span className="dark:text-zinc-400 font-semibold dark:font-normal"> {t("master")} </span> {t("and")} <span className="dark:text-zinc-400 font-semibold dark:font-normal">{t("apply")}</span> {t("aboutSumParagraph6_3")}
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            </MagicCard>
          </BlurFade>
          <BlurFade delay={0.25 * 4} inView className="w-full h-full">
            <MagicCard className="relative h-full" gradientColor={gradientColor}>
              <div className="relative h-full p-5 pb-7">
                <div className="flex items-center">
                    <h3 className="mt-2 mb-4 text-4xl font-bold">{t("skills")}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {skills.map((s, idx) => (
                    <BlurFade key={idx} delay={0.25 * (4 + 0.5 * idx)} inView className="m-0 p-0">
                      <Badge variant="secondary" className="flex items-center gap-2 py-2">
                        <span className="dark:text-zinc-400">{s.icon}</span>
                        <span>{s.title}</span>
                      </Badge>
                    </BlurFade>
                  ))}
                </div>
              </div>
              <Meteors number={5} />
            </MagicCard>
          </BlurFade>
          <BlurFade delay={0.25 * 5} inView className="w-full h-full">
            <MagicCard className="relative h-full" gradientColor={gradientColor}>
              <div className="relative h-full p-5 pb-7">
                <div className="flex items-center">
                    <h3 className="mt-2 mb-4 text-4xl font-bold">{t("services")}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  <ul className="space-y-2">
                    <BlurFade delay={0.25 * 5.5} inView className="w-full">
                      <li className="flex items-center gap-2">
                        <span className="dark:text-zinc-500 font-bold"><FaCaretRight /></span>
                        {t("backendEngineering")}
                      </li>
                    </BlurFade>
                    <BlurFade delay={0.25 * 6} inView className="w-full">
                      <li className="flex items-center gap-2">
                        <span className="dark:text-zinc-500 font-bold"><FaCaretRight /></span>
                        {t("frontendCreation")}
                      </li>
                    </BlurFade>
                    <BlurFade delay={0.25 * 6.5} inView className="w-full">
                      <li className="flex items-center gap-2">
                        <span className="dark:text-zinc-500 font-bold"><FaCaretRight /></span>
                        {t("blockchainDevelopment")}
                      </li>
                    </BlurFade>
                    <BlurFade delay={0.25 * 7} inView className="w-full">
                      <li className="flex items-center gap-2">
                        <span className="dark:text-zinc-500 font-bold"><FaCaretRight /></span>
                        {t("automationAndQA")}
                      </li>
                    </BlurFade>
                    <BlurFade delay={0.25 * 7} inView className="w-full">
                      <li className="flex items-center gap-2">
                        <span className="dark:text-zinc-500 font-bold"><FaCaretRight /></span>
                        {t("architecting")}
                      </li>
                    </BlurFade>
                  </ul>
                </div>
              </div>
            </MagicCard>
          </BlurFade>
        </div>
      </div>
    </>
  )
}

export default About;
