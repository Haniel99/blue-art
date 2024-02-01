"use client"
import { AnimatePresence, motion } from "framer-motion";

if (typeof window !== 'undefined') {
    window.history.scrollRestoration = 'manual'
}
const variants = {
    hidden: { opacity: 0, x: 0, y: 20 },
    enter: { opacity: 1, x: 0, y: 0 },
    exit: { opacity: 0, x: -0, y: 20 }
}
const Article = ({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) => {
    return (
        <AnimatePresence
            mode="wait"
            initial={true}
            onExitComplete={() => {
                if (typeof window !== 'undefined') {
                    window.scrollTo({ top: 0 })
                }
            }}
            
        >
            <motion.article
                initial="hidden"
                animate="enter"
                exit="exit"
                variants={variants}
                transition={{ duration: 0.4, type: 'easeInOut' }}
                style={{ position: 'relative' }}
            >
                {children}
            </motion.article>
        </AnimatePresence>
    )
}

export default Article;