import { useTheme } from '@/components/providers/theme-provider'
import { Button } from '@/components/ui/button'
import { Moon, Sun } from 'lucide-react'

export function ThemeToggle() {
    const { resolvedTheme, setTheme } = useTheme()
    return (
        <Button
            variant='ghost'
            size='icon'
            onClick={() =>
                setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')
            }
        >
            {resolvedTheme === 'dark' ? (
                <Moon className='h-4 w-4' />
            ) : (
                <Sun className='h-4 w-4' />
            )}
        </Button>
    )
}
