interface TextAnimatedGradientProps {
    children: React.ReactNode;
    fontSize?: string; // Nueva prop para el tamaño del texto
}

const TextAnimatedGradient = ({ children, fontSize }: TextAnimatedGradientProps) => {
    return (
        <span className={`inline-flex scale-110 animate-text-gradient bg-gradient-to-br from-[#b2a8fd] via-[#8678f9] to-[#c7d2fe] bg-[200%_auto] bg-clip-text text-${fontSize || 'xl'} text-transparent`}>
            {children}
        </span>
    );
};

export default TextAnimatedGradient;
