function MyClockTime()
{
    return (
        <p>
            {new Date().toLocaleTimeString()}
        </p>
    );
}

export default MyClockTime;