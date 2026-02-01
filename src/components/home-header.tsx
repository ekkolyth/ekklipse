import { Github } from 'lucide-react';
import { ThemeToggle } from '@/components/theme-toggle';

export function HomeHeader() {
  return (
    <header className='absolute top-4 right-4 flex items-center gap-2'>
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
    </header>
  );
}


