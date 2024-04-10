interface Props {
    label: string,
    className: string
}

export default function Window({label, className}: Props) {
    
    return <div className={'ml-10'}>
        <p>{label}</p>
        <div className={className}></div>
    </div>
    
}