import { Link } from '@tanstack/react-router'
import { MoonStar, Github } from 'lucide-react'
import { ThemeToggle } from '@/components/ui/theme-toggle'

export function LogoHeader() {
    return (
        <header className='absolute top-4 left-0 right-0 flex items-center justify-between px-4'>
            <Link
                to='/'
                className='text-2xl font-bold flex items-center gap-1 hover:opacity-80 transition-opacity'
            >
                <MoonStar className='size-6 mr-1' />
                <span className='text-foreground/60'>ek</span>(klip)
                <span className='text-foreground/60'>se</span>
            </Link>
            <div className='flex items-center gap-2'>
                <a
                    href='https://github.com/ekkolyth/ekklipse'
                    target='_blank'
                    rel='noopener noreferrer'
                    className='inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-10 w-10'
                    aria-label='View project on GitHub'
                >
                    <Github className='h-4 w-4' />
                </a>
                <ThemeToggle />
            </div>
        </header>
    )
}
