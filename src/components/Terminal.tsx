import { FC } from 'react';
import { ReactTerminal, TerminalContextProvider } from 'react-terminal';

const Terminal: FC = () => {
    const commands = {
        whoami: "La junior Esisar",
        help: () => "Commandes disponibles:"
    };

    return (
        <div className='p-10 px-48'>
            <TerminalContextProvider>
                <ReactTerminal
                    commands={commands}
                    welcomeMessage="Bienvenue dans le terminal!"
                    prompt="$"
                    theme="material-light"
                    errorMessage="Commande non trouvée!"
                />
            </TerminalContextProvider>
        </div>
    );
}

export default Terminal;
