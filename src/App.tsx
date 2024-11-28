import './App.css'

import { cn } from "@/lib/utils";

import { FaGithub, FaStackOverflow, FaTelegramPlane, FaLinkedinIn, FaFileDownload } from "react-icons/fa";

import GridPattern from "@/components/ui/grid-pattern";
import BoxReveal from "@/components/ui/box-reveal";
import { FlipWords } from "@/components/ui/flip-words";
import { Button } from '@/components/ui/button';
import { ModeToggle } from '@/components/mode-toggle';

export function App() {
  return (
    <>
      <div className="container w-full h-screen place-content-center">
        <div className='absolute top-10 right-10'>
          <ModeToggle />
        </div>
        <div className="flex flex-col justify-items-start items-left">
          <BoxReveal boxColor={"#64748b"} duration={0.5}>
            <h2 className="text-2xl">
              Hi <span className='wave-animation'>👋</span>
            </h2>
          </BoxReveal>

          <BoxReveal boxColor={"#64748b"} duration={0.5}>
            <p className="text-6xl font-semibold">
              I'm Eugene Kuleshov<span className="text-slate-500">.</span>
            </p>
          </BoxReveal>

          <BoxReveal boxColor={"#64748b"} duration={0.5}>
            <div className="text-4xl flex items-center mt-2">
              <FlipWords
                className="pl-0 font-bold text-slate-500 dark:text-slate-500"
                words={["Python", "Django", "Backend", "Software"]}
              />
              <p>developer</p>
            </div>
          </BoxReveal>
          
          <div className='mt-10'>
            <BoxReveal boxColor={"#64748b"} duration={0.5}>
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
                  <a className='h-auto w-auto' href="#">resume <FaFileDownload /></a>
                </Button>
              </div>
            </BoxReveal>
          </div>
        </div>
        
        <GridPattern
            width={20}
            height={20}
            x={-1}
            y={-1}
            className={cn(
              "[mask-image:linear-gradient(to_bottom_right,white,transparent,transparent)] ",
            )}
          />
      </div>
    </>
  )
}

export default App
