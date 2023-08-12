import { useState, useEffect, useRef } from 'react';

export const Terminal = () => {

    const [text, setText] = useState('');
    const [isAnimationStarted, setAnimationStarted] = useState(false);
    const terminalRef = useRef<HTMLDivElement>(null);


    const isElementInViewport = (el: HTMLElement) => {
        const rect = el.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }
    
    const typeText = (fullText: string) => {
        const lines = fullText.split('\n');
        let lineIndex = 0;
        
        const typing = setInterval(() => {
            setText(prevText => prevText + '\n' + lines[lineIndex]);
            lineIndex++;
    
            if (lineIndex === lines.length) {
                clearInterval(typing);
            }
        }, 600);
    }
    
    

    useEffect(() => {
        const handleScroll = () => {
            if (terminalRef.current && !isAnimationStarted && isElementInViewport(terminalRef.current)) {
                setAnimationStarted(true);
                typeText('nmap entreprise \n Starting Nmap 7.80 ( https://nmap.org )\n Another output line');
            }
        }

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [isAnimationStarted]);

    return ( 
        <div className="w-1/2 mx-auto" ref={terminalRef}>
            <div className="w-full shadow-2xl subpixel-antialiased rounded h-64 bg-black border-black mx-auto">
                <div className="flex items-center h-6 rounded-t bg-gray-100 border-b border-gray-500 text-center text-black" id="headerTerminal">
                    <div className="flex ml-2 items-center text-center border-red-900 bg-red-500 shadow-inner rounded-full w-3 h-3" id="closebtn">
                </div>
                <div className="ml-2 border-yellow-900 bg-yellow-500 shadow-inner rounded-full w-3 h-3" id="minbtn">
                </div>
                <div className="ml-2 border-green-900 bg-green-500 shadow-inner rounded-full w-3 h-3" id="maxbtn">
                </div>
                <div className="mx-auto pr-16" id="terminaltitle">
                    <p className="text-center text-sm">Terminal</p>
                </div>

                </div>
                <div className="pl-1 pt-1 h-auto text-green-200 font-mono text-xs bg-black" id="console">
                    <p className="pb-1">Last login: Wed Sep 25 09:11:04 on ttys002</p>
                    {text.split('\n').map((line, index) => (
                        line.startsWith(' ') ? 
                        <p key={index} className="pb-1">{line.trim()}</p> :
                        <p key={index} className="pb-1">junior@esisar:~$ {line}</p>
                    ))}
                </div>
            </div>
            
        </div>
    );
}