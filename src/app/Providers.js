"use client"
import { ThemeProvider } from 'next-themes'

function Providers({ children }) {
    return (
        <ThemeProvider
            enableSystem={true}
            attribute="class"
        >
            <div className='dark:text-gray-200 dark:bg-gray-900 transition-colors duration-300 min-h-screen select-none'>
            {children}
            </div>
        </ThemeProvider>
    )
}

export default Providers