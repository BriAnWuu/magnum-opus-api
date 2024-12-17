const socketOnConnect = (io) => {
    io.on("connection", (socket) => {
        console.log("user connected", socket.id);

        setTimeout(() => {
            io.emit('test_broadcast', { message: "testing" });
            console.log('test message sent to', socket.id)
        }, 5000);

        socket.on("disconnect", () => {
            console.log("User disconnected", socket.id);
        })
    });
}



export default socketOnConnect;