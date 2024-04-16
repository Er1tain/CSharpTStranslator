interface Props {
    label: string,
    className: string,
    children: any
}

export default function Window({label, className,children}: Props) {
    
    return <div className={'ml-10'}>
        <p>{label}</p>
        <div className={className}>
            
            {children}
        </div>
    </div>
    
}