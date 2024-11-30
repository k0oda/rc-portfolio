import "@/lib/i18n";

import { useTranslation } from "react-i18next";

import { FaGithub, FaStackOverflow, FaTelegramPlane, FaLinkedinIn, FaFileDownload } from "react-icons/fa";

import BoxReveal from "@/components/ui/box-reveal";
import { FlipWords } from "@/components/ui/flip-words";
import { Button } from '@/components/ui/button';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"

export function Hero() {
  const { t, i18n } = useTranslation();

  const resume = i18n.language === "ru" ? "resume-ru.pdf" : "resume-en.pdf";

  return (
    <>
      <div className="select-none container w-full min-h-screen place-content-center">
        <div className="flex flex-col justify-items-start items-left">
          <BoxReveal boxColor={"#71717A"} duration={0.5}>
            <h2 className="text-2xl">
              {t("hi")} <span className='wave-animation'>👋</span>
            </h2>
          </BoxReveal>
          <TooltipProvider>
            <Tooltip>
              <BoxReveal boxColor={"#71717A"} duration={0.5}>
                <TooltipTrigger>
                    <p className="text-4xl md:text-6xl text-left font-semibold">
                      {t("im")}<span className="text-zinc-500">.</span>
                    </p>
                </TooltipTrigger>
              </BoxReveal>
              <TooltipContent className="bg-accent text-accent-foreground select-none">
                a.k.a. <span className="text-zinc-400 font-bold">@k0oda</span>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>

          <BoxReveal boxColor={"#71717A"} duration={0.5}>
            <div className="text-2xl md:text-4xl flex items-center mt-2">
              <FlipWords
                className="pl-0 font-bold text-zinc-500 dark:text-zinc-500"
                words={["Python", "Django", "Backend", "Software", "Blockchain"]}
              />
              <p>{t("developer")}</p>
            </div>
          </BoxReveal>
          
          <div className='mt-10'>
            <BoxReveal boxColor={"#71717A"} duration={0.5}>
              <div className="flex items-center content-center space-x-1">
                <Button asChild variant="ghost">
                  <a className='h-auto w-auto' href="https://github.com/k0oda" target='_blank'><FaGithub /></a>
                </Button>
                <Button asChild variant="ghost">
                  <a className='h-auto w-auto' href="https://t.me/dak0oda" target='_blank'><FaTelegramPlane /></a>
                </Button>
                <Button asChild variant="ghost">
                  <a className='h-auto w-auto' href="https://www.linkedin.com/in/evgenii-kuleshov-0602a4b2/" target='_blank'><FaLinkedinIn /></a>
                </Button>
                <Button asChild variant="ghost">
                  <a className='h-auto w-auto' href="https://stackoverflow.com/users/10961991/k0oda" target='_blank'><FaStackOverflow /></a>
                </Button>
                <Button asChild variant="ghost">
                  <a className='h-auto w-auto' href={resume} target="_blank">{t("resume")} <FaFileDownload /></a>
                </Button>
              </div>
            </BoxReveal>
          </div>
        </div>
      </div>
    </>
  )
}

export default Hero;
