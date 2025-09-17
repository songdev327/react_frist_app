export const MyEvent = () => {
    return (
        <>
            <h1>My Event Page</h1>
            <button onClick={() => alert("Helloworld")}>
                Click Me
            </button>
            <div>
                <input type="checkbox"
                    onChange={(e) => alert(e.target.checked)} />
            </div>

        </>
    )
}