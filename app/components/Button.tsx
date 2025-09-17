export const Button = ({
    label,
    backgroundColor ='blue',
    children
}: {
    label: string,
    backgroundColor?: string,
    children?: React.ReactNode
}) => {
    const style = {
        paddingLeft: '10px',
        paddingRight: '10px',
        paddingTop: '5px',
        paddingBottom: '5px',
        backgroundColor: backgroundColor,
        color: 'white'
    }

    return <button className="button">
        {children != null ? children : label}
    </button>
}